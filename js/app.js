/* ===== Data ===== */
// images from the "Saved Pictures" folder (URL-encoded for safe src usage)
const SAVED_PHOTOS = [
  'Saved%20Pictures/WhatsApp%20Image%202026-05-20%20at%208.13.29%20PM%20%281%29.jpeg',
  'Saved%20Pictures/WhatsApp%20Image%202026-05-20%20at%208.13.29%20PM%20%282%29.jpeg',
  'Saved%20Pictures/WhatsApp%20Image%202026-05-20%20at%208.13.29%20PM.jpeg',
  'Saved%20Pictures/WhatsApp%20Image%202026-05-20%20at%208.13.30%20PM%20%281%29.jpeg',
  'Saved%20Pictures/WhatsApp%20Image%202026-05-20%20at%208.13.30%20PM%20%282%29.jpeg',
  'Saved%20Pictures/WhatsApp%20Image%202026-05-20%20at%208.13.30%20PM%20%283%29.jpeg',
  'Saved%20Pictures/WhatsApp%20Image%202026-05-20%20at%208.13.30%20PM%20%284%29.jpeg',
  'Saved%20Pictures/WhatsApp%20Image%202026-05-20%20at%208.13.30%20PM%20%285%29.jpeg',
  'Saved%20Pictures/WhatsApp%20Image%202026-05-20%20at%208.13.30%20PM%20%286%29.jpeg',
  'Saved%20Pictures/WhatsApp%20Image%202026-05-20%20at%208.13.30%20PM%20%287%29.jpeg',
  'Saved%20Pictures/WhatsApp%20Image%202026-05-20%20at%208.13.30%20PM.jpeg',
];

// Cute captions corresponding to the saved pictures (same order)
const SAVED_CAPTIONS = [
  'Two hearts, one story',
  'The sweetest soul ever',
  'Sisters by blood, best friends by choice',
  'Through every high and low',
  'From little girls to lifelong best friends',
  'My forever best friend',
  'Heart full of love',
  'Sister squad moment',
  'Our earliest chapters',
  'The roots of our sister bond',
  'Beautiful inside and out',
];

const SOLO_PHOTOS = [
  'images/memory-3.jpeg',
  'images/memory-6.jpeg',
  'images/memory-7.jpeg',
];

const ALL_PHOTOS = [
  { src: 'images/memory-3.jpeg', caption: 'Elegant and glowing — pure Hanona', solo: true, span: 'span-2 span-row-2' },
  { src: 'images/memory-6.jpeg', caption: 'Fashion Icon — Naturally adorable!', solo: true },
  { src: 'images/memory-7.jpeg', caption: 'Sunshine, fields, and your beautiful smile', solo: true },
  { src: 'images/birthday-celebration.jpeg', caption: 'Different souls, one unbreakable bond', solo: false },
  { src: 'images/graduation.jpeg', caption: 'My safe place and biggest supporter', solo: false },
  { src: 'images/memory-1.jpeg', caption: 'You by my side at my senior walk', solo: false },
  { src: 'images/night-out.jpeg', caption: 'Home is wherever you are', solo: false },
  { src: 'images/memory-5.jpeg', caption: 'Mirror selfie with badora 🐱 (fav trio)', solo: false },
  { src: 'images/memory-2.jpeg', caption: 'Cozy night laughs', solo: false },
  { src: 'images/memory-4.jpeg', caption: 'Car ride energy', solo: false },
  { src: 'images/girlie.jpeg', caption: 'To many more birthdays ^^', solo: false },
];

// Gallery contains saved pictures first (if any), then the existing set
const GALLERY = SAVED_PHOTOS.map((s, i) => ({ src: s, caption: SAVED_CAPTIONS[i] || 'Saved picture', solo: false })).concat(ALL_PHOTOS);

const FLYING_CARD_PHOTOS = [
  { src: 'images/memory-6.jpeg', message: 'Fashion Icon forever!' },
  { src: 'images/memory-3.jpeg', message: 'Piano-room elegance' },
  { src: 'images/memory-7.jpeg', message: 'Sky-wide smiles' },
];

const MEMORY_CARDS = [
  { icon: '👑', label: 'Birthday Queen', message: '24 May is YOUR day. The whole world should celebrate you!', image: SAVED_PHOTOS[0] || 'images/memory-3.jpeg' },
  { icon: '✨', label: 'Fashion Icon', message: 'You turn every hallway into a runway. Absolutely iconic.', image: 'images/memory-6.jpeg' },
  { icon: '🌸', label: 'Golden Girl', message: 'Sunshine, open skies, and that smile — unforgettable.', image: 'images/memory-7.jpeg' },
  { icon: '🎂', label: 'Party Glow', message: 'Gold balloons, purple lights — you shine brightest on your night!', image: 'images/girlie.jpeg' },
  { icon: '🎓', label: 'My Biggest Fan', message: 'At MY senior walk you were right there cheering — best sister ever!', image: 'images/graduation.jpeg' },
  { icon: '💕', label: 'Forever Loved', message: 'You are brilliant, beautiful, and loved more than words can say.', image: 'images/memory-1.jpeg' },
];

