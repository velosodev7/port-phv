import "./PixelAvatar.css";

/**
 * Avatar dev "PV" em pixel-art, desenhado como retângulos num grid 16x16.
 * Animações (idle hop + piscar) são puramente CSS e respeitam
 * prefers-reduced-motion. Elemento decorativo (aria-hidden).
 */
const PixelAvatar = () => {
  return (
    <div className="pixel-avatar" aria-hidden="true">
      <svg
        className="pixel-avatar__svg"
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
        role="presentation"
      >
        {/* Headset (banda + conchas) — verde */}
        <g fill="#4ee36b">
          <rect x="4" y="1" width="8" height="1" />
          <rect x="3" y="2" width="1" height="2" />
          <rect x="12" y="2" width="1" height="2" />
          <rect x="2" y="4" width="2" height="3" />
          <rect x="12" y="4" width="2" height="3" />
        </g>

        {/* Cabelo — castanho */}
        <g fill="#3a2f2a">
          <rect x="4" y="2" width="8" height="2" />
          <rect x="4" y="4" width="8" height="1" />
        </g>

        {/* Rosto / pescoço — pele */}
        <g fill="#e8b98c">
          <rect x="4" y="5" width="8" height="5" />
          <rect x="6" y="10" width="4" height="1" />
        </g>

        {/* Olhos abertos */}
        <g className="pixel-avatar__eyes-open" fill="#1a1a1a">
          <rect x="6" y="6" width="1" height="2" />
          <rect x="9" y="6" width="1" height="2" />
        </g>
        {/* Olhos fechados (piscar) */}
        <g className="pixel-avatar__eyes-shut" fill="#1a1a1a">
          <rect x="6" y="7" width="1" height="1" />
          <rect x="9" y="7" width="1" height="1" />
        </g>

        {/* Boca */}
        <rect x="7" y="9" width="2" height="1" fill="#1a1a1a" />

        {/* Camisa — coral + gola */}
        <g>
          <rect x="3" y="11" width="10" height="5" fill="#e8572a" />
          <rect x="6" y="11" width="4" height="1" fill="#b8431f" />
        </g>
      </svg>
    </div>
  );
};

export default PixelAvatar;
