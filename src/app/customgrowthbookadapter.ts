import { createGrowthbookAdapter } from '@flags-sdk/growthbook';

export const myGrowthbookAdapter = createGrowthbookAdapter({
  clientKey: "sdk-8gh1re4DQqWUeLi",
  apiHost: "http://localhost:3100", // optional
  appOrigin: "http://localhost:3000", // optional
  edgeConfig: {
    connectionString: process.env.GROWTHBOOK_EDGE_CONNECTION_STRING!,
    itemKey: process.env.GROWTHBOOK_EDGE_CONFIG_ITEM_KEY, // optional
  },
  trackingCallback: (experiment, result) => {
    // Back-end exposure logging
  },
  clientOptions: {}, // GrowthBook ClientOptions (optional)
  initOptions: {},   // GrowthBook InitOptions (optional)
  stickyBucketService: undefined, // Optional
});