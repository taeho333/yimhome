// ——— App / router ———————————————————————————————————————————
function useRoute(){
  const [route, setRoute] = React.useState(()=>{
    try {
      const r = localStorage.getItem("yh-route");
      return r || "home";
    } catch(e){ return "home"; }
  });
  const go = React.useCallback((r)=>{
    setRoute(r);
    try { localStorage.setItem("yh-route", r); } catch(e){}
    window.scrollTo({ top:0, behavior:"instant" });
  },[]);
  return [route, go];
}

function App(){
  const [route, go] = useRoute();
  const [lightboxItem, setLightboxItem] = React.useState(null);

  // scroll to top on route change already happens in go()

  let page = null;
  if(route === "home") page = <HomePage go={go}/>;
  else if(route === "works") page = <WorksPage go={go} openLightbox={setLightboxItem}/>;
  else if(route === "series") page = <SeriesIndexPage go={go}/>;
  else if(route.startsWith("series/")) page = <SeriesPage id={route.split("/")[1]} go={go}/>;
  else if(route === "about") page = <AboutPage go={go}/>;
  else if(route === "contact") page = <ContactPage/>;
  else page = <HomePage go={go}/>;

  return (
    <React.Fragment>
      <Nav route={route} go={go}/>
      <main data-screen-label={route}>
        {page}
      </main>
      <Footer go={go}/>
      <CursorFollower/>
      <Lightbox item={lightboxItem} onClose={()=>setLightboxItem(null)}/>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App/>);
