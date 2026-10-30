"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/logo";
import { BookmarkIcon, CloseIcon, MenuIcon, SearchIcon } from "@/components/icons";
import { SearchDialog } from "@/components/layout/search-dialog";
import { useEnquiry } from "@/components/enquiry/enquiry-provider";
import { categories, decorativeFinishIds } from "@/lib/categories";
import { business } from "@/lib/business";

const nav = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop", mega: true },
  { href: "/shop/wallpapers", label: "Wallpapers" },
  { href: "/shop?group=finishes", label: "Decorative Finishes" },
  { href: "/inspiration", label: "Inspiration" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { count } = useEnquiry();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-ink text-paper">
        <div className="container-wide flex items-center justify-between gap-4 py-2 text-[0.68rem] tracking-[0.16em] uppercase">
          <p className="truncate">Showroom · {business.location.display}</p>
          <Link href="/contact" className="hidden shrink-0 hover:text-champagne sm:inline">
            WhatsApp to enquire
          </Link>
        </div>
      </div>
      <div
        className={`border-b border-ink/10 bg-paper/95 backdrop-blur-sm transition-shadow ${
          scrolled ? "shadow-[0_8px_30px_rgba(36,31,27,0.06)]" : ""
        }`}
      >
        <div className="container-wide flex h-[4.4rem] items-center justify-between gap-6">
          <Logo compact />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`text-[0.78rem] tracking-[0.14em] uppercase transition-colors hover:text-bronze ${
                    pathname === item.href ? "text-bronze" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
                {item.mega ? (
                  <div className="invisible absolute left-1/2 top-full z-30 w-[520px] -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100">
                    <div className="grid grid-cols-2 gap-2 border border-ink/10 bg-paper p-5 shadow-xl">
                      {categories.map((category) => (
                        <Link
                          key={category.id}
                          href={category.href}
                          className="px-3 py-3 hover:bg-ivory"
                        >
                          <span className="block text-sm text-ink">{category.name}</span>
                          <span className="mt-1 block text-xs leading-5 text-taupe">
                            {category.tagline}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="grid h-11 w-11 place-items-center text-ink"
              aria-label="Search products"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
            <Link href="/enquiry" className="relative grid h-11 w-11 place-items-center" aria-label="Enquiry list">
              <BookmarkIcon className="h-5 w-5" />
              {count > 0 ? (
                <span className="absolute top-1.5 right-1.5 grid h-4 min-w-4 place-items-center bg-ink px-1 text-[0.6rem] text-paper">
                  {count}
                </span>
              ) : null}
            </Link>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      {menuOpen ? (
        <div className="fixed inset-x-0 top-[calc(2.1rem+4.4rem)] bottom-0 z-30 overflow-y-auto bg-paper lg:hidden">
          <nav className="container-page py-6" aria-label="Mobile">
            <div className="space-y-1">
              {nav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block border-b border-ink/10 py-4 text-lg"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="eyebrow mt-8">Categories</p>
            <div className="mt-3 grid gap-2">
              {categories.map((category) => (
                <Link key={category.id} href={category.href} className="py-2 text-taupe">
                  {category.name}
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/shop?group=finishes" className="btn btn-primary w-full">
                Decorative finishes
              </Link>
            </div>
            <p className="mt-8 text-sm text-taupe">
              {decorativeFinishIds.length} finishing categories, organised for enquiry rather than
              checkout.
            </p>
          </nav>
        </div>
      ) : null}
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
