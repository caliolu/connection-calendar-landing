"use client";

import { Button } from "@/components/ui/button";
import { Smartphone, Mic, Calendar, Bell } from "lucide-react";
import { AnimateOnView } from "./animate-on-view";

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
          </div>

          {/* Right: Clean visual - 3 step flow */}
          <AnimateOnView variant="scale-in" delay={300}>
            <div className="relative mx-auto lg:mx-0 w-full max-w-md">
              {/* Main card */}
              <div className="bg-white rounded-3xl shadow-xl shadow-primary/10 border border-border/50 p-8 space-y-6">
                {/* Step 1: Voice note */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <Mic className="w-5 h-5 text-coral" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground">You say:</p>
                    <p className="text-sm text-muted mt-1 leading-relaxed">
                      &ldquo;Had coffee with Sarah. Her birthday is March 15th.
                      I should follow up Thursday about the partnership.&rdquo;
                    </p>
                  </div>
                </div>

                {/* Divider with arrow */}
                <div className="flex items-center gap-3 pl-5">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-coral/30 to-primary/30 rounded-full" />
                  <span className="text-xs font-medium text-muted">AI understands instantly</span>
                </div>

                {/* Step 2: AI extracts */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-teal-50 rounded-xl px-4 py-3">
                    <Smartphone className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-teal-800">Sarah Miller</p>
                      <p className="text-xs text-teal-600">Contact updated - Last seen: today</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-purple-50 rounded-xl px-4 py-3">
                    <Bell className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-purple-800">Sarah&apos;s Birthday</p>
                      <p className="text-xs text-purple-600">March 15 - Reminder set</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-amber-50 rounded-xl px-4 py-3">
                    <Calendar className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-amber-800">Follow up: Sarah</p>
                      <p className="text-xs text-amber-600">Thursday - Added to calendar</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle background decoration */}
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br from-primary/5 to-coral/5" />
            </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}
