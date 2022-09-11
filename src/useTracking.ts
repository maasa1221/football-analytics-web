import { useEffect } from "react";
import { useLocation } from "react-router";

declare global {
  interface Window {
    gtag?: (
      key: string,
      trackingId: string,
      config: {
        page_title: string;
        page_location: string;
        page_path: string;
        send_to: string;
      }
    ) => void;
  }
}

/* eslint no-undef: 0 */
export const useTracking = () => {
  const location = useLocation();
  useEffect(() => {
    const { pathname, search } = location;
    if (!window.gtag) return;

    const searchParams = new URLSearchParams(search);
    const page = searchParams.get("page");
    const pagePath = pathname + `${page ? "/" + page : ""}`;

    window.gtag("event", "page_view", {
      page_title: pagePath,
      page_location: window.location.href.split("?")[0],
      page_path: pagePath,
      // @ts-ignore
      send_to: GA_MEASUREMENT_ID
    });
  }, [location]);
};
