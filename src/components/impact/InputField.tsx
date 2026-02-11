import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface InputFieldProps {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
}

export function InputField({ label, value, onChange, prefix = "", suffix = "", min, max, step = 1 }: InputFieldProps) {
  return (
    <div className="space-y-1">
      <Label className="text-xs font-mono text-muted-foreground">{label}</Label>
      <div className="flex items-center gap-2">
        {prefix && <span className="text-xs text-muted-foreground/60 shrink-0">{prefix}</span>}
        <Input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="h-8 text-xs font-mono"
          min={min}
          max={max}
          step={step}
        />
        {suffix && <span className="text-xs text-muted-foreground/60 shrink-0">{suffix}</span>}
      </div>
    </div>
  );
}

interface SliderFieldProps {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  suffix?: string;
}

export function SliderField({ label, value, onChange, min, max, step, suffix = "%" }: SliderFieldProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label className="text-xs font-mono text-muted-foreground">{label}</Label>
        <span className="text-xs font-mono text-accent font-semibold">{value}{suffix}</span>
      </div>
      <Slider value={[value]} onValueChange={([v]) => onChange(v)} min={min} max={max} step={step} />
    </div>
  );
}
