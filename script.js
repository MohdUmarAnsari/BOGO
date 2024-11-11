function updatePriceAndOptions(units) {
    let totalElement = document.getElementById("total");
    let selectionOptions1 = document.getElementById("selection-options-1");
    let selectionOptions2 = document.getElementById("selection-options-2");
    let selectionOptions3 = document.getElementById("selection-options-3");
    let price;
    
    // Update price based on selected unit
    switch(units) {
      case 1:
        price = "$10.00 USD";
        selectionOptions1.style.display = "block";
        selectionOptions2.style.display = "none";
        selectionOptions3.style.display = "none";
        break;
      case 2:
        price = "$18.00 USD";
        selectionOptions1.style.display = "none";
        selectionOptions2.style.display = "block";
        selectionOptions3.style.display = "none";
        break;
      case 3:
        price = "$24.00 USD";
        selectionOptions1.style.display = "none";
        selectionOptions2.style.display = "none";
        selectionOptions3.style.display = "block";
        break;
    }
    
    // Update the displayed total price
    totalElement.innerText = price;
    
    // Show size and color options when any unit option is selected
    selectionOptions.style.display = "block";
  }
  