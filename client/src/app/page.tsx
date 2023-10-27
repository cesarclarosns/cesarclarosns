import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-[#EEDA72] text-center">
        <div>
          <p className="text-6xl font-bold">
            FULL-STACK DEVELOPER AND ENGINEER
          </p>
        </div>
        <div className=" rounded-full border-2 border-solid border-black px-4 py-2">
          AVAILABLE FOR WORK
        </div>
        <div>
          <div></div>
          <div></div>
          <div className="rounded-full border-2 border-solid  border-black bg-black px-4 py-2 text-white">
            CV
          </div>
        </div>
      </main>
    </>
  );
}
