/*
  SOAL NOMOR 1

Class dan Objek dengan Constructor
Soal:
Buatlah class bernama Mahasiswa dengan properti:
nama (string)
nim (string)
jurusan (string)
Method perkenalkan() yang menampilkan pesan:
"Halo, nama saya [nama] dengan NIM [nim] dari jurusan [jurusan]."
Buatlah instance dari class Mahasiswa dengan data berikut:
Nama: Budi
NIM: 12345
Jurusan: Teknik Informatika
Jalankan method perkenalkan() dari instance tersebut dan tampilkan output.

*/

console.log('\n=====================\n');
console.log('\nSoal Nomor 1\n');

// Blueprint Mahasiswa
class Mahasiswa {
  // Properti
  constructor(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
  }

  // Method
  perkenalkan() {
    console.log(`Halo, nama saya ${this.nama} dengan NIM ${this.nim} dari jurusan ${this.jurusan}`);
  }
}

const Mahasiswa1 = new Mahasiswa('Budi', '12345', 'Teknik Informatika');
Mahasiswa1.perkenalkan();

/*
SOAL NOMOR 2

Getter dan Setter pada Class
Soal:
Buatlah class Produk dengan properti:
nama (string)
harga (number)
Gunakan getter untuk mendapatkan informasi produk dalam format:
"Produk: [nama] - Harga: Rp[harga]"
Gunakan setter untuk mengubah nama produk.
Buat objek dari class Produk dengan nama "Laptop" dan harga 10000000.
Gunakan setter untuk mengubah nama menjadi "Laptop Gaming" dan tampilkan hasil menggunakan getter.
*/


console.log('\n=====================\n');
console.log('\nSoal Nomor 2\n');

// Blueprint Produk
class Produk {
  constructor(namaProduk, harga) {
    this.namaProduk = namaProduk;
    this.harga = harga;
  }

  // Getter untuk mendapatkan informasi produk
  get infoProduk() {
    return `Produk: ${this.namaProduk} - Harga: Rp${this.harga}`;
  }

  // Setter untuk mengubah nama produk
  set ubahNama(namaBaru) {
    this.namaProduk = namaBaru;
  }
}

// Membuat objek Produk dengan nama "Laptop" dan harga 10000000
const produk = new Produk('Laptop', 10000000);

// Mengubah nama menjadi "Laptop Gaming"
produk.ubahNama = 'Laptop Gaming';

// Menampilkan hasil menggunakan getter
console.log(produk.infoProduk);