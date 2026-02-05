const datiISTAT = {
    "anno": 2024,
    "descrizione": "Consumi degli italiani per il paniere ISTAT",
    "categorie": [
        {
            "nome": "Alimentari e bevande analcoliche",
            "spesa_media_mensile": 470,
            "sottocategorie": [
                {"nome": "Pane e cereali", "spesa_media": 90},
                {"nome": "Carne", "spesa_media": 110},
                {"nome": "Pesce", "spesa_media": 70},
                {"nome": "Latte, formaggi e uova", "spesa_media": 80},
                {"nome": "Frutta e verdura", "spesa_media": 80},
                {"nome": "Bevande analcoliche", "spesa_media": 40}
            ]
        },
        {
            "nome": "Abitazione, acqua, elettricità e combustibili",
            "spesa_media_mensile": 900,
            "sottocategorie": [
                {"nome": "Affitto o mutuo", "spesa_media": 600},
                {"nome": "Elettricità e gas", "spesa_media": 200},
                {"nome": "Acqua e rifiuti", "spesa_media": 100}
            ]
        },
        {
            "nome": "Trasporti",
            "spesa_media_mensile": 350,
            "sottocategorie": [
                {"nome": "Carburante", "spesa_media": 200},
                {"nome": "Trasporto pubblico", "spesa_media": 80},
                {"nome": "Manutenzione veicoli", "spesa_media": 70}
            ]
        },
        {
            "nome": "Comunicazioni",
            "spesa_media_mensile": 60,
            "sottocategorie": [
                {"nome": "Telefonia fissa e mobile", "spesa_media": 50},
                {"nome": "Internet", "spesa_media": 10}
            ]
        }
    ]
};

//popolazione select
const select = document.getElementById("Select1");
datiISTAT.categorie.forEach((cat, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = cat.nome;
    select.appendChild(option);
});

// creazione grafici
let chart1, chart2;
function creaGrafici(index) {
    const categoria = datiISTAT.categorie[index];
    const labels2 = categoria.sottocategorie.map(s => s.nome);
    const data2 = categoria.sottocategorie.map(s => s.spesa_media);
    const data3 = data2.map(v => ((v / categoria.spesa_media_mensile) * 100).toFixed(2));

    if (chart1) chart1.destroy();
    if (chart2) chart2.destroy();

// Grafico 1
    chart1 = new Chart("chart1", {
        type: "bar",
        data: {
            labels: labels2,
            datasets: [{
                label: "Spesa media (€)",
                data: data2,
                backgroundColor: "rgba(153, 102, 255, 0.6)"
            }]
        },
        options: {responsive: true}
    });

// Grafico 2
    chart2 = new Chart("chart2", {
        type: "doughnut",
        data: {
            labels: labels2,
            datasets: [{
                label: "Percentuale spesa (%)",
                data: data3,
                backgroundColor: ["red", "green", "blue", "orange", "brown", "purple"]

            }]
        },
        options: {responsive: true}
    });
}
// cambio dei grafici al cambio del select
select.addEventListener("change", () => {
    creaGrafici(select.value);
});
