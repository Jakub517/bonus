const codeInput = document.getElementById("codeInput");
const generateButton = document.getElementById("generateButton");
const bonusDiv = document.getElementById("bonus");

generateButton.addEventListener("click", () => {
    const code = codeInput.value;
    var sifrovano = "U2FsdGVkX1+Mgw+c1e1toVkgJe1tfv1hkR9Blo/kMpLxHCUBxBqlDqnjRq608C7j"
    var desifrovano = CryptoJS.AES.decrypt(sifrovano, code);
    try {
        var vysledek = desifrovano.toString(CryptoJS.enc.Utf8);
        if (vysledek == ""){
            throw new Error;
        } 

        const bonusContent = `
        <h2>Gratulujeme!</h2>
        <p>Až budeš u Bonusu nezapomeň si vygenerovat Diplom!</p>
        <p>Kód je: <b>${code}</b></p>
        <p>Datum zobrazení je: <b>${new Date().toLocaleDateString()}</b></p>
        <p>Vaše souřadnice jsou:</p>
        <p>${vysledek}</p>
        `;

        bonusDiv.innerHTML = bonusContent;
    } catch (error) {
        bonusDiv.innerHTML = "<p>Neplatný kód. Zkus to znovu. <br> <b> Možná příčina: </b> Dodržujte velká a malá písmena.</p>";
    }
});
