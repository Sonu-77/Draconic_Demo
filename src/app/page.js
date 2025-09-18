"use client";

import { useEffect, useRef, useState } from "react";
import { createChart, CandlestickSeries, LineStyle } from "lightweight-charts";
import { DATA } from "@/data/data";

const round1 = (n) => (typeof n === "number" ? Number(n.toFixed(2)) : n);
const pct = (a, b) => (a == null || b == null ? null : ((a - b) / b) * 100);
const fmtTime = (unixSec) =>
  new Date(unixSec * 1000).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

export default function Home() {
  const containerRef = useRef(null);
  const [hover, setHover] = useState(null);

  const [symbol, setSymbol] = useState(DATA[0]?.chart_data.symbol || "");
  const [timeframe, setTimeframe] = useState("1h"); // static dropdown values

  // pick symbol entry, then timeframe dataset inside chart_data
  const symbolEntry = DATA.find((d) => d.chart_data.symbol === symbol);
  const chartData = symbolEntry?.chart_data?.[timeframe];

  const last = chartData?.candles?.at?.(-1);
  const prev = chartData?.candles?.at?.(-2);
  const changePct = prev ? round1(pct(last.close, prev.close)) : null;

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
      timeScale: { borderVisible: false },
      grid: { vertLines: { visible: false }, horzLines: { visible: false } },
      crosshair: { mode: 0 },
    });

    const series = chart.addSeries(CandlestickSeries, {
      upColor: "#17c964",
      downColor: "#f31260",
      wickUpColor: "#17c964",
      wickDownColor: "#f31260",
      borderVisible: false,
    });

    series.setData(chartData.candles);
    chart.timeScale().fitContent?.();

    if (last?.close != null) {
      series.createPriceLine?.({
        price: round1(last.close),
        color: "#f59e0b",
        lineWidth: 1,
        lineStyle: LineStyle.Dotted,
        axisLabelVisible: true,
        title: `${round1(last.close)}`,
      });
    }

    (chartData.annotations || [])
      .filter((a) => a.shape_type === "line")
      .forEach((a) => {
        const price = a.points?.[0]?.price;
        if (typeof price === "number") {
          series.createPriceLine?.({
            price: round1(price),
            color: a.annotation_type === "support_band" ? "#3b82f6" : "#fbbf24",
            lineWidth: 1,
            lineStyle: LineStyle.Dotted,
            axisLabelVisible: true,
            title: a.text ?? "",
          });
        }
      });

    const markers = (chartData.annotations || [])
      .filter((a) => a.shape_type === "triangle" && a.center?.time)
      .map((a) => ({
        time: a.center.time,
        position: "aboveBar",
        color: "#f31260",
        shape: "arrowDown",
        text: a.text || "Swing High",
      }));
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
      try { chart.unsubscribeCrosshairMove(onMove); } catch {}
      try { ro.disconnect(); } catch {}
      try { chart.remove(); } catch {}
    };
  }, [chartData, last?.close]);

  const show = hover || last;

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
            {Array.from(new Set(DATA.map((d) => d.chart_data.symbol))).map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
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
                {chartData ? timeframe : <span className="text-rose-400">timeframe not exist</span>}
              </span>
              {chartData && (
                <span className="opacity-80">
                  O <b className="text-red-500">{round1(show.open)}</b>&nbsp;&nbsp;
                  H <b className="text-red-500">{round1(show.high)}</b>&nbsp;&nbsp;
                  L <b className="text-red-500">{round1(show.low)}</b>&nbsp;&nbsp;
                  C <b className="text-red-500">{round1(show.close)}</b>
                  {hover == null && prev && (
                    <span className={`ml-2 ${show.close - prev.close >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                      {show.close - prev.close >= 0 ? "+" : ""}
                      {round1(pct(show.close, prev.close))}% ({round1(show.close - prev.close)})
                    </span>
                  )}
                </span>
              )}
            </div>
            <div className="text-xs opacity-70">
              {chartData && `Last updated ${fmtTime(chartData.candles.at(-1).time)}`}
            </div>
          </div>

          {/* Chart */}
          <div ref={containerRef} className="w-full h-[420px] rounded-xl overflow-hidden" />
        </div>
      </div>
    </main>
  );
}
