// ——— Home / Landing ———————————————————————————————————————————
function HomePage({ go }){
  return (
    <React.Fragment>
      <section className="hero">
        <div className="wrap">
          <Reveal className="top-meta">
            <span>Portfolio — 2011 / 2026</span>
            <span>Vol. IV · Fine Art & Conceptual</span>
            <span>— Scroll —</span>
          </Reveal>

          <Reveal slow>
            <h1 className="display">
              The weight<br/>
              of <em className="italic">quiet</em> things,<br/>
              measured in<br/>
              light.
            </h1>
          </Reveal>

          <Reveal className="hero-sub stagger">
            <p>임향자는 사람이 떠난 뒤 남는 것들을 오래 들여다보는 사진가이다. 서울과 제주를 오가며 십오 년째 작업 중.</p>
            <p>Working across medium-format film and archival pigment prints. Represented by Gallery Hyundai, Seoul.</p>
            <p className="mono" style={{fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--muted)"}}>
              No. 01 — Current issue<br/>
              Quiet Rooms, 2024<br/>
              Available, edition of 7
            </p>
          </Reveal>

          <Reveal className="hero-figure" slow>
            <Parallax speed={-0.3}>
              <div className="ar-16x9" style={{overflow:"hidden",position:"relative"}}>
                <img src="images/11.png" alt="quiet rooms — cover" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
              </div>
            </Parallax>
            <div className="figure-caption">
              <span>Cover plate — <em style={{fontFamily:"var(--serif)",fontStyle:"italic",fontSize:14}}>Room with closed curtain</em>, 2024</span>
              <span>120 × 150 cm · archival pigment print</span>
            </div>
            <div className="scroll-hint">
              <span>Continue</span>
              <span className="line"/>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured series */}
      <section className="wrap series-strip">
        <Reveal className="page-head" style={{padding:"40px 0 16px"}}>
          <div className="index"><span>§ Index of series</span><span>01 — 04</span></div>
          <h2 className="section"><em className="italic">Selected</em> series.</h2>
        </Reveal>

        {SERIES.map((s,i)=>(
          <Reveal key={s.id} className="series-item" stagger>
            <div className="meta">
              <span className="num">{s.num} — {s.year}</span>
              <h3>{s.title}<br/><em className="italic" style={{color:"var(--muted)",fontSize:"0.6em"}}>{s.titleKo}</em></h3>
              <p>{s.lede}</p>
              <div className="tags">
                <span>{s.count} plates</span>
                {s.tags.map(t=><span key={t}>· {t}</span>)}
              </div>
              <button className="view" data-cursor="Open" onClick={()=>go(`series/${s.id}`)}>
                View series <Arrow/>
              </button>
            </div>
            <div data-cursor="View" onClick={()=>go(`series/${s.id}`)} style={{cursor:"pointer"}}>
              <Parallax speed={0.15}>
                <Placeholder ratio={i%2===0?"ar-4x5":"ar-4x3"} tag={`series ${s.num.split(' ')[1]}`} num={s.num.split(' ')[1]} label={s.title.toLowerCase()}/>
              </Parallax>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Marquee */}
      <section style={{marginTop:120}}>
        <div className="marquee">
          <div className="marquee-inner">
            <span>Quiet Rooms</span><span>Salt and Paper</span><span>Mother Tongue</span><span>The Weight of Water</span>
            <span>Quiet Rooms</span><span>Salt and Paper</span><span>Mother Tongue</span><span>The Weight of Water</span>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="quote wrap">
        <Reveal slow>
          <blockquote className="serif">
            “사진은 무언가를 본 적이 있다는 기억이 아니라, 무언가가 <em className="italic">있었다</em>는 사실의 밀도다.”
          </blockquote>
          <div className="attrib">From the artist's notebook, 2024</div>
        </Reveal>
      </section>

      {/* Selected press */}
      <section className="wrap" style={{paddingBottom:40}}>
        <Reveal className="page-head" style={{padding:"40px 0 16px"}}>
          <div className="index"><span>§ Press & writing</span><span>Selected, 2022—2025</span></div>
          <h2 className="section"><em className="italic">In print.</em></h2>
        </Reveal>
        <Reveal className="stagger" style={{display:"flex",flexDirection:"column"}}>
          {[
            ["2025","Aperture","“The slow archive of Yim Hyangja”","Rebecca Bengal"],
            ["2024","Foam Magazine","“Four generations, one frame”","Kim Hyun-jeong"],
            ["2024","British Journal of Photography","Cover feature — Quiet Rooms","Simon Bainbridge"],
            ["2023","월간사진","인터뷰: 소금과 종이","이경민"],
            ["2022","IANN Books","Monograph — Mother Tongue","—"],
          ].map(([yr,pub,title,by])=>(
            <div key={title} style={{display:"grid",gridTemplateColumns:"80px 1fr 1fr 160px",gap:24,alignItems:"baseline",padding:"22px 0",borderBottom:"1px solid var(--rule-soft)"}}>
              <span className="mono" style={{fontSize:11,color:"var(--muted)",letterSpacing:"0.1em"}}>{yr}</span>
              <span className="mono" style={{fontSize:11,color:"var(--muted)",letterSpacing:"0.14em",textTransform:"uppercase"}}>{pub}</span>
              <span className="serif" style={{fontSize:22,fontWeight:300,letterSpacing:"-0.01em"}}><em className="italic">{title}</em></span>
              <span className="mono" style={{fontSize:11,color:"var(--muted)",letterSpacing:"0.08em",textAlign:"right"}}>{by}</span>
            </div>
          ))}
        </Reveal>
      </section>
    </React.Fragment>
  );
}

Object.assign(window, { HomePage });
