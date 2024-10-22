/*
SOAL 1

Sistem Pengelolaan Kendaraan Transportasi Umum

Buatlah sistem pengelolaan kendaraan transportasi umum yang mendukung beberapa jenis kendaraan seperti Bus, Taksi, dan Angkutan Kota (Angkot). Setiap kendaraan memiliki tarif berbeda dan cara perhitungan biaya yang unik:

1. Bus:

a. Tarif per kilometer adalah Rp 2.000.

b. Memberikan diskon 15% jika jarak perjalanan lebih dari 50 km.

2. Taksi:

a. Tarif dasar adalah Rp 10.000 (fixed charge).

b. Tarif per kilometer adalah Rp 3.500.

c. Biaya perjalanan dihitung dengan menambahkan tarif dasar ke total biaya perjalanan.

3. Angkot:

a. Tarif tetap sebesar Rp 5.000 per perjalanan tanpa memperhitungkan jarak.

Tugas:

· Buat class Transport sebagai class induk dengan method calculateFare(distance) untuk menghitung biaya perjalanan.

· Buat subclass Bus, Taksi, dan Angkot yang mewarisi class Transport, masing-masing dengan logika perhitungan biaya spesifik.

· Buat array berisi instance dari ketiga jenis kendaraan dan buat loop untuk menghitung serta menampilkan biaya perjalanan masing-masing untuk jarak 30 km dan 70 km.

*/

console.log('\n<=============================================================>\n');
console.log('SOAL Nomor 1 - Sistem Pengelolaan Kendaraan Transportasi Umum\n\n');

// class induk Transport
class Transport {
  constructor(type, pricePerKm) {
    this.type = type; // tipe kendaraan
    this.pricePerKm = pricePerKm; // tarif per kilometer
  }

  // method untuk menghitung biaya perjalanan
  calculateFare(distance) {
    return this.pricePerKm * distance;
  }
}

// subclass Bus
class Bus extends Transport {
  constructor() {
    super('Bus', 2000);
  }

  calculateFare(distance) {
    let fare = super.calculateFare(distance);
    // jika diatas 50km, maka diberikan diskon 15%
    if (distance > 50) {
      fare *= 0.85;
    }
    return fare;
  }
}

// subclass Taxi
class Taxi extends Transport {
  constructor() {
    super('Taxi', 3500);
    this.fixedCharge = 10000;
  }

  // method untuk menghitung biaya perjalanan
  calculateFare(distance) {
    return super.calculateFare(distance) + this.fixedCharge;
  }
}

// subclass Angkot
class Angkot extends Transport {
  constructor() {
    super('Angkot', 5000);
  }

  // method untuk menghitung biaya perjalanan
  calculateFare() {
    return this.pricePerKm;
  }
}

const transports = [new Bus(), new Taxi(), new Angkot()];

function displayFare(distance) {
  transports.map((transport) => {
    console.log(`Biaya perjalanan dengan ${transport.type} untuk ${distance} km adalah ${transport.calculateFare(distance)}`);
  });
}

console.log('-------- Jarak 30 km --------');
displayFare(30);
console.log('-------- Jarak 70 km --------');
displayFare(70);

/*
SOAL 2

Sistem Pengelolaan Reservasi Hotel

Buat sistem reservasi hotel dengan beberapa tipe kamar, yaitu Standard Room, Deluxe Room, dan Suite Room, dengan aturan berikut:

1. Standard Room:

a. Harga per malam: Rp 500.000.

b. Tidak ada fasilitas tambahan.

2. Deluxe Room:

a. Harga per malam: Rp 1.000.000.

b. Termasuk sarapan gratis.

3. Suite Room:

a. Harga per malam: Rp 2.000.000.

b. Memberikan diskon 10% jika menginap lebih dari 3 malam dan termasuk akses kolam renang gratis.

Tugas:

· Buat class Room sebagai class induk dengan method calculateTotalPrice(nights) untuk menghitung total harga.

· Buat subclass StandardRoom, DeluxeRoom, dan SuiteRoom yang mewarisi class Room dan menerapkan logika spesifik sesuai tipe kamar.

· Buat array berisi beberapa contoh pemesanan kamar dan tampilkan total harga masing-masing untuk 2 dan 5 malam.

*/

console.log('\n<=============================================================>\n');
console.log('SOAL Nomor 2 - Sistem Pengelolaan Reservasi Hotel\n');

// class induk Room
class Room {
  constructor(type, pricePerNight) {
    this.type = type; // tipe kamar
    this.pricePerNight = pricePerNight; // harga per malam
  }

  // method untuk menghitung total harga
  calculateTotalPrice(nights) {
    return this.pricePerNight * nights;
  }
}

// subclass StandardRoom
class StandardRoom extends Room {
  constructor() {
    super('Standard Room', 500000);
  }

  // method untuk menghitung total harga
  calculateTotalPrice(nights) {
    return super.calculateTotalPrice(nights);
  }
}

// subclass DeluxeRoom
class DeluxeRoom extends Room {
  constructor() {
    super('Deluxe Room', 1000000);
  }

