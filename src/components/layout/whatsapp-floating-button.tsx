import { cn } from "@/lib/utils";

export const CS_WHATSAPP_NUMBER = "6285179875044";
export const CS_WHATSAPP_DISPLAY = "0851-7987-5044";

export function buildWhatsappHref(
  message: string,
  phone: string = CS_WHATSAPP_NUMBER,
): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

interface WhatsappFloatingButtonProps {
  message?: string;
  label?: string;
  className?: string;
}

export function WhatsappFloatingButton({
  message = "Halo CS Wiyata Academy, saya ingin bertanya seputar paket belajar SKD CPNS.",
  label = "Tanya CS",
  className,
}: WhatsappFloatingButtonProps) {
  return (
    <a
      href={buildWhatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Hubungi Customer Service Wiyata Academy via WhatsApp (${CS_WHATSAPP_DISPLAY})`}
      className={cn(
        "fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-emerald-600 px-4 py-3 text-xs font-bold text-white shadow-xl shadow-emerald-900/20 ring-4 ring-white transition-all hover:scale-[1.03] hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 sm:px-5 sm:text-sm print:hidden",
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-5 shrink-0"
        aria-hidden="true"
      >
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2Zm5.82 14.07c-.24.68-1.42 1.31-1.97 1.38-.51.07-1.15.1-1.85-.12-.43-.14-.98-.32-1.69-.63-2.98-1.29-4.93-4.3-5.08-4.5-.15-.2-1.21-1.61-1.21-3.07 0-1.46.76-2.18 1.03-2.48.27-.3.59-.38.79-.38h.57c.18 0 .42-.07.66.5.24.58.83 2.01.9 2.16.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.32.4-.45.53-.15.15-.3.31-.13.61.18.3.79 1.3 1.7 2.11 1.17 1.04 2.15 1.36 2.45 1.51.3.15.48.13.66-.08.18-.2.76-.88.96-1.18.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.58.35.07.13.07.73-.17 1.41Z" />
      </svg>
      <span>{label}</span>
    </a>
  );
}

