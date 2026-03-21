"use client";
import Image from "next/image";
import Head from "next/head";
import Navbar from '../components/navbar';

export default function PDFViewer() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary px-10">
      <section className="min-h-screen">
        <Navbar />
        <div className="w-full h-screen rounded-xl overflow-hidden border border-border shadow-lg shadow-accent/20">
          <iframe
            src="/hub-cross-check-Documentation.pdf"
            className="w-full h-full"
            title="PDF Viewer"
          />
        </div>
      </section>
    </main>
  );
}
