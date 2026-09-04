document.getElementById("year").textContent = new Date().getFullYear();

// Team carousel — replace with real names/roles/depts/quotes when available.
const members = [
  { name: "Member One", role: "President", dept: "CSE • E4" },
  { name: "Member Two", role: "Vice President", dept: "ECE • E4" },
  { name: "Member Three", role: "General Secretary", dept: "ME • E3" },
  { name: "Manvitha Kopela", role: "Technical Coordinator", dept: "CSE • E3", quote: "Building solutions for a better student experience." },
  { name: "Member Five", role: "Cultural Secretary", dept: "CE • E3" },
  { name: "Member Six", role: "Sports Secretary", dept: "EEE • E2" },
  { name: "Member Seven", role: "Joint Secretary", dept: "CSE • E2" },
  { name: "Member Eight", role: "Media Coordinator", dept: "ECE • E2" },
  { name: "Member Nine", role: "Event Coordinator", dept: "CSE • E1" },
  { name: "Member Ten", role: "Class Representative", dept: "ME • E1" },
  { name: "Member Eleven", role: "Class Representative", dept: "ECE • E1" },
  { name: "Member Twelve", role: "Class Representative", dept: "CE • E1" },
  { name: "Member Thirteen", role: "Class Representative", dept: "EEE • E1" },
].map(m => ({ quote: "Working towards a stronger student voice.", ...m }));

let current = 3;
const VISIBLE_SIDE = 3;

const stage = document.getElementById('arcStage');
const nameEl = document.getElementById('mName');
const roleEl = document.getElementById('mRole');
const deptEl = document.getElementById('mDept');
const quoteEl = document.getElementById('mQuote');
const counterEl = document.getElementById('counter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function initials(name) {
  return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
}

function renderTeam() {
  stage.innerHTML = '';
  for (let offset = -VISIBLE_SIDE; offset <= VISIBLE_SIDE; offset++) {
    const idx = current + offset;
    if (idx < 0 || idx >= members.length) continue;
    const m = members[idx];
    const card = document.createElement('div');
    card.className = 'arc-card' + (offset === 0 ? ' center' : '');

    const angle = offset * 13;
    const arcX = offset * 72;
    const arcY = Math.abs(offset) * 20;
    const scale = offset === 0 ? 1 : 1 - Math.abs(offset) * 0.12;
    const opacity = offset === 0 ? 1 : 1 - Math.abs(offset) * 0.22;

    card.style.transform =
      `translateX(calc(-50% + ${arcX}px)) translateY(${arcY}px) rotate(${angle}deg) scale(${scale})`;
    card.style.opacity = Math.max(opacity, 0.15);
    card.style.zIndex = 10 - Math.abs(offset);

    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.textContent = initials(m.name);
    card.appendChild(avatar);
    stage.appendChild(card);
  }

  const m = members[current];
  nameEl.textContent = m.name.toUpperCase();
  roleEl.textContent = m.role.toUpperCase();
  deptEl.textContent = m.dept;
  quoteEl.textContent = `“${m.quote}”`;
  counterEl.textContent = `${String(current + 1).padStart(2, '0')} / ${members.length}`;
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === members.length - 1;
}

prevBtn.addEventListener('click', () => { if (current > 0) { current--; renderTeam(); } });
nextBtn.addEventListener('click', () => { if (current < members.length - 1) { current++; renderTeam(); } });

let teamTouchStartX = 0;
stage.addEventListener('touchstart', e => teamTouchStartX = e.touches[0].clientX);
stage.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - teamTouchStartX;
  if (dx > 40 && current > 0) { current--; renderTeam(); }
  else if (dx < -40 && current < members.length - 1) { current++; renderTeam(); }
});

renderTeam();