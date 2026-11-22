/* ===== JAIPONG! script.js ===== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const shuffle = a => [...a].sort(() => Math.random() - .5);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ---------- 1. DATA MATERI (edit teks di bagian ini) ---------- */
const CHAPTERS = [
 {id:'c1', ico:'🥁', col:'pink', t:'Wangenan', sum:'Naon ari jaipong téh sareng ti mana asal-usul namina?',
  body:`<p>Jaipong téh salah sahiji jenis seni pertunjukan rakyat Sunda nu ngagunakeun gerak awak salaku média ékspresi, hiburan, jeung komunikasi budaya.</p>
  <p>Ngaran “jaipong” asalna tina onomatope, nyaéta sora tepak kendang nu kadéngé kawas <i>“jaipong, jaipong”</i>.</p>
  <p>Jaipong lain ibing ritual atawa upacara adat, tapi ibing rakyat nu dipintonkeun dina hajatan, sambutan tamu, festival, jeung acara budaya. Cirina rancagé, lincah, loba ngagunakeun gerak leungeun, beuteung, pinggul, jeung suku.</p>`},
 {id:'c2', ico:'📜', col:'blue', t:'Asal-usul', sum:'Karawang, 1976, jeung dua tokoh utama.',
  body:`<p>Jaipong mimiti mekar dina taun 1970-an, hususna taun 1976, di Karawang. Unsur nu diwariskeun: ketuk tilu, ronggeng, pencak silat, wayang golek, jeung topeng banjet.</p>
  <ul><li><b>H. Suwanda</b>, juru kendang ti Karawang, nyiptakeun pola tepak kendang jaipong.</li>
  <li><b>Gugum Gumbira</b>, koreografer ti Bandung, ngembangkeun koreografi jeung lagu jaipong.</li>
  <li>Grup <b>Jugala</b> pingpinan Gugum Gumbira ngamasyarakatkeun jaipong, kaasup “Daun Pulus Keser Bojong” jeung “Serat Salira”.</li></ul>`},
 {id:'c3', ico:'🎯', col:'yellow', t:'Tujuan', sum:'Lain ngan pikeun hiburan.',
  body:`<ul><li>Sarana hiburan rakyat dina hajatan, pesta, jeung acara sosial.</li><li>Ngawangun suasana rame, keakraban, jeung kebersamaan penari jeung panongton.</li><li>Ngarakétkeun jeung ngalestarikeun identitas budaya Sunda.</li><li>Ngenalkeun seni Sunda ka masarakat nasional jeung internasional.</li><li>Média pendidikan budaya pikeun generus.</li><li>Ngadukung ékonomi seniman, sanggar tari, jeung paguyuban kesenian.</li></ul>`},
 {id:'c4', ico:'💃', col:'lav', t:'Ragam Gerak', sum:'Bukaan sampai Nibakeun, plus maknanya.',
  body:`<table><tr><th>Istilah</th><th>Hartina</th><th>Fungsi</th></tr>
  <tr><td>Bukaan</td><td>Gerak pembuka</td><td>Penari asup, ngawanohkeun karakter, ngamainkeun sampur.</td></tr>
  <tr><td>Pencugan</td><td>Gerak gesit, rancagé, pinuh énergi</td><td>Bagian inti; nuturkeun tepak kendang.</td></tr>
  <tr><td>Ngala</td><td>Gerak patah-patah nu cepet</td><td>Pindah posisi; ciri khas jaipong.</td></tr>
  <tr><td>Mincid</td><td>Gerak peralihan</td><td>Peralihan antar ragam gerak.</td></tr>
  <tr><td>Nibakeun</td><td>Gerak panutup</td><td>Ditandaan goong; ngararungkun ibing.</td></tr></table>
  <p>Gerak suku gesit = kagesitan; gerak leungeun jeung sampur = kaéndahan jeung kasopanan; gerak beuteung jeung pinggul = karakter nu hirup. Gerak nu katémbong “genit” leuwih tepat dipahami salaku ékspresi kabagjaan jeung gaya pergaulan rakyat.</p>`},
 {id:'c5', ico:'🎶', col:'pink', t:'Pakéan & Musik', sum:'Kebaya, sampur, kendang, goong.',
  body:`<ul><li><b>Kebaya Sunda</b> jeung kain/sinjang pikeun wanoja.</li><li><b>Baju pangsi</b> pikeun lalaki.</li><li><b>Sampur</b> (selendang) salaku properti gerak.</li><li>Hiasan sirah jeung aksesoris; kadang keris minangka simbol kakuatan.</li></ul>
  <p>Musikna didominasi <b>kendang</b> nu nangtukeun irama, karakter, jeung gerak penari. Salian ti éta: ketuk, kecrek, goong, rebab, suling, saron, bonang, kecapi, jenglong, gambang, rincik, jeung <b>sinden</b> nu ngawihkeun lagu Sunda.</p>`},
 {id:'c6', ico:'🤝', col:'blue', t:'Ajen & Peran Sosial', sum:'Ajén budaya dina unggal gerak.',
  body:`<ul><li><b>Silih asah, silih asih, silih asuh</b>: kebersamaan seniman, panongton, jeung masarakat.</li><li><b>Kagesitan jeung semangat</b>: jiwa Sunda nu aktif jeung henteu gampang nyerah.</li><li><b>Kasopanan</b>: sanajan énergik, tetep ngajaga étika jeung hormat.</li><li><b>Kreativitas</b>: ngembangkeun tradisi tanpa ngaleungitkeun akar budaya.</li><li><b>Identitas budaya</b>: lambang kasenian Jawa Barat dina sambutan tamu nagara.</li></ul>
  <p>Penari ngirim pesan ngaliwatan gerak, panongton ngabales ku senyum, tepukan, atawa ngiring ngibing.</p>`},
 {id:'c7', ico:'🔷', col:'yellow', t:'Jenis & Pola Lantai', sum:'Rupa-rupa jaipong sareng formasi pamaén ibing.',
  body:`<ul><li><b>Jaipong pergaulan</b>: ronggeng, bisa ngalibatkeun bajidor.</li><li><b>Jaipong panggung</b>: kreasi nu disusun rapi.</li><li><b>Putri</b>, <b>lalaki</b>, jeung <b>pasangan</b>; ogé varian <b>Keser Bojong</b>.</li></ul>
  <p>Pola lantai: <b>garis lurus</b>, <b>diagonal V</b>, <b>melingkar</b>, jeung <b>melengkung</b>. Formasi buleudan mindeng ngagambarkeun kebersamaan, diagonal méré kesan dinamis jeung rancagé.</p>`}
];

