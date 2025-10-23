import Image from "next/image";
import Membership from "./membership";
import { configureServerSideGrowthBook } from "./growthbookServer";
import { GrowthBook } from "@growthbook/growthbook";

// added comment by pradeep to test git push

export default async function Home() {
    configureServerSideGrowthBook();

    // Create and initialize a GrowthBook instance
    const gb = new GrowthBook({
        apiHost: process.env.NEXT_PUBLIC_GROWTHBOOK_API_HOST,
        clientKey: process.env.NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY,
        //decryptionKey: process.env.NEXT_PUBLIC_GROWTHBOOK_DECRYPTION_KEY,
    });
    await gb.init({ timeout: 1000 });

    // Set targeting attributes for the user
    // TODO: get from cookies/headers/db
    await gb.setAttributes({
        id: "123",
        employee: true,
        storeKey: "805",
    });

    // Evaluate a feature flag
    const memshipEnabled = gb.isOn("membership-enabled");

    // Cleanup
    gb.destroy();
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <Image
                    className="dark:invert"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <a
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className="dark:invert"
                            src="/vercel.svg"
                            alt="Vercel logomark"
                            width={20}
                            height={20}
                        />
                        Deploy now
                    </a>
                </div>
                {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <Membership />
                </div> */}
                <h2>membership enabled: {memshipEnabled ? "ON" : "OFF"}</h2>
            </main>
        </div>
    );
}
