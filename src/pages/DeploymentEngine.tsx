import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import { PatentNotice } from "@/components/PatentNotice";
import {
  Globe, Server, Shield, CheckCircle2, ArrowRight, Activity,
  Database, Eye, Network, BarChart3, Cpu, Lock, Zap, Building2,
} from "lucide-react";

const countries = [
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "AE", name: "UAE", flag: "🇦🇪" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "KE", name: "Kenya", flag: "🇰🇪" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
];

const modules = [
  { id: "core", name: "Core Ledger", icon: Database, desc: "Append-only evidence backbone" },
  { id: "verify", name: "Verification API", icon: Eye, desc: "Public integrity validation" },
  { id: "federation", name: "Federation Node", icon: Network, desc: "Cross-border governance" },
  { id: "compliance", name: "Compliance Suite", icon: Shield, desc: "Standards alignment engine" },
  { id: "monitor", name: "Integrity Monitor", icon: BarChart3, desc: "Real-time chain auditing" },
  { id: "gateway", name: "Public Gateway", icon: Globe, desc: "External trust portal" },
];

const deploySteps = [
  { label: "Provisioning infrastructure", detail: "Sovereign cloud nodes initialized" },
  { label: "Deploying modules", detail: "Selected components activated" },
  { label: "Configuring security", detail: "RLS, encryption, and role isolation" },
  { label: "Generating architecture", detail: "System topology and data flows" },
  { label: "Running integrity checks", detail: "SHA-256 chain validation" },
  { label: "Deployment complete", detail: "System operational" },
];

