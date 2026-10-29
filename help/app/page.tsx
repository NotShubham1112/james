const subjects = [
  { code: "MDM", name: "MDM", file: "/files/mdm.pdf", kind: "PDF" },
  { code: "SE", name: "SE", file: "/files/se.pdf", kind: "PDF" },
  { code: "CN", name: "CN", file: "/files/cn.pdf", kind: "PDF" },
  {
    code: "AI&CS",
    name: "AI & CS",
    file: "/files/AI_Soft_Computing_Website_Codes_No_Comments.zip",
    kind: "ZIP",
  },
];

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}

export default function SubjectNotesPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-white px-5 py-10 text-zinc-950">
      <section aria-labelledby="page-title" className="w-full max-w-xl">
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
          Study resources
        </p>

        <h1
          id="page-title"
          className="text-3xl font-semibold tracking-tight sm:text-[32px]"
        >
          Subject notes
        </h1>

        <p className="mb-6 mt-2 text-sm leading-6 text-zinc-500">
          Browse your subject materials and download the notes you need.
        </p>

        <div
          aria-label="Subjects"
          className="overflow-hidden rounded-lg border border-zinc-200 bg-white"
          role="list"
        >
          {subjects.map((subject, index) => (
            <div
              key={subject.code}
              role="listitem"
              className={`flex min-h-[76px] items-center justify-between gap-4 p-4 ${
                index > 0 ? "border-t border-zinc-200" : ""
              }`}
            >
              <div className="flex min-w-0 items-center gap-3">
                <span
                  aria-hidden="true"
                  className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-lg border border-zinc-200 bg-zinc-50 text-[11px] font-semibold tracking-tight text-zinc-600"
                >
                  {subject.code}
                </span>

                <div className="min-w-0">
                  <h2 className="text-sm font-medium">{subject.name}</h2>
                  <p className="mt-1 text-xs text-zinc-500">
                    Study material · {subject.kind}
                  </p>
                </div>
              </div>

              <a
                href={subject.file}
                download={subject.file.split("/").pop()}
                aria-label={`Download ${subject.name} study material`}
                className="inline-flex min-h-9 shrink-0 items-center justify-center gap-2 rounded-md border border-zinc-900 bg-zinc-900 px-3 text-xs font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2"
              >
                <DownloadIcon />
                Download
              </a>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs leading-5 text-zinc-500">
          Study materials are served from the{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5">public/files</code>{" "}
          folder using the filenames configured in the page.
        </p>
      </section>
    </main>
  );
}
