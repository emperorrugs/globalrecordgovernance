import { FadeIn } from "./FadeIn";

const regions = [
  { id: "na", label: "North America", x: 170, y: 140, status: "active", detail: "Canada — Pilot Active" },
  { id: "eu", label: "Europe", x: 430, y: 115, status: "planned", detail: "EU — Framework Alignment" },
  { id: "af", label: "Africa", x: 430, y: 230, status: "planned", detail: "AU — DPI Assessment" },
  { id: "me", label: "Middle East", x: 490, y: 170, status: "planned", detail: "GCC — Evaluation Phase" },
  { id: "sa", label: "South America", x: 240, y: 280, status: "planned", detail: "LATAM — Engagement" },
  { id: "ap", label: "Asia-Pacific", x: 600, y: 200, status: "planned", detail: "ASEAN — Standards Review" },
];

function PulseNode({ x, y, status, label, detail }: { x: number; y: number; status: string; label: string; detail: string }) {
  const isActive = status === "active";
  return (
    <g className="cursor-pointer group">
      {isActive && (
        <circle cx={x} cy={y} r="16" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.3">
          <animate attributeName="r" values="8;20;8" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
        </circle>
      )}
      <circle
        cx={x} cy={y}
        r={isActive ? 6 : 4}
        fill={isActive ? "hsl(var(--accent))" : "hsl(var(--muted-foreground) / 0.3)"}
        className="transition-all duration-300"
      />
      {isActive && (
        <circle cx={x} cy={y} r="3" fill="hsl(var(--accent-foreground))" />
      )}
      <text
        x={x} y={y - 14}
        textAnchor="middle"
        className="fill-current text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ fontSize: "9px", fontFamily: "var(--mono)" }}
      >
        {detail}
      </text>
      <text
        x={x} y={y + 20}
        textAnchor="middle"
        className="fill-current"
        style={{
          fontSize: "8px",
          fontFamily: "var(--mono)",
          fill: isActive ? "hsl(var(--accent))" : "hsl(var(--muted-foreground) / 0.4)",
          letterSpacing: "0.08em",
          textTransform: "uppercase" as const,
        }}
      >
        {label}
      </text>
    </g>
  );
}

export function GlobalFederationMap() {
  return (
    <FadeIn className="governance-card-elevated overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-1">Global Federation Network</p>
          <p className="text-caption text-muted-foreground">Real-time institutional deployment status</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-overline">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            Active
          </span>
          <span className="flex items-center gap-1.5 text-overline text-muted-foreground/50">
            <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
            Planned
          </span>
        </div>
      </div>
      <svg viewBox="0 0 760 400" className="w-full h-auto" style={{ minHeight: "240px" }}>
        {/* Simplified world outline */}
        <defs>
          <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.05" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <rect fill="url(#mapGrad)" width="760" height="400" rx="4" />

        {/* Grid lines */}
        {[0,1,2,3,4,5,6,7].map(i => (
          <line key={`h${i}`} x1="0" y1={i * 50 + 25} x2="760" y2={i * 50 + 25} stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3" />
        ))}
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(i => (
          <line key={`v${i}`} x1={i * 50 + 30} y1="0" x2={i * 50 + 30} y2="400" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3" />
        ))}

        {/* Simplified continent shapes */}
        {/* North America */}
        <path d="M100,80 Q120,70 160,75 Q200,80 220,100 Q230,130 220,160 Q200,180 180,200 Q160,210 140,200 Q120,180 110,160 Q100,140 95,120 Q90,100 100,80Z" fill="hsl(var(--muted-foreground))" opacity="0.06" />
        {/* South America */}
        <path d="M200,220 Q220,210 240,220 Q260,240 270,270 Q275,300 265,330 Q250,350 230,340 Q210,320 205,290 Q200,260 200,220Z" fill="hsl(var(--muted-foreground))" opacity="0.06" />
        {/* Europe */}
        <path d="M380,70 Q400,65 430,70 Q460,80 470,100 Q475,120 465,140 Q450,150 430,145 Q410,140 395,130 Q380,120 375,100 Q370,85 380,70Z" fill="hsl(var(--muted-foreground))" opacity="0.06" />
        {/* Africa */}
        <path d="M400,160 Q420,155 445,160 Q465,175 475,200 Q480,230 475,260 Q465,290 445,310 Q425,315 410,300 Q395,280 390,250 Q385,220 388,195 Q392,175 400,160Z" fill="hsl(var(--muted-foreground))" opacity="0.06" />
        {/* Asia */}
        <path d="M490,70 Q530,60 580,70 Q630,80 660,100 Q680,120 670,150 Q660,170 640,185 Q610,200 580,195 Q550,190 530,175 Q510,160 500,140 Q490,120 485,100 Q480,80 490,70Z" fill="hsl(var(--muted-foreground))" opacity="0.06" />
        {/* Australia */}
        <path d="M610,280 Q630,270 660,275 Q680,285 685,300 Q680,320 660,330 Q640,335 625,325 Q610,310 608,295 Q607,285 610,280Z" fill="hsl(var(--muted-foreground))" opacity="0.06" />

        {/* Connection lines between nodes */}
        <line x1="170" y1="140" x2="430" y2="115" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.2" strokeDasharray="4,4">
          <animate attributeName="stroke-dashoffset" values="0;-8" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="430" y1="115" x2="490" y2="170" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" opacity="0.1" strokeDasharray="4,4" />
        <line x1="430" y1="115" x2="600" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" opacity="0.1" strokeDasharray="4,4" />

        {/* Nodes */}
        {regions.map(r => (
          <PulseNode key={r.id} {...r} />
        ))}
      </svg>
    </FadeIn>
  );
}
