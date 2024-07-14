import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <div className="absolute top-4 left-4">
            <Image src="/logo.png" alt="Logo" width={120} height={120} />
          </div>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[400px] before:w-[400px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-[#A51C30] before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[400px] after:w-[400px] after:translate-x-1/3 after:bg-gradient-radial after:from-[#A51C30] after:via-[#A51C30] after:to-transparent after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#A51C30] before:dark:opacity-20 after:dark:from-[#A51C30] after:dark:via-[#A51C30] after:dark:opacity-50 sm:before:w-[400px] sm:after:w-[400px] before:lg:h-[400px]">
        <div className="text-white text-5xl font-bold">Loong.Academy</div>
      </div>




      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-6xl lg:grid-cols-3 lg:text-left">
        <a
          href="https://planmycourses.com"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-11 text-2xl font-semibold text-white">
            PlanMyCourses{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[50ch] text-sm opacity-50 text-white">
            Your Ultimate Guide for Harvard Course Planning, AI-Powered Recommendations, and Peer Collaboration
          </p>
        </a>

        {/* <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-white">
            Rate Harvard Prof.
            <div>(Coming Soon)</div>
          </h2>
          <p className="m-0 max-w-[50ch] text-sm opacity-50 text-white">
            Easily rate and review Harvard faculty, providing valuable feedback for future students.          </p>
        </div> */}

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-white">
            Networking Assistant
            <div>(Coming Soon)</div>
          </h2>
          <p className="m-0 max-w-[50ch] text-sm opacity-50 text-white">
            AI agents recommend the best people to follow up with.
          </p>
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-white">
            AI Learning Assistant
            <div>(Coming Soon)</div>
          </h2>
          <p className="m-0 max-w-[50ch] text-sm opacity-50 text-white">
            The AI tutor personalizes learning, combating the one-size-fits-all problem in education.          </p>
        </div>
      </div>
    </main>
  );
}
