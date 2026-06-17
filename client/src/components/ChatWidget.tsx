/* ============================================================
   BETTER KNOW BO — LeadConnector Chat Widget
   Loads on every page EXCEPT the Contact page (which has the form).
   ============================================================ */

import { useEffect } from "react";
import { useLocation } from "wouter";

const LOADER_SRC = "https://widgets.leadconnectorhq.com/loader.js";
const WIDGET_ID = "6a30fd730e84ef9ef92ee5c8";
const HIDE_STYLE_ID = "bkb-chat-widget-hide";

// Routes that should NOT show the chat widget.
const EXCLUDED_PATHS = ["/pg/contact"];

export default function ChatWidget() {
  const [location] = useLocation();
  const excluded = EXCLUDED_PATHS.includes(location);

  useEffect(() => {
    // Inject the loader script once (the widget persists across SPA routes).
    if (!document.querySelector(`script[src="${LOADER_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = LOADER_SRC;
      script.async = true;
      script.setAttribute(
        "data-resources-url",
        "https://widgets.leadconnectorhq.com/chat-widget/loader.js",
      );
      script.setAttribute("data-widget-id", WIDGET_ID);
      document.body.appendChild(script);
    }

    // Toggle visibility of the injected widget based on the current route.
    let style = document.getElementById(HIDE_STYLE_ID) as HTMLStyleElement | null;
    if (excluded) {
      if (!style) {
        style = document.createElement("style");
        style.id = HIDE_STYLE_ID;
        document.head.appendChild(style);
      }
      style.textContent =
        "chat-widget,#lc_text-widget,[id^='lc_text-widget']{display:none !important;}";
    } else if (style) {
      style.textContent = "";
    }
  }, [excluded]);

  return null;
}
