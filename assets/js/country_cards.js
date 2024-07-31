let $cards = document.querySelectorAll(".cards");

$cards.forEach(($card) => {
  // Set event listener for mouseover
  $card.addEventListener("mouseover", () => {
    $card
      .querySelector(".background-cards")
      .setAttribute("class", "background-cards background-cards-hover");
  });

  // Set event listener for mouseout
  $card.addEventListener("mouseout", () => {
    $card
      .querySelector(".background-cards")
      .setAttribute("class", "background-cards background-cards-out");
  });
});
