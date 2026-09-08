// Generative texture panels — one small deliberate touch per project,
// no photography needed. Pure SVG, seeded per project for variety.
function paintPanel(id, colors, seed){
  const el = document.getElementById(id);
  if(!el) return;
  if(el.querySelector('img')) return; // real image already in place — don't overwrite it
  const [bg, a, b] = colors;
  let shapes = '';
  let s = seed;
  function rand(){ s = (s * 9301 + 49297) % 233280; return s / 233280; }
  for(let i=0;i<5;i++){
    const cx = rand()*400, cy = rand()*300, r = 40+rand()*160;
    const fill = i % 2 === 0 ? a : b;
    shapes += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" opacity="${0.35+rand()*0.25}"/>`;
  }
  el.innerHTML = `
    <svg viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Abstract texture for project">
      <rect width="400" height="300" fill="${bg}"/>
      <g style="mix-blend-mode:screen; filter:blur(18px)">${shapes}</g>
    </svg>`;
}
