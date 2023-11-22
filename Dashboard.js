// Beispiel-Daten für Treuepunkte und Nachrichten
const loyaltyPoints = 1500;
const messages = [
    { id: 1, text: "Willkommen im Mitgliederbereich!" },
    { id: 2, text: "Neue Angebote verfügbar." },
];

// Funktion zum Laden der Treuepunkte und Anzeigen in der Benutzeroberfläche
function loadLoyaltyPoints() {
    document.getElementById("pointsDisplay").textContent = `Aktuelle Treuepunkte: ${loyaltyPoints}`;
}

// Funktion zum Laden der neuesten Nachrichten und Anzeigen in der Benutzeroberfläche
function loadLatestMessages() {
    const messagesList = document.getElementById("messagesList");

    messages.forEach(message => {
        const listItem = document.createElement("li");
        listItem.textContent = message.text;
        messagesList.appendChild(listItem);
    });
}

// Funktion zum Laden der Transaktionshistorie (Beispiel)
function loadTransactionHistory() {
    // Hier müsste eine Anfrage an das Backend gesendet werden, um die Transaktionshistorie zu erhalten
    alert("Transaktionshistorie anzeigen");
}

// Initialisierung der Seite
loadLoyaltyPoints();
loadLatestMessages();
