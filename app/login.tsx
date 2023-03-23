import React from "react";
import { createClient } from "@supabase/supabase-js";

export default function Login() {
  const supabaseApp = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
  );
  const loginWithGoogle = () => {
    supabaseApp.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return <button onClick={loginWithGoogle}>Login</button>;
}
