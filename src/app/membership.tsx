import { defaultMembershipFlag } from '@/app/flags';
import { getFeatureFlags } from './featureflags/getfeatureflags';

export default async function Membership() {
  const defaultMembershipFlagValue = await defaultMembershipFlag();
  console.log("client-key-public", process.env.NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY);
  console.log("client-key", process.env.GROWTHBOOK_CLIENT_KEY);

  const overriddenMembershipFlagValue = (await getFeatureFlags()).overriddenMembershipFlag();
  console.log("Membership Feature Flag from getFeatureFlags:", await overriddenMembershipFlagValue);
  /*if (enabled) {
    return <div>Membership On!</div>
  } else {
    return <div>Membership Off!</div>
  }*/
  return(
    <>
      <div className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left mb-2 tracking-[-.01em]"><b>Membership Flag</b>
        <div>Default value: {defaultMembershipFlagValue?.toString()}</div>
        <div>Overridden value: {(await overriddenMembershipFlagValue).toString()}</div>
      </div>
    </>
  )
}