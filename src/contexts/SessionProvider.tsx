'use client';

import {
  useState,
  createContext,
  SetStateAction,
  Dispatch,
  FC, useEffect,
} from 'react'

export const SessionContext = createContext<{
  session: any | null
  error: string | null
  status: string
  setError: Dispatch<SetStateAction<string | null>> | null
  setSession: Dispatch<SetStateAction<any | null>> | null
  setStatus: Dispatch<SetStateAction<string>> | null
  updateSession: null | (() => void)
}>({
  session: null,
  error: null,
  status: 'loading',
  setError: null,
  setSession: null,
  setStatus: null,
  updateSession: null
})

const SessionContextProvider: FC<any> = ({ children }) => {
  const [status, setStatus] = useState<string>('loading')
  const [session, setSession] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const getSession = async () => {
    setStatus('loading')
    setError(null)
    const session: any | null = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/session`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    })
      .then(res => res.json())
      .catch((e) => {
        console.log(e);
        return null;
      })

    setStatus('loaded')
    if (session?.error) {
      setError(session.error)
    }

    return session && !session.error ? session : null
  }

  const updateSession = () => {
    getSession()
      .then(setSession);
  }

  useEffect(() => {
    updateSession();
  }, []);

  return (
    <SessionContext.Provider value={{ session, error, status, setError, setStatus, setSession, updateSession }}>
      {children}
    </SessionContext.Provider>
  )
}

export default SessionContextProvider
