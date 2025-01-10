function submitTransaksi() {
    const nama = document.getElementById("nama").value;
    const makanan = document.getElementById("makanan").value;

    if (nama && makanan) {
        alert(`Transaksi berhasil! Pembeli: ${nama}, Makanan: ${makanan}`);
    } else {
        alert("Silakan lengkapi semua data.");
    }
}

// Fungsi untuk menangani pemesanan makanan
function pesanMakanan(makanan) {
    // Simpan nama makanan yang dipesan ke localStorage
    localStorage.setItem('makanan', makanan);
    
    // Alihkan pengguna ke halaman transaksi
    window.location.href = 'transaksi.html';
}

// Fungsi untuk menangani pemesanan makanan di halaman transaksi
function tampilkanPesanan() {
    const makanan = localStorage.getItem('makanan');
    const pesananElement = document.getElementById('pesanan');
    
    // Menampilkan pesanan yang dipilih
    pesananElement.textContent = makanan ? makanan : 'Tidak ada pesanan';
}

// Fungsi untuk menangani pengiriman transaksi
function submitTransaksi() {
    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    
    if (nama && alamat) {
        alert(`Transaksi berhasil!\nPembeli: ${nama}\nAlamat: ${alamat}\nMakanan: ${localStorage.getItem('makanan')}`);
        
        // Hapus data pesanan setelah transaksi selesai
        localStorage.removeItem('makanan');
    } else {
        alert('Silakan lengkapi semua data.');
    }
}

// Panggil fungsi untuk menampilkan pesanan saat halaman transaksi dimuat
window.onload = tampilkanPesanan;

// Fungsi untuk menangani pemesanan makanan di halaman transaksi
function tampilkanPesanan() {
    const makanan = localStorage.getItem('makanan');
    const pesananElement = document.getElementById('pesanan');
    
    // Menampilkan pesanan yang dipilih
    pesananElement.textContent = makanan ? makanan : 'Tidak ada pesanan';
}

// Fungsi untuk menangani pengiriman transaksi
function submitTransaksi() {
    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    const makanan = localStorage.getItem('makanan');
    
    if (nama && alamat && makanan) {
        // Membuat objek transaksi
        const transaksi = {
            nama: nama,
            alamat: alamat,
            makanan: makanan,
            tanggal: new Date().toLocaleString() // Menyimpan waktu transaksi
        };

        // Ambil daftar transaksi yang sudah ada dari localStorage
        let transaksiList = JSON.parse(localStorage.getItem('transaksiList')) || [];

        // Menambahkan transaksi baru ke dalam daftar transaksi
        transaksiList.push(transaksi);

        // Simpan kembali daftar transaksi ke localStorage
        localStorage.setItem('transaksiList', JSON.stringify(transaksiList));

        // Tampilkan daftar transaksi terbaru
        tampilkanDaftarTransaksi();

        // Hapus data pesanan dari localStorage
        localStorage.removeItem('makanan');
        
        // Menampilkan alert sukses
        alert(`Transaksi berhasil!\nPembeli: ${nama}\nAlamat: ${alamat}\nMakanan: ${makanan}`);
        
        // Reset form
        document.getElementById('nama').value = '';
        document.getElementById('alamat').value = '';
    } else {
        alert('Silakan lengkapi semua data.');
    }
}

// Fungsi untuk menampilkan daftar transaksi
function tampilkanDaftarTransaksi() {
    const transaksiList = JSON.parse(localStorage.getItem('transaksiList')) || [];
    const transaksiListElement = document.getElementById('transaksi-list');

    // Kosongkan daftar transaksi yang ada saat ini
    transaksiListElement.innerHTML = '';

    // Loop untuk menampilkan setiap transaksi dalam daftar
    transaksiList.forEach(transaksi => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Nama:</strong> ${transaksi.nama} <br>
            <strong>Alamat:</strong> ${transaksi.alamat} <br>
            <strong>Pesanan:</strong> ${transaksi.makanan} <br>
            <strong>Tanggal Transaksi:</strong> ${transaksi.tanggal}
        `;
        transaksiListElement.appendChild(li);
    });
}

// Panggil fungsi untuk menampilkan pesanan saat halaman transaksi dimuat
window.onload = function() {
    tampilkanPesanan();
    tampilkanDaftarTransaksi(); // Menampilkan daftar transaksi yang sudah ada
};

// Fungsi untuk memproses login
function prosesLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Username dan password statis untuk demonstrasi
    const validUsername = "user123";
    const validPassword = "password123";

    if (username === validUsername && password === validPassword) {
        // Login berhasil, arahkan ke halaman beranda
        alert("Login berhasil!");
        window.location.href = "index.html"; // Redirect ke halaman beranda
    } else {
        // Login gagal
        alert("Username atau password salah. Silakan coba lagi.");
    }
}
