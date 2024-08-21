// Znajduje wszystkie elementy article na stronie
const articles = document.querySelectorAll('article');

var newDiv = document.createElement("div");

var HTML_text = "<div id='myModal' class='modal'>\
                    <div class='modal-content'>\
                      <p>Fuck you.</p>\
                      <img id='imgFinger' class='goldFinger'></img>\
                      <br>\
                      <button id='btn_close' class='sadButton'>yes.</button>\
                    </div>\
                  </div>";

newDiv.innerHTML = HTML_text;
document.body.appendChild(newDiv);
document.getElementById("btn_close").onclick = closeModal;
document.getElementById("imgFinger").src = chrome.runtime.getURL('images/finger.jpg'); 


function closeModal() 
{
  var modal = document.getElementById("myModal");
    if( modal != null)
    {
      modal.style.display = "none";
    }
    else
    {
      alert('Fuck you!!!');
    }
};

// Iteruje przez każdy element article
articles.forEach(article => {
  // Tworzy kontener dla banneru
  const banner = document.createElement('div');
  banner.className = 'article-banner';

  // Tworzy obrazek
  const img = document.createElement('img');
  img.src = chrome.runtime.getURL('icons/smile_48.png'); 
  img.alt = 'Smile';
  img.className = 'banner-image';

  // Tworzy element z tekstem
  const text = document.createElement('div');
  text.className = 'banner-text';
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  text.textContent = 'This bitch is NOW '+ randomNumber +'% OFF!';

  // Tworzy przycisk
  const button = document.createElement('button');
  button.className = 'banner-button';
  button.textContent = 'Fuck her!';
  button.style.marginLeft = "15px";

  // Add click event to the button
  button.addEventListener('click', () => 
    {
    var modal = document.getElementById("myModal");
    if( modal != null)
    {
      modal.style.display = "block";
    }
    else
    {
      alert('Fuck you!!!');
    }

  });

  // Dodaje obrazek, tekst i przycisk do banneru
  banner.appendChild(img);
  banner.appendChild(text);
  banner.appendChild(button);

  // Dodaje banner do elementu article
  article.style.position = 'relative'; // Zapewnia, że banner będzie ustawiony względem article
  article.appendChild(banner);
});
