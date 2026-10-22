const $ = (s) => document.querySelector(s),
  P = $("#phone"),
  A = $("#app");

// ============================================================
// IKON APLIKASI (layar utama & dock)
// ============================================================
const G = (a, b) => `linear-gradient(180deg,${a},${b})`;
const S = (p, z = 34) =>
  `<svg viewBox="0 0 24 24" width="${z}" height="${z}">${p}</svg>`;
const FF = 'font-family="-apple-system,Helvetica,Arial,sans-serif"';
const HP =
  "M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z";
const hd = new Date(),
  DAY = ["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"][hd.getDay()];
const petals = [0, 45, 90, 135, 180, 225, 270, 315]
  .map(
    (r, i) =>
      `<ellipse cx="12" cy="6.4" rx="2.8" ry="4.6" fill="hsl(${i * 45 + 10} 85% 58%)" opacity=".8" transform="rotate(${r} 12 12)"/>`,
  )
  .join("");
const COL = ["#8fa8c8", "#c99aa6", "#9bbd9f", "#d4b483", "#a79bc9"];
const SIL = (b) =>
  `<svg viewBox="0 0 40 40" width="100%" height="100%"><rect width="40" height="40" fill="${b}"/><circle cx="20" cy="15" r="7" fill="#fff" opacity=".92"/><path d="M5 40c0-9 6.5-14 15-14s15 5 15 14z" fill="#fff" opacity=".92"/></svg>`;
const AV = (c, w, x = "") =>
  `<div class="av ${x}" ${c.img || w ? "" : 'style="background:linear-gradient(#a8aab2,#868890)"'}>${c.img ? `<img src="${c.img}" alt="">` : w ? SIL(COL[CHATS.indexOf(c) % 5]) : c.n[0]}</div>`;
