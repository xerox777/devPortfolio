import Image from "next/image";
import Head from "next/head";
import Navbar from '../components/navbar';

export default function PDFViewer() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen  ">
        <Navbar />
        <div className="w-full h-screen">
          <iframe
            src="/GrantFonsecaResume.pdf"
            className="w-full h-full"
            title="PDF Viewer"
          />
        </div>
      </section>
    </main>
  );
}
