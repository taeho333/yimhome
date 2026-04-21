// ——— Works / Gallery ———————————————————————————————————————————
function WorksPage({ go, openLightbox }){
  const [filter, setFilter] = React.useState("All");
  const filters = ["All","Interior","Still life","Portrait","Landscape"];
  const filtered = WORKS.filter(w => filter==="All" || w.tags.includes(filter));

  return (
    <React.Fragment>
      <section className="wrap page-head">
        <Reveal className="index">
          <span>§ Works — complete index</span>
          <span>{WORKS.length} plates on file</span>
        </Reveal>
        <Reveal slow>
          <h2 className="section">
            Every plate,<br/>
            <em className="italic">in order of seeing.</em>
          </h2>
        </Reveal>
        <Reveal>
          <p className="lede">
            An evolving register of finished plates across four series, 2021—2026. Each work is linked to its parent series and to a full edition record. Click any plate to enlarge.
          </p>
        </Reveal>
      </section>

      <div className="wrap">
        <div className="gallery-toolbar">
          <div className="filters">
            {filters.map(f=>(
              <button key={f} className={filter===f?"active":""} onClick={()=>setFilter(f)}>{f}</button>
            ))}
          </div>
          <div>Showing {filtered.length} · Grid 12 col</div>
        </div>

        <Reveal className="gallery-grid stagger">
          {filtered.map((w,i)=>{
            const series = SERIES.find(s=>s.id===w.seriesId);
            return (
              <div key={w.id} className={`g-item ${w.span}`} data-cursor="Enlarge" onClick={()=>openLightbox(w)}>
                <Placeholder ratio={w.ratio} tag={series?.num.replace("No. ","")||"—"} num={w.no.split("/")[0]} label={w.title.toLowerCase()}/>
                <div className="g-caption">
                  <span className="g-title"><em>{w.title}</em>, {w.year}</span>
                  <span>{series?.title} · {w.no}</span>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>

      <section className="wrap" style={{marginTop:160}}>
        <Reveal className="page-head" style={{padding:"40px 0 16px"}}>
          <div className="index"><span>§ By series</span><span>Continue reading</span></div>
          <h2 className="section"><em className="italic">Read</em> a series.</h2>
        </Reveal>
        <Reveal className="stagger" style={{display:"grid",gridTemplateColumns:"repeat(4,minmax(0,1fr))",gap:24,marginTop:48}}>
          {SERIES.map(s=>(
            <button key={s.id} onClick={()=>go(`series/${s.id}`)} style={{textAlign:"left",cursor:"pointer"}} data-cursor="Open">
              <Placeholder ratio="ar-4x5" tag={s.num.replace("No. ","")} num={s.num.split(" ")[1]} label={s.title.toLowerCase()}/>
              <div style={{marginTop:14,display:"flex",flexDirection:"column",gap:4}}>
                <span className="mono" style={{fontSize:10.5,letterSpacing:"0.14em",color:"var(--muted)",textTransform:"uppercase"}}>{s.num} · {s.year}</span>
                <span className="serif" style={{fontSize:24,fontWeight:400,letterSpacing:"-0.01em"}}><em className="italic">{s.title}</em></span>
              </div>
            </button>
          ))}
        </Reveal>
      </section>
    </React.Fragment>
  );
}

Object.assign(window, { WorksPage });
