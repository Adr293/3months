const MAX_LINES = 19;
function paginatePages(pages){
 const result=[];
 pages.forEach(page=>{
   if(page.type!=='poem'){ result.push(page); return; }
   for(let i=0;i<page.lines.length;i+=MAX_LINES){
     result.push({...page, lines:page.lines.slice(i,i+MAX_LINES), continued:i>0});
   }
 });
 return result;
}
const BOOK_PAGES = paginatePages(PAGES);

/* ── Build TOC entries */

const tocEntries = BOOK_PAGES
  .map((p,i)=>({...p,idx:i}))
  .filter(p => {

    if(p.type === 'epistle')
      return true;

    if(p.type === 'poem')
      return !p.continued;

    return false;

  });

let cur = 0;

function poemNum(idx){
  let n=0;
  for(let i=0;i<idx;i++) if(BOOK_PAGES[i].type==='poem') n++;
  return ['i','ii','iii','iv','v','vi','vii','viii','ix','x','xi','xii','xiii','xiv','xv'][n]||String(n+1);
}
function epNum(idx){
  let n=0;
  for(let i=0;i<idx;i++) if(BOOK_PAGES[i].type==='epistle') n++;
  return ['I','II','III','IV','V'][n]||String(n+1);
}

function footer(idx){
  const first=idx===0, last=idx===BOOK_PAGES.length-1;
  return `<div class="page-footer">
    <button class="nav-btn" onclick="prev()" ${first?'disabled':''}>&#8592; anterior</button>
    <span class="page-num">${idx+1} / ${BOOK_PAGES.length}</span>
    <button class="nav-btn" onclick="next()" ${last?'disabled':''}>siguiente &#8594;</button>
  </div>`;
}

function buildPage(p,idx){
  if (p.type === "cover") {
    return `<div class="page cover active" id="pg${idx}">
      <div class="page-content">
        <div class="cover-collage">
          <img
            src="img/front.png"
            alt="Portada">
          <div class="cover-overlay">
            <div class="cover-sub">
              Junio - 2026
            </div>
          </div>
        </div>
      </div>
      ${footer(idx)}
    </div>`;
  }

  if(p.type==='toc'){
    const items = tocEntries.map((e,i)=>{
      const label = e.type==='poem' ? `poema ${poemNum(e.idx)}` : `carta ${epNum(e.idx)}`;
      return `<li class="toc-item" onclick="goTo(${e.idx})" tabindex="0" onkeydown="if(event.key==='Enter')goTo(${e.idx})">
        <span class="toc-ix">${i+1}</span>
        <span class="toc-name">${e.title}</span>
        <span class="toc-type">${label}</span>
      </li>`;
    }).join('');
    return `<div class="page" id="pg${idx}">
      <div class="toc-inner">
        <div class="toc-h">Índice</div>
        <ul class="toc-list">${items}</ul>
      </div>
      ${footer(idx)}
    </div>`;
  }

  if(p.type==='poem'){
    const num = poemNum(idx);
    const body = p.lines.map(l=>l===''?'<p class="spacer">&nbsp;</p>':`<p>${l}</p>`).join('');
    return `<div class="page" id="pg${idx}">
      <div class="poem-inner">
        <div class="poem-num">${num}</div>
        <div class="poem-title">${p.title}</div>
        <div class="poem-rule"></div>
        <div class="poem-body">${body}</div>
      </div>
      ${footer(idx)}
    </div>`;
  }

  if(p.type==='epistle'){
    const paras = p.lines.map(l=>`<p>${l}</p>`).join('');
    const sign = p.last ? `<div class="ep-sign">Con todo mi amor ♡</div>` : '';
    return `<div class="page" id="pg${idx}">
      <div class="epistle-inner">
        <div class="ep-label">carta</div>
        <div class="ep-title">${p.title}</div>
        <div class="ep-body">${paras}</div>
        ${sign}
      </div>
      ${footer(idx)}
    </div>`;
  }

  if(p.type==='image'){
    const cap = p.caption ? `<div class="img-caption">${p.caption}</div>` : '';
    return `<div class="page" id="pg${idx}">
      <div class="img-inner">
        <img src="${p.src}" alt="${p.caption||'imagen'}">
        ${cap}
      </div>
      ${footer(idx)}
    </div>`;
  }

  return '';
}

function init(){
  const book = document.getElementById('book');
  const dotsEl = document.getElementById('dots');

  book.innerHTML = BOOK_PAGES.map((p,i)=>buildPage(p,i)).join('');

  dotsEl.innerHTML = BOOK_PAGES.map((_,i)=>
    `<div class="dot ${i===0?'active':''}"
      onclick="goTo(${i})"
      title="Pág. ${i+1}">
    </div>`
  ).join('');

  initSwipe();
}

