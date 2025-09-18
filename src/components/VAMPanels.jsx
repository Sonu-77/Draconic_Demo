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
} from "recharts";

const round1 = (n) =>
  typeof n === "number" && isFinite(n) ? Number(n.toFixed(1)) : n ?? "-";

function Panel({ title, children, footer }) {
  return (
    <div
      className="rounded-xl border border-[#2a2e37] bg-[#0f1115] p-4 shadow-inner"
      style={{ boxShadow: "0 0 0 1px #1b1f27 inset" }}
    >
      <div className="text-xs tracking-widest text-gray-300/70 mb-3">{title}</div>
      {children}
      {footer ? <div className="mt-3 text-xs text-gray-400 leading-snug">{footer}</div> : null}
    </div>
  );
}

/* -------- Velocity -------- */
function VelocityCard({ rows = [] }) {
  const data = useMemo(
    () => rows.map((d, i) => ({ x: i + 1, y: Number(d?.value ?? 0), lbl: d?.label || `A–B` })),
    [rows]
  );
  const vmaxIdx =
    rows.length > 0
      ? rows.reduce((b, d, i) => ((+d?.value || -Infinity) > (+rows[b]?.value || -Infinity) ? i : b), 0)
      : -1;

  const footer =
    vmaxIdx >= 0
      ? `Max velocity observed at ${rows[vmaxIdx].label} with ${round1(rows[vmaxIdx].value)}.`
      : "";

  return (
    <Panel title="VELOCITY" footer={footer}>
      <div className="grid grid-cols-12 gap-3 items-start">
        <div className="col-span-7">
          <div className="h-[96px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 6, right: 6, left: 6, bottom: 0 }}>
                <CartesianGrid stroke="#262a33" strokeDasharray="3 6" vertical={false} />
                <XAxis dataKey="x" hide />
                <YAxis hide domain={["dataMin - 0.05", "dataMax + 0.05"]} />
                <Line
                  type="monotone"
                  dataKey="y"
                  stroke="#fde047"
                  strokeWidth={2}
                  dot={{ r: 3, stroke: "#fde047", fill: "#fde047" }}
                  activeDot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-span-5">
          <div className="space-y-1.5">
            {rows.map((d, i) => (
              <div key={`v-${i}`} className="flex items-center justify-between text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 w-16">SWING {i + 1}</span>
                  <span className="text-gray-400">{d?.label ?? "-"}</span>
                </div>
                <span className="font-semibold">{round1(d?.value)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
}

/* -------- Acceleration -------- */
function AccelerationCard({ rows = [] }) {
  const data = rows.map((d, i) => ({
    x: i + 1,
    y: Number(d?.value ?? 0),
    lbl: d?.label ?? `Swing ${i + 1}`,
  }));

  const amaxIdx =
    rows.length > 0
      ? rows.reduce((b, d, i) => ((+d?.value || -Infinity) > (+rows[b]?.value || -Infinity) ? i : b), 0)
      : -1;

  const footer =
    amaxIdx >= 0
      ? `Acceleration peaks at ${rows[amaxIdx].label} with ${round1(rows[amaxIdx].value)}.`
      : "";

  return (
    <Panel title="ACCELERATION" footer={footer}>
      <div className="h-[140px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 12, left: 12, bottom: 8 }}>
            <CartesianGrid stroke="#262a33" strokeDasharray="3 6" />
            <XAxis dataKey="x" hide />
            <YAxis hide domain={["dataMin - 0.05", "dataMax + 0.05"]} />
            <Line
              type="monotone"
              dataKey="y"
              stroke="#fbbf24"
              strokeWidth={2}
              dot={{ r: 3.5, stroke: "#fbbf24", fill: "#fbbf24" }}
              activeDot={false}
            >
              <LabelList dataKey="y" position="top" formatter={(v) => round1(v)} className="text-[10px] fill-gray-300" />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-1 grid grid-cols-4 gap-2 text-[10px] text-gray-400">
        {data.map((d, i) => (
          <div key={`al-${i}`} className="truncate text-center">{d.lbl}</div>
        ))}
      </div>
    </Panel>
  );
}

/* -------- Magnitude -------- */
function MagnitudeCard({ rows = [] }) {
  const gid = useId().replace(/:/g, "");
  const maxV = Math.max(...rows.map((d) => Number(d?.value ?? 0)), 1);
  const data = rows.map((d, i) => ({ cat: `SWING ${i + 1}`, value: Number(d?.value ?? 0) }));

  const mmaxIdx =
    rows.length > 0
      ? rows.reduce((b, d, i) => ((+d?.value || -Infinity) > (+rows[b]?.value || -Infinity) ? i : b), 0)
      : -1;

  const footer =
    mmaxIdx >= 0
      ? `Peak magnitude occurs at ${rows[mmaxIdx].label}: ${round1(rows[mmaxIdx].value)} pts.`
      : "";

  return (
    <Panel title="MAGNITUDE" footer={footer}>
      <div className="h-[140px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 8, right: 8, top: 4, bottom: 4 }} barSize={14}>
            <defs>
              <linearGradient id={`magGrad-${gid}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#fde68a" />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#262a33" strokeDasharray="3 6" horizontal vertical={false} />
            <XAxis type="number" hide domain={[0, Math.ceil(maxV * 1.1)]} />
            <YAxis dataKey="cat" type="category" width={62} tick={{ fill: "#9ca3af", fontSize: 12 }} />
            <Bar dataKey="value" fill={`url(#magGrad-${gid})`} radius={[999, 999, 999, 999]}>
              <LabelList dataKey="value" position="right" formatter={(v) => round1(v)} className="text-[11px] fill-gray-200" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}

export default function VAMPanels({ velocity = [], acceleration = [], magnitude = [], className = "" }) {
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
