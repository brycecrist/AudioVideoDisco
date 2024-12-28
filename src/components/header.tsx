import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div>
                <Link href={"/signup"}>Signup</Link>
                <Link href={"/login"}>Login</Link>
            </div>
        </header>
    )
}