const COMPLIMENTS = [
  'Life feels lighter with you in it',
  'You are braver than you know',
  'Kindness is your superpower',
  '24 May — the best day of the year',
  'Every family has a heartbeat — you are ours',
  'The best gift life gave me is you',
  'Dream big — you\'ve got this hanoni',
  'The world is lucky to have you',
  'Stunning inside and out',
  'Today is all about YOU',
  'Queen energy only',
  'Your heart is pure sunshine',
];

const WISHES = [
  { title: 'A Wish for You 🌟', body: 'May every dream you hold in your heart find its way to you this year. You deserve the world and more!' },
  { title: 'Sister Power 💜', body: 'Thank you for being my partner in crime, my shoulder to lean on, and the person who makes life infinitely brighter.' },
  { title: 'Adventure Awaits 🎈', body: 'May you discover new places, new passions, and new reasons to fall even more in love with your life.' },
  { title: 'You Are Enough ✨', body: 'Never forget: you are brilliant, beautiful, brave, and loved beyond measure. Today we celebrate YOU!' },
];

const FORTUNES = [
  'You will laugh until your cheeks hurt very soon.',
  'Your heart is leading you exactly where you are meant to be.',
  'A wish you make today will come true before the year ends!',
];

const TIMELINE = [
  { title: 'Your Smile', text: 'It lights up every room and every heart around you.' },
  { title: 'Your Strength', text: 'You face challenges with grace and come out even brighter.' },
  { title: 'Your Kindness', text: 'You care deeply and make everyone feel valued.' },
  { title: 'Your Dreams', text: 'You reach for the stars — and you\'re getting closer every day.' },
  { title: 'Your Laugh', text: 'The best sound in the world. Never stop laughing.' },
  { title: 'Your Future', text: 'So much greatness ahead. The best chapters are still unwritten.' },
];

const TYPEWRITER_LINES = [
  '24 May — the day the world got luckier...',
  'Today we celebrate YOU — Hanoni, the birthday queen! 👑',
  'Blow the card away, pop bubbles, shower confetti! 💜',
];

const GIFT_MESSAGES = [
  'Hehe, one more tap! 🎀',
  'So close… tap again! 💕',
  '🎉 Surprise! Happy 24 May, Hanoni! You are the best sister — I love you! 💗🎂',
];

const BALLOON_MESSAGES = ['Pop! 🎈', 'Yay! 🎉', 'Surprise! ✨', 'Birthday magic! 💜', 'Wheee! 🎊'];

/* ===== DOM refs (set on init) ===== */
let curtain, openBtn, confettiCanvas, cardsGrid, galleryMosaic, timelineEl;
let modalOverlay, modalTitle, modalBody, modalClose;
let lightbox, lightboxImg, lightboxCaption;
let letterOverlay, letterEnvelope, toast, giftBox, giftMessage, bgAudio, audioToggle, puffSound, candleEl;
let treasureModal, treasureClueEl, treasureCloseBtn, treasureGiveUpBtn;

let siteOpened = false;
let giftClicks = 0;
let lightboxIndex = 0;
let flyingCardIndex = 0;
let cardFlying = false;
let galleryFilter = 'all';

/* ===== Init ===== */
function initApp() {
  curtain = document.getElementById('curtain');
  openBtn = document.getElementById('openBtn');
  confettiCanvas = document.getElementById('confetti');
  cardsGrid = document.getElementById('cardsGrid');
  galleryMosaic = document.getElementById('galleryMosaic');
  timelineEl = document.getElementById('timeline');
  modalOverlay = document.getElementById('modalOverlay');
  modalTitle = document.getElementById('modalTitle');
  modalBody = document.getElementById('modalBody');
  modalClose = document.getElementById('modalClose');
  lightbox = document.getElementById('lightbox');
  lightboxImg = document.getElementById('lightboxImg');
  lightboxCaption = document.getElementById('lightboxCaption');
  letterOverlay = document.getElementById('letterOverlay');
  letterEnvelope = document.getElementById('letterEnvelope');
  toast = document.getElementById('toast');
  giftBox = document.getElementById('giftBox');
  giftMessage = document.getElementById('giftMessage');
  bgAudio = document.getElementById('bgAudio');
  puffSound = document.getElementById('puffSound');
  audioToggle = document.getElementById('audioToggle');
  candleEl = document.getElementById('candle');
  treasureModal = document.getElementById('treasureModal');
  treasureClueEl = document.getElementById('treasureClue');
  treasureCloseBtn = document.getElementById('treasureClose');
  treasureGiveUpBtn = document.getElementById('treasureGiveUp');
  candleFlame = document.getElementById('candleFlame');
  candleSmoke = document.getElementById('candleSmoke');

  if (!curtain || !openBtn) {
    console.error('Birthday site: missing curtain or open button');
    return;
  }

  if (!document.body.classList.contains('site-open')) {
    document.body.classList.add('site-locked');
  }

  window.addEventListener('birthday-opened', onBirthdayOpened);

  try { buildCards(); } catch (err) { console.warn('Cards:', err); }
  try { buildGallery(); } catch (err) { console.warn('Gallery:', err); }
  try { buildPolaroids(); } catch (err) { console.warn('Polaroids:', err); }
  try { buildCompliments(); } catch (err) { console.warn('Compliments:', err); }
  try { initFlyingCard(); } catch (err) { console.warn('Flying card:', err); }
  try { initGalleryFilters(); } catch (err) { console.warn('Filters:', err); }
  try { buildTimeline(); } catch (err) { console.warn('Timeline:', err); }
  try { initScratchCard(); } catch (err) { console.warn('Scratch:', err); }
  try { initConfetti(); } catch (err) { console.warn('Confetti:', err); }
  try { initCursorTrail(); } catch (err) { console.warn('Trail:', err); }
  try { initScrollNav(); } catch (err) { console.warn('Nav:', err); }
  try { initNavMenu(); } catch (err) { console.warn('Menu:', err); }
  try { initTypewriter(); } catch (err) { console.warn('Typewriter:', err); }
  try { bindAllEvents(); } catch (err) { console.warn('Events:', err); }
  try { initEasterEggs(); } catch (err) { console.warn('EasterEggs:', err); }
  try { initTreasureHunt(); } catch (err) { console.warn('Treasure init failed', err); }
}

