import { DownloadIcon } from "./icons";

export default function DownloadCvBadge() {
  return (
    <a
      href="/Nguyen-Cao-Nhan-CV.pdf"
      download
      title="Download CV"
      className="fixed bottom-6 right-6 z-200 flex items-center gap-2 rounded-full bg-linear-to-r from-accent to-accent-deep px-5 py-3 text-[0.9rem] font-semibold text-white shadow-[0_10px_26px_rgba(6,4,20,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(61,90,255,0.45)]"
    >
      <DownloadIcon className="h-4 w-4" />
      Download CV
    </a>
  );
}
