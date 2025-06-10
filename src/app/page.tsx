"use client";

import ClientOnly from "./components/ClientOnly";
import WorkCalendar from "./components/Calendar/WorkCalendar";

export default function Home() {
  return (
  <ClientOnly>
    <WorkCalendar/>
  </ClientOnly>
  );
}