function onBirthdayOpened() {
  siteOpened = true;
  launchConfetti(120);
  setTimeout(() => {
    if (!cardFlying) flyCardAway();
  }, 1800);

  // Pop the candle into view shortly after the curtain opens
  setTimeout(() => {
    try {
      showCandleModal();
    } catch (err) { console.warn('Candle popup failed', err); }
  }, 900);

  // Start balloons rising, name animation, cake reveal and fireworks after open
  try { startBalloons(); } catch (e) { console.warn('Balloons failed', e); }
  try { animateHeroName(); } catch (e) { console.warn('Name animation failed', e); }
  // small delay then fireworks
  setTimeout(() => { try { initFireworks(); launchFireworks(3); } catch (e) { console.warn('Fireworks failed', e); } }, 1400);
}

function bindAllEvents() {
  const confettiBtn = document.getElementById('confettiBtn');
  const wishPopupBtn = document.getElementById('wishPopupBtn');
  const letterBtn = document.getElementById('letterBtn');
  const letterClose = document.getElementById('letterClose');
  const replayBtn = document.getElementById('replayBtn');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  

  if (confettiBtn) confettiBtn.addEventListener('click', () => launchConfetti(150));
  const flyCardBtn = document.getElementById('flyCardBtn');
  const launchCardBtn = document.getElementById('launchCardBtn');
  if (flyCardBtn) flyCardBtn.addEventListener('click', flyCardAway);
  if (launchCardBtn) launchCardBtn.addEventListener('click', () => {
    document.getElementById('flying-card')?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(flyCardAway, 600);
  });
    bgAudio = document.getElementById('bgAudio');
    puffSound = document.getElementById('puffSound');
    audioToggle = document.getElementById('audioToggle');
    candleEl = document.getElementById('candle');

    if (audioToggle && bgAudio) {
      audioToggle.addEventListener('click', () => {
        if (bgAudio.paused) { bgAudio.play().catch(() => {}); audioToggle.textContent = '🔊'; audioToggle.setAttribute('aria-pressed', 'true'); }
        else { bgAudio.pause(); audioToggle.textContent = '🔈'; audioToggle.setAttribute('aria-pressed', 'false'); }
      });
      window.addEventListener('birthday-opened', () => { if (bgAudio.paused) bgAudio.play().catch(() => {}); audioToggle.textContent = '🔊'; audioToggle.setAttribute('aria-pressed', 'true'); });
    }
    // Candle modal handlers
    const candleModalOverlay = document.getElementById('candleModalOverlay');
    const blowCandleBtn = document.getElementById('blowCandleBtn');
    const candleModalClose = document.getElementById('candleModalClose');

    if (blowCandleBtn) blowCandleBtn.addEventListener('click', blowCandle);
    if (candleEl) {
      candleEl.addEventListener('click', blowCandle);
      candleEl.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); blowCandle(); } });
    }
    if (candleModalClose) candleModalClose.addEventListener('click', hideCandleModal);
    if (candleModalOverlay) candleModalOverlay.addEventListener('click', (e) => { if (e.target === candleModalOverlay) hideCandleModal(); });
  if (wishPopupBtn) wishPopupBtn.addEventListener('click', () => showWish());
  if (letterBtn) letterBtn.addEventListener('click', openLetter);
  if (letterClose) letterClose.addEventListener('click', closeLetter);
  if (replayBtn) replayBtn.addEventListener('click', replayOpening);
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
  if (lightboxNext) lightboxNext.addEventListener('click', () => navigateLightbox(1));
  if (lightbox) lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  if (letterOverlay) letterOverlay.addEventListener('click', (e) => { if (e.target === letterOverlay) closeLetter(); });

  document.querySelectorAll('.balloon[data-pop]').forEach((b) => {
    b.addEventListener('click', popBalloon);
  });

  document.querySelectorAll('.fortune-btn').forEach((btn) => {
    btn.addEventListener('click', () => revealFortune(btn));
  });

  if (giftBox) {
    giftBox.addEventListener('click', handleGiftClick);
    giftBox.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleGiftClick();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeLightbox();
      closeLetter();
    }
    if (lightbox && !lightbox.classList.contains('hidden')) {
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    }
  });
}

function initNavMenu() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  links.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ===== Balloons launcher ===== */
function startBalloons() {
  const balloons = document.querySelector('.balloons');
  if (!balloons) return;
  balloons.classList.add('launching');
  // stagger rise for each balloon
  const items = Array.from(balloons.querySelectorAll('.balloon'));
  items.forEach((b, i) => {
    // place at random x near initial positions if not set
    if (!b.style.left) b.style.left = (8 + i * 18) + '%';
    b.style.bottom = '-10%';
    setTimeout(() => { b.classList.add('rise'); }, 300 + i * 420);
  });
}

