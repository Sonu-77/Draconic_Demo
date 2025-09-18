"use client";

import { useEffect, useRef, useState } from "react";
import { createChart, CandlestickSeries, LineStyle } from "lightweight-charts";
import { DATA } from "@/data/data";
import SectorOverview from "./SectorOverview";
import SectorComparison from "./SectorCamparision";
import VAMPanels from "./VAMPanels";

// 1 decimal everywhere (client requirement)
const round1 = (n) => (typeof n === "number" ? Number(n.toFixed(1)) : n);
const pct = (a, b) => (a == null || b == null ? null : ((a - b) / b) * 100);
const fmtTime = (unixSec) =>
  new Date(unixSec * 1000).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

// --- helper for fixed bucket labels (unchanged except rounding policy above) ---
const formatBucketLabel = (unixSeconds, timeframe) => {
  const d = new Date(unixSeconds * 1000);
  let H = d.getHours();
  let M = d.getMinutes();
  const pad = (n) => String(n).padStart(2, "0");

  if (timeframe === "5m" || timeframe === "15m") {
    M = M < 30 ? 0 : 30; // snap to :00 or :30
    return `${pad(H)}:${pad(M)}`;
  }
  if (timeframe === "1h") {
    return `${pad(H)}:00`; // hourly labels at :00
  }
  return `${pad(H)}:${pad(M)}`;
};

