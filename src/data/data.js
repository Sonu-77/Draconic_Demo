export const DATA = [
  {
    chart_data: {
      symbol: "AAPL",

      "1h": {
        timeframe: "1h",
        candles_count: 5,
        title: "AAPL 1h",
        subtitle: "5 candles • annotations",
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
            high: 152.95,
            low: 151.6,
            close: 151.8,
            volume: 2100000,
          },
          {
            time: 1756199700,
            open: 151.8,
            high: 152.4,
            low: 151.2,
            close: 151.95,
            volume: 1900000,
          },
          {
            time: 1756203300,
            open: 151.95,
            high: 153.2,
            low: 151.7,
            close: 152.85,
            volume: 2200000,
          },
        ],
        annotations: [
          // Support / Resistance (top lines)
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188900, price: 150.0 },
              { time: 1756203300, price: 150.0 },
            ],
            text: "Support 150",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188900, price: 153.0 },
              { time: 1756203300, price: 153.0 },
            ],
            text: "Resistance 153",
          },

          // Swing High / Low markers
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756196100, price: 152.95 },
            direction: "down",
            text: "Swing High",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756192500, price: 150.9 },
            direction: "up",
            text: "Swing Low",
          },

          // Test Area (two price levels + meta)
          {
            shape_type: "rectangle",
            annotation_type: "test_area",
            points: [
              { time: 1756188900, price: 151.0 }, // top
              { time: 1756203300, price: 150.2 }, // bottom
            ],
            tests_count: 5,
            time_spent: "2h 15m",
            text: "Demand zone",
          },

          // Optional metrics container (your UI reads these from chartData.metrics OR this annotation)
          {
            shape_type: "point",
            annotation_type: "metrics",
            metrics: {
              magnitude: [1.2, 0.8, 1.9, 1.1, 0.7],
              velocity: [0.5, 0.9, 0.3, 1.2],
              acceleration: [0.2, -0.1, 0.4],
            },
          },
        ],

        metrics: {
          magnitude: [1.2, 0.8, 1.9, 1.1, 0.7],
          velocity: [0.5, 0.9, 0.3, 1.2],
          acceleration: [0.2, -0.1, 0.4],
        },

        // Optional sector boxes (UI shows tables if present)
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

        total_annotations: 6,
        created_at: "2025-09-12T10:30:15.123456",
      },

      "15m": {
        timeframe: "15m",
        candles_count: 8,
        title: "AAPL 15m",
        subtitle: "8 candles • 2 annotations",
        candles: [
          {
            time: 1756188000,
            open: 150,
            high: 150.5,
            low: 149.8,
            close: 150.3,
            volume: 500000,
          },
          {
            time: 1756188900,
            open: 150.3,
            high: 150.7,
            low: 149.9,
            close: 150.5,
            volume: 480000,
          },
          {
            time: 1756189800,
            open: 150.5,
            high: 150.9,
            low: 150.2,
            close: 150.8,
            volume: 460000,
          },
          {
            time: 1756190700,
            open: 150.8,
            high: 151.2,
            low: 150.5,
            close: 151,
            volume: 450000,
          },
          {
            time: 1756191600,
            open: 151,
            high: 151.4,
            low: 150.7,
            close: 151.2,
            volume: 440000,
          },
          {
            time: 1756192500,
            open: 151.2,
            high: 151.6,
            low: 151,
            close: 151.4,
            volume: 430000,
          },
          {
            time: 1756193400,
            open: 151.4,
            high: 151.8,
            low: 151.2,
            close: 151.6,
            volume: 420000,
          },
          {
            time: 1756194300,
            open: 151.6,
            high: 151.9,
            low: 151.3,
            close: 151.7,
            volume: 410000,
          },
        ],
        annotations: [
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 150.0 },
              { time: 1756194300, price: 150.0 },
            ],
            text: "Support 150",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756189800, price: 150.2 },
            direction: "up",
            text: "Swing Low",
          },
        ],
        total_annotations: 2,
        created_at: "2025-09-12T10:30:15.123456",
      },

      "5m": {
        timeframe: "5m",
        candles_count: 12,
        title: "AAPL 5m",
        subtitle: "12 candles",
        candles: Array.from({ length: 12 }).map((_, i) => {
          const base = 1756188000 + i * 300;
          const open = 150 + i * 0.1;
          const close = open + (Math.random() > 0.5 ? 0.2 : -0.1);
          return {
            time: base,
            open,
            high: Math.max(open, close) + 0.2,
            low: Math.min(open, close) - 0.2,
            close,
            volume: 300000 + i * 20000,
          };
        }),
        annotations: [],
        total_annotations: 0,
        created_at: "2025-09-12T10:30:15.123456",
      },

      // ==== ADDED BLOCKS ====
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
        candles_count: 5,
        title: "GOOG 1h",
        subtitle: "5 candles",
        candles: [
          {
            time: 1756188900,
            open: 2800,
            high: 2820,
            low: 2790,
            close: 2810,
            volume: 1800000,
          },
          {
            time: 1756192500,
            open: 2810,
            high: 2830,
            low: 2805,
            close: 2825,
            volume: 1750000,
          },
          {
            time: 1756196100,
            open: 2825,
            high: 2835,
            low: 2815,
            close: 2820,
            volume: 1700000,
          },
          {
            time: 1756199700,
            open: 2820,
            high: 2832,
            low: 2810,
            close: 2828,
            volume: 1650000,
          },
          {
            time: 1756203300,
            open: 2828,
            high: 2840,
            low: 2820,
            close: 2835,
            volume: 1600000,
          },
        ],
        annotations: [
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188900, price: 2805 },
              { time: 1756203300, price: 2805 },
            ],
            text: "Support 2805",
          },
          {
            shape_type: "line",
            annotation_type: "resistance_band",
            points: [
              { time: 1756188900, price: 2838 },
              { time: 1756203300, price: 2838 },
            ],
            text: "Resistance 2838",
          },
        ],
        metrics: {
          magnitude: [1.2, 0.8, 1.9, 1.1, 0.7],
          velocity: [0.5, 0.9, 0.3, 1.2],
          acceleration: [0.2, -0.1, 0.4],
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
        total_annotations: 2,
        created_at: "2025-09-12T10:30:15.123456",
      },
      "15m": {
        timeframe: "15m",
        candles_count: 8,
        title: "GOOG 15m",
        subtitle: "8 candles",
        candles: Array.from({ length: 8 }).map((_, i) => {
          const base = 1756188000 + i * 900;
          const open = 2800 + i * 2;
          const close = open + (Math.random() > 0.5 ? 5 : -3);
          return {
            time: base,
            open,
            high: Math.max(open, close) + 5,
            low: Math.min(open, close) - 5,
            close,
            volume: 500000 - i * 20000,
          };
        }),
        annotations: [
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188000, price: 2800 },
              { time: 1756194300, price: 2800 }, // keep price same for horizontal line
            ],
            text: "Support 2800",
          },
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756192500, price: 2820 },
            direction: "down",
            text: "Swing High",
          },
        ],
        total_annotations: 2,
        created_at: "2025-09-12T10:30:15.123456",
      },
    },
  },

  {
    chart_data: {
      symbol: "MSFT",
      "1h": {
        timeframe: "1h",
        candles_count: 5,
        title: "MSFT 1h",
        subtitle: "5 candles",
        candles: [
          {
            time: 1756188900,
            open: 300,
            high: 305,
            low: 298,
            close: 304,
            volume: 1200000,
          },
          {
            time: 1756192500,
            open: 304,
            high: 307,
            low: 302,
            close: 306,
            volume: 1180000,
          },
          {
            time: 1756196100,
            open: 306,
            high: 309,
            low: 304,
            close: 305,
            volume: 1150000,
          },
          {
            time: 1756199700,
            open: 305,
            high: 308,
            low: 303,
            close: 307,
            volume: 1130000,
          },
          {
            time: 1756203300,
            open: 307,
            high: 310,
            low: 305,
            close: 309,
            volume: 1110000,
          },
        ],
        annotations: [
          {
            shape_type: "rectangle",
            annotation_type: "test_area",
            points: [
              { time: 1756188900, price: 306.5 },
              { time: 1756203300, price: 304.5 },
            ],
            tests_count: 3,
            time_spent: "1h 10m",
            text: "Supply zone",
          },
        ],
        metrics: {
          magnitude: [1.2, 0.8, 1.9, 1.1, 0.7],
          velocity: [0.5, 0.9, 0.3, 1.2],
          acceleration: [0.2, -0.1, 0.4],
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
        total_annotations: 1,
        created_at: "2025-09-12T10:30:15.123456",
      },
      "5m": {
        timeframe: "5m",
        candles_count: 12,
        title: "MSFT 5m",
        subtitle: "12 candles",
        candles: Array.from({ length: 12 }).map((_, i) => {
          const base = 1756188000 + i * 300;
          const open = 300 + i * 0.2;
          const close = open + (Math.random() > 0.5 ? 1 : -0.5);
          return {
            time: base,
            open,
            high: Math.max(open, close) + 0.5,
            low: Math.min(open, close) - 0.5,
            close,
            volume: 200000 + i * 10000,
          };
        }),
        annotations: [
          {
            shape_type: "triangle",
            annotation_type: "swing_low",
            center: { time: 1756189800, price: 300.2 },
            direction: "up",
            text: "Swing Low",
          },
        ],
        total_annotations: 1,
        created_at: "2025-09-12T10:30:15.123456",
      },
    },
  },

  {
    chart_data: {
      symbol: "TSLA",
      "1h": {
        timeframe: "1h",
        candles_count: 5,
        title: "TSLA 1h",
        subtitle: "5 candles",
        candles: [
          {
            time: 1756188900,
            open: 700,
            high: 710,
            low: 695,
            close: 705,
            volume: 2200000,
          },
          {
            time: 1756192500,
            open: 705,
            high: 715,
            low: 700,
            close: 712,
            volume: 2150000,
          },
          {
            time: 1756196100,
            open: 712,
            high: 718,
            low: 708,
            close: 715,
            volume: 2100000,
          },
          {
            time: 1756199700,
            open: 715,
            high: 720,
            low: 710,
            close: 718,
            volume: 2050000,
          },
          {
            time: 1756203300,
            open: 718,
            high: 725,
            low: 715,
            close: 722,
            volume: 2000000,
          },
        ],
        annotations: [
          {
            shape_type: "line",
            annotation_type: "support_band",
            points: [
              { time: 1756188900, price: 705 },
              { time: 1756203300, price: 705 },
            ],
            text: "Support 705",
          },
        ],
        metrics: {
          magnitude: [1.2, 0.8, 1.9, 1.1, 0.7],
          velocity: [0.5, 0.9, 0.3, 1.2],
          acceleration: [0.2, -0.1, 0.4],
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
        total_annotations: 1,
        created_at: "2025-09-12T10:30:15.123456",
      },
      "15m": {
        timeframe: "15m",
        candles_count: 8,
        title: "TSLA 15m",
        subtitle: "8 candles",
        candles: Array.from({ length: 8 }).map((_, i) => {
          const base = 1756188000 + i * 900;
          const open = 700 + i * 1.5;
          const close = open + (Math.random() > 0.5 ? 2 : -1);
          return {
            time: base,
            open,
            high: Math.max(open, close) + 2,
            low: Math.min(open, close) - 2,
            close,
            volume: 400000 + i * 30000,
          };
        }),
        annotations: [
          {
            shape_type: "triangle",
            annotation_type: "swing_high",
            center: { time: 1756191600, price: 712 },
            direction: "down",
            text: "Swing High",
          },
        ],
        total_annotations: 1,
        created_at: "2025-09-12T10:30:15.123456",
      },
    },
  },
];
