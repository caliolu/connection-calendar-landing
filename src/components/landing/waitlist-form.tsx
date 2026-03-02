"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  EXCITED_FEATURES,
  FEATURE_LABELS,
  type ExcitedFeature,
} from "@/lib/validations/waitlist";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";

interface WaitlistFormProps {
  initialCount: number;
}

export function WaitlistForm({ initialCount }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [feature, setFeature] = useState<ExcitedFeature | "">("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState<{
    memberNumber: number;
    alreadyRegistered: boolean;
  } | null>(null);

  const memberCount = success ? success.memberNumber : initialCount;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!feature) {
      setError("Please select a feature");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), excited_feature: feature }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.error || "Something went wrong");
        return;
      }

      setSuccess({
        memberNumber: data.memberNumber,
        alreadyRegistered: data.alreadyRegistered,
      });
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-white">
          {success.alreadyRegistered ? "You're already in!" : "You're in!"}
        </h3>
        <p className="mt-2 text-white/80 text-lg">
          You&apos;re founding member{" "}
          <span className="font-bold text-white">
            #{success.memberNumber}
          </span>
        </p>
        <p className="mt-4 text-white/60 text-sm">
          We&apos;ll email you when Connection Calendar launches.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Member counter */}
      <div className="text-center mb-2">
        <p className="text-white/70 text-sm">
          Join{" "}
          <span className="font-bold text-white">{memberCount}</span>{" "}
          founding {memberCount === 1 ? "member" : "members"}
        </p>
      </div>

      {/* Email */}
      <Input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white/95 border-white/20 text-foreground"
      />

      {/* Feature selection */}
      <div className="space-y-2.5">
        <p className="text-sm font-medium text-white/90">
          Which feature excites you most?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {EXCITED_FEATURES.map((f) => (
            <label
              key={f}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer transition-all duration-200 text-sm ${
                feature === f
                  ? "bg-white text-foreground shadow-md"
                  : "bg-white/15 text-white hover:bg-white/25"
              }`}
            >
              <input
                type="radio"
                name="feature"
                value={f}
                checked={feature === f}
                onChange={() => setFeature(f)}
                className="sr-only"
              />
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  feature === f ? "border-primary" : "border-white/50"
                }`}
              >
                {feature === f && (
                  <div className="w-2 h-2 rounded-full bg-primary" />
                )}
              </div>
              <span>{FEATURE_LABELS[f]}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Error */}
      {error && (
        <p className="text-sm text-red-200 bg-red-500/20 rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        disabled={isLoading}
        className="w-full bg-white text-primary hover:bg-white/90 shadow-xl"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Joining...
          </>
        ) : (
          "Join the Waitlist"
        )}
      </Button>

      <p className="text-center text-xs text-white/50">
        No spam, ever. Unsubscribe anytime.
      </p>
    </form>
  );
}
