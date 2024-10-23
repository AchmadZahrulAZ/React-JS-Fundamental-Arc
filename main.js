/*

Sistem Rental Kendaraan dengan Membership dan Diskon Sederhana

Buat sebuah sistem rental kendaraan sederhana yang menggabungkan inheritance, object composition, dan class bawaan JavaScript.

Instruksi Tugas:

1. Class Utama:

o Buat class Kendaraan dengan properti:

§ merek

§ model

§ tahun

o Metode:

§ infoKendaraan() untuk menampilkan informasi kendaraan.

2. Inheritance:

o Buat dua class turunan dari Kendaraan:

§ Class Mobil dengan properti tambahan kapasitasPenumpang.

§ Class Motor dengan properti tambahan jenisMotor.

3. Object Composition:

o Buat class Mesin dengan properti:

§ jenis (contoh: Bensin, Diesel).

§ tenagaKuda (contoh: 100 HP).

o Gunakan komposisi dengan menambahkan objek Mesin ke dalam setiap instance Mobil dan Motor.

4. Class Membership:

o Buat class Membership dengan properti:

§ namaMember

§ tipeMembership (Gold, Silver, atau Bronze).

o Metode diskonMember() untuk mengembalikan diskon:

§ Gold: 15%

§ Silver: 10%

§ Bronze: 5%

5. Class Rental:

o Properti:

§ kendaraan (instance dari Mobil atau Motor).

§ member (instance dari Membership).

§ tanggalRental (gunakan Date).

§ lamaHari (ditentukan langsung saat rental dibuat).

o Metode hitungTotal():

§ Tarif harian:

§ Mobil: Rp 100.000/hari.

§ Motor: Rp 50.000/hari.

§ Hitung total harga berdasarkan hari dan diskon membership.

6. Built-in Class:

o Gunakan Date untuk menampilkan tanggal rental.

*/

console.log('<=========================================================================>\n');
console.log('Sistem Rental Kendaraan dengan Membership dan Diskon Sederhana\n\n');

// Class Utama (Kendaraan)
class Kendaraan {
  constructor(merek, model, tahun) {
    this.merek = merek;
    this.model = model;
    this.tahun = tahun;
  }

  infoKendaraan() {
    return `Kendaraan: ${this.merek} ${this.model}, Tahun: ${this.tahun}`;
  }
}

// Object Composition (Class Mesin)
class Mesin {
  constructor(jenis, tenagaKuda) {
    this.jenis = jenis;
    this.tenagaKuda = tenagaKuda;
  }

  infoMesin() {
    return `Jenis Mesin: ${this.jenis}, Tenaga: ${this.tenagaKuda} HP`;
  }
}

// Inheritance dari Class Kendaraan (Class Mobil)
class Mobil extends Kendaraan {
  constructor(merek, model, tahun, kapasitasPenumpang, mesin) {
    super(merek, model, tahun);
    this.kapasitasPenumpang = kapasitasPenumpang;
    this.mesin = mesin;
  }
}

// Inheritance dari Class Kendaraan (Class Motor)
class Motor extends Kendaraan {
  constructor(merek, model, tahun, jenisMotor, mesin) {
    super(merek, model, tahun);
    this.jenisMotor = jenisMotor;
    this.mesin = mesin;
  }
}

// Class Membership
class Membership {
  constructor(namaMember, tipeMembership) {
    this.namaMember = namaMember;
    this.tipeMembership = tipeMembership;
  }

  diskonMember() {
    switch (this.tipeMembership.toLowerCase()) {
      case 'gold':
        return 0.15;
      case 'silver':
        return 0.1;
      case 'bronze':
        return 0.05;
      default:
        return 0;
    }
  }

  infoMember() {
    return `Member: ${this.namaMember} (${this.tipeMembership})`;
  }
}

// Class Rental
class Rental {
  constructor(kendaraan, member, lamaHari) {
    this.kendaraan = kendaraan;
    this.member = member;
    this.tanggalRental = new Date(2024, 9, 24);
    this.lamaHari = lamaHari;
  }

  hitungTotal() {
    const tarifHarian = this.kendaraan instanceof Mobil ? 100000 : 50000;
    const totalHarga = tarifHarian * this.lamaHari;
    const diskon = this.member.diskonMember();
    const totalSetelahDiskon = totalHarga - totalHarga * diskon;
    return totalSetelahDiskon;
  }

  infoRental() {
    const tanggalFormatted = this.tanggalRental.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    return `Tanggal Rental: ${tanggalFormatted}\n\nLama Rental: ${this.lamaHari} hari\n\nTotal Harga: Rp ${this.hitungTotal()}`;
  }
}

const mesinMobil = new Mesin('Bensin', 120);
const mobil = new Mobil('Toyota', 'Avanza', 2021, 7, mesinMobil);

const mesinMotor = new Mesin('Bensin', 100);
const motor = new Motor('Yamaha', 'NMax', 2022, 'Skuter', mesinMotor);

const member = new Membership('Siti', 'Silver');
const member2 = new Membership('Budi', 'Gold');

