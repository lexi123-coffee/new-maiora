export const prerender = false;

const BUILD_VERSION =
  import.meta.env.BUILD_VERSION || "dev";

export async function GET() {
  return new Response(
    JSON.stringify({
      version: BUILD_VERSION,
    }),
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    }
  );
}
