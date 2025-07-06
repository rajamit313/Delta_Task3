import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'SuperSecret');

export async function middleware(request) {
  const token = request.cookies.get('token')?.value;

  if(!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try{
    await jwtVerify(token, JWT_SECRET); // will throw if invalid
    return NextResponse.next();         // ✅ allow through
  }catch (err) {
    return NextResponse.redirect(new URL('/login', request.url)); // ⛔ invalid token
  }
}

export const config = {
  matcher: ['/user/:path*'],
};
