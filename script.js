function tampilkanForm() {
    document.getElementById('form-section').style.display = 'block';
}

function simpanData() {
    const name = document.getElementById('inputName').value;
    const role = document.getElementById('inputRole').value;
    const availability = document.getElementById('inputAvailability').value;
    const usia = document.getElementById('inputUsia').value;
    const lokasi = document.getElementById('inputLokasi').value;
    const experience = document.getElementById('inputExperience').value;
    const email = document.getElementById('inputEmail').value;

    localStorage.setItem('name', name);
    localStorage.setItem('role', role);
    localStorage.setItem('availability', availability);
    localStorage.setItem('usia', usia);
    localStorage.setItem('lokasi', lokasi);
    localStorage.setItem('experience', experience);
    localStorage.setItem('email', email);

    document.getElementById('name').textContent = name;
    document.getElementById('role').textContent = role;
    document.getElementById('availability').textContent = availability;
    document.getElementById('usia').textContent = usia;
    document.getElementById('lokasi').textContent = lokasi;
    document.getElementById('experience').textContent = experience + ' tahun';
    document.getElementById('email').textContent = email;

    document.getElementById('form-section').style.display = 'none';
}

function muatDataDariLocalStorage() {
    const name = localStorage.getItem('name');
    const role = localStorage.getItem('role');
    const availability = localStorage.getItem('availability');
    const usia = localStorage.getItem('usia');
    const lokasi = localStorage.getItem('lokasi');
    const experience = localStorage.getItem('experience');
    const email = localStorage.getItem('email');

    if (name) document.getElementById('name').textContent = name;
    if (role) document.getElementById('role').textContent = role;
    if (availability) document.getElementById('availability').textContent = availability;
    if (usia) document.getElementById('usia').textContent = usia;
    if (lokasi) document.getElementById('lokasi').textContent = lokasi;
    if (experience) document.getElementById('experience').textContent = experience + ' tahun';
    if (email) document.getElementById('email').textContent = email;
}

window.onload = muatDataDariLocalStorage;
