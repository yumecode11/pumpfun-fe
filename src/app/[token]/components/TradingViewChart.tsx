"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect } from "react";

const CONTAINER_ID = "tradingview_chart";

const TradingViewChart: FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if ((window as any).TradingView) {
        new (window as any).TradingView.widget({
          symbol: "SOLUSDT",
          interval: "H",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: CONTAINER_ID,
          width: "100%",
        });
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id={CONTAINER_ID} className="w-full h-[500px]" />
    </div>
  );
};

export default TradingViewChart;