/* ===== Hero name animation ===== */
function animateHeroName() {
  const nameEl = document.querySelector('.hero-title .name');
  if (!nameEl) return;
  nameEl.classList.add('name-animate');
  // stop after a while to avoid infinite motion if user prefers
  setTimeout(() => nameEl.classList.remove('name-animate'), 16000);
}

/* big cake removed */

/* ===== Simple fireworks engine ===== */
let fireworksCtx = null;
let fireworksCanvas = null;
let fireworksRunning = false;
function initFireworks() {
  fireworksCanvas = document.getElementById('fireworksCanvas');
  if (!fireworksCanvas) return;
  fireworksCtx = fireworksCanvas.getContext('2d');
  function resize() { fireworksCanvas.width = window.innerWidth; fireworksCanvas.height = window.innerHeight; }
  resize(); window.addEventListener('resize', resize);
}

function launchFireworks(count) {
  if (!fireworksCtx || fireworksRunning) return;
  fireworksRunning = true;
  const bursts = count || 3;
  let fired = 0;
  const interval = setInterval(() => {
    createFireworkBurst(Math.random() * window.innerWidth * 0.8 + 80, Math.random() * window.innerHeight * 0.4 + 40);
    fired++;
    if (fired >= bursts) { clearInterval(interval); setTimeout(() => { fireworksRunning = false; if (fireworksCtx) fireworksCtx.clearRect(0,0,fireworksCanvas.width, fireworksCanvas.height); }, 1600); }
  }, 600);
}

function createFireworkBurst(x, y) {
  if (!fireworksCtx) return;
  const ctx = fireworksCtx;
  const particles = [];
  const colors = ['#ff85c0','#ffd36a','#fff7c6','#ff5cad','#ffc0e0'];
  const count = 28 + Math.floor(Math.random() * 18);
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 / count) * i;
    const speed = 2 + Math.random() * 4;
    particles.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 0, ttl: 70 + Math.random() * 60, color: colors[Math.floor(Math.random()*colors.length)] });
  }
  function step() {
    // clear canvas so the page beneath stays visible
    ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
    ctx.globalCompositeOperation = 'lighter';
    particles.forEach((p) => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.06; p.life++;
      const alpha = Math.max(0, 1 - p.life / p.ttl);
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.globalAlpha = alpha;
      ctx.arc(p.x, p.y, 2.6, 0, Math.PI*2);
      ctx.fill();
      // small tail
      ctx.globalAlpha = alpha * 0.6;
      ctx.fillRect(p.x - p.vx * 0.6, p.y - p.vy * 0.6, 2, 2);
    });
    ctx.globalAlpha = 1;
    // continue until all particles have expired
    if (particles.every(p => p.life > p.ttl)) {
      ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
      return;
    }
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ===== Easter eggs: keyboard 'hana' and image double-click ===== */
// (Older duplicate removed - single robust initializer below)

function scrollToPolaroids() {
  const el = document.getElementById('cards');
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth' });
  const wall = document.getElementById('polaroidWall');
  if (wall) {
    wall.classList.add('highlight');
    setTimeout(() => wall.classList.remove('highlight'), 1400);
  }
}

function initEasterEggs() {
  console.log('initEasterEggs: registering listeners');
  const seq = [];
  const target = ['h','a','n','a'];

  // keyboard sequence
  document.addEventListener('keydown', (e) => {
    try {
      seq.push(e.key.toLowerCase());
      if (seq.slice(-target.length).join('') === target.join('')) {
        showToast('✨ Secret Unlocked! ✨');
        launchFireworks(5);
      }
      if (seq.length > 12) seq.shift();
    } catch (err) { console.warn('easter: key handler', err); }
  });

  // targeted handlers
  const heroImg = document.querySelector('.hero-img');
  if (heroImg) {
    heroImg.addEventListener('dblclick', (ev) => { spawnMiniConfetti(heroImg); showToast('You found a secret! 💜'); launchFireworks(2); });
    heroImg.addEventListener('click', () => scrollToPolaroids());
  }

  const badge = document.querySelector('.floating-badge');
  if (badge) badge.addEventListener('click', () => scrollToPolaroids());

  const logo = document.querySelector('.logo');
  if (logo) logo.addEventListener('dblclick', () => { showToast('Logo secret! 🎉'); launchFireworks(2); scrollToPolaroids(); });

  // delegated dblclick for clicks that may land on child elements
  document.addEventListener('dblclick', (e) => {
    const h = e.target.closest && e.target.closest('.hero-img');
    const l = e.target.closest && e.target.closest('.logo');
    if (h) { try { spawnMiniConfetti(h); showToast('You found a secret! 💜'); launchFireworks(2); } catch (err) {} }
    if (l) { try { showToast('Logo secret! 🎉'); launchFireworks(2); scrollToPolaroids(); } catch (err) {} }
  });

  // helpful hint so user knows where to try
  setTimeout(() => {
    try { showToast('Hint: double-click the hero photo or logo, or type hana'); } catch (e) {}
  }, 900);
}

// initialize easter eggs when app initializes
try { /* will be called from initApp */ } catch (e) { console.warn('Easter eggs init placeholder', e); }

