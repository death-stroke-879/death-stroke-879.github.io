/* ════════════════════════════════════════════
   QUIZ DATA — 14 questions (turns 14)
════════════════════════════════════════════ */
const QUIZ = [

  // ── EASIEST (1-3) ────────────────────────────────────────
  { 
    level:"Easiest 🌱",
    emoji: "💜",
    q: "What is the name of the famous K-pop group with 7 members known worldwide?",
    opts: ["EXO", "BTS", "BLACKPINK", "GOT7"],
    ans: 1,
    fact: "BTS (방탄소년단) debuted in 2013 and became a global sensation! 💜",
    hint: "Their fans are called ARMY and their favourite colour is purple 💜"
  },
  // { 
  //   level:"Easiest 🌱",
  //   emoji: "🌍",
  //   q: "Which country is BTS from?",
  //   opts: ["Japan", "China", "South Korea", "Thailand"],
  //   ans: 2,
  //   fact: "BTS is from South Korea, signed under HYBE (formerly Big Hit)! 🇰🇷",
  //   hint: "Their language is Korean and the country is in East Asia 🌏"
  // },
  // { 
  //   level:"Easiest 🌱",
  //   emoji: "🔤",
  //   q: "How do you say 'Hello' in Korean?",
  //   opts: ["Kamsahamnida", "Annyeonghaseyo", "Saranghae", "Jeongmal"],
  //   ans: 1,
  //   fact: "안녕하세요 (Annyeonghaseyo) is the polite way to say Hello in Korean! 👋",
  //   hint: "It starts with 'An' and is used as a formal greeting 🙏"
  // },

  // // ── EASY (4-6) ───────────────────────────────────────────
  // { 
  //   level:"Easy 🌿",
  //   emoji: "🎤",
  //   q: "Who is the leader of BTS?",
  //   opts: ["Jungkook", "Suga", "RM", "Jin"],
  //   ans: 2,
  //   fact: "RM (Kim Namjoon) is the leader of BTS and is known for his deep lyrics! 🎙️",
  //   hint: "He is also the main rapper and speaks fluent English 🌟"
  // },
  // {
  //   level:"Easy 🌿",
  //   emoji: "🌊",
  //   q: "Which is the largest ocean on Earth?",
  //   opts: ["Atlantic", "Indian", "Arctic", "Pacific"],
  //   ans: 3,
  //   fact: "The Pacific Ocean covers more than 30% of Earth's surface! 🌊",
  //   hint: "It borders Asia on one side and America on the other 🗺️"
  // },
  // {
  //   level:"Easy 🌿",
  //   emoji: "❤️",
  //   q: "How do you say 'I love you' in Korean?",
  //   opts: ["Mianhae", "Gomawo", "Saranghae", "Annyeong"],
  //   ans: 2,
  //   fact: "사랑해 (Saranghae) means I love you in Korean! A word every ARMY knows 💜",
  //   hint: "BTS members say this to ARMY all the time at concerts 🎶"
  // },

  // // ── MEDIUM (7-9) ─────────────────────────────────────────
  // {
  //   level:"Medium 🔥",
  //   emoji: "🏆",
  //   q: "What does BTS stand for?",
  //   opts: [
  //     "Beyond The Scene",
  //     "Bangtan Sonyeondan",
  //     "Both A and B are correct",
  //     "Bulletproof Tiger Squad"
  //   ],
  //   ans: 2,
  //   fact: "BTS stands for both 방탄소년단 (Bangtan Sonyeondan) AND Beyond The Scene! 🏆",
  //   hint: "The Korean name means 'Bulletproof Boy Scouts' 🛡️"
  // },
  // {
  //   level:"Medium 🔥",
  //   emoji: "🎵",
  //   q: "Which BTS song starts with the lyrics 'Naneun gwiohae' and became a viral hit about self-love?",
  //   opts: ["Dynamite", "Butter", "DNA", "Idol"],
  //   ans: 3,
  //   fact: "'Idol' celebrates self-love and identity — 'You can't stop me lovin' myself!' 💃",
  //   hint: "The music video has a very colourful traditional Korean aesthetic 🎨"
  // },
  // {
  //   level:"Medium 🔥",
  //   emoji: "🌐",
  //   q: "What is the capital city of South Korea?",
  //   opts: ["Busan", "Incheon", "Seoul", "Daegu"],
  //   ans: 2,
  //   fact: "Seoul (서울) is the capital of South Korea and home to HYBE, BTS's company! 🏙️",
  //   hint: "It is one of the most populated cities in the world 🌆"
  // },

  // // ── HARD (10-12) ─────────────────────────────────────────
  // {
  //   level:"Hard 💀",
  //   emoji: "🔢",
  //   q: "How do you say the number '14' in Korean? (Hint: you're turning 14! 🎂)",
  //   opts: ["Yeol-net", "Sib-sa", "Yeol-net AND Sib-sa", "Ppal"],
  //   ans: 2,
  //   fact: "14 in Korean is 열넷 (Yeol-net) in native Korean OR 십사 (Sib-sa) in Sino-Korean! 🔢",
  //   hint: "Think of it as 10 (열/십) + 4 (넷/사) combined together 🧮"
  // },
  // {
  //   level:"Hard 💀",
  //   emoji: "🎂",
  //   q: "In which year did BTS release their debut single '2 Cool 4 Skool'?",
  //   opts: ["2011", "2012", "2013", "2014"],
  //   ans: 2,
  //   fact: "BTS debuted on June 13, 2013 with '2 Cool 4 Skool' under Big Hit Entertainment! 🎉",
  //   hint: "They debuted the same year you were born — what a coincidence! 🌟"
  // },
  // {
  //   level:"Hard 💀",
  //   emoji: "💿",
  //   q: "What is the name of BTS's fandom?",
  //   opts: ["Blink", "ARMY", "MOA", "Stay"],
  //   ans: 1,
  //   fact: "ARMY stands for Adorable Representative M.C for Youth — fans who protect BTS! 💜",
  //   hint: "An army protects — just like BTS fans protect and support them 🛡️"
  // },

  // // ── HARDEST (13-14) ──────────────────────────────────────
  // {
  //   level:"Hardest 🧠",
  //   emoji: "🇰🇷",
  //   q: "What is the Korean writing system called?",
  //   opts: ["Kanji", "Hangul", "Hiragana", "Hanja"],
  //   ans: 1,
  //   fact: "한글 (Hangul) was created by King Sejong the Great in 1443! It has 24 letters 📜",
  //   hint: "BTS sing and write in this script — it was invented by a Korean king 👑"
  // },
  // {
  //   level:"Hardest 🧠",
  //   emoji: "🎙️",
  //   q: "Which BTS member is known as the 'Golden Maknae' (youngest member with all-round talent)?",
  //   opts: ["V (Taehyung)", "Jimin", "J-Hope", "Jungkook"],
  //   ans: 3,
  //   fact: "Jungkook is the youngest (maknae) of BTS and excels at singing, dancing & art — truly golden! ✨",
  //   hint: "'Maknae' means youngest in Korean, and 'golden' means talented at everything 🥇"
  // }

];

