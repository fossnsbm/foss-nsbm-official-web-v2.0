import { defineMiddleware } from "astro:middleware";
import { getSession } from "auth-astro/server"; // Assuming you use auth-astro for session management

export const onRequest = defineMiddleware(async (context, next) => {
  const { request } = context;
  
  // Check if the requested path is '/register'
  if (request.url.endsWith('/register')) {
    // Retrieve the session from the request
    const session = await getSession(request);

    // If no session exists, redirect to login page
    if (!session) {
      return new Response("Redirecting to login...", {
        status: 302,
        headers: { Location: '/login' },
      });
    }
  }

  // Allow request to continue if session exists or the path is not '/register'
  return next();
});