const TL = [
 {y:'1970-an', t:'Jaipong mimiti mekar', d:'Kasenian ieu mimiti mekar, ngawariskeun unsur ketuk tilu, ronggeng, pencak silat, wayang golek, jeung topeng banjet.'},
 {y:'1976', t:'Mekar di Karawang', d:'Taun 1976, hususna di Karawang, jaipong dianggap mimiti mekar jadi kasenian nu has.'},
 {y:'Tepak kendang', t:'H. Suwanda', d:'Juru kendang ti Karawang nyiptakeun pola tepak kendang jaipong ku ngaramu kendang ketuk tilu, wayang, pencak silat, doger, banjet, jeung tarling.'},
 {y:'Koreografi', t:'Gugum Gumbira', d:'Koreografer ti Bandung ngembangkeun koreografi jeung lagu, nepi ka jaipong leuwih terstruktur, populér, jeung bisa dipintonkeun di panggung modern.'},
 {y:'Jugala', t:'Ngamasyarakatkeun jaipong', d:'Grup Jugala pingpinan Gugum Gumbira ngaluarkeun karya kawéntar saperti “Daun Pulus Keser Bojong” jeung “Serat Salira”.'}
];

const ORDER = [ // urutan benar runtuyan ragam gerak
 {n:'Bukaan', d:'Gerak mimiti, penari asup ka panggung'},
 {n:'Pencugan', d:'Bagian inti, gesit jeung pinuh énergi'},
 {n:'Ngala', d:'Patah-patah cepet, pindah posisi'},
 {n:'Mincid', d:'Gerak peralihan antar ragam'},
 {n:'Nibakeun', d:'Gerak panutup, ditandaan goong'}];

const PAIRS = [['H. Suwanda','Juru kendang ti Karawang'],['Gugum Gumbira','Koreografer ti Bandung'],['Jugala','Grup nu ngamasyarakatkeun jaipong'],['Bukaan','Gerak pembuka'],['Nibakeun','Gerak panutup, ditandaan goong'],['Sampur','Selendang di leher, properti gerak']];