/* Messages to type out */
const MSG1 = "Hey Het! Wishing you the most amazing 14th birthday ever! 🎉 May this year bring you as much joy and happiness as you bring to everyone around you. You are growing up to be such an incredible, smart, and kind person — and we are so proud of you. Keep dreaming big, keep smiling, and never stop being YOU! Happy Birthday! 💜";
const MSG2 = "My dearest Het! Happy Birthday to the best little sister in the entire world! 🌸 Having you in my life is one of the greatest gifts I could ever ask for. You light up every room you walk into with your beautiful smile and endless energy. I hope all your wishes come true this year and every year. Love you to the moon and back — always! 💜";

/* ════════════════════════════════════════════
   STATE
════════════════════════════════════════════ */
const S = { qi: 0, correct: 0, locked: false, timers: [] };

function el(id) { return document.getElementById(id); }
function clrTimers() { S.timers.forEach(clearTimeout); S.timers = []; }
function t(fn, ms) { const id = setTimeout(fn, ms); S.timers.push(id); return id; }

/* ════════════════════════════════════════════
   STARS
════════════════════════════════════════════ */
function makeStars(containerId, n) {
  const c = el(containerId); if (!c) return;
  c.innerHTML = '';
  for (let i = 0; i < n; i++) {
    const d = document.createElement('div');
    d.className = 'star-dot';
    const sz = Math.random() * 2.5 + 0.5;
    d.style.cssText = `width:${sz}px;height:${sz}px;top:${(Math.random()*100).toFixed(1)}%;left:${(Math.random()*100).toFixed(1)}%;--dur:${(Math.random()*3+2).toFixed(1)}s;--del:${(Math.random()*4).toFixed(1)}s;--min-op:${(Math.random()*0.2+0.06).toFixed(2)};--max-op:${(Math.random()*0.5+0.5).toFixed(2)}`;
    c.appendChild(d);
  }
}

