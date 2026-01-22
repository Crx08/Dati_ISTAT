// ==========================
// DATI JSON (ISTAT)
// ==========================
const datiISTAT = {
    "anno": 2024,
    "descrizione": "Consumi degli italiani per il paniere ISTAT",
    "categorie": [
        {
            "nome": "Alimentari e bevande analcoliche",
            "spesa_media_mensile": 470,
            "sottocategorie": [
                { "nome": "Pane e cereali", "spesa_media": 90 },
                { "nome": "Carne", "spesa_media": 110 },
                { "nome": "Pesce", "spesa_media": 70 },
                { "nome": "Latte, formaggi e uova", "spesa_media": 80 },
                { "nome": "Frutta e verdura", "spesa_media": 80 },
                { "nome": "Bevande analcoliche", "spesa_media": 40 }
            ]
        },
        {
            "nome": "Abitazione, acqua, elettricità e combustibili",
            "spesa_media_mensile": 900,
            "sottocategorie": [
                { "nome": "Affitto o mutuo", "spesa_media": 600 },
                { "nome": "Elettricità e gas", "spesa_media": 200 },
                { "nome": "Acqua e rifiuti", "spesa_media": 100 }
            ]
        },
        {
            "nome": "Trasporti",
            "spesa_media_mensile": 350,
            "sottocategorie": [
                { "nome": "Carburante", "spesa_media": 200 },
                { "nome": "Trasporto pubblico", "spesa_media": 80 },
                { "nome": "Manutenzione veicoli", "spesa_media": 70 }
            ]
        },
        {
            "nome": "Comunicazioni",
            "spesa_media_mensile": 60,
            "sottocategorie": [
                { "nome": "Telefonia fissa e mobile", "spesa_media": 50 },
                { "nome": "Internet", "spesa_media": 10 }
            ]
        }
    ]
};


const select = document.getElementById("Select1");

select.innerHTML = "";
datiISTAT.categorie.forEach((cat, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = cat.nome;
    select.appendChild(option);
});
