import type { Attributes } from '@flags-sdk/growthbook';
import type { Identify } from 'flags';
import { dedupe } from 'flags/next';

export const identify = dedupe(async () => {
  // Your own logic to identify the user
  //const user = await getUser(headers, cookies);

  return {
    "id": "560",
    "storeKey": "3"
  };
}) satisfies Identify<Attributes>;

