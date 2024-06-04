import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const cookie = cookies()
    if(cookie.has("accessToken")){
        return NextResponse.redirect(new URL('/home', request.url))
    }
    return NextResponse.next()
}
 

export const config = {
  matcher: '/login',
}