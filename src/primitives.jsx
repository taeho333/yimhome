// ——— primitives ———————————————————————————————————————————

function Placeholder({ ratio="ar-4x5", label="image", tag="plate", num="01", dark=false, className="" }){
  return (
    <div className={`ph ${dark?"dark":""} ${ratio} ${className}`}>
      <div className="ph-head">
        <span>{tag}</span>
        <span>— {num} —</span>
      </div>
      <div style={{position:"absolute",left:16,bottom:16,right:16,display:"flex",justifyContent:"space-between",alignItems:"flex-end",zIndex:1}}>
        <div style={{display:"flex",flexDirection:"column",gap:2}}>
          <span className="ph-num">{num}</span>
          <span style={{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:dark?"#6b655a":"#8A8577"}}>{label}</span>
        </div>
        <span style={{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:dark?"#6b655a":"#8A8577"}}>
          photograph · placeholder
        </span>
      </div>
    </div>
  );
}

// Reveal-on-scroll wrapper
function Reveal({ as="div", className="", stagger=false, slow=false, children, style }){
  const ref = React.useRef(null);
  React.useEffect(()=>{
    const el = ref.current; if(!el) return;
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ el.classList.add("in"); io.unobserve(el); }
      });
    },{threshold:0.12, rootMargin:"0px 0px -8% 0px"});
    io.observe(el);
    return ()=>io.disconnect();
  },[]);
  const Tag = as;
  const cls = `reveal ${slow?"reveal-slow":""} ${stagger?"stagger":""} ${className}`.trim();
  return <Tag ref={ref} className={cls} style={style}>{children}</Tag>;
}

// Parallax element — translates Y based on scroll offset
function Parallax({ speed=0.1, className="", children, style }){
  const ref = React.useRef(null);
  React.useEffect(()=>{
    let raf=0;
    function onScroll(){
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(()=>{
        const el = ref.current; if(!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = (rect.top + rect.height/2 - vh/2) / vh; // -1 .. +1 roughly
        const y = progress * speed * 120;
        el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive:true });
    window.addEventListener("resize", onScroll);
    return ()=>{ window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  },[speed]);
  return <div ref={ref} className={`parallax ${className}`} style={style}>{children}</div>;
}

function Eyebrow({ children }){
  return <span className="eyebrow">{children}</span>;
}

function Arrow({ dir="right" }){
  const rot = { right:0, left:180, up:-90, down:90 }[dir] ?? 0;
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" style={{transform:`rotate(${rot}deg)`, display:"inline-block", verticalAlign:"middle"}} aria-hidden>
      <path d="M0 5 H13 M8 0 L13 5 L8 10" fill="none" stroke="currentColor" strokeWidth="1"/>
    </svg>
  );
}

Object.assign(window, { Placeholder, Reveal, Parallax, Eyebrow, Arrow });
