import { ComponentComDelay } from "@/components/ComponentComDelay";
import { ComponentComDelayMaior } from "@/components/ComponentComDelayMaior";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <h1 className="font-extrabold">Hello Word</h1>
      <Link href="/main">Dashboard</Link><br/>
      <Link href="/signin">Signin</Link>

      <section>
        <Suspense fallback={<p>Loading feed...</p>}>
          <ComponentComDelay />
        </Suspense>
        <Suspense fallback={<p>Loading weather...</p>}>
          <ComponentComDelayMaior />
        </Suspense>
      </section>
    </div>
  );
}
