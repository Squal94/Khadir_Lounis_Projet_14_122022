function arrowToogle(selectItem) {
  let eltSelected;
  const arrowselectAll = document.querySelectorAll(".thForme");
  arrowselectAll.forEach((elt) => {
    const arrowUp = elt.querySelector(".arrowContainer__up");
    const arrowDown = elt.querySelector(".arrowContainer__down");

    elt.addEventListener("click", () => {
      eltSelected = elt.id;
      if (selectItem) {
        arrowUp.classList.remove("colorSelect");
        arrowDown.classList.remove("colorWhite");
        arrowUp.classList.add("colorWhite");
        arrowDown.classList.add("colorSelect");
      } else {
        arrowUp.classList.remove("colorWhite");
        arrowDown.classList.remove("colorSelect");
        arrowUp.classList.add("colorSelect");
        arrowDown.classList.add("colorWhite");
      }
      arrowselectAll.forEach((elt) => {
        if (elt.id !== eltSelected) {
          elt
            .querySelector(".arrowContainer__up")
            .classList.remove("colorWhite", "colorSelect");
          elt
            .querySelector(".arrowContainer__down")
            .classList.remove("colorWhite", "colorSelect");
        }
      });
    });
  });
}

export { arrowToogle };
