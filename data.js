/*
  DATA PORTOFOLIO ZAFRAN
  ----------------------
  Edit file ini untuk mengubah isi website. Simpan, lalu refresh browser.

  profile  : data diri. photo = foto kartu, heroPhoto = foto besar di hero, cardImage = desain depan kartu dari Canva (taruh file di folder assets/).
  entries  : semua jejak. Tiap jejak:
    type   : "project" | "achievement" | "cert" | "tool" | "prog" (bahasa pemrograman) | "skill" | "language" (bahasa komunikasi) | "org" | "note"
    title  : judul
    date   : tanggal "YYYY-MM-DD" (dipakai untuk mengelompokkan per semester)
    desc   : cerita lengkap (boleh pakai \n untuk baris baru)
    tags   : ["tag1","tag2"]
    link   : "https://..." (opsional)
    image  : "nama-file.webp" di folder assets/ (opsional)
    level  : 1-5, khusus skill dan language
    scope  : tingkat achievement: "kampus" | "regional" | "nasional" | "internasional"
    example: true = diberi label "Contoh". Hapus atau ganti ke false untuk jejak asli.
*/
window.PORTFOLIO_DATA = {
  "profile": {
    "name": "Zafran",
    "fullName": "Zafran Ali Ihsan Nasution",
    "role": "Penggiat Robotika & AI/ML",
    "bio": "Mahasiswa Ilmu Komputer yang suka robotika dan AI/ML: dari ngoprek Arduino sampai melatih model. Setiap project, pencapaian, dan tools baru kucatat di sini sampai hari wisuda.",
    "cardTag": "JUNIOR",
    "cardBig": "DEVELOPER",
    "nim": "261401071",
    "prodi": "Computer Science",
    "campus": "Universitas Sumatera Utara",
    "angkatan": 2026,
    "target": "2030-08",
    "instagram": "",
    "tiktok": "",
    "github": "",
    "linkedin": "",
    "email": "",
    "photo": "card.webp",
    "heroPhoto": "hero.webp",
    "cardImage": "card-design.webp",
    "roleEn": "Robotics & AI/ML Enthusiast",
    "bioEn": "Computer Science student into robotics and AI/ML, from tinkering with Arduino to training models. Every project, achievement and new tool gets logged here until graduation day.",
    "base": "Medan, Sumatera Utara",
    "aboutMotto": "Rakit dulu, sempurnakan kemudian.",
    "aboutMottoEn": "Build it first, refine it later.",
    "aboutMottoSub": "Memulai dengan prototipe sederhana lebih berharga daripada menunggu rencana yang sempurna.",
    "aboutMottoSubEn": "Starting with a simple prototype is worth more than waiting for a perfect plan.",
    "aboutStory": "Saya Zafran Ali Ihsan Nasution, mahasiswa *Ilmu Komputer* Universitas Sumatera Utara angkatan 2026 dengan minat utama di *robotika* dan *kecerdasan buatan*. Saya tertarik pada titik temu antara perangkat lunak dan dunia fisik: bagaimana sebuah sistem dapat membaca lingkungannya melalui sensor, mengolah data, lalu mengambil keputusan secara mandiri. Saat ini saya membangun fondasi lewat pemrograman *C++* dan *Python*, eksperimen mikrokontroler dengan *Arduino*, serta mempelajari dasar-dasar *machine learning*. Saya percaya cara terbaik untuk memahami teknologi adalah dengan membangunnya sendiri, mengujinya, lalu memperbaikinya berulang kali. Ke depan, saya ingin mengembangkan sistem robotik cerdas yang memberi manfaat nyata, dan portofolio ini adalah catatan terbuka dari setiap langkah menuju ke sana.",
    "aboutStoryEn": "I am Zafran Ali Ihsan Nasution, a *Computer Science* student at Universitas Sumatera Utara (class of 2026) whose main interests are *robotics* and *artificial intelligence*. I am drawn to the point where software meets the physical world: how a system can read its surroundings through sensors, process that data and make decisions on its own. Right now I am building my foundation through *C++* and *Python*, microcontroller experiments with *Arduino*, and the fundamentals of *machine learning*. I believe the best way to understand technology is to build it, test it and improve it again and again. Going forward, I want to develop intelligent robotic systems that create real value, and this portfolio is an open record of every step along the way.",
    "aboutParts": "FOKUS 01 | Robotika & sistem tertanam | Merancang sistem yang menghubungkan sensor, mikrokontroler, dan aktuator agar perangkat dapat bekerja secara mandiri.\nFOKUS 02 | AI & Machine Learning | Mempelajari cara membangun model yang belajar dari data, mulai dari regresi dan klasifikasi hingga computer vision.\nPENDEKATAN | Belajar lewat membangun | Setiap konsep baru langsung saya uji lewat prototipe kecil, sehingga pemahaman tidak berhenti di teori.\nTOOLKIT | C++, Python, Arduino | Bahasa dan alat utama yang saya gunakan saat ini, dan akan terus bertambah seiring perjalanan studi.\nTUJUAN | Teknologi yang berdampak | Mengembangkan sistem robotik cerdas yang menyelesaikan masalah nyata di sekitar saya.",
    "aboutPartsEn": "FOCUS 01 | Robotics & embedded systems | Designing systems that connect sensors, microcontrollers and actuators so devices can operate on their own.\nFOCUS 02 | AI & Machine Learning | Learning to build models that learn from data, from regression and classification to computer vision.\nAPPROACH | Learning by building | I test every new concept with a small prototype so understanding does not stop at theory.\nTOOLKIT | C++, Python, Arduino | The languages and tools I use today, a list that will keep growing throughout my studies.\nGOAL | Technology with impact | Developing intelligent robotic systems that solve real problems around me.",
    "aboutLaws": "Belajar dengan membangun | Konsep baru langsung saya uji lewat project kecil agar tidak berhenti di teori.\nIterasi tanpa takut gagal | Setiap error adalah data. Rakit, uji, evaluasi, lalu perbaiki.\nDokumentasi dan berbagi | Proses dicatat dengan rapi supaya bisa dipelajari ulang dan bermanfaat bagi orang lain.",
    "aboutLawsEn": "Learn by building | I test new concepts through small projects so they do not stay theoretical.\nIterate without fear of failure | Every error is data. Build, test, evaluate, then improve.\nDocument and share | I keep clear notes on the process so it can be revisited and help others."
  },
  "entries": [
    {
      "id": "p1",
      "type": "project",
      "title": "Web Portofolio Jejak Karier",
      "date": "2026-11-09",
      "desc": "Website portofolio pribadi untuk mencatat semua jejak kuliah dari maba sampai wisuda. Dirancang dari sketsa tangan sendiri: hero dengan foto di depan tulisan besar, kartu identitas yang melayang, dan carousel project.\n\nYang dipelajari: menyusun layout dari sketsa, animasi sederhana, dan menyimpan data supaya bisa diisi terus.",
      "tags": [
        "web",
        "portofolio",
        "desain"
      ],
      "link": "",
      "example": true
    },
    {
      "id": "p2",
      "type": "project",
      "title": "Desain Ulang Aplikasi Jadwal Kuliah",
      "date": "2026-10-18",
      "desc": "Prototipe Figma untuk aplikasi jadwal kuliah yang lebih ringkas: jadwal hari ini, tugas mendekat, dan ruang kelas dalam satu layar.",
      "tags": [
        "figma",
        "ui/ux"
      ],
      "link": "",
      "example": true
    },
    {
      "id": "p3",
      "type": "project",
      "title": "Landing Page Himpunan Mahasiswa",
      "date": "2026-09-27",
      "desc": "Halaman informasi kegiatan himpunan untuk mahasiswa baru, dibuat dengan HTML dan CSS bersama dua teman satu kelompok.",
      "tags": [
        "html",
        "css",
        "tim"
      ],
      "link": "",
      "example": true
    },
    {
      "id": "p4",
      "type": "project",
      "title": "Bot Pengingat Tugas Kelas",
      "date": "2026-11-02",
      "desc": "Bot sederhana yang mengirim pengingat tenggat tugas ke grup kelas setiap malam.",
      "tags": [
        "javascript",
        "otomasi"
      ],
      "link": "",
      "example": true
    },
    {
      "id": "a1",
      "scope": "kampus",
      "type": "achievement",
      "title": "Juara 2 Lomba Poster Digital PKKMB",
      "date": "2026-08-25",
      "desc": "Poster bertema kampus hijau, dikerjakan dalam 2 hari dengan Canva dan Figma.",
      "tags": [
        "lomba",
        "desain"
      ],
      "link": "",
      "example": true
    },
    {
      "id": "a2",
      "scope": "regional",
      "type": "achievement",
      "title": "Top 10 Hackathon Mahasiswa Baru",
      "date": "2026-10-25",
      "desc": "Membuat prototipe aplikasi titip jajan antar fakultas dalam 24 jam bersama tim.",
      "tags": [
        "hackathon",
        "tim"
      ],
      "link": "",
      "example": true
    },
    {
      "id": "c1",
      "type": "cert",
      "title": "Sertifikat Dasar Pemrograman Web",
      "date": "2026-10-05",
      "desc": "Kursus daring HTML, CSS, dan JavaScript dasar, 40 jam belajar.",
      "tags": [
        "kursus"
      ],
      "link": "",
      "example": true
    },
    {
      "id": "t1",
      "type": "tool",
      "title": "VS Code",
      "date": "2026-08-20",
      "desc": "Editor utama untuk ngoding tugas dan project.",
      "tags": [],
      "link": "",
      "example": true
    },
    {
      "id": "t2",
      "type": "tool",
      "title": "Google Colab",
      "date": "2026-09-02",
      "desc": "Mencoba notebook machine learning tanpa perlu GPU sendiri.",
      "tags": [],
      "link": "",
      "example": true,
      "image": null
    },
    {
      "id": "t3",
      "type": "tool",
      "title": "GitHub",
      "date": "2026-09-10",
      "desc": "Menyimpan kode dan belajar kerja tim dengan Git.",
      "tags": [],
      "link": "",
      "example": true
    },
    {
      "id": "t4",
      "type": "tool",
      "title": "Canva",
      "date": "2026-08-22",
      "desc": "Poster, presentasi, dan konten media sosial.",
      "tags": [],
      "link": "",
      "example": true
    },
    {
      "id": "t5",
      "type": "tool",
      "title": "Notion",
      "date": "2026-09-15",
      "desc": "Catatan kuliah dan daftar tugas.",
      "tags": [],
      "link": "",
      "example": true
    },
    {
      "id": "s1",
      "type": "skill",
      "title": "Pemrograman mikrokontroler",
      "date": "2026-09-01",
      "desc": "Membaca sensor dan menggerakkan aktuator dengan Arduino.",
      "tags": [],
      "level": 2,
      "link": "",
      "example": true,
      "image": null
    },
    {
      "id": "s2",
      "type": "skill",
      "title": "Dasar machine learning",
      "date": "2026-09-20",
      "desc": "Regresi, klasifikasi, dan evaluasi model sederhana.",
      "tags": [],
      "level": 1,
      "link": "",
      "example": true,
      "image": null
    },
    {
      "id": "s3",
      "type": "skill",
      "title": "Elektronika dasar",
      "date": "2026-09-05",
      "desc": "Rangkaian, breadboard, dan membaca skema.",
      "tags": [],
      "level": 2,
      "link": "",
      "example": true,
      "image": null
    },
    {
      "id": "l1",
      "type": "language",
      "title": "Bahasa Inggris",
      "date": "2025-01-01",
      "desc": "Cukup lancar untuk membaca dokumentasi dan bercakap sehari-hari.",
      "tags": [],
      "level": 3,
      "link": "",
      "example": false,
      "image": null
    },
    {
      "id": "l2",
      "type": "language",
      "title": "Bahasa Jepang",
      "date": "2025-01-01",
      "desc": "Baru mulai belajar.",
      "tags": [],
      "level": 1,
      "link": "",
      "example": false,
      "image": null
    },
    {
      "id": "o1",
      "type": "org",
      "title": "Staf Muda Himpunan Mahasiswa",
      "date": "2026-09-15",
      "desc": "Divisi media dan publikasi.",
      "tags": [
        "organisasi"
      ],
      "link": "",
      "example": true
    },
    {
      "id": "l3",
      "type": "language",
      "title": "Bahasa Indonesia",
      "date": "2025-01-01",
      "desc": "Bahasa ibu dan bahasa sehari-hari.",
      "tags": [],
      "level": 5,
      "link": "",
      "image": null,
      "example": false
    },
    {
      "id": "l4",
      "type": "language",
      "title": "Bahasa Arab",
      "date": "2025-01-01",
      "desc": "Bisa membaca dan memahami dasar-dasarnya.",
      "tags": [],
      "level": 2,
      "link": "",
      "image": null,
      "example": false
    },
    {
      "id": "t6",
      "type": "tool",
      "title": "Arduino IDE",
      "date": "2026-08-20",
      "desc": "Menulis dan mengunggah program ke papan mikrokontroler.",
      "tags": [],
      "link": "",
      "image": null,
      "example": false
    },
    {
      "id": "g1",
      "type": "prog",
      "title": "C++",
      "date": "2026-08-20",
      "desc": "Dipakai untuk memprogram Arduino.",
      "tags": [],
      "level": 2,
      "link": "",
      "image": null,
      "example": false
    },
    {
      "id": "g2",
      "type": "prog",
      "title": "Python",
      "date": "2026-09-01",
      "desc": "Dipakai untuk eksperimen AI/ML.",
      "tags": [],
      "level": 2,
      "link": "",
      "image": null,
      "example": true
    }
  ]
};
