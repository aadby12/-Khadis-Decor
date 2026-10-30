import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-wide flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-serif text-5xl">This page is not in the showroom.</h1>
      <p className="mt-4 max-w-md text-taupe">
        The link may have changed. Return to the collection or send a WhatsApp enquiry from the
        contact page.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="btn btn-primary">
          Home
        </Link>
        <Link href="/shop" className="btn btn-secondary">
          Shop
        </Link>
      </div>
    </div>
  );
}
