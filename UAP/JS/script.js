list_novel = [
    { kode: "001", novel: "Re:Zero", harga: 40000 },
    { kode: "002", novel: "Overlord", harga: 67000 },
    { kode: "003", novel: "Hyouka", harga: 55000 },
  ];
  
  var listNovelTabel = document.getElementById("listNovel");
  
  list_novel.forEach(function (item) {
    var { kode, novel, harga } = item;
    var row = listNovelTabel.insertRow(listNovelTabel.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
  
    cell1.innerHTML = kode;
    cell2.innerHTML = novel;
    cell3.innerHTML = "Rp" + harga.toFixed(2);
  });
  
  function tambahkanNovel() {
    var kodeNovel = document.getElementById("kodeNovel").value;
    var banyakNovel = document.getElementById("banyakNovel").value;
    var selectedItem = list_novel.find((item) => item.kode === kodeNovel);
    var totalPembayaran;
    if (selectedItem) {
      totalPembayaran = selectedItem.harga * banyakNovel;
      alert("Total pembayaran adalah: " + totalPembayaran.toFixed(2));
  
      var uang = prompt("masukkan uang user:");
      var kembalian = uang - totalPembayaran;
      if (uang < totalPembayaran) {
        alert("uang anda tidak cukup");
      } else {
        alert(
          "Uang Pembeli" +
            uang +
            "\n Total bayar: " +
            totalPembayaran +
            "\n Total kembalian" +
            kembalian
        );
      }
    } else {
      alert("Novel dengan kode " + kodeNovel + " tidak ditemukan");
    }
  }
  