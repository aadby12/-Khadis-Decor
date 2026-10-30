"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import type { EnquiryItem } from "@/lib/types";

const STORAGE_KEY = "khadis-decor-enquiry-list";
const EMPTY: EnquiryItem[] = [];

let memory: EnquiryItem[] = EMPTY;
const listeners = new Set<() => void>();

function readStorage(): EnquiryItem[] {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as EnquiryItem[];
    return Array.isArray(parsed) ? parsed : EMPTY;
  } catch {
    return EMPTY;
  }
}

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  queueMicrotask(() => {
    if (memory === EMPTY) {
      const stored = readStorage();
      if (stored.length > 0) {
        memory = stored;
        emit();
      }
    }
  });
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return memory;
}

function getServerSnapshot() {
  return EMPTY;
}

function writeItems(next: EnquiryItem[]) {
  memory = next;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  emit();
}

type EnquiryContextValue = {
  items: EnquiryItem[];
  ready: boolean;
  toast: string | null;
  addItem: (item: EnquiryItem) => void;
  removeItem: (slug: string) => void;
  updateItem: (slug: string, patch: Partial<EnquiryItem>) => void;
  clear: () => void;
  hasItem: (slug: string) => boolean;
  count: number;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | null>(null);

  const showToast = useCallback((message: string) => {
    setToast(message);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2600);
  }, []);

  const addItem = useCallback(
    (item: EnquiryItem) => {
      const current = getSnapshot();
      const existing = current.find((entry) => entry.slug === item.slug);
      const next = existing
        ? current.map((entry) =>
            entry.slug === item.slug
              ? { ...entry, quantity: entry.quantity + (item.quantity || 1) }
              : entry,
          )
        : [...current, { ...item, quantity: item.quantity || 1 }];
      writeItems(next);
      showToast("Saved to your enquiry list");
    },
    [showToast],
  );

  const removeItem = useCallback((slug: string) => {
    writeItems(getSnapshot().filter((entry) => entry.slug !== slug));
  }, []);

  const updateItem = useCallback((slug: string, patch: Partial<EnquiryItem>) => {
    writeItems(
      getSnapshot().map((entry) => (entry.slug === slug ? { ...entry, ...patch } : entry)),
    );
  }, []);

  const clear = useCallback(() => writeItems([]), []);

  const value = useMemo<EnquiryContextValue>(
    () => ({
      items,
      ready: true,
      toast,
      addItem,
      removeItem,
      updateItem,
      clear,
      hasItem: (slug: string) => items.some((entry) => entry.slug === slug),
      count: items.reduce((total, entry) => total + entry.quantity, 0),
    }),
    [addItem, clear, items, removeItem, toast, updateItem],
  );

  return (
    <EnquiryContext.Provider value={value}>
      {children}
      {toast ? (
        <div
          role="status"
          className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 border border-ink/10 bg-ink px-4 py-2.5 text-[0.72rem] tracking-[0.14em] text-paper uppercase shadow-lg"
        >
          {toast}
        </div>
      ) : null}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error("useEnquiry must be used within EnquiryProvider");
  }
  return context;
}
