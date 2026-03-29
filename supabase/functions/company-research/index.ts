import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { companyName } = await req.json();
    if (!companyName) {
      return new Response(JSON.stringify({ error: "Company name is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "AI service not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const systemPrompt = `You are a company research analyst. Given a company or organization name, return factual information about it. You must respond with a JSON object using the tool provided. Use your knowledge to provide the best estimates.

For the sector field, use EXACTLY one of these values: transit, healthcare, government, finance, infrastructure, education, justice, municipal

For the scale field, use EXACTLY one of these values based on the organization size:
- 0.25 for small organizations (<500 employees or <$50M revenue)
- 0.5 for medium organizations (500-5000 employees or $50M-$500M revenue)
- 1 for large organizations (5000-25000 employees or $500M-$5B revenue)
- 2 for very large organizations (25000-100000 employees or $5B-$50B revenue)
- 5 for national-scale organizations (100000+ employees or $50B+ revenue)
- 10 for multi-national organizations (250000+ employees or $100B+ revenue)

For annualBudget, provide the annual operating budget/revenue in millions of USD.
For employeeCount, provide the approximate number of employees.
For country, provide the country where the organization is headquartered.
For description, provide a 1-2 sentence description of what the organization does.
For founded, provide the year the organization was founded.
For keyRisks, provide 3-5 key governance risks this type of organization typically faces.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Research this organization: "${companyName}". Provide all available information.` },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "provide_company_data",
              description: "Return structured company research data",
              parameters: {
                type: "object",
                properties: {
                  name: { type: "string", description: "Official full name of the organization" },
                  sector: { type: "string", enum: ["transit", "healthcare", "government", "finance", "infrastructure", "education", "justice", "municipal"] },
                  scale: { type: "number", enum: [0.25, 0.5, 1, 2, 5, 10] },
                  annualBudget: { type: "number", description: "Annual operating budget/revenue in millions USD" },
                  employeeCount: { type: "number", description: "Approximate number of employees" },
                  country: { type: "string", description: "Headquarters country" },
                  description: { type: "string", description: "1-2 sentence description" },
                  founded: { type: "number", description: "Year founded" },
                  keyRisks: {
                    type: "array",
                    items: { type: "string" },
                    description: "3-5 key governance risks for this organization",
                  },
                },
                required: ["name", "sector", "scale", "annualBudget", "employeeCount", "country", "description", "keyRisks"],
                additionalProperties: false,
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "provide_company_data" } },
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded, please try again shortly." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add funds." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const text = await response.text();
      console.error("AI gateway error:", response.status, text);
      return new Response(JSON.stringify({ error: "AI research service unavailable" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall?.function?.arguments) {
      return new Response(JSON.stringify({ error: "Could not research this organization" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const companyData = JSON.parse(toolCall.function.arguments);

    return new Response(JSON.stringify({ success: true, data: companyData }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("company-research error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
