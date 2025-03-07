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
let cartSpan1;
let cartSpan13;
let AfterIfStatement1;
let cartSpan2;
let cartSpan23;
let AfterIfStatement2;
let cartSpan3;
let cartSpan33;
let AfterIfStatement3;
let cartSpan4;
let cartSpan43;
let AfterIfStatement4;
let cartSpan5;
let cartSpan53;
let AfterIfStatement5;
let cartSpan6;
let cartSpan63;
let AfterIfStatement6;
let cartSpan7;
let cartSpan73;
let AfterIfStatement7;
let cartSpan8;
let cartSpan83;
let AfterIfStatement8;
let cartSpan9;
let cartSpan93;
let AfterIfStatement9;

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

    let divContainerOfCartMini = document.createElement("div");
    divContainerOfCartMini.classList.add("mini-cart");
    anotherContainer.appendChild(divContainerOfCartMini);

    cartSpan1 = document.createElement("span");
    // let button1Item = parseInt(rate1.textContent) * parseInt(spanForAddCart1.textContent);
    cartSpan1.textContent = `${spanForAddCart1.textContent}x`;
    cartSpan1.style.marginRight = "10px"; 
    divContainerOfCartMini.appendChild(cartSpan1);
    let cartSpan12 = document.createElement("span");
    cartSpan12.textContent = `@${rate1.textContent}`;
    cartSpan12.style.marginRight = "10px";
    divContainerOfCartMini.appendChild(cartSpan12);
    cartSpan13 = document.createElement("span");
    if(true){
        let ifStatement = rate1.textContent;
        AfterIfStatement1 = ifStatement.replace("$", "");
        

    }
    let calculate = (parseInt(spanForAddCart1.textContent))* (parseFloat(AfterIfStatement1));

    
    cartSpan13.textContent = `$${calculate}`;
    cartSpan13.style.marginRight = "10px";
    divContainerOfCartMini.appendChild(cartSpan13);

    containerOfItems.appendChild(anotherContainer);

    let containerOfDeleteImg = document.createElement("div");
    liElement.appendChild(containerOfDeleteImg);

    let imgElement = document.createElement("img");
    imgElement.src ="./assets/images/icon-remove-item.svg";
    imgElement.classList.add("remove-img1");
    // imgElement.classList.setAttribute("id", "removeImg1");
    containerOfDeleteImg.appendChild(imgElement);
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

    let anotherContainer = document.createElement("div");

    let divContainerOfCartMini = document.createElement("div");
    divContainerOfCartMini.classList.add("mini-cart");
    anotherContainer.appendChild(divContainerOfCartMini);

    cartSpan2 = document.createElement("span");
    // let button1Item = parseInt(rate1.textContent) * parseInt(spanForAddCart1.textContent);
    cartSpan2.textContent = `${spanForAddCart2.textContent}x`;
    cartSpan2.style.marginRight = "10px"; 
    divContainerOfCartMini.appendChild(cartSpan2);
    let cartSpan22 = document.createElement("span");
    cartSpan22.textContent = `@${rate2.textContent}`;
    cartSpan22.style.marginRight = "10px";
    divContainerOfCartMini.appendChild(cartSpan22);
    cartSpan23 = document.createElement("span");
    if(true){
        let ifStatement = rate2.textContent;
        AfterIfStatement2 = ifStatement.replace("$", "");
        

    }
    let calculate = (parseInt(spanForAddCart2.textContent))* (parseFloat(AfterIfStatement2));

    
    cartSpan23.textContent = `$${calculate}`;
    cartSpan23.style.marginRight = "10px";
    divContainerOfCartMini.appendChild(cartSpan23);

    containerOfItems.appendChild(anotherContainer);

    let containerOfDeleteImg = document.createElement("div");
    liElement.appendChild(containerOfDeleteImg);

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

    let anotherContainer = document.createElement("div");

    let divContainerOfCartMini = document.createElement("div");
    divContainerOfCartMini.classList.add("mini-cart");
    anotherContainer.appendChild(divContainerOfCartMini);

    cartSpan3 = document.createElement("span");
    // let button1Item = parseInt(rate1.textContent) * parseInt(spanForAddCart1.textContent);
    cartSpan3.textContent = `${spanForAddCart3.textContent}x`;
    cartSpan3.style.marginRight = "10px"; 
    divContainerOfCartMini.appendChild(cartSpan3);
    let cartSpan32 = document.createElement("span");
    cartSpan32.textContent = `@${rate3.textContent}`;
    cartSpan32.style.marginRight = "10px";
    divContainerOfCartMini.appendChild(cartSpan32);
    cartSpan33 = document.createElement("span");
    if(true){
        let ifStatement = rate3.textContent;
        AfterIfStatement3 = ifStatement.replace("$", "");
        

    }
    let calculate = (parseInt(spanForAddCart3.textContent))* (parseFloat(AfterIfStatement3));
    console.log(calculate);
    console.log(spanForAddCart3.textContent);
    console.log(AfterIfStatement3);

    cartSpan33.textContent = `$${calculate}`;
    cartSpan33.style.marginRight = "10px";
    divContainerOfCartMini.appendChild(cartSpan33);

    containerOfItems.appendChild(anotherContainer);

    let containerOfDeleteImg = document.createElement("div");
    liElement.appendChild(containerOfDeleteImg);


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

    let anotherContainer = document.createElement("div");

    let divContainerOfCartMini = document.createElement("div");
    divContainerOfCartMini.classList.add("mini-cart");
    anotherContainer.appendChild(divContainerOfCartMini);

    cartSpan4 = document.createElement("span");
    // let button1Item = parseInt(rate1.textContent) * parseInt(spanForAddCart1.textContent);
    cartSpan4.textContent = `${spanForAddCart4.textContent}x`;
    cartSpan4.style.marginRight = "10px"; 
    divContainerOfCartMini.appendChild(cartSpan4);
    let cartSpan42 = document.createElement("span");
    cartSpan42.textContent = `@${rate4.textContent}`;
    cartSpan42.style.marginRight = "10px";
    divContainerOfCartMini.appendChild(cartSpan42);
    cartSpan43 = document.createElement("span");
    if(true){
        let ifStatement = rate4.textContent;
        AfterIfStatement4 = ifStatement.replace("$", "");
        

    }
    let calculate = (parseInt(spanForAddCart4.textContent))* (parseFloat(AfterIfStatement4));
    

    cartSpan43.textContent = `$${calculate}`;
    cartSpan43.style.marginRight = "10px";
    divContainerOfCartMini.appendChild(cartSpan43);

    containerOfItems.appendChild(anotherContainer);

    let containerOfDeleteImg = document.createElement("div");
    liElement.appendChild(containerOfDeleteImg);

    

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

    let anotherContainer = document.createElement("div");

    let divContainerOfCartMini = document.createElement("div");
    divContainerOfCartMini.classList.add("mini-cart");
    anotherContainer.appendChild(divContainerOfCartMini);

    cartSpan5 = document.createElement("span");
    // let button1Item = parseInt(rate1.textContent) * parseInt(spanForAddCart1.textContent);
    cartSpan5.textContent = `${spanForAddCart5.textContent}x`;
    cartSpan5.style.marginRight = "10px"; 
    divContainerOfCartMini.appendChild(cartSpan5);
    let cartSpan52 = document.createElement("span");
    cartSpan52.textContent = `@${rate5.textContent}`;
    cartSpan52.style.marginRight = "10px";
    divContainerOfCartMini.appendChild(cartSpan52);
    cartSpan53 = document.createElement("span");
    if(true){
        let ifStatement = rate5.textContent;
        AfterIfStatement5 = ifStatement.replace("$", "");
        

    }
    let calculate = (parseInt(spanForAddCart5.textContent))* (parseFloat(AfterIfStatement5));
    

    cartSpan53.textContent = `$${calculate}`;
    cartSpan53.style.marginRight = "10px";
    divContainerOfCartMini.appendChild(cartSpan53);

    containerOfItems.appendChild(anotherContainer);

    let containerOfDeleteImg = document.createElement("div");
    liElement.appendChild(containerOfDeleteImg);



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

    let anotherContainer = document.createElement("div");

    let divContainerOfCartMini = document.createElement("div");
    divContainerOfCartMini.classList.add("mini-cart");
    anotherContainer.appendChild(divContainerOfCartMini);

    cartSpan6 = document.createElement("span");
    // let button1Item = parseInt(rate1.textContent) * parseInt(spanForAddCart1.textContent);
    cartSpan6.textContent = `${spanForAddCart6.textContent}x`;
    cartSpan6.style.marginRight = "10px"; 
    divContainerOfCartMini.appendChild(cartSpan6);
    let cartSpan62 = document.createElement("span");
    cartSpan62.textContent = `@${rate6.textContent}`;
    cartSpan62.style.marginRight = "10px";
    divContainerOfCartMini.appendChild(cartSpan62);
    cartSpan63 = document.createElement("span");
    if(true){
        let ifStatement = rate6.textContent;
        AfterIfStatement6 = ifStatement.replace("$", "");
        

    }
    let calculate = (parseInt(spanForAddCart6.textContent))* (parseFloat(AfterIfStatement6));
    

    cartSpan63.textContent = `$${calculate}`;
    cartSpan63.style.marginRight = "10px";
    divContainerOfCartMini.appendChild(cartSpan63);

    containerOfItems.appendChild(anotherContainer);

    let containerOfDeleteImg = document.createElement("div");
    liElement.appendChild(containerOfDeleteImg);



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

    let anotherContainer = document.createElement("div");

    let divContainerOfCartMini = document.createElement("div");
    divContainerOfCartMini.classList.add("mini-cart");
    anotherContainer.appendChild(divContainerOfCartMini);

    cartSpan7 = document.createElement("span");
    // let button1Item = parseInt(rate1.textContent) * parseInt(spanForAddCart1.textContent);
    cartSpan7.textContent = `${spanForAddCart7.textContent}x`;
    cartSpan7.style.marginRight = "10px"; 
    divContainerOfCartMini.appendChild(cartSpan7);
    let cartSpan72 = document.createElement("span");
    cartSpan72.textContent = `@${rate7.textContent}`;
    cartSpan72.style.marginRight = "10px";
    divContainerOfCartMini.appendChild(cartSpan72);
    cartSpan73 = document.createElement("span");
    if(true){
        let ifStatement = rate7.textContent;
        AfterIfStatement7 = ifStatement.replace("$", "");
        

    }
    let calculate = (parseInt(spanForAddCart7.textContent))* (parseFloat(AfterIfStatement7));
    

    cartSpan73.textContent = `$${calculate}`;
    cartSpan73.style.marginRight = "10px";
    divContainerOfCartMini.appendChild(cartSpan73);

    containerOfItems.appendChild(anotherContainer);

    let containerOfDeleteImg = document.createElement("div");
    liElement.appendChild(containerOfDeleteImg);



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

    let anotherContainer = document.createElement("div");

    let divContainerOfCartMini = document.createElement("div");
    divContainerOfCartMini.classList.add("mini-cart");
    anotherContainer.appendChild(divContainerOfCartMini);

    cartSpan8 = document.createElement("span");
    // let button1Item = parseInt(rate1.textContent) * parseInt(spanForAddCart1.textContent);
    cartSpan8.textContent = `${spanForAddCart8.textContent}x`;
    cartSpan8.style.marginRight = "10px"; 
    divContainerOfCartMini.appendChild(cartSpan8);
    let cartSpan82 = document.createElement("span");
    cartSpan82.textContent = `@${rate8.textContent}`;
    cartSpan82.style.marginRight = "10px";
    divContainerOfCartMini.appendChild(cartSpan82);
    cartSpan83 = document.createElement("span");
    if(true){
        let ifStatement = rate8.textContent;
        AfterIfStatement8 = ifStatement.replace("$", "");
        

    }
    let calculate = (parseInt(spanForAddCart8.textContent))* (parseFloat(AfterIfStatement8));
    

    cartSpan83.textContent = `$${calculate}`;
    cartSpan83.style.marginRight = "10px";
    divContainerOfCartMini.appendChild(cartSpan83);

    containerOfItems.appendChild(anotherContainer);

    let containerOfDeleteImg = document.createElement("div");
    liElement.appendChild(containerOfDeleteImg);



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


    let anotherContainer = document.createElement("div");

    let divContainerOfCartMini = document.createElement("div");
    divContainerOfCartMini.classList.add("mini-cart");
    anotherContainer.appendChild(divContainerOfCartMini);

    cartSpan9 = document.createElement("span");
    // let button1Item = parseInt(rate1.textContent) * parseInt(spanForAddCart1.textContent);
    cartSpan9.textContent = `${spanForAddCart9.textContent}x`;
    cartSpan9.style.marginRight = "10px"; 
    divContainerOfCartMini.appendChild(cartSpan9);
    let cartSpan92 = document.createElement("span");
    cartSpan92.textContent = `@${rate9.textContent}`;
    cartSpan92.style.marginRight = "10px";
    divContainerOfCartMini.appendChild(cartSpan92);
    cartSpan93 = document.createElement("span");
    if(true){
        let ifStatement = rate9.textContent;
        AfterIfStatement9 = ifStatement.replace("$", "");
        

    }
    let calculate = (parseInt(spanForAddCart9.textContent))* (parseFloat(AfterIfStatement9));
    

    cartSpan93.textContent = `$${calculate}`;
    cartSpan93.style.marginRight = "10px";
    divContainerOfCartMini.appendChild(cartSpan93);

    containerOfItems.appendChild(anotherContainer);

    let containerOfDeleteImg = document.createElement("div");
    liElement.appendChild(containerOfDeleteImg);



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
    let replaceOfCartSpan1;

    if(true){
        let textContentOfCartSpan1 = cartSpan1.textContent;
        console.log(textContentOfCartSpan1);
        replaceOfCartSpan1 = textContentOfCartSpan1.replace("x", "");
        console.log(replaceOfCartSpan1);
    }
    let parseOfCartSpan1 = parseInt(replaceOfCartSpan1)+ 1;
    cartSpan1.textContent = `${parseOfCartSpan1}x`;

    let textContentOfCartSpan13 = cartSpan13.textContent;
    let replaceOfCartSpan13 = textContentOfCartSpan13.replace("$", "");
    let parseOfCartSpan13 = parseFloat(replaceOfCartSpan13);

    let calOfTotal = parseFloat(parseOfCartSpan13) + parseFloat(AfterIfStatement1);
    cartSpan13.textContent = `$${calOfTotal}`;
});
decrementIcon1.addEventListener("click", function(event){
    if (parseInt(spanForAddCart1.textContent) > 1){
        let parseOfSpanForAddCart1 = parseInt(spanForAddCart1.textContent);
        spanForAddCart1.textContent = parseOfSpanForAddCart1 - 1;

        let parseOfYourCart = parseInt(yourCart.textContent);
        yourCart.textContent = parseOfYourCart - 1;

        let replaceOfCartSpan1;

    if(true){
        let textContentOfCartSpan1 = cartSpan1.textContent;
        console.log(textContentOfCartSpan1);
        replaceOfCartSpan1 = textContentOfCartSpan1.replace("x", "");
        console.log(replaceOfCartSpan1);
    }
    let parseOfCartSpan1 = parseInt(replaceOfCartSpan1) - 1;
    cartSpan1.textContent = `${parseOfCartSpan1}x`;

    let textContentOfCartSpan13 = cartSpan13.textContent;
    let replaceOfCartSpan13 = textContentOfCartSpan13.replace("$", "");
    let parseOfCartSpan13 = parseFloat(replaceOfCartSpan13);

    let calOfTotal = parseFloat(parseOfCartSpan13) - parseFloat(AfterIfStatement1);
    cartSpan13.textContent = `$${calOfTotal}`;
    }
});

