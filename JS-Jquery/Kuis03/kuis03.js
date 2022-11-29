let kawasan = "tidak banjir", luastanah = 800, luasbangunan = 400, fasilitas = "kolam renang";

let beli = false, hasKawasan = false, hasLuasan = false, hasFasilitas = false;

if (kawasan == "tidak banjir") {
  hasKawasan = true;
} else if (kawasan == "tidak longsor") {
  hasKawasan = true;
} else if (kawasan == "tidak industri") {
  hasKawasan = true;
} else {
  hasKawasan = false;
}

if (luastanah >= 800 && luasbangunan >= 400) {
  hasLuasan = true;
} else {
  hasLuasan = false;
}

if (fasilitas == "kolam renang" || fasilitas == "parkir luas") {
  hasFasilitas = true;
} else {
  hasFasilitas = false;
}

if (hasKawasan == true && hasLuasan == true && hasFasilitas == true) {
  console.log("Sudah memenuhi syarat");
} else {
  console.log("Belum memenuhi syarat");
}