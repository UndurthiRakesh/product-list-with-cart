let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");
let card6 = document.getElementById("card6");
let card7 = document.getElementById("card7");
let card8 = document.getElementById("card8");
let card9 = document.getElementById("card9");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");
let button9 = document.getElementById("button9");
let spanForAddCart1 = document.getElementById("spanForAddCart1");
let spanForAddCart2 = document.getElementById("spanForAddCart2");
let spanForAddCart3 = document.getElementById("spanForAddCart3");
let spanForAddCart4 = document.getElementById("spanForAddCart4");
let spanForAddCart5 = document.getElementById("spanForAddCart5");
let spanForAddCart6 = document.getElementById("spanForAddCart6");
let spanForAddCart7 = document.getElementById("spanForAddCart7");
let spanForAddCart8 = document.getElementById("spanForAddCart8");
let spanForAddCart9 = document.getElementById("spanForAddCart9");
let buttonAfterClick1 = document.getElementById("buttonAfterClick1");
let buttonAfterClick2 = document.getElementById("buttonAfterClick2");
let buttonAfterClick3 = document.getElementById("buttonAfterClick3");
let buttonAfterClick4 = document.getElementById("buttonAfterClick4");
let buttonAfterClick5 = document.getElementById("buttonAfterClick5");
let buttonAfterClick6 = document.getElementById("buttonAfterClick6");
let buttonAfterClick7 = document.getElementById("buttonAfterClick7");
let buttonAfterClick8 = document.getElementById("buttonAfterClick8");
let buttonAfterClick9 = document.getElementById("buttonAfterClick9");

let incrementIcon1 = document.getElementById("incrementIcon1");
let decrementIcon1 = document.getElementById("decrementIcon1");
let incrementIcon2 = document.getElementById("incrementIcon2");
let decrementIcon2 = document.getElementById("decrementIcon2");
let incrementIcon3 = document.getElementById("incrementIcon3");
let decrementIcon3 = document.getElementById("decrementIcon3");
let incrementIcon4 = document.getElementById("incrementIcon4");
let decrementIcon4 = document.getElementById("decrementIcon4");
let incrementIcon5 = document.getElementById("incrementIcon5");
let decrementIcon5 = document.getElementById("decrementIcon5");
let incrementIcon6 = document.getElementById("incrementIcon6");
let decrementIcon6 = document.getElementById("decrementIcon6");
let incrementIcon7 = document.getElementById("incrementIcon7");
let decrementIcon7 = document.getElementById("decrementIcon7");
let incrementIcon8 = document.getElementById("incrementIcon8");
let decrementIcon8 = document.getElementById("decrementIcon8");
let incrementIcon9 = document.getElementById("incrementIcon9");
let decrementIcon9 = document.getElementById("decrementIcon9");

let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");
let item5 = document.getElementById("item5");
let item6 = document.getElementById("item6");
let item7 = document.getElementById("item7");
let item8 = document.getElementById("item8");
let item9 = document.getElementById("item9");

let rate1 = document.getElementById("rate1");
let rate2 = document.getElementById("rate2");
let rate3 = document.getElementById("rate3");
let rate4 = document.getElementById("rate4");
let rate5 = document.getElementById("rate5");
let rate6 = document.getElementById("rate6");
let rate7 = document.getElementById("rate7");
let rate8 = document.getElementById("rate8");
let rate9 = document.getElementById("rate9");
let yourCart = document.getElementById("yourCart");

let cartItems = document.getElementById("cartItems");
let cartImg = document.getElementById("cartImg");
let cartPara = document.getElementById("cartPara");
let containerOfItems = document.getElementById("containerOfItems");

button1.classList.remove("d-none");
button2.classList.remove("d-none");
button3.classList.remove("d-none");
button4.classList.remove("d-none");
button5.classList.remove("d-none");
button6.classList.remove("d-none");
button7.classList.remove("d-none");
button8.classList.remove("d-none");
button9.classList.remove("d-none");

let buttonInCart = document.getElementById("buttonInCart");

