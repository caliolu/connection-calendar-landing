import { AnimateOnView } from "./animate-on-view";
import { Bot, ArrowRight, Calendar, User, Bell } from "lucide-react";

export function AIAssistantSection() {
  return (
    <section id="ai-assistant" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateOnView>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              <Bot className="w-4 h-4" />
              <span>AI-Powered</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Meet your{" "}
              <span className="bg-gradient-to-r from-primary to-coral bg-clip-text text-transparent">
                relationship AI
              </span>
            </h2>
            <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
              Just talk naturally after any meeting, call, or coffee. The AI listens, understands context,
              and automatically organizes everything into your calendar and contacts.
            </p>
          </div>
        </AnimateOnView>

        {/* Voice note -> AI extraction demo */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Left: Voice note transcript */}
            <AnimateOnView delay={100}>
              <div className="bg-gradient-to-br from-primary/5 to-coral/5 rounded-2xl border border-primary/10 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-coral animate-[pulse-soft_2s_ease-in-out_infinite]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Your voice note</p>
                    <p className="text-xs text-muted">32 seconds</p>
                  </div>
                </div>

                {/* Waveform */}
                <div className="flex gap-0.5 items-center h-8 mb-5">
                  {[...Array(40)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-primary/20 rounded-full flex-shrink-0"
                      style={{
                        height: `${4 + Math.sin(i * 0.5) * 12 + Math.random() * 8}px`,
                      }}
                    />
                  ))}
                </div>

                {/* Transcript */}
                <div className="bg-white/80 rounded-xl p-4 border border-primary/5">
                  <p className="text-xs font-medium text-muted mb-2 uppercase tracking-wider">Transcript</p>
                  <p className="text-sm text-foreground/80 leading-relaxed italic">
                    &ldquo;Just had coffee with <span className="text-primary font-semibold not-italic">Sarah Miller</span>.
                    She mentioned her team is launching a new product <span className="text-amber-600 font-semibold not-italic">next Thursday</span>.
                    I should <span className="text-coral font-semibold not-italic">follow up with her about the partnership</span> after
                    the launch. Oh, and <span className="text-purple-600 font-semibold not-italic">Tom&apos;s birthday is March 15th</span> -
                    need to remember to get him something.&rdquo;
                  </p>
                </div>
              </div>
            </AnimateOnView>

            {/* Right: AI extractions */}
            <AnimateOnView delay={250}>
              <div className="space-y-4">
                {/* Arrow on desktop */}
                <div className="hidden md:flex items-center gap-2 mb-2">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <p className="text-sm font-semibold text-primary">AI automatically extracts</p>
                </div>
                <div className="md:hidden flex items-center justify-center gap-2 mb-2">
                  <ArrowRight className="w-4 h-4 text-primary rotate-90" />
                  <p className="text-sm font-semibold text-primary">AI automatically extracts</p>
                </div>

                {/* Extracted: Contact */}
                <div className="bg-white rounded-2xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Contact Updated</p>
                      <p className="text-sm text-foreground mt-1">Sarah Miller</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-[11px] bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">Last seen: Today</span>
                        <span className="text-[11px] bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">Context: Product launch</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Extracted: Calendar event */}
                <div className="bg-white rounded-2xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Calendar Event Created</p>
                      <p className="text-sm text-foreground mt-1">Follow up with Sarah - Partnership</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-[11px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">After next Thursday</span>
                        <span className="text-[11px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">Auto-scheduled</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Extracted: Birthday reminder */}
                <div className="bg-white rounded-2xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                      <Bell className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Reminder Set</p>
                      <p className="text-sm text-foreground mt-1">Tom&apos;s Birthday - March 15</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-[11px] bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">Reminder: 2 days before</span>
                        <span className="text-[11px] bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">Gift idea needed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnView>
          </div>
        </div>

        {/* Bottom note */}
        <AnimateOnView delay={400}>
          <p className="text-center text-sm text-muted mt-10 max-w-lg mx-auto">
            All processing happens on-device. Your conversations stay private.
            The AI only extracts actionable information - nothing else.
          </p>
        </AnimateOnView>
      </div>
    </section>
  );
}
