export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    
    // Validate required fields
    const required = ['firstName', 'lastName', 'email', 'practiceName'];
    for (const field of required) {
      if (!body[field]) {
        return new Response(JSON.stringify({ error: `${field} is required` }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // For Cloudflare Pages, you can integrate with external services
    // Example: Send to email service, CRM, or database
    
    // Mock successful response for demonstration
    const consultationData = {
      id: Date.now(),
      ...body,
      submittedAt: new Date().toISOString(),
      status: 'pending'
    };

    // In production, integrate with:
    // - Email service (SendGrid, Mailgun, etc.)
    // - CRM system (HubSpot, Salesforce, etc.)
    // - Database (Supabase, PlanetScale, etc.)
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Consultation request submitted successfully',
      data: consultationData 
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({ 
      error: 'Failed to process consultation request',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}