button1.addEventListener("click", function(event){
    button1.classList.add("d-none");
    card1.classList.add("cards-styles-after-click");
    buttonAfterClick1.classList.remove("d-none");
    buttonInCart.classList.remove("d-none"); 

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;

    cartImg.classList.add("d-none");
    cartPara.classList.add("d-none");
    let liElement = document.createElement("li");
    liElement.textContent = item1.textContent;
    liElement.classList.add("cart-items");
    containerOfItems.appendChild(liElement);

    let anotherContainer = document.createElement("div");

    let cartSpan1 = document.createElement("p");
    cartSpan1.textContent = "Rakesh";
    anotherContainer.appendChild(cartSpan1);

    liElement.appendChild(anotherContainer);

    let imgElement = document.createElement("img");
    imgElement.src ="./assets/images/icon-remove-item.svg";
    imgElement.classList.add("remove-img1");
    // imgElement.classList.setAttribute("id", "removeImg1");
    liElement.appendChild(imgElement);
});
button2.addEventListener("click", function(event){
    button2.classList.add("d-none");
    card2.classList.add("cards-styles-after-click");
    buttonAfterClick2.classList.remove("d-none");
    buttonInCart.classList.remove("d-none"); 

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;

    cartImg.classList.add("d-none");
    cartPara.classList.add("d-none");
    let liElement = document.createElement("li");
    liElement.textContent = item2.textContent;
    liElement.classList.add("cart-items");
    containerOfItems.appendChild(liElement);
    let imgElement = document.createElement("img");
    imgElement.src ="./assets/images/icon-remove-item.svg";
    imgElement.classList.add("remove-img2");
    liElement.appendChild(imgElement);
});
button3.addEventListener("click", function(event){
    button3.classList.add("d-none");
    card3.classList.add("cards-styles-after-click");
    buttonAfterClick3.classList.remove("d-none");
    buttonInCart.classList.remove("d-none");

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;

    cartImg.classList.add("d-none");
    cartPara.classList.add("d-none");
    let liElement = document.createElement("li");
    liElement.textContent = item3.textContent;
    liElement.classList.add("cart-items");
    containerOfItems.appendChild(liElement);
    let imgElement = document.createElement("img");
    imgElement.src ="./assets/images/icon-remove-item.svg";
    imgElement.classList.add("remove-img3");
    liElement.appendChild(imgElement);
    
});
button4.addEventListener("click", function(event){
    button4.classList.add("d-none");
    card4.classList.add("cards-styles-after-click");
    buttonAfterClick4.classList.remove("d-none");
    buttonInCart.classList.remove("d-none");

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;

    cartImg.classList.add("d-none");
    cartPara.classList.add("d-none");
    let liElement = document.createElement("li");
    liElement.textContent = item4.textContent;
    liElement.classList.add("cart-items");
    containerOfItems.appendChild(liElement);
    let imgElement = document.createElement("img");
    imgElement.src ="./assets/images/icon-remove-item.svg";
    imgElement.classList.add("remove-img4");
    liElement.appendChild(imgElement);
    
});
button5.addEventListener("click", function(event){
    button5.classList.add("d-none");
    card5.classList.add("cards-styles-after-click");
    buttonAfterClick5.classList.remove("d-none");
    buttonInCart.classList.remove("d-none");

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;

    cartImg.classList.add("d-none");
    cartPara.classList.add("d-none");
    let liElement = document.createElement("li");
    liElement.textContent = item5.textContent;
    liElement.classList.add("cart-items");
    containerOfItems.appendChild(liElement);
    let imgElement = document.createElement("img");
    imgElement.src ="./assets/images/icon-remove-item.svg";
    imgElement.classList.add("remove-img5");
    liElement.appendChild(imgElement);
});
button6.addEventListener("click", function(event){
    button6.classList.add("d-none");
    card6.classList.add("cards-styles-after-click");
    buttonAfterClick6.classList.remove("d-none");
    buttonInCart.classList.remove("d-none");

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;

    cartImg.classList.add("d-none");
    cartPara.classList.add("d-none");
    let liElement = document.createElement("li");
    liElement.textContent = item6.textContent;
    liElement.classList.add("cart-items");
    containerOfItems.appendChild(liElement);
    let imgElement = document.createElement("img");
    imgElement.src ="./assets/images/icon-remove-item.svg";
    imgElement.classList.add("remove-img6");
    liElement.appendChild(imgElement);
});
button7.addEventListener("click", function(event){
    button7.classList.add("d-none");
    card7.classList.add("cards-styles-after-click");
    buttonAfterClick7.classList.remove("d-none");
    buttonInCart.classList.remove("d-none");

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;

    cartImg.classList.add("d-none");
    cartPara.classList.add("d-none");
    let liElement = document.createElement("li");
    liElement.textContent = item7.textContent;
    liElement.classList.add("cart-items");
    containerOfItems.appendChild(liElement);
    let imgElement = document.createElement("img");
    imgElement.src ="./assets/images/icon-remove-item.svg";
    imgElement.classList.add("remove-img7");
    liElement.appendChild(imgElement);
});
button8.addEventListener("click", function(event){
    button8.classList.add("d-none");
    card8.classList.add("cards-styles-after-click");
    buttonAfterClick8.classList.remove("d-none");
    buttonInCart.classList.remove("d-none");

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;

    cartImg.classList.add("d-none");
    cartPara.classList.add("d-none");
    let liElement = document.createElement("li");
    liElement.textContent = item8.textContent;
    liElement.classList.add("cart-items");
    containerOfItems.appendChild(liElement);
    let imgElement = document.createElement("img");
    imgElement.src ="./assets/images/icon-remove-item.svg";
    imgElement.classList.add("remove-img8");
    liElement.appendChild(imgElement);
});
button9.addEventListener("click", function(event){
    button9.classList.add("d-none");
    card9.classList.add("cards-styles-after-click");
    buttonAfterClick9.classList.remove("d-none");
    buttonInCart.classList.remove("d-none");

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;

    cartImg.classList.add("d-none");
    cartPara.classList.add("d-none");

    let liElement = document.createElement("li");
    liElement.textContent = item9.textContent;
    liElement.classList.add("cart-items");
    containerOfItems.appendChild(liElement);

    // let anotherContainer = document.createElement("div");

    // let cartSpan1 = document.createElement("p");
    // cartSpan1.textContent = "Rakesh";
    // anotherContainer.appendChild(cartSpan1);

    // liElement.appendChild(anotherContainer);

    let imgElement = document.createElement("img");
    imgElement.src ="./assets/images/icon-remove-item.svg";
    imgElement.classList.add("remove-img9");
    liElement.appendChild(imgElement);
});

