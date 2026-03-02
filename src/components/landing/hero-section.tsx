"use client";

import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
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
            {/* Mobile app badge */}
            <AnimateOnView>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Smartphone className="w-4 h-4" />
                <span>Mobile App - Coming to iOS & Android</span>
              </div>
            </AnimateOnView>

            <AnimateOnView delay={50}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Remember everyone.{" "}
                <span className="bg-gradient-to-r from-primary to-coral bg-clip-text text-transparent">
                  Forget nothing.
                </span>
              </h1>
            </AnimateOnView>

            <AnimateOnView delay={150}>
              <p className="mt-6 text-lg text-muted leading-relaxed max-w-lg mx-auto lg:mx-0">
                A mobile app that turns your voice notes into a relationship superpower.
                Record a quick note after any conversation - your AI assistant extracts
                names, dates, and follow-ups, then fills your calendar automatically.
              </p>
            </AnimateOnView>

            <AnimateOnView delay={250}>
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

            <AnimateOnView delay={350}>
              <p className="mt-4 text-xs text-muted/70">
                Free to use. No credit card required.
              </p>
            </AnimateOnView>
          </div>

          {/* Right: Phone mockup */}
          <AnimateOnView variant="scale-in" delay={300}>
            <div className="relative mx-auto lg:mx-0 w-full max-w-sm">
              {/* Phone frame */}
              <div className="relative bg-gradient-to-br from-primary/10 via-coral/10 to-primary/5 rounded-[2.5rem] p-6 border border-primary/10 shadow-2xl shadow-primary/10">
                {/* Notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-foreground/5 rounded-full" />
                <div className="bg-white rounded-[2rem] p-5 space-y-4 min-h-[400px]">
                  {/* App header */}
                  <div className="flex items-center justify-between pt-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-coral flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold">C</span>
                      </div>
                      <span className="text-xs font-bold text-foreground">Connection Calendar</span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-foreground/5 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-foreground/20" />
                    </div>
                  </div>

                  {/* Voice recording card */}
                  <div className="bg-primary/5 rounded-xl p-3.5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-coral animate-[pulse-soft_2s_ease-in-out_infinite]" />
                      <span className="text-xs font-medium text-primary">Recording voice note...</span>
                    </div>
                    <div className="flex gap-0.5 items-end h-6">
                      {[...Array(24)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-primary/30 rounded-full"
                          style={{
                            height: `${6 + Math.sin(i * 0.7) * 8 + Math.random() * 6}px`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* AI extracted items */}
                  <div className="space-y-2.5">
                    <p className="text-[10px] font-semibold text-muted uppercase tracking-wider">AI Extracted</p>

                    <div className="bg-amber-50 rounded-xl p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">&#128197;</span>
                        <p className="text-xs font-medium text-amber-700">Follow-up: Sarah - Thursday</p>
                      </div>
                      <p className="text-[10px] text-amber-600/70 mt-0.5 ml-6">Added to calendar</p>
                    </div>

                    <div className="bg-purple-50 rounded-xl p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">&#127874;</span>
                        <p className="text-xs font-medium text-purple-700">Birthday: Tom - Mar 15</p>
                      </div>
                      <p className="text-[10px] text-purple-600/70 mt-0.5 ml-6">Reminder set</p>
                    </div>

                    <div className="bg-teal-50 rounded-xl p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">&#128100;</span>
                        <p className="text-xs font-medium text-teal-700">Contact updated: Sarah Miller</p>
                      </div>
                      <p className="text-[10px] text-teal-600/70 mt-0.5 ml-6">Last seen: today</p>
                    </div>
                  </div>

                  {/* Bottom nav mockup */}
                  <div className="flex justify-around pt-2 border-t border-foreground/5">
                    <div className="w-6 h-6 rounded-full bg-foreground/5" />
                    <div className="w-10 h-10 -mt-3 rounded-full bg-gradient-to-br from-primary to-coral flex items-center justify-center shadow-lg">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-foreground/5" />
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <FloatingCard
                text="&#127897; Voice note recorded"
                className="animate-[float_4s_ease-in-out_infinite] -top-4 -right-4 sm:-right-8"
              />
              <FloatingCard
                text="&#128197; Follow-up added to calendar"
                className="animate-[float-delayed_5s_ease-in-out_infinite] top-1/3 -left-6 sm:-left-16"
              />
              <FloatingCard
                text="&#127874; Birthday reminder set"
                className="animate-[float_4.5s_ease-in-out_infinite] bottom-16 -right-4 sm:-right-10"
              />
            </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}
