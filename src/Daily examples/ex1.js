var year = prompt("Lütfen doğum yılınızı giriniz");

var dayYear = new Date();

if (year <= 2005) {
    document.write("Yaşınız ehliyet almak için uygundur.");
} else {
    (year > 2006)
    document.write("Yaşınız ehliyet almak için <strong>uygun</strong> değildir! Kalan yıl: <b>" + (18 - (dayYear.getFullYear() - year)));
}



