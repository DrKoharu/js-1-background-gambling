let body = document.body;

function rubah(){
  let gaya = getComputedStyle(document.documentElement); //mengambil elemet root
  let change = gaya.getPropertyValue('--four-color'); //mengambil warna
  let kata = change.split(','); // merubah warna jadi array
  let index = Math.floor(Math.random() * kata.length) //merandom warna
  let warnaAcak = kata[index] //memasukan warna random ke warna acak
  body.style.backgroundColor = warnaAcak.trim() //menerapkan pergantian background
}