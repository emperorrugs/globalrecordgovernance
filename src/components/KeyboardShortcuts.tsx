import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function KeyboardShortcuts() {
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Don't trigger when typing in inputs
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) return;

      if (e.key === "?" && !e.ctrlKey && !e.metaKey) {
        navigate("/sitemap");
      }
      if (e.key === "h" && !e.ctrlKey && !e.metaKey) {
        navigate("/");
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [navigate]);

  return null;
}
