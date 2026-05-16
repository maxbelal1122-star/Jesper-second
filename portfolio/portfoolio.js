// ===========================
// STARS
// ===========================
for (let i = 0; i < 150; i++) {
  const s = document.createElement('div');
  s.classList.add('bg-star');
  const size = Math.random() * 3 + 1;
  s.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    top: ${Math.random() * 100}%;
    left: ${Math.random() * 100}%;
    --dur: ${Math.random() * 3 + 1}s;
    animation-delay: ${Math.random() * 4}s;
  `;
  document.body.appendChild(s);
}

// ===========================
// SHOOTING STARS
// ===========================
for (let i = 0; i < 5; i++) {
  const sh = document.createElement('div');
  sh.classList.add('shooting-star');
  sh.style.cssText = `
    --shoot-top: ${Math.random() * 50}%;
    --shoot-dur: ${Math.random() * 4 + 4}s;
    animation-delay: ${Math.random() * 12}s;
  `;
  document.body.appendChild(sh);
}

// ===========================
// FIREFLIES
// ===========================
for (let i = 0; i < 18; i++) {
  const ff = document.createElement('div');
  ff.classList.add('firefly');
  ff.style.cssText = `
    top: ${Math.random() * 90}%;
    left: ${Math.random() * 90}%;
    --ff-dur: ${Math.random() * 4 + 3}s;
    --ff-x: ${(Math.random() - 0.5) * 180}px;
    --ff-y: ${(Math.random() - 0.5) * 180}px;
    animation-delay: ${Math.random() * 5}s;
  `;
  document.body.appendChild(ff);
}

// ===========================
// LEAVES
// ===========================
const leafColors = ['#1a5c1a', '#2d8a2d', '#4caf50', '#8bc34a', '#ff8c00'];
for (let i = 0; i < 12; i++) {
  const leaf = document.createElement('div');
  leaf.classList.add('bg-leaf');
  const color = leafColors[Math.floor(Math.random() * leafColors.length)];
  leaf.style.cssText = `
    background: ${color};
    --l-left: ${Math.random() * 100}%;
    --l-dur: ${Math.random() * 6 + 5}s;
    animation-delay: ${Math.random() * 8}s;
  `;
  document.body.appendChild(leaf);
}

// ===========================
// GRASS
// ===========================
for (let i = 0; i < 30; i++) {
  const grass = document.createElement('div');
  grass.classList.add('bg-grass');
  const height = Math.random() * 40 + 20;
  grass.style.cssText = `
    left: ${Math.random() * 100}%;
    height: ${height}px;
    animation-delay: ${Math.random() * 3}s;
    animation-duration: ${Math.random() * 2 + 2}s;
  `;
  document.body.appendChild(grass);
}

// ===========================
// SPARKLES
// ===========================
for (let i = 0; i < 25; i++) {
  const sp = document.createElement('div');
  sp.classList.add('bg-sparkle');
  sp.style.cssText = `
    top: ${Math.random() * 100}%;
    left: ${Math.random() * 100}%;
    --sp-dur: ${Math.random() * 2 + 1}s;
    animation-delay: ${Math.random() * 5}s;
  `;
  document.body.appendChild(sp);
}

// ===========================
// BUTTERFLY MOVEMENT
// ===========================
const bf = document.querySelector('.butterfly-bg');
let bx = window.innerWidth / 2;
let by = window.innerHeight / 2;
let vx = 1.8;
let vy = 1.2;
let dir = 1;
let time = 0;

function moveBf() {
  time += 0.02;

  vx += (Math.random() - 0.5) * 0.4;
  vy += (Math.random() - 0.5) * 0.4;

  vx = Math.max(-3.5, Math.min(3.5, vx));
  vy = Math.max(-3, Math.min(3, vy));

  bx += vx;
  by += vy + Math.sin(time) * 0.8;

  if (bx > window.innerWidth - 80)  { vx = -Math.abs(vx); dir = -1; }
  if (bx < 80)                       { vx =  Math.abs(vx); dir =  1; }
  if (by > window.innerHeight - 80)  { vy = -Math.abs(vy); }
  if (by < 80)                       { vy =  Math.abs(vy); }

  bf.style.left = bx + 'px';
  bf.style.top  = by + 'px';
  bf.style.transform = `scaleX(${dir})`;

  requestAnimationFrame(moveBf);
}

if (bf) moveBf();