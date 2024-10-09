'use client';

import { useContext, useEffect } from 'react';
import { redirect } from 'next/navigation';

import { SessionContext } from "@/contexts/SessionProvider";

type SessionOption = {
  required?: boolean
  redirect?: boolean
  callbackUrl?: string
  onUnauthenticated?: () => void
}

type SignInOptions = {
  wallet: string
  referral?: string
  redirect?: boolean
  callbackUrl?: string
}
const useSession = (options?: SessionOption) => {
  const { session, error, status, setError, setStatus, setSession, updateSession } = useContext(SessionContext)

  const signOut = async () => {
    setStatus?.('loading')
    await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .catch(() => null)
    setSession?.(null);
    setStatus?.('loaded')
  }

  const signIn = async (signInOptions: SignInOptions) => {
    setStatus?.('loading')
    const response: any | null = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        wallet: signInOptions.wallet,
        ...(signInOptions.referral ? { referral: signInOptions.referral } : {})
      })
    })
      .then(res => {
        return res.json();
      })
      .catch(() => null)

    setStatus?.('loaded')

    if (response.error) {
      setError?.(response.error);
    }

    if (response && !response.error && signInOptions?.redirect && signInOptions?.callbackUrl) {
      location.href = signInOptions.callbackUrl
    }

    setTimeout(() => {
      updateSession?.();
    }, 1000)
  }

  useEffect(() => {
    if (session && session?.verified && options?.redirect && options?.callbackUrl) {
      redirect(options.callbackUrl)
    }

    if (!session && options?.required) {
      options?.onUnauthenticated?.()
    }
  }, [session]);

  return {
    data: session,
    error,
    status,
    signIn,
    signOut
  }
}

export default useSession;