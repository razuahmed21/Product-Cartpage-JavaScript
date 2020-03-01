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
incrementTwo.addEventListener("click", function(){
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
    const decboxeoneValue = document.getElementById("boxValue1").value;
    const decboxeoneValueInt = parseFloat(decboxeoneValue);

    console.log("bal ki")
    

})