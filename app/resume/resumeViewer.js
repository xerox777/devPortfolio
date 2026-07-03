"use client";
import { useState, useCallback, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 2.5;
const ZOOM_STEP = 0.25;

export default function ResumeViewer() {
  const [numPages, setNumPages] = useState(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const onDocumentLoadSuccess = useCallback(({ numPages }) => setNumPages(numPages), []);

  const zoomOut = () => setZoom((z) => Math.max(MIN_ZOOM, +(z - ZOOM_STEP).toFixed(2)));
  const zoomIn = () => setZoom((z) => Math.min(MAX_ZOOM, +(z + ZOOM_STEP).toFixed(2)));
  const resetZoom = () => setZoom(1);

  // Base width fits the page to the container; zoom scales up/down from there.
  const baseWidth = containerWidth ? Math.min(containerWidth - 32, 900) : 800;
  const pageWidth = baseWidth * zoom;

  return (
    <>
      <div className="flex items-center justify-center gap-3 mb-6">
        <button
          onClick={zoomOut}
          disabled={zoom <= MIN_ZOOM}
          aria-label="Zoom out"
          className="w-10 h-10 flex items-center justify-center bg-secondary hover:bg-border border border-border hover:border-accent rounded-lg text-text-primary transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ZoomOut size={18} />
        </button>
        <span className="text-text-secondary text-sm font-medium w-14 text-center">
          {Math.round(zoom * 100)}%
        </span>
        <button
          onClick={zoomIn}
          disabled={zoom >= MAX_ZOOM}
          aria-label="Zoom in"
          className="w-10 h-10 flex items-center justify-center bg-secondary hover:bg-border border border-border hover:border-accent rounded-lg text-text-primary transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ZoomIn size={18} />
        </button>
        <button
          onClick={resetZoom}
          aria-label="Reset zoom"
          className="flex items-center gap-1.5 px-3 h-10 bg-secondary hover:bg-border border border-border hover:border-accent rounded-lg text-text-secondary hover:text-text-primary text-sm font-medium transition-colors duration-200"
        >
          <RotateCcw size={14} />
          Reset
        </button>
      </div>

      <div
        ref={containerRef}
        className="w-full max-w-4xl mx-auto rounded-xl border border-border shadow-lg shadow-accent/20 bg-secondary overflow-auto"
        style={{ maxHeight: "80vh" }}
      >
        <Document
          file="/GrantFonsecaResume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div className="p-10 text-center text-text-secondary">Loading resume…</div>}
          error={<div className="p-10 text-center text-text-secondary">Couldn&apos;t load the resume PDF.</div>}
        >
          {Array.from({ length: numPages || 0 }, (_, i) => (
            <Page
              key={i}
              pageNumber={i + 1}
              width={pageWidth}
              className="mx-auto mb-4 [&>canvas]:!h-auto"
            />
          ))}
        </Document>
      </div>
    </>
  );
}
