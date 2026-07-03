"use client";
import dynamic from "next/dynamic";
import Navbar from "../components/navbar";

// pdfjs-dist relies on browser-only APIs (e.g. DOMMatrix), so this must never
// be rendered during SSR.
const ResumeViewer = dynamic(() => import("./resumeViewer"), {
  ssr: false,
  loading: () => (
    <div className="p-10 text-center text-text-secondary">Loading resume…</div>
  ),
});

export default function PDFViewer() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary px-10">
      <section className="min-h-screen pb-16">
        <Navbar />
        <ResumeViewer />
      </section>
    </main>
  );
}
