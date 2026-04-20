// ——— About ———————————————————————————————————————————
function AboutPage({ go }){
  return (
    <React.Fragment>
      <section className="wrap about-head">
        <Reveal className="eyebrow-wrap">§ About — the artist</Reveal>
        <Reveal slow>
          <h2 className="section">
            Yim <em className="italic">Hyangja,</em><br/>
            photographer, <br/>
            based in Seoul.
          </h2>
        </Reveal>
      </section>

      <div className="wrap about-grid">
        <Reveal className="portrait">
          <Parallax speed={0.05}>
            <Placeholder ratio="ar-4x5" tag="portrait" num="AA" label="portrait of the artist" dark/>
          </Parallax>
          <div style={{marginTop:14,display:"flex",justifyContent:"space-between",fontFamily:"var(--mono)",fontSize:10.5,letterSpacing:"0.1em",color:"var(--muted)",textTransform:"uppercase"}}>
            <span><em style={{fontFamily:"var(--serif)",fontStyle:"italic",fontSize:16,color:"var(--ink)",letterSpacing:"-0.01em",textTransform:"none"}}>Self-portrait, studio, 2024</em></span>
            <span>By Han Su-young</span>
          </div>
        </Reveal>

        <Reveal className="bio stagger">
          <p>
            임향자(b. 1984, Busan)는 사물이 사라진 뒤에도 남는 <em className="italic">‘있었음’</em>의 감각을 사진으로 옮기는 작가다.
          </p>
          <p>
            홍익대학교에서 회화를, 런던 Royal College of Art에서 사진을 수학했다. 귀국 후 2015년부터 서울 성수동의 작은 작업실 <em className="italic">Studio Hyangja</em>를 운영하며, 중형 필름과 아카이벌 프린트를 병행한 장기 연작을 발표해 왔다.
          </p>
          <p>
            2019년 첫 개인전 《Mother Tongue》(ONE AND J., Seoul) 이후 네 개의 독립된 연작을 발표했으며, 그의 작업은 국립현대미술관, Foam(Amsterdam), Aperture Foundation 등에 소장·수록되어 있다.
          </p>
          <p>
            2024년 <em className="italic">Quiet Rooms</em>로 Prix Pictet 최종 후보에 올랐고, 2025년 현재 다섯 번째 연작 <em className="italic">After Rain</em>을 준비 중이다.
          </p>
          <p className="mono" style={{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--muted)",marginTop:16}}>
            Represented by Gallery Hyundai (Seoul) and MACK Books (London).
          </p>
        </Reveal>
      </div>

      {/* CV */}
      <div className="wrap cv">
        <Reveal className="cv-col">
          <h4>Selected Exhibitions</h4>
          <ul>
            {CV.exhibitions.map((e,i)=>(
              <li key={i}><span className="yr">{e.yr}</span><span className="ev"><em>{e.ev}</em>{e.where}</span></li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="cv-col">
          <h4>Publications</h4>
          <ul>
            {CV.publications.map((e,i)=>(
              <li key={i}><span className="yr">{e.yr}</span><span className="ev"><em>{e.ev}</em>{e.where}</span></li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="cv-col">
          <h4>Awards & Grants</h4>
          <ul>
            {CV.awards.map((e,i)=>(
              <li key={i}><span className="yr">{e.yr}</span><span className="ev"><em>{e.ev}</em>{e.where}</span></li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Education / Collections */}
      <div className="wrap" style={{marginTop:120,display:"grid",gridTemplateColumns:"repeat(12,1fr)",gap:48,paddingTop:32,borderTop:"1px solid var(--rule)"}}>
        <Reveal style={{gridColumn:"1/span 4"}}>
          <h4 className="mono" style={{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--muted)",marginTop:0,fontWeight:500}}>Education</h4>
          <ul style={{listStyle:"none",padding:0,margin:"20px 0 0",display:"flex",flexDirection:"column",gap:14}}>
            <li style={{display:"grid",gridTemplateColumns:"72px 1fr",gap:12,fontSize:14,paddingBottom:12,borderBottom:"1px solid var(--rule-soft)"}}><span className="mono" style={{fontSize:11,color:"var(--muted)"}}>2012</span><span><em style={{fontFamily:"var(--serif)",fontSize:16,display:"block",marginBottom:2}}>MA Photography</em>Royal College of Art, London</span></li>
            <li style={{display:"grid",gridTemplateColumns:"72px 1fr",gap:12,fontSize:14,paddingBottom:12,borderBottom:"1px solid var(--rule-soft)"}}><span className="mono" style={{fontSize:11,color:"var(--muted)"}}>2007</span><span><em style={{fontFamily:"var(--serif)",fontSize:16,display:"block",marginBottom:2}}>BFA Painting</em>Hongik University, Seoul</span></li>
          </ul>
        </Reveal>
        <Reveal style={{gridColumn:"6/span 7"}}>
          <h4 className="mono" style={{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--muted)",marginTop:0,fontWeight:500}}>Public Collections</h4>
          <ul style={{listStyle:"none",padding:0,margin:"20px 0 0",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px 32px"}}>
            {[
              "MMCA, 국립현대미술관, Seoul",
              "Leeum Museum of Art, Seoul",
              "Foam Photography Collection, Amsterdam",
              "Aperture Foundation, New York",
              "SeMA, Seoul Museum of Art",
              "The Wilson Centre for Photography",
            ].map(c=>(
              <li key={c} style={{fontSize:14,paddingBottom:12,borderBottom:"1px solid var(--rule-soft)",color:"var(--ink-2)"}}>{c}</li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Statement */}
      <section className="wrap essay" style={{marginTop:120}}>
        <Reveal className="label">§ Artist statement</Reveal>
        <Reveal className="body" slow>
          <p>나는 있던 자리가 남기는 온도에 대해 생각한다. 누가 앉았다 떠난 의자, 비어 있는 서랍, 오래된 컵의 바닥. 사물은 쓰임을 잃어도 사용된 시간의 흔적을 간직한다.</p>
          <p>사진은 그 흔적을 반박하기도 하고, 다시 불러내기도 한다. 나의 작업은 대체로 후자에 머문다. 오래 바라보고, 오래 기다리는 방식으로.</p>
        </Reveal>
      </section>
    </React.Fragment>
  );
}

Object.assign(window, { AboutPage });
