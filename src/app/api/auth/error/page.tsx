"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
const AuthError = () => {
  const router = useRouter();

  useEffect(() => {
    let error = "";
    if (typeof window !== "undefined") {
      const queryParameters = new URLSearchParams(window.location.search);
      error = queryParameters.get("error") ?? "";
    }

    const code = sessionStorage.getItem("code");
    const redirect = sessionStorage.getItem("redirect");
    const callbackUrl = sessionStorage.getItem("callbackUrl");

    // redirect to callbackUrl with error parameter
    let url = callbackUrl;
    url = url + `&error=${error}`;
    console.log(url);
    router.push(url);
  }, []);

  return (
    <div>
      <h1>Authentication Error</h1>
      <p>An error occurred during authentication.</p>

      <a href="/">Go back to home</a>
    </div>
  );
};

export default AuthError;
