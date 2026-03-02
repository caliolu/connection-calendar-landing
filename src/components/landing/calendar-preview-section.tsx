import { AnimateOnView } from "./animate-on-view";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface CalendarEvent {
  day: number;
  title: string;
  time?: string;
  type: "follow-up" | "birthday" | "check-in" | "meeting";
}

const events: CalendarEvent[] = [
  { day: 3, title: "Follow up: Sarah", time: "2:00 PM", type: "follow-up" },
  { day: 5, title: "Check in: Mom", type: "check-in" },
  { day: 8, title: "Coffee with Alex", time: "10:30 AM", type: "meeting" },
  { day: 10, title: "Tom's Birthday", type: "birthday" },
  { day: 12, title: "Follow up: Jake", time: "3:00 PM", type: "follow-up" },
  { day: 15, title: "Call: Dr. Lee", time: "11:00 AM", type: "meeting" },
  { day: 17, title: "Check in: David", type: "check-in" },
  { day: 19, title: "Lisa's Birthday", type: "birthday" },
  { day: 22, title: "Lunch: Emma", time: "12:30 PM", type: "meeting" },
  { day: 25, title: "Follow up: Sarah", type: "follow-up" },
  { day: 28, title: "Check in: Brother", type: "check-in" },
];

const typeStyles: Record<CalendarEvent["type"], { bg: string; text: string; dot: string }> = {
  "follow-up": { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-400" },
  birthday: { bg: "bg-purple-50", text: "text-purple-700", dot: "bg-purple-400" },
  "check-in": { bg: "bg-teal-50", text: "text-teal-700", dot: "bg-teal-400" },
  meeting: { bg: "bg-primary/5", text: "text-primary", dot: "bg-primary" },
};

function getEventsForDay(day: number) {
  return events.filter((e) => e.day === day);
}

export function CalendarPreviewSection() {
  const today = 6;
  // Generate calendar days (month starting on Wednesday -> offset 2)
  const startOffset = 2;
  const totalDays = 31;

  return (
    <section id="calendar" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateOnView>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Your relationships,{" "}
              <span className="bg-gradient-to-r from-primary to-coral bg-clip-text text-transparent">
                on your calendar
              </span>
            </h2>
            <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
              Every voice note you record turns into calendar events automatically.
              Follow-ups, birthdays, check-ins - all organized without lifting a finger.
            </p>
          </div>
        </AnimateOnView>

        <AnimateOnView delay={150}>
          <div className="max-w-4xl mx-auto">
            {/* Calendar card */}
            <div className="bg-white rounded-2xl border border-border shadow-lg overflow-hidden">
              {/* Calendar header */}
              <div className="bg-gradient-to-r from-primary to-primary-dark px-6 py-4 flex items-center justify-between">
                <h3 className="text-white font-bold text-lg">March 2026</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-amber-300" />
                    <span className="text-white/80 text-xs">Follow-ups</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-purple-300" />
                    <span className="text-white/80 text-xs">Birthdays</span>
                  </div>
                  <div className="flex items-center gap-1.5 hidden sm:flex">
                    <div className="w-2 h-2 rounded-full bg-teal-300" />
                    <span className="text-white/80 text-xs">Check-ins</span>
                  </div>
                </div>
              </div>

              {/* Day headers */}
              <div className="grid grid-cols-7 border-b border-border">
                {DAYS.map((day) => (
                  <div
                    key={day}
                    className="text-center py-2.5 text-xs font-semibold text-muted uppercase tracking-wider"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7">
                {/* Empty offset cells */}
                {[...Array(startOffset)].map((_, i) => (
                  <div
                    key={`empty-${i}`}
                    className="min-h-[72px] sm:min-h-[90px] border-b border-r border-border/50 bg-muted-light/30"
                  />
                ))}

                {/* Day cells */}
                {[...Array(totalDays)].map((_, i) => {
                  const day = i + 1;
                  const dayEvents = getEventsForDay(day);
                  const isToday = day === today;
                  const cellIndex = startOffset + i;
                  const isLastInRow = (cellIndex + 1) % 7 === 0;

                  return (
                    <div
                      key={day}
                      className={`min-h-[72px] sm:min-h-[90px] border-b border-border/50 p-1 sm:p-1.5 ${
                        !isLastInRow ? "border-r border-border/50" : ""
                      } ${isToday ? "bg-primary/[0.03]" : ""}`}
                    >
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium ${
                          isToday
                            ? "bg-primary text-white"
                            : "text-foreground/70"
                        }`}
                      >
                        {day}
                      </span>
                      <div className="mt-0.5 space-y-0.5">
                        {dayEvents.map((event, ei) => {
                          const style = typeStyles[event.type];
                          return (
                            <div
                              key={ei}
                              className={`${style.bg} rounded px-1 py-0.5 flex items-center gap-1 cursor-default`}
                              title={`${event.title}${event.time ? ` at ${event.time}` : ""}`}
                            >
                              <div className={`w-1.5 h-1.5 rounded-full ${style.dot} flex-shrink-0`} />
                              <span className={`${style.text} text-[9px] sm:text-[10px] font-medium truncate`}>
                                {event.title}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}

                {/* Fill remaining cells to complete the last row */}
                {[...Array((7 - ((startOffset + totalDays) % 7)) % 7)].map(
                  (_, i) => (
                    <div
                      key={`fill-${i}`}
                      className="min-h-[72px] sm:min-h-[90px] border-b border-r border-border/50 bg-muted-light/30"
                    />
                  )
                )}
              </div>
            </div>

            {/* Stats below calendar */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <AnimateOnView delay={300}>
                <div className="text-center bg-white rounded-xl border border-border p-4">
                  <p className="text-2xl sm:text-3xl font-bold text-primary">11</p>
                  <p className="text-xs text-muted mt-1">Events auto-created</p>
                </div>
              </AnimateOnView>
              <AnimateOnView delay={400}>
                <div className="text-center bg-white rounded-xl border border-border p-4">
                  <p className="text-2xl sm:text-3xl font-bold text-coral">0</p>
                  <p className="text-xs text-muted mt-1">Manual entries needed</p>
                </div>
              </AnimateOnView>
              <AnimateOnView delay={500}>
                <div className="text-center bg-white rounded-xl border border-border p-4">
                  <p className="text-2xl sm:text-3xl font-bold text-teal-500">7</p>
                  <p className="text-xs text-muted mt-1">People you&apos;ll remember</p>
                </div>
              </AnimateOnView>
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
