function proses() {
    let faktur = document.getElementById("noFaktur").value;
    let kode = document.getElementById("kodeBrg").value.toUpperCase();
    let jumlah = Number(document.getElementById("jumlah").value);
    let jenis = document.getElementById("jenis").value;

    let nama = "";
    let harga = 0;

    if (kode === "B001") {
        nama = "Buku Tulis";
        harga = 10000;
    } else if (kode === "B002") {
        nama = "Pena";
        harga = 15000;
    } else if (kode === "B003") {
        nama = "Pensil";
        harga = 5000;
    } else {
        alert("Kode barang tidak valid!");
        return;
    }

    let totalHarga = harga * jumlah;

    let diskon = 0;
    if (jumlah > 50 && jenis === "tunai") {
        diskon = totalHarga * 0.10;
    }

    let totalBayar = totalHarga - diskon;

    document.getElementById("outFaktur").value = faktur;
    document.getElementById("outKode").value = kode;
    document.getElementById("outNama").value = nama;
    document.getElementById("outHarga").value = harga;
    document.getElementById("outJumlah").value = jumlah;
    document.getElementById("outJenis").value = jenis;
    document.getElementById("outTotal").value = totalHarga;
    document.getElementById("outDiskon").value = diskon;
    document.getElementById("outBayar").value = totalBayar;
}
