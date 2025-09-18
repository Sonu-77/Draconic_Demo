"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createChart, CandlestickSeries, LineStyle } from "lightweight-charts";
import { DATA } from "@/data/data";
import SectorOverview from "./SectorOverview";
import SectorComparison from "./SectorCamparision";
import VAMPanels from "./VAMPanels";

// -------- helpers ----------
const round1 = (n) => (typeof n === "number" ? Number(n.toFixed(1)) : n);
const pct = (a, b) => (a == null || b == null ? null : ((a - b) / b) * 100);
const fmtTime = (unixSec) =>
  new Date(unixSec * 1000).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

const formatBucketLabel = (unixSeconds, timeframe) => {
  const d = new Date(unixSeconds * 1000);
  const pad = (n) => String(n).padStart(2, "0");
  let H = d.getHours();
  let M = d.getMinutes();
  if (timeframe === "5m" || timeframe === "15m") {
    M = M < 30 ? 0 : 30;
    return `${pad(H)}:${pad(M)}`;
  }
  if (timeframe === "1h") return `${pad(H)}:00`;
  return `${pad(H)}:${pad(M)}`;
};

// -------- tiny DOM makers (markers sit ON TOP of candles) ----------
function makeTag(text, bg = "#2563eb", title = "") {
  const el = document.createElement("div");
  el.style.position = "absolute";
  el.style.zIndex = "5"; // above zone + level pills
  el.style.transform = "translate(-50%, -100%)";
  el.style.padding = "2px 6px";
  el.style.fontSize = "11px";
  el.style.fontWeight = "700";
  el.style.lineHeight = "1";
  el.style.color = "#fff";
  el.style.background = bg;
  el.style.borderRadius = "6px";
  el.style.pointerEvents = "auto"; // allow hover
  el.style.whiteSpace = "nowrap";
  el.textContent = text;
  el.title = title || text;

  const tip = document.createElement("div");
  tip.style.position = "absolute";
  tip.style.left = "50%";
  tip.style.bottom = "-5px";
  tip.style.transform = "translateX(-50%)";
  tip.style.width = "0";
  tip.style.height = "0";
  tip.style.borderLeft = "5px solid transparent";
  tip.style.borderRight = "5px solid transparent";
  tip.style.borderTop = `5px solid ${bg}`;
  el.appendChild(tip);
  return el;
}

function makePill(text, bg = "#f59e0b", fg = "#111827", title = "") {
  const el = document.createElement("div");
  el.style.position = "absolute";
  el.style.zIndex = "4";
  el.style.transform = "translateY(-50%)";
  el.style.padding = "2px 6px";
  el.style.fontSize = "11px";
  el.style.fontWeight = "700";
  el.style.color = fg;
  el.style.background = bg;
  el.style.borderRadius = "6px";
  el.style.pointerEvents = "auto";
  el.style.whiteSpace = "nowrap";
  el.textContent = text;
  el.title = title || text;
  return el;
}

function makeZoneLabel(text) {
  const el = document.createElement("div");
  el.style.position = "absolute";
  el.style.zIndex = "3";
  el.style.transform = "translate(-50%, -120%)";
  el.style.padding = "2px 6px";
  el.style.fontSize = "10px";
  el.style.fontWeight = "700";
  el.style.color = "#111827";
  el.style.background = "#e879f9";
  el.style.borderRadius = "6px";
  el.style.pointerEvents = "auto";
  el.style.whiteSpace = "nowrap";
  el.textContent = text;
  el.title = text;
  return el;
}

// =================================================================

