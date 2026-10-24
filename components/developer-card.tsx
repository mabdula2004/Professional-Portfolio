import styles from "./developer-card.module.css";

function DeveloperCardContent() {
  return <>
    <div className="code-window-top"><span /><span /><span /><small>product.tsx</small></div>
    <div className="code-lines">
      <p><b>const</b> developer = &#123;</p>
      <p>&nbsp;&nbsp;focus: <em>&quot;Web &amp; mobile development&quot;</em>,</p>
      <p>&nbsp;&nbsp;frontend: [<em>&quot;React&quot;</em>, <em>&quot;React Native&quot;</em>],</p>
      <p>&nbsp;&nbsp;backend: [<em>&quot;Supabase&quot;</em>, <em>&quot;PostgreSQL&quot;</em>],</p>
      <p>&nbsp;&nbsp;integration: <em>&quot;AI applications&quot;</em></p>
      <p>&#125;;</p>
    </div>
    <div className="build-status"><span /> Open to development opportunities</div>
  </>;
}

export function DeveloperCard() {
  return <div className={styles.stage} style={{ position: "relative", zIndex: 2, width: "min(440px, 94%)", perspective: "1200px", transform: "rotate(-2deg)" }}>
    <div className={styles.rotor} style={{ position: "relative", transformStyle: "preserve-3d" }}>
      <div className={`orbit-card ${styles.face}`} style={{ width: "100%", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(0deg) translateZ(1px)" }}>
        <DeveloperCardContent />
      </div>
      <div className={`orbit-card ${styles.face}`} aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg) translateZ(1px)" }}>
        <DeveloperCardContent />
      </div>
    </div>
  </div>;
}
