import type { Metadata } from "next";
import Link from "next/link";
import LoginForm from "@/components/admin/LoginForm";

export const metadata: Metadata = {
  title: "Admin Sign In | Next Step Remodeling",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-5 py-16">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="mb-8 flex items-center justify-center gap-3"
          aria-label="Next Step Remodeling home"
        >
          <span className="flex items-center rounded-xl bg-white px-3 py-2">
            <img
              src="/assets/logo.png"
              alt="Next Step Remodeling"
              width="690"
              height="590"
              className="h-16 w-auto"
            />
          </span>
        </Link>

        <div className="rounded-3xl bg-white p-7 shadow-2xl shadow-black/30 sm:p-9">
          <h1 className="font-display text-2xl font-normal text-ink">Admin Sign In</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Enter the admin password to manage leads and portfolio items.
          </p>
          <LoginForm />
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          <Link href="/" className="transition hover:text-white">
            ← Back to website
          </Link>
        </p>
      </div>
    </main>
  );
}
