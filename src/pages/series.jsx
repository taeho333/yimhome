// ——— Series detail ———————————————————————————————————————————
function SeriesPage({ id, go }){
  const idx = SERIES.findIndex(s=>s.id===id);
  const s = SERIES[idx] || SERIES[0];
  const prev = SERIES[(idx-1+SERIES.length)%SERIES.length];
  const next = SERIES[(idx+1)%SERIES.length];

  return (
    <React.Fragment>
      <section className="wrap series-hero">
        <Reveal className="index" style={{display:"flex",justifyContent:"space-between",fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--muted)",marginBottom:40}}>
          <span>§ Series — {s.num}</span>
          <button onClick={()=>go("series")} style={{color:"var(--muted)"}}>← All series</button>
        </Reveal>
        <Reveal slow>
          <div className="num-big">{s.num.split(" ")[1]}.</div>
          <h2 className="section">
            <em className="italic">{s.title}.</em>
          </h2>
          <div style={{marginTop:20,fontFamily:"var(--serif)",fontStyle:"italic",fontSize:28,fontWeight:300,color:"var(--muted)"}}>{s.titleKo}</div>
        </Reveal>

        <Reveal className="series-info">
          <p className="lede"><em className="italic">{s.lede}</em></p>
          <dl className="meta-list">
            <dt>Year</dt><dd>{s.year}</dd>
            <dt>Plates</dt><dd>{s.count}</dd>
            <dt>Medium</dt><dd>{s.medium}</dd>
            <dt>Dimensions</dt><dd>{s.dims}</dd>
            <dt>Edition</dt><dd>{s.edition}</dd>
            <dt>Tags</dt><dd>{s.tags.join(" · ")}</dd>
          </dl>
        </Reveal>
      </section>

      <section className="wrap series-plates">
        {s.plates.map((p,i)=>{
          if(p.kind==="pair"){
            return (
              <Reveal key={i} className="plate pair stagger">
                <div className="a">
                  <Placeholder ratio={p.a.ratio} tag={s.num.replace("No. ","")} num={p.a.no.split("/")[0]} label={`${s.title.toLowerCase()} — ${p.a.no}`}/>
                  <div style={{marginTop:10,fontFamily:"var(--mono)",fontSize:10.5,letterSpacing:"0.1em",color:"var(--muted)",textTransform:"uppercase",display:"flex",justifyContent:"space-between"}}>
                    <span>Plate {p.a.no}</span><span>{s.year}</span>
                  </div>
                </div>
                <div className="b" style={{marginTop:80}}>
                  <Placeholder ratio={p.b.ratio} tag={s.num.replace("No. ","")} num={p.b.no.split("/")[0]} label={`${s.title.toLowerCase()} — ${p.b.no}`}/>
                  <div style={{marginTop:10,fontFamily:"var(--mono)",fontSize:10.5,letterSpacing:"0.1em",color:"var(--muted)",textTransform:"uppercase",display:"flex",justifyContent:"space-between"}}>
                    <span>Plate {p.b.no}</span><span>{s.year}</span>
                  </div>
                </div>
              </Reveal>
            );
          }
          return (
            <Reveal key={i} className={`plate ${p.kind}`}>
              <Parallax speed={0.08}>
                <div className="main">
                  <Placeholder ratio={p.ratio} tag={s.num.replace("No. ","")} num={p.no.split("/")[0]} label={`${s.title.toLowerCase()} — ${p.no}`}/>
                </div>
              </Parallax>
              {(p.kind==="left"||p.kind==="right") && (
                <div className="caption">
                  <div><em className="italic" style={{fontFamily:"var(--serif)",fontSize:18,color:"var(--ink)",letterSpacing:"-0.01em",textTransform:"none"}}>{p.caption}</em></div>
                  <div style={{marginTop:8}}>Plate {p.no} · {s.year}</div>
                  <div style={{marginTop:4}}>{s.medium}</div>
                </div>
              )}
              {(p.kind==="full"||p.kind==="wide") && p.caption && (
                <div style={{gridColumn:"1/-1",marginTop:14,display:"flex",justifyContent:"space-between",fontFamily:"var(--mono)",fontSize:10.5,letterSpacing:"0.1em",color:"var(--muted)",textTransform:"uppercase"}}>
                  <span><em style={{fontFamily:"var(--serif)",fontStyle:"italic",fontSize:16,color:"var(--ink)",letterSpacing:"-0.01em",textTransform:"none"}}>{p.caption}</em></span>
                  <span>Plate {p.no} · {s.medium}</span>
                </div>
              )}
            </Reveal>
          );
        })}
      </section>

      {/* Essay */}
      <section className="wrap essay">
        <Reveal className="label">§ Essay — by the artist</Reveal>
        <Reveal className="body" slow>
          {s.essay.map((p,i)=><p key={i}>{p}</p>)}
          <p style={{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--muted)",marginTop:40}}>
            — Yim Hyangja, Seoul, {s.year}
          </p>
        </Reveal>
      </section>

      {/* Series nav */}
      <section className="wrap">
        <div className="series-nav">
          <a onClick={()=>go(`series/${prev.id}`)} style={{cursor:"pointer"}} data-cursor="Previous">
            <span className="dir"><Arrow dir="left"/> Previous — {prev.num}</span>
            <span className="nm"><em className="italic">{prev.title}</em></span>
          </a>
          <a className="next" onClick={()=>go(`series/${next.id}`)} style={{cursor:"pointer"}} data-cursor="Next">
            <span className="dir">Next — {next.num} <Arrow/></span>
            <span className="nm"><em className="italic">{next.title}</em></span>
          </a>
        </div>
      </section>
    </React.Fragment>
  );
}

// Series index (list of all series)
function SeriesIndexPage({ go }){
  return (
    <React.Fragment>
      <section className="wrap page-head">
        <Reveal className="index">
          <span>§ Series — complete index</span>
          <span>{SERIES.length} volumes, 2021—2025</span>
        </Reveal>
        <Reveal slow>
          <h2 className="section">
            Four <em className="italic">volumes,</em><br/>
            one question.
          </h2>
        </Reveal>
        <Reveal>
          <p className="lede">
            Each series is a contained meditation: its own medium, its own material, its own weather. They all orbit the same concern — what remains after attention.
          </p>
        </Reveal>
      </section>

      <div className="wrap" style={{marginTop:40}}>
        {SERIES.map((s,i)=>(
          <Reveal key={s.id} className="series-item" stagger>
            <div className="meta">
              <span className="num">{s.num} — {s.year}</span>
              <h3><em className="italic">{s.title}</em></h3>
              <p>{s.lede}</p>
              <div className="tags">
                <span>{s.count} plates</span>
                <span>· {s.medium}</span>
              </div>
              <button className="view" onClick={()=>go(`series/${s.id}`)} data-cursor="Open">
                Open series <Arrow/>
              </button>
            </div>
            <div data-cursor="View" style={{cursor:"pointer"}} onClick={()=>go(`series/${s.id}`)}>
              <Parallax speed={0.12}>
                <Placeholder ratio={i%2===0?"ar-4x3":"ar-4x5"} tag={s.num.replace("No. ","")} num={s.num.split(" ")[1]} label={s.title.toLowerCase()}/>
              </Parallax>
            </div>
          </Reveal>
        ))}
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { SeriesPage, SeriesIndexPage });