/* ===== Treasure hunt ===== */
let treasureActive = false;
let treasureStep = 0;
const TREASURE_TARGETS = [
  '.hero-img',        // hero photo
  '.floating-badge',  // floating badge
  '#giftBox',         // gift box
  '#flying-card',     // flying card area
  '#polaroidWall'     // polaroid wall / cards
];

function initTreasureHunt() {
  if (!treasureModal) return;
  // openers: keyboard 'hunt' or double-click footer
  const seq = [];
  const target = ['h','u','n','t'];
  document.addEventListener('keydown', (e) => {
    seq.push(e.key.toLowerCase());
    if (seq.slice(-target.length).join('') === target.join('')) startTreasureHunt();
    if (seq.length > 12) seq.shift();
  });

  const footer = document.querySelector('.footer');
  if (footer) footer.addEventListener('dblclick', startTreasureHunt);

  // modal controls
  if (treasureCloseBtn) treasureCloseBtn.addEventListener('click', stopTreasureHunt);
  if (treasureGiveUpBtn) treasureGiveUpBtn.addEventListener('click', () => {
    showToast('Treasure hunt ended — try again later');
    stopTreasureHunt();
  });

  // global click handler to detect hotspot clicks
  document.addEventListener('click', (e) => {
    if (!treasureActive) return;
    const clicked = e.target;
    const currentSelector = TREASURE_TARGETS[treasureStep];
    if (!currentSelector) return;
    try {
      if (clicked.closest && clicked.closest(currentSelector)) {
        advanceTreasure();
      }
    } catch (err) {}
  });
}

function startTreasureHunt() {
  treasureActive = true; treasureStep = 0;
  if (!treasureModal || !treasureClueEl) return;
  treasureModal.classList.remove('hidden');
  treasureModal.setAttribute('aria-hidden', 'false');
  updateTreasureClue();
  highlightTarget();
}

function stopTreasureHunt() {
  treasureActive = false; treasureStep = 0;
  if (!treasureModal) return;
  treasureModal.classList.add('hidden');
  treasureModal.setAttribute('aria-hidden', 'true');
  clearHighlights();
}

function updateTreasureClue() {
  if (!treasureClueEl) return;
  if (treasureStep >= TREASURE_TARGETS.length) {
    treasureClueEl.textContent = 'Congratulations — you found the treasure! ✨';
    // reward
    spawnMiniConfetti(document.body);
    launchFireworks(6);
    setTimeout(stopTreasureHunt, 2000);
    return;
  }
  const sel = TREASURE_TARGETS[treasureStep];
  treasureClueEl.textContent = `Clue ${treasureStep + 1}: try interacting with something like ${sel.replace('#','').replace('.','')}`;
}

function advanceTreasure() {
  // small celebration for correct click
  showToast('Good job! ✨');
  spawnMiniConfetti(document.body);
  treasureStep++;
  clearHighlights();
  updateTreasureClue();
  highlightTarget();
}

function highlightTarget() {
  clearHighlights();
  if (treasureStep >= TREASURE_TARGETS.length) return;
  const sel = TREASURE_TARGETS[treasureStep];
  try {
    document.querySelectorAll(sel).forEach((el) => {
      el.classList.add('treasure-target', 'treasure-pulse');
    });
  } catch (err) {}
}

function clearHighlights() {
  document.querySelectorAll('.treasure-target').forEach((el) => {
    el.classList.remove('treasure-target', 'treasure-pulse');
  });
}

// wire up treasure init on app start (initialized from initApp)

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

/* ===== Open site (inline script in index.html does the curtain) ===== */
function openSite() {
  if (typeof window.__openCurtain === 'function') {
    window.__openCurtain();
  }
}

function replayOpening() {
  location.reload();
}

/* ===== Candle modal control ===== */
function showCandleModal() {
  const overlay = document.getElementById('candleModalOverlay');
  if (!overlay) return;
  overlay.classList.remove('hidden');
  overlay.setAttribute('aria-hidden', 'false');
  const modal = overlay.querySelector('.candle-modal');
  if (modal) modal.classList.add('pop');
  if (candleEl) candleEl.classList.remove('blown');
  if (candleFlame) { candleFlame.classList.remove('extinguish'); candleFlame.classList.remove('blown'); }
  if (candleSmoke) { candleSmoke.classList.remove('rise'); }
  try { if (candleEl) candleEl.focus(); } catch (e) {}
}

function hideCandleModal() {
  const overlay = document.getElementById('candleModalOverlay');
  if (!overlay) return;
  overlay.classList.add('hidden');
  overlay.setAttribute('aria-hidden', 'true');
}

function blowCandle() {
  if (!candleEl) return;
  if (candleEl.classList.contains('blown')) return;
  // trigger extinguish animation on flame
  if (candleFlame) candleFlame.classList.add('extinguish');
  if (puffSound) puffSound.play().catch(() => {});
  spawnMiniConfetti(candleEl);
  // show smoke shortly after
  setTimeout(() => {
    if (candleSmoke) candleSmoke.classList.add('rise');
    if (candleEl) candleEl.classList.add('blown');
  }, 250);
  // close modal after smoke animation
  setTimeout(() => {
    hideCandleModal();
  }, 1100);
}

