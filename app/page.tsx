import { Suspense } from "react";
import { Page } from "./_components/Page";
import { PageFallback } from "./_components/PageFallback";

export default function Home() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Page />
    </Suspense>
  );
}