const prev = (t) => (t.startsWith("img:") ? "📷 Foto" : t);
const APPS = {
  pesan: [
    "Pesan",
    G("#67f27c", "#0fc232"),
    S(
      '<path fill="#fff" d="M12 4c-4.9 0-9 3.3-9 7.4 0 2.3 1.3 4.3 3.3 5.7-.2 1-.8 2.1-1.6 3 1.7-.1 3.2-.8 4.2-1.5.9.3 2 .4 3.1.4 4.9 0 9-3.3 9-7.6S16.9 4 12 4z"/>',
      38,
    ),
    "msgs()",
  ],
  telepon: [
    "Telepon",
    G("#67f27c", "#0fc232"),
    S(`<path fill="#fff" d="${HP}"/>`, 36),
    "phone()",
  ],
  foto: ["Foto", "#fff", S(petals, 48), "photos()"],
  safari: [
    "Safari",
    G("#5ac8fa", "#0a6bf0"),
    S(
      '<circle cx="12" cy="12" r="9" fill="none" stroke="#fff" stroke-width="1.4"/><path d="M16.5 7.5L13.5 13.5 7.5 16.5 10.5 10.5z" fill="#fff"/><path d="M16.5 7.5L13.5 13.5 10.5 10.5z" fill="#ff3b30"/>',
      40,
    ),
  ],
  kamera: [
    "Kamera",
    G("#b4b4b9", "#5a5a5e"),
    S(
      '<path fill="#fff" d="M8.5 6l1.2-1.8h4.6L15.5 6H18a2.5 2.5 0 0 1 2.5 2.5v8A2.5 2.5 0 0 1 18 19H6a2.5 2.5 0 0 1-2.5-2.5v-8A2.5 2.5 0 0 1 6 6z"/><circle cx="12" cy="12.4" r="3.6" fill="#6b6b70"/><circle cx="12" cy="12.4" r="2.3" fill="#2c2c2e"/>',
      40,
    ),
  ],
  jam: [
    "Jam",
    "#000",
    S(
      '<circle cx="12" cy="12" r="9.6" fill="#fff"/><path d="M12 5v7l4 2.5" stroke="#111" stroke-width="1.6" stroke-linecap="round" fill="none"/><circle cx="12" cy="12" r="1" fill="#ff9f0a"/>',
      44,
    ),
  ],
  cuaca: [
    "Cuaca",
    G("#4aa3ff", "#1c6fe0"),
    S(
      '<circle cx="9" cy="9" r="3.6" fill="#ffd60a"/><path fill="#fff" d="M8 19a3.6 3.6 0 0 1-.3-7.2 5 5 0 0 1 9.6.8A3.2 3.2 0 0 1 16.5 19z"/>',
      44,
    ),
  ],
  catatan: [
    "Catatan",
    "#fff",
    S(
      '<rect width="24" height="8" fill="#ffd60a"/><path d="M5 12.5h14M5 16h14M5 19.5h9" stroke="#d1d1d6" stroke-width="1" fill="none"/>',
      62,
    ),
  ],
  musik: [
    "Musik",
    G("#ff6b8a", "#fa233b"),
    S(
      '<path d="M9.5 17.5V7.2l9-1.7v10" fill="none" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/><circle cx="7.4" cy="17.6" r="2.4" fill="#fff"/><circle cx="16.4" cy="15.9" r="2.4" fill="#fff"/>',
      38,
    ),
  ],
  peta: [
    "Peta",
    G("#8be8b0", "#35b36f"),
    S(
      '<path fill="#fff" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>',
      38,
    ),
  ],
  kalender: [
    "Kalender",
    "#fff",
    S(
      `<text x="12" y="8" text-anchor="middle" font-size="5.2" font-weight="600" fill="#ff3b30" ${FF}>${DAY}</text><text x="12" y="21" text-anchor="middle" font-size="14.5" font-weight="300" fill="#111" ${FF}>${hd.getDate()}</text>`,
      62,
    ),
  ],
  setelan: [
    "Setelan",
    G("#aeaeb3", "#636366"),
    S(
      '<circle cx="12" cy="12" r="8" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="3.14 3.14"/><circle cx="12" cy="12" r="6.2" fill="#fff"/><circle cx="12" cy="12" r="2.6" fill="#75757a"/>',
      40,
    ),
  ],
  kalkulator: [
    "Kalkulator",
    "#1c1c1e",
    S(
      '<circle cx="7.6" cy="7.6" r="3" fill="#a5a5a5"/><circle cx="16.4" cy="7.6" r="3" fill="#ff9f0a"/><circle cx="7.6" cy="16.4" r="3" fill="#505050"/><circle cx="16.4" cy="16.4" r="3" fill="#ff9f0a"/>',
      46,
    ),
  ],
  whatsapp: [
    "WhatsApp",
    G("#4be07d", "#12a84a"),
    S(
      `<path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5z" fill="none" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/><path fill="#fff" transform="translate(7.1 7.1) scale(.41)" d="${HP}"/>`,
      40,
    ),
    "msgs(1)",
  ],
  instagram: [
    "Instagram",
    "radial-gradient(circle at 30% 107%,#fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%)",
    S(
      '<rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="#fff" stroke-width="1.8"/><circle cx="12" cy="12" r="3.7" fill="none" stroke="#fff" stroke-width="1.8"/><circle cx="16.9" cy="7.1" r="1.1" fill="#fff"/>',
      40,
    ),
  ],
  x: [
    "X",
    "#000",
    S(
      '<path d="M5.5 4.5l13 15" stroke="#fff" stroke-width="2.6" fill="none"/><path d="M18.5 4.5l-13 15" stroke="#fff" stroke-width="1.4" fill="none"/>',
      34,
    ),
  ],
};
const mk = (k) => {
  const a = APPS[k];
  return `<div class="ic" ${a[3] ? `onclick="${a[3]}"` : ""}><i style="background:${a[1]}">${a[2]}</i><b class="bd" data-k="${k}"></b><span>${a[0]}</span></div>`;
};
$("#grid").innerHTML = [
  "whatsapp",
  "instagram",
  "x",
  "foto",
  "kamera",
  "kalender",
  "jam",
  "cuaca",
  "catatan",
  "peta",
  "kalkulator",
  "setelan",
]
  .map(mk)
  .join("");
$("#dock").innerHTML = ["telepon", "safari", "pesan", "musik"].map(mk).join("");

const LD = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
  LM = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
function clock() {
  const d = new Date(),
    t = d.getHours() + ":" + String(d.getMinutes()).padStart(2, "0");
  $("#clk").textContent = t;
  $("#lt").textContent = t;
  $("#ld").textContent =
    LD[d.getDay()] + ", " + d.getDate() + " " + LM[d.getMonth()];
}
clock();
setInterval(clock, 10000);

let ac;
function tone(a, b, d = 0.15) {
  try {
    ac = ac || new (window.AudioContext || window.webkitAudioContext)();
    if (ac.resume) ac.resume();
    const g = ac.createGain();
    g.gain.value = 0.12;
    g.connect(ac.destination);
    [a, b].forEach((f) => {
      if (!f) return;
      const o = ac.createOscillator();
      o.frequency.value = f;
      o.connect(g);
      o.start();
      o.stop(ac.currentTime + d);
    });
  } catch (e) {}
}

let timers = [];
const clr = () => {
  timers.forEach((t) => {
    clearInterval(t);
    clearTimeout(t);
  });
  timers = [];
};
function open(dark) {
  clr();
  CUR = null;
  P.classList.remove("wa");
  A.className = "";
  P.classList.add("app");
  P.classList.toggle("dark", !!dark);
  $("#view").classList.remove("on");
}
function goHome() {
  clr();
  CUR = null;
  P.classList.remove("app", "dark", "wa");
  $("#view").classList.remove("on");
}
$("#hb").onclick = () => (P.classList.contains("lk") ? showPin() : goHome());

// ============================================================
// PESAN & WHATSAPP (daftar chat + percakapan)
// ============================================================
let SK = 0;
const esc = (t) =>
  t.replace(/[&<>]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[m]);
const pad2 = (n) => String(n).padStart(2, "0"),
  tmf = (d) => pad2(d.getHours()) + "." + pad2(d.getMinutes());
const fm = (m) => {
  m = ((m % 1440) + 1440) % 1440;
  return pad2((m / 60) | 0) + "." + pad2(m % 60);
};
const WT = ["09.12", "Kemarin", "08.30", "Selasa", "Senin"];
const TK =
  '<svg viewBox="0 0 18 11" width="15" height="10"><path d="M1 5.8l3 3L10 1.5M7 8.2l1 .9L16.5 1.5" fill="none" stroke="#53bdeb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const SV = (
  p,
  z = 22,
  x = 'fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"',
) => `<svg viewBox="0 0 24 24" width="${z}" height="${z}" ${x}>${p}</svg>`;
const CAMP =
  '<path d="M8.5 6l1.2-1.8h4.6L15.5 6H18a2.5 2.5 0 0 1 2.5 2.5v8A2.5 2.5 0 0 1 18 19H6a2.5 2.5 0 0 1-2.5-2.5v-8A2.5 2.5 0 0 1 6 6z"/><circle cx="12" cy="12.4" r="3.4"/>';
const WI = {
  dots: SV(
    '<circle cx="5.5" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="18.5" cy="12" r="1.8"/>',
    20,
    'fill="currentColor"',
  ),
  cam: SV(CAMP),
  cam2: SV(CAMP, 14),
  add: SV(
    '<path d="M12 5v14M5 12h14"/>',
    20,
    'fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"',
  ),
  plus: SV(
    '<path d="M12 5v14M5 12h14"/>',
    20,
    'fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"',
  ),
  search: SV(
    '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M16 16l4.5 4.5"/>',
    18,
    'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"',
  ),
  back: '<svg viewBox="0 0 12 22" width="13" height="22" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2L2 11l8 9"/></svg>',
  vid: SV(
    '<rect x="2.5" y="6.5" width="12.5" height="11" rx="2.8"/><path d="M15 11l6-3.2v8.4l-6-3.2z"/>',
    26,
  ),
  tel: SV(`<path d="${HP}"/>`, 24),
  mic: SV(
    '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/>',
  ),
  send: SV(
    '<path d="M12 19V6M6.5 11.5L12 6l5.5 5.5"/>',
    20,
    'fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"',
  ),
  t1: SV(
    '<circle cx="12" cy="12" r="8.5" stroke-dasharray="3.2 2.3"/><circle cx="12" cy="12" r="3.2"/>',
    24,
  ),
  t2: SV(`<path d="${HP}"/>`, 24),
  t3: SV(
    '<circle cx="9" cy="9" r="3"/><path d="M3.5 19c0-3.2 2.4-5 5.5-5s5.5 1.8 5.5 5"/><circle cx="17" cy="9.5" r="2.4"/><path d="M16.500 14.200c2.600 0 4.500 1.500 4.500 4.300"/>',
    24,
  ),
  t4: SV(
    '<path fill="currentColor" d="M12 4c-4.9 0-9 3.3-9 7.4 0 2.3 1.3 4.3 3.3 5.7-.2 1-.8 2.1-1.6 3 1.7-.1 3.2-.8 4.2-1.5.9.3 2 .4 3.1.4 4.9 0 9-3.3 9-7.6S16.9 4 12 4z"/>',
    24,
  ),
  t5: SV(
    '<circle cx="12" cy="12" r="7.5" stroke-dasharray="3 3"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="2.2"/>',
    24,
  ),
};
const tabbar = (n) =>
  `<div class="wtab">${[
    ["Pembaruan", WI.t1],
    ["Panggilan", WI.t2],
    ["Komunitas", WI.t3],
    ["Chat", WI.t4, 1],
    ["Setelan", WI.t5],
  ]
    .map(
      ([l, s, on]) =>
        `<div class="${on ? "on" : ""}">${s}${on && n ? `<b class="tb">${n}</b>` : ""}<span>${l}</span></div>`,
    )
    .join("")}</div>`;
function msgs(w) {
  open();
  SK = w ? 1 : 0;
  BD[w ? "whatsapp" : "pesan"] = 0;
  badge(w ? "whatsapp" : "pesan");
  if (!w) {
    A.innerHTML = `<div class="hd"><a onclick="goHome()">‹ Beranda</a><b>Pesan</b><span></span></div><div class="big">Pesan</div><div class="list">${CHATS.map((c, i) => `<div class="row" onclick="thread(${i})">${AV(c, 0)}<div><b>${c.n}</b><small>${esc(prev(c.m[c.m.length - 1][1]))}</small></div></div>`).join("")}</div>`;
    return;
  }
  A.className = "wa";
  P.classList.add("wa");
  const tot = CHATS.reduce((a, c) => a + (c.u || 0), 0);
  A.innerHTML = `<div class="wt"><i class="wc">${WI.dots}</i><span class="wr"><i class="wc">${WI.cam}</i><i class="wc wg">${WI.add}</i></span></div><div class="wtt">Chat</div><div class="sr">${WI.search}<span>Tanya Meta AI atau Cari</span></div><div class="ch"><span class="on">Semua</span><span>Belum dibaca</span><span>Favorit</span><span>Grup</span></div><div class="wl">${CHATS.map(
    (c, i) => {
      const L = c.m[c.m.length - 1],
        im = L[1].startsWith("img:"),
        u = c.u || 0;
      return `<div class="wrow" onclick="thread(${i})">${AV(c, 1)}<div class="wx"><b>${c.n}</b><em class="${u ? "u" : ""}">${c.t || WT[i]}</em><p>${L[0] === "out" ? TK : ""}${im ? WI.cam2 + " Foto" : esc(L[1])}</p>${u ? `<span class="nb">${u}</span>` : "<span></span>"}</div></div>`;
    },
  ).join("")}</div>${tabbar(tot)}`;
}
function thread(i) {
  const c = CHATS[i],
    wa = SK;
  c.u = 0;
  const head = wa
    ? `<div class="wh"><a class="wbk" onclick="msgs(1)">${WI.back}</a>${AV(c, 1, "sm")}<div class="wn"><b>${c.n}</b><small>online</small></div><span class="wi">${WI.vid}${WI.tel}</span></div>`
    : `<div class="hd"><a onclick="msgs(0)">‹ Pesan</a><b class="hn">${c.n}</b><span></span></div>`;
  const inp = wa
    ? `<div class="inp"><button class="wp">${WI.plus}</button><div class="fld"><input id="ti" placeholder="Pesan"></div><span class="wm">${WI.cam}${WI.mic}</span><button id="sd">${WI.send}</button></div>`
    : `<div class="inp"><input id="ti" placeholder="iMessage"><button id="sd">↑</button></div>`;
  A.innerHTML = head + '<div class="bs" id="bs"></div>' + inp;
  CUR = { k: wa ? "whatsapp" : "pesan", i };
  const bs = $("#bs");
  const add = (t, w, tm) => {
    const d = document.createElement("div");
    d.className = "b " + w;
    if (t.startsWith("img:")) {
      d.classList.add("img");
      d.style.backgroundImage = pic(+t.slice(4));
    } else d.append(document.createTextNode(t));
    if (wa) {
      const m = document.createElement("span");
      m.className = "mt";
      m.innerHTML = (tm || tmf(new Date())) + (w === "out" ? " " + TK : "");
      d.append(m);
    }
    bs.append(d);
    bs.scrollTop = bs.scrollHeight;
  };
  window.addB = add;
  if (wa) bs.insertAdjacentHTML("beforeend", '<div class="dc">Hari ini</div>');
  const nw = new Date(),
    base = nw.getHours() * 60 + nw.getMinutes() - c.m.length * 2;
  c.m.forEach(([w, t], n) => add(t, w, fm(base + n * 2)));
  const send = () => {
    const v = $("#ti").value.trim();
    if (!v) return;
    add(v, "out");
    c.m.push(["out", v]);
    c.t = tmf(new Date());
    $("#ti").value = "";
    $(".inp").classList.remove("tx");
    tone(1200, 0, 0.08);
    const k = wa ? "whatsapp" : "pesan";
    setTimeout(
      () => incoming(k, i, REPLY[(Math.random() * REPLY.length) | 0]),
      1200,
    );
  };
  $("#sd").onclick = send;
  $("#ti").onkeydown = (e) => {
    if (e.key === "Enter") send();
  };
  $("#ti").oninput = () =>
    $(".inp").classList.toggle("tx", !!$("#ti").value.trim());
}

