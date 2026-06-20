const price = () => {
  const priceInput = document.getElementById("item-price");
  const addTaxPrice = document.getElementById("add-tax-price");
  const profit = document.getElementById("profit");

  if (!priceInput || !addTaxPrice || !profit) return;

  priceInput.addEventListener("input", () => {
    const inputValue = priceInput.value;

    if (!/^\d+$/.test(inputValue)) {
      addTaxPrice.innerHTML = "";
      profit.innerHTML = "";
      return;
    }

    const priceValue = Number(inputValue);
    const tax = Math.floor(priceValue * 0.1);
    const profitValue = Math.floor(priceValue - tax);

    addTaxPrice.innerHTML = tax;
    profit.innerHTML = profitValue;
  });
};

window.addEventListener("turbo:load", price);
window.addEventListener("turbo:render", price);
