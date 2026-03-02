import { Mic, Brain, Bell } from "lucide-react";
import { AnimateOnView } from "./animate-on-view";

const steps = [
  {
    number: "1",
    title: "Record",
    description:
      "Finish a call or coffee? Tap record and talk for 30 seconds about what you discussed.",
    Icon: Mic,
    gradient: "from-coral to-coral-dark",
  },
  {
    number: "2",
    title: "AI Extracts",
    description:
      "AI pulls out names, dates, follow-ups, and key details. No typing, no tagging.",
    Icon: Brain,
    gradient: "from-primary to-primary-dark",
  },
  {
    number: "3",
    title: "Get Reminded",
    description:
      "Events and reminders appear on your calendar automatically. Never drop the ball.",
    Icon: Bell,
    gradient: "from-amber-400 to-amber-600",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateOnView>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              How it works
            </h2>
            <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
              Three simple steps to never lose track of a relationship again.
            </p>
          </div>
        </AnimateOnView>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-coral via-primary to-amber-400 opacity-20" />

          {steps.map((step, i) => (
            <AnimateOnView key={step.number} delay={i * 150}>
              <div className="text-center relative">
                {/* Number badge */}
                <div
                  className={`mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg relative z-10`}
                >
                  <step.Icon className="w-6 h-6 text-white" />
                </div>
                <div className="mt-1 mb-4">
                  <span className="text-xs font-bold text-muted uppercase tracking-wider">
                    Step {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-muted leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
