import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const sessionCookie = req.cookies.get("dumpfun");

  try {
    const sessionResponse = await fetch(`${API_URL}/auth/session`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `${sessionCookie?.name}=${sessionCookie?.value};`,
      },
    });
    const sessionResponseJson = await sessionResponse.json();
    const isAuthenticated = !!sessionResponseJson?.data?.wallet;
  
    if (isAuthenticated) {
      const { wallet, username, bio } = sessionResponseJson?.data;
      const userCookieValue = { wallet, username, bio };
  
      const nextProcess = NextResponse.next();
      nextProcess.cookies.set('user', JSON.stringify(userCookieValue))
      return nextProcess;
    }
  
    return NextResponse.next();
  } catch (error) {
    console.error('An error occurred while get session:', error);

    return NextResponse.next();
  }
}
