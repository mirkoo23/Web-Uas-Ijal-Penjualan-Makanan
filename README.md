<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beranda - Aplikasi Penjualan Makanan</title>
    <link rel="stylesheet" href="style.css">
    
</head>
<body>
<h1>
    <div class="logo">
    <img src="WhatsApp Image 2025-01-10 at 01.11.35.jpeg" alt="Logo Aplikasi">
</div></h1>
    <nav>
        <ul>
            <li><a href="login.html">Login</a></li>
            <li><a href="index.html">Beranda</a></li>
            <li><a href="transaksi.html">Transaksi</a></li>
            <li><a href="profil.html">Profil</a></li>
        </ul>
    </nav>

    <h1>Selamat datang di Aplikasi Penjualan Makanan</h1>
    <p>Temukan makanan terbaik dan nikmati pengalaman berbelanja online!</p>

    <h2>Menu Makanan</h2>
    <ul id="menu">
        <li>
            <div class="menu-item">
                <img src="nasgor.webp" alt="Nasi Goreng">
                <div class="menu-details">
                    <span class="menu-name">Nasi Goreng</span>
                    <button onclick="pesanMakanan('Nasi Goreng')">Pesan</button>
                </div>
            </div>
        </li>
        <li>
            <div class="menu-item">
                <img src="mie yam.jpg" alt="Mie Ayam">
                <div class="menu-details">
                    <span class="menu-name">Mie Ayam</span>
                    <button onclick="pesanMakanan('Mie Ayam')">Pesan</button>
                </div>
            </div>
        </li>
        <li>
            <div class="menu-item">
                <img src="ste.webp" alt="Sate">
                <div class="menu-details">
                    <span class="menu-name">Sate</span>
                    <button onclick="pesanMakanan('Sate')">Pesan</button>
                </div>
            </div>
        </li>
    </ul>

    <!-- Footer -->
    <footer>
        <p>warung ijal</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
