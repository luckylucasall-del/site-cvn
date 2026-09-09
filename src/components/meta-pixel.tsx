import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[][];
      version?: string;
      loaded?: boolean;
    };
    _fbq?: Window["fbq"];
    __metaPixelInitialized?: boolean;
  }
}

const pixelId = import.meta.env.VITE_META_PIXEL_ID || "2345117496319374";

export function MetaPixel() {
  const location = useLocation();

  useEffect(() => {
    if (!pixelId || typeof window === "undefined") return;

    if (!window.fbq) {
      const fbq = ((...args: unknown[]) => {
        if (fbq.callMethod) {
          fbq.callMethod(...args);
        } else {
          fbq.queue?.push(args);
        }
      }) as NonNullable<Window["fbq"]>;

      fbq.queue = [];
      fbq.version = "2.0";
      fbq.loaded = true;
      window.fbq = fbq;
      window._fbq = fbq;

      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(script);
    }

    if (!window.__metaPixelInitialized) {
      window.fbq("init", pixelId);
      window.__metaPixelInitialized = true;
    }

    window.fbq("track", "PageView");
  }, [location.pathname]);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}
