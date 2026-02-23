const translations = {
  en: {
    homeTitle: "Discover the Best Pubs & Cafés in London",
    homeDesc: "WYLD in London explores the best pubs, hidden gems, traditional taverns, modern bars, independent cafés and the ultimate pub food experiences across London.",
    contactTitle: "Contact WYLD in London",
    contactDesc: "Own a pub or café in London? Want us to visit? Interested in collaborating? Send us a message below.",
    sendBtn: "Send Message"
  },
  it: {
    homeTitle: "Scopri i Migliori Pub e Caffè di Londra",
    homeDesc: "WYLD in London esplora i migliori pub e caffè di Londra.",
    contactTitle: "Contatta WYLD a Londra",
    contactDesc: "Hai un pub o un caffè a Londra? Inviaci un messaggio.",
    sendBtn: "Invia Messaggio"
  },
  es: {
    homeTitle: "Descubre los Mejores Pubs y Cafés de Londres",
    homeDesc: "WYLD in London explora los mejores pubs y cafés en Londres.",
    contactTitle: "Contacta con WYLD en Londres",
    contactDesc: "¿Tienes un pub o café en Londres? Envíanos un mensaje.",
    sendBtn: "Enviar Mensaje"
  },
  fr: {
    homeTitle: "Découvrez les Meilleurs Pubs et Cafés de Londres",
    homeDesc: "WYLD in London explore les meilleurs pubs et cafés à Londres.",
    contactTitle: "Contactez WYLD à Londres",
    contactDesc: "Vous possédez un pub ou café à Londres ? Envoyez-nous un message.",
    sendBtn: "Envoyer"
  },
  de: {
    homeTitle: "Entdecken Sie die Besten Pubs und Cafés in London",
    homeDesc: "WYLD in London erkundet die besten Pubs und Cafés in London.",
    contactTitle: "Kontakt WYLD in London",
    contactDesc: "Besitzen Sie einen Pub oder ein Café in London? Schreiben Sie uns.",
    sendBtn: "Senden"
  },
  zh: {
    homeTitle: "探索伦敦最好的酒吧和咖啡馆",
    homeDesc: "WYLD in London 探索伦敦最好的酒吧和咖啡馆。",
    contactTitle: "联系 WYLD 伦敦",
    contactDesc: "您在伦敦拥有酒吧或咖啡馆吗？请给我们留言。",
    sendBtn: "发送"
  },
  ja: {
    homeTitle: "ロンドン最高のパブとカフェを発見",
    homeDesc: "WYLD in London はロンドンの最高のパブとカフェを紹介します。",
    contactTitle: "WYLD in London に連絡",
    contactDesc: "ロンドンでパブやカフェを経営していますか？メッセージを送ってください。",
    sendBtn: "送信"
  }
};

function setLanguage(lang){
  localStorage.setItem("siteLang", lang);

  if(document.querySelector("[data-home-title]"))
    document.querySelector("[data-home-title]").textContent = translations[lang].homeTitle;

  if(document.querySelector("[data-home-desc]"))
    document.querySelector("[data-home-desc]").textContent = translations[lang].homeDesc;

  if(document.querySelector("[data-contact-title]"))
    document.querySelector("[data-contact-title]").textContent = translations[lang].contactTitle;

  if(document.querySelector("[data-contact-desc]"))
    document.querySelector("[data-contact-desc]").textContent = translations[lang].contactDesc;

  if(document.querySelector("[data-send-btn]"))
    document.querySelector("[data-send-btn]").textContent = translations[lang].sendBtn;
}

document.addEventListener("DOMContentLoaded", function(){
  const savedLang = localStorage.getItem("siteLang") || "en";
  setLanguage(savedLang);

  const switcher = document.getElementById("languageSwitcher");
  if(switcher){
    switcher.value = savedLang;
    switcher.addEventListener("change", function(){
      setLanguage(this.value);
    });
  }
});
