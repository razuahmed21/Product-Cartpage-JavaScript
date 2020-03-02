// Increment first row
const incrementOne = document.getElementById("increment1");
incrementOne.addEventListener("click", function () {
    const boxeoneValue = document.getElementById("boxValue1").value++;
    const boxeoneValueInt = parseFloat(boxeoneValue);
    const iphone = document.getElementById("iphonePrice").innerText;
    const iphoneValue = parseFloat(iphone);
    const phonePriceupdate = iphoneValue + 799;
    document.getElementById("iphonePrice").innerText = phonePriceupdate;

    const subTotal = document.getElementById("subTotal").innerText;
    const subtotalValue = parseFloat(subTotal);
    const subtotalUpdate = subtotalValue + 799;
    document.getElementById("subTotal").innerText = subtotalUpdate;

    const totalprice = document.getElementById("totalPrice").innerText;
    const totalValue = parseFloat(totalprice);
    const talUpdate = totalValue + 799;
    document.getElementById("totalPrice").innerText = talUpdate;

})

// Increment second row

const incrementTwo = document.getElementById("increment2");
incrementTwo.addEventListener("click", function () {
    const boxetwoValue = document.getElementById("boxValue2").value++;
    const boxetwoValueInt = parseFloat(boxetwoValue);
    const iphoneCase = document.getElementById("iphoneCase").innerText;
    const iphoneCaseValue = parseFloat(iphoneCase);
    const casePriceupdate = iphoneCaseValue + 131;
    document.getElementById("iphoneCase").innerText = casePriceupdate;

    const subTotal = document.getElementById("subTotal").innerText;
    const subtotalValue = parseFloat(subTotal);
    const subtotalUpdate = 131 + subtotalValue;
    document.getElementById("subTotal").innerText = subtotalUpdate;

    const totalprice = document.getElementById("totalPrice").innerText;
    const totalValue = parseFloat(totalprice);
    const talUpdate = 131 + totalValue;
    document.getElementById("totalPrice").innerText = talUpdate;
})


// Decrement first row
const decrementOne = document.getElementById("decrement1");
decrementOne.addEventListener("click", function () {
    const decboxeoneValue = document.getElementById("boxValue1").value--;
    if (decboxeoneValue == 0) {
        document.getElementById("boxValue1").value++;
        iphoneValueDec = 799;
    }
    const decboxeoneValueInt = parseFloat(decboxeoneValue);
    const iphoneDec = document.getElementById("iphonePrice").innerText;
    const iphoneValueDec = parseFloat(iphoneDec);
    const phonePriceupdateDec = iphoneValueDec - 799;
    document.getElementById("iphonePrice").innerText = phonePriceupdateDec;

    const subTotalDec = document.getElementById("subTotal").innerText;
    const subtotalValueDec = parseFloat(subTotalDec);
    const subtotalUpdateDec = subtotalValueDec - 799;
    document.getElementById("subTotal").innerText = subtotalUpdateDec;

    const totalpriceDec = document.getElementById("totalPrice").innerText;
    const totalValueDec = parseFloat(totalpriceDec);
    const talUpdateDec = totalValueDec - 799;
    document.getElementById("totalPrice").innerText = talUpdateDec;


})

// Decrement second row
const decrementTwo = document.getElementById("decrement2");
decrementTwo.addEventListener("click", function () {
    const decboxeoneValuee = document.getElementById("boxValue2").value--;
    if (decboxeoneValuee == 0) {
        document.getElementById("boxValue2").value++;
        iphoneValueDece = 131;
    }
    const decboxeoneValueInte = parseFloat(decboxeoneValuee);
    const iphoneCasee = document.getElementById("iphoneCase").innerText;
    const iphoneValueDece = parseFloat(iphoneCasee);
    const phonePriceupdateDece = iphoneValueDece - 131;
    document.getElementById("iphoneCase").innerText = phonePriceupdateDece;

    const subTotalDece = document.getElementById("subTotal").innerText;
    const subtotalValueDece = parseFloat(subTotalDece);
    const subtotalUpdateDece = subtotalValueDece - 131;
    document.getElementById("subTotal").innerText = subtotalUpdateDece;

    const totalpriceDece = document.getElementById("totalPrice").innerText;
    const totalValueDece = parseFloat(totalpriceDece);
    const talUpdateDece = totalValueDece - 131;
    document.getElementById("totalPrice").innerText = talUpdateDece;

})
// Remove first row
const removeRow = document.getElementById("removeBtn1");
removeRow.addEventListener("click", function () {
    const removeValue = document.getElementById("iphonePrice").innerText;
    const removeValueNumber = parseFloat(removeValue);

    const subTotalRemove = document.getElementById("subTotal").innerText;
    const subtotalValueRemove = parseFloat(subTotalRemove);
    const subtotalUpdateRemove = subtotalValueRemove - removeValueNumber;
    document.getElementById("subTotal").innerText = subtotalUpdateRemove;

    const totalRemove = document.getElementById("totalPrice").innerText;
    const totalValueRemove = parseFloat(totalRemove);
    const totalUpdateRemove = totalValueRemove - removeValueNumber;
    document.getElementById("totalPrice").innerText = totalUpdateRemove;
    document.getElementById("row1").style.display = 'none'

})


// Remove second row
const removeRoww = document.getElementById("removeBtn2");
removeRoww.addEventListener("click", function () {
    const removeValuew = document.getElementById("iphoneCase").innerText;
    const removeValueNumberw = parseFloat(removeValuew);

    const subTotalRemovew = document.getElementById("subTotal").innerText;
    const subtotalValueRemovew = parseFloat(subTotalRemovew);
    const subtotalUpdateRemovew = subtotalValueRemovew - removeValueNumberw;
    document.getElementById("subTotal").innerText = subtotalUpdateRemovew;

    const totalRemovew = document.getElementById("totalPrice").innerText;
    const totalValueRemovew = parseFloat(totalRemovew);
    const totalUpdateRemovew = totalValueRemovew - removeValueNumberw;
    document.getElementById("totalPrice").innerText = totalUpdateRemovew;
    document.getElementById("row2").style.display = 'none'

})