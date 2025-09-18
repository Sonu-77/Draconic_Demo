export const DATA = [
  {
    chart_data: {
      symbol: "AAPL",

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
