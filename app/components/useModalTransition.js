"use client";
import { useState, useCallback, useEffect } from 'react';

const CLOSE_DURATION = 200;

// Shared open/close state for portal-rendered modals: handles the enter/exit
// fade transition, Escape-to-close, and body scroll locking.
export default function useModalTransition() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => {
    setVisible(false);
    window.setTimeout(() => setIsOpen(false), CLOSE_DURATION);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const raf = requestAnimationFrame(() => setVisible(true));
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, close]);

  return { isOpen, visible, open, close };
}
