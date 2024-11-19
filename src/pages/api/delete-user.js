import { sql } from '../../lib/neon'; // Assuming neon is set up correctly

export async function DELETE({ request }) {
  const { id } = await request.json(); // Get the id from the request body

  if (!id) {
    return new Response(JSON.stringify({ error: 'User ID is required' }), { status: 400 });
  }

  try {
    const result = await sql`
      DELETE FROM register WHERE id = ${id}
    `;

    if (result.rowCount > 0) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }
  } catch (error) {
    console.error("Error deleting user from Neon:", error);
    return new Response(JSON.stringify({ error: 'Failed to delete user' }), { status: 500 });
  }
}
