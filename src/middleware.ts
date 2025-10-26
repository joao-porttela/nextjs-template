import { NextRequest } from 'next/server';

import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

export default async function middleware(request: NextRequest) {
  // Step 1: Use the incoming request (example)
  const defaultLocale = request.headers.get('x-your-custom-locale') || 'en';

  // Step 2: Create and call the next-intl middleware (example)
  const handleI18nRouting = createMiddleware(routing);
  const response = handleI18nRouting(request);

  // Step 3: Alter the response (example)
  response.headers.set('x-your-custom-locale', defaultLocale);

  return response;
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|trpc|_next|_vercel|.*\\..*).*)',

    // Match all pathnames within `{/:locale}/users`
    '/([\\w-]+)?/users/(.+)'
  ]
};