/* Quiz: o = pilihan, a = index jawaban benar, e = pembahasan */
const QUIZ = [
 {q:'Ngaran “jaipong” asalna tina…', o:['Ngaran désa di Karawang','Sora tepak kendang (onomatope)','Ngaran sinden kawéntar','Ngaran alat musik rebab'], a:1, e:'Ngaran jaipong asalna tina onomatope, sora tepak kendang nu kadéngé “jaipong, jaipong”.'},
 {q:'Jaipong mimiti mekar taun…', o:['1945','1990','1976','1920'], a:2, e:'Jaipong mimiti mekar taun 1970-an, hususna 1976, di Karawang.'},
 {q:'Juru kendang ti Karawang nu nyiptakeun pola tepak kendang jaipong?', o:['Gugum Gumbira','Grup Jugala','Sinden','H. Suwanda'], a:3, e:'H. Suwanda ngaramu unsur kendang ketuk tilu, wayang, pencak silat, doger, banjet, jeung tarling.'},
 {q:'Gerak panutup jaipong ditandaan ku…', o:['Goong','Suling','Kecrek','Sampur'], a:0, e:'Nibakeun/ngagoongkeun biasana ditandaan ku goong.'},
 {q:'Gerak patah-patah nu cepet pikeun pindah posisi disebut…', o:['Bukaan','Mincid','Ngala','Nibakeun'], a:2, e:'Ngala téh gerak patah-patah nu cepet, ciri khas jaipong nu rancagé.'},
 {q:'Alat musik nu nangtukeun irama jeung gerak penari?', o:['Kecapi','Rebab','Suling','Kendang'], a:3, e:'Musik jaipong didominasi ku kendang; tepak kendang nangtukeun irama jeung gerak.'},
 {q:'Formasi pola lantai buleudan mindeng ngagambarkeun…', o:['Kebersamaan','Kasedihan','Pasea','Kasepian'], a:0, e:'Formasi buleudan mindeng dipaké pikeun ngagambarkeun kebersamaan.'},
 {q:'Jaipong téh ibing…', o:['Ritual upacara adat','Karaton wungkul','Rakyat nu dipintonkeun dina hajatan jeung festival','Perang'], a:2, e:'Jaipong lain ibing ritual, tapi ibing rakyat nu dipintonkeun dina hajatan, sambutan tamu, jeung festival.'}
];

