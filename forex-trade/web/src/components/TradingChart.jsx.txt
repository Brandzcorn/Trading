import React, { useEffect, useRef } from "react";

export default function TradingChart({ symbol = "FX:EURUSD" }) {
  const chartContainerRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js"; 
    script.async = true;
    script.innerHTML = `
      new TradingView.widget({
        "width": "100%",
        "height": "400",
        "symbol": "${symbol}",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hide_top_toolbar": false,
        "save_image": false
      });
    `;
    chartContainerRef.current.appendChild(script);
  }, [symbol]);

  return <div ref={chartContainerRef}></div>;
}