export default function ChartView() {
  const containerRef = useRef(null);
  const [hover, setHover] = useState(null);

  const [symbol, setSymbol] = useState(DATA[0]?.chart_data.symbol || "");
  const [timeframe, setTimeframe] = useState("1h");

  const symbolEntry = DATA.find((d) => d.chart_data.symbol === symbol);
  const chartData = symbolEntry?.chart_data?.[timeframe];

  // sector cards
  const highlights = symbolEntry?.chart_data?.highlights;
  const infrastructure = symbolEntry?.chart_data?.infrastructure;
  const itServices = symbolEntry?.chart_data?.itServices;
  const financial = symbolEntry?.chart_data?.financial;
  const banking = symbolEntry?.chart_data?.banking;
  const pharma = symbolEntry?.chart_data?.pharma;

  // V/A/M
  const metricVel = chartData?.metrics?.velocity || [];
  const metricAcc = chartData?.metrics?.acceleration || [];
  const metricMag = chartData?.metrics?.magnitude || [];

  // overlays from annotations
  const { supports, resistances, testArea, swingAnns } = useMemo(() => {
    const anns = chartData?.annotations || [];
    return {
      supports: anns.filter((a) => a.annotation_type === "support_band"),
      resistances: anns.filter((a) => a.annotation_type === "resistance_band"),
      testArea: anns.find((a) => a.annotation_type === "test_area") || null,
      swingAnns: anns.filter(
        (a) => a.shape_type === "triangle" && a.center?.time
      ),
    };
  }, [chartData]);

  function classifySwingLabels(swingAnns = []) {
    const sorted = [...swingAnns].sort((a, b) => a.center.time - b.center.time);

    let lastHigh = null;
    let lastLow = null;

    return sorted.map((a) => {
      const price = Number(a.center?.price);
      const isLow = a.annotation_type === "swing_low";
      let kind; // "Higher High" | "Lower High" | "Equal High" | "Higher Low" | "Lower Low" | "Equal Low"

      if (isLow) {
        if (lastLow == null) kind = "Low";
        else if (price < lastLow) kind = "Lower Low";
        else if (price > lastLow) kind = "Higher Low";
        else kind = "Equal Low";
        lastLow = price;
      } else {
        if (lastHigh == null) kind = "High";
        else if (price > lastHigh) kind = "Higher High";
        else if (price < lastHigh) kind = "Lower High";
        else kind = "Equal High";
        lastHigh = price;
      }
      return { ...a, __swingKind: kind };
    });
  }

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
      upColor: "#11a071",
      downColor: "#be1314",
      wickUpColor: "#17c964",
      wickDownColor: "#f31260",
      borderVisible: false,
    });

    series.setData(chartData.candles);
    chart.timeScale().fitContent?.();

    // CURRENT PRICE (only dotted line we keep)
    if (chartData?.candles?.length) {
      const lastC = chartData.candles.at(-1);
      if (lastC?.close != null) {
        series.createPriceLine?.({
          price: round1(lastC.close),
          color: "#f58319",
          lineWidth: 1,
          lineStyle: LineStyle.Dotted,
          axisLabelVisible: true,
          title: `${round1(lastC.close)}`,
        });
      }
    }

    /* =========================
     * SUPPORT/RESISTANCE LINES + PILLS (NEW)
     * ========================= */
    const SR_COLOR = { support: "#3bd292", resistance: "#f0461e" }; // green / red

    // 1) dotted price lines (no axis labels)
    const srAnns = (chartData.annotations || []).filter(
      (a) =>
        a.shape_type === "line" &&
        (a.annotation_type === "support_band" ||
          a.annotation_type === "resistance_band")
    );

    const srLines = [];
    srAnns.forEach((a) => {
      const price = a.points?.[0]?.price;
      if (typeof price !== "number") return;
      const color =
        a.annotation_type === "support_band" ? SR_COLOR.support : SR_COLOR.resistance;

      const line = series.createPriceLine({
        price: round1(price),
        color,
        lineWidth: 2,
        lineStyle: LineStyle.Dotted,
        axisLabelVisible: false, // we'll add our own pill label
      });
      srLines.push(line);
    });

    // 2) overlay for line-pills
    const srOverlay = document.createElement("div");
    srOverlay.style.position = "absolute";
    srOverlay.style.inset = "0";
    srOverlay.style.pointerEvents = "none";
    srOverlay.style.zIndex = "3";
    el.appendChild(srOverlay);

    const makeSRPill = (text, bg) => {
      const pill = document.createElement("div");
      pill.style.position = "absolute";
      pill.style.transform = "translateY(-50%)";
      pill.style.padding = "2px 6px";
      pill.style.fontSize = "11px";
      pill.style.fontWeight = "700";
      pill.style.lineHeight = "1";
      pill.style.color = "#fff";
      pill.style.background = bg;
      pill.style.borderRadius = "6px";
      pill.style.whiteSpace = "nowrap";
      pill.style.pointerEvents = "none";
      pill.textContent = text;
      return pill;
    };

    const srPills = srAnns.map((a) => {
      const isSupport = a.annotation_type === "support_band";
      const bg = isSupport ? SR_COLOR.support : SR_COLOR.resistance;
      const pill = makeSRPill(a.text || (isSupport ? "Support" : "Resistance"), bg);
      srOverlay.appendChild(pill);
      return { pill, price: a.points?.[0]?.price };
    });

    const placeSR = () => {
      const toY = (p) => series.priceToCoordinate(p);
      const range = chart.timeScale().getVisibleRange?.();

      // near left edge of visible range
      let leftX = el.clientWidth * 0.05;
      if (range && range.from != null) {
        const x = chart.timeScale().timeToCoordinate(range.from);
        if (x != null) leftX = x + 8;
      }

      srPills.forEach(({ pill, price }) => {
        const y = toY(price);
        pill.style.display = y == null ? "none" : "block";
        if (y != null) {
          pill.style.left = `${leftX}px`;
          pill.style.top = `${y}px`;
        }
      });
    };

    setTimeout(placeSR, 0);
    const unsubSR = chart.timeScale().subscribeVisibleTimeRangeChange?.(placeSR);
    const roSR = new ResizeObserver(() => {
      chart.applyOptions({ width: el.clientWidth });
      placeSR();
    });
    roSR.observe(el);

    // ---------- overlay layer (on top of canvases) ----------
    const overlay = document.createElement("div");
    overlay.style.position = "absolute";
    overlay.style.inset = "0";
    overlay.style.zIndex = "999"; // ensure over canvases
    overlay.style.pointerEvents = "none"; // children opt-in
    el.appendChild(overlay);

    const objects = [];

    // Swing markers (blue, with Higher/Lower labels)
    const swingsWithKind = classifySwingLabels(swingAnns || []);
    swingsWithKind.forEach((a) => {
      const isLow = a.annotation_type === "swing_low";
      const abbr = isLow ? "SL" : "SH";
      const pivotText = a.pivot ? ` (${a.pivot})` : "";
      const kindText = a.__swingKind ? ` ${a.__swingKind}` : "";
      const label = `${abbr}${pivotText}${kindText}`.trim();

      const title = `${isLow ? "Swing Low" : "Swing High"} • ${
        a.__swingKind || ""
      } • ${round1(a.center.price)}`;
      const tag = makeTag(label, "#2563eb", title);

      overlay.appendChild(tag);
      objects.push({
        type: "swing",
        el: tag,
        time: a.center.time,
        price: a.center.price,
      });
    });

    // Test Area (shaded rectangle + label)
    const zones = [];
    if (testArea?.points?.length >= 2) {
      const top = testArea.points[0];
      const bottom = testArea.points[1];

      const zone = document.createElement("div");
      zone.style.position = "absolute";
      zone.style.zIndex = "1";
      zone.style.background = "rgba(168, 85, 247, 0.12)";
      zone.style.border = "1px dotted #a855f7";
      zone.style.borderRadius = "4px";
      zone.style.pointerEvents = "none";
      overlay.appendChild(zone);

      const labelText =
        typeof testArea.time_in_zone_pct === "number"
          ? `${testArea.time_in_zone_pct}% Time in Zone`
          : testArea.text || "Test Area";
      const zLabel = makeZoneLabel(labelText);
      overlay.appendChild(zLabel);

      zones.push({
        zone,
        zLabel,
        t1: top.time,
        t2: bottom.time,
        p1: top.price,
        p2: bottom.price,
      });
    }

    // position overlays (swings + zone)
    const place = () => {
      const toX = (t) => chart.timeScale().timeToCoordinate(t);
      const toY = (p) => series.priceToCoordinate(p);

      objects.forEach((o) => {
        if (o.type === "swing") {
          const x = toX(o.time);
          const y = toY(o.price);
          o.el.style.display = x == null || y == null ? "none" : "block";
          if (x != null && y != null) {
            o.el.style.left = `${x}px`;
            o.el.style.top = `${y}px`;
          }
        }
      });

      zones.forEach((z) => {
        const x1 = toX(z.t1);
        const x2 = toX(z.t2);
        const y1 = toY(z.p1);
        const y2 = toY(z.p2);
        if ([x1, x2, y1, y2].some((v) => v == null)) {
          z.zone.style.display = "none";
          z.zLabel.style.display = "none";
          return;
        }
        z.zone.style.display = "block";
        z.zLabel.style.display = "block";
        const left = Math.min(x1, x2);
        const right = Math.max(x1, x2);
        const top = Math.min(y1, y2);
        const bottom = Math.max(y1, y2);
        z.zone.style.left = `${left}px`;
        z.zone.style.top = `${top}px`;
        z.zone.style.width = `${right - left}px`;
        z.zone.style.height = `${bottom - top}px`;
        z.zLabel.style.left = `${(left + right) / 2}px`;
        z.zLabel.style.top = `${top}px`;
      });
    };

    // initial + reactive
    setTimeout(place, 0);
    const unsubRange = chart
      .timeScale()
      .subscribeVisibleTimeRangeChange?.(place);
    const ro = new ResizeObserver(() => {
      chart.applyOptions({ width: el.clientWidth });
      place();
    });
    ro.observe(el);

    const onMove = (param) => {
      const point = param?.seriesData?.get?.(series);
      setHover(point && typeof point.open === "number" ? point : null);
    };
    chart.subscribeCrosshairMove(onMove);

    return () => {
      // cleanup SR
      try { unsubSR && chart.timeScale().unsubscribeVisibleTimeRangeChange?.(placeSR); } catch {}
      try { roSR.disconnect(); } catch {}
      try { el.removeChild(srOverlay); } catch {}

      // cleanup overlay + observers
      try { chart.unsubscribeCrosshairMove(onMove); } catch {}
      try {
        unsubRange &&
          chart.timeScale().unsubscribeVisibleTimeRangeChange?.(place);
      } catch {}
      try { ro.disconnect(); } catch {}
      try { el.removeChild(overlay); } catch {}
      try { chart.remove(); } catch {}
    };
  }, [chartData, timeframe, supports, resistances, testArea, swingAnns]);

  const last = chartData?.candles?.at?.(-1);
  const show = hover || last;
  const changeAbs = show ? round1(show.close - show.open) : null;
  const changePct = show ? round1(pct(show.close, show.open)) : null;
  const isUp = show ? show.close - show.open >= 0 : false;

  return (
    <main className="min-h-screen bg-[#0f0f0f] rounded-2xl text-gray-200 p-4">
      <div className="max-w-[1100px] mx-auto mt-6 space-y-3">
        {/* selectors */}
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

        {/* card header */}
        <div
          className="rounded-2xl border border-[#2a2e37] bg-[#0f1115] p-3 shadow-inner"
          style={{ boxShadow: "0 0 0 1px #1b1f27 inset" }}
        >
          <div className="mb-2 flex items-center justify-between text-sm">
            <div className="flex flex-wrap items-baseline gap-3">
              <strong className="tracking-wide font-semibold">{symbol}</strong>
              <span>•</span>
              <span>{timeframe}</span>
              {chartData && show && (
                <span className="opacity-80">
                  O <b className="text-red-500">{round1(show.open)}</b>
                  &nbsp;&nbsp; H{" "}
                  <b className="text-red-500">{round1(show.high)}</b>
                  &nbsp;&nbsp; L{" "}
                  <b className="text-red-500">{round1(show.low)}</b>&nbsp;&nbsp;
                  C <b className="text-red-500">{round1(show.close)}</b>
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

          {/* chart canvas + overlay */}
          <div
            ref={containerRef}
            className="w-full h-[420px] rounded-xl overflow-hidden relative"
          />
        </div>

        {/* V/A/M boxes (unchanged) */}
        <VAMPanels
          velocity={metricVel}
          acceleration={metricAcc}
          magnitude={metricMag}
        />

        {/* Optional: sector sections */}
        <SectorOverview
          highlights={highlights}
          infrastructure={infrastructure}
          itServices={itServices}
          financial={financial}
          banking={banking}
          pharma={pharma}
        />
        <SectorComparison />
      </div>
    </main>
  );
}