  // method untuk menghitung total harga
  calculateTotalPrice(nights) {
    console.log('\nKarena Anda memesan Deluxe Room anda mendapatkan "sarapan gratis"');
    return super.calculateTotalPrice(nights);
  }
}

// subclass SuiteRoom
class SuiteRoom extends Room {
  constructor() {
    super('Suite Room', 2000000);
  }

  // method untuk menghitung total harga
  calculateTotalPrice(nights) {
    let totalPrice = super.calculateTotalPrice(nights);
    if (nights > 3) {
      totalPrice *= 0.9;
      console.log('\nKarena anda memesan Suite Room lebih dari 3 malam maka Anda mendapat "akses kolam renang gratis"');
    }
    return totalPrice;
  }
}

const rooms = [new StandardRoom(), new DeluxeRoom(), new SuiteRoom()];

function displayTotalPrice(nights) {
  rooms.map((room) => {
    console.log(`Total harga untuk ${room.type} untuk ${nights} malam adalah RP.${room.calculateTotalPrice(nights)}`);
  });
}

console.log('\n-------- 2 malam --------');
displayTotalPrice(2);
console.log('\n\n-------- 5 malam --------');
displayTotalPrice(5);

/*
SOAL 3

Buat sistem inventarisasi toko elektronik dengan beberapa jenis produk seperti Laptop, Smartphone, dan Tablet, di mana setiap produk memiliki cara berbeda dalam menentukan garansi dan harga jual:

1. Laptop:

a. Garansi: 2 tahun.

b. Harga jual ditambahkan biaya pajak 10%.

2. Smartphone:

a. Garansi: 1 tahun.

b. Mendapat diskon 5% jika dibeli lebih dari 1 unit.

3. Tablet:

a. Garansi: 6 bulan.

b. Harga jual tetap tanpa pajak atau diskon.

Tugas:

· Buat class Product sebagai class induk dengan method calculatePrice(quantity, basePrice) untuk menghitung harga total.

· Buat subclass Laptop, Smartphone, dan Tablet dengan logika berbeda untuk perhitungan harga dan garansi.

· Tampilkan informasi produk dan harga total untuk setiap jenis produk dalam array.

*/

console.log('\n<=============================================================>\n');
console.log('SOAL Nomor 3 - Sistem Inventarisasi Toko Elektronik\n');

// Class induk
class Produk {
  constructor(nama, hargaDasar) {
    this.nama = nama;
    this.hargaDasar = hargaDasar;
  }

  // Method untuk menghitung harga total, akan di-override oleh subclass
  hitungHarga(jumlah) {
    return this.hargaDasar * jumlah;
  }

  // Method untuk mendapatkan informasi garansi, akan di-override oleh subclass
  dapatkanGaransi() {
    return 'Tidak ada garansi khusus.';
  }

  // Menampilkan informasi produk
  infoProduk(jumlah) {
    const hargaTotal = this.hitungHarga(jumlah);
    const garansi = this.dapatkanGaransi();
    console.log(`${this.nama}: Jumlah: ${jumlah}, Harga Total: Rp${hargaTotal}, Garansi: ${garansi}`);
  }
}

// Subclass untuk Laptop
class Laptop extends Produk {
  constructor(nama, hargaDasar) {
    super(nama, hargaDasar);
  }

  // Garansi 2 tahun
  dapatkanGaransi() {
    return '2 tahun';
  }

  // Harga jual ditambahkan pajak 10%
  hitungHarga(jumlah) {
    const hargaDenganPajak = this.hargaDasar * 1.1; // Pajak 10%
    return hargaDenganPajak * jumlah;
  }
}

// Subclass untuk Smartphone
class Smartphone extends Produk {
  constructor(nama, hargaDasar) {
    super(nama, hargaDasar);
  }

  // Garansi 1 tahun
  dapatkanGaransi() {
    return '1 tahun';
  }

  // Diskon 5% jika beli lebih dari 1 unit
  hitungHarga(jumlah) {
    let hargaTotal = this.hargaDasar * jumlah;
    if (jumlah > 1) {
      hargaTotal *= 0.95; // Diskon 5%
    }
    return hargaTotal;
  }
}

// Subclass untuk Tablet
class Tablet extends Produk {
  constructor(nama, hargaDasar) {
    super(nama, hargaDasar);
  }

  // Garansi 6 bulan
  dapatkanGaransi() {
    return '6 bulan';
  }

  // Harga tetap tanpa pajak atau diskon
  hitungHarga(jumlah) {
    return super.hitungHarga(jumlah); // Menggunakan metode dari class induk
  }
}

console.log('\nHarga 1 Laptop Asus ROG : Rp.20000000');
console.log('Harga 1 Smartphone Samsung Galaxy S23+ : Rp.10000000\n');
console.log('Harga 1 Tablet iPad : Rp.7000000\n\n\n');

// Membuat beberapa produk
const produkLaptop = new Laptop('Laptop Asus ROG', 20000000);
const produkSmartphone = new Smartphone('Smartphone Samsung Galaxy S23+', 10000000);
const produkTablet = new Tablet('Tablet iPad', 7000000);