/* ===== Build UI ===== */
function buildCards() {
  if (!cardsGrid) return;
  cardsGrid.innerHTML = MEMORY_CARDS.map((card, i) => `
    <div class="flip-card" data-index="${i}" tabindex="0" role="button" aria-label="Flip card: ${card.label}">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <span class="card-icon">${card.icon}</span>
          <span class="card-label">${card.label}</span>
          <span class="card-hint">tap to flip</span>
        </div>
        <div class="flip-card-back">
          <img src="${card.image}" alt="${card.label}" loading="lazy" />
          <p class="card-message">${card.message}</p>
        </div>
      </div>
    </div>
  `).join('');

  cardsGrid.querySelectorAll('.flip-card').forEach((el) => {
    el.addEventListener('click', () => {
      el.classList.toggle('flipped');
      if (el.classList.contains('flipped')) spawnMiniConfetti(el);
    });
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); }
    });
  });
}

function getFilteredPhotos() {
  if (galleryFilter === 'solo') return GALLERY.filter((p) => p.solo);
  if (galleryFilter === 'together') return GALLERY.filter((p) => !p.solo);
  return GALLERY;
}

function buildGallery() {
  if (!galleryMosaic) return;
  const items = getFilteredPhotos();
  galleryMosaic.innerHTML = items.map((item) => {
    const globalIndex = GALLERY.indexOf(item);
    const soloBadge = item.solo ? '<span class="solo-badge">✦ Hana</span>' : '';
    return `
    <div class="gallery-item ${item.span || ''}" data-index="${globalIndex}">
      <img src="${item.src}" alt="${item.caption}" loading="lazy" />
      ${soloBadge}
    </div>
  `;
  }).join('');

  galleryMosaic.querySelectorAll('.gallery-item').forEach((el) => {
    el.addEventListener('click', () => openLightbox(parseInt(el.dataset.index, 10)));
  });
}

function initGalleryFilters() {
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      galleryFilter = btn.dataset.filter;
      buildGallery();
    });
  });
}

function buildPolaroids() {
  const wall = document.getElementById('polaroidWall');
  if (!wall) return;

  const rotations = [-6, 4, -3, 5, -4, 3, -5, 2, -2, 6];
  wall.innerHTML = GALLERY.map((item, i) => {
    const globalIndex = i;
    const rot = rotations[i % rotations.length];
    return `
    <div class="polaroid" style="--rot:${rot}deg" data-index="${globalIndex}">
      <div class="polaroid-img">
        <img src="${item.src}" alt="${item.caption}" loading="lazy" />
      </div>
      <p class="polaroid-cap">${item.caption}</p>
    </div>
  `;
  }).join('');

  wall.querySelectorAll('.polaroid').forEach((el) => {
    el.addEventListener('click', () => openLightbox(parseInt(el.dataset.index, 10)));
  });
}

function buildCompliments() {
  const field = document.getElementById('bubbleField');
  if (!field) return;

  field.innerHTML = COMPLIMENTS.map((text, i) => `
    <button class="compliment-bubble" type="button" data-i="${i}" style="--x:${10 + (i * 7) % 80}%; --y:${15 + (i * 11) % 70}%; --delay:${i * 0.3}s">
      <span class="bubble-inner">?</span>
    </button>
  `).join('');

  field.querySelectorAll('.compliment-bubble').forEach((btn) => {
    btn.addEventListener('click', () => {
      const text = COMPLIMENTS[parseInt(btn.dataset.i, 10)];
      btn.classList.add('popped');
      btn.innerHTML = `<span class="bubble-text">${text}</span>`;
      spawnMiniConfetti(btn);
      setTimeout(() => {
        btn.classList.remove('popped');
        btn.innerHTML = '<span class="bubble-inner">?</span>';
      }, 3500);
    });
  });
}

/* ===== Flying card ===== */
function initFlyingCard() {
  const card = document.getElementById('flyingCard');
  const stage = document.getElementById('flyingStage');
  if (!card || !stage) return;

  card.addEventListener('click', () => {
    if (!cardFlying) flyCardAway();
    else card.classList.toggle('flipped');
  });
}

function flyCardAway() {
  const card = document.getElementById('flyingCard');
  const trail = document.getElementById('windTrail');
  const img = document.getElementById('flyingCardImg');
  if (!card || cardFlying) return;

  cardFlying = true;
  card.classList.remove('flipped', 'fly-left', 'fly-right', 'returning');
  card.classList.add('flying-away');

  if (trail) {
    trail.classList.add('active');
    setTimeout(() => trail.classList.remove('active'), 2000);
  }

  launchConfetti(80);
  showToast('💨 Whoosh! Happy 24 May, Hana!');

  setTimeout(() => {
    card.classList.remove('flying-away');
    card.classList.add('returning');

    flyingCardIndex = (flyingCardIndex + 1) % FLYING_CARD_PHOTOS.length;
    const next = FLYING_CARD_PHOTOS[flyingCardIndex];
    if (img) img.src = next.src;

    setTimeout(() => {
      card.classList.remove('returning');
      cardFlying = false;
    }, 900);
  }, 2600);
}

function buildTimeline() {
  if (!timelineEl) return;
  timelineEl.innerHTML = TIMELINE.map((item) => `
    <div class="timeline-item">
      <strong>${item.title}</strong>
      <span>${item.text}</span>
    </div>
  `).join('');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.2 });

  timelineEl.querySelectorAll('.timeline-item').forEach((el) => observer.observe(el));
}

