import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest, event: NextFetchEvent) {
  const token = await getToken({ req });
  console.log("hhhhhh");
  console.log(token)
  const isAuthenticated = !!token;
 // protect sign up and login 
  if ( (req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/signup') ) && isAuthenticated) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  const authMiddleware = await withAuth({
    pages: {
      signIn: `/login`,
    },
  });

  // @ts-expect-error
  return authMiddleware(req, event);
}