// Menyimpan produk dalam array
const daftarProduk = [
  { produk: produkLaptop, jumlah: 2 },
  { produk: produkSmartphone, jumlah: 2 },
  { produk: produkTablet, jumlah: 2 },
];

// Menampilkan informasi produk dan harga total
daftarProduk.forEach((item) => {
  item.produk.infoProduk(item.jumlah);
});

/*
SOAL 4

Buat sistem penilaian akademik untuk dua jenis pengguna, yaitu Dosen dan Mahasiswa, dengan aturan berikut:

1. Dosen:

a. Dapat memberikan nilai kepada mahasiswa.

b. Hanya dapat melihat dan mengedit nilai mahasiswa.

2. Mahasiswa:

a. Dapat melihat nilai yang diberikan oleh dosen.

b. Tidak bisa mengubah nilai.

Tugas:

· Buat class User sebagai class induk dengan method getRole() untuk menampilkan peran pengguna.

· Buat subclass Dosen dan Mahasiswa dengan properti dan method tambahan yang sesuai.

· Simulasikan interaksi di mana dosen memberikan nilai kepada mahasiswa, dan mahasiswa dapat melihat nilai tersebut tetapi tidak bisa mengubahnya.

*/

console.log('\n<=============================================================>\n');

console.log('SOAL Nomor 4 - Sistem Penilaian Akademik Online\n\n');

// Class induk User
class User {
  constructor(nama, role) {
    this.nama = nama;
    this.role = role;
  }

  getRole() {
    return `Peran: ${this.role}`;
  }
}

// Subclass Dosen
class Dosen extends User {
  constructor(nama) {
    super(nama, 'Dosen');
    this.daftarNilai = {};
  }

  // Method untuk memberikan nilai kepada mahasiswa
  berikanNilai(mahasiswa, mataKuliah, nilai) {
    this.daftarNilai[mahasiswa.nama] = { mataKuliah, nilai };
    console.log(`Dosen ${this.nama} telah memberikan nilai ${nilai} kepada ${mahasiswa.nama} untuk mata kuliah ${mataKuliah}.`);
  }

  // Method untuk melihat dan mengedit nilai mahasiswa
  lihatNilai(mahasiswa) {
    if (this.daftarNilai[mahasiswa.nama]) {
      const { mataKuliah, nilai } = this.daftarNilai[mahasiswa.nama];
      console.log(`Nilai untuk ${mahasiswa.nama} pada mata kuliah ${mataKuliah}: ${nilai}`);
    } else {
      console.log(`Dosen ${this.nama} belum memberikan nilai untuk ${mahasiswa.nama}.`);
    }
  }

  editNilai(mahasiswa, mataKuliah, nilaiBaru) {
    if (this.daftarNilai[mahasiswa.nama]) {
      this.daftarNilai[mahasiswa.nama].nilai = nilaiBaru;
      console.log(`Nilai untuk ${mahasiswa.nama} pada mata kuliah ${mataKuliah} telah diubah menjadi ${nilaiBaru} oleh Dosen ${this.nama}.`);
    } else {
      console.log(`Tidak ada nilai untuk ${mahasiswa.nama} yang bisa diubah.`);
    }
  }
}

// Subclass Mahasiswa
class Mahasiswa extends User {
  constructor(nama) {
    super(nama, 'Mahasiswa');
  }

  // Method untuk melihat nilai yang diberikan dosen
  lihatNilai(dosen) {
    if (dosen.daftarNilai[this.nama]) {
      const { mataKuliah, nilai } = dosen.daftarNilai[this.nama];
      console.log(`Nilai untuk mata kuliah ${mataKuliah}: ${nilai}`);
    } else {
      console.log(`${this.nama} belum memiliki nilai.`);
    }
  }
}

// Simulasi interaksi
const dosen1 = new Dosen('Pak Wan');
const mahasiswa1 = new Mahasiswa('Setiawanade');
const dosen2 = new Dosen('Bu Vior');
const mahasiswa2 = new Mahasiswa('Bjorn');

// Output peran
console.log(dosen1.getRole()); // Peran: Dosen
console.log(mahasiswa1.getRole()); // Peran: Mahasiswa

// Dosen memberikan nilai
console.log('\n>>>Dosen memberikan nilai:');
dosen1.berikanNilai(mahasiswa1, 'Matematika', 85);
dosen1.berikanNilai(mahasiswa2, 'Fisika', 87);
dosen2.berikanNilai(mahasiswa1, 'Geografi', 90);
dosen2.berikanNilai(mahasiswa2, 'Kewarganegaraan', 95);

// Mahasiswa melihat nilai
console.log('\n>>>Nilai yang diberikan oleh Dosen:');
mahasiswa1.lihatNilai(dosen1);

// Dosen mengedit nilai
console.log('\n>>>Dosen mengedit nilai:');
dosen1.editNilai(mahasiswa1, 'Matematika', 90);

// Mahasiswa melihat nilai yang telah diedit
console.log('\n>>>Nilai yang telah diedit:');
mahasiswa1.lihatNilai(dosen1);
