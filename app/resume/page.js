import Image from "next/image";
import Head from "next/head";

// export default function PDFViewer() {
//   return (
//     <div className="w-full h-screen">
//       <iframe
//         src="/GrantFonsecaResume.pdf"
//         className="w-full h-full"
//         title="PDF Viewer"
//       />
//     </div>
//   );
// }
// import PDFViewerClient from '../components/PDFViewer';
// import dynamic from 'next/dynamic';
// const PDFViewerClient = dynamic(() => import('../components/PDFViewer'), {
//   ssr: false
//});

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function ResumePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  const PDFViewerClient = require('../components/PDFViewer').default;
  return (
    <div>
      <h1>My Resume PDF</h1>
      <PDFViewerClient />
    </div>
  );
}
