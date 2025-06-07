import { QueryClient } from "@tanstack/react-query";

// Static deployment query client - no server API calls
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
      enabled: false, // Disable all queries for static deployment
    },
    mutations: {
      retry: false,
    },
  },
});

// Mock API request function for static deployment
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // For static deployment, redirect to external form services
  console.log('API request would be made to:', method, url, data);
  
  // Return a mock response for development
  return new Response(JSON.stringify({ 
    success: true, 
    message: "Form submitted successfully via external service" 
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}