const rental = new Rental(mobil, member, 3);
const rental2 = new Rental(motor, member2, 5);

// Mobil
console.log(mobil.infoKendaraan());
console.log(mobil.mesin.infoMesin());
console.log(member.infoMember());
console.log(rental.infoRental());

// // Motor
// console.log(motor.infoKendaraan());
// console.log(motor.mesin.infoMesin());
// console.log(member2.infoMember());
// console.log(rental2.infoRental());

/*

Sistem Kasir untuk Toko Sederhana dengan Diskon Membership

Buat sebuah sistem kasir untuk toko yang menghitung total harga pembelian dengan mempertimbangkan diskon membership. Tugas ini melibatkan pewarisan, komposisi objek, dan penggunaan format uang menggunakan built-in class JavaScript.

Instruksi Tugas:

1. Class Barang:

o Buat class Barang dengan properti:

§ namaBarang

§ harga

o Metode: getInfoBarang() untuk menampilkan informasi barang.

2. Class Keranjang (Composition):

o Buat class Keranjang dengan properti:

§ daftarBarang (array berisi instance Barang).

o Metode:

§ tambahBarang() untuk menambah barang ke dalam keranjang.

§ totalHarga() untuk menghitung total harga semua barang dalam keranjang.

3. Class Membership:

o Buat class Membership dengan properti:

§ namaMember

§ tipeMembership (Gold, Silver, Bronze).

o Metode diskonMember() untuk mengembalikan diskon:

§ Gold: 20%

§ Silver: 10%

§ Bronze: 5%

4. Class Transaksi:

o Properti:

§ keranjang (instance dari Keranjang).

§ member (instance dari Membership).

o Metode:

§ hitungTotalAkhir() untuk menghitung harga akhir dengan diskon membership.

§ Gunakan Intl.NumberFormat untuk memformat harga dalam Rupiah.

Contoh Output:

Member: Budi (Gold)

Daftar Barang:

Sepatu: Rp 500000

Tas: Rp 300000

Total Akhir: Rp720.000,00

*/

console.log('<=========================================================================>\n');
console.log('Sistem Kasir untuk Toko Sederhana dengan Diskon Membership\n\n');

// Class Utama (Barang)
class Barang {
  constructor(namaBarang, harga) {
    this.namaBarang = namaBarang;
    this.harga = harga;
  }

  getInfoBarang() {
    return `${this.namaBarang}: Rp ${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(this.harga)}`;
  }
}

// Class Keranjang (Composition)
class Keranjang {
  constructor() {
    this.daftarBarang = [];
  }

  tambahBarang(barang) {
    this.daftarBarang.push(barang);
  }

  totalHarga() {
    return this.daftarBarang.reduce((total, barang) => total + barang.harga, 0);
  }

  getDaftarBarang() {
    return this.daftarBarang.map((barang) => barang.getInfoBarang()).join('\n');
  }
}

// Class Membership
class Keanggotaan {
  constructor(namaPelanggan, tipeKeanggotaan) {
    this.namaPelanggan = namaPelanggan;
    this.tipeKeanggotaan = tipeKeanggotaan;
  }

  diskonKeanggotaan() {
    switch (this.tipeKeanggotaan) {
      case 'Gold':
        return 0.2;
      case 'Silver':
        return 0.1;
      case 'Bronze':
        return 0.05;
      default:
        return 0;
    }
  }
}

// Class Transaksi
class Transaksi {
  constructor(keranjang, pelanggan) {
    this.keranjang = keranjang;
    this.pelanggan = pelanggan;
  }

  hitungTotalAkhir() {
    const totalHarga = this.keranjang.totalHarga();
    const diskon = totalHarga * this.pelanggan.diskonKeanggotaan();
    const totalAkhir = totalHarga - diskon;
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(totalAkhir);
  }

  cetakNota() {
    return `
    \nPelanggan: ${this.pelanggan.namaPelanggan} (${this.pelanggan.tipeKeanggotaan})
    \nDaftar Barang:
    \n${this.keranjang.getDaftarBarang()}
    \nTotal Akhir: ${this.hitungTotalAkhir()}
    `;
  }
}

const sepatu = new Barang('Sepatu', 500000);
const tas = new Barang('Tas', 300000);
// const baju = new Barang('Baju', 200000);

const keranjangBelanja = new Keranjang();
keranjangBelanja.tambahBarang(sepatu);
keranjangBelanja.tambahBarang(tas);
// keranjangBelanja.tambahBarang(baju);

const pelanggan = new Keanggotaan('Budi', 'Gold');

const transaksi = new Transaksi(keranjangBelanja, pelanggan);

console.log(transaksi.cetakNota());