export default function DeploymentEngine() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [deploying, setDeploying] = useState(false);
  const [deployStep, setDeployStep] = useState(-1);
  const [deployed, setDeployed] = useState(false);
  const [liveEvents, setLiveEvents] = useState<{ id: string; action: string; hash: string; time: string }[]>([]);

  const toggleModule = (id: string) => {
    setSelectedModules(prev => prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]);
  };

  const startDeployment = () => {
    if (!selectedCountry || selectedModules.length === 0) return;
    setDeploying(true);
    setDeployed(false);
    setDeployStep(0);
    setLiveEvents([]);

    deploySteps.forEach((_, i) => {
      setTimeout(() => {
        setDeployStep(i);
        if (i === deploySteps.length - 1) {
          setTimeout(() => {
            setDeploying(false);
            setDeployed(true);
            // Start live events simulation
            const events = [
              { action: "Budget approval recorded", hash: "a3f2e1" },
              { action: "Inspection report sealed", hash: "7bc4d9" },
              { action: "Policy amendment verified", hash: "e8f1a2" },
              { action: "Procurement event logged", hash: "4d9c7b" },
            ];
            events.forEach((ev, j) => {
              setTimeout(() => {
                setLiveEvents(prev => [...prev, {
                  id: `EVT-${String(j + 1).padStart(4, "0")}`,
                  action: ev.action,
                  hash: ev.hash + Array.from({ length: 10 }, () => Math.floor(Math.random() * 16).toString(16)).join(""),
                  time: "Just now",
                }]);
              }, j * 800);
            });
          }, 500);
        }
      }, i * 1200);
    });
  };

  const countryObj = countries.find(c => c.code === selectedCountry);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Deployment Engine — GRGF"
        description="Deploy sovereign governance infrastructure in minutes. Select country, modules, and activate your GRGF instance."
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,20%,10%)] via-[hsl(215,25%,14%)] to-[hsl(212,30%,18%)]" />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 py-16 md:py-24 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 text-[10px] font-mono text-white/50 tracking-wider mb-6">
              <Cpu className="h-3 w-3" /> DEPLOYMENT ENGINE
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Deploy Sovereign Infrastructure
            </h1>
            <p className="text-sm md:text-base text-white/50 max-w-xl mx-auto">
              Select your jurisdiction, choose modules, and activate a full GRGF governance instance.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12">
        {/* Step 1: Country */}
        <FadeIn>
          <div className="mb-10">
            <h2 className="text-lg font-bold text-foreground mb-1">1. Select Jurisdiction</h2>
            <p className="text-sm text-muted-foreground mb-4">Choose your deployment region for data sovereignty compliance.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {countries.map(c => (
                <motion.button
                  key={c.code}
                  onClick={() => setSelectedCountry(c.code)}
                  className={`p-4 rounded-lg border text-left transition-all ${
                    selectedCountry === c.code
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-border hover:border-primary/30"
                  }`}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="text-2xl">{c.flag}</span>
                  <p className="text-sm font-semibold mt-2 text-foreground">{c.name}</p>
                  <p className="text-[10px] text-muted-foreground font-mono">{c.code}</p>
                </motion.button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Step 2: Modules */}
        <FadeIn delay={100}>
          <div className="mb-10">
            <h2 className="text-lg font-bold text-foreground mb-1">2. Select Modules</h2>
            <p className="text-sm text-muted-foreground mb-4">Choose which governance infrastructure components to deploy.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {modules.map(m => {
                const Icon = m.icon;
                const selected = selectedModules.includes(m.id);
                return (
                  <motion.button
                    key={m.id}
                    onClick={() => toggleModule(m.id)}
                    className={`p-4 rounded-lg border text-left transition-all ${
                      selected
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-border hover:border-primary/30"
                    }`}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        selected ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{m.name}</p>
                        <p className="text-[10px] text-muted-foreground">{m.desc}</p>
                      </div>
                      {selected && <CheckCircle2 className="h-4 w-4 text-primary ml-auto shrink-0" />}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* Step 3: Deploy */}
        <FadeIn delay={200}>
          <div className="mb-10">
            <h2 className="text-lg font-bold text-foreground mb-1">3. Activate Deployment</h2>
            <div className="flex flex-col sm:flex-row items-start gap-4 mt-4">
              <motion.button
                onClick={startDeployment}
                disabled={!selectedCountry || selectedModules.length === 0 || deploying}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                whileTap={{ scale: 0.97 }}
              >
                {deploying ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                      <Cpu className="h-4 w-4" />
                    </motion.div>
                    Deploying...
                  </>
                ) : (
                  <>
                    <Server className="h-4 w-4" /> Deploy System
                  </>
                )}
              </motion.button>
              {selectedCountry && selectedModules.length > 0 && (
                <div className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">{countryObj?.flag} {countryObj?.name}</span> · {selectedModules.length} module{selectedModules.length !== 1 ? "s" : ""} selected
                </div>
              )}
            </div>
          </div>
        </FadeIn>

        {/* Deployment Progress */}
        <AnimatePresence>
          {(deploying || deployed) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10"
            >
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Activity className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">Deployment Progress</span>
                </div>
                <div className="space-y-3">
                  {deploySteps.map((step, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={deployStep >= i ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.1 }}
                    >
                      {deployStep > i ? (
                        <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
                      ) : deployStep === i ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        >
                          <Cpu className="h-5 w-5 text-primary shrink-0" />
                        </motion.div>
                      ) : (
                        <div className="w-5 h-5 rounded-full border border-border shrink-0" />
                      )}
                      <div>
                        <p className={`text-sm font-medium ${deployStep >= i ? "text-foreground" : "text-muted-foreground"}`}>
                          {step.label}
                        </p>
                        <p className="text-[10px] text-muted-foreground">{step.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Live Events after deployment */}
        <AnimatePresence>
          {deployed && liveEvents.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10"
            >
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">Live Events — {countryObj?.flag} {countryObj?.name}</span>
                </div>
                <div className="space-y-2">
                  {liveEvents.map((ev, i) => (
                    <motion.div
                      key={ev.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border"
                    >
                      <div className="flex items-center gap-3">
                        <Lock className="h-3.5 w-3.5 text-success" />
                        <div>
                          <p className="text-xs font-medium text-foreground">{ev.action}</p>
                          <p className="text-[10px] font-mono text-muted-foreground">{ev.id} · {ev.time}</p>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono text-primary hidden sm:block">{ev.hash}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <PatentNotice />
    </div>
  );
}
