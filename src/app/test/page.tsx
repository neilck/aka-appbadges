"use client";

import { signIn } from "next-auth/react";
export default function TwitterOwnerBadge() {
  return (
    <>
      <h1>Test Page</h1>
      <button
        onClick={() => {
          signIn("twitter");
        }}
      >
        Test
      </button>
    </>
  );
}
