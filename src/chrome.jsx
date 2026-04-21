// ——— site chrome: nav + footer + cursor + lightbox ———————————————————————————————————————————

function Nav({ route, go }){
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(()=>{
    const onScroll = ()=> setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive:true});
    return ()=> window.removeEventListener("scroll", onScroll);
  },[]);
  const links = [
    ["home","Home"],
    ["works","Works"],
    ["series","Series"],
    ["about","About"],
    ["contact","Contact"],
  ];
  return (
    <nav className={`nav ${scrolled?"scrolled":""}`}>
      <div className="nav-inner">
        <button className="brand" onClick={()=>go("home")} aria-label="home">
          <span className="serif">Yim Hyangja</span>
          <span className="hanja"></span>
        </button>
        <div className="nav-links">
          {links.map(([id,label])=>(
            <button key={id} className={route===id||(id==="series"&&route.startsWith("series"))?"active":""} onClick={()=>go(id==="series"?"series":id)}>
              {label}
            </button>
          ))}
        </div>
        <div className="nav-meta">Seoul · 37.55°N 126.99°E</div>
      </div>
    </nav>
  );
}

function Footer({ go }){
  return (
    <footer>
      <div className="wrap">
        <div className="cols">
          <div>
            <div className="kicker serif"><em className="italic">Selected works, <br/>available for editions.</em></div>
            <div style={{marginTop:24,color:"var(--ink-2)",maxWidth:"42ch"}}>
              Studio inquiries, exhibitions, and print commissions. Response within five working days.
            </div>
            <button onClick={()=>go("contact")} style={{marginTop:28,display:"inline-flex",alignItems:"center",gap:10,padding:"10px 0",borderBottom:"1px solid var(--ink)",fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.18em",textTransform:"uppercase"}}>
              Write to the studio <Arrow/>
            </button>
          </div>
          <div className="col">
            <h4>Pages</h4>
            <ul>
              <li><a onClick={()=>go("home")}>Index</a></li>
              <li><a onClick={()=>go("works")}>Works</a></li>
              <li><a onClick={()=>go("series")}>Series</a></li>
              <li><a onClick={()=>go("about")}>About</a></li>
              <li><a onClick={()=>go("contact")}>Contact</a></li>
            </ul>
          </div>
          <div className="col">
            <h4>Series</h4>
            <ul>
              {SERIES.map(s=>(
                <li key={s.id}><a onClick={()=>go(`series/${s.id}`)}>{s.title}</a></li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h4>Elsewhere</h4>
            <ul>
              {SITE.social.map(s=>(
                <li key={s.label}><a href={s.href}>{s.label} ↗</a></li>
              ))}
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="base">
          <span>© {new Date().getFullYear()} {SITE.studio}. All rights reserved.</span>
          <span>Seoul · {SITE.years}</span>
          <span>v. 2026.04</span>
        </div>
      </div>
    </footer>
  );
}

function CursorFollower(){
  const ref = React.useRef(null);
  const labelRef = React.useRef(null);
  React.useEffect(()=>{
    let x=0,y=0,tx=0,ty=0,raf=0;
    function onMove(e){
      tx = e.clientX; ty = e.clientY;
      const t = e.target.closest("[data-cursor]");
      if(t){
        ref.current.classList.add("active");
        labelRef.current.textContent = t.getAttribute("data-cursor");
      } else {
        ref.current.classList.remove("active");
      }
    }
    function tick(){
      x += (tx-x)*0.18;
      y += (ty-y)*0.18;
      if(ref.current){
        ref.current.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%) scale(${ref.current.classList.contains("active")?1:0})`;
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); };
  },[]);
  return (
    <div ref={ref} className="cursor-follower">
      <span ref={labelRef}>View</span>
    </div>
  );
}

function Lightbox({ item, onClose }){
  React.useEffect(()=>{
    function onKey(e){ if(e.key==="Escape") onClose(); }
    window.addEventListener("keydown", onKey);
    return ()=> window.removeEventListener("keydown", onKey);
  },[onClose]);
  return (
    <div className={`lb ${item?"open":""}`} onClick={onClose}>
      <button className="lb-close" onClick={onClose}>Close ×</button>
      {item && (
        <React.Fragment>
          <div className="lb-img">
            <Placeholder ratio="ar-4x5" tag="plate" num={item.no} label={item.title.toLowerCase()}/>
          </div>
          <div className="lb-meta">
            <span className="t">{item.title}</span>
            <span>{item.tags.join(" · ")} · {item.year}</span>
            <span>plate {item.no}</span>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

Object.assign(window, { Nav, Footer, CursorFollower, Lightbox });
