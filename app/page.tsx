"use client";

import Login from "./login";
import Signout from "./signout";
import { createClient } from "@supabase/supabase-js";
import { useSupabase } from "./components/supabase-provider";

export default function Home() {
  const supabase = useSupabase();

  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();
  return (
    <main>
      <Login />
      {/* <Signout /> */}
      <h1>the best journal app</h1>
    </main>
  );
}