/* ════════════════════════════════════════════
   SCREEN TRANSITIONS
════════════════════════════════════════════ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    if (s.id === id) {
      s.classList.remove('exit');
      requestAnimationFrame(() => requestAnimationFrame(() => {
        s.classList.add('active');
        s.scrollTop = 0;
      }));
    } else {
      s.classList.remove('active');
      s.classList.add('exit');
      setTimeout(() => s.classList.remove('exit'), 700);
    }
  });
}

/* ════════════════════════════════════════════
   CINEMATIC INTRO
════════════════════════════════════════════ */
function runIntro() {
  const lines = ['il1','il2','il3','il4','il5'];
  const delays = [600, 2300, 4300, 6300, 8300];  // each line appears later (more breathing room)
  lines.forEach((id, i) => {
    setTimeout(() => {
      const el2 = el(id);
      if (el2) el2.classList.add('show');
    }, delays[i]);
  });
  // Fade out intro, reveal landing
  setTimeout(() => {
    const intro = el('intro');
    intro.style.opacity = '0';
    setTimeout(() => {
      intro.remove();
      showScreen('screen-landing');
      makeStars('stars-landing', 90);
    }, 1100);
  }, 15000);
}

/* ════════════════════════════════════════════
   QUIZ
════════════════════════════════════════════ */
function updateChip() {
  el('score-chip').textContent = `Correct: ${S.correct} / ${QUIZ.length}`;
}

function loadQ(i) {
  S.locked = false;
  const q = QUIZ[i];
  el('prog-bar').style.width = `${(i / QUIZ.length) * 100}%`;
  el('prog-label').textContent = `${i + 1} / ${QUIZ.length}`;
  el('q-emoji').textContent = q.emoji;
  el('q-text').textContent  = q.q;
  el('q-feedback').textContent = '';
  el('q-feedback').className = 'q-feedback hidden';

  // ── Difficulty badge ──────────────────────────────
  const badge = el('q-level');
  badge.textContent = q.level;
  badge.className = 'q-level-badge'; // reset classes first
  if      (q.level.includes('Easiest')) badge.classList.add('lvl-easiest');
  else if (q.level.includes('Hardest')) badge.classList.add('lvl-hardest');
  else if (q.level.includes('Hard'))    badge.classList.add('lvl-hard');
  else if (q.level.includes('Medium'))  badge.classList.add('lvl-medium');
  else if (q.level.includes('Easy'))    badge.classList.add('lvl-easy');
  // ─────────────────────────────────────────────────

  const opts = el('q-options');
  opts.innerHTML = '';
  q.opts.forEach((opt, idx) => {
    const b = document.createElement('button');
    b.className = 'q-opt'; b.type = 'button'; b.textContent = opt;
    b.addEventListener('click', () => handleQ(idx));
    opts.appendChild(b);
  });
  const card = el('quiz-card');
  card.classList.remove('pop');
  void card.offsetWidth;
  card.classList.add('pop');
  updateChip();
}

function handleQ(sel) {
  if (S.locked) return;
  S.locked = true;
  const q = QUIZ[S.qi];
  const btns = document.querySelectorAll('.q-opt');
  const fb = el('q-feedback');
  btns.forEach(b => b.disabled = true);
  if (sel === q.ans) {
    btns[q.ans].classList.add('correct');
    S.correct++;
    updateChip();
    fb.textContent = `✅ ${q.fact}`;
    fb.className = 'q-feedback ok';
    miniConfetti();
    setTimeout(() => {
      S.qi++;
      if (S.qi < QUIZ.length) {
        loadQ(S.qi);
      } else {
        el('prog-bar').style.width = '100%';
        el('prog-label').textContent = '🎉 All done!';
        setTimeout(startCake, 900);
      }
    }, 3000);
  } else {
    btns[sel].classList.add('wrong');
    fb.textContent = `❌ Oops! Hint: ${q.hint}`;
    fb.className = 'q-feedback bad';
    setTimeout(() => loadQ(S.qi), 5000);
  }
}

