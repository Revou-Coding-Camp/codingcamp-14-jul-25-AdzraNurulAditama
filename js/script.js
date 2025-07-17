window.addEventListener("DOMContentLoaded", function () {
  let nama = prompt("Masukkan nama Anda:");
  if (!nama) {
    nama = "Pengunjung";
  }
  document.getElementById("user-name").textContent = nama;
});
const modal = document.getElementById("myModal");
const modalText = document.getElementById("modalText");
const span = document.getElementsByClassName("close")[0];

document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;
    const message = document.getElementById("message").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || 'Tidak diisi';

    modalText.innerHTML =
        "<b>Nama:</b> " + name + "<br>" +
        "<b>Tanggal Lahir:</b> " + birthdate + "<br>" +
        "<b>Jenis Kelamin:</b> " + gender + "<br>" +
        "<b>Pesan:</b> " + message;

    modal.style.display = "block";
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}