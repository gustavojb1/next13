import { Suspense } from "react";
import { ComponentComDelay } from "@/components/ComponentComDelay";
import { ComponentComDelayMaior } from "@/components/ComponentComDelayMaior";

interface ProductProps {
  params: {
    id: string;
  };
}

export default function Product({ params }: ProductProps) {
  return (
    <div className="p-5">
      <h1 className="font-extrabold"> Product: {params.id}</h1>

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
