import { ImageResponse } from "next/og";

export const alt = "Cylvox — Solo Studio | Digital systems that move";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#070913",
          padding: "72px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top-right coral/rose aura glow */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-100px",
            width: "650px",
            height: "650px",
            borderRadius: "325px",
            background:
              "radial-gradient(circle, rgba(244, 63, 94, 0.28) 0%, rgba(244, 63, 94, 0.05) 50%, transparent 75%)",
            display: "flex",
          }}
        />

        {/* Bottom-left electric volt aura glow */}
        <div
          style={{
            position: "absolute",
            bottom: "-200px",
            left: "-120px",
            width: "700px",
            height: "700px",
            borderRadius: "350px",
            background:
              "radial-gradient(circle, rgba(204, 255, 0, 0.22) 0%, rgba(204, 255, 0, 0.03) 50%, transparent 75%)",
            display: "flex",
          }}
        />

        {/* Inner architectural border frame */}
        <div
          style={{
            position: "absolute",
            top: "24px",
            left: "24px",
            right: "24px",
            bottom: "24px",
            borderRadius: "28px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            display: "flex",
            pointerEvents: "none",
          }}
        />

        {/* Top Header Bar */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "12px",
              padding: "10px 22px",
              borderRadius: "999px",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(204, 255, 0, 0.3)",
            }}
          >
            <div
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "7px",
                backgroundColor: "#ccff00",
                display: "flex",
              }}
            />
            <span
              style={{
                color: "#f2efe9",
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "0.12em",
              }}
            >
              INDEPENDENT SOLO STUDIO
            </span>
          </div>
          <span
            style={{
              color: "rgba(242, 239, 233, 0.55)",
              fontSize: "22px",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            cylvox.com
          </span>
        </div>

        {/* Center: Massive Brand Wordmark */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "28px",
            marginTop: "auto",
            marginBottom: "36px",
          }}
        >
          <svg width="88" height="88" viewBox="0 0 512 512" fill="none">
            <rect width="512" height="512" rx="256" fill="white" />
            <path
              d="M373.5 279C371.167 299.667 364.5 317.5 353.5 332.5C342.833 347.167 329.333 358.5 313 366.5C296.667 374.167 279 378 260 378C238.667 378 218.667 372.833 200 362.5C181.333 352.167 166.167 337.333 154.5 318C143.167 298.333 137.5 275.167 137.5 248.5C137.5 221.833 143.167 198.833 154.5 179.5C166.167 159.833 181.333 144.667 200 134C218.667 123.333 238.667 118 260 118C279 118 296.5 122 312.5 130C328.833 138 342.333 149.333 353 164C364 178.667 370.833 196.167 373.5 216.5H337C331.333 197.5 321.5 182.667 307.5 172C293.5 161 277.667 155.5 260 155.5C245.667 155.5 232.167 159.167 219.5 166.5C206.833 173.833 196.667 184.5 189 198.5C181.333 212.167 177.5 228.833 177.5 248.5C177.5 267.833 181.333 284.5 189 298.5C196.667 312.167 206.667 322.667 219 330C231.667 337 245.333 340.5 260 340.5C280.333 340.5 296.833 335.167 309.5 324.5C322.5 313.5 331.833 298.333 337.5 279H373.5Z"
              fill="#ccff00"
            />
          </svg>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
            }}
          >
            <span
              style={{
                fontSize: "92px",
                fontWeight: 900,
                color: "#f2efe9",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              CYLVOX
            </span>
            <span
              style={{
                fontSize: "92px",
                fontWeight: 900,
                color: "#ccff00",
                lineHeight: 1,
              }}
            >
              .
            </span>
          </div>
        </div>

        {/* Bottom Tagline Block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <span
            style={{
              fontSize: "44px",
              fontWeight: 700,
              color: "#f2efe9",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Digital systems that move.
          </span>
          <div style={{ fontSize: 36, color: "#888", marginTop: 24, letterSpacing: "-0.02em" }}>
            From invisible to page one.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