/* ===== Typewriter ===== */
function initTypewriter() {
  const el = document.getElementById('typewriter');
  let lineIndex = 0;
  let charIndex = 0;
  let current = '';

  function type() {
    const line = TYPEWRITER_LINES[lineIndex];
    if (charIndex < line.length) {
      current += line[charIndex++];
      el.textContent = current;
      setTimeout(type, 45);
    } else {
      setTimeout(() => {
        lineIndex = (lineIndex + 1) % TYPEWRITER_LINES.length;
        charIndex = 0;
        current = '';
        el.textContent = '';
        setTimeout(type, 600);
      }, 2500);
    }
  }

  if (siteOpened) type();
  else {
    const check = setInterval(() => {
      if (siteOpened) { clearInterval(check); type(); }
    }, 200);
  }
}

/* ===== Modals & letter ===== */
function showWish() {
  const wish = WISHES[Math.floor(Math.random() * WISHES.length)];
  modalTitle.textContent = wish.title;
  modalBody.textContent = wish.body;
  modalOverlay.classList.remove('hidden');
  modalOverlay.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modalOverlay.classList.add('hidden');
  modalOverlay.setAttribute('aria-hidden', 'true');
}

function openLetter() {
  letterOverlay.classList.remove('hidden');
  letterOverlay.setAttribute('aria-hidden', 'false');
  setTimeout(() => letterEnvelope.classList.add('open'), 100);
  launchConfetti(60);
}

function closeLetter() {
  letterEnvelope.classList.remove('open');
  letterOverlay.classList.add('hidden');
  letterOverlay.setAttribute('aria-hidden', 'true');
}

/* ===== Lightbox ===== */
function openLightbox(index) {
  lightboxIndex = index;
  updateLightbox();
  lightbox.classList.remove('hidden');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  lightbox.classList.add('hidden');
  lightbox.setAttribute('aria-hidden', 'true');
}

function navigateLightbox(dir) {
  lightboxIndex = (lightboxIndex + dir + GALLERY.length) % GALLERY.length;
  updateLightbox();
}

function updateLightbox() {
  const item = GALLERY[lightboxIndex];
  lightboxImg.src = item.src;
  lightboxImg.alt = item.caption;
  lightboxCaption.textContent = item.caption;
}

/* ===== Gift ===== */
function handleGiftClick() {
  const giftInside = document.getElementById('giftInside');
  giftBox.classList.add('shake');
  setTimeout(() => giftBox.classList.remove('shake'), 500);
  giftClicks++;

  if (giftClicks < 3) {
    if (giftMessage) {
      giftMessage.textContent = GIFT_MESSAGES[giftClicks - 1];
      giftMessage.classList.remove('hidden');
    }
    giftBox.classList.add('peek');
    if (giftClicks === 2 && giftInside) giftInside.classList.add('peek');
  } else {
    giftBox.classList.add('opened', 'peek');
    if (giftInside) giftInside.classList.add('show');
    if (giftMessage) {
      giftMessage.textContent = GIFT_MESSAGES[2];
      giftMessage.classList.add('celebrate');
    }
    launchConfetti(100);
    showToast('🎁 Gift opened! Happy Birthday Hana! 💕');
  }
}

/* ===== Fortune ===== */
function revealFortune(btn) {
  const idx = parseInt(btn.dataset.fortune, 10);
  document.querySelectorAll('.fortune-btn').forEach((b) => b.classList.add('revealed'));
  modalTitle.textContent = 'Your Fortune 🥠';
  modalBody.textContent = FORTUNES[idx];
  modalOverlay.classList.remove('hidden');
}

/* ===== Balloon pop ===== */
function popBalloon(e) {
  const balloon = e.currentTarget;
  if (balloon.classList.contains('popped')) return;
  balloon.classList.add('popped');
  const msg = BALLOON_MESSAGES[Math.floor(Math.random() * BALLOON_MESSAGES.length)];
  showToast(msg);
  spawnMiniConfetti(balloon);
  setTimeout(() => {
    balloon.style.display = 'none';
  }, 400);
}

/* ===== Toast ===== */
function showToast(text) {
  toast.textContent = text;
  toast.classList.remove('hidden');
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.classList.add('hidden'), 400);
  }, 2500);
}

