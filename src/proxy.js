import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { auth } from './lib/auth'

// This function can be marked `async` if using `await` inside
export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    console.log(session)

    if (!session) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    } else {
        return NextResponse.next()
    }

}


// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
    matcher: ['/my-bookings', '/add-destination', '/destinations/:path'],
}