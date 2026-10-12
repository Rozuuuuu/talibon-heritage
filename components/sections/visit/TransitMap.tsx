"use client";

import { TRANSIT } from "@/lib/visit-constants";

interface TransitMapProps {
  activePath: string | null;
}

export function TransitMap({ activePath }: TransitMapProps) {
  const routeStroke = (id: string) =>
    activePath === id
      ? { stroke: "#BA1A1A", strokeWidth: 3.5 }
      : { stroke: "#16130F", strokeWidth: 1.5 };

  return (
    <div className="border border-line bg-paper p-space-md transition-shadow duration-300 hover:shadow-lg sm:p-space-lg md:p-space-xl">
      {/* Header */}
      <div className="mb-space-lg flex flex-col justify-between gap-space-sm border-b border-line pb-space-md md:flex-row md:items-center">
        <div>
          <span className="block font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink">
            {TRANSIT.map.title}
          </span>
          <span className="font-serif-aside text-sm italic text-ink-muted sm:text-serif-aside">
            {TRANSIT.map.coords}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-space-md gap-y-space-xs font-label-caps text-[10px] uppercase text-ink-faint sm:text-[11px]">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-ink" />
            {TRANSIT.map.legendPrimary}
          </span>
          <span className="hidden text-line sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 border border-ink" />
            {TRANSIT.map.legendSecondary}
          </span>
        </div>
      </div>

      {/* SVG Map — scales across 280 → 420 px */}
      <div className="relative flex h-[280px] w-full items-center justify-center overflow-hidden border border-line bg-paper-dim sm:h-[360px] md:h-[420px]">
        <svg
          viewBox="0 0 900 420"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full max-w-[900px] text-ink"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Graticule */}
          <g stroke="#D0C8B8" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.6">
            <line x1="0" x2="900" y1="70" y2="70" />
            <line x1="0" x2="900" y1="140" y2="140" />
            <line x1="0" x2="900" y1="210" y2="210" />
            <line x1="0" x2="900" y1="280" y2="280" />
            <line x1="0" x2="900" y1="350" y2="350" />
            <line x1="150" x2="150" y1="0" y2="420" />
            <line x1="300" x2="300" y1="0" y2="420" />
            <line x1="450" x2="450" y1="0" y2="420" />
            <line x1="600" x2="600" y1="0" y2="420" />
            <line x1="750" x2="750" y1="0" y2="420" />
          </g>

          {/* Bohol Island outline */}
          <path
            d="M 60 360
               Q 80 340, 110 330
               Q 130 320, 120 300
               Q 100 270, 90 240
               Q 90 220, 110 205
               Q 150 185, 190 170
               Q 220 160, 250 150
               Q 290 130, 340 105
               Q 380 85, 420 70
               Q 470 55, 520 55
               Q 570 55, 620 60
               Q 660 65, 700 80
               Q 750 90, 800 100
               Q 850 100, 880 130
               Q 890 170, 880 210
               Q 870 250, 850 280
               Q 830 300, 800 305
               Q 770 310, 740 300
               Q 710 290, 690 300
               Q 680 320, 670 350
               Q 640 375, 590 385
               Q 540 395, 490 395
               Q 440 400, 390 395
               Q 340 385, 290 380
               Q 240 375, 200 380
               Q 160 385, 130 380
               Q 100 380, 60 360
               Z"
            fill="#D8D0C0"
            stroke="#5C554A"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />

          {/* Elevation band 1 */}
          <path
            d="M 180 320
               Q 250 260, 340 210
               Q 420 170, 500 160
               Q 580 155, 640 190
               Q 700 220, 700 270
               Q 690 320, 640 350
               Q 570 380, 480 380
               Q 380 380, 300 360
               Q 220 340, 180 320
               Z"
            fill="rgba(92, 85, 74, 0.08)"
          />

          {/* Elevation band 2 */}
          <path
            d="M 280 290
               Q 350 240, 430 220
               Q 510 205, 570 225
               Q 620 245, 620 280
               Q 610 315, 560 335
               Q 490 350, 400 340
               Q 330 330, 280 290
               Z"
            fill="rgba(92, 85, 74, 0.16)"
          />

          {/* Elevation band 3 */}
          <path
            d="M 380 270
               Q 440 245, 500 250
               Q 550 260, 560 285
               Q 555 310, 510 320
               Q 440 325, 400 310
               Q 370 295, 380 270
               Z"
            fill="rgba(92, 85, 74, 0.28)"
          />

          {/* Offshore islets */}
          <ellipse
            cx="820"
            cy="70"
            rx="14"
            ry="8"
            fill="#D8D0C0"
            stroke="#5C554A"
            strokeWidth="0.75"
          />
          <ellipse
            cx="60"
            cy="395"
            rx="10"
            ry="6"
            fill="#D8D0C0"
            stroke="#5C554A"
            strokeWidth="0.75"
          />

          {/* Route paths */}
          <path
            id="path-tagbilaran"
            className="animate-route-flow transition-[stroke-width] duration-200"
            d="M 130 340 Q 350 200, 600 60"
            strokeDasharray="6 3"
            {...routeStroke("path-tagbilaran")}
          />
          <path
            id="path-tubigon"
            className="animate-route-flow transition-[stroke-width] duration-200"
            d="M 250 150 Q 420 100, 600 60"
            strokeDasharray="4 4"
            {...routeStroke("path-tubigon")}
          />
          <path
            id="path-ubay"
            className="animate-route-flow transition-[stroke-width] duration-200"
            d="M 800 100 Q 700 70, 600 60"
            strokeDasharray="4 4"
            {...routeStroke("path-ubay")}
          />

          {/* Talibon marker with pulse */}
          <circle cx="600" cy="60" r="12" fill="#BA1A1A" opacity="0.25">
            <animate
              attributeName="r"
              values="8;16;8"
              dur="2.4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.3;0.05;0.3"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="600" cy="60" r="6" fill="#16130F" />
          <circle
            cx="600"
            cy="60"
            r="11"
            stroke="#16130F"
            strokeWidth="1"
            fill="none"
          />
          <text
            x="618"
            y="55"
            fill="#16130F"
            fontFamily="Anybody, sans-serif"
            fontSize="12"
            fontWeight="900"
            letterSpacing="0.08em"
          >
            TALIBON CATHEDRAL
          </text>
          <text
            x="618"
            y="70"
            fill="#5C554A"
            fontFamily="EB Garamond, serif"
            fontSize="11"
            fontStyle="italic"
          >
            Cradle of Northern Faith
          </text>

          {/* Tubigon */}
          <rect
            x="246"
            y="146"
            width="8"
            height="8"
            fill="#EDE8DE"
            stroke="#16130F"
            strokeWidth="1.5"
          />
          <text
            x="195"
            y="145"
            fill="#5C554A"
            fontFamily="Inter, sans-serif"
            fontSize="10"
            fontWeight="600"
            letterSpacing="0.05em"
          >
            TUBIGON (45m)
          </text>

          {/* Ubay */}
          <rect
            x="796"
            y="96"
            width="8"
            height="8"
            fill="#EDE8DE"
            stroke="#16130F"
            strokeWidth="1.5"
          />
          <text
            x="810"
            y="102"
            fill="#5C554A"
            fontFamily="Inter, sans-serif"
            fontSize="10"
            fontWeight="600"
            letterSpacing="0.05em"
          >
            UBAY (1h)
          </text>

          {/* Tagbilaran */}
          <rect
            x="126"
            y="336"
            width="8"
            height="8"
            fill="#EDE8DE"
            stroke="#16130F"
            strokeWidth="1.5"
          />
          <text
            x="60"
            y="335"
            fill="#5C554A"
            fontFamily="Inter, sans-serif"
            fontSize="10"
            fontWeight="600"
            letterSpacing="0.05em"
          >
            TAGBILARAN (1.5h)
          </text>

          {/* Sea labels */}
          <text
            x="40"
            y="50"
            fill="#8B8579"
            fontFamily="EB Garamond, serif"
            fontSize="15"
            fontStyle="italic"
          >
            Camotes Sea
          </text>
          <text
            x="40"
            y="405"
            fill="#8B8579"
            fontFamily="EB Garamond, serif"
            fontSize="15"
            fontStyle="italic"
          >
            Bohol Sea · Mindanao Strait
          </text>
          <text
            x="820"
            y="240"
            fill="#8B8579"
            fontFamily="EB Garamond, serif"
            fontSize="14"
            fontStyle="italic"
          >
            Canigao Channel
          </text>

          {/* North arrow */}
          <g transform="translate(840, 340)">
            <line
              x1="0"
              y1="20"
              x2="0"
              y2="-10"
              stroke="#16130F"
              strokeWidth="1"
            />
            <polygon points="0,-16 -5,-6 5,-6" fill="#16130F" />
            <text
              x="0"
              y="36"
              fill="#16130F"
              fontFamily="Inter, sans-serif"
              fontSize="10"
              fontWeight="700"
              textAnchor="middle"
              letterSpacing="0.1em"
            >
              N
            </text>
          </g>

          {/* Scale bar */}
          <g transform="translate(60, 380)">
            <line
              x1="0"
              y1="0"
              x2="120"
              y2="0"
              stroke="#16130F"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="-3"
              x2="0"
              y2="3"
              stroke="#16130F"
              strokeWidth="1"
            />
            <line
              x1="60"
              y1="-3"
              x2="60"
              y2="3"
              stroke="#16130F"
              strokeWidth="1"
            />
            <line
              x1="120"
              y1="-3"
              x2="120"
              y2="3"
              stroke="#16130F"
              strokeWidth="1"
            />
            <text
              x="0"
              y="16"
              fill="#5C554A"
              fontFamily="Inter, sans-serif"
              fontSize="9"
              letterSpacing="0.05em"
            >
              0
            </text>
            <text
              x="120"
              y="16"
              fill="#5C554A"
              fontFamily="Inter, sans-serif"
              fontSize="9"
              textAnchor="middle"
              letterSpacing="0.05em"
            >
              20 km
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}