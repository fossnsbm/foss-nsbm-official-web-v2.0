// src/pages/api/register.js

import { sql } from '../../lib/neon';

export async function POST({ request }) {
  try {
    console.log("Received request to register");

    const contentType = request.headers.get("content-type") || "";
    let data;


    if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
      data = await request.formData();
    } else if (contentType.includes("application/json")) {
      data = await request.json();
    }

  
    console.log("Form Data:", Object.fromEntries(data.entries()));


    const firstname = data.get("firstname");
    const lastname = data.get("lastname");
    const email = data.get("email");
    const phone = data.get("phone");
    const batch = data.get("batch");
    const department = data.get("department");

 
    if (!firstname || !lastname || !email || !phone || !batch || !department) {
      return new Response('Missing required fields.', { status: 400 });
    }

    console.log("Inserting data:", { firstname, lastname, email, phone, batch, department });

 
    const result = await sql`
      INSERT INTO users (firstname, lastname, email, phone, batch, department) 
      VALUES (${firstname}, ${lastname}, ${email}, ${phone}, ${batch}, ${department})
    `;
    

    return new Response(null, {
      status: 302,
      headers: {
        Location: '/', 
      },
    });
  } catch (error) {
    console.error("Error storing data:", error);
    return new Response('Error storing data.', { status: 500 });
  }
}