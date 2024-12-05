const text = "Selamat Datang di Website";
const typingTextElement = document.getElementById("typing-text");
let index = 0;

function type() {
  if (index < text.length) {
    typingTextElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 200); // Waktu untuk setiap karakter
  } else {
    typingTextElement.innerHTML += "<br>"; // Membuat baris baru setelah selesai
    typingTextElement.innerHTML += "Bumdes Taman Trikolot Cilandak Lor"; // Teks kedua jika ingin
  }
}

window.onload = type; // Mulai efek saat halaman dimuat
