  // Splash screen timeout
  setTimeout(() => {
    document.getElementById('logoScreen').classList.add('hidden');
    document.getElementById('welcomeScreen').classList.remove('hidden');
  }, 2000);

  // Pindah ke halaman login
  function goToLogin() {
    document.getElementById('welcomeScreen').classList.add('hidden');
    document.getElementById('loginScreen').classList.remove('hidden');
  }

  // Fungsi utama login
  function handleLogin() {
    const nim = document.getElementById('nim').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('loginMessage');
    const passwordValid = /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/;

    // Reset message
    message.style.display = 'none';
    message.classList.remove('success');
    message.textContent = '';

    if (!nim || !password) {
      message.textContent = 'Harap isi NIM dan Password.';
      message.style.display = 'block';
      return;
    }

    if (!passwordValid.test(password)) {
      message.textContent = 'Password harus kombinasi huruf & angka.';
      message.style.display = 'block';
      return;
    }

    if (nim === "2303699" && password === "abc123") {
      message.textContent = 'Login berhasil! Mengarahkan ke dashboard...';
      message.style.display = 'block';
      message.classList.add('success');

      setTimeout(() => {
        window.location.href = "dashboard.html"; // arahkan ke dashboard
      }, 1500);
    } else {
      message.textContent = 'NIM atau password salah.';
      message.style.display = 'block';
    }
  }

  // Tangkap Enter key saat di dalam form
  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // cegah reload
    handleLogin();
  });