export default function ChartView() {
  const containerRef = useRef(null);
  const [hover, setHover] = useState(null);

  const [symbol, setSymbol] = useState(DATA[0]?.chart_data.symbol || "");
  const [timeframe, setTimeframe] = useState("1h");

  const symbolEntry = DATA.find((d) => d.chart_data.symbol === symbol);
  const chartData = symbolEntry?.chart_data?.[timeframe];

  // overview
  const highlights = symbolEntry?.chart_data?.highlights;
  const infrastructure = symbolEntry?.chart_data?.infrastructure;
  const itServices = symbolEntry?.chart_data?.itServices;
  const financial = symbolEntry?.chart_data?.financial;
  const banking = symbolEntry?.chart_data?.banking;
  const pharma = symbolEntry?.chart_data?.pharma;

  // metrics
  const metricVel = chartData.metrics?.velocity || [];
  const metricAcc = chartData.metrics?.acceleration || [];
  const metricMag = chartData.metrics?.magnitude || [];

  const testAreas = (chartData?.annotations || []).filter(
    (a) => a.annotation_type === "test_area"
  );

  const last = chartData?.candles?.at?.(-1);
  const prev = chartData?.candles?.at?.(-2);

  useEffect(() => {
    if (!chartData) return;
    const el = containerRef.current;
    if (!el) return;

    const chart = createChart(el, {
      width: el.clientWidth,
      height: 420,
      layout: {
        background: { type: "solid", color: "#0f1115" },
        textColor: "#e5e7eb",
      },
      rightPriceScale: { borderVisible: false },
      // use our fixed bucket labels
      timeScale: {
        borderVisible: false,
        timeVisible: true,
        secondsVisible: false,
        tickMarkFormatter: (time) => formatBucketLabel(time, timeframe),
      },
      grid: { vertLines: { visible: false }, horzLines: { visible: false } },
      crosshair: { mode: 0 },
    });

    const series = chart.addSeries(CandlestickSeries, {
      upColor: "#17c964", // green like mock
      downColor: "#f31260", // red like mock
      wickUpColor: "#17c964",
      wickDownColor: "#f31260",
      borderVisible: false,
    });

    series.setData(chartData.candles);
    chart.timeScale().fitContent?.();

    // current price dotted line with axis label (orange)
    if (chartData?.candles?.length) {
      const lastC = chartData.candles[chartData.candles.length - 1];
      if (lastC?.close != null) {
        series.createPriceLine?.({
          price: round1(lastC.close),
          color: "#f59e0b",
          lineWidth: 1,
          lineStyle: LineStyle.Dotted,
          axisLabelVisible: true,
          title: `${round1(lastC.close)}`,
        });
      }
    }

    // resistance/support dotted lines (colors adjusted to match mock)
    (chartData.annotations || [])
      .filter(
        (a) =>
          a.shape_type === "line" &&
          (a.annotation_type === "support_band" ||
            a.annotation_type === "resistance_band")
      )
      .forEach((a) => {
        const price = a.points?.[0]?.price;
        if (typeof price === "number") {
          series.createPriceLine?.({
            price: round1(price),
            color:
              a.annotation_type === "support_band"
                ? "#34d399" /* emerald */
                : "#fbbf24" /* amber */,
            lineWidth: 1,
            lineStyle: LineStyle.Dotted,
            axisLabelVisible: true,
            title: a.text ?? "",
          });
        }
      });

    // test-area: keep the two dotted lines (top/bottom) like your version
    testAreas.forEach((ta, idx) => {
      const p1 = ta.points?.[0]?.price;
      const p2 = ta.points?.[1]?.price;
      if (typeof p1 === "number") {
        series.createPriceLine?.({
          price: round1(p1),
          color: "#a78bfa",
          lineWidth: 1,
          lineStyle: LineStyle.Dotted,
          axisLabelVisible: true,
          title: ta.text ? `${ta.text} (top)` : `Test Area ${idx + 1} top`,
        });
      }
      if (typeof p2 === "number") {
        series.createPriceLine?.({
          price: round1(p2),
          color: "#a78bfa",
          lineWidth: 1,
          lineStyle: LineStyle.Dotted,
          axisLabelVisible: true,
          title: ta.text
            ? `${ta.text} (bottom)`
            : `Test Area ${idx + 1} bottom`,
        });
      }
    });

    // swing markers (keep simple, same API you used)
    const markers =
      (chartData.annotations || [])
        .filter((a) => a.shape_type === "triangle" && a.center?.time)
        .map((a) => ({
          time: a.center.time,
          position: a.annotation_type === "swing_low" ? "belowBar" : "aboveBar",
          color: a.annotation_type === "swing_low" ? "#17c964" : "#f31260",
          shape: a.annotation_type === "swing_low" ? "arrowUp" : "arrowDown",
          text: a.text || (a.annotation_type === "swing_low" ? "SL" : "SH"),
        })) || [];

    if (markers.length && typeof series.setMarkers === "function") {
      series.setMarkers(markers);
    }

    const onMove = (param) => {
      const point = param?.seriesData?.get?.(series);
      if (point && typeof point.open === "number") setHover(point);
      else setHover(null);
    };
    chart.subscribeCrosshairMove(onMove);

    const ro = new ResizeObserver(() =>
      chart.applyOptions({ width: el.clientWidth })
    );
    ro.observe(el);

    return () => {
      try {
        chart.unsubscribeCrosshairMove(onMove);
      } catch {}
      try {
        ro.disconnect();
      } catch {}
      try {
        chart.remove();
      } catch {}
    };
  }, [chartData, timeframe, testAreas.length]);

  const show = hover || last;

  // NEW: change (abs + %) for header; safe, no chart API changes
  const changeAbs = show ? round1(show.close - show.open) : null;
  const changePct = show ? round1(pct(show.close, show.open)) : null;
  const isUp = show ? show.close - show.open >= 0 : false;

  return (
    <main className="min-h-screen bg-[#0b0d11] text-gray-200 p-4">
      <div className="max-w-[1100px] mx-auto mt-6 space-y-3">
        {/* Dropdowns */}
        <div className="flex gap-4">
          <select
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="rounded bg-[#1b1f27] p-2"
          >
            {Array.from(new Set(DATA.map((d) => d.chart_data.symbol))).map(
              (s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              )
            )}
          </select>

          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="rounded bg-[#1b1f27] p-2"
          >
            <option value="1h">1h</option>
            <option value="15m">15m</option>
            <option value="5m">5m</option>
          </select>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl border border-[#2a2e37] bg-[#0f1115] p-3 shadow-inner"
          style={{ boxShadow: "0 0 0 1px #1b1f27 inset" }}
        >
          {/* Header */}
          <div className="mb-2 flex items-center justify-between text-sm">
            <div className="flex flex-wrap items-baseline gap-3">
              <strong className="tracking-wide font-semibold">{symbol}</strong>
              <span>•</span>
              <span>
                {chartData ? (
                  timeframe
                ) : (
                  <span className="text-rose-400">timeframe not exist</span>
                )}
              </span>

              {chartData && show && (
                <span className="opacity-80">
                  O <b className="text-red-500">{round1(show.open)}</b>
                  &nbsp;&nbsp; H{" "}
                  <b className="text-red-500">{round1(show.high)}</b>
                  &nbsp;&nbsp; L{" "}
                  <b className="text-red-500">{round1(show.low)}</b>&nbsp;&nbsp;
                  C <b className="text-red-500">{round1(show.close)}</b>
                  {/* change */}
                  <span
                    className={`ml-2 font-semibold ${
                      isUp ? "text-emerald-400" : "text-rose-400"
                    }`}
                  >
                    {isUp ? "+" : ""}
                    {changeAbs} ({isUp ? "+" : ""}
                    {changePct}%)
                  </span>
                </span>
              )}
            </div>
            <div className="text-xs opacity-70">
              {chartData &&
                `Last updated ${fmtTime(chartData.candles.at(-1).time)}`}
            </div>
          </div>

          {/* Chart */}
          <div
            ref={containerRef}
            className="w-full h-[420px] rounded-xl overflow-hidden"
          />
        </div>
      </div>
      <VAMPanels
        velocity={metricVel}
        acceleration={metricAcc}
        magnitude={metricMag}
      />
      {console.log("inside", metricVel, metricAcc, metricMag)}
      <SectorOverview
        highlights={highlights}
        infrastructure={infrastructure}
        itServices={itServices}
        financial={financial}
        banking={banking}
        pharma={pharma}
      />
      <SectorComparison />
    </main>
  );
}
