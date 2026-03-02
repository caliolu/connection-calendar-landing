"use client";

import { Button } from "@/components/ui/button";
import { AnimateOnView } from "./animate-on-view";

function FloatingCard({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute bg-white rounded-xl shadow-lg px-4 py-3 text-xs sm:text-sm font-medium text-foreground border border-border/50 max-w-[200px] ${className}`}
    >
      {text}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            <AnimateOnView>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Remember everyone.{" "}
                <span className="bg-gradient-to-r from-primary to-coral bg-clip-text text-transparent">
                  Forget nothing.
                </span>
              </h1>
            </AnimateOnView>

            <AnimateOnView delay={100}>
              <p className="mt-6 text-lg text-muted leading-relaxed max-w-lg mx-auto lg:mx-0">
                Record a voice note after every conversation. AI extracts
                contacts, dates, and follow-ups. Your calendar does the rest.
              </p>
            </AnimateOnView>

            <AnimateOnView delay={200}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={() =>
                    document
                      .getElementById("waitlist")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Join the Waitlist
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() =>
                    document
                      .getElementById("how-it-works")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  See How it Works
                </Button>
              </div>
            </AnimateOnView>
          </div>

          {/* Right: App mockup placeholder */}
          <AnimateOnView variant="scale-in" delay={300}>
            <div className="relative mx-auto lg:mx-0 w-full max-w-sm">
              {/* Phone frame */}
              <div className="relative bg-gradient-to-br from-primary/10 via-coral/10 to-primary/5 rounded-[2.5rem] p-6 border border-primary/10 shadow-2xl shadow-primary/10">
                <div className="bg-white rounded-[2rem] p-5 space-y-4 min-h-[380px]">
                  {/* Mock header */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-coral" />
                    <div>
                      <div className="h-3 w-24 bg-foreground/10 rounded-full" />
                      <div className="h-2 w-16 bg-foreground/5 rounded-full mt-1.5" />
                    </div>
                  </div>

                  {/* Mock cards */}
                  <div className="space-y-3">
                    <div className="bg-primary/5 rounded-xl p-3.5">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-coral animate-[pulse-soft_2s_ease-in-out_infinite]" />
                        <span className="text-xs font-medium text-primary">
                          Voice note recorded
                        </span>
                      </div>
                      <div className="mt-2 flex gap-0.5">
                        {[...Array(20)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1 bg-primary/30 rounded-full"
                            style={{
                              height: `${8 + Math.sin(i * 0.8) * 8 + Math.random() * 6}px`,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="bg-amber-50 rounded-xl p-3.5">
                      <p className="text-xs font-medium text-amber-700">
                        Follow-up: Sarah - Thursday
                      </p>
                      <p className="text-[11px] text-amber-600/70 mt-1">
                        Discuss project timeline
                      </p>
                    </div>

                    <div className="bg-purple-50 rounded-xl p-3.5">
                      <p className="text-xs font-medium text-purple-700">
                        Birthday: Tom, Mar 15
                      </p>
                      <p className="text-[11px] text-purple-600/70 mt-1">
                        Reminder set for 2 days before
                      </p>
                    </div>

                    <div className="bg-teal-50 rounded-xl p-3.5">
                      <p className="text-xs font-medium text-teal-700">
                        3 contacts updated
                      </p>
                      <p className="text-[11px] text-teal-600/70 mt-1">
                        From your last 2 voice notes
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <FloatingCard
                text="Voice note recorded"
                className="animate-[float_4s_ease-in-out_infinite] -top-4 -right-4 sm:-right-8"
              />
              <FloatingCard
                text="Follow-up: Sarah - Thursday"
                className="animate-[float-delayed_5s_ease-in-out_infinite] top-1/3 -left-6 sm:-left-12"
              />
              <FloatingCard
                text="Birthday: Tom, Mar 15"
                className="animate-[float_4.5s_ease-in-out_infinite] bottom-12 -right-4 sm:-right-10"
              />
            </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}
