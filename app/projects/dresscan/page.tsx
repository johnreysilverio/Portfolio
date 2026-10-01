import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "DresScan Project Overview",
  description:
    "An evidence-led overview of DresScan, a YOLO-based attire assessment application developed at Holy Cross of Davao College.",
  alternates: { canonical: "/projects/dresscan" },
};

const stack = ["Python", "YOLOv8", "OpenCV", "Tkinter", "Pillow", "pyttsx3"];

const metricHighlights = [
  ["Long sleeve", "100%", "90%", "94.74%"],
  ["Blazer", "100%", "100%", "100%"],
  ["Black hair", "100%", "100%", "100%"],
  ["Blonde hair", "100%", "100%", "100%"],
  ["ID", "96.97%", "65.31%", "78.05%"],
];

export default function DresScanProjectOverview() {
  return (
    <main className="min-h-screen bg-[#121212] text-[#ececec]">
      <article>
        <header className="border-b border-white/10 bg-[url('/svg/bg-dark.svg')] bg-cover bg-center">
          <div className="mx-auto max-w-6xl px-6 py-10 sm:px-10 sm:py-16">
            <Link href="/#craft" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-highlight">
              <ArrowLeft size={16} /> Back to projects
            </Link>
            <div className="mt-12 max-w-4xl">
              <p className="font-semibold uppercase tracking-[0.25em] text-highlight">Project overview · Computer vision</p>
              <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl">DresScan</h1>
              <p className="mt-5 text-xl leading-relaxed text-white/75 sm:text-2xl">
                A desktop application that uses real-time object detection to assess attire against school dress-code guidelines and provide immediate visual and spoken feedback.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://github.com/johnreysilverio/DresScan" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-highlight px-5 py-3 font-semibold text-white hover:opacity-85">
                  <Github size={18} /> View source
                </a>
                <a href="https://dl.acm.org/doi/10.1145/3789595.3789608" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 font-semibold hover:bg-white/10">
                  <ExternalLink size={18} /> Read publication
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-6xl space-y-20 px-6 py-16 sm:px-10">
          <section aria-labelledby="overview-title" className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-highlight">The project</p>
              <h2 id="overview-title" className="mt-3 text-3xl font-bold">Automating a manual, inconsistent check</h2>
              <p className="mt-5 text-lg leading-8 text-white/70">
                DresScan was created by John Rey Silverio, John Smile Mella, and Cleeve Philip Wong at Holy Cross of Davao College. A webcam supplies live frames to two YOLO models: one detects clothing and school IDs, while the other handles hair-color categories. The interface marks detections, lists violations, and announces the result through text-to-speech.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {stack.map((item) => <span key={item} className="rounded-full bg-white/10 px-4 py-2 text-sm">{item}</span>)}
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-3 self-start">
              {[["30", "Evaluation respondents"], ["4.3/5", "Overall acceptance"], ["2", "YOLO models"], ["25–75%", "Thresholds evaluated"]].map(([value, label]) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                  <dt className="text-sm text-white/50">{label}</dt>
                  <dd className="mt-1 text-2xl font-bold text-highlight">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="credits-title" className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-highlight">Project credits</p>
            <h2 id="credits-title" className="mt-3 text-3xl font-bold">A collaborative capstone and publication</h2>
            <div className="mt-7 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-white">Student researchers and developers</h3>
                <ul className="mt-3 space-y-2 text-white/65">
                  <li>John Rey J. Silverio</li>
                  <li>John Smile D. Mella</li>
                  <li>Cleeve Philip E. Wong</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white">Additional publication coauthors</h3>
                <ul className="mt-3 space-y-2 text-white/65">
                  <li>Eujene B. Elumbaring</li>
                  <li>Arvin G. Lauron</li>
                  <li>Owen B. Pilongo</li>
                </ul>
              </div>
            </div>
            <p className="mt-7 border-t border-white/10 pt-5 text-sm leading-6 text-white/50">
              Contributor names follow the publication record for “YOLO-Based AI Application for Attire Appropriateness Assessment in Educational Environments.”
            </p>
          </section>

          <section aria-labelledby="proof-title">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-highlight">Working prototype</p>
            <h2 id="proof-title" className="mt-3 text-3xl font-bold">Tested with a live camera feed</h2>
            <p className="mt-4 max-w-3xl leading-7 text-white/65">
              The prototype was demonstrated on campus using a camera, computer, and secondary display. Bounding boxes show the detected classes while the right-hand panel communicates whether attire is allowed.
            </p>
            <figure className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black">
              <Image src="/png/projects/dresscan/live-detection.jpg" alt="DresScan running on a large display and detecting attire from a live campus camera feed" width={1056} height={488} className="h-auto w-full" priority />
              <figcaption className="border-t border-white/10 px-5 py-3 text-sm text-white/50">On-site prototype evaluation documented in the research paper.</figcaption>
            </figure>
          </section>

          <section aria-labelledby="states-title">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-highlight">Interface states</p>
            <h2 id="states-title" className="mt-3 text-3xl font-bold">The result is visible, specific, and immediate</h2>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <figure className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                <Image src="/png/projects/dresscan/allowed-result.jpg" alt="DresScan detecting school attire and ID, then showing an all clothing allowed status" width={1319} height={742} className="h-auto w-full" />
                <figcaption className="p-5"><strong>Allowed state.</strong> <span className="text-white/60">The detected attire includes the required ID and produces a green approval message.</span></figcaption>
              </figure>
              <figure className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                <Image src="/png/projects/dresscan/missing-id-result.jpg" alt="DresScan detecting attire without a school ID and listing No ID as a violation" width={1319} height={742} className="h-auto w-full" />
                <figcaption className="p-5"><strong>Violation state.</strong> <span className="text-white/60">When no ID is detected, the application reports “No ID” and shows an unauthorized-attire warning.</span></figcaption>
              </figure>
            </div>
          </section>

          <section aria-labelledby="architecture-title" className="grid items-start gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-highlight">Architecture</p>
              <h2 id="architecture-title" className="mt-3 text-3xl font-bold">Local, real-time processing</h2>
              <p className="mt-5 leading-7 text-white/70">
                The camera sends frames to a desktop computer running DresScan and YOLOv8. Results are rendered in the desktop interface and can be shown on a secondary monitor. The public implementation uses OpenCV for capture, Tkinter for the interface, and pyttsx3 for offline voice feedback.
              </p>
            </div>
            <figure className="overflow-hidden rounded-2xl bg-white p-4">
              <Image src="/png/projects/dresscan/system-architecture.png" alt="DresScan hardware and software block diagram connecting a camera, computer, YOLOv8, and secondary monitor" width={762} height={756} className="h-auto w-full" />
            </figure>
          </section>

          <section aria-labelledby="metrics-title">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-highlight">Model evaluation</p>
            <h2 id="metrics-title" className="mt-3 text-3xl font-bold">Confidence changes the precision–recall balance</h2>
            <p className="mt-4 max-w-4xl leading-7 text-white/65">
              The study tested individual classes at 25%, 50%, and 75% confidence. Raising the threshold reduced false positives for several classes, but it also increased missed detections. At the 50% threshold, some categories performed strongly while ID detection remained a clear improvement area.
            </p>
            <div className="mt-8 overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full min-w-[620px] text-left">
                <caption className="sr-only">Selected results at the 50 percent confidence threshold</caption>
                <thead className="bg-white/10 text-sm text-white/60"><tr><th className="px-5 py-4">Class</th><th className="px-5 py-4">Precision</th><th className="px-5 py-4">Recall</th><th className="px-5 py-4">F1 score</th></tr></thead>
                <tbody>{metricHighlights.map(([name, precision, recall, f1]) => <tr key={name} className="border-t border-white/10"><th className="px-5 py-4 font-medium">{name}</th><td className="px-5 py-4 text-white/65">{precision}</td><td className="px-5 py-4 text-white/65">{recall}</td><td className="px-5 py-4 text-white/65">{f1}</td></tr>)}</tbody>
              </table>
            </div>
            <details className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <summary className="cursor-pointer font-semibold">View the complete class-level tables</summary>
              <div className="mt-5 grid gap-5 xl:grid-cols-3">
                {[25, 50, 75].map((threshold) => <figure key={threshold} className="overflow-hidden rounded-lg bg-white p-2"><Image src={`/png/projects/dresscan/metrics-${threshold}.png`} alt={`Class-level DresScan precision, recall, and F1 results at ${threshold} percent confidence`} width={642} height={504} className="h-auto w-full" /><figcaption className="pt-2 text-center text-sm font-semibold text-black">{threshold}% confidence</figcaption></figure>)}
              </div>
            </details>
          </section>

          <section aria-labelledby="evaluation-title" className="rounded-2xl border border-highlight/30 bg-highlight/10 p-7 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-highlight">User evaluation</p>
            <h2 id="evaluation-title" className="mt-3 text-3xl font-bold">Accepted by users, with limitations documented</h2>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-white/75">
              Thirty students, teachers, and security guards evaluated DresScan. The study reports an overall mean of 4.3 out of 5, described as very high. Effort expectancy, social influence, and self-efficacy each received 4.4; performance expectancy received 4.3.
            </p>
            <p className="mt-4 max-w-4xl leading-7 text-white/65">
              The paper recommends improving dataset quality, augmenting and retraining the models, refining ID detection, and optimizing real-time performance. These limitations are important: the prototype demonstrates feasibility and acceptance, but it is not presented as a production-ready enforcement system.
            </p>
          </section>

          <section aria-labelledby="research-title" className="grid gap-8 border-t border-white/10 pt-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-highlight">Published research</p>
              <h2 id="research-title" className="mt-3 text-3xl font-bold">Read the complete work</h2>
              <p className="mt-4 leading-7 text-white/65">The full publication contains the research context, methodology, complete evaluation tables, conclusions, and recommendations behind this overview.</p>
              <a href="https://dl.acm.org/doi/10.1145/3789595.3789608" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-semibold text-highlight hover:underline"><ExternalLink size={18} /> Open the ACM publication</a>
            </div>
            <figure className="overflow-hidden rounded-xl border border-white/10 bg-white p-3">
              <Image src="/png/projects/dresscan-research-poster.jpg" alt="DresScan research poster" width={1368} height={1824} className="h-80 w-full object-cover object-top" />
              <figcaption className="pt-3 text-center text-sm font-medium text-black">Research poster preview</figcaption>
            </figure>
          </section>
        </div>
      </article>
    </main>
  );
}