incrementIcon2.addEventListener("click", function(event){
    let parseOfSpanForAddCart2 = parseInt(spanForAddCart2.textContent);
    spanForAddCart2.textContent = parseOfSpanForAddCart2 + 1;

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;

    let replaceOfCartSpan2;

    if(true){
        let textContentOfCartSpan2 = cartSpan2.textContent;
        console.log(textContentOfCartSpan2);
        replaceOfCartSpan2 = textContentOfCartSpan2.replace("x", "");
        console.log(replaceOfCartSpan2);
    }
    let parseOfCartSpan2 = parseInt(replaceOfCartSpan2)+ 1;
    cartSpan2.textContent = `${parseOfCartSpan2}x`;

    let textContentOfCartSpan23 = cartSpan23.textContent;
    let replaceOfCartSpan23 = textContentOfCartSpan23.replace("$", "");
    let parseOfCartSpan23 = parseFloat(replaceOfCartSpan23);

    let calOfTotal = parseFloat(parseOfCartSpan23) + parseFloat(AfterIfStatement2);
    cartSpan23.textContent = `$${calOfTotal}`;
});
decrementIcon2.addEventListener("click", function(event){
    if (parseInt(spanForAddCart2.textContent) > 1){
        let parseOfSpanForAddCart2 = parseInt(spanForAddCart2.textContent);
        spanForAddCart2.textContent = parseOfSpanForAddCart2 - 1;

        let parseOfYourCart = parseInt(yourCart.textContent);
        yourCart.textContent = parseOfYourCart - 1;

        let replaceOfCartSpan2;

    if(true){
        let textContentOfCartSpan2 = cartSpan2.textContent;
        console.log(textContentOfCartSpan2);
        replaceOfCartSpan2 = textContentOfCartSpan2.replace("x", "");
        console.log(replaceOfCartSpan2);
    }
    let parseOfCartSpan2 = parseInt(replaceOfCartSpan2)- 1;
    cartSpan2.textContent = `${parseOfCartSpan2}x`;

    let textContentOfCartSpan23 = cartSpan23.textContent;
    let replaceOfCartSpan23 = textContentOfCartSpan23.replace("$", "");
    let parseOfCartSpan23 = parseFloat(replaceOfCartSpan23);

    let calOfTotal = parseFloat(parseOfCartSpan23) - parseFloat(AfterIfStatement2);
    cartSpan23.textContent = `$${calOfTotal}`;

    }
});
incrementIcon3.addEventListener("click", function(event){
    let parseOfSpanForAddCart3 = parseInt(spanForAddCart3.textContent);
    spanForAddCart3.textContent = parseOfSpanForAddCart3 + 1;

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;

    let replaceOfCartSpan3;

    if(true){
        let textContentOfCartSpan3 = cartSpan3.textContent;
        console.log(textContentOfCartSpan3);
        replaceOfCartSpan3 = textContentOfCartSpan3.replace("x", "");
        console.log(replaceOfCartSpan3);
    }
    let parseOfCartSpan3 = parseInt(replaceOfCartSpan3)+ 1;
    cartSpan3.textContent = `${parseOfCartSpan3}x`;

    let textContentOfCartSpan33 = cartSpan33.textContent;
    let replaceOfCartSpan33 = textContentOfCartSpan33.replace("$", "");
    let parseOfCartSpan33 = parseFloat(replaceOfCartSpan33);

    let calOfTotal = parseFloat(parseOfCartSpan33) + parseFloat(AfterIfStatement3);
    cartSpan33.textContent = `$${calOfTotal}`;

});
decrementIcon3.addEventListener("click", function(event){
    if (parseInt(spanForAddCart3.textContent) > 1){
        let parseOfSpanForAddCart3 = parseInt(spanForAddCart3.textContent);
        spanForAddCart3.textContent = parseOfSpanForAddCart3 - 1;

        let parseOfYourCart = parseInt(yourCart.textContent);
        yourCart.textContent = parseOfYourCart - 1;

        let replaceOfCartSpan3;

    if(true){
        let textContentOfCartSpan3 = cartSpan3.textContent;
        console.log(textContentOfCartSpan3);
        replaceOfCartSpan3 = textContentOfCartSpan3.replace("x", "");
        console.log(replaceOfCartSpan3);
    }
    let parseOfCartSpan3 = parseInt(replaceOfCartSpan3)- 1;
    cartSpan3.textContent = `${parseOfCartSpan3}x`;

    let textContentOfCartSpan33 = cartSpan33.textContent;
    let replaceOfCartSpan33 = textContentOfCartSpan33.replace("$", "");
    let parseOfCartSpan33 = parseFloat(replaceOfCartSpan33);

    let calOfTotal = parseFloat(parseOfCartSpan33) - parseFloat(AfterIfStatement3);
    cartSpan33.textContent = `$${calOfTotal}`;

    }
});
incrementIcon4.addEventListener("click", function(event){
    let parseOfSpanForAddCart4 = parseInt(spanForAddCart4.textContent);
    spanForAddCart4.textContent = parseOfSpanForAddCart4 + 1;

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;

    let replaceOfCartSpan4;

    if(true){
        let textContentOfCartSpan4 = cartSpan4.textContent;
        console.log(textContentOfCartSpan4);
        replaceOfCartSpan4 = textContentOfCartSpan4.replace("x", "");
        console.log(replaceOfCartSpan4);
    }
    let parseOfCartSpan4 = parseInt(replaceOfCartSpan4)+ 1;
    cartSpan4.textContent = `${parseOfCartSpan4}x`;

    let textContentOfCartSpan43 = cartSpan43.textContent;
    let replaceOfCartSpan43 = textContentOfCartSpan43.replace("$", "");
    let parseOfCartSpan43 = parseFloat(replaceOfCartSpan43);

    let calOfTotal = parseFloat(parseOfCartSpan43) + parseFloat(AfterIfStatement4);
    cartSpan43.textContent = `$${calOfTotal}`;

});
decrementIcon4.addEventListener("click", function(event){
    if (parseInt(spanForAddCart4.textContent) > 1){
        let parseOfSpanForAddCart4 = parseInt(spanForAddCart4.textContent);
        spanForAddCart4.textContent = parseOfSpanForAddCart4 - 1;

        let parseOfYourCart = parseInt(yourCart.textContent);
        yourCart.textContent = parseOfYourCart + 1;

        let replaceOfCartSpan4;

    if(true){
        let textContentOfCartSpan4 = cartSpan4.textContent;
        console.log(textContentOfCartSpan4);
        replaceOfCartSpan4 = textContentOfCartSpan4.replace("x", "");
        console.log(replaceOfCartSpan4);
    }
    let parseOfCartSpan4 = parseInt(replaceOfCartSpan4)- 1;
    cartSpan4.textContent = `${parseOfCartSpan4}x`;

    let textContentOfCartSpan43 = cartSpan43.textContent;
    let replaceOfCartSpan43 = textContentOfCartSpan43.replace("$", "");
    let parseOfCartSpan43 = parseFloat(replaceOfCartSpan43);

    let calOfTotal = parseFloat(parseOfCartSpan43) - parseFloat(AfterIfStatement4);
    cartSpan43.textContent = `$${calOfTotal}`;

    }
});
incrementIcon5.addEventListener("click", function(event){
    let parseOfSpanForAddCart5 = parseInt(spanForAddCart5.textContent);
    spanForAddCart5.textContent = parseOfSpanForAddCart5 + 1;

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;

    let replaceOfCartSpan5;

    if(true){
        let textContentOfCartSpan5 = cartSpan5.textContent;
        console.log(textContentOfCartSpan5);
        replaceOfCartSpan5 = textContentOfCartSpan5.replace("x", "");
        console.log(replaceOfCartSpan5);
    }
    let parseOfCartSpan5 = parseInt(replaceOfCartSpan5)+ 1;
    cartSpan5.textContent = `${parseOfCartSpan5}x`;

    let textContentOfCartSpan53 = cartSpan53.textContent;
    let replaceOfCartSpan53 = textContentOfCartSpan53.replace("$", "");
    let parseOfCartSpan53 = parseFloat(replaceOfCartSpan53);

    let calOfTotal = parseFloat(parseOfCartSpan53) + parseFloat(AfterIfStatement5);
    cartSpan53.textContent = `$${calOfTotal}`;

});
decrementIcon5.addEventListener("click", function(event){
    if (parseInt(spanForAddCart5.textContent) > 1){
        let parseOfSpanForAddCart5 = parseInt(spanForAddCart5.textContent);
        spanForAddCart5.textContent = parseOfSpanForAddCart5 - 1;

        let parseOfYourCart = parseInt(yourCart.textContent);
        yourCart.textContent = parseOfYourCart - 1;

        let replaceOfCartSpan5;

    if(true){
        let textContentOfCartSpan5 = cartSpan5.textContent;
        console.log(textContentOfCartSpan5);
        replaceOfCartSpan5 = textContentOfCartSpan5.replace("x", "");
        console.log(replaceOfCartSpan5);
    }
    let parseOfCartSpan5 = parseInt(replaceOfCartSpan5)- 1;
    cartSpan5.textContent = `${parseOfCartSpan5}x`;

    let textContentOfCartSpan53 = cartSpan53.textContent;
    let replaceOfCartSpan53 = textContentOfCartSpan53.replace("$", "");
    let parseOfCartSpan53 = parseFloat(replaceOfCartSpan53);

    let calOfTotal = parseFloat(parseOfCartSpan53) - parseFloat(AfterIfStatement5);
    cartSpan53.textContent = `$${calOfTotal}`;

    }
});
incrementIcon6.addEventListener("click", function(event){
    let parseOfSpanForAddCart6 = parseInt(spanForAddCart6.textContent);
    spanForAddCart6.textContent = parseOfSpanForAddCart6 + 1;

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;

    let replaceOfCartSpan6;

    if(true){
        let textContentOfCartSpan6 = cartSpan6.textContent;
        console.log(textContentOfCartSpan6);
        replaceOfCartSpan6 = textContentOfCartSpan6.replace("x", "");
        console.log(replaceOfCartSpan6);
    }
    let parseOfCartSpan6 = parseInt(replaceOfCartSpan6)+ 1;
    cartSpan6.textContent = `${parseOfCartSpan6}x`;

    let textContentOfCartSpan63 = cartSpan63.textContent;
    let replaceOfCartSpan63 = textContentOfCartSpan63.replace("$", "");
    let parseOfCartSpan63 = parseFloat(replaceOfCartSpan63);

    let calOfTotal = parseFloat(parseOfCartSpan63) + parseFloat(AfterIfStatement6);
    cartSpan63.textContent = `$${calOfTotal}`;

});
decrementIcon6.addEventListener("click", function(event){
    if (parseInt(spanForAddCart6.textContent) > 1){
        let parseOfSpanForAddCart6 = parseInt(spanForAddCart6.textContent);
        spanForAddCart6.textContent = parseOfSpanForAddCart6 - 1;

        let parseOfYourCart = parseInt(yourCart.textContent);
        yourCart.textContent = parseOfYourCart - 1;

        let replaceOfCartSpan6;

    if(true){
        let textContentOfCartSpan6 = cartSpan6.textContent;
        console.log(textContentOfCartSpan6);
        replaceOfCartSpan6 = textContentOfCartSpan6.replace("x", "");
        console.log(replaceOfCartSpan6);
    }
    let parseOfCartSpan6 = parseInt(replaceOfCartSpan6)- 1;
    cartSpan6.textContent = `${parseOfCartSpan6}x`;

    let textContentOfCartSpan63 = cartSpan63.textContent;
    let replaceOfCartSpan63 = textContentOfCartSpan63.replace("$", "");
    let parseOfCartSpan63 = parseFloat(replaceOfCartSpan63);

    let calOfTotal = parseFloat(parseOfCartSpan63) - parseFloat(AfterIfStatement6);
    cartSpan63.textContent = `$${calOfTotal}`;

    }
});
incrementIcon7.addEventListener("click", function(event){
    let parseOfSpanForAddCart7 = parseInt(spanForAddCart7.textContent);
    spanForAddCart7.textContent = parseOfSpanForAddCart7 + 1;

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;

    let replaceOfCartSpan7;

    if(true){
        let textContentOfCartSpan7 = cartSpan7.textContent;
        console.log(textContentOfCartSpan7);
        replaceOfCartSpan7 = textContentOfCartSpan7.replace("x", "");
        console.log(replaceOfCartSpan7);
    }
    let parseOfCartSpan7 = parseInt(replaceOfCartSpan7)+ 1;
    cartSpan7.textContent = `${parseOfCartSpan7}x`;

    let textContentOfCartSpan73 = cartSpan73.textContent;
    let replaceOfCartSpan73 = textContentOfCartSpan73.replace("$", "");
    let parseOfCartSpan73 = parseFloat(replaceOfCartSpan73);

    let calOfTotal = parseFloat(parseOfCartSpan73) + parseFloat(AfterIfStatement7);
    cartSpan73.textContent = `$${calOfTotal}`;

});
decrementIcon7.addEventListener("click", function(event){
    if (parseInt(spanForAddCart7.textContent) > 1){
        let parseOfSpanForAddCart7 = parseInt(spanForAddCart7.textContent);
        spanForAddCart7.textContent = parseOfSpanForAddCart7 - 1;

        let parseOfYourCart = parseInt(yourCart.textContent);
        yourCart.textContent = parseOfYourCart - 1;

        let replaceOfCartSpan7;

    if(true){
        let textContentOfCartSpan7 = cartSpan7.textContent;
        console.log(textContentOfCartSpan7);
        replaceOfCartSpan7 = textContentOfCartSpan7.replace("x", "");
        console.log(replaceOfCartSpan7);
    }
    let parseOfCartSpan7 = parseInt(replaceOfCartSpan7)- 1;
    cartSpan7.textContent = `${parseOfCartSpan7}x`;

    let textContentOfCartSpan73 = cartSpan73.textContent;
    let replaceOfCartSpan73 = textContentOfCartSpan73.replace("$", "");
    let parseOfCartSpan73 = parseFloat(replaceOfCartSpan73);

    let calOfTotal = parseFloat(parseOfCartSpan73) - parseFloat(AfterIfStatement7);
    cartSpan73.textContent = `$${calOfTotal}`;

    }
});
incrementIcon8.addEventListener("click", function(event){
    let parseOfSpanForAddCart8 = parseInt(spanForAddCart8.textContent);
    spanForAddCart8.textContent = parseOfSpanForAddCart8 + 1;

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;

    let replaceOfCartSpan8;

    if(true){
        let textContentOfCartSpan8 = cartSpan8.textContent;
        console.log(textContentOfCartSpan8);
        replaceOfCartSpan8 = textContentOfCartSpan8.replace("x", "");
        console.log(replaceOfCartSpan8);
    }
    let parseOfCartSpan8 = parseInt(replaceOfCartSpan8)+ 1;
    cartSpan8.textContent = `${parseOfCartSpan8}x`;

    let textContentOfCartSpan83 = cartSpan83.textContent;
    let replaceOfCartSpan83 = textContentOfCartSpan83.replace("$", "");
    let parseOfCartSpan83 = parseFloat(replaceOfCartSpan83);

    let calOfTotal = parseFloat(parseOfCartSpan83) + parseFloat(AfterIfStatement8);
    cartSpan83.textContent = `$${calOfTotal}`;

});
decrementIcon8.addEventListener("click", function(event){
    if (parseInt(spanForAddCart8.textContent) > 1){
        let parseOfSpanForAddCart8 = parseInt(spanForAddCart8.textContent);
        spanForAddCart8.textContent = parseOfSpanForAddCart8 - 1;

        let parseOfYourCart = parseInt(yourCart.textContent);
        yourCart.textContent = parseOfYourCart - 1;


        let replaceOfCartSpan8;

    if(true){
        let textContentOfCartSpan8 = cartSpan8.textContent;
        console.log(textContentOfCartSpan8);
        replaceOfCartSpan8 = textContentOfCartSpan8.replace("x", "");
        console.log(replaceOfCartSpan8);
    }
    let parseOfCartSpan8 = parseInt(replaceOfCartSpan8)- 1;
    cartSpan8.textContent = `${parseOfCartSpan8}x`;

    let textContentOfCartSpan83 = cartSpan83.textContent;
    let replaceOfCartSpan83 = textContentOfCartSpan83.replace("$", "");
    let parseOfCartSpan83 = parseFloat(replaceOfCartSpan83);

    let calOfTotal = parseFloat(parseOfCartSpan83) - parseFloat(AfterIfStatement8);
    cartSpan83.textContent = `$${calOfTotal}`;

    }
});
incrementIcon9.addEventListener("click", function(event){
    let parseOfSpanForAddCart9 = parseInt(spanForAddCart9.textContent);
    spanForAddCart9.textContent = parseOfSpanForAddCart9 + 1;

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;

    let replaceOfCartSpan9;

    if(true){
        let textContentOfCartSpan9 = cartSpan9.textContent;
        console.log(textContentOfCartSpan9);
        replaceOfCartSpan9 = textContentOfCartSpan9.replace("x", "");
        console.log(replaceOfCartSpan9);
    }
    let parseOfCartSpan9 = parseInt(replaceOfCartSpan9)+ 1;
    cartSpan9.textContent = `${parseOfCartSpan9}x`;

    let textContentOfCartSpan93 = cartSpan93.textContent;
    let replaceOfCartSpan93 = textContentOfCartSpan93.replace("$", "");
    let parseOfCartSpan93 = parseFloat(replaceOfCartSpan93);

    let calOfTotal = parseFloat(parseOfCartSpan93) + parseFloat(AfterIfStatement9);
    cartSpan93.textContent = `$${calOfTotal}`;

});
decrementIcon9.addEventListener("click", function(event){
    if (parseInt(spanForAddCart9.textContent) > 1){
        let parseOfSpanForAddCart9 = parseInt(spanForAddCart9.textContent);
        spanForAddCart9.textContent = parseOfSpanForAddCart9 - 1;

        let parseOfYourCart = parseInt(yourCart.textContent);
        yourCart.textContent = parseOfYourCart - 1;


        let replaceOfCartSpan9;

    if(true){
        let textContentOfCartSpan9 = cartSpan9.textContent;
        console.log(textContentOfCartSpan9);
        replaceOfCartSpan9 = textContentOfCartSpan9.replace("x", "");
        console.log(replaceOfCartSpan9);
    }
    let parseOfCartSpan9 = parseInt(replaceOfCartSpan9)- 1;
    cartSpan9.textContent = `${parseOfCartSpan9}x`;

    let textContentOfCartSpan93 = cartSpan93.textContent;
    let replaceOfCartSpan93 = textContentOfCartSpan93.replace("$", "");
    let parseOfCartSpan93 = parseFloat(replaceOfCartSpan93);

    let calOfTotal = parseFloat(parseOfCartSpan93) - parseFloat(AfterIfStatement9);
    cartSpan93.textContent = `$${calOfTotal}`;

    }
});

