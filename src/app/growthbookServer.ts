import { setPolyfills, configureCache } from "@growthbook/growthbook";

export function configureServerSideGrowthBook() {
  // Tag fetch requests so they can be revalidated on demand
  setPolyfills({
    fetch: (url: string, init: RequestInit) =>
      fetch(url, {
        ...init,
        next: {
          // Cache feature definitions for 10 seconds for dev
          // In prod, use a higher value and use WebHooks to revalidate on-demand
          revalidate: 600,
          tags: ["growthbook"],
        },
      }),
  });

  // Disable the built-in cache since we're using Next.js's fetch cache instead
  configureCache({
    disableCache: true,
  });
}