// ============================================================
// TELEPON (keypad + panggilan)
// ============================================================
const DT = {
  1: [697, 1209],
  2: [697, 1336],
  3: [697, 1477],
  4: [770, 1209],
  5: [770, 1336],
  6: [770, 1477],
  7: [852, 1209],
  8: [852, 1336],
  9: [852, 1477],
  "*": [941, 1209],
  0: [941, 1336],
  "#": [941, 1477],
};
const SUB = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};
let dialed = "";
function phone() {
  open();
  A.innerHTML = `<div class="hd"><a onclick="goHome()">‹ Beranda</a><b>Telepon</b><span></span></div><div class="dial"><div id="num">${dialed}</div><div class="keys">${Object.keys(
    DT,
  )
    .map(
      (k) =>
        `<button class="k" data-k="${k}">${k}<small>${SUB[k] || ""}</small></button>`,
    )
    .join(
      "",
    )}<span></span><button class="cbtn" id="cb">📞</button><button class="bk" id="bk">⌫</button></div></div>`;
  A.querySelectorAll(".k").forEach(
    (b) =>
      (b.onclick = () => {
        const k = b.dataset.k;
        dialed += k;
        $("#num").textContent = dialed;
        tone(...DT[k]);
      }),
  );
  $("#bk").onclick = () => {
    dialed = dialed.slice(0, -1);
    $("#num").textContent = dialed;
  };
  $("#cb").onclick = () => call(dialed);
}
function call(n) {
  open(true);
  A.innerHTML = `<div class="call"><div class="av">${SIL("#8e8e93")}</div><h2>${n || "Nomor tidak dikenal"}</h2><p id="cs">memanggil…</p><button class="end" id="en">📞</button></div>`;
  const ring = () => {
    tone(440, 480, 1);
  };
  ring();
  const r = setInterval(ring, 3000);
  timers.push(r);
  timers.push(
    setTimeout(() => {
      clearInterval(r);
      let s = 0;
      const cs = $("#cs");
      if (!cs) return;
      cs.textContent = "00:00";
      timers.push(
        setInterval(() => {
          s++;
          cs.textContent =
            String((s / 60) | 0).padStart(2, "0") +
            ":" +
            String(s % 60).padStart(2, "0");
        }, 1000),
      );
    }, 6500),
  );
  $("#en").onclick = () => {
    tone(480, 620, 0.4);
    dialed = "";
    phone();
  };
}

