import { defineMiddleware } from "astro:middleware";
import { getSession } from "auth-astro/server"; // Assuming you use auth-astro for session management

export const onRequest = defineMiddleware(async (context, next) => {
  const { request } = context;
  
  
  if (request.url.endsWith('/register')) {
   
    const session = await getSession(request);

  
    if (!session) {
      return new Response("Redirecting to login...", {
        status: 302,
        headers: { Location: '/login' },
      });
    }
  }

  if (request.url.endsWith('/event')) {
    
    const session = await getSession(request);

    
    if (!session) {
      return new Response("Redirecting to login...", {
        status: 302,
        headers: { Location: '/login' },
      });
    }
  }
  if (request.url.endsWith('/dashboard')) {
    const session = await getSession(request);
  
    if (!session ||session.user?.email !== 'warushayohan80@gmail.com') {
      return new Response("Redirecting to login...", {
        status: 302,
        headers: { Location: '/login' },
      });
    }
 
  }

  return next();
});