/* ════════════════════════════════════════════
   CAKE SEQUENCE
════════════════════════════════════════════ */
function startCake() {
  showScreen('screen-cake');
  makeStars('stars-cake', 80);

  const pre   = el('cake-pre');
  const wrap  = el('cake-wrap');
  const cands = el('c-candles');
  const fl    = el('f-left');
  const fr    = el('f-right');
  const hint  = el('cake-hint');
  const blow  = el('btn-blow');

  // reset
  wrap.classList.remove('show');
  cands.classList.remove('show','blown');
  fl.classList.remove('active');
  fr.classList.remove('active');
  hint.classList.remove('show');
  blow.classList.add('hidden');
  blow.disabled = false;

  t(() => { pre.textContent = 'Your birthday cake is arriving… 🎂'; wrap.classList.add('show'); }, 350);
  t(() => { pre.textContent = 'Lighting the candles… ✨'; cands.classList.add('show'); }, 1700);
  t(() => { pre.textContent = 'Sparkling fountains for you! 💜'; fl.classList.add('active'); fr.classList.add('active'); sideBurst(); }, 2700);
  t(() => { pre.textContent = 'Make a wish! 🌟'; hint.classList.add('show'); blow.classList.remove('hidden'); }, 3600);
}

function blowCandles() {
  el('btn-blow').disabled = true;
  el('c-candles').classList.add('blown');
  el('f-left').classList.remove('active');
  el('f-right').classList.remove('active');
  el('cake-pre').textContent = 'Wooooow! 🎉 Now open your gift…';
  el('cake-hint').textContent = '';
  bigBurst();
  setTimeout(startGift, 1800);
}

/* ════════════════════════════════════════════
   GIFT SEQUENCE
════════════════════════════════════════════ */
function startGift() {
  showScreen('screen-gift');
  makeStars('stars-gift', 80);
  initScratchCard();
}