/* Infografis: html dibuat dari fungsi supaya mudah diedit */
const chips = (arr, star) => `<div class="chips">${arr.map(x => `<span class="chip ${x===star?'star':''}">${x}</span>`).join('')}</div>`;
const dots = (pts, cap) => `<div><svg viewBox="0 0 100 60" width="130">${pts.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="5" fill="#35254a"/>`).join('')}</svg><br><b>${cap}</b></div>`;
const ring = [0,1,2,3,4,5].map(i => [50+24*Math.cos(i*Math.PI/3), 30+24*Math.sin(i*Math.PI/3)]);
const wave = [0,1,2,3,4,5].map(i => [10+16*i, 30+16*Math.sin(i*1.3)]);
const INFO = [
 {t:'Peta Asal-usul', col:'pink', html:`<div class="ig">${chips(['Ketuk tilu','Ronggeng','Pencak silat','Wayang golek','Topeng banjet'])}<div>⬇</div><div class="big2">JAIPONG</div><b>Karawang, 1976</b><div>⬇</div><div class="duo"><div><b>H. Suwanda</b><br>pola tepak kendang</div><div><b>Gugum Gumbira</b><br>koreografi dan lagu</div></div></div>`},
 {t:'Runtuyan Ragam Gerak', col:'blue', html:`<div class="ig"><div class="steps">${ORDER.map((o,i)=>`<div><b>${i+1}. ${o.n}</b>${o.d}</div>`).join('')}</div></div>`},
 {t:'Orkestra Sunda', col:'yellow', html:`<div class="ig">${chips(['Kendang','Ketuk','Kecrek','Goong','Rebab','Suling','Saron','Bonang','Kecapi','Jenglong','Gambang','Rincik','Sinden'],'Kendang')}<p>Kendang adalah pemimpin irama. Sinden menyanyikan lagu Sunda.</p></div>`},
 {t:'Pola Lantai', col:'lav', html:`<div class="ig"><div class="duo">${dots([[10,30],[30,30],[50,30],[70,30],[90,30]],'Garis lurus')}${dots([[10,10],[30,30],[50,50],[70,30],[90,10]],'Diagonal V')}${dots(ring,'Melingkar')}${dots(wave,'Melengkung')}</div></div>`}
];

/* ---------- 2. STATE & localStorage ---------- */
const KEY = 'jaipong_v1';
let S = {read:[], best:{}, name:'', board:[]};
try { Object.assign(S, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };

/* Progress = bab dibaca + game selesai (3 game) */
function progress() {
  const p = Math.round((S.read.length + Object.keys(S.best).length) / (CHAPTERS.length + 3) * 100);
  $('#bar').style.width = p + '%'; $('#pct').textContent = p + '%';
  $('#jProg').textContent = `${S.read.length}/${CHAPTERS.length} bab dibaca`;
}

/* ---------- 3. NAVIGASI ---------- */
function go(id) {
  $$('.page').forEach(p => p.classList.toggle('on', p.id === id));
  $$('#menu button').forEach(b => b.classList.toggle('act', b.dataset.go === id));
  scrollTo({top:0, behavior:'smooth'});
  if (id === 'board') renderBoard();
  observe();
}
document.addEventListener('click', e => { const b = e.target.closest('[data-go]'); if (b) go(b.dataset.go); });

/* Animasi muncul saat scroll */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold:.1});
const observe = () => $$('.rv:not(.in)').forEach(el => io.observe(el));

/* ---------- 4. MODAL ---------- */
function modal(html) { $('#mbody').innerHTML = html; $('#modal').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeModal() { $('#modal').classList.remove('open'); document.body.style.overflow = ''; }
$('#mclose').onclick = closeModal;
$('#modal').onclick = e => { if (e.target.id === 'modal') closeModal(); };
addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ---------- 5. LEARNING JOURNEY ---------- */
function renderChapters() {
  $('#cards').innerHTML = CHAPTERS.map((c, i) => `<button class="card ${c.col} rv" style="--r:${(i % 2 ? 1 : -1) * (1 + i % 3)}deg" data-ch="${i}">
    <span class="ico">${c.ico}</span><b>${c.t}</b><span>${c.sum}</span>
    <em class="tick">${S.read.includes(c.id) ? '✓ Sudah dibaca' : 'Klik untuk baca'}</em></button>`).join('');
  observe();
}
$('#cards').onclick = e => {
  const b = e.target.closest('[data-ch]'); if (!b) return;
  const c = CHAPTERS[b.dataset.ch];
  modal(`<h3>${c.ico} ${c.t}</h3>${c.body}<p class="center"><button class="btn yellow" id="doneBtn">${S.read.includes(c.id) ? 'Sudah selesai ✓' : 'Tandai selesai'}</button></p>`);
  $('#doneBtn').onclick = () => {
    if (!S.read.includes(c.id)) { S.read.push(c.id); save(); progress(); renderChapters(); confetti(12); }
    closeModal();
  };
};

/* Timeline yang bisa dieksplorasi */
function showTL(i) {
  $$('#tl .node').forEach((n, k) => n.classList.toggle('act', k === i));
  const t = TL[i], box = $('#tlbox');
  box.style.animation = 'none'; void box.offsetWidth; box.style.animation = '';
  box.innerHTML = `<h3>${t.t}</h3><p>${t.d}</p>`;
}
$('#tl').innerHTML = TL.map((t, i) => `<button class="node" data-i="${i}"><i></i><b>${t.y}</b></button>`).join('');
$('#tl').onclick = e => { const n = e.target.closest('.node'); if (n) showTL(+n.dataset.i); };

/* ---------- 6. INFOGRAPHIC ROOM (klik = perbesar) ---------- */
$('#infos').innerHTML = INFO.map((f, i) => `<button class="card ${f.col} rv" data-inf="${i}"><b>${f.t}</b><div class="prev">${f.html}</div><em class="tick">🔍 Klik untuk perbesar</em></button>`).join('');
$('#infos').onclick = e => {
  const b = e.target.closest('[data-inf]'); if (!b) return;
  const f = INFO[b.dataset.inf]; let z = 1;
  modal(`<h3>${f.t}</h3><div class="zoomctl"><button data-z="-1">−</button><button data-z="1">+</button></div><div class="zoomwrap"><div id="zin">${f.html}</div></div>`);
  $('.zoomctl').onclick = ev => { const d = ev.target.dataset.z; if (!d) return; z = Math.min(2.2, Math.max(.6, z + d * .3)); $('#zin').style.transform = `scale(${z})`; };
};

/* ---------- 7. PLAYGROUND ---------- */
$('#name').value = S.name;
$('#name').oninput = e => { S.name = e.target.value.trim(); save(); };
$('#gtabs').onclick = e => { const b = e.target.closest('[data-g]'); if (b) startGame(b.dataset.g); };
function startGame(g) {
  $$('#gtabs button').forEach(b => b.classList.toggle('act', b.dataset.g === g));
  $('#gpanel').onclick = null;
  ({quiz, match, order})[g]();
}

/* Simpan skor, update progress & leaderboard, tampilkan layar hasil */
function finish(key, label, score, extra) {
  S.best[key] = Math.max(score, S.best[key] || 0);
  S.board.push({n:S.name || 'Sahabat Jaipong', g:label, s:score});
  S.board.sort((a, b) => b.s - a.s); S.board = S.board.slice(0, 30);
  save(); progress();
  if (score >= 60) confetti(40);
  $('#gpanel').onclick = e => { const b = e.target.closest('[data-again]'); if (b) startGame(key); };
  $('#gpanel').innerHTML = `<div class="center"><p>${extra}</p><div class="score">${score}</div>
    <p>${score >= 80 ? 'Luar biasa, rancagé pisan! 🎉' : score >= 60 ? 'Mantap, terus berlatih! 💖' : 'Semangat, coba lagi ya! 🥁'}</p>
    <button class="btn yellow" data-again>Main lagi</button> <button class="btn blue" data-go="board">Lihat Leaderboard</button></div>`;
}

/* GAME 1: Quiz dengan skor otomatis & pembahasan */
function quiz() {
  const box = $('#gpanel'); let i = 0, ok = 0;
  const draw = () => {
    const q = QUIZ[i];
    box.innerHTML = `<small>Pertanyaan ${i + 1} dari ${QUIZ.length}</small><h3>${q.q}</h3>
      <div class="opts">${q.o.map((o, k) => `<button class="opt" data-k="${k}">${o}</button>`).join('')}</div><div id="fb"></div>`;
  };
  box.onclick = e => {
    const nx = e.target.closest('#nx'), b = e.target.closest('.opt');
    if (nx) { i++; return i < QUIZ.length ? draw() : finish('quiz', 'Quiz', Math.round(ok / QUIZ.length * 100), `Benar ${ok} dari ${QUIZ.length}`); }
    if (!b || b.disabled) return;
    const q = QUIZ[i], hit = +b.dataset.k === q.a;
    $$('.opt', box).forEach((x, k) => { x.disabled = true; if (k === q.a) x.classList.add('good'); });
    if (hit) ok++; else b.classList.add('bad');
    $('#fb').innerHTML = `<div class="fb"><b>${hit ? 'Benar! ✨' : 'Belum tepat'}</b><br>${q.e}<br><br><button class="btn pink" id="nx">${i + 1 < QUIZ.length ? 'Lanjut' : 'Lihat skor'}</button></div>`;
    if (hit) confetti(6);
  };
  draw();
}

/* GAME 2: Matching tokoh/istilah dengan pengertiannya (klik kiri lalu kanan) */
function match() {
  const box = $('#gpanel'); let pick = null, mis = 0, done = 0;
  const L = shuffle(PAIRS.map((p, i) => [p[0], i])), R = shuffle(PAIRS.map((p, i) => [p[1], i]));
  box.innerHTML = `<p>Cocokkan istilah/tokoh dengan pengertiannya.</p><div class="mt"><div class="opts">${L.map(x => `<button class="tile" data-s="L" data-p="${x[1]}">${x[0]}</button>`).join('')}</div>
    <div class="opts">${R.map(x => `<button class="tile" data-s="R" data-p="${x[1]}">${x[0]}</button>`).join('')}</div></div>`;
  box.onclick = e => {
    const t = e.target.closest('.tile'); if (!t) return;
    if (!pick) { pick = t; t.classList.add('sel'); return; }
    if (pick === t) { t.classList.remove('sel'); pick = null; return; }
    if (pick.dataset.s === t.dataset.s) { pick.classList.remove('sel'); pick = t; t.classList.add('sel'); return; }
    if (pick.dataset.p === t.dataset.p) {
      [pick, t].forEach(x => { x.classList.remove('sel'); x.classList.add('ok'); }); pick = null;
      if (++done === PAIRS.length) setTimeout(() => finish('match', 'Cocokkan', Math.max(20, 100 - mis * 10), `Salah ${mis} kali`), 600);
    } else {
      mis++; const a = pick; pick = null; [a, t].forEach(x => x.classList.add('bad'));
      setTimeout(() => [a, t].forEach(x => x.classList.remove('sel', 'bad')), 450);
    }
  };
}

/* GAME 3: Susun kronologi ragam gerak (klik berurutan dari yang pertama) */
function order() {
  const box = $('#gpanel'); let next = 0, mis = 0;
  box.innerHTML = `<p>Klik ragam gerak sesuai urutan pentas, dari yang pertama.</p>
    <div class="opts">${shuffle(ORDER.map((o, i) => [o, i])).map(x => `<button class="tile" data-i="${x[1]}"><b>${x[0].n}</b><br>${x[0].d}</button>`).join('')}</div>
    <h3>Urutanmu</h3><div class="slots" id="slots"></div>`;
  box.onclick = e => {
    const t = e.target.closest('.tile'); if (!t || t.classList.contains('ok')) return;
    if (+t.dataset.i === next) {
      t.classList.add('ok'); $('#slots').appendChild(t); t.insertAdjacentHTML('afterbegin', `<span>${++next}. </span>`);
      if (next === ORDER.length) setTimeout(() => finish('order', 'Susun Gerak', Math.max(20, 100 - mis * 15), `Salah ${mis} kali`), 600);
    } else { mis++; t.classList.add('bad'); setTimeout(() => t.classList.remove('bad'), 450); }
  };
}

/* ---------- 8. LEADERBOARD ---------- */
function renderBoard() {
  $('#lb').innerHTML = S.board.length
    ? S.board.slice(0, 10).map((r, i) => `<li class="row r${i}"><span class="rk">${['🥇','🥈','🥉'][i] || i + 1}</span><b>${esc(r.n)}</b><small>${r.g}</small><strong>${r.s}</strong></li>`).join('')
    : '<li class="empty">Belum ada skor. Mainkan satu game di Playground dulu!</li>';
}
$('#resetBoard').onclick = () => { if (confirm('Hapus semua skor dan progress?')) { S = {read:[], best:{}, name:S.name, board:[]}; save(); progress(); renderChapters(); renderBoard(); } };

/* ---------- 9. EFEK KHUSUS ---------- */
function confetti(n = 30) {
  const em = ['🎉','⭐','🌸','✨','🥁','💖'];
  for (let i = 0; i < n; i++) {
    const s = document.createElement('span'); s.className = 'conf'; s.textContent = em[i % em.length];
    s.style.cssText = `left:${Math.random() * 100}vw;--d:${1.8 + Math.random() * 1.6}s;--x:${(Math.random() - .5) * 240}px;font-size:${18 + Math.random() * 20}px`;
    document.body.appendChild(s); setTimeout(() => s.remove(), 3800);
  }
}
let beat = 0; // Kendang di Home: klik = "jai!" / "pong!"
$('#kendang').onclick = () => {
  const b = $('#bubble'), k = $('#kendang');
  b.textContent = ['jai!', 'pong!'][beat++ % 2];
  [b, k].forEach(x => { x.classList.remove('hit'); void x.offsetWidth; x.classList.add('hit'); });
};

/* ---------- 10. START ---------- */
renderChapters(); showTL(0); progress(); observe();
const hideIntro = () => $('#intro').classList.add('gone');
$('#intro').onclick = hideIntro; setTimeout(hideIntro, 2200);
const h = location.hash.slice(1); go($('#' + h) && $('#' + h).classList.contains('page') ? h : 'home');
