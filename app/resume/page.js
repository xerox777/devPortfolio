import Image from "next/image";
import Head from "next/head";

export default function PDFViewer() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/GrantFonsecaResume.pdf"
        className="w-full h-full"
        title="PDF Viewer"
      />
    </div>
  );
}
