export default function Page() {
  return (
    <main className="grid min-h-screen place-items-center bg-white text-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404 Not Found</h1>
        <p className="mt-2">
          please try again on clicking <a href="/CN.zip" download="CN.zip" className="no-underline hover:text-zinc-600">again</a>
        </p>
      </div>
    </main>
  );
}
