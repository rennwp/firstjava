// isi user

var user = prompt("Selamat datang , sebelumnya kami perlu tau nama kamu dulu \nIsi nama kamu dibawah ini !!");

alert("Selamat datang, " + user + " di aplikasi Tebak Angka !!");

alert("Kamu, " + user + " Harus menebak angka yang kami siapkan dan kami akan memberi clue kepada kalian, sudah siap?");

// random math
var cpu = Math.random() * 11;

// membulatkan angka random
if (cpu <= 1) {
  cpu = 1;
} else if (cpu <= 2) {
  cpu = 2;
} else if (cpu <= 3) {
  cpu = 3;
} else if (cpu <= 4) {
  cpu = 4;
} else if (cpu <= 5) {
  cpu = 5;
} else if (cpu <= 6) {
  cpu = 6;
} else if (cpu <= 7) {
  cpu = 7;
} else if (cpu <= 8) {
  cpu = 8;
} else if (cpu <= 9) {
  cpu = 9;
} else {
  cpu = 10;
}

// pengulangan pada nyawa
var hasil = "";
var tanya = true;

while (tanya) {
  for (var nyawa = 3; nyawa >= 1; nyawa--) {
    var jawab = prompt("Silahkan tebak angka 1-10 \nKamu punya " + nyawa + " nyawa");
    if (jawab == cpu) {
      hasil = "BENAR!";
      nyawa = 0;
      alert("Selamat !!!, Nilai kamu " + hasil);
    } else if (jawab > 10) {
      alert("Maaf, Nilai kamu melebihi nilai 10 !");
    } else if (jawab < cpu) {
      hasil = "LEBIH RENDAH!";
      alert("Nilai kamu " + hasil);
    } else if (jawab > cpu) {
      hasil = "LEBIH BESAR!";
      alert("Nilai kamu " + hasil);
    } else {
      hasil = "TIDAK TERMASUK 1-10!";
    }
  }

  if (nyawa == 0 && hasil !== cpu) {
    alert("Maaf, nyawa kamu sudah habis");
  }
  tanya = confirm("Apakah kamu ingin mengulangi lagi?");
}

alert("Terimakasih, sudah bermain !!!");
