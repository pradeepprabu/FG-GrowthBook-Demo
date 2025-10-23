'use server'
import * as flags from "../flags";

export async function getFeatureFlags() {
    console.log("client-key-public-server", process.env.NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY);
    return flags;
}
