import { createSupabaseServerClient } from "@/lib/supabase/server";
import { AnimateOnView } from "./animate-on-view";
import { WaitlistForm } from "./waitlist-form";

async function getWaitlistCount(): Promise<number> {
  try {
    const supabase = createSupabaseServerClient();
    const { count } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });
    return count ?? 0;
  } catch {
    return 0;
  }
}

export async function WaitlistSection() {
  const count = await getWaitlistCount();

  return (
    <section id="waitlist" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateOnView>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-dark to-purple-900 p-8 sm:p-12 lg:p-16">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-coral/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-light/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 max-w-lg mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Be a Founding Member
                </h2>
                <p className="mt-3 text-white/70 text-lg">
                  Join the waitlist and be first to know when we launch.
                </p>
              </div>

              <WaitlistForm initialCount={count} />
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