// ============================================================
// FOTO (galeri)
// ============================================================
const scene = (i) => {
  const h = (i * 37) % 360,
    r = (i * 53) % 100;
  const v = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 160" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(${h},70%,${60 + (r % 15)}%)"/><stop offset="1" stop-color="hsl(${(h + 40) % 360},80%,82%)"/></linearGradient></defs><rect width="120" height="160" fill="url(#g)"/><circle cx="${30 + r}" cy="${35 + (r % 30)}" r="${9 + (r % 8)}" fill="#fff" opacity=".85"/><path d="M0 120Q30 ${90 + (r % 20)} 60 115T120 105V160H0z" fill="hsl(${(h + 120) % 360},35%,35%)"/><path d="M0 140Q40 ${115 + (r % 15)} 80 138T120 130V160H0z" fill="hsl(${(h + 150) % 360},40%,22%)"/></svg>`;
  return "url('data:image/svg+xml," + encodeURIComponent(v) + "')";
};
const pic = (i) =>
  PHOTOS.length ? `url(${PHOTOS[i % PHOTOS.length]})` : scene(i);
function photos() {
  open();
  const n = PHOTOS.length || 36;
  A.innerHTML = `<div class="hd"><a onclick="goHome()">‹ Beranda</a><b>Foto</b><span></span></div><div class="ph">${Array.from({ length: n }, (_, i) => `<div data-i="${i}" style="background-image:${pic(i)}"></div>`).join("")}</div>`;
  A.querySelectorAll(".ph div").forEach(
    (d) =>
      (d.onclick = () => {
        $("#vi").style.backgroundImage = pic(+d.dataset.i);
        $("#view").classList.add("on");
      }),
  );
}
$("#vb").onclick = () => $("#view").classList.remove("on");
// ============================================================
// NOTIFIKASI (banner + badge)
// ============================================================
const BD = { pesan: 0, whatsapp: 0 };
let CUR = null,
  ntT;
function badge(k) {
  document.querySelectorAll('.bd[data-k="' + k + '"]').forEach((e) => {
    e.textContent = BD[k];
    e.style.display = BD[k] ? "block" : "none";
  });
}
function ding() {
  tone(1175, 0, 0.1);
  setTimeout(() => tone(1568, 0, 0.1), 120);
  setTimeout(() => tone(1319, 0, 0.2), 240);
  try {
    navigator.vibrate && navigator.vibrate([60, 40, 60]);
  } catch (e) {}
}
function incoming(k, i, t) {
  const c = CHATS[i];
  c.m.push(["in", t]);
  c.t = tmf(new Date());
  if (P.classList.contains("lk")) {
    c.u = (c.u || 0) + 1;
    BD[k]++;
    badge(k);
    ding();
    addLN(k, i, t);
    return;
  }
  if (CUR && CUR.k === k && CUR.i === i && P.classList.contains("app")) {
    window.addB(t, "in");
    tone(880, 0, 0.12);
    return;
  }
  c.u = (c.u || 0) + 1;
  BD[k]++;
  badge(k);
  ding();
  const a = APPS[k],
    n = $("#nt");
  n.innerHTML =
    '<i class="ni" style="background:' +
    a[1] +
    '">' +
    a[2] +
    "</i><div><b></b><span></span></div><small>sekarang</small>";
  n.querySelector("b").textContent = c.n;
  n.querySelector("span").textContent = prev(t);
  n.onclick = () => {
    n.classList.remove("on");
    msgs(k === "whatsapp" ? 1 : 0);
    thread(i);
  };
  n.classList.add("on");
  clearTimeout(ntT);
  ntT = setTimeout(() => n.classList.remove("on"), 3500);
}
INCOMING.forEach(([sec, k, i, t]) =>
  setTimeout(() => incoming(k, i, t), sec * 1000),
);
addEventListener(
  "pointerdown",
  () => {
    try {
      tone(0, 0, 0.01);
    } catch (e) {}
  },
  { once: true },
);
try {
  navigator.getBattery &&
    navigator.getBattery().then((b) => {
      const f = () =>
        $("#bf").setAttribute("width", Math.max(2, Math.round(b.level * 18)));
      f();
      b.onlevelchange = f;
    });
} catch (e) {}
// ============================================================
// LOCKSCREEN & PIN
// ============================================================
let pin = "",
  GO = null;
function dots() {
  document
    .querySelectorAll("#pd i")
    .forEach((d, n) => d.classList.toggle("f", n < pin.length));
  $("#pcn").textContent = pin.length ? "Hapus" : "Batal";
}
function lock() {
  clr();
  CUR = null;
  P.classList.remove("app", "dark", "wa");
  $("#view").classList.remove("on");
  $("#nt").classList.remove("on");
  P.classList.add("lk");
  $("#lock").classList.remove("off", "pn");
  pin = "";
  dots();
}
function showPin() {
  if (!P.classList.contains("lk")) return;
  $("#lock").classList.add("pn");
  pin = "";
  dots();
  $("#pt").textContent = "Masukkan Kode Sandi";
}
function unlock() {
  P.classList.remove("lk");
  $("#lock").classList.add("off");
  $("#ln").innerHTML = "";
  if (GO) {
    const g = GO;
    GO = null;
    msgs(g.w);
    thread(g.i);
  }
}
function pinKey(k) {
  if (pin.length >= 4) return;
  pin += k;
  tone(...DT[k]);
  dots();
  if (pin.length === 4)
    setTimeout(() => {
      if (pin === PIN) unlock();
      else {
        $("#pd").classList.add("sk");
        $("#pt").textContent = "Kode sandi salah, coba lagi";
        tone(300, 0, 0.25);
        setTimeout(() => {
          $("#pd").classList.remove("sk");
          pin = "";
          dots();
          $("#pt").textContent = "Masukkan Kode Sandi";
        }, 700);
      }
    }, 150);
}
function addLN(k, i, t) {
  const a = APPS[k],
    c = CHATS[i],
    d = document.createElement("div");
  d.className = "lc";
  d.innerHTML =
    '<i class="ni" style="background:' +
    a[1] +
    '">' +
    a[2] +
    "</i><div><b></b><span></span></div><small>sekarang</small>";
  d.querySelector("b").textContent = c.n;
  d.querySelector("span").textContent = prev(t);
  d.onclick = (e) => {
    e.stopPropagation();
    GO = { w: k === "whatsapp" ? 1 : 0, i };
    showPin();
  };
  const L = $("#ln");
  L.prepend(d);
  while (L.children.length > 6) L.lastChild.remove();
}
$("#pk").innerHTML = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, ""]
  .map((k) =>
    k === ""
      ? "<span></span>"
      : `<button class="pb" data-k="${k}">${k}<small>${SUB[k] || ""}</small></button>`,
  )
  .join("");
document.querySelectorAll(".pb").forEach(
  (b) =>
    (b.onclick = (e) => {
      e.stopPropagation();
      pinKey(b.dataset.k);
    }),
);
$("#pcn").onclick = (e) => {
  e.stopPropagation();
  if (pin.length) {
    pin = pin.slice(0, -1);
    dots();
  } else {
    LK.classList.remove("pn");
    GO = null;
  }
};
let y0 = 0;
const LK = $("#lock");
LK.addEventListener("pointerdown", (e) => {
  y0 = e.clientY;
});
LK.addEventListener("pointerup", (e) => {
  if (
    !LK.classList.contains("pn") &&
    (y0 - e.clientY > 50 || Math.abs(y0 - e.clientY) < 6)
  )
    showPin();
});
$("#isl").onclick = lock;
addEventListener("keydown", (e) => {
  if (e.target.tagName === "INPUT") return;
  if (P.classList.contains("lk")) {
    if (!LK.classList.contains("pn")) {
      if (e.key === "Enter" || e.key === " ") showPin();
    } else if (/^\d$/.test(e.key)) pinKey(e.key);
    else if (e.key === "Backspace") {
      pin = pin.slice(0, -1);
      dots();
    }
  } else if (e.key === "l" || e.key === "L") lock();
});
lock();
function fit() {
  if (matchMedia("(max-width:700px),(pointer:coarse)").matches) {
    P.style.transform = "";
    return;
  }
  P.style.transform =
    "scale(" + Math.min(innerHeight / 880, innerWidth / 420) + ")";
}
fit();
addEventListener("resize", fit);
addEventListener("keydown", (e) => {
  if (e.key === "Escape") goHome();
});
