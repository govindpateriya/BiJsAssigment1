const quote = [
    " 1. When you have a dream, you've got to grab it and never let go.",
    " 2. I'm not afraid of death, I just don't want to",
    " 3. I'm not afraid of death, I just don't want to",
    " 4. I'm not afraid of death, I just don't want to",
    " 5. I'm not afraid of death, I just don't want",
    " 6. Nothing is impossible. The word itself says Im possible and I'm doing it",
    " 7. I am not a product of my circumstances. I— Audrey Hepburn"
];

function newQuote() {
  const randomNumber = Math.floor(Math.random() * quote.length);
  document.getElementById("Quote_Show").innerHTML = quote[randomNumber];
}