function show(idx){
  document.querySelectorAll('.page').forEach((el,i)=>{
    const active = i === idx;
    el.classList.toggle('active', active);
    if(active){
      el.classList.add('turning');
      setTimeout(()=>{
        el.classList.remove('turning');
      },300);
    }
  });
  document.querySelectorAll('.dot').forEach((d,i)=>
    d.classList.toggle('active',i===idx)
  );
  cur = idx;
  window.scrollTo({
    top:0,
    behavior:'smooth'
  });
}

function goTo(i){show(i)}
function next(){if(cur<BOOK_PAGES.length-1)show(cur+1)}
function prev(){if(cur>0)show(cur-1)}

/* ───────────────────────────── */
/* Swipe móvil + arrastre mouse */
/* ───────────────────────────── */

let startX = 0;
let startY = 0;

let endX = 0;
let endY = 0;

function initSwipe(){

  const book = document.getElementById('book');

  if(!book) return;

  /* Touch */

  book.addEventListener('touchstart', e => {

    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;

  }, { passive:true });

  book.addEventListener('touchend', e => {

    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;

    handleGesture();

  }, { passive:true });

  /* Mouse */

  book.addEventListener('mousedown', e => {

    startX = e.clientX;
    startY = e.clientY;

  });

  book.addEventListener('mouseup', e => {

    endX = e.clientX;
    endY = e.clientY;

    handleGesture();

  });

}

function handleGesture(){

  const deltaX = endX - startX;
  const deltaY = endY - startY;

  /* Ignorar movimiento vertical */

  if(Math.abs(deltaY) > Math.abs(deltaX))
    return;

  /* Movimiento mínimo */

  if(Math.abs(deltaX) < 60)
    return;

  if(deltaX < 0){

    next();

  }else{

    prev();

  }

}

document.addEventListener('keydown',e=>{
  if(e.key==='ArrowRight')next();
  if(e.key==='ArrowLeft')prev();
});

/* ───────────────────────────── */
/* Reproductor Avanzado */
/* ───────────────────────────── */

const tracks = [

  {
    title:'Merry Christmas Mr. Lawrence',
    src:'audio/Merry Christmas Mr. Lawrence.mp3'
  },

  {
    title:'Uso to Honto',
    src:'audio/Uso to Honto.mp3'
  },

  {
    title:'Drowning Love',
    src:'audio/Drowning Love.mp3'
  }

];

let trackIndex = 0;
let playing = false;

const player = document.getElementById('bgMusic');

const playBtn = document.getElementById('playBtn');
const prevTrack = document.getElementById('prevTrack');
const nextTrack = document.getElementById('nextTrack');

const volume = document.getElementById('volume');

const progress = document.getElementById('progress');

const trackTitle = document.getElementById('trackTitle');

const currentTimeEl = document.getElementById('currentTime');

const durationEl = document.getElementById('duration');

function loadTrack(index){

  player.src = tracks[index].src;

  trackTitle.textContent =
    tracks[index].title;

}

loadTrack(trackIndex);

player.volume = volume.value;

/* Play / Pause */

playBtn.addEventListener('click',()=>{

  if(playing){

    player.pause();

    playBtn.textContent = '▶';

  }else{

    player.play();

    playBtn.textContent = '❚❚';

  }

  playing = !playing;

});

/* Siguiente */

nextTrack.addEventListener('click',()=>{

  trackIndex++;

  if(trackIndex >= tracks.length)
    trackIndex = 0;

  loadTrack(trackIndex);

  player.play();

  playBtn.textContent = '❚❚';

  playing = true;

});

/* Anterior */

prevTrack.addEventListener('click',()=>{

  trackIndex--;

  if(trackIndex < 0)
    trackIndex = tracks.length - 1;

  loadTrack(trackIndex);

  player.play();

  playBtn.textContent = '❚❚';

  playing = true;

});

/* Cambio automático */

player.addEventListener('ended',()=>{

  nextTrack.click();

});

/* Barra de progreso */

player.addEventListener('timeupdate',()=>{

  const percent =
    (player.currentTime / player.duration) * 100;

  progress.value = percent || 0;

  currentTimeEl.textContent =
    formatTime(player.currentTime);

  durationEl.textContent =
    formatTime(player.duration);

});

/* Posicionarse en la canción */

progress.addEventListener('input',()=>{

  player.currentTime =
    (progress.value / 100) *
    player.duration;

});

/* Volumen */

volume.addEventListener('input',()=>{

  player.volume = volume.value;

});

/* Formato */

function formatTime(sec){

  if(isNaN(sec))
    return '0:00';

  const min =
    Math.floor(sec / 60);

  const seg =
    Math.floor(sec % 60)
      .toString()
      .padStart(2,'0');

  return `${min}:${seg}`;

}

init();