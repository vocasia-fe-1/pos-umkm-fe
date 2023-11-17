# Vocasia FE 1 (2023) | POS UMKM

# WAJIB Setup Husky

Untuk bisa menggunakan husky agar berjalan baik dan benar maka perlu di inisialisasi dulu

- Jalankan perintah
  > `yarn husky install`

# Cara Menggunakan GIT dengan Baik dan Benar

### Jika Kamu baru di Project ini maka kamu bisa ke Section Installasi

# Cara Berkontribusi di Project Ini

# Di Mohon jangan PUSH Langsung ke Branch "develop"

## Cara Branching

- Jika kamu bermaksud untuk meng-_improve_ atau memperbaharui

  > `git checkout -b "improvement/apa-yang-di-improve`

- Jika kamu bermaksud untuk _Bug Fixing_

  > `git checkout -b "bugfix/apa-yang-di-fix`

- Jika kamu bermaksud untuk menambah _Feature_

  > `git checkout -b "feature/fitur-apa-yang-di-buat`

## Cara Commit

- Jika kamu bermaksud untuk meng-_improve_ atau memperbaharui

  > `git commit -m "improvement: apa yang di improve`

- Jika kamu bermaksud untuk _Bug Fixing_

  > `git commit -m "bugfix: apa yang di fix`

- Jika kamu bermaksud untuk menambah _Feature_

  > `git commit -m "feature: fitur apa yang di buat`

## Cara Mengatasi Konflik

- 1 Stash dulu kerjaan kamu supaya gak ilang

> `git stash`

- 2 Setelah itu kamu perlu pull perubahan dari branch `develop`

> `git pull origin develop`

- 3 Setelah kamu berhasil melakukan pembaruan dari branch `develop` selanjutnya kamu perlu mengembalikan pekerjaan mu sebelum nya yang ter-_stash_

> `git stash pop`

- 4 Lanjutkan Pekerjaan dengan Semestinya

- 5 Tapi jika ketika melakukan langkah-langkah di atas masih terjadi error konflik atau karena kecerobohan kamu, maka ikuti langkah yang bawah

## Cara Mengatasi Konflik Versi 2

- 1 Pindah dulu ke Branch `develop`

> `git checkout develop`

- 2 Kemudian pull perubahan terbaru dari branch `develop`

> `git pull`

- 3 Kemudian Pindah lagi ke branch yang sedang kamu kerjakan

> `git checkout <branch mu>`

- 4 Selanjutnya kita perlu merge perubahan terbaru dari `develop`

> `git merge origin develop`

## Rekomendasi Kode Editor

Visual Studio Code

### Rekomendasi Extension

- Stylelint
- TailwindCSS Intelesense
- Prettier
- Error Lens
- ESLint

## Setup Project

- Clone Project ini ( Direkomendasikan menggunakan SSH )

  > `git clone git@github.com:vocasia-fe-1/pos-umkm-fe`

## Install NodeJS dan Yarn

- Anda perlu menginstall dulu NodeJS dan Yarn ( Direkomendasikan menggunakan NodeJS Versi LTS )

  > `npm i -g yarn`

## Install Dependency

- Pasang Dependency

  > `yarn install`

## Menjalankan Aplikasi

- Untuk menjalankan Project Ini dengan mode **Development** ketik perintah berikut

  > `yarn dev`

## Membuild Aplikasi ke Production

- Untuk membuild Project ini ketik perintah berikut

  > `yarn build`

## Setup Env

Copy terlebih dahulu `.env.example` kemudian rename ke `.env`
