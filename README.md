# Portofolio Zafran

Website portofolio dan jejak karier, dari maba sampai wisuda.

## Isi folder
- `index.html`: tampilan dan animasi website
- `data.js`: **semua isi website** (profil, project, achievement, tools, skill, bahasa). Edit di sini.
- `assets/`: foto dan gambar (foto hero, foto kartu, gambar project)

## Membuka di VS Code
1. Buka VS Code, pilih **File → Open Folder**, lalu pilih folder `zafran-portfolio`.
2. Pasang ekstensi **Live Server** (dari Ritwick Dey).
3. Klik kanan `index.html`, pilih **Open with Live Server**. Website terbuka di browser dan otomatis refresh setiap kamu menyimpan file.

Perlu koneksi internet karena font dan library animasi (GSAP, Lenis) dimuat dari CDN.

## Menambah jejak baru
Buka `data.js`, salin satu blok jejak, ubah isinya, lalu simpan. Contoh:

```js
{
  "id": "p5",
  "type": "project",
  "title": "Nama project baru",
  "date": "2026-12-01",
  "desc": "Cerita singkat project ini.",
  "tags": ["web"],
  "link": "https://github.com/...",
  "image": "project-baru.webp"
}
```
Taruh gambarnya di folder `assets/`. Setiap `id` harus berbeda.

## Online dengan alamat sendiri
- **Netlify Drop**: buka app.netlify.com/drop, lalu seret folder `zafran-portfolio` ke sana. Alamatnya bisa diganti jadi misalnya `zafran.netlify.app`.
- **GitHub Pages**: upload folder ini ke repository GitHub, lalu aktifkan Pages di Settings.
- **Domain sendiri** (misalnya `zafran.my.id`): beli domain, lalu sambungkan ke Netlify atau GitHub Pages lewat pengaturan domain.

## Bagian Tentang

Isi bagian Tentang ada di `data.js`, di dalam `profile`:

- `base`: kota/base yang muncul di spec sheet.
- `aboutMotto` / `aboutMottoEn`: motto besar. Bagian setelah koma pertama diberi warna oranye dan garis bawah.
- `aboutMottoSub` / `aboutMottoSubEn`: kalimat kecil di bawah motto.
- `aboutStory` / `aboutStoryEn`: profil dalam 1 paragraf. Apit kata dengan `*bintang*` supaya diberi sorotan.
- `aboutParts` / `aboutPartsEn`: modul di diagram, satu per baris (`\n`): `LABEL | judul | penjelasan`.
- `aboutLaws` / `aboutLawsEn`: prinsip kerja, satu per baris: `judul | penjelasan`.

## Mode admin (edit langsung dari website)

Setelah website online di GitHub Pages, semua pengunjung hanya bisa melihat. Kamu bisa mengedit langsung dari website lewat mode admin, dan setiap perubahan otomatis tersimpan ke repo ini.

### 1. Buat token GitHub (sekali saja)
1. GitHub → foto profil → **Settings** → **Developer settings** → **Personal access tokens** → **Fine-grained tokens** → **Generate new token**.
2. **Token name:** `portofolio-admin`. **Expiration:** 90 hari atau sesuai keinginan.
3. **Repository access:** pilih **Only select repositories**, lalu pilih repo portofolio ini saja.
4. **Permissions → Repository permissions → Contents:** pilih **Read and write**.
5. Klik **Generate token**, lalu salin tokennya (diawali `github_pat_`). Token hanya ditampilkan sekali.

### 2. Masuk ke mode admin
1. Buka website kamu dengan tambahan `#admin` di belakang alamatnya, misalnya `https://username.github.io/#admin`.
2. Username dan nama repo biasanya sudah terisi otomatis. Tempel token, lalu klik **Masuk**.
3. Tombol **Edit profil** dan **+ Tambah jejak** muncul, begitu juga tombol edit dan hapus di setiap halaman detail.

Setiap kali kamu menyimpan, website membuat commit ke repo ini (gambar masuk ke folder `assets/`, data ke `data.js`). Pengunjung melihat perubahannya sekitar 1–2 menit kemudian, setelah GitHub Pages selesai memperbarui situs.

### Keamanan
- Token disimpan di browser yang kamu pakai saja, tidak pernah masuk ke kode atau repo.
- Gunakan mode admin hanya di laptop atau HP pribadi. Klik **Keluar** di pojok kiri bawah untuk menghapus token dari browser.
- Kalau token bocor atau perangkat hilang, hapus token di halaman Fine-grained tokens. Token langsung tidak berlaku.
- Surat untuk diri sendiri di bagian Wisuda tidak pernah diunggah ke GitHub. Isinya hanya tersimpan di browser tempat kamu menulisnya.
