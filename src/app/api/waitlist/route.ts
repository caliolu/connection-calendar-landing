import { createSupabaseServerClient } from "@/lib/supabase/server";
import { waitlistSchema } from "@/lib/validations/waitlist";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = waitlistSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const supabase = createSupabaseServerClient();

    const { error } = await supabase
      .from("waitlist")
      .insert({
        email: parsed.data.email,
        excited_feature: parsed.data.excited_feature,
      });

    if (error) {
      // Postgres unique constraint violation
      if (error.code === "23505") {
        // Get member number for existing user
        const { count } = await supabase
          .from("waitlist")
          .select("*", { count: "exact", head: true })
          .lte(
            "created_at",
            (
              await supabase
                .from("waitlist")
                .select("created_at")
                .eq("email", parsed.data.email)
                .single()
            ).data?.created_at ?? new Date().toISOString()
          );

        return NextResponse.json({
          success: true,
          alreadyRegistered: true,
          memberNumber: count ?? 1,
          message: "You're already on the list!",
        });
      }

      return NextResponse.json(
        { success: false, error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    // Get the member number (total count)
    const { count } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    return NextResponse.json({
      success: true,
      alreadyRegistered: false,
      memberNumber: count ?? 1,
      message: "Welcome aboard!",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
