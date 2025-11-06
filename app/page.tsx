import Image from "next/image";

const motifs = [
  {
    id: "sun",
    label: "Dielli",
    description: "Shkëlqimi i dritës që hap rrugën e diturisë.",
    icon: "☀️"
  },
  {
    id: "book",
    label: "Libri",
    description: "Faqe të reja që thithin çdo hap të mësimit.",
    icon: "📖"
  },
  {
    id: "thread",
    label: "Fije",
    description: "Mendime të endura si qilima të artë.",
    icon: "🧵"
  }
];

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-parchment text-ink-700">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.6),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(163,140,114,0.5),_transparent_55%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-16 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-8">
          <div className="shrink-0 rounded-3xl border border-amber-200/60 bg-white/70 p-6 shadow-[0_25px_80px_-40px_rgba(62,46,28,0.7)] backdrop-blur">
            <Image
              src="/logo.svg"
              alt="Motiv ornamental shqiptar"
              width={120}
              height={120}
              className="h-16 w-16"
              priority
            />
          </div>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-700/90">
              Jam duke mësuar
            </p>
            <h1 className="font-display text-4xl leading-tight text-ink-500 sm:text-5xl lg:text-7xl">
              Jam duke mësuar, duke vizatuar fjalë me dritë dhe ngrohtësi.
            </h1>
            <p className="max-w-xl font-body text-lg text-ink-700/70 sm:text-xl">
              Kjo faqe është një mbishkrim i butë që të kujton se mësimi është art i durimit. Çdo germë buron nga një frymë e re, çdo fjali lartëson zemrën.
            </p>
          </div>
        </header>

        <section className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {motifs.map((motif) => (
            <article
              key={motif.id}
              className="group relative overflow-hidden rounded-2xl border border-amber-100/80 bg-white/70 p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/40 via-transparent to-amber-200/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative space-y-3">
                <span className="text-3xl sm:text-4xl">{motif.icon}</span>
                <h2 className="font-display text-2xl text-ink-500">{motif.label}</h2>
                <p className="font-body text-ink-700/75">{motif.description}</p>
              </div>
            </article>
          ))}
        </section>

        <footer className="mt-auto flex flex-col items-start gap-4 border-t border-amber-100/50 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-body text-sm uppercase tracking-[0.3em] text-ink-700/60">
            Mësimi është udhëtim i pafund.
          </div>
          <div className="flex items-center gap-3 text-sm text-ink-700/60">
            <span>Ndriçim</span>
            <span className="inline-block h-1 w-12 rounded-full bg-amber-400/70" />
            <span>Durim</span>
            <span className="inline-block h-1 w-12 rounded-full bg-amber-400/70" />
            <span>Gëzim</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
