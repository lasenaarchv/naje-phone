/* ====== DATA: ganti sesuai keinginan ====== */
// img: link/nama file foto profil (opsional), contoh {n:"Mama",img:"mama.jpg",...}. Pesan foto: ["in","img:3"] (angka = urutan foto di galeri)
const CHATS = [
  {
    n: "Mama",
    e: "👩",
    m: [
      ["in", "Nak udah makan belum?"],
      ["out", "Udah ma, tadi di kantin"],
      ["in", "Jangan lupa pulang bawa titipan ya"],
      ["out", "Siap ma 👍"],
      ["in", "Hati-hati di jalan"],
    ],
  },
  {
    n: "Bestie",
    e: "😎",
    m: [
      ["in", "Eh jadi nonton nanti malem?"],
      ["out", "Jadi dong, jam berapa?"],
      ["in", "Jam 7 di mall ya"],
      ["out", "Oke aku jemput"],
      ["in", "Yeay, makasih!! 🥳"],
      ["in", "Jangan telat lho"],
      ["in", "img:6"],
    ],
  },
  {
    n: "Kantor",
    e: "💼",
    u: 2,
    m: [
      ["in", "Meeting dimajuin jam 10 ya"],
      ["out", "Oke noted, aku siapin materinya"],
      ["in", "Sip, kirim ke grup sebelum jam 9"],
    ],
  },
  {
    n: "Kak Dina",
    e: "👧",
    m: [
      ["in", "Foto kemarin udah kamu kirim belum?"],
      ["out", "Belum kak, bentar lagi"],
      ["out", "img:12"],
      ["in", "Okeee ditunggu 📸"],
    ],
  },
  {
    n: "Ojek Online",
    e: "🛵",
    m: [
      ["in", "Halo kak, saya sudah di depan"],
      ["out", "Iya pak, sebentar saya turun"],
    ],
  },
];
const REPLY = [
  "Oke siap!",
  "Haha iya bener 😂",
  "Nanti kabarin ya",
  "Wkwk gas",
  "Noted 👍",
  "Sebentar ya",
];
const PIN = "2304"; // kode sandi (4 angka)
const INCOMING = [
  // [detik setelah halaman dibuka, aplikasi ("whatsapp"/"pesan"), nomor chat di CHATS (mulai 0), isi pesan]
  [8, "whatsapp", 1, "Eh udah sampe belum? 😅"],
  [22, "pesan", 0, "Nak, jangan lupa makan ya"],
  [38, "whatsapp", 2, "Materinya udah dikirim belum?"],
  [58, "whatsapp", 3, "Kak, fotonya mana? 📸"],
  [72, "whatsapp", 1, "img:9"],
];
const PHOTOS = []; // isi link/nama file foto sendiri, misal ["foto1.jpg","foto2.jpg"]. Kosong = pakai gradien.
/* ========================================= */
