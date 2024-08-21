// Funkcja do wykonania przy otwieraniu popupu
function onPopupOpen() 
{
    document.getElementById("qrcode").src = chrome.runtime.getURL('images/qrcode.png'); 
}

// Nasłuchiwacz zdarzeń do wykonania funkcji po załadowaniu DOM
document.addEventListener("DOMContentLoaded", onPopupOpen);