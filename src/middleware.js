import { defineMiddleware } from "astro:middleware";
import { getSession } from "auth-astro/server"; 


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
    const adminEmail = import.meta.env.EMAIL_ADMIN;  // Access the environment variable

    if (!session || session.user?.email !== adminEmail) {
      return new Response("Redirecting to login...", {
        status: 302,
        headers: { Location: '/login' },
      });
    }
  }


  return next();
});
