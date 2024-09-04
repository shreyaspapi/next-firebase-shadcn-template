import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse } from 'next/server';

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const { nextUrl } = req;
  const onRoot = nextUrl.pathname === '/';

  const isAuth = !!req.auth;

  if (onRoot && isAuth) {
    return NextResponse.redirect(new URL('dashboard', nextUrl));
  }

  if (!isAuth && !onRoot) {
    return Response.redirect(new URL('/', nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!_next/static|_next/image|.*\\.png$|api/role*).*)'],
};