/* ===== Scroll nav ===== */
function initScrollNav() {
  document.querySelectorAll('[data-scroll]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-scroll');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ===== Scratch card ===== */
let scratchCtx = null;
let scratchCanvasEl = null;

function initScratchCard() {
  scratchCanvasEl = document.getElementById('scratchCanvas');
  const resetBtn = document.getElementById('resetScratch');
  const container = document.getElementById('scratchContainer');
  if (!scratchCanvasEl || !resetBtn || !container) return;

  scratchCtx = scratchCanvasEl.getContext('2d');
  if (!scratchCtx) return;

  let drawing = false;

  function sizeAndCover() {
    const w = container.clientWidth || 320;
    const h = 200;
    const dpr = window.devicePixelRatio || 1;

    scratchCanvasEl.width = Math.floor(w * dpr);
    scratchCanvasEl.height = Math.floor(h * dpr);
    scratchCanvasEl.style.width = w + 'px';
    scratchCanvasEl.style.height = h + 'px';

    scratchCtx.setTransform(1, 0, 0, 1, 0, 0);
    scratchCtx.globalCompositeOperation = 'source-over';
    scratchCtx.scale(dpr, dpr);

    const grd = scratchCtx.createLinearGradient(0, 0, w, h);
    grd.addColorStop(0, '#ffb3d9');
    grd.addColorStop(0.35, '#ff85c0');
    grd.addColorStop(0.7, '#ff5cad');
    grd.addColorStop(1, '#ff85c0');
    scratchCtx.fillStyle = grd;
    scratchCtx.fillRect(0, 0, w, h);

    scratchCtx.fillStyle = 'rgba(255, 255, 255, 0.35)';
    for (let i = 0; i < 40; i++) {
      scratchCtx.beginPath();
      scratchCtx.arc(Math.random() * w, Math.random() * h, Math.random() * 2 + 0.5, 0, Math.PI * 2);
      scratchCtx.fill();
    }

    scratchCtx.fillStyle = '#fff';
    scratchCtx.font = 'bold 20px Quicksand, sans-serif';
    scratchCtx.textAlign = 'center';
    scratchCtx.textBaseline = 'middle';
    scratchCtx.fillText('💕 Scratch Here 💕', w / 2, h / 2);
  }

  function scratchAt(x, y) {
    scratchCtx.globalCompositeOperation = 'destination-out';
    scratchCtx.beginPath();
    scratchCtx.arc(x, y, 28, 0, Math.PI * 2);
    scratchCtx.fill();
  }

  function getPos(e) {
    const rect = scratchCanvasEl.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  }

  function start(e) {
    e.preventDefault();
    drawing = true;
    scratchAt(getPos(e).x, getPos(e).y);
  }

  function move(e) {
    if (!drawing) return;
    e.preventDefault();
    const p = getPos(e);
    scratchAt(p.x, p.y);
  }

  function end() { drawing = false; }

  requestAnimationFrame(() => {
    requestAnimationFrame(sizeAndCover);
  });

  const scratchObs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) sizeAndCover();
  }, { threshold: 0.1 });
  scratchObs.observe(container);
  window.addEventListener('resize', sizeAndCover);

  scratchCanvasEl.addEventListener('mousedown', start);
  scratchCanvasEl.addEventListener('mousemove', move);
  scratchCanvasEl.addEventListener('mouseup', end);
  scratchCanvasEl.addEventListener('mouseleave', end);
  scratchCanvasEl.addEventListener('touchstart', start, { passive: false });
  scratchCanvasEl.addEventListener('touchmove', move, { passive: false });
  scratchCanvasEl.addEventListener('touchend', end);

  resetBtn.addEventListener('click', sizeAndCover);
}

/* ===== Confetti ===== */
let confettiParticles = [];
let confettiCtx = null;

function initConfetti() {
  if (!confettiCanvas) return;
  confettiCtx = confettiCanvas.getContext('2d');
  resizeConfetti();
  window.addEventListener('resize', resizeConfetti);
  requestAnimationFrame(confettiLoop);
}

function resizeConfetti() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}

function launchConfetti(count = 100) {
  if (!confettiCanvas || !confettiCtx) return;
  const colors = ['#ff85c0', '#ff5cad', '#ffb3d9', '#ffc0e0', '#ff3d9a', '#fff'];
  for (let i = 0; i < count; i++) {
    confettiParticles.push({
      x: Math.random() * confettiCanvas.width,
      y: -20 - Math.random() * 100,
      vx: (Math.random() - 0.5) * 8,
      vy: Math.random() * 4 + 2,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      spin: (Math.random() - 0.5) * 12,
      shape: Math.random() > 0.5 ? 'rect' : 'circle',
    });
  }
}

function confettiLoop() {
  if (!confettiCtx) return;
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  confettiParticles = confettiParticles.filter((p) => p.y < confettiCanvas.height + 50);

  confettiParticles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.08;
    p.rotation += p.spin;
    confettiCtx.save();
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate((p.rotation * Math.PI) / 180);
    confettiCtx.fillStyle = p.color;
    if (p.shape === 'rect') {
      confettiCtx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
    } else {
      confettiCtx.beginPath();
      confettiCtx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
      confettiCtx.fill();
    }
    confettiCtx.restore();
  });

  requestAnimationFrame(confettiLoop);
}

function spawnMiniConfetti(el) {
  const rect = el.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const colors = ['#ffd700', '#ff6bcb', '#9b59f5'];
  for (let i = 0; i < 25; i++) {
    confettiParticles.push({
      x: cx,
      y: cy,
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.5) * 10 - 3,
      size: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      spin: (Math.random() - 0.5) * 15,
      shape: 'circle',
    });
  }
}

/* ===== Cursor trail ===== */
function initCursorTrail() {
  const trail = document.getElementById('cursorTrail');
  if (!trail) return;

  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouch) return;

  let throttle = 0;

  document.addEventListener('mousemove', (e) => {
    if (!siteOpened) return;
    const now = Date.now();
    if (now - throttle < 40) return;
    throttle = now;

    const dot = document.createElement('div');
    dot.className = 'trail-dot';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    dot.style.background = ['#ffd700', '#ff6bcb', '#9b59f5'][Math.floor(Math.random() * 3)];
    trail.appendChild(dot);
    setTimeout(() => dot.remove(), 800);
  });
}
