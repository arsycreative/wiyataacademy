"use client";

import type { User } from "@supabase/supabase-js";
import { useCallback, useEffect, useState } from "react";

import { createSupabaseBrowserClient } from "@/shared/supabase/client";
import { getSupabaseConfig } from "@/shared/supabase/env";

type AuthState = {
  user: User | null;
  isLoading: boolean;
  isConfigured: boolean;
};

export function useSupabaseAuth() {
  const [state, setState] = useState<AuthState>(() => {
    const { isConfigured } = getSupabaseConfig();
    return {
      user: null,
      isLoading: isConfigured,
      isConfigured,
    };
  });

  useEffect(() => {
    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      return;
    }

    let isMounted = true;

    supabase.auth
      .getUser()
      .then(({ data }) => {
        if (!isMounted) return;
        setState({
          user: data.user ?? null,
          isLoading: false,
          isConfigured: true,
        });
      })
      .catch(() => {
        if (!isMounted) return;
        setState({
          user: null,
          isLoading: false,
          isConfigured: true,
        });
      });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!isMounted) return;
      setState({
        user: session?.user ?? null,
        isLoading: false,
        isConfigured: true,
      });
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signOut = useCallback(async () => {
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return { error: null };
    const result = await supabase.auth.signOut();
    return { error: result.error };
  }, []);

  return {
    ...state,
    signOut,
  };
}
