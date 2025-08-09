import React, { useEffect, useState } from 'react';
export default function App(){
  const [tournaments, setT] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{ fetch('/api/tournaments').then(r=>r.json()).then(d=>{ setT(d); setLoading(false); }).catch(e=>{ console.error(e); setLoading(false); }); },[]);
  return (
    <div style={{fontFamily:'Inter,Arial,Helvetica,sans-serif',padding:28,maxWidth:1100,margin:'0 auto'}}>
      <header style={{display:'flex',alignItems:'center',gap:20}}>
        <img src="/logo.png" alt="Papaya Padel" style={{height:64}} />
        <div>
          <h1 style={{margin:0}}>Papaya Padel</h1>
          <p style={{margin:0,color:'#666'}}>Torneos · Inscripciones · Administración</p>
        </div>
      </header>
      <main style={{marginTop:24}}>
        <section>
          <div style={{display:'flex',gap:12,alignItems:'center'}}>
            <button style={{background:'#39A96B',color:'#fff',border:'none',padding:'10px 16px',borderRadius:10}}>Crear Torneo</button>
            <button style={{background:'transparent',border:'1px solid #eee',padding:'10px 16px',borderRadius:10}}>Buscar Torneo</button>
          </div>
        </section>
        <section style={{marginTop:20}}>
          {loading ? <div>Loading...</div> : tournaments.length===0 ? <div>No hay torneos publicados. Usa /api/seed para crear demo.</div> : (
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:16}}>
              {tournaments.map(t=>(
                <div key={t._id} style={{background:'#fff',padding:16,borderRadius:10,boxShadow:'0 4px 12px rgba(0,0,0,0.05)'}}>
                  <h3 style={{margin:'0 0 8px'}}>{t.name}</h3>
                  <div style={{color:'#888',fontSize:13}}>{t.format} · Cupos: {t.capacity}</div>
                  <div style={{marginTop:12}}><small style={{color:'#999'}}>Estado: {t.status}</small></div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
