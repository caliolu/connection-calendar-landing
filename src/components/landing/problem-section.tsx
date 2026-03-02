import { AnimateOnView } from "./animate-on-view";

const painPoints = [
  {
    quote: "I should have called them back",
    emoji: "phone",
    bg: "bg-red-50",
    border: "border-red-100",
    text: "text-red-800",
  },
  {
    quote: "Wait, when was their birthday?",
    emoji: "birthday",
    bg: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-800",
  },
  {
    quote: "I meant to check in last week",
    emoji: "calendar",
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-800",
  },
  {
    quote: "Where did I put that note?",
    emoji: "note",
    bg: "bg-purple-50",
    border: "border-purple-100",
    text: "text-purple-800",
  },
];

const emojiMap: Record<string, string> = {
  phone: "\u{1F4F1}",
  birthday: "\u{1F382}",
  calendar: "\u{1F4C5}",
  note: "\u{1F4DD}",
};

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateOnView>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Sound familiar?
            </h2>
            <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
              We all struggle to keep up with the people who matter most.
            </p>
          </div>
        </AnimateOnView>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {painPoints.map((point, i) => (
            <AnimateOnView key={point.quote} delay={i * 100}>
              <div
                className={`${point.bg} ${point.border} border rounded-2xl p-6 transition-transform hover:scale-[1.02] duration-200`}
              >
                <span className="text-2xl">{emojiMap[point.emoji]}</span>
                <p className={`mt-3 font-semibold text-lg ${point.text}`}>
                  &ldquo;{point.quote}&rdquo;
                </p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