function openGift() {
  bigBurst();
  setTimeout(() => { bigBurst(); }, 400);
  setTimeout(startFinal, 1500);
}
/* ════════════════════════════════════════════
   SCRATCH CARD
════════════════════════════════════════════ */
function initScratchCard() {
  const canvas  = el('scratch-canvas');
  const wrap    = canvas.parentElement;
  const hint    = el('scratch-hint-overlay');
  const bar     = el('scratch-progress-bar');
  const label   = el('scratch-progress-label');
  const btnDone = el('btn-scratch-done');

  // Size canvas to match its CSS size
  const rect = wrap.getBoundingClientRect();
  canvas.width  = rect.width  || 420;
  canvas.height = rect.height || 280;

  const ctx = canvas.getContext('2d');

  // ── Draw the scratch surface ──
  // Gold/purple gradient background
  const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  grad.addColorStop(0,   '#7c3aed');
  grad.addColorStop(0.5, '#a855f7');
  grad.addColorStop(1,   '#ec4899');
  ctx.fillStyle = grad;
  ctx.roundRect(0, 0, canvas.width, canvas.height, 24);
  ctx.fill();

  // Pattern of emojis on the surface
  ctx.font = `${Math.round(canvas.width / 10)}px serif`;
  ctx.textAlign = 'center';
  ctx.globalAlpha = 0.18;
  const emojis = ['🎁','💜','✨','🎂','🌟','🎉'];
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 7; col++) {
      const emoji = emojis[(row * 7 + col) % emojis.length];
      ctx.fillText(emoji,
        (col + 0.5) * (canvas.width / 6),
        (row + 0.5) * (canvas.height / 4)
      );
    }
  }
  ctx.globalAlpha = 1;

  // "Scratch me!" text in centre
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.font = `bold ${Math.round(canvas.width / 12)}px Nunito, sans-serif`;
  ctx.textAlign = 'center';
  ctx.fillText('🎁 Scratch to Reveal! 🎁', canvas.width / 2, canvas.height / 2);

  // ── Scratch logic ──
  let isScratching = false;
  let hasStarted   = false;
  let completed    = false;

  // Use destination-out to erase the top layer
  ctx.globalCompositeOperation = 'destination-out';

  function getPos(e) {
    const r = canvas.getBoundingClientRect();
    const src = e.touches ? e.touches[0] : e;
    return {
      x: (src.clientX - r.left) * (canvas.width  / r.width),
      y: (src.clientY - r.top)  * (canvas.height / r.height)
    };
  }

  function scratch(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);   // brush size — increase for bigger eraser
    ctx.fill();
  }

  function calcProgress() {
    const data   = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let cleared  = 0;
    const total  = canvas.width * canvas.height;
    // alpha === 0 means pixel is cleared (scratched)
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] < 20) cleared++;
    }
    return Math.round((cleared / total) * 100);
  }

  function onScratch(e) {
    e.preventDefault();
    if (!isScratching || completed) return;

    const { x, y } = getPos(e);
    scratch(x, y);

    // Hide hint once they start
    if (!hasStarted) {
      hasStarted = true;
      hint.classList.add('hide');
    }

    // Update progress every ~10 events to avoid perf hit
    if (Math.random() < 0.15) {
      const pct = calcProgress();
      bar.style.width   = `${Math.min(pct, 100)}%`;
      label.textContent = `${Math.min(pct, 100)}% scratched`;

      if (pct >= 60 && !completed) {
        completed = true;
        // Auto-clear remaining surface
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        bar.style.width   = '100%';
        label.textContent = '100% scratched 🎉';
        // Show celebration & button
        bigBurst();
        setTimeout(() => {
          btnDone.classList.remove('hidden');
          miniConfetti();
        }, 400);
      }
    }
  }

  // Mouse events
  canvas.addEventListener('mousedown', (e) => { isScratching = true; const p = getPos(e); scratch(p.x, p.y); });
  canvas.addEventListener('mousemove', onScratch);
  canvas.addEventListener('mouseup',   () => isScratching = false);
  canvas.addEventListener('mouseleave',() => isScratching = false);

  // Touch events
  canvas.addEventListener('touchstart', (e) => { e.preventDefault(); isScratching = true; const p = getPos(e); scratch(p.x, p.y); }, { passive: false });
  canvas.addEventListener('touchmove',  onScratch, { passive: false });
  canvas.addEventListener('touchend',   () => isScratching = false);

  // Reset button states
  btnDone.classList.add('hidden');
  btnDone.disabled = false;
  hint.classList.remove('hide');
}
/* ════════════════════════════════════════════
   FINAL MESSAGES + FIREWORKS
════════════════════════════════════════════ */
function startFinal() {
  showScreen('screen-final');
  makeStars('stars-final', 80);
  spawnHearts();

  // Reset states
  el('envelope-stage').classList.remove('hidden');
  el('final-inner').classList.add('hidden');
  el('msg-card-1').classList.remove('show');
  el('msg-card-2').classList.remove('show');
  el('final-replay').classList.remove('show');
  el('msg-body-1').innerHTML = '';
  el('msg-body-2').innerHTML = '';

  // Reset envelope parts
  el('env-flap').classList.remove('open');
  el('env-seal').classList.remove('broken');
  el('env-letter-peek').classList.remove('rise');
  el('envelope-wrap').classList.remove('fly-away', 'shake');

  // Shake envelope after 1.5s to hint it's interactive
  t(() => {
    el('envelope-wrap').classList.add('shake');
    setTimeout(() => el('envelope-wrap').classList.remove('shake'), 700);
  }, 1500);
}

function openLetter() {
  // Disable button to prevent double click
  el('btn-open-letter').disabled = true;

  // Step 1 — break the wax seal (0ms)
  el('env-seal').classList.add('broken');

  // Step 2 — open the flap (300ms)
  t(() => el('env-flap').classList.add('open'), 300);

  // Step 3 — letter rises out (600ms)
  t(() => el('env-letter-peek').classList.add('rise'), 600);

  // Step 4 — envelope flies away (1800ms)
  t(() => {
    el('envelope-wrap').classList.add('fly-away');
    el('envelope-wrap').style.animation = 'envFlyAway 0.9s var(--ease-out) forwards';
  }, 1800);

  // Step 5 — show messages (2600ms)
  t(() => {
    el('envelope-stage').classList.add('hidden');
    el('final-inner').classList.remove('hidden');
    bigBurst();

    const card1  = el('msg-card-1');
    const card2  = el('msg-card-2');
    const replay = el('final-replay');

    t(() => {
      card1.classList.add('show');
      t(() => {
        typeText('msg-body-1', MSG1, 28, () => {
          t(() => {
            card2.classList.add('show');
            t(() => {
              typeText('msg-body-2', MSG2, 28, () => {
                t(() => runFireworks(), 400);
                t(() => replay.classList.add('show'), 5000);
              });
            }, 400);
          }, 600);
        });
      }, 400);
    }, 300);
  }, 2600);
}

