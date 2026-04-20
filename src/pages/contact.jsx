// ——— Contact ———————————————————————————————————————————
function ContactPage(){
  const [form, setForm] = React.useState({ name:"", email:"", subject:"print-inquiry", message:"" });
  const [sent, setSent] = React.useState(false);
  const subjects = [
    ["print-inquiry","Print inquiry"],
    ["exhibition","Exhibition / curation"],
    ["commission","Commission"],
    ["press","Press / interview"],
    ["other","Other"],
  ];
  function submit(e){
    e.preventDefault();
    setSent(true);
    setTimeout(()=>setSent(false), 4000);
  }
  return (
    <React.Fragment>
      <section className="wrap contact">
        <Reveal className="index" style={{display:"flex",justifyContent:"space-between",fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--muted)",marginBottom:40}}>
          <span>§ Contact — studio hyangja</span>
          <span>Response within 5 working days</span>
        </Reveal>
        <Reveal slow>
          <h2 className="lead serif">
            Write to the <em>studio.</em>
          </h2>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="form-wrap" slow>
            <form className="form" onSubmit={submit}>
              <div className="field">
                <label>01 — Name</label>
                <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your full name"/>
              </div>
              <div className="field">
                <label>02 — Email</label>
                <input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@studio.com"/>
              </div>
              <div className="field">
                <label>03 — Regarding</label>
                <select value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})}>
                  {subjects.map(([v,l])=><option key={v} value={v}>{l}</option>)}
                </select>
              </div>
              <div className="field">
                <label>04 — Message</label>
                <textarea required rows={4} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell us about the project, the piece you're interested in, or a preferred timeline."/>
              </div>
              <button type="submit" className={`submit ${sent?"sent":""}`}>
                {sent ? "Sent — thank you" : <React.Fragment>Send message <Arrow/></React.Fragment>}
              </button>
            </form>
          </Reveal>

          <Reveal className="info stagger">
            <div className="blk">
              <h4>Studio</h4>
              <p><em className="italic">{SITE.studio}</em><br/>{SITE.address.join(", ")}</p>
            </div>
            <div className="blk">
              <h4>General</h4>
              <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a><br/>{SITE.phone}</p>
            </div>
            <div className="blk">
              <h4>Representation</h4>
              <p>Gallery Hyundai <span style={{color:"var(--muted)",fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",marginLeft:8}}>Seoul</span><br/>MACK Books <span style={{color:"var(--muted)",fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",marginLeft:8}}>London</span></p>
            </div>
            <div className="blk">
              <h4>Elsewhere</h4>
              <p>
                {SITE.social.map((s,i)=>(
                  <React.Fragment key={s.label}>
                    <a href={s.href}>{s.label} <span style={{color:"var(--muted)"}}>{s.handle}</span></a>{i<SITE.social.length-1?<br/>:null}
                  </React.Fragment>
                ))}
              </p>
            </div>
            <div className="blk">
              <h4>Hours</h4>
              <p style={{fontFamily:"var(--mono)",fontSize:13,letterSpacing:"0.06em"}}>
                Mon — Fri, 10:00 — 18:00 KST<br/>
                <span style={{color:"var(--muted)"}}>Studio visits by appointment only.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </React.Fragment>
  );
}

Object.assign(window, { ContactPage });
