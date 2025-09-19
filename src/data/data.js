export const DATA = [
  {
    chart_data: {
      symbol: "AAPL",

      // session_summary: {
      //   date: "2025-09-18",
      //   open: 239.97,
      //   high: 241.2,
      //   low: 236.65,
      //   close: 237.88,
      //   source: "Yahoo Finance daily OHLC",
      // },
      "1h": {
        timeframe: "1h",
        candles_count: 10,
        title: "AAPL 1h",
        subtitle: "10 candles • S/R • Test Area • Swings A–E • Metrics",
        swing_calc: { last_n: 5 }, // make this 7 or 10 if you want more swing points later
        candles: [
          {
            time: 1756188900,
            open: 150.25,
            high: 151.8,
            low: 149.9,
            close: 151.45,
            volume: 2500000,
          },
          {
            time: 1756192500,
            open: 151.45,
            high: 152.3,
            low: 150.85,
            close: 152.1,
            volume: 2300000,
          },
          {
            time: 1756196100,
            open: 152.1,
            high: 153.2,
            low: 151.9,
            close: 152.95,
            volume: 2200000,
          }, // swing A high 153.20
          {
            time: 1756199700,
            open: 152.95,
            high: 153.0,
            low: 151.0,
            close: 151.2,
            volume: 2400000,
          }, // swing B low 151.00
          {
            time: 1756203300,
            open: 151.2,
            high: 152.0,
            low: 150.9,
            close: 151.6,
            volume: 2100000,
          },
          {
            time: 1756206900,
            open: 151.6,
            high: 154.1,
            low: 151.5,
            close: 153.8,
            volume: 2600000,
          }, // swing C high 154.10
          {
            time: 1756210500,
            open: 153.8,
            high: 153.9,
            low: 150.9,
            close: 151.3,
            volume: 2700000,
          }, // swing D low 150.90
          {
            time: 1756214100,
            open: 151.3,
            high: 152.7,
            low: 151.1,
            close: 152.4,
            volume: 2000000,
          },
          {
            time: 1756217700,
            open: 152.4,
            high: 153.6,
            low: 152.2,
            close: 153.2,
            volume: 2100000,
          }, // swing E high 153.60
          {
            time: 1756221300,
            open: 153.2,
            high: 153.5,
            low: 152.6,
            close: 152.9,
            volume: 1900000,
          },
        ],

        annotations: [
          // ---------- Support (3) ----------
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188900, price: 150.8 },
              { time: 1756221300, price: 150.8 },
            ],
            text: "S1 • 1 Test",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188900, price: 151.0 },
              { time: 1756221300, price: 151.0 },
            ],
            text: "S2 • 2 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188900, price: 151.5 },
              { time: 1756221300, price: 151.5 },
            ],
            text: "S3 • 3 Tests",
          },

          // ---------- Resistance (3) ----------
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188900, price: 153.0 },
              { time: 1756221300, price: 153.0 },
            ],
            text: "R1 • 2 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188900, price: 153.6 },
              { time: 1756221300, price: 153.6 },
            ],
            text: "R2 • 1 Test",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188900, price: 154.2 },
              { time: 1756221300, price: 154.2 },
            ],
            text: "R3 • 1 Test",
          },

          // ---------- Test Area (zone) ----------
          {
            shape_type: "rectangle",
            annotation_type: "test_area",
            points: [
              { time: 1756192500, price: 151.2 }, // top
              { time: 1756210500, price: 150.6 }, // bottom
            ],
            tests_count: 2,
            time_in_zone_pct: 20,
            text: "20% Time in Zone • 2 Tests",
          },

          // ---------- Swings (A–E) ----------
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756196100, price: 153.2 },
            direction: "down",
            pivot: "A",
            text: "SH (Higher)",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756199700, price: 151.0 },
            direction: "up",
            pivot: "B",
            text: "SL (Lower)",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756206900, price: 154.1 },
            direction: "down",
            pivot: "C",
            text: "SH (Higher)",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756210500, price: 150.9 },
            direction: "up",
            pivot: "D",
            text: "SL (Lower)",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756217700, price: 153.6 },
            direction: "down",
            pivot: "E",
            text: "SH (Lower)",
          },

          // ---------- Metrics (objects w/ labels; last 5 swings) ----------
          {
            shape_type: "point",
            annotation_type: "metrics",
            metrics: {
              velocity: [
                { label: "A–B", value: 2.2 }, // |153.2-151.0| / 1h
                { label: "B–C", value: 1.55 }, // |151.0-154.1| / 2h
                { label: "C–D", value: 3.2 }, // |154.1-150.9| / 1h
                { label: "D–E", value: 1.35 }, // |150.9-153.6| / 2h
              ],
              acceleration: [
                { label: "Swing 1→2 (A–B→B–C)", value: -0.65 }, // 1.55 - 2.2
                { label: "Swing 2→3 (B–C→C–D)", value: 1.65 }, // 3.2 - 1.55
                { label: "Swing 3→4 (C–D→D–E)", value: -1.85 }, // 1.35 - 3.2
              ],
              magnitude: [
                { label: "A–B", value: 2.2 },
                { label: "B–C", value: 3.1 },
                { label: "C–D", value: 3.2 },
                { label: "D–E", value: 2.7 },
              ],
            },
          },
        ],

        // convenient top-level copy for easy access in UI
        metrics: {
          velocity: [
            { label: "A–B", value: 2.2 },
            { label: "B–C", value: 1.55 },
            { label: "C–D", value: 3.2 },
            { label: "D–E", value: 1.35 },
          ],
          acceleration: [
            { label: "Swing 1→2 (A–B→B–C)", value: -0.65 },
            { label: "Swing 2→3 (B–C→C–D)", value: 1.65 },
            { label: "Swing 3→4 (C–D→D–E)", value: -1.85 },
          ],
          magnitude: [
            { label: "A–B", value: 2.2 },
            { label: "B–C", value: 3.1 },
            { label: "C–D", value: 3.2 },
            { label: "D–E", value: 2.7 },
          ],
        },

        // Optional sector boxes (kept from your sample)
        sector_overview: [
          { sector: "Tech", score: 83, advancers: 56, decliners: 44 },
          { sector: "Finance", score: 71, advancers: 41, decliners: 59 },
          { sector: "Energy", score: 65, advancers: 34, decliners: 66 },
          { sector: "Healthcare", score: 69, advancers: 46, decliners: 54 },
        ],
        sector_comparison: [
          { metric: "1D %", SectorA: "+0.9", SectorB: "+0.3" },
          { metric: "5D %", SectorA: "+2.1", SectorB: "+1.6" },
          { metric: "1M %", SectorA: "+4.3", SectorB: "+3.7" },
        ],

        total_annotations: 11,
        created_at: "2025-09-12T10:30:15.123456",
      },

      "15m": {
        timeframe: "15m",
        candles_count: 20,
        title: "AAPL 15m",
        subtitle: "20 candles • S/R • Test Area • Swings A–E • Metrics",
        swing_calc: { last_n: 5 },
        candles: [
          {
            time: 1756188000,
            open: 150.0,
            high: 150.4,
            low: 149.9,
            close: 150.2,
            volume: 500000,
          },
          {
            time: 1756188900,
            open: 150.2,
            high: 150.6,
            low: 150.0,
            close: 150.5,
            volume: 480000,
          },
          {
            time: 1756189800,
            open: 150.5,
            high: 151.0,
            low: 150.3,
            close: 150.8,
            volume: 460000,
          },
          {
            time: 1756190700,
            open: 150.8,
            high: 151.5,
            low: 150.7,
            close: 151.3,
            volume: 450000,
          },
          {
            time: 1756191600,
            open: 151.3,
            high: 151.8,
            low: 151.1,
            close: 151.6,
            volume: 440000,
          }, // A high 151.8
          {
            time: 1756192500,
            open: 151.6,
            high: 151.7,
            low: 151.2,
            close: 151.3,
            volume: 430000,
          },
          {
            time: 1756193400,
            open: 151.3,
            high: 151.4,
            low: 150.9,
            close: 151.0,
            volume: 420000,
          },
          {
            time: 1756194300,
            open: 151.0,
            high: 151.1,
            low: 150.6,
            close: 150.7,
            volume: 410000,
          }, // B low 150.6
          {
            time: 1756195200,
            open: 150.7,
            high: 150.9,
            low: 150.5,
            close: 150.8,
            volume: 405000,
          },
          {
            time: 1756196100,
            open: 150.8,
            high: 151.2,
            low: 150.7,
            close: 151.0,
            volume: 400000,
          },
          {
            time: 1756197000,
            open: 151.0,
            high: 152.2,
            low: 150.9,
            close: 151.9,
            volume: 455000,
          }, // C high 152.2
          {
            time: 1756197900,
            open: 151.9,
            high: 152.0,
            low: 151.3,
            close: 151.5,
            volume: 440000,
          },
          {
            time: 1756198800,
            open: 151.5,
            high: 151.6,
            low: 151.1,
            close: 151.2,
            volume: 430000,
          },
          {
            time: 1756199700,
            open: 151.2,
            high: 151.3,
            low: 150.9,
            close: 151.0,
            volume: 420000,
          },
          {
            time: 1756200600,
            open: 151.0,
            high: 151.1,
            low: 150.9,
            close: 150.9,
            volume: 415000,
          }, // D low 150.9
          {
            time: 1756201500,
            open: 150.9,
            high: 151.2,
            low: 150.8,
            close: 151.1,
            volume: 410000,
          },
          {
            time: 1756202400,
            open: 151.1,
            high: 151.4,
            low: 151.0,
            close: 151.3,
            volume: 405000,
          },
          {
            time: 1756203300,
            open: 151.3,
            high: 151.7,
            low: 151.1,
            close: 151.6,
            volume: 400000,
          },
          {
            time: 1756204200,
            open: 151.6,
            high: 151.9,
            low: 151.4,
            close: 151.8,
            volume: 395000,
          }, // E high 151.9
          {
            time: 1756205100,
            open: 151.8,
            high: 152.0,
            low: 151.6,
            close: 151.7,
            volume: 390000,
          },
        ],

        annotations: [
          // Supports (3)
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 150.2 },
              { time: 1756205100, price: 150.2 },
            ],
            text: "S1 • 1 Test",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 150.8 },
              { time: 1756205100, price: 150.8 },
            ],
            text: "S2 • 2 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 151.5 },
              { time: 1756205100, price: 151.5 },
            ],
            text: "S3 • 2 Tests",
          },

          // Resistances (3)
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 152.0 },
              { time: 1756205100, price: 152.0 },
            ],
            text: "R1 • 1 Test",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 152.4 },
              { time: 1756205100, price: 152.4 },
            ],
            text: "R2 • 1 Test",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 152.8 },
              { time: 1756205100, price: 152.8 },
            ],
            text: "R3 • 1 Test",
          },

          // Test Area
          {
            shape_type: "rectangle",
            annotation_type: "test_area",
            points: [
              { time: 1756189800, price: 151.0 },
              { time: 1756199700, price: 150.4 },
            ],
            tests_count: 3,
            time_in_zone_pct: 26,
            text: "Test Area • 3 Tests",
          },

          // Swings A–E
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756191600, price: 151.8 },
            direction: "down",
            pivot: "A",
            text: "SH",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756194300, price: 150.6 },
            direction: "up",
            pivot: "B",
            text: "SL",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756197000, price: 152.2 },
            direction: "down",
            pivot: "C",
            text: "SH",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756200600, price: 150.9 },
            direction: "up",
            pivot: "D",
            text: "SL",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756204200, price: 151.9 },
            direction: "down",
            pivot: "E",
            text: "SH",
          },

          // Metrics (last 5 swings)
          {
            shape_type: "point",
            annotation_type: "metrics",
            metrics: {
              velocity: [
                { label: "A–B", value: 1.6 }, // (1.2 over 0.75h)
                { label: "B–C", value: 1.6 }, // (1.6 over 1.0h)
                { label: "C–D", value: 1.73 }, // (1.3 over 0.75h)
                { label: "D–E", value: 1.0 }, // (1.0 over 1.0h)
              ],
              acceleration: [
                { label: "Swing 1→2", value: 0.0 },
                { label: "Swing 2→3", value: 0.13 },
                { label: "Swing 3→4", value: -0.73 },
              ],
              magnitude: [
                { label: "A–B", value: 1.2 },
                { label: "B–C", value: 1.6 },
                { label: "C–D", value: 1.3 },
                { label: "D–E", value: 1.0 },
              ],
            },
          },
        ],

        metrics: {
          velocity: [
            { label: "A–B", value: 1.6 },
            { label: "B–C", value: 1.6 },
            { label: "C–D", value: 1.73 },
            { label: "D–E", value: 1.0 },
          ],
          acceleration: [
            { label: "Swing 1→2", value: 0.0 },
            { label: "Swing 2→3", value: 0.13 },
            { label: "Swing 3→4", value: -0.73 },
          ],
          magnitude: [
            { label: "A–B", value: 1.2 },
            { label: "B–C", value: 1.6 },
            { label: "C–D", value: 1.3 },
            { label: "D–E", value: 1.0 },
          ],
        },

        total_annotations: 16,
        created_at: "2025-09-12T10:30:15.123456",
      },

      // ---- Five-minute intraday (50 bars) ----
      "5m": {
        timeframe: "5m",
        candles_count: 50,
        title: "AAPL 5m",
        subtitle: "50 candles • S/R • Test Area • Swings A–E",
        swing_calc: { last_n: 5 },

        // Intraday path consistent with 239.97 O / 241.20 H / 236.65 L / 237.88 C
        candles: [
          {
            time: 1756188000,
            open: 239.97,
            high: 240.12,
            low: 239.82,
            close: 239.9,
            volume: 365000,
          },
          {
            time: 1756188300,
            open: 239.9,
            high: 240.0,
            low: 239.7,
            close: 239.76,
            volume: 332100,
          },
          {
            time: 1756188600,
            open: 239.76,
            high: 239.96,
            low: 239.58,
            close: 239.66,
            volume: 351400,
          },
          {
            time: 1756188900,
            open: 239.66,
            high: 239.84,
            low: 239.52,
            close: 239.6,
            volume: 372900,
          },
          {
            time: 1756189200,
            open: 239.6,
            high: 239.78,
            low: 239.4,
            close: 239.48,
            volume: 340500,
          },
          {
            time: 1756189500,
            open: 239.48,
            high: 239.62,
            low: 239.3,
            close: 239.42,
            volume: 312300,
          },
          {
            time: 1756189800,
            open: 239.42,
            high: 239.58,
            low: 239.22,
            close: 239.32,
            volume: 330800,
          },
          {
            time: 1756190100,
            open: 239.32,
            high: 239.5,
            low: 239.18,
            close: 239.25,
            volume: 309600,
          },
          {
            time: 1756190400,
            open: 239.25,
            high: 239.44,
            low: 239.1,
            close: 239.16,
            volume: 320400,
          },
          {
            time: 1756190700,
            open: 239.16,
            high: 239.36,
            low: 239.02,
            close: 239.06,
            volume: 298100,
          },

          // drive to early session low zone
          {
            time: 1756191000,
            open: 239.06,
            high: 239.22,
            low: 238.92,
            close: 238.96,
            volume: 285900,
          },
          {
            time: 1756191300,
            open: 238.96,
            high: 239.1,
            low: 238.8,
            close: 238.86,
            volume: 318400,
          },
          {
            time: 1756191600,
            open: 238.86,
            high: 239.02,
            low: 238.72,
            close: 238.78,
            volume: 334200,
          },
          {
            time: 1756191900,
            open: 238.78,
            high: 238.96,
            low: 238.62,
            close: 238.68,
            volume: 349900,
          },
          {
            time: 1756192200,
            open: 238.68,
            high: 238.86,
            low: 238.52,
            close: 238.58,
            volume: 312700,
          },

          // basing → lift toward HOD
          {
            time: 1756192500,
            open: 238.58,
            high: 238.86,
            low: 238.52,
            close: 238.82,
            volume: 355600,
          },
          {
            time: 1756192800,
            open: 238.82,
            high: 239.06,
            low: 238.74,
            close: 238.98,
            volume: 341300,
          },
          {
            time: 1756193100,
            open: 238.98,
            high: 239.28,
            low: 238.9,
            close: 239.18,
            volume: 366500,
          },
          {
            time: 1756193400,
            open: 239.18,
            high: 239.46,
            low: 239.1,
            close: 239.36,
            volume: 359900,
          },
          {
            time: 1756193700,
            open: 239.36,
            high: 239.68,
            low: 239.28,
            close: 239.56,
            volume: 345500,
          },
          {
            time: 1756194000,
            open: 239.56,
            high: 239.84,
            low: 239.46,
            close: 239.74,
            volume: 310200,
          },
          {
            time: 1756194300,
            open: 239.74,
            high: 240.04,
            low: 239.62,
            close: 239.92,
            volume: 331600,
          },
          {
            time: 1756194600,
            open: 239.92,
            high: 240.2,
            low: 239.8,
            close: 240.1,
            volume: 354400,
          },
          {
            time: 1756194900,
            open: 240.1,
            high: 240.36,
            low: 239.96,
            close: 240.28,
            volume: 372800,
          },
          {
            time: 1756195200,
            open: 240.28,
            high: 240.52,
            low: 240.12,
            close: 240.4,
            volume: 389900,
          },
          {
            time: 1756195500,
            open: 240.4,
            high: 240.72,
            low: 240.22,
            close: 240.62,
            volume: 402300,
          },
          {
            time: 1756195800,
            open: 240.62,
            high: 240.92,
            low: 240.48,
            close: 240.84,
            volume: 388600,
          },
          {
            time: 1756196100,
            open: 240.84,
            high: 241.1,
            low: 240.7,
            close: 241.0,
            volume: 401200,
          },
          {
            time: 1756196400,
            open: 241.0,
            high: 241.2,
            low: 240.86,
            close: 241.12,
            volume: 395900,
          }, // ~HOD 241.20
          {
            time: 1756196700,
            open: 241.12,
            high: 241.15,
            low: 240.92,
            close: 241.02,
            volume: 352400,
          },

          // roll over from HOD
          {
            time: 1756197000,
            open: 241.02,
            high: 241.06,
            low: 240.76,
            close: 240.84,
            volume: 336900,
          },
          {
            time: 1756197300,
            open: 240.84,
            high: 240.92,
            low: 240.56,
            close: 240.62,
            volume: 320300,
          },
          {
            time: 1756197600,
            open: 240.62,
            high: 240.74,
            low: 240.38,
            close: 240.44,
            volume: 312800,
          },
          {
            time: 1756197900,
            open: 240.44,
            high: 240.56,
            low: 240.18,
            close: 240.28,
            volume: 334000,
          },
          {
            time: 1756198200,
            open: 240.28,
            high: 240.4,
            low: 240.05,
            close: 240.14,
            volume: 318700,
          },
          {
            time: 1756198500,
            open: 240.14,
            high: 240.24,
            low: 239.9,
            close: 240.02,
            volume: 326600,
          },
          {
            time: 1756198800,
            open: 240.02,
            high: 240.14,
            low: 239.76,
            close: 239.92,
            volume: 309900,
          },
          {
            time: 1756199100,
            open: 239.92,
            high: 239.98,
            low: 239.62,
            close: 239.76,
            volume: 297500,
          },
          {
            time: 1756199400,
            open: 239.76,
            high: 239.86,
            low: 239.44,
            close: 239.54,
            volume: 318800,
          },

          // afternoon fade to LOD zone
          {
            time: 1756199700,
            open: 239.54,
            high: 239.64,
            low: 239.26,
            close: 239.38,
            volume: 341600,
          },
          {
            time: 1756200000,
            open: 239.38,
            high: 239.46,
            low: 239.1,
            close: 239.2,
            volume: 352900,
          },
          {
            time: 1756200300,
            open: 239.2,
            high: 239.3,
            low: 238.96,
            close: 239.02,
            volume: 364300,
          },
          {
            time: 1756200600,
            open: 239.02,
            high: 239.1,
            low: 238.8,
            close: 238.88,
            volume: 371200,
          },
          {
            time: 1756200900,
            open: 238.88,
            high: 238.96,
            low: 238.66,
            close: 238.74,
            volume: 366800,
          },
          {
            time: 1756201200,
            open: 238.74,
            high: 238.8,
            low: 238.5,
            close: 238.6,
            volume: 355900,
          },
          {
            time: 1756201500,
            open: 238.6,
            high: 238.7,
            low: 238.36,
            close: 238.44,
            volume: 348600,
          },
          {
            time: 1756201800,
            open: 238.44,
            high: 238.5,
            low: 238.22,
            close: 238.32,
            volume: 360100,
          },
          {
            time: 1756202100,
            open: 238.32,
            high: 238.38,
            low: 238.1,
            close: 238.2,
            volume: 372400,
          },
          {
            time: 1756202400,
            open: 238.2,
            high: 238.28,
            low: 237.96,
            close: 238.04,
            volume: 388900,
          },
          {
            time: 1756202700,
            open: 238.04,
            high: 238.1,
            low: 237.8,
            close: 237.92,
            volume: 392600,
          },
          {
            time: 1756203000,
            open: 237.92,
            high: 237.98,
            low: 237.72,
            close: 237.84,
            volume: 401500,
          },
          {
            time: 1756203300,
            open: 237.84,
            high: 237.96,
            low: 237.66,
            close: 237.88,
            volume: 412300,
          }, // ~Close 237.88
        ],

        // Data-driven annotations for trader insight
        annotations: [
          // ---- Support bands (clustered near-touches) ----
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 238.04 },
              { time: 1756203300, price: 238.04 },
            ],
            text: "S1 • 6 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 238.44 },
              { time: 1756203300, price: 238.44 },
            ],
            text: "S2 • 7 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 237.88 },
              { time: 1756203300, price: 237.88 },
            ],
            text: "S3 • 4 Tests",
          },

          // ---- Resistance bands ----
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 239.69 },
              { time: 1756203300, price: 239.69 },
            ],
            text: "R1 • 5 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 240.19 },
              { time: 1756203300, price: 240.19 },
            ],
            text: "R2 • 4 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 240.89 },
              { time: 1756203300, price: 240.89 },
            ],
            text: "R3 • 3 Tests",
          },

          // ---- Test Area (Demand zone with dwell time) ----
          {
            shape_type: "rectangle",
            annotation_type: "test_area",
            points: [
              { time: 1756200000, price: 238.4 }, // top of zone
              { time: 1756203000, price: 237.9 }, // bottom of zone
            ],
            tests_count: 7,
            time_in_zone_pct: 26,
            text: "26% Time in Zone • 7 Tests",
          },

          // ---- Swings A–E (local pivots) ----
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756192800, price: 239.06 },
            direction: "down",
            pivot: "A",
            text: "SH",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756192200, price: 238.52 },
            direction: "up",
            pivot: "B",
            text: "SL",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756196400, price: 241.12 },
            direction: "down",
            pivot: "C",
            text: "SH",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756202100, price: 238.1 },
            direction: "up",
            pivot: "D",
            text: "SL",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756199700, price: 239.64 },
            direction: "down",
            pivot: "E",
            text: "SH (Lower)",
          },

          // ---- Metrics (derived from swings) ----
          {
            shape_type: "point",
            annotation_type: "metrics",
            metrics: {
              velocity: [
                { label: "A–B", value: 3.24 }, // |239.06-238.52| over ~0.5–1h → normalized
                { label: "B–C", value: 5.2 }, // |241.12-238.52|
                { label: "C–D", value: 7.24 }, // |241.12-238.10|
                { label: "D–E", value: 3.08 }, // |239.64-238.10|
              ],
              acceleration: [
                { label: "Swing 1→2", value: 1.96 },
                { label: "Swing 2→3", value: 2.04 },
                { label: "Swing 3→4", value: -4.16 },
              ],
              magnitude: [
                { label: "A–B", value: 0.54 },
                { label: "B–C", value: 2.6 },
                { label: "C–D", value: 3.02 },
                { label: "D–E", value: 1.54 },
              ],
            },
          },
        ],

        // convenient top-level copies
        metrics: {
          velocity: [
            { label: "A–B", value: 3.24 },
            { label: "B–C", value: 5.2 },
            { label: "C–D", value: 7.24 },
            { label: "D–E", value: 3.08 },
          ],
          acceleration: [
            { label: "Swing A→B", value: 1.96 },
            { label: "Swing B→C", value: 2.04 },
            { label: "Swing C→D", value: -4.16 },
          ],
          magnitude: [
            { label: "A–B", value: 0.54 },
            { label: "B–C", value: 2.6 },
            { label: "C–D", value: 3.02 },
            { label: "D–E", value: 1.54 },
          ],
        },

        sector_overview: [
          { sector: "Tech", score: 83, advancers: 56, decliners: 44 },
          { sector: "Finance", score: 71, advancers: 41, decliners: 59 },
          { sector: "Energy", score: 65, advancers: 34, decliners: 66 },
          { sector: "Healthcare", score: 69, advancers: 46, decliners: 54 },
        ],
        sector_comparison: [
          { metric: "1D %", SectorA: "+0.9", SectorB: "+0.3" },
          { metric: "5D %", SectorA: "+2.1", SectorB: "+1.6" },
          { metric: "1M %", SectorA: "+4.3", SectorB: "+3.7" },
        ],

        total_annotations: 3 + 3 + 1 + 5 + 1,
        created_at: "2025-09-19T12:05:00.000Z",
      },
      highlights: {
        title: "Sector Highlights",
        performers: "GLENMARK (Pharma), DIXON (Consumer), NATIONALUM (Metal)",
      },
      infrastructure: {
        name: "Infrastructure",
        score: 84.39,
        stats: ["78% ADVANCING | A/D RATIO: 7.0 | 66% ABOVE VWAP"],
      },
      itServices: {
        name: "IT Services",
        score: 75.21,
        stats: ["100% ADVANCING | 80% ABOVE VWAP NEUTRAL RSI 49.83"],
      },
      financial: {
        name: "Financial",
        score: 72.53,
        stats: ["87% ADVANCING | A/D RATIO: 6.5 | 73% ABOVE VWAP"],
      },
      banking: {
        name: "Banking",
        score: 71.07,
        stats: ["86% ADVANCING | A/D RATIO: 6.0 | 57% ABOVE VWAP"],
      },
      pharma: {
        name: "Pharma",
        score: 66.78,
        stats: ["67% ADVANCING | A/D RATIO: 2.0 | 58% ABOVE VWAP"],
      },
    },
  },

  {
    chart_data: {
      symbol: "GOOG",
      "1h": {
        timeframe: "1h",
        candles_count: 10,
        title: "AAPL 1h",
        subtitle: "10 candles • S/R • Test Area • Swings A–E • Metrics",
        swing_calc: { last_n: 5 }, // make this 7 or 10 if you want more swing points later
        candles: [
          {
            time: 1756188900,
            open: 150.25,
            high: 151.8,
            low: 149.9,
            close: 151.45,
            volume: 2500000,
          },
          {
            time: 1756192500,
            open: 151.45,
            high: 152.3,
            low: 150.85,
            close: 152.1,
            volume: 2300000,
          },
          {
            time: 1756196100,
            open: 152.1,
            high: 153.2,
            low: 151.9,
            close: 152.95,
            volume: 2200000,
          }, // swing A high 153.20
          {
            time: 1756199700,
            open: 152.95,
            high: 153.0,
            low: 151.0,
            close: 151.2,
            volume: 2400000,
          }, // swing B low 151.00
          {
            time: 1756203300,
            open: 151.2,
            high: 152.0,
            low: 150.9,
            close: 151.6,
            volume: 2100000,
          },
          {
            time: 1756206900,
            open: 151.6,
            high: 154.1,
            low: 151.5,
            close: 153.8,
            volume: 2600000,
          }, // swing C high 154.10
          {
            time: 1756210500,
            open: 153.8,
            high: 153.9,
            low: 150.9,
            close: 151.3,
            volume: 2700000,
          }, // swing D low 150.90
          {
            time: 1756214100,
            open: 151.3,
            high: 152.7,
            low: 151.1,
            close: 152.4,
            volume: 2000000,
          },
          {
            time: 1756217700,
            open: 152.4,
            high: 153.6,
            low: 152.2,
            close: 153.2,
            volume: 2100000,
          }, // swing E high 153.60
          {
            time: 1756221300,
            open: 153.2,
            high: 153.5,
            low: 152.6,
            close: 152.9,
            volume: 1900000,
          },
        ],

        annotations: [
          // ---------- Support (3) ----------
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188900, price: 150.8 },
              { time: 1756221300, price: 150.8 },
            ],
            text: "S1 • 1 Test",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188900, price: 151.0 },
              { time: 1756221300, price: 151.0 },
            ],
            text: "S2 • 2 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188900, price: 151.5 },
              { time: 1756221300, price: 151.5 },
            ],
            text: "S3 • 3 Tests",
          },

          // ---------- Resistance (3) ----------
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188900, price: 153.0 },
              { time: 1756221300, price: 153.0 },
            ],
            text: "R1 • 2 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188900, price: 153.6 },
              { time: 1756221300, price: 153.6 },
            ],
            text: "R2 • 1 Test",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188900, price: 154.2 },
              { time: 1756221300, price: 154.2 },
            ],
            text: "R3 • 1 Test",
          },

          // ---------- Test Area (zone) ----------
          {
            shape_type: "rectangle",
            annotation_type: "test_area",
            points: [
              { time: 1756192500, price: 151.2 }, // top
              { time: 1756210500, price: 150.6 }, // bottom
            ],
            tests_count: 2,
            time_in_zone_pct: 20,
            text: "20% Time in Zone • 2 Tests",
          },

          // ---------- Swings (A–E) ----------
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756196100, price: 153.2 },
            direction: "down",
            pivot: "A",
            text: "SH (Higher)",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756199700, price: 151.0 },
            direction: "up",
            pivot: "B",
            text: "SL (Lower)",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756206900, price: 154.1 },
            direction: "down",
            pivot: "C",
            text: "SH (Higher)",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756210500, price: 150.9 },
            direction: "up",
            pivot: "D",
            text: "SL (Lower)",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756217700, price: 153.6 },
            direction: "down",
            pivot: "E",
            text: "SH (Lower)",
          },

          // ---------- Metrics (objects w/ labels; last 5 swings) ----------
          {
            shape_type: "point",
            annotation_type: "metrics",
            metrics: {
              velocity: [
                { label: "A–B", value: 2.2 }, // |153.2-151.0| / 1h
                { label: "B–C", value: 1.55 }, // |151.0-154.1| / 2h
                { label: "C–D", value: 3.2 }, // |154.1-150.9| / 1h
                { label: "D–E", value: 1.35 }, // |150.9-153.6| / 2h
              ],
              acceleration: [
                { label: "Swing 1→2 (A–B→B–C)", value: -0.65 }, // 1.55 - 2.2
                { label: "Swing 2→3 (B–C→C–D)", value: 1.65 }, // 3.2 - 1.55
                { label: "Swing 3→4 (C–D→D–E)", value: -1.85 }, // 1.35 - 3.2
              ],
              magnitude: [
                { label: "A–B", value: 2.2 },
                { label: "B–C", value: 3.1 },
                { label: "C–D", value: 3.2 },
                { label: "D–E", value: 2.7 },
              ],
            },
          },
        ],

        // convenient top-level copy for easy access in UI
        metrics: {
          velocity: [
            { label: "A–B", value: 2.2 },
            { label: "B–C", value: 1.55 },
            { label: "C–D", value: 3.2 },
            { label: "D–E", value: 1.35 },
          ],
          acceleration: [
            { label: "Swing 1→2 (A–B→B–C)", value: -0.65 },
            { label: "Swing 2→3 (B–C→C–D)", value: 1.65 },
            { label: "Swing 3→4 (C–D→D–E)", value: -1.85 },
          ],
          magnitude: [
            { label: "A–B", value: 2.2 },
            { label: "B–C", value: 3.1 },
            { label: "C–D", value: 3.2 },
            { label: "D–E", value: 2.7 },
          ],
        },

        // Optional sector boxes (kept from your sample)
        sector_overview: [
          { sector: "Tech", score: 83, advancers: 56, decliners: 44 },
          { sector: "Finance", score: 71, advancers: 41, decliners: 59 },
          { sector: "Energy", score: 65, advancers: 34, decliners: 66 },
          { sector: "Healthcare", score: 69, advancers: 46, decliners: 54 },
        ],
        sector_comparison: [
          { metric: "1D %", SectorA: "+0.9", SectorB: "+0.3" },
          { metric: "5D %", SectorA: "+2.1", SectorB: "+1.6" },
          { metric: "1M %", SectorA: "+4.3", SectorB: "+3.7" },
        ],

        total_annotations: 11,
        created_at: "2025-09-12T10:30:15.123456",
      },

      "15m": {
        timeframe: "15m",
        candles_count: 20,
        title: "AAPL 15m",
        subtitle: "20 candles • S/R • Test Area • Swings A–E • Metrics",
        swing_calc: { last_n: 5 },
        candles: [
          {
            time: 1756188000,
            open: 150.0,
            high: 150.4,
            low: 149.9,
            close: 150.2,
            volume: 500000,
          },
          {
            time: 1756188900,
            open: 150.2,
            high: 150.6,
            low: 150.0,
            close: 150.5,
            volume: 480000,
          },
          {
            time: 1756189800,
            open: 150.5,
            high: 151.0,
            low: 150.3,
            close: 150.8,
            volume: 460000,
          },
          {
            time: 1756190700,
            open: 150.8,
            high: 151.5,
            low: 150.7,
            close: 151.3,
            volume: 450000,
          },
          {
            time: 1756191600,
            open: 151.3,
            high: 151.8,
            low: 151.1,
            close: 151.6,
            volume: 440000,
          }, // A high 151.8
          {
            time: 1756192500,
            open: 151.6,
            high: 151.7,
            low: 151.2,
            close: 151.3,
            volume: 430000,
          },
          {
            time: 1756193400,
            open: 151.3,
            high: 151.4,
            low: 150.9,
            close: 151.0,
            volume: 420000,
          },
          {
            time: 1756194300,
            open: 151.0,
            high: 151.1,
            low: 150.6,
            close: 150.7,
            volume: 410000,
          }, // B low 150.6
          {
            time: 1756195200,
            open: 150.7,
            high: 150.9,
            low: 150.5,
            close: 150.8,
            volume: 405000,
          },
          {
            time: 1756196100,
            open: 150.8,
            high: 151.2,
            low: 150.7,
            close: 151.0,
            volume: 400000,
          },
          {
            time: 1756197000,
            open: 151.0,
            high: 152.2,
            low: 150.9,
            close: 151.9,
            volume: 455000,
          }, // C high 152.2
          {
            time: 1756197900,
            open: 151.9,
            high: 152.0,
            low: 151.3,
            close: 151.5,
            volume: 440000,
          },
          {
            time: 1756198800,
            open: 151.5,
            high: 151.6,
            low: 151.1,
            close: 151.2,
            volume: 430000,
          },
          {
            time: 1756199700,
            open: 151.2,
            high: 151.3,
            low: 150.9,
            close: 151.0,
            volume: 420000,
          },
          {
            time: 1756200600,
            open: 151.0,
            high: 151.1,
            low: 150.9,
            close: 150.9,
            volume: 415000,
          }, // D low 150.9
          {
            time: 1756201500,
            open: 150.9,
            high: 151.2,
            low: 150.8,
            close: 151.1,
            volume: 410000,
          },
          {
            time: 1756202400,
            open: 151.1,
            high: 151.4,
            low: 151.0,
            close: 151.3,
            volume: 405000,
          },
          {
            time: 1756203300,
            open: 151.3,
            high: 151.7,
            low: 151.1,
            close: 151.6,
            volume: 400000,
          },
          {
            time: 1756204200,
            open: 151.6,
            high: 151.9,
            low: 151.4,
            close: 151.8,
            volume: 395000,
          }, // E high 151.9
          {
            time: 1756205100,
            open: 151.8,
            high: 152.0,
            low: 151.6,
            close: 151.7,
            volume: 390000,
          },
        ],

        annotations: [
          // Supports (3)
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 150.2 },
              { time: 1756205100, price: 150.2 },
            ],
            text: "S1 • 1 Test",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 150.8 },
              { time: 1756205100, price: 150.8 },
            ],
            text: "S2 • 2 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 151.5 },
              { time: 1756205100, price: 151.5 },
            ],
            text: "S3 • 2 Tests",
          },

          // Resistances (3)
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 152.0 },
              { time: 1756205100, price: 152.0 },
            ],
            text: "R1 • 1 Test",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 152.4 },
              { time: 1756205100, price: 152.4 },
            ],
            text: "R2 • 1 Test",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 152.8 },
              { time: 1756205100, price: 152.8 },
            ],
            text: "R3 • 1 Test",
          },

          // Test Area
          {
            shape_type: "rectangle",
            annotation_type: "test_area",
            points: [
              { time: 1756189800, price: 151.0 },
              { time: 1756199700, price: 150.4 },
            ],
            tests_count: 3,
            time_in_zone_pct: 26,
            text: "Test Area • 3 Tests",
          },

          // Swings A–E
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756191600, price: 151.8 },
            direction: "down",
            pivot: "A",
            text: "SH",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756194300, price: 150.6 },
            direction: "up",
            pivot: "B",
            text: "SL",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756197000, price: 152.2 },
            direction: "down",
            pivot: "C",
            text: "SH",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756200600, price: 150.9 },
            direction: "up",
            pivot: "D",
            text: "SL",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756204200, price: 151.9 },
            direction: "down",
            pivot: "E",
            text: "SH",
          },

          // Metrics (last 5 swings)
          {
            shape_type: "point",
            annotation_type: "metrics",
            metrics: {
              velocity: [
                { label: "A–B", value: 1.6 }, // (1.2 over 0.75h)
                { label: "B–C", value: 1.6 }, // (1.6 over 1.0h)
                { label: "C–D", value: 1.73 }, // (1.3 over 0.75h)
                { label: "D–E", value: 1.0 }, // (1.0 over 1.0h)
              ],
              acceleration: [
                { label: "Swing 1→2", value: 0.0 },
                { label: "Swing 2→3", value: 0.13 },
                { label: "Swing 3→4", value: -0.73 },
              ],
              magnitude: [
                { label: "A–B", value: 1.2 },
                { label: "B–C", value: 1.6 },
                { label: "C–D", value: 1.3 },
                { label: "D–E", value: 1.0 },
              ],
            },
          },
        ],

        metrics: {
          velocity: [
            { label: "A–B", value: 1.6 },
            { label: "B–C", value: 1.6 },
            { label: "C–D", value: 1.73 },
            { label: "D–E", value: 1.0 },
          ],
          acceleration: [
            { label: "Swing 1→2", value: 0.0 },
            { label: "Swing 2→3", value: 0.13 },
            { label: "Swing 3→4", value: -0.73 },
          ],
          magnitude: [
            { label: "A–B", value: 1.2 },
            { label: "B–C", value: 1.6 },
            { label: "C–D", value: 1.3 },
            { label: "D–E", value: 1.0 },
          ],
        },

        total_annotations: 16,
        created_at: "2025-09-12T10:30:15.123456",
      },

      "5m": {
        timeframe: "5m",
        candles_count: 24,
        title: "AAPL 5m",
        subtitle: "24 candles • S/R • Test Area • Swings A–E • Metrics",
        swing_calc: { last_n: 5 },
        candles: [
          {
            time: 1756188000,
            open: 150.0,
            high: 150.2,
            low: 149.9,
            close: 150.1,
            volume: 300000,
          },
          {
            time: 1756188300,
            open: 150.1,
            high: 150.3,
            low: 149.9,
            close: 150.0,
            volume: 305000,
          },
          {
            time: 1756188600,
            open: 150.0,
            high: 150.4,
            low: 149.9,
            close: 150.3,
            volume: 310000,
          },
          {
            time: 1756188900,
            open: 150.3,
            high: 150.6,
            low: 150.2,
            close: 150.5,
            volume: 315000,
          },
          {
            time: 1756189200,
            open: 150.5,
            high: 150.9,
            low: 150.4,
            close: 150.8,
            volume: 320000,
          },
          {
            time: 1756189500,
            open: 150.8,
            high: 151.1,
            low: 150.6,
            close: 151.0,
            volume: 325000,
          },
          {
            time: 1756189800,
            open: 151.0,
            high: 151.2,
            low: 150.9,
            close: 151.1,
            volume: 330000,
          }, // A high 151.2
          {
            time: 1756190100,
            open: 151.1,
            high: 151.1,
            low: 150.8,
            close: 150.9,
            volume: 320000,
          },
          {
            time: 1756190400,
            open: 150.9,
            high: 151.0,
            low: 150.7,
            close: 150.8,
            volume: 315000,
          },
          {
            time: 1756190700,
            open: 150.8,
            high: 150.9,
            low: 150.6,
            close: 150.7,
            volume: 310000,
          },
          {
            time: 1756191000,
            open: 150.7,
            high: 150.8,
            low: 150.3,
            close: 150.4,
            volume: 305000,
          }, // B low 150.3
          {
            time: 1756191300,
            open: 150.4,
            high: 150.7,
            low: 150.3,
            close: 150.6,
            volume: 300000,
          },
          {
            time: 1756191600,
            open: 150.6,
            high: 151.0,
            low: 150.5,
            close: 150.9,
            volume: 300000,
          },
          {
            time: 1756191900,
            open: 150.9,
            high: 151.4,
            low: 150.8,
            close: 151.3,
            volume: 305000,
          },
          {
            time: 1756192200,
            open: 151.3,
            high: 151.6,
            low: 151.2,
            close: 151.5,
            volume: 310000,
          }, // C high 151.6
          {
            time: 1756192500,
            open: 151.5,
            high: 151.5,
            low: 151.2,
            close: 151.3,
            volume: 312000,
          },
          {
            time: 1756192800,
            open: 151.3,
            high: 151.3,
            low: 151.0,
            close: 151.1,
            volume: 310000,
          },
          {
            time: 1756193100,
            open: 151.1,
            high: 151.2,
            low: 150.8,
            close: 150.9,
            volume: 305000,
          },
          {
            time: 1756193400,
            open: 150.9,
            high: 151.0,
            low: 150.5,
            close: 150.6,
            volume: 300000,
          }, // D low 150.5
          {
            time: 1756193700,
            open: 150.6,
            high: 150.9,
            low: 150.5,
            close: 150.8,
            volume: 300000,
          },
          {
            time: 1756194000,
            open: 150.8,
            high: 151.1,
            low: 150.7,
            close: 151.0,
            volume: 305000,
          },
          {
            time: 1756194300,
            open: 151.0,
            high: 151.3,
            low: 150.9,
            close: 151.2,
            volume: 310000,
          },
          {
            time: 1756194600,
            open: 151.2,
            high: 151.4,
            low: 151.1,
            close: 151.3,
            volume: 315000,
          }, // E high 151.4
          {
            time: 1756194900,
            open: 151.3,
            high: 151.4,
            low: 151.1,
            close: 151.2,
            volume: 320000,
          },
        ],

        annotations: [
          // Supports (3)
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 150.4 },
              { time: 1756194900, price: 150.4 },
            ],
            text: "S1 • 2 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 150.7 },
              { time: 1756194900, price: 150.7 },
            ],
            text: "S2 • 3 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 150.9 },
              { time: 1756194900, price: 150.9 },
            ],
            text: "S3 • 2 Tests",
          },

          // Resistances (3)
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 151.2 },
              { time: 1756194900, price: 151.2 },
            ],
            text: "R1 • 2 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 151.4 },
              { time: 1756194900, price: 151.4 },
            ],
            text: "R2 • 1 Test",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 151.6 },
              { time: 1756194900, price: 151.6 },
            ],
            text: "R3 • 1 Test",
          },

          // Test Area
          {
            shape_type: "rectangle",
            annotation_type: "test_area",
            points: [
              { time: 1756188600, price: 151.0 },
              { time: 1756192500, price: 150.4 },
            ],
            tests_count: 4,
            time_in_zone_pct: 22,
            text: "Demand Zone",
          },

          // Swings A–E
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756189800, price: 151.2 },
            direction: "down",
            pivot: "A",
            text: "SH",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756191000, price: 150.3 },
            direction: "up",
            pivot: "B",
            text: "SL",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756192200, price: 151.6 },
            direction: "down",
            pivot: "C",
            text: "SH",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756193400, price: 150.5 },
            direction: "up",
            pivot: "D",
            text: "SL",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756194600, price: 151.4 },
            direction: "down",
            pivot: "E",
            text: "SH",
          },

          // Metrics
          {
            shape_type: "point",
            annotation_type: "metrics",
            metrics: {
              velocity: [
                { label: "A–B", value: 2.7 },
                { label: "B–C", value: 3.9 },
                { label: "C–D", value: 3.3 },
                { label: "D–E", value: 2.7 },
              ],
              acceleration: [
                { label: "Swing 1→2", value: 1.2 },
                { label: "Swing 2→3", value: -0.6 },
                { label: "Swing 3→4", value: -0.6 },
              ],
              magnitude: [
                { label: "A–B", value: 0.9 },
                { label: "B–C", value: 1.3 },
                { label: "C–D", value: 1.1 },
                { label: "D–E", value: 0.9 },
              ],
            },
          },
        ],

        metrics: {
          velocity: [
            { label: "A–B", value: 2.7 },
            { label: "B–C", value: 3.9 },
            { label: "C–D", value: 3.3 },
            { label: "D–E", value: 2.7 },
          ],
          acceleration: [
            { label: "Swing A→B", value: 1.2 },
            { label: "Swing B→C", value: -0.6 },
            { label: "Swing C→D", value: -0.6 },
          ],
          magnitude: [
            { label: "A–B", value: 0.9 },
            { label: "B–C", value: 1.3 },
            { label: "C–D", value: 1.1 },
            { label: "D–E", value: 0.9 },
          ],
        },

        total_annotations: 18,
        created_at: "2025-09-12T10:30:15.123456",
      },

      highlights: {
        title: "Sector Highlights",
        performers: "GLENMARK (Pharma), DIXON (Consumer), NATIONALUM (Metal)",
      },
      infrastructure: {
        name: "Infrastructure",
        score: 84.39,
        stats: ["78% ADVANCING | A/D RATIO: 7.0 | 66% ABOVE VWAP"],
      },
      itServices: {
        name: "IT Services",
        score: 75.21,
        stats: ["100% ADVANCING | 80% ABOVE VWAP NEUTRAL RSI 49.83"],
      },
      financial: {
        name: "Financial",
        score: 72.53,
        stats: ["87% ADVANCING | A/D RATIO: 6.5 | 73% ABOVE VWAP"],
      },
      banking: {
        name: "Banking",
        score: 71.07,
        stats: ["86% ADVANCING | A/D RATIO: 6.0 | 57% ABOVE VWAP"],
      },
      pharma: {
        name: "Pharma",
        score: 66.78,
        stats: ["67% ADVANCING | A/D RATIO: 2.0 | 58% ABOVE VWAP"],
      },
    },
  },

  {
    chart_data: {
      symbol: "MSFT",
      "1h": {
        timeframe: "1h",
        candles_count: 10,
        title: "AAPL 1h",
        subtitle: "10 candles • S/R • Test Area • Swings A–E • Metrics",
        swing_calc: { last_n: 5 }, // make this 7 or 10 if you want more swing points later
        candles: [
          {
            time: 1756188900,
            open: 150.25,
            high: 151.8,
            low: 149.9,
            close: 151.45,
            volume: 2500000,
          },
          {
            time: 1756192500,
            open: 151.45,
            high: 152.3,
            low: 150.85,
            close: 152.1,
            volume: 2300000,
          },
          {
            time: 1756196100,
            open: 152.1,
            high: 153.2,
            low: 151.9,
            close: 152.95,
            volume: 2200000,
          }, // swing A high 153.20
          {
            time: 1756199700,
            open: 152.95,
            high: 153.0,
            low: 151.0,
            close: 151.2,
            volume: 2400000,
          }, // swing B low 151.00
          {
            time: 1756203300,
            open: 151.2,
            high: 152.0,
            low: 150.9,
            close: 151.6,
            volume: 2100000,
          },
          {
            time: 1756206900,
            open: 151.6,
            high: 154.1,
            low: 151.5,
            close: 153.8,
            volume: 2600000,
          }, // swing C high 154.10
          {
            time: 1756210500,
            open: 153.8,
            high: 153.9,
            low: 150.9,
            close: 151.3,
            volume: 2700000,
          }, // swing D low 150.90
          {
            time: 1756214100,
            open: 151.3,
            high: 152.7,
            low: 151.1,
            close: 152.4,
            volume: 2000000,
          },
          {
            time: 1756217700,
            open: 152.4,
            high: 153.6,
            low: 152.2,
            close: 153.2,
            volume: 2100000,
          }, // swing E high 153.60
          {
            time: 1756221300,
            open: 153.2,
            high: 153.5,
            low: 152.6,
            close: 152.9,
            volume: 1900000,
          },
        ],

        annotations: [
          // ---------- Support (3) ----------
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188900, price: 150.8 },
              { time: 1756221300, price: 150.8 },
            ],
            text: "S1 • 1 Test",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188900, price: 151.0 },
              { time: 1756221300, price: 151.0 },
            ],
            text: "S2 • 2 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188900, price: 151.5 },
              { time: 1756221300, price: 151.5 },
            ],
            text: "S3 • 3 Tests",
          },

          // ---------- Resistance (3) ----------
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188900, price: 153.0 },
              { time: 1756221300, price: 153.0 },
            ],
            text: "R1 • 2 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188900, price: 153.6 },
              { time: 1756221300, price: 153.6 },
            ],
            text: "R2 • 1 Test",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188900, price: 154.2 },
              { time: 1756221300, price: 154.2 },
            ],
            text: "R3 • 1 Test",
          },

          // ---------- Test Area (zone) ----------
          {
            shape_type: "rectangle",
            annotation_type: "test_area",
            points: [
              { time: 1756192500, price: 151.2 }, // top
              { time: 1756210500, price: 150.6 }, // bottom
            ],
            tests_count: 2,
            time_in_zone_pct: 20,
            text: "20% Time in Zone • 2 Tests",
          },

          // ---------- Swings (A–E) ----------
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756196100, price: 153.2 },
            direction: "down",
            pivot: "A",
            text: "SH (Higher)",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756199700, price: 151.0 },
            direction: "up",
            pivot: "B",
            text: "SL (Lower)",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756206900, price: 154.1 },
            direction: "down",
            pivot: "C",
            text: "SH (Higher)",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756210500, price: 150.9 },
            direction: "up",
            pivot: "D",
            text: "SL (Lower)",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756217700, price: 153.6 },
            direction: "down",
            pivot: "E",
            text: "SH (Lower)",
          },

          // ---------- Metrics (objects w/ labels; last 5 swings) ----------
          {
            shape_type: "point",
            annotation_type: "metrics",
            metrics: {
              velocity: [
                { label: "A–B", value: 2.2 }, // |153.2-151.0| / 1h
                { label: "B–C", value: 1.55 }, // |151.0-154.1| / 2h
                { label: "C–D", value: 3.2 }, // |154.1-150.9| / 1h
                { label: "D–E", value: 1.35 }, // |150.9-153.6| / 2h
              ],
              acceleration: [
                { label: "Swing 1→2 (A–B→B–C)", value: -0.65 }, // 1.55 - 2.2
                { label: "Swing 2→3 (B–C→C–D)", value: 1.65 }, // 3.2 - 1.55
                { label: "Swing 3→4 (C–D→D–E)", value: -1.85 }, // 1.35 - 3.2
              ],
              magnitude: [
                { label: "A–B", value: 2.2 },
                { label: "B–C", value: 3.1 },
                { label: "C–D", value: 3.2 },
                { label: "D–E", value: 2.7 },
              ],
            },
          },
        ],

        // convenient top-level copy for easy access in UI
        metrics: {
          velocity: [
            { label: "A–B", value: 2.2 },
            { label: "B–C", value: 1.55 },
            { label: "C–D", value: 3.2 },
            { label: "D–E", value: 1.35 },
          ],
          acceleration: [
            { label: "Swing 1→2 (A–B→B–C)", value: -0.65 },
            { label: "Swing 2→3 (B–C→C–D)", value: 1.65 },
            { label: "Swing 3→4 (C–D→D–E)", value: -1.85 },
          ],
          magnitude: [
            { label: "A–B", value: 2.2 },
            { label: "B–C", value: 3.1 },
            { label: "C–D", value: 3.2 },
            { label: "D–E", value: 2.7 },
          ],
        },

        // Optional sector boxes (kept from your sample)
        sector_overview: [
          { sector: "Tech", score: 83, advancers: 56, decliners: 44 },
          { sector: "Finance", score: 71, advancers: 41, decliners: 59 },
          { sector: "Energy", score: 65, advancers: 34, decliners: 66 },
          { sector: "Healthcare", score: 69, advancers: 46, decliners: 54 },
        ],
        sector_comparison: [
          { metric: "1D %", SectorA: "+0.9", SectorB: "+0.3" },
          { metric: "5D %", SectorA: "+2.1", SectorB: "+1.6" },
          { metric: "1M %", SectorA: "+4.3", SectorB: "+3.7" },
        ],

        total_annotations: 11,
        created_at: "2025-09-12T10:30:15.123456",
      },

      "15m": {
        timeframe: "15m",
        candles_count: 20,
        title: "AAPL 15m",
        subtitle: "20 candles • S/R • Test Area • Swings A–E • Metrics",
        swing_calc: { last_n: 5 },
        candles: [
          {
            time: 1756188000,
            open: 150.0,
            high: 150.4,
            low: 149.9,
            close: 150.2,
            volume: 500000,
          },
          {
            time: 1756188900,
            open: 150.2,
            high: 150.6,
            low: 150.0,
            close: 150.5,
            volume: 480000,
          },
          {
            time: 1756189800,
            open: 150.5,
            high: 151.0,
            low: 150.3,
            close: 150.8,
            volume: 460000,
          },
          {
            time: 1756190700,
            open: 150.8,
            high: 151.5,
            low: 150.7,
            close: 151.3,
            volume: 450000,
          },
          {
            time: 1756191600,
            open: 151.3,
            high: 151.8,
            low: 151.1,
            close: 151.6,
            volume: 440000,
          }, // A high 151.8
          {
            time: 1756192500,
            open: 151.6,
            high: 151.7,
            low: 151.2,
            close: 151.3,
            volume: 430000,
          },
          {
            time: 1756193400,
            open: 151.3,
            high: 151.4,
            low: 150.9,
            close: 151.0,
            volume: 420000,
          },
          {
            time: 1756194300,
            open: 151.0,
            high: 151.1,
            low: 150.6,
            close: 150.7,
            volume: 410000,
          }, // B low 150.6
          {
            time: 1756195200,
            open: 150.7,
            high: 150.9,
            low: 150.5,
            close: 150.8,
            volume: 405000,
          },
          {
            time: 1756196100,
            open: 150.8,
            high: 151.2,
            low: 150.7,
            close: 151.0,
            volume: 400000,
          },
          {
            time: 1756197000,
            open: 151.0,
            high: 152.2,
            low: 150.9,
            close: 151.9,
            volume: 455000,
          }, // C high 152.2
          {
            time: 1756197900,
            open: 151.9,
            high: 152.0,
            low: 151.3,
            close: 151.5,
            volume: 440000,
          },
          {
            time: 1756198800,
            open: 151.5,
            high: 151.6,
            low: 151.1,
            close: 151.2,
            volume: 430000,
          },
          {
            time: 1756199700,
            open: 151.2,
            high: 151.3,
            low: 150.9,
            close: 151.0,
            volume: 420000,
          },
          {
            time: 1756200600,
            open: 151.0,
            high: 151.1,
            low: 150.9,
            close: 150.9,
            volume: 415000,
          }, // D low 150.9
          {
            time: 1756201500,
            open: 150.9,
            high: 151.2,
            low: 150.8,
            close: 151.1,
            volume: 410000,
          },
          {
            time: 1756202400,
            open: 151.1,
            high: 151.4,
            low: 151.0,
            close: 151.3,
            volume: 405000,
          },
          {
            time: 1756203300,
            open: 151.3,
            high: 151.7,
            low: 151.1,
            close: 151.6,
            volume: 400000,
          },
          {
            time: 1756204200,
            open: 151.6,
            high: 151.9,
            low: 151.4,
            close: 151.8,
            volume: 395000,
          }, // E high 151.9
          {
            time: 1756205100,
            open: 151.8,
            high: 152.0,
            low: 151.6,
            close: 151.7,
            volume: 390000,
          },
        ],

        annotations: [
          // Supports (3)
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 150.2 },
              { time: 1756205100, price: 150.2 },
            ],
            text: "S1 • 1 Test",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 150.8 },
              { time: 1756205100, price: 150.8 },
            ],
            text: "S2 • 2 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 151.5 },
              { time: 1756205100, price: 151.5 },
            ],
            text: "S3 • 2 Tests",
          },

          // Resistances (3)
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 152.0 },
              { time: 1756205100, price: 152.0 },
            ],
            text: "R1 • 1 Test",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 152.4 },
              { time: 1756205100, price: 152.4 },
            ],
            text: "R2 • 1 Test",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 152.8 },
              { time: 1756205100, price: 152.8 },
            ],
            text: "R3 • 1 Test",
          },

          // Test Area
          {
            shape_type: "rectangle",
            annotation_type: "test_area",
            points: [
              { time: 1756189800, price: 151.0 },
              { time: 1756199700, price: 150.4 },
            ],
            tests_count: 3,
            time_in_zone_pct: 26,
            text: "Test Area • 3 Tests",
          },

          // Swings A–E
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756191600, price: 151.8 },
            direction: "down",
            pivot: "A",
            text: "SH",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756194300, price: 150.6 },
            direction: "up",
            pivot: "B",
            text: "SL",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756197000, price: 152.2 },
            direction: "down",
            pivot: "C",
            text: "SH",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756200600, price: 150.9 },
            direction: "up",
            pivot: "D",
            text: "SL",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756204200, price: 151.9 },
            direction: "down",
            pivot: "E",
            text: "SH",
          },

          // Metrics (last 5 swings)
          {
            shape_type: "point",
            annotation_type: "metrics",
            metrics: {
              velocity: [
                { label: "A–B", value: 1.6 }, // (1.2 over 0.75h)
                { label: "B–C", value: 1.6 }, // (1.6 over 1.0h)
                { label: "C–D", value: 1.73 }, // (1.3 over 0.75h)
                { label: "D–E", value: 1.0 }, // (1.0 over 1.0h)
              ],
              acceleration: [
                { label: "Swing 1→2", value: 0.0 },
                { label: "Swing 2→3", value: 0.13 },
                { label: "Swing 3→4", value: -0.73 },
              ],
              magnitude: [
                { label: "A–B", value: 1.2 },
                { label: "B–C", value: 1.6 },
                { label: "C–D", value: 1.3 },
                { label: "D–E", value: 1.0 },
              ],
            },
          },
        ],

        metrics: {
          velocity: [
            { label: "A–B", value: 1.6 },
            { label: "B–C", value: 1.6 },
            { label: "C–D", value: 1.73 },
            { label: "D–E", value: 1.0 },
          ],
          acceleration: [
            { label: "Swing 1→2", value: 0.0 },
            { label: "Swing 2→3", value: 0.13 },
            { label: "Swing 3→4", value: -0.73 },
          ],
          magnitude: [
            { label: "A–B", value: 1.2 },
            { label: "B–C", value: 1.6 },
            { label: "C–D", value: 1.3 },
            { label: "D–E", value: 1.0 },
          ],
        },

        total_annotations: 16,
        created_at: "2025-09-12T10:30:15.123456",
      },

      "5m": {
        timeframe: "5m",
        candles_count: 24,
        title: "AAPL 5m",
        subtitle: "24 candles • S/R • Test Area • Swings A–E • Metrics",
        swing_calc: { last_n: 5 },
        candles: [
          {
            time: 1756188000,
            open: 150.0,
            high: 150.2,
            low: 149.9,
            close: 150.1,
            volume: 300000,
          },
          {
            time: 1756188300,
            open: 150.1,
            high: 150.3,
            low: 149.9,
            close: 150.0,
            volume: 305000,
          },
          {
            time: 1756188600,
            open: 150.0,
            high: 150.4,
            low: 149.9,
            close: 150.3,
            volume: 310000,
          },
          {
            time: 1756188900,
            open: 150.3,
            high: 150.6,
            low: 150.2,
            close: 150.5,
            volume: 315000,
          },
          {
            time: 1756189200,
            open: 150.5,
            high: 150.9,
            low: 150.4,
            close: 150.8,
            volume: 320000,
          },
          {
            time: 1756189500,
            open: 150.8,
            high: 151.1,
            low: 150.6,
            close: 151.0,
            volume: 325000,
          },
          {
            time: 1756189800,
            open: 151.0,
            high: 151.2,
            low: 150.9,
            close: 151.1,
            volume: 330000,
          }, // A high 151.2
          {
            time: 1756190100,
            open: 151.1,
            high: 151.1,
            low: 150.8,
            close: 150.9,
            volume: 320000,
          },
          {
            time: 1756190400,
            open: 150.9,
            high: 151.0,
            low: 150.7,
            close: 150.8,
            volume: 315000,
          },
          {
            time: 1756190700,
            open: 150.8,
            high: 150.9,
            low: 150.6,
            close: 150.7,
            volume: 310000,
          },
          {
            time: 1756191000,
            open: 150.7,
            high: 150.8,
            low: 150.3,
            close: 150.4,
            volume: 305000,
          }, // B low 150.3
          {
            time: 1756191300,
            open: 150.4,
            high: 150.7,
            low: 150.3,
            close: 150.6,
            volume: 300000,
          },
          {
            time: 1756191600,
            open: 150.6,
            high: 151.0,
            low: 150.5,
            close: 150.9,
            volume: 300000,
          },
          {
            time: 1756191900,
            open: 150.9,
            high: 151.4,
            low: 150.8,
            close: 151.3,
            volume: 305000,
          },
          {
            time: 1756192200,
            open: 151.3,
            high: 151.6,
            low: 151.2,
            close: 151.5,
            volume: 310000,
          }, // C high 151.6
          {
            time: 1756192500,
            open: 151.5,
            high: 151.5,
            low: 151.2,
            close: 151.3,
            volume: 312000,
          },
          {
            time: 1756192800,
            open: 151.3,
            high: 151.3,
            low: 151.0,
            close: 151.1,
            volume: 310000,
          },
          {
            time: 1756193100,
            open: 151.1,
            high: 151.2,
            low: 150.8,
            close: 150.9,
            volume: 305000,
          },
          {
            time: 1756193400,
            open: 150.9,
            high: 151.0,
            low: 150.5,
            close: 150.6,
            volume: 300000,
          }, // D low 150.5
          {
            time: 1756193700,
            open: 150.6,
            high: 150.9,
            low: 150.5,
            close: 150.8,
            volume: 300000,
          },
          {
            time: 1756194000,
            open: 150.8,
            high: 151.1,
            low: 150.7,
            close: 151.0,
            volume: 305000,
          },
          {
            time: 1756194300,
            open: 151.0,
            high: 151.3,
            low: 150.9,
            close: 151.2,
            volume: 310000,
          },
          {
            time: 1756194600,
            open: 151.2,
            high: 151.4,
            low: 151.1,
            close: 151.3,
            volume: 315000,
          }, // E high 151.4
          {
            time: 1756194900,
            open: 151.3,
            high: 151.4,
            low: 151.1,
            close: 151.2,
            volume: 320000,
          },
        ],

        annotations: [
          // Supports (3)
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 150.4 },
              { time: 1756194900, price: 150.4 },
            ],
            text: "S1 • 2 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 150.7 },
              { time: 1756194900, price: 150.7 },
            ],
            text: "S2 • 3 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 150.9 },
              { time: 1756194900, price: 150.9 },
            ],
            text: "S3 • 2 Tests",
          },

          // Resistances (3)
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 151.2 },
              { time: 1756194900, price: 151.2 },
            ],
            text: "R1 • 2 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 151.4 },
              { time: 1756194900, price: 151.4 },
            ],
            text: "R2 • 1 Test",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 151.6 },
              { time: 1756194900, price: 151.6 },
            ],
            text: "R3 • 1 Test",
          },

          // Test Area
          {
            shape_type: "rectangle",
            annotation_type: "test_area",
            points: [
              { time: 1756188600, price: 151.0 },
              { time: 1756192500, price: 150.4 },
            ],
            tests_count: 4,
            time_in_zone_pct: 22,
            text: "Demand Zone",
          },

          // Swings A–E
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756189800, price: 151.2 },
            direction: "down",
            pivot: "A",
            text: "SH",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756191000, price: 150.3 },
            direction: "up",
            pivot: "B",
            text: "SL",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756192200, price: 151.6 },
            direction: "down",
            pivot: "C",
            text: "SH",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756193400, price: 150.5 },
            direction: "up",
            pivot: "D",
            text: "SL",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756194600, price: 151.4 },
            direction: "down",
            pivot: "E",
            text: "SH",
          },

          // Metrics
          {
            shape_type: "point",
            annotation_type: "metrics",
            metrics: {
              velocity: [
                { label: "A–B", value: 2.7 },
                { label: "B–C", value: 3.9 },
                { label: "C–D", value: 3.3 },
                { label: "D–E", value: 2.7 },
              ],
              acceleration: [
                { label: "Swing 1→2", value: 1.2 },
                { label: "Swing 2→3", value: -0.6 },
                { label: "Swing 3→4", value: -0.6 },
              ],
              magnitude: [
                { label: "A–B", value: 0.9 },
                { label: "B–C", value: 1.3 },
                { label: "C–D", value: 1.1 },
                { label: "D–E", value: 0.9 },
              ],
            },
          },
        ],

        metrics: {
          velocity: [
            { label: "A–B", value: 2.7 },
            { label: "B–C", value: 3.9 },
            { label: "C–D", value: 3.3 },
            { label: "D–E", value: 2.7 },
          ],
          acceleration: [
            { label: "Swing 1→2", value: 1.2 },
            { label: "Swing 2→3", value: -0.6 },
            { label: "Swing 3→4", value: -0.6 },
          ],
          magnitude: [
            { label: "A–B", value: 0.9 },
            { label: "B–C", value: 1.3 },
            { label: "C–D", value: 1.1 },
            { label: "D–E", value: 0.9 },
          ],
        },

        total_annotations: 18,
        created_at: "2025-09-12T10:30:15.123456",
      },

      highlights: {
        title: "Sector Highlights",
        performers: "GLENMARK (Pharma), DIXON (Consumer), NATIONALUM (Metal)",
      },
      infrastructure: {
        name: "Infrastructure",
        score: 84.39,
        stats: ["78% ADVANCING | A/D RATIO: 7.0 | 66% ABOVE VWAP"],
      },
      itServices: {
        name: "IT Services",
        score: 75.21,
        stats: ["100% ADVANCING | 80% ABOVE VWAP NEUTRAL RSI 49.83"],
      },
      financial: {
        name: "Financial",
        score: 72.53,
        stats: ["87% ADVANCING | A/D RATIO: 6.5 | 73% ABOVE VWAP"],
      },
      banking: {
        name: "Banking",
        score: 71.07,
        stats: ["86% ADVANCING | A/D RATIO: 6.0 | 57% ABOVE VWAP"],
      },
      pharma: {
        name: "Pharma",
        score: 66.78,
        stats: ["67% ADVANCING | A/D RATIO: 2.0 | 58% ABOVE VWAP"],
      },
    },
  },

  {
    chart_data: {
      symbol: "TSLA",
      "1h": {
        timeframe: "1h",
        candles_count: 10,
        title: "AAPL 1h",
        subtitle: "10 candles • S/R • Test Area • Swings A–E • Metrics",
        swing_calc: { last_n: 5 }, // make this 7 or 10 if you want more swing points later
        candles: [
          {
            time: 1756188900,
            open: 150.25,
            high: 151.8,
            low: 149.9,
            close: 151.45,
            volume: 2500000,
          },
          {
            time: 1756192500,
            open: 151.45,
            high: 152.3,
            low: 150.85,
            close: 152.1,
            volume: 2300000,
          },
          {
            time: 1756196100,
            open: 152.1,
            high: 153.2,
            low: 151.9,
            close: 152.95,
            volume: 2200000,
          }, // swing A high 153.20
          {
            time: 1756199700,
            open: 152.95,
            high: 153.0,
            low: 151.0,
            close: 151.2,
            volume: 2400000,
          }, // swing B low 151.00
          {
            time: 1756203300,
            open: 151.2,
            high: 152.0,
            low: 150.9,
            close: 151.6,
            volume: 2100000,
          },
          {
            time: 1756206900,
            open: 151.6,
            high: 154.1,
            low: 151.5,
            close: 153.8,
            volume: 2600000,
          }, // swing C high 154.10
          {
            time: 1756210500,
            open: 153.8,
            high: 153.9,
            low: 150.9,
            close: 151.3,
            volume: 2700000,
          }, // swing D low 150.90
          {
            time: 1756214100,
            open: 151.3,
            high: 152.7,
            low: 151.1,
            close: 152.4,
            volume: 2000000,
          },
          {
            time: 1756217700,
            open: 152.4,
            high: 153.6,
            low: 152.2,
            close: 153.2,
            volume: 2100000,
          }, // swing E high 153.60
          {
            time: 1756221300,
            open: 153.2,
            high: 153.5,
            low: 152.6,
            close: 152.9,
            volume: 1900000,
          },
        ],

        annotations: [
          // ---------- Support (3) ----------
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188900, price: 150.8 },
              { time: 1756221300, price: 150.8 },
            ],
            text: "S1 • 1 Test",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188900, price: 151.0 },
              { time: 1756221300, price: 151.0 },
            ],
            text: "S2 • 2 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188900, price: 151.5 },
              { time: 1756221300, price: 151.5 },
            ],
            text: "S3 • 3 Tests",
          },

          // ---------- Resistance (3) ----------
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188900, price: 153.0 },
              { time: 1756221300, price: 153.0 },
            ],
            text: "R1 • 2 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188900, price: 153.6 },
              { time: 1756221300, price: 153.6 },
            ],
            text: "R2 • 1 Test",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188900, price: 154.2 },
              { time: 1756221300, price: 154.2 },
            ],
            text: "R3 • 1 Test",
          },

          // ---------- Test Area (zone) ----------
          {
            shape_type: "rectangle",
            annotation_type: "test_area",
            points: [
              { time: 1756192500, price: 151.2 }, // top
              { time: 1756210500, price: 150.6 }, // bottom
            ],
            tests_count: 2,
            time_in_zone_pct: 20,
            text: "20% Time in Zone • 2 Tests",
          },

          // ---------- Swings (A–E) ----------
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756196100, price: 153.2 },
            direction: "down",
            pivot: "A",
            text: "SH (Higher)",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756199700, price: 151.0 },
            direction: "up",
            pivot: "B",
            text: "SL (Lower)",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756206900, price: 154.1 },
            direction: "down",
            pivot: "C",
            text: "SH (Higher)",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756210500, price: 150.9 },
            direction: "up",
            pivot: "D",
            text: "SL (Lower)",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756217700, price: 153.6 },
            direction: "down",
            pivot: "E",
            text: "SH (Lower)",
          },

          // ---------- Metrics (objects w/ labels; last 5 swings) ----------
          {
            shape_type: "point",
            annotation_type: "metrics",
            metrics: {
              velocity: [
                { label: "A–B", value: 2.2 }, // |153.2-151.0| / 1h
                { label: "B–C", value: 1.55 }, // |151.0-154.1| / 2h
                { label: "C–D", value: 3.2 }, // |154.1-150.9| / 1h
                { label: "D–E", value: 1.35 }, // |150.9-153.6| / 2h
              ],
              acceleration: [
                { label: "Swing 1→2 (A–B→B–C)", value: -0.65 }, // 1.55 - 2.2
                { label: "Swing 2→3 (B–C→C–D)", value: 1.65 }, // 3.2 - 1.55
                { label: "Swing 3→4 (C–D→D–E)", value: -1.85 }, // 1.35 - 3.2
              ],
              magnitude: [
                { label: "A–B", value: 2.2 },
                { label: "B–C", value: 3.1 },
                { label: "C–D", value: 3.2 },
                { label: "D–E", value: 2.7 },
              ],
            },
          },
        ],

        // convenient top-level copy for easy access in UI
        metrics: {
          velocity: [
            { label: "A–B", value: 2.2 },
            { label: "B–C", value: 1.55 },
            { label: "C–D", value: 3.2 },
            { label: "D–E", value: 1.35 },
          ],
          acceleration: [
            { label: "Swing 1→2 (A–B→B–C)", value: -0.65 },
            { label: "Swing 2→3 (B–C→C–D)", value: 1.65 },
            { label: "Swing 3→4 (C–D→D–E)", value: -1.85 },
          ],
          magnitude: [
            { label: "A–B", value: 2.2 },
            { label: "B–C", value: 3.1 },
            { label: "C–D", value: 3.2 },
            { label: "D–E", value: 2.7 },
          ],
        },

        // Optional sector boxes (kept from your sample)
        sector_overview: [
          { sector: "Tech", score: 83, advancers: 56, decliners: 44 },
          { sector: "Finance", score: 71, advancers: 41, decliners: 59 },
          { sector: "Energy", score: 65, advancers: 34, decliners: 66 },
          { sector: "Healthcare", score: 69, advancers: 46, decliners: 54 },
        ],
        sector_comparison: [
          { metric: "1D %", SectorA: "+0.9", SectorB: "+0.3" },
          { metric: "5D %", SectorA: "+2.1", SectorB: "+1.6" },
          { metric: "1M %", SectorA: "+4.3", SectorB: "+3.7" },
        ],

        total_annotations: 11,
        created_at: "2025-09-12T10:30:15.123456",
      },

      "15m": {
        timeframe: "15m",
        candles_count: 20,
        title: "AAPL 15m",
        subtitle: "20 candles • S/R • Test Area • Swings A–E • Metrics",
        swing_calc: { last_n: 5 },
        candles: [
          {
            time: 1756188000,
            open: 150.0,
            high: 150.4,
            low: 149.9,
            close: 150.2,
            volume: 500000,
          },
          {
            time: 1756188900,
            open: 150.2,
            high: 150.6,
            low: 150.0,
            close: 150.5,
            volume: 480000,
          },
          {
            time: 1756189800,
            open: 150.5,
            high: 151.0,
            low: 150.3,
            close: 150.8,
            volume: 460000,
          },
          {
            time: 1756190700,
            open: 150.8,
            high: 151.5,
            low: 150.7,
            close: 151.3,
            volume: 450000,
          },
          {
            time: 1756191600,
            open: 151.3,
            high: 151.8,
            low: 151.1,
            close: 151.6,
            volume: 440000,
          }, // A high 151.8
          {
            time: 1756192500,
            open: 151.6,
            high: 151.7,
            low: 151.2,
            close: 151.3,
            volume: 430000,
          },
          {
            time: 1756193400,
            open: 151.3,
            high: 151.4,
            low: 150.9,
            close: 151.0,
            volume: 420000,
          },
          {
            time: 1756194300,
            open: 151.0,
            high: 151.1,
            low: 150.6,
            close: 150.7,
            volume: 410000,
          }, // B low 150.6
          {
            time: 1756195200,
            open: 150.7,
            high: 150.9,
            low: 150.5,
            close: 150.8,
            volume: 405000,
          },
          {
            time: 1756196100,
            open: 150.8,
            high: 151.2,
            low: 150.7,
            close: 151.0,
            volume: 400000,
          },
          {
            time: 1756197000,
            open: 151.0,
            high: 152.2,
            low: 150.9,
            close: 151.9,
            volume: 455000,
          }, // C high 152.2
          {
            time: 1756197900,
            open: 151.9,
            high: 152.0,
            low: 151.3,
            close: 151.5,
            volume: 440000,
          },
          {
            time: 1756198800,
            open: 151.5,
            high: 151.6,
            low: 151.1,
            close: 151.2,
            volume: 430000,
          },
          {
            time: 1756199700,
            open: 151.2,
            high: 151.3,
            low: 150.9,
            close: 151.0,
            volume: 420000,
          },
          {
            time: 1756200600,
            open: 151.0,
            high: 151.1,
            low: 150.9,
            close: 150.9,
            volume: 415000,
          }, // D low 150.9
          {
            time: 1756201500,
            open: 150.9,
            high: 151.2,
            low: 150.8,
            close: 151.1,
            volume: 410000,
          },
          {
            time: 1756202400,
            open: 151.1,
            high: 151.4,
            low: 151.0,
            close: 151.3,
            volume: 405000,
          },
          {
            time: 1756203300,
            open: 151.3,
            high: 151.7,
            low: 151.1,
            close: 151.6,
            volume: 400000,
          },
          {
            time: 1756204200,
            open: 151.6,
            high: 151.9,
            low: 151.4,
            close: 151.8,
            volume: 395000,
          }, // E high 151.9
          {
            time: 1756205100,
            open: 151.8,
            high: 152.0,
            low: 151.6,
            close: 151.7,
            volume: 390000,
          },
        ],

        annotations: [
          // Supports (3)
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 150.2 },
              { time: 1756205100, price: 150.2 },
            ],
            text: "S1 • 1 Test",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 150.8 },
              { time: 1756205100, price: 150.8 },
            ],
            text: "S2 • 2 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 151.5 },
              { time: 1756205100, price: 151.5 },
            ],
            text: "S3 • 2 Tests",
          },

          // Resistances (3)
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 152.0 },
              { time: 1756205100, price: 152.0 },
            ],
            text: "R1 • 1 Test",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 152.4 },
              { time: 1756205100, price: 152.4 },
            ],
            text: "R2 • 1 Test",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 152.8 },
              { time: 1756205100, price: 152.8 },
            ],
            text: "R3 • 1 Test",
          },

          // Test Area
          {
            shape_type: "rectangle",
            annotation_type: "test_area",
            points: [
              { time: 1756189800, price: 151.0 },
              { time: 1756199700, price: 150.4 },
            ],
            tests_count: 3,
            time_in_zone_pct: 26,
            text: "Test Area • 3 Tests",
          },

          // Swings A–E
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756191600, price: 151.8 },
            direction: "down",
            pivot: "A",
            text: "SH",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756194300, price: 150.6 },
            direction: "up",
            pivot: "B",
            text: "SL",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756197000, price: 152.2 },
            direction: "down",
            pivot: "C",
            text: "SH",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756200600, price: 150.9 },
            direction: "up",
            pivot: "D",
            text: "SL",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756204200, price: 151.9 },
            direction: "down",
            pivot: "E",
            text: "SH",
          },

          // Metrics (last 5 swings)
          {
            shape_type: "point",
            annotation_type: "metrics",
            metrics: {
              velocity: [
                { label: "A–B", value: 1.6 }, // (1.2 over 0.75h)
                { label: "B–C", value: 1.6 }, // (1.6 over 1.0h)
                { label: "C–D", value: 1.73 }, // (1.3 over 0.75h)
                { label: "D–E", value: 1.0 }, // (1.0 over 1.0h)
              ],
              acceleration: [
                { label: "Swing 1→2", value: 0.0 },
                { label: "Swing 2→3", value: 0.13 },
                { label: "Swing 3→4", value: -0.73 },
              ],
              magnitude: [
                { label: "A–B", value: 1.2 },
                { label: "B–C", value: 1.6 },
                { label: "C–D", value: 1.3 },
                { label: "D–E", value: 1.0 },
              ],
            },
          },
        ],

        metrics: {
          velocity: [
            { label: "A–B", value: 1.6 },
            { label: "B–C", value: 1.6 },
            { label: "C–D", value: 1.73 },
            { label: "D–E", value: 1.0 },
          ],
          acceleration: [
            { label: "Swing 1→2", value: 0.0 },
            { label: "Swing 2→3", value: 0.13 },
            { label: "Swing 3→4", value: -0.73 },
          ],
          magnitude: [
            { label: "A–B", value: 1.2 },
            { label: "B–C", value: 1.6 },
            { label: "C–D", value: 1.3 },
            { label: "D–E", value: 1.0 },
          ],
        },

        total_annotations: 16,
        created_at: "2025-09-12T10:30:15.123456",
      },

      "5m": {
        timeframe: "5m",
        candles_count: 24,
        title: "AAPL 5m",
        subtitle: "24 candles • S/R • Test Area • Swings A–E • Metrics",
        swing_calc: { last_n: 5 },
        candles: [
          {
            time: 1756188000,
            open: 150.0,
            high: 150.2,
            low: 149.9,
            close: 150.1,
            volume: 300000,
          },
          {
            time: 1756188300,
            open: 150.1,
            high: 150.3,
            low: 149.9,
            close: 150.0,
            volume: 305000,
          },
          {
            time: 1756188600,
            open: 150.0,
            high: 150.4,
            low: 149.9,
            close: 150.3,
            volume: 310000,
          },
          {
            time: 1756188900,
            open: 150.3,
            high: 150.6,
            low: 150.2,
            close: 150.5,
            volume: 315000,
          },
          {
            time: 1756189200,
            open: 150.5,
            high: 150.9,
            low: 150.4,
            close: 150.8,
            volume: 320000,
          },
          {
            time: 1756189500,
            open: 150.8,
            high: 151.1,
            low: 150.6,
            close: 151.0,
            volume: 325000,
          },
          {
            time: 1756189800,
            open: 151.0,
            high: 151.2,
            low: 150.9,
            close: 151.1,
            volume: 330000,
          }, // A high 151.2
          {
            time: 1756190100,
            open: 151.1,
            high: 151.1,
            low: 150.8,
            close: 150.9,
            volume: 320000,
          },
          {
            time: 1756190400,
            open: 150.9,
            high: 151.0,
            low: 150.7,
            close: 150.8,
            volume: 315000,
          },
          {
            time: 1756190700,
            open: 150.8,
            high: 150.9,
            low: 150.6,
            close: 150.7,
            volume: 310000,
          },
          {
            time: 1756191000,
            open: 150.7,
            high: 150.8,
            low: 150.3,
            close: 150.4,
            volume: 305000,
          }, // B low 150.3
          {
            time: 1756191300,
            open: 150.4,
            high: 150.7,
            low: 150.3,
            close: 150.6,
            volume: 300000,
          },
          {
            time: 1756191600,
            open: 150.6,
            high: 151.0,
            low: 150.5,
            close: 150.9,
            volume: 300000,
          },
          {
            time: 1756191900,
            open: 150.9,
            high: 151.4,
            low: 150.8,
            close: 151.3,
            volume: 305000,
          },
          {
            time: 1756192200,
            open: 151.3,
            high: 151.6,
            low: 151.2,
            close: 151.5,
            volume: 310000,
          }, // C high 151.6
          {
            time: 1756192500,
            open: 151.5,
            high: 151.5,
            low: 151.2,
            close: 151.3,
            volume: 312000,
          },
          {
            time: 1756192800,
            open: 151.3,
            high: 151.3,
            low: 151.0,
            close: 151.1,
            volume: 310000,
          },
          {
            time: 1756193100,
            open: 151.1,
            high: 151.2,
            low: 150.8,
            close: 150.9,
            volume: 305000,
          },
          {
            time: 1756193400,
            open: 150.9,
            high: 151.0,
            low: 150.5,
            close: 150.6,
            volume: 300000,
          }, // D low 150.5
          {
            time: 1756193700,
            open: 150.6,
            high: 150.9,
            low: 150.5,
            close: 150.8,
            volume: 300000,
          },
          {
            time: 1756194000,
            open: 150.8,
            high: 151.1,
            low: 150.7,
            close: 151.0,
            volume: 305000,
          },
          {
            time: 1756194300,
            open: 151.0,
            high: 151.3,
            low: 150.9,
            close: 151.2,
            volume: 310000,
          },
          {
            time: 1756194600,
            open: 151.2,
            high: 151.4,
            low: 151.1,
            close: 151.3,
            volume: 315000,
          }, // E high 151.4
          {
            time: 1756194900,
            open: 151.3,
            high: 151.4,
            low: 151.1,
            close: 151.2,
            volume: 320000,
          },
        ],

        annotations: [
          // Supports (3)
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 150.4 },
              { time: 1756194900, price: 150.4 },
            ],
            text: "S1 • 2 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 150.7 },
              { time: 1756194900, price: 150.7 },
            ],
            text: "S2 • 3 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 150.9 },
              { time: 1756194900, price: 150.9 },
            ],
            text: "S3 • 2 Tests",
          },

          // Resistances (3)
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 151.2 },
              { time: 1756194900, price: 151.2 },
            ],
            text: "R1 • 2 Tests",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 151.4 },
              { time: 1756194900, price: 151.4 },
            ],
            text: "R2 • 1 Test",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188000, price: 151.6 },
              { time: 1756194900, price: 151.6 },
            ],
            text: "R3 • 1 Test",
          },

          // Test Area
          {
            shape_type: "rectangle",
            annotation_type: "test_area",
            points: [
              { time: 1756188600, price: 151.0 },
              { time: 1756192500, price: 150.4 },
            ],
            tests_count: 4,
            time_in_zone_pct: 22,
            text: "Demand Zone",
          },

          // Swings A–E
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756189800, price: 151.2 },
            direction: "down",
            pivot: "A",
            text: "SH",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756191000, price: 150.3 },
            direction: "up",
            pivot: "B",
            text: "SL",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756192200, price: 151.6 },
            direction: "down",
            pivot: "C",
            text: "SH",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756193400, price: 150.5 },
            direction: "up",
            pivot: "D",
            text: "SL",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756194600, price: 151.4 },
            direction: "down",
            pivot: "E",
            text: "SH",
          },

          // Metrics
          {
            shape_type: "point",
            annotation_type: "metrics",
            metrics: {
              velocity: [
                { label: "A–B", value: 2.7 },
                { label: "B–C", value: 3.9 },
                { label: "C–D", value: 3.3 },
                { label: "D–E", value: 2.7 },
              ],
              acceleration: [
                { label: "Swing 1→2", value: 1.2 },
                { label: "Swing 2→3", value: -0.6 },
                { label: "Swing 3→4", value: -0.6 },
              ],
              magnitude: [
                { label: "A–B", value: 0.9 },
                { label: "B–C", value: 1.3 },
                { label: "C–D", value: 1.1 },
                { label: "D–E", value: 0.9 },
              ],
            },
          },
        ],

        metrics: {
          velocity: [
            { label: "A–B", value: 2.7 },
            { label: "B–C", value: 3.9 },
            { label: "C–D", value: 3.3 },
            { label: "D–E", value: 2.7 },
          ],
          acceleration: [
            { label: "Swing 1→2", value: 1.2 },
            { label: "Swing 2→3", value: -0.6 },
            { label: "Swing 3→4", value: -0.6 },
          ],
          magnitude: [
            { label: "A–B", value: 0.9 },
            { label: "B–C", value: 1.3 },
            { label: "C–D", value: 1.1 },
            { label: "D–E", value: 0.9 },
          ],
        },

        total_annotations: 18,
        created_at: "2025-09-12T10:30:15.123456",
      },

      highlights: {
        title: "Sector Highlights",
        performers: "GLENMARK (Pharma), DIXON (Consumer), NATIONALUM (Metal)",
      },
      infrastructure: {
        name: "Infrastructure",
        score: 84.39,
        stats: ["78% ADVANCING | A/D RATIO: 7.0 | 66% ABOVE VWAP"],
      },
      itServices: {
        name: "IT Services",
        score: 75.21,
        stats: ["100% ADVANCING | 80% ABOVE VWAP NEUTRAL RSI 49.83"],
      },
      financial: {
        name: "Financial",
        score: 72.53,
        stats: ["87% ADVANCING | A/D RATIO: 6.5 | 73% ABOVE VWAP"],
      },
      banking: {
        name: "Banking",
        score: 71.07,
        stats: ["86% ADVANCING | A/D RATIO: 6.0 | 57% ABOVE VWAP"],
      },
      pharma: {
        name: "Pharma",
        score: 66.78,
        stats: ["67% ADVANCING | A/D RATIO: 2.0 | 58% ABOVE VWAP"],
      },
    },
  },
];