/* ── Typing effect ── */
function typeText(elId, text, speed, onDone) {
  const target = el(elId);
  target.innerHTML = '';
  let i = 0;
  // cursor
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  cursor.setAttribute('aria-hidden','true');
  target.appendChild(cursor);

  function tick() {
    if (i < text.length) {
      target.insertBefore(document.createTextNode(text[i]), cursor);
      i++;
      setTimeout(tick, speed + Math.random() * 18);
    } else {
      cursor.remove();
      if (onDone) onDone();
    }
  }
  tick();
}

/* ── Fireworks ── */
function runFireworks() {
  if (typeof confetti !== 'function') return;
  const end = Date.now() + 5000;
  const colors = ['#a855f7','#d8b4fe','#ec4899','#fbbf24','#ffffff','#8b5cf6'];
  (function frame() {
    confetti({ particleCount: 22, spread: 70, startVelocity: 45, gravity: 0.8,
               origin: { x: Math.random(), y: Math.random() * 0.5 }, colors });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

/* ── Floating hearts ── */
function spawnHearts() {
  const c = el('float-hearts');
  if (!c) return; c.innerHTML = '';
  const em = ['💜','✨','🌟','💫','🎉','💖','🌸','⭐','🎂','🪄'];
  for (let i = 0; i < 28; i++) {
    const s = document.createElement('span');
    s.className = 'fheart';
    s.textContent = em[Math.floor(Math.random() * em.length)];
    s.style.cssText = `left:${(Math.random()*94).toFixed(1)}%;--dur:${(Math.random()*4+5).toFixed(1)}s;--del:${(Math.random()*5).toFixed(1)}s;font-size:${(Math.random()*1.2+0.9).toFixed(1)}rem`;
    c.appendChild(s);
  }
}

/* ════════════════════════════════════════════
   CONFETTI HELPERS
════════════════════════════════════════════ */
const COLS = ['#a855f7','#d8b4fe','#ec4899','#fbbf24','#ffffff','#8b5cf6'];
function miniConfetti() {
  if (typeof confetti !== 'function') return;
  confetti({ particleCount:40, spread:55, origin:{y:0.65}, scalar:0.88, colors:COLS });
}
function sideBurst() {
  if (typeof confetti !== 'function') return;
  confetti({ particleCount:90, spread:85, angle:60,  origin:{x:0.1,y:0.72}, colors:COLS });
  confetti({ particleCount:90, spread:85, angle:120, origin:{x:0.9,y:0.72}, colors:COLS });
}
function bigBurst() {
  if (typeof confetti !== 'function') return;
  confetti({ particleCount:220, spread:100, origin:{y:0.45}, colors:COLS });
  setTimeout(()=>confetti({ particleCount:130, spread:120, angle:60,  origin:{x:0.1,y:0.55}, colors:COLS }), 180);
  setTimeout(()=>confetti({ particleCount:130, spread:120, angle:120, origin:{x:0.9,y:0.55}, colors:COLS }), 320);
}

/* ════════════════════════════════════════════
   RESET / REPLAY
════════════════════════════════════════════ */
function resetAll() {
  clrTimers();
  S.qi = 0; S.correct = 0; S.locked = false;
  updateChip();
  el('prog-bar').style.width = '0%';
  el('prog-label').textContent = '1 / 14';
  // hide all screens
  document.querySelectorAll('.screen').forEach(s => { s.classList.remove('active','exit'); });
  showScreen('screen-landing');
  makeStars('stars-landing', 90);
}

/* ════════════════════════════════════════════
   EVENT LISTENERS
════════════════════════════════════════════ */
el('btn-start').addEventListener('click', () => {
  showScreen('screen-quiz');
  makeStars('stars-quiz', 80);
  setTimeout(() => loadQ(0), 280);
});

el('btn-blow').addEventListener('click', blowCandles);
el('btn-scratch-done').addEventListener('click', openGift);
el('btn-open-letter').addEventListener('click', openLetter);
el('envelope-wrap').addEventListener('click', openLetter);  // clicking envelope also works

el('btn-replay').addEventListener('click', resetAll);

/* ════════════════════════════════════════════
   BOOT
════════════════════════════════════════════ */
window.addEventListener('load', runIntro);
