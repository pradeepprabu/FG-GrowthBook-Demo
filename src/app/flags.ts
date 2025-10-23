'use server'
import { growthbookAdapter } from '@flags-sdk/growthbook';
import { flag } from 'flags/next';
import { identify } from './lib/identify';
import { myGrowthbookAdapter } from './customgrowthbookadapter';

const identityValue = {
    "id": "560",
    "storeKey": "804"
  }

export const defaultMembershipFlag = flag<boolean>({
  key: "membership-enabled",
  adapter: growthbookAdapter.feature<boolean>(),
  //adapter: myGrowthbookAdapter.feature<boolean>(),
  defaultValue: false,
  identify,
});

export const overriddenMembershipFlag = flag<boolean>({
  key: "membership-enabled",
  //adapter: growthbookAdapter.feature<boolean>(),
  adapter: myGrowthbookAdapter.feature<boolean>(),
  defaultValue: false,
  identify: () => identityValue,
  //identify,
});
