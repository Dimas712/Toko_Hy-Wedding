document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Mencegah reload halaman

      // Ambil nilai dari input
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const pesan = document.getElementById('pesan').value;

      // Tampilkan ke konsol (atau bisa kirim ke server via fetch/ajax)
      console.log('Nama:', name);
      console.log('Email:', email);
      console.log('Pesan:', pesan);

      // Tampilkan alert sederhana
      alert(`Terima kasih, ${name}! Pesan kamu sudah diterima.`);

      // Reset form
      form.reset();
    });
});