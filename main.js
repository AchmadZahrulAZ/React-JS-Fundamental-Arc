/*

Membuat Aplikasi Manajemen Toko dengan JavaScript

(OOP & SOLID Principles)

Siswa diminta membuat sebuah aplikasi manajemen toko sederhana menggunakan JavaScript dengan paradigma OOP dan menerapkan prinsip S.O.L.I.D. Aplikasi ini akan mengelola produk, transaksi, dan laporan penjualan.

Instruksi:

1. Buat class yang menangani beberapa entitas berikut:

a. Product: Mengelola informasi produk (nama, harga, stok).

b. Transaction: Mengelola pembelian produk dan menghitung total harga.

c. Report: Menyimpan laporan penjualan.

2. Gunakan OOP dengan benar:

a. Enkapsulasi: Beberapa properti tidak boleh diakses langsung (gunakan metode getter & setter).

b. Pewarisan: Jika ada entitas yang mirip, gunakan pewarisan (contoh: DigitalProduct bisa mewarisi dari Product).

c. Abstraksi: Buat metode abstrak yang perlu diimplementasikan pada subclass.

d. Polimorfisme: Gunakan polimorfisme pada metode yang bisa berbeda untuk subclass.

3. Terapkan prinsip S.O.L.I.D:

a. S (Single Responsibility): Setiap class hanya menangani satu tugas (misalnya, Product hanya untuk mengelola data produk).

b. O (Open/Closed): Pastikan class terbuka untuk ekstensi tapi tertutup untuk modifikasi.

c. L (Liskov Substitution): Pastikan subclass bisa menggantikan superclass tanpa masalah.

d. I (Interface Segregation): Klien tidak boleh dipaksa untuk bergantung pada antarmuka/interface yang tidak mereka gunakan.

e. D (Dependency Inversion): Pastikan class tidak langsung bergantung pada class lain, tapi pada abstraksi.


Contoh Output:

Transaksi 1: Laptop - Total: 30000000

tugas.js:68 Transaksi 2: E-book - Total: 50000

*/

// Super Class Product
class Product {
  // property private
  #nama;
  #harga;
  #stok;
  constructor(nama, harga, stok) {
    this.#nama = nama;
    this.#harga = harga;
    this.#stok = stok;
  }

  // Enkapsulasi: getter & setter
  get nama() {
    return this.#nama;
  }

  get harga() {
    return this.#harga;
  }

  get stok() {
    return this.#stok;
  }

  set stok(value) {
    if (value < 0) throw new Error('stok tidak bisa negatif');
    this.#stok = value;
  }

  // Abstraksi
  getInfo() {
    throw new Error('This method should be implemented in subclasses');
  }
}

// DigitalProduct Class - Pewarisan (Liskov Substitution)
class DigitalProduct extends Product {
  constructor(nama, harga) {
    super(nama, harga, Infinity); // digital product memiliki stok unlimited (contoh : e-book yang bisa didownload berulang kali)
  }

  // Polimorfisme (O - Open/Closed principle)
  getInfo() {
    return `Digital Product: ${this.nama} - harga: ${this.harga}`;
  }
}

// PhysicalProduct Class - Pewarisan (Liskov Substitution)
class PhysicalProduct extends Product {
  constructor(nama, harga, stok) {
    super(nama, harga, stok);
  }

  // Polimorfisme (O - Open/Closed principle)
  getInfo() {
    return `Physical Product: ${this.nama} - harga: ${this.harga} - stok: ${this.stok}`;
  }
}

// Transaction Class (S - Single Responsibility)
class Transaction {
  constructor(product, quantity) {
    if (product.stok < quantity) throw new Error('Insufficient stok');
    this.product = product;
    this.quantity = quantity;
    this.total = this.calculateTotal();

    if (product instanceof PhysicalProduct) {
      product.stok -= quantity;
    }
  }

  calculateTotal() {
    return this.product.harga * this.quantity;
  }
}

// Class baru untuk menangani pencetakan transaksi
class TransactionPrinter {
  static print(transaction) {
    console.log(`Transaction: ${transaction.product.nama} - Total: ${transaction.total}`);
  }
}

// Report Class (S - Single Responsibility)
class Report {
  constructor() {
    this.transactions = [];
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

// Class baru untuk menangani pencetakan laporan
class ReportPrinter {
  static print(report) {
    report.transactions.forEach((transaction, index) => {
      console.log(`Transaction ${index + 1}: ${transaction.product.nama} - Total: ${transaction.total}`);
    });
  }
}

// Penggunaan
const laptop = new PhysicalProduct('Laptop', 30000000, 10);
const ebook = new DigitalProduct('E-book', 50000);

const transaction1 = new Transaction(laptop, 1); // Membeli 1 laptop
const transaction2 = new Transaction(ebook, 1); // Membeli 1 e-book

// Menambahkan transaksi ke laporan
const report = new Report();
report.addTransaction(transaction1);
report.addTransaction(transaction2);

// Mencetak transaksi dan laporan dengan class terpisah
TransactionPrinter.print(transaction1);
TransactionPrinter.print(transaction2);

ReportPrinter.print(report);
