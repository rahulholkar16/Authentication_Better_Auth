"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const HomeView = () => {
    const { data: session } = authClient.useSession();
    const router = useRouter();

    if (!session) return <p>loading...</p>;
    return (
        <div className="flex flex-col p-4 gap-y-4">
            <p>Logged in as {session.user.name}</p>

            <Button
                onClick={() =>
                    authClient.signOut({
                        fetchOptions: {
                            onSuccess: () => {router.push("/login")},
                        },
                    })
                }
            >
                Sign Out
            </Button>
        </div>
    );
};

export default HomeView;
