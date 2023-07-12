import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="font-extrabold">Hello Word</h1>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
