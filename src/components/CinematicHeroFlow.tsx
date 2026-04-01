import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Hash, ShieldCheck, Lock, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  { id: "record", icon: FileText, label: "Event Recorded", sublabel: "Actor · Action · Authority", color: "text-primary" },
  { id: "hash", icon: Hash, label: "SHA-256 Hashed", sublabel: "Cryptographic integrity sealed", color: "text-accent" },
  { id: "verify", icon: ShieldCheck, label: "Verified", sublabel: "Independent proof generated", color: "text-success" },
  { id: "immutable", icon: Lock, label: "Immutable", sublabel: "Append-only · Permanent", color: "text-[hsl(42,85%,55%)]" },
];

export function CinematicHeroFlow() {
  const [activeStep, setActiveStep] = useState(-1);
  const [hash, setHash] = useState("");

  const generateHash = useCallback(() => {
    const chars = "0123456789abcdef";
    return Array.from({ length: 16 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  }, []);

  useEffect(() => {
    const cycle = () => {
      setActiveStep(0);
      setHash("");
      const timers = [
        setTimeout(() => { setActiveStep(1); setHash(generateHash()); }, 1200),
        setTimeout(() => setActiveStep(2), 2400),
        setTimeout(() => setActiveStep(3), 3600),
        setTimeout(() => { setActiveStep(-1); setHash(""); }, 6000),
      ];
      return timers;
    };

    let timers = cycle();
    const interval = setInterval(() => { timers = cycle(); }, 6500);

    return () => {
      clearInterval(interval);
      timers.forEach(clearTimeout);
    };
  }, [generateHash]);

  return (
    <div className="w-full">
      {/* Pipeline */}
      <div className="flex items-center justify-between gap-1 sm:gap-2">
        {steps.map((step, i) => {
          const isActive = activeStep >= i;
          const isCurrent = activeStep === i;
          const StepIcon = step.icon;

          return (
            <div key={step.id} className="flex items-center flex-1">
              <motion.div
                className={`relative flex flex-col items-center text-center flex-1 p-2 sm:p-3 rounded-lg border transition-all duration-500 ${
                  isCurrent
                    ? "bg-white/15 border-white/30 shadow-lg shadow-white/5"
                    : isActive
                    ? "bg-white/8 border-white/15"
                    : "bg-white/3 border-white/5"
                }`}
                animate={isCurrent ? { scale: [1, 1.03, 1] } : { scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <motion.div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mb-1.5 transition-all duration-500 ${
                    isActive ? "bg-white/15" : "bg-white/5"
                  }`}
                  animate={isCurrent ? { y: [0, -3, 0] } : {}}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <StepIcon className={`h-4 w-4 sm:h-5 sm:w-5 transition-all duration-500 ${
                    isActive ? "text-white" : "text-white/25"
                  }`} />
                </motion.div>
                <p className={`text-[9px] sm:text-[10px] font-semibold tracking-wide transition-all duration-500 ${
                  isActive ? "text-white" : "text-white/25"
                }`}>
                  {step.label}
                </p>
                <p className={`text-[7px] sm:text-[8px] mt-0.5 transition-all duration-500 hidden sm:block ${
                  isActive ? "text-white/50" : "text-white/15"
                }`}>
                  {step.sublabel}
                </p>

                {isCurrent && (
                  <motion.div
                    className="absolute -bottom-px left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                )}
              </motion.div>

              {i < steps.length - 1 && (
                <div className="w-4 sm:w-8 flex items-center justify-center shrink-0">
                  <motion.div
                    className="h-px w-full"
                    style={{
                      background: activeStep > i
                        ? "linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.4))"
                        : "linear-gradient(90deg, rgba(255,255,255,0.08), rgba(255,255,255,0.08))",
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Hash display */}
      <AnimatePresence>
        {hash && (
          <motion.div
            className="mt-3 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-[9px] font-mono text-white/30">SHA-256:</span>
            <span className="text-[9px] font-mono text-primary tracking-wider">{hash}...</span>
            {activeStep >= 2 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-1"
              >
                <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                <span className="text-[9px] font-mono text-emerald-400">VERIFIED</span>
              </motion.span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