/*

Sistem Dompet Digital untuk Pembayaran Online

Buat sebuah sistem dompet digital yang dapat digunakan untuk transaksi pembayaran dengan fitur seperti top-up saldo dan pengurangan saldo. Sistem ini menggabungkan konsep inheritance, object composition, dan built-in class untuk memformat uang dan mencatat waktu transaksi.

Instruksi Tugas:

1. Class Dompet:

o Buat class Dompet dengan properti:

§ saldo (berisi jumlah saldo awal, misal Rp 500.000).

o Metode:

§ topUp(nominal) untuk menambah saldo.

§ bayar(nominal) untuk mengurangi saldo (jika saldo mencukupi).

§ cekSaldo() untuk menampilkan saldo saat ini dalam format Rupiah (gunakan Intl.NumberFormat).

2. Class Transaksi (Composition):

o Buat class Transaksi dengan properti:

§ dompet (instance dari Dompet).

§ nominal (jumlah uang yang dibayar).

§ jenisTransaksi (Top-up atau Pembayaran).

§ tanggalTransaksi (gunakan class Date untuk mencatat waktu transaksi).

o Metode infoTransaksi() untuk menampilkan informasi transaksi.

3. Inheritance:

o Buat class DompetPremium yang mewarisi dari Dompet dengan fitur tambahan:

§ Setiap top-up mendapatkan bonus 5% dari nominal top-up.

Contoh Output

Saldo saat ini: Rp500.000,00

Top-up Rp 100000 berhasil!

Bonus Rp 5000 diterima!

Saldo saat ini: Rp605.000,00

Pembayaran Rp 200000 berhasil!

Saldo saat ini: Rp405.000,00

Pembayaran Rp 200000 pada Rabu, 23 Oktober 2024 pukul 03.00

*/

console.log('<=========================================================================>\n');
console.log('Sistem Dompet Digital untuk Pembayaran Online\n\n');

// Class Dompet
class Dompet {
  constructor(saldoAwal) {
    this.saldo = saldoAwal;
  }

  topUp(nominal) {
    this.saldo += nominal;
    console.log(`Top-up Rp ${this.formatRupiah(nominal)} berhasil!`);
  }

  bayar(nominal) {
    if (this.saldo >= nominal) {
      this.saldo -= nominal;
      console.log(`Pembayaran Rp ${this.formatRupiah(nominal)} berhasil!`);
    } else {
      console.log('Saldo tidak cukup untuk melakukan pembayaran!');
    }
  }

  cekSaldo() {
    console.log(`Saldo saat ini: ${this.formatRupiah(this.saldo)}`);
  }

  formatRupiah(nominal) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(nominal);
  }
}

// Class RiwayatTransaksi (Composition)
class RiwayatTransaksi {
  constructor(dompet, nominal, jenisTransaksi) {
    this.dompet = dompet;
    this.nominal = nominal;
    this.jenisTransaksi = jenisTransaksi;
    this.tanggalTransaksi = new Date();
  }

  infoTransaksi() {
    let hari = this.tanggalTransaksi.toLocaleDateString('id-ID', { weekday: 'long' });
    let tanggal = this.tanggalTransaksi.toLocaleDateString('id-ID');
    let waktu = this.tanggalTransaksi.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

    console.log(`${this.jenisTransaksi} Rp ${this.dompet.formatRupiah(this.nominal)} pada ${hari}, ${tanggal} pukul ${waktu}`);
  }
}

// Class DompetPremium (Inheritance)
class DompetPremium extends Dompet {
  topUp(nominal) {
    let bonus = nominal * 0.05;
    this.saldo += nominal + bonus;
    console.log(`Top-up Rp ${this.formatRupiah(nominal)} berhasil!`);
    console.log(`Bonus Rp ${this.formatRupiah(bonus)} diterima!`);
  }
}

// Contoh penggunaan
let dompetBiasa = new Dompet(500000);
dompetBiasa.cekSaldo(); // Cek saldo awal

// Top-up saldo
dompetBiasa.topUp(100000);
dompetBiasa.cekSaldo(); // Cek saldo setelah top-up

// Pembayaran
dompetBiasa.bayar(200000);
dompetBiasa.cekSaldo(); // Cek saldo setelah pembayaran

// Riwayat Transaksi pembayaran
let riwayatBayar = new RiwayatTransaksi(dompetBiasa, 200000, 'Pembayaran');
riwayatBayar.infoTransaksi(); // Informasi transaksi

// Pembayaran
dompetBiasa.bayar(400000);
dompetBiasa.cekSaldo(); // Cek saldo setelah pembayaran

// Pembayaran
dompetBiasa.bayar(400000);
dompetBiasa.cekSaldo(); // Cek saldo setelah pembayaran



console.log('\n=== Dompet Premium ===\n');

// Dompet Premium
let dompetPremium = new DompetPremium(500000);
dompetPremium.cekSaldo(); // Cek saldo awal

// Top-up dengan bonus 5%
dompetPremium.topUp(100000);
dompetPremium.cekSaldo(); // Cek saldo setelah top-up

// Pembayaran
dompetPremium.bayar(200000);
dompetPremium.cekSaldo(); // Cek saldo setelah pembayaran

// Riwayat Transaksi pembayaran
let riwayatBayarPremium = new RiwayatTransaksi(dompetPremium, 200000, 'Pembayaran');
riwayatBayarPremium.infoTransaksi(); // Informasi transaksi
