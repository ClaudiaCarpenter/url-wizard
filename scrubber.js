function stripAmazon(url) {
    let r = "https://www\.amazon\.com/([gd]p/[A-z0-9]{10})";
    let m = url.match(r);
    return m;
}

let test = "https://www.amazon.com/Anthonys-Premium-White-Gluten-Unbleached/dp/B094TDJ1DF?crid=2N12NEW9CFQNO&dib=eyJ2IjoiMSJ9.RkNupzLz_rD83dZcorArRn1gU-TiN7G6Ybj7YZuAuQtuMVle65ojO0R9FzPa5n5VYBuweHrFmd4oI7NHLNe43j4E3d7vu0MBcjXIpYC9V_ZNdklgsTybbam_NBywusDCM9mqudK3EqQJK_nLXBZH5Oe9XasWMn4vmE3tufCmKwELZqTVV7EACEGHDS52Opr6CbdE9FJNWRLUcLHAliKZfoJpV83_4d2ky7TtTRScLTEnxrfuoZCJj1p3wBWj5lYWcX7LX97T8ZyS0llY9xjO10GC2VwufFFEWMmWzxx1UiF6X0oq0wYytXNpnTzUhTb53V5gOa_tKhTVnUYCogdumNRm5Ku3FSYEmQjLbabcczC8vUuPuQcZutSLUI5DFKyVS42viO1Prrf53_wCHHnvfhLDQ-QFskYJ_6KqmyNtK5EJaZvgeMXnFkcKvb0i0IL6.d6wuRIXDuDAO0gxO-cYgJw2wzhy1HyQlILbYJLaywvc&dib_tag=se&keywords=white+rice+flour&qid=1734569591&sprefix=white+rice+flour%2Caps%2C177&sr=8-5";
console.log(stripAmazon(test));
