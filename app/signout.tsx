import React from "react";
import { createClient } from "@supabase/supabase-js";

async function signoutWithGoogle() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
  );
  const { error } = await supabase.auth.signOut();
}

export default function Signout() {
  return <button onClick={signoutWithGoogle}>Sign Out</button>;
}
