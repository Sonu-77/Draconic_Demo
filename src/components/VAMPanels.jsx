"use client";

import React, { useId, useMemo } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  BarChart,
  Bar,
  Customized,
} from "recharts";

const round1 = (n) =>
  typeof n === "number" && isFinite(n) ? Number(n.toFixed(1)) : n ?? "-";

function Panel({ title, children, footer }) {
  return (
    <div
      className="rounded-xl border border-[#2a2e37] bg-[#0f1115] p-4 shadow-inner"
      style={{ boxShadow: "0 0 0 1px #1b1f27 inset" }}
    >
      <div className="text-xs tracking-widest text-[#aa8705] mb-3">{title}</div>
      {children}
      {footer ? (
        <div className="mt-3 text-xs text-[#aa8705] leading-snug">{footer}</div>
      ) : null}
    </div>
  );
}

/* -------- Velocity -------- */
function VelocityCard({ rows = [] }) {
  // normalize values so the dot position matches proportions like in the mock
  const stats = useMemo(() => {
    const vals = rows.map((r) => Number(r?.value ?? 0));
    const max = Math.max(0, ...vals);
    const vmaxIdx = vals.length ? vals.indexOf(max) : -1;
    return { max, vmaxIdx };
  }, [rows]);

  const footer =
    stats.vmaxIdx >= 0
      ? `Max velocity observed at Swing ${stats.vmaxIdx + 1} (${
          rows[stats.vmaxIdx].label
        }) at ${Number(rows[stats.vmaxIdx].value).toFixed(2)} ${
          Number(rows[stats.vmaxIdx].value) >= 0
            ? "which is an up swing."
            : "which is a down swing."
        }`
      : "";

  return (
    <Panel title="VELOCITY" footer={footer}>
      <div className="space-y-2.5">
        {rows.map((d, i) => {
          const v = Number(d?.value ?? 0);
          // a little headroom so the longest dot doesn't hug the edge
          const denom = stats.max > 0 ? stats.max * 1.05 : 1;
          const pct = Math.max(0, Math.min(100, (v / denom) * 100));

          return (
            <div
              key={`vel-${i}`}
              className="flex items-center justify-between text-xs text-gray-300"
            >
              {/* left labels */}
              <div className="flex items-center gap-2 w-36 shrink-0">
                <span className="text-[#aa8705] w-16">SWING {i + 1}</span>
                <span className="text-[#aa8705]">{d?.label ?? "-"}</span>
              </div>

              {/* track with vertical ticks + dashed path + dot */}
              <div className="relative h-5 w-full mx-3">
                {/* subtle vertical guide ticks (like the screenshot) */}
                <div className="pointer-events-none absolute inset-0 grid grid-cols-6">
                  {Array.from({ length: 6 }).map((_, k) => (
                    <div
                      key={k}
                      // className="border-r border-[#262a33]/90"
                      // style={{ borderStyle: "dotted" }}
                    />
                  ))}
                </div>

                {/* dashed path from left to dot */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 border-t border-dashed"
                  style={{
                    width: `${pct}%`,
                    borderColor: "#fde047",
                    opacity: 0.95,
                  }}
                />

                {/* dot at the end of the dashed path */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    left: `calc(${pct}% - 5px)`,
                    width: 10,
                    height: 10,
                    background: "#fde047",
                    boxShadow: "0 0 0 2px rgba(253,224,71,0.15)",
                  }}
                  aria-label={`velocity ${v.toFixed(2)}`}
                />
              </div>

              {/* right value */}
              <span className="w-10 text-[#aa8705] text-right font-semibold">
                {v.toFixed(2)}
              </span>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}

/* -------- Acceleration -------- */

function AccelerationCard({ rows = [] }) {
  const data = useMemo(
    () =>
      rows.map((d, i) => ({
        x: i + 1,
        y: Number(d?.value ?? 0),
        label: d?.label ?? `SWING ${i + 1}→${i + 2}`,
        swing: `SWING ${i + 1}`,
      })),
    [rows]
  );

  // y padding so labels don't clip
  const [yMin, yMax] = useMemo(() => {
    if (!data.length) return [0, 1];
    const ys = data.map((d) => d.y);
    const min = Math.min(...ys);
    const max = Math.max(...ys);
    const pad = Math.max(0.1, (max - min) * 0.175);
    return [min - pad, max + pad];
  }, [data]);

  // footer text
  const segMaxIdx = useMemo(() => {
    if (!rows.length) return -1;
    let idx = 0;
    for (let i = 1; i < rows.length; i++) {
      if ((+rows[i].value || -Infinity) > (+rows[idx].value || -Infinity))
        idx = i;
    }
    return idx;
  }, [rows]);

  const footer =
    segMaxIdx >= 0
      ? `Acceleration peaks at Swing ${segMaxIdx + 1} to Swing ${
          segMaxIdx + 2
        } with ${Number(rows[segMaxIdx].value ?? 0).toFixed(4)}.`
      : "";

  // ---- helpers for captions like "SWING 1 (A–B)"
  const normalizeLegFromRow = (i) => {
    const raw = rows[i]?.label;
    if (typeof raw === "string") {
      const m = raw.match(/([A-Za-z])\s*[–\-→]\s*([A-Za-z])/);
      if (m) return `${m[1].toUpperCase()}–${m[2].toUpperCase()}`;
    }
    const a = String.fromCharCode(65 + i);
    const b = String.fromCharCode(66 + i);
    return `${a}–${b}`;
  };

  // base caption offsets (like the mock)
  const CAP_OFFSETS = [
    { dx: -10, dy: 18 },
    { dx: -8, dy: -14 },
    { dx: -8, dy: 18 },
    { dx: -10, dy: -14 },
  ];

  /* ========= 1) Segment values (gray numbers) via Customized ========= */
  const Overlay = (props) => {
    const items = props?.formattedGraphicalItems || props?.graphicalItems || [];
    // robustly pick the first item that has 'points'
    const line = items.find((it) => it?.props?.points?.length);
    const pts = line?.props?.points || [];
    if (!pts.length) return null;

    return (
      <g style={{ pointerEvents: "none" }}>
        {pts.slice(0, -1).map((p, i) => {
          const q = pts[i + 1];
          const mx = (p.x + q.x) / 2;
          const my = (p.y + q.y) / 2 - 6;
          const ang = Math.atan2(q.y - p.y, q.x - p.x) * (180 / Math.PI);
          const val = Number(rows[i + 1]?.value ?? data[i + 1].y).toFixed(4);
          return (
            <text
              key={`seg-${i}`}
              x={mx}
              y={my}
              fontSize={10}
              fill="#9ca3af"
              textAnchor="middle"
              transform={`rotate(${ang}, ${mx}, ${my})`}
              style={{
                paintOrder: "stroke",
                stroke: "rgba(15,17,21,0.9)",
                strokeWidth: 2,
              }}
            >
              {val}
            </text>
          );
        })}
      </g>
    );
  };

  /* ========= 2) Swing captions (yellow) ON THE DOTS via LabelList ========= */
  const renderSwingCaption = ({ x, y, index }) => {
    if (x == null || y == null) return null;
    const leg = normalizeLegFromRow(index);
    const caption = `SWING ${index + 1} (${leg})`;

    const base = CAP_OFFSETS[index] || { dx: -6, dy: index % 2 ? -14 : 18 };
    const isLast = index === rows.length - 1;

    return (
      <text
        x={x + (isLast ? -8 : base.dx)}
        y={y + base.dy}
        fontSize={11}
        fontWeight="700"
        fill="#fde047"
        textAnchor={isLast ? "end" : "start"} // keep last label inside the box
        style={{
          paintOrder: "stroke",
          stroke: "rgba(15,17,21,0.6)",
          strokeWidth: 3,
        }}
      >
        {caption}
      </text>
    );
  };

  // (Optional) small numeric value at each dot. Keep if you want; remove to match the mock exactly.
  const renderDotValue = ({ x, y, value }) => {
    if (x == null || y == null || value == null) return null;
    const txt = Number(value).toFixed(4);
    return (
      <text
        x={x}
        y={y - 10}
        fontSize={10}
        fill="#F774BD"
        textAnchor="middle"
        style={{
          paintOrder: "stroke",
          stroke: "rgba(15,17,21,0.85)",
          strokeWidth: 2,
        }}
      >
        {txt}
      </text>
    );
  };

  return (
    <Panel title="ACCELERATION" footer={footer}>
      <div className="h-[180px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 22, right: 24, left: 24, bottom: 24 }}
          >
            <XAxis dataKey="x" hide />
            <YAxis hide domain={[yMin, yMax]} />
            <Line
              type="linear"
              dataKey="y"
              stroke="#fde047"
              strokeWidth={3}
              dot={{ r: 5, stroke: "#fde047", fill: "#fde047" }}
              activeDot={false}
              isAnimationActive={false}
            >
              {/* yellow SWING n (A–B) captions at the dots */}
              <LabelList dataKey="y" content={renderSwingCaption} />
              {/* (optional) number above each dot */}
              <LabelList dataKey="y" content={renderDotValue} />
            </Line>

            {/* gray segment values along the lines */}
            <Customized content={<Overlay />} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}

/* -------- Magnitude -------- */
function MagnitudeCard({ rows = [] }) {
  const gid = useId().replace(/:/g, "");
  const maxV = Math.max(...rows.map((d) => Number(d?.value ?? 0)), 1);
  const data = rows.map((d, i) => ({
    cat: `SWING ${i + 1}`,
    value: Number(d?.value ?? 0),
  }));

  const mmaxIdx =
    rows.length > 0
      ? rows.reduce(
          (b, d, i) =>
            (+d?.value || -Infinity) > (+rows[b]?.value || -Infinity) ? i : b,
          0
        )
      : -1;

  const footer =
    mmaxIdx >= 0
      ? `Peak magnitude occurs at ${rows[mmaxIdx].label}: ${round1(
          rows[mmaxIdx].value
        )} pts.`
      : "";

  return (
    <Panel title="MAGNITUDE" footer={footer}>
      <div className="h-[140px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ left: 8, right: 8, top: 4, bottom: 4 }}
            barSize={14}
          >
            <defs>
              <linearGradient id={`magGrad-${gid}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#fde68a" />
              </linearGradient>
            </defs>
            <CartesianGrid
              stroke="#262a33"
              // strokeDasharray="3 6"
              // horizontal
              vertical={false}
            />
            <XAxis type="number" hide domain={[0, Math.ceil(maxV * 1.1)]} />
            <YAxis
              dataKey="cat"
              type="category"
              width={72}
              tick={{ fill: "#f59e0b", fontSize: 12 }}
            />
            <Bar
              dataKey="value"
              fill={`url(#magGrad-${gid})`}
              radius={[999, 999, 999, 999]}
            >
              <LabelList
                dataKey="value"
                position="right"
                formatter={(v) => round1(v)}
                className="text-[11px] text-[#aa8705] fill-gray-200"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}

export default function VAMPanels({
  velocity = [],
  acceleration = [],
  magnitude = [],
  className = "",
}) {
  return (
    <section className={`w-full ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <VelocityCard rows={velocity} />
        <AccelerationCard rows={acceleration} />
        <MagnitudeCard rows={magnitude} />
      </div>
    </section>
  );
}
