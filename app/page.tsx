import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
    const session = useSession();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>Hello {session.data?.user} Welcome</div>
            <div>
                <button onClick={() => signIn()}>Signin</button>
                <button onClick={() => signOut()}>Signout</button>
            </div>
        </main>
    );
}
