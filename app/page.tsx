"use client";

import {
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

export default function Home() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center bg-white px-6 py-8 dark:bg-black">
        {!isSignedIn ? (
          <div className="flex flex-col items-center gap-6 text-center">
            <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
              To test this demo:
            </h1>

            <SignUpButton fallbackRedirectUrl="/">
              <button className="h-10 cursor-pointer rounded-full bg-[#6c47ff] px-4 text-sm font-medium text-white">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 text-center">
            <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
              Congratulations! You successfully signed in.
            </h1>

            <p className="text-zinc-600 dark:text-zinc-300">
              This account is authenticated using Clerk.
            </p>

            <div className="flex items-center gap-3">
              <span className="text-black dark:text-white">
                Account and logout:
              </span>

              <UserButton />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}