incrementIcon1.addEventListener("click", function(event){
    let parseOfSpanForAddCart1 = parseInt(spanForAddCart1.textContent);
    spanForAddCart1.textContent = parseOfSpanForAddCart1 + 1;

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;
});
decrementIcon1.addEventListener("click", function(event){
    if (parseInt(spanForAddCart1.textContent) > 1){
        let parseOfSpanForAddCart1 = parseInt(spanForAddCart1.textContent);
        spanForAddCart1.textContent = parseOfSpanForAddCart1 - 1;

        let parseOfYourCart = parseInt(yourCart.textContent);
        yourCart.textContent = parseOfYourCart - 1;
    }
});

incrementIcon2.addEventListener("click", function(event){
    let parseOfSpanForAddCart2 = parseInt(spanForAddCart2.textContent);
    spanForAddCart2.textContent = parseOfSpanForAddCart2 + 1;

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;
});
decrementIcon2.addEventListener("click", function(event){
    if (parseInt(spanForAddCart2.textContent) > 1){
        let parseOfSpanForAddCart2 = parseInt(spanForAddCart2.textContent);
        spanForAddCart2.textContent = parseOfSpanForAddCart2 - 1;

        let parseOfYourCart = parseInt(yourCart.textContent);
        yourCart.textContent = parseOfYourCart - 1;
    }
});
incrementIcon3.addEventListener("click", function(event){
    let parseOfSpanForAddCart3 = parseInt(spanForAddCart3.textContent);
    spanForAddCart3.textContent = parseOfSpanForAddCart3 + 1;

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;
});
decrementIcon3.addEventListener("click", function(event){
    if (parseInt(spanForAddCart3.textContent) > 1){
        let parseOfSpanForAddCart3 = parseInt(spanForAddCart3.textContent);
        spanForAddCart3.textContent = parseOfSpanForAddCart3 - 1;

        let parseOfYourCart = parseInt(yourCart.textContent);
        yourCart.textContent = parseOfYourCart - 1;
    }
});
incrementIcon4.addEventListener("click", function(event){
    let parseOfSpanForAddCart4 = parseInt(spanForAddCart4.textContent);
    spanForAddCart4.textContent = parseOfSpanForAddCart4 + 1;

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;
});
decrementIcon4.addEventListener("click", function(event){
    if (parseInt(spanForAddCart4.textContent) > 1){
        let parseOfSpanForAddCart4 = parseInt(spanForAddCart4.textContent);
        spanForAddCart4.textContent = parseOfSpanForAddCart4 - 1;

        let parseOfYourCart = parseInt(yourCart.textContent);
        yourCart.textContent = parseOfYourCart + 1;
    }
});
incrementIcon5.addEventListener("click", function(event){
    let parseOfSpanForAddCart5 = parseInt(spanForAddCart5.textContent);
    spanForAddCart5.textContent = parseOfSpanForAddCart5 + 1;

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;
});
decrementIcon5.addEventListener("click", function(event){
    if (parseInt(spanForAddCart5.textContent) > 1){
        let parseOfSpanForAddCart5 = parseInt(spanForAddCart5.textContent);
        spanForAddCart5.textContent = parseOfSpanForAddCart5 - 1;

        let parseOfYourCart = parseInt(yourCart.textContent);
        yourCart.textContent = parseOfYourCart - 1;
    }
});
incrementIcon6.addEventListener("click", function(event){
    let parseOfSpanForAddCart6 = parseInt(spanForAddCart6.textContent);
    spanForAddCart6.textContent = parseOfSpanForAddCart6 + 1;

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;
});
decrementIcon6.addEventListener("click", function(event){
    if (parseInt(spanForAddCart6.textContent) > 1){
        let parseOfSpanForAddCart6 = parseInt(spanForAddCart6.textContent);
        spanForAddCart6.textContent = parseOfSpanForAddCart6 - 1;

        let parseOfYourCart = parseInt(yourCart.textContent);
        yourCart.textContent = parseOfYourCart - 1;
    }
});
incrementIcon7.addEventListener("click", function(event){
    let parseOfSpanForAddCart7 = parseInt(spanForAddCart7.textContent);
    spanForAddCart7.textContent = parseOfSpanForAddCart7 + 1;

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;
});
decrementIcon7.addEventListener("click", function(event){
    if (parseInt(spanForAddCart7.textContent) > 1){
        let parseOfSpanForAddCart7 = parseInt(spanForAddCart7.textContent);
        spanForAddCart7.textContent = parseOfSpanForAddCart7 - 1;

        let parseOfYourCart = parseInt(yourCart.textContent);
        yourCart.textContent = parseOfYourCart - 1;
    }
});
incrementIcon8.addEventListener("click", function(event){
    let parseOfSpanForAddCart8 = parseInt(spanForAddCart8.textContent);
    spanForAddCart8.textContent = parseOfSpanForAddCart8 + 1;

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;
});
decrementIcon8.addEventListener("click", function(event){
    if (parseInt(spanForAddCart8.textContent) > 1){
        let parseOfSpanForAddCart8 = parseInt(spanForAddCart8.textContent);
        spanForAddCart8.textContent = parseOfSpanForAddCart8 - 1;

        let parseOfYourCart = parseInt(yourCart.textContent);
        yourCart.textContent = parseOfYourCart - 1;
    }
});
incrementIcon9.addEventListener("click", function(event){
    let parseOfSpanForAddCart9 = parseInt(spanForAddCart9.textContent);
    spanForAddCart9.textContent = parseOfSpanForAddCart9 + 1;

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;
});
decrementIcon9.addEventListener("click", function(event){
    if (parseInt(spanForAddCart9.textContent) > 1){
        let parseOfSpanForAddCart9 = parseInt(spanForAddCart9.textContent);
        spanForAddCart9.textContent = parseOfSpanForAddCart9 - 1;

        let parseOfYourCart = parseInt(yourCart.textContent);
        yourCart.textContent = parseOfYourCart - 1;
    }
});

