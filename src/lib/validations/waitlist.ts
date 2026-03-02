import { z } from "zod";

export const EXCITED_FEATURES = [
  "voice_notes",
  "ai_reminders",
  "relationship_insights",
  "never_forget_dates",
] as const;

export type ExcitedFeature = (typeof EXCITED_FEATURES)[number];

export const FEATURE_LABELS: Record<ExcitedFeature, string> = {
  voice_notes: "Voice-first note taking",
  ai_reminders: "AI-powered reminders",
  relationship_insights: "Smart relationship insights",
  never_forget_dates: "Never forgetting important dates",
};

export const waitlistSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  excited_feature: z.enum(EXCITED_FEATURES, {
    error: "Please select a feature",
  }),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
