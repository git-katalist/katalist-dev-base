import Link from "next/link";
export default function Index() {
    return (
        <>
            Hello world <br />
            <Link href="/posts">Posts</Link>
        </>
    );
}
