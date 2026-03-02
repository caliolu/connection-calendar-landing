import { Mic, Calendar, Bell, Sparkles } from "lucide-react";
import { AnimateOnView } from "./animate-on-view";

const features = [
  {
    title: "Voice-First Notes",
    description:
      "Talk naturally after any interaction. No forms, no friction. Just speak and move on with your day.",
    Icon: Mic,
    color: "text-coral",
    bg: "bg-coral/10",
    border: "border-coral/20",
  },
  {
    title: "AI Calendar",
    description:
      "Important dates, follow-ups, and check-ins automatically land on your calendar. Zero manual entry.",
    Icon: Calendar,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    title: "Smart Reminders",
    description:
      "Get nudged before birthdays, after promised follow-ups, and when it's time to reconnect.",
    Icon: Bell,
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    title: "Relationship Insights",
    description:
      "See who you haven't talked to in a while. Understand your social patterns at a glance.",
    Icon: Sparkles,
    color: "text-teal-500",
    bg: "bg-teal-50",
    border: "border-teal-200",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateOnView>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-primary to-coral bg-clip-text text-transparent">
                stay connected
              </span>
            </h2>
            <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
              Built for people who care about their relationships but
              don&apos;t have time for complicated systems.
            </p>
          </div>
        </AnimateOnView>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <AnimateOnView key={feature.title} delay={i * 100}>
              <div
                className={`${feature.bg} ${feature.border} border rounded-2xl p-6 sm:p-8 transition-all duration-200 hover:shadow-lg hover:scale-[1.01]`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm`}
                >
                  <feature.Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="mt-4 text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 text-muted leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
