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
let typeDelivery = document.getElementById("typeDelivery");

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
let imgElement1;
let imgElement2;
let imgElement3;
let imgElement4;
let imgElement5;
let imgElement6;
let imgElement7;
let imgElement8;
let imgElement9;
let liElement1;
let anotherContainer1;
let liElement2;
let anotherContainer2;
let liElement3;
let anotherContainer3;
let liElement4;
let anotherContainer4;
let liElement5;
let anotherContainer5;
let liElement6;
let anotherContainer6;
let liElement7;
let anotherContainer7;
let liElement8;
let anotherContainer8;
let liElement9;
let anotherContainer9;
let containerOfDeleteImg1;
let orderTotal = document.getElementById("orderTotal");
let totalRate = document.getElementById("totalRate");
totalRate.textContent = 0;


localStorage.getItem("setBtn1");

button1.addEventListener("click", function(event){
    button1.classList.add("d-none");
    card1.classList.add("cards-styles-after-click");
    buttonAfterClick1.classList.remove("d-none");
    buttonInCart.classList.remove("d-none"); 

    let parseOfYourCart = parseInt(yourCart.textContent);
    yourCart.textContent = parseOfYourCart + 1;

    cartImg.classList.add("d-none");
    cartPara.classList.add("d-none");
    liElement1 = document.createElement("li");
    liElement1.textContent = item1.textContent;
    liElement1.classList.add("cart-items");
    containerOfItems.appendChild(liElement1);
    
    
    anotherContainer1 = document.createElement("div");

    let divContainerOfCartMini = document.createElement("div");
    divContainerOfCartMini.classList.add("mini-cart");
    anotherContainer1.appendChild(divContainerOfCartMini);

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

    containerOfItems.appendChild(anotherContainer1);

    containerOfDeleteImg1 = document.createElement("div");
    liElement1.appendChild(containerOfDeleteImg1);

    imgElement1 = document.createElement("img");
    imgElement1.src ="./assets/images/icon-remove-item.svg";
    imgElement1.classList.add("remove-img1");
    //imgElement1.classList.id= removeImg1;
    containerOfDeleteImg1.appendChild(imgElement1);

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = cartSpan13.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) + parseFloat(finalRat1)}`;

    typeDelivery.classList.remove("d-none");

    imgElement1.addEventListener("click", function(event){
        liElement1.classList.add("d-none");
        anotherContainer1.classList.add("d-none");
        let replaceSymbel = cartSpan13.textContent.replace("$", "");
        let amount = parseInt(replaceSymbel);
        let replaceAnotherSymbel = totalRate.textContent.replace("$", "");
        let orderAmount = parseInt(replaceAnotherSymbel);
        let finalAmount = orderAmount - amount;
        totalRate.textContent = `$${finalAmount}`;
        let replaceThirdSymbel = cartSpan1.textContent.replace("x", "");
        let countNoOfItems = parseInt(replaceThirdSymbel);
        let yourCartNum = parseInt(yourCart.textContent)-countNoOfItems;
        yourCart.textContent = yourCartNum;
        card1.classList.remove("cards-styles-after-click");
        button1.classList.remove("d-none");
        buttonAfterClick1.classList.add("d-none");
    });

    localStorage.setItem("setBtn1", JSON.stringify(btn1));

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
    liElement2 = document.createElement("li");
    liElement2.textContent = item2.textContent;
    liElement2.classList.add("cart-items");
    containerOfItems.appendChild(liElement2);

    anotherContainer2 = document.createElement("div");

    let divContainerOfCartMini = document.createElement("div");
    divContainerOfCartMini.classList.add("mini-cart");
    anotherContainer2.appendChild(divContainerOfCartMini);

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

    containerOfItems.appendChild(anotherContainer2);

    let containerOfDeleteImg = document.createElement("div");
    liElement2.appendChild(containerOfDeleteImg);

    imgElement2 = document.createElement("img");
    imgElement2.src ="./assets/images/icon-remove-item.svg";
    imgElement2.classList.add("remove-img2");
    //imgElement2.classList.setAttribute("id", "removeImg2");
    liElement2.appendChild(imgElement2);

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = cartSpan23.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) + parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

    typeDelivery.classList.remove("d-none");

    imgElement2.addEventListener("click", function(event){
        liElement2.classList.add("d-none");
        anotherContainer2.classList.add("d-none");
        let replaceSymbel = cartSpan23.textContent.replace("$", "");
        let amount = parseInt(replaceSymbel);
        let replaceAnotherSymbel = totalRate.textContent.replace("$", "");
        let orderAmount = parseInt(replaceAnotherSymbel);
        let finalAmount = orderAmount - amount;
        totalRate.textContent = `$${finalAmount}`;
        let replaceThirdSymbel = cartSpan2.textContent.replace("x", "");
        let countNoOfItems = parseInt(replaceThirdSymbel);
        let yourCartNum = parseInt(yourCart.textContent)-countNoOfItems;
        yourCart.textContent = yourCartNum;
        card2.classList.remove("cards-styles-after-click");
        button2.classList.remove("d-none");
        buttonAfterClick2.classList.add("d-none");
    });
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
    liElement3 = document.createElement("li");
    liElement3.textContent = item3.textContent;
    liElement3.classList.add("cart-items");
    containerOfItems.appendChild(liElement3);

    anotherContainer3 = document.createElement("div");

    let divContainerOfCartMini = document.createElement("div");
    divContainerOfCartMini.classList.add("mini-cart");
    anotherContainer3.appendChild(divContainerOfCartMini);

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

    containerOfItems.appendChild(anotherContainer3);

    let containerOfDeleteImg = document.createElement("div");
    liElement3.appendChild(containerOfDeleteImg);


    imgElement3 = document.createElement("img");
    imgElement3.src ="./assets/images/icon-remove-item.svg";
    imgElement3.classList.add("remove-img3");
    //imgElement3.classList.setAttribute("id", "removeImg3");
    liElement3.appendChild(imgElement3);

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = cartSpan33.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) + parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);
    
    typeDelivery.classList.remove("d-none");

    imgElement3.addEventListener("click", function(event){
        liElement3.classList.add("d-none");
        anotherContainer3.classList.add("d-none");
        let replaceSymbel = cartSpan33.textContent.replace("$", "");
        let amount = parseInt(replaceSymbel);
        let replaceAnotherSymbel = totalRate.textContent.replace("$", "");
        let orderAmount = parseInt(replaceAnotherSymbel);
        let finalAmount = orderAmount - amount;
        totalRate.textContent = `$${finalAmount}`;
        let replaceThirdSymbel = cartSpan3.textContent.replace("x", "");
        let countNoOfItems = parseInt(replaceThirdSymbel);
        let yourCartNum = parseInt(yourCart.textContent)-countNoOfItems;
        yourCart.textContent = yourCartNum;
        card3.classList.remove("cards-styles-after-click");
        button3.classList.remove("d-none");
        buttonAfterClick3.classList.add("d-none");
    });
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
    liElement4 = document.createElement("li");
    liElement4.textContent = item4.textContent;
    liElement4.classList.add("cart-items");
    containerOfItems.appendChild(liElement4);

    anotherContainer4 = document.createElement("div");

    let divContainerOfCartMini = document.createElement("div");
    divContainerOfCartMini.classList.add("mini-cart");
    anotherContainer4.appendChild(divContainerOfCartMini);

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

    containerOfItems.appendChild(anotherContainer4);

    let containerOfDeleteImg = document.createElement("div");
    liElement4.appendChild(containerOfDeleteImg);

    

    imgElement4 = document.createElement("img");
    imgElement4.src ="./assets/images/icon-remove-item.svg";
    imgElement4.classList.add("remove-img4");
    //imgElement4.classList.setAttribute("id", "removeImg4");
    liElement4.appendChild(imgElement4);
    
    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = cartSpan43.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) + parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

    typeDelivery.classList.remove("d-none");

    imgElement4.addEventListener("click", function(event){
        liElement4.classList.add("d-none");
        anotherContainer4.classList.add("d-none");
        let replaceSymbel = cartSpan43.textContent.replace("$", "");
        let amount = parseInt(replaceSymbel);
        let replaceAnotherSymbel = totalRate.textContent.replace("$", "");
        let orderAmount = parseInt(replaceAnotherSymbel);
        let finalAmount = orderAmount - amount;
        totalRate.textContent = `$${finalAmount}`;
        let replaceThirdSymbel = cartSpan4.textContent.replace("x", "");
        let countNoOfItems = parseInt(replaceThirdSymbel);
        let yourCartNum = parseInt(yourCart.textContent)-countNoOfItems;
        yourCart.textContent = yourCartNum;
        card4.classList.remove("cards-styles-after-click");
        button4.classList.remove("d-none");
        buttonAfterClick4.classList.add("d-none");
    });
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
    liElement5 = document.createElement("li");
    liElement5.textContent = item5.textContent;
    liElement5.classList.add("cart-items");
    containerOfItems.appendChild(liElement5);

    anotherContainer5 = document.createElement("div");

    let divContainerOfCartMini = document.createElement("div");
    divContainerOfCartMini.classList.add("mini-cart");
    anotherContainer5.appendChild(divContainerOfCartMini);

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

    containerOfItems.appendChild(anotherContainer5);

    let containerOfDeleteImg = document.createElement("div");
    liElement5.appendChild(containerOfDeleteImg);



    imgElement5 = document.createElement("img");
    imgElement5.src ="./assets/images/icon-remove-item.svg";
    imgElement5.classList.add("remove-img5");
    //imgElement5.classList.setAttribute("id", "removeImg5");
    liElement5.appendChild(imgElement5);

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = cartSpan53.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) + parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

    typeDelivery.classList.remove("d-none");

    imgElement5.addEventListener("click", function(event){
        liElement5.classList.add("d-none");
        anotherContainer5.classList.add("d-none");
        let replaceSymbel = cartSpan53.textContent.replace("$", "");
        let amount = parseInt(replaceSymbel);
        let replaceAnotherSymbel = totalRate.textContent.replace("$", "");
        let orderAmount = parseInt(replaceAnotherSymbel);
        let finalAmount = orderAmount - amount;
        totalRate.textContent = `$${finalAmount}`;
        let replaceThirdSymbel = cartSpan5.textContent.replace("x", "");
        let countNoOfItems = parseInt(replaceThirdSymbel);
        let yourCartNum = parseInt(yourCart.textContent)-countNoOfItems;
        yourCart.textContent = yourCartNum;
        card5.classList.remove("cards-styles-after-click");
        button5.classList.remove("d-none");
        buttonAfterClick5.classList.add("d-none");
    });
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
    liElement6 = document.createElement("li");
    liElement6.textContent = item6.textContent;
    liElement6.classList.add("cart-items");
    containerOfItems.appendChild(liElement6);

    anotherContainer6 = document.createElement("div");

    let divContainerOfCartMini = document.createElement("div");
    divContainerOfCartMini.classList.add("mini-cart");
    anotherContainer6.appendChild(divContainerOfCartMini);

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

    containerOfItems.appendChild(anotherContainer6);

    let containerOfDeleteImg = document.createElement("div");
    liElement6.appendChild(containerOfDeleteImg);



    imgElement6 = document.createElement("img");
    imgElement6.src ="./assets/images/icon-remove-item.svg";
    imgElement6.classList.add("remove-img6");
    //imgElement6.classList.setAttribute("id", "removeImg6");
    liElement6.appendChild(imgElement6);

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = cartSpan63.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) + parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

    typeDelivery.classList.remove("d-none");

    imgElement6.addEventListener("click", function(event){
        liElement6.classList.add("d-none");
        anotherContainer6.classList.add("d-none");
        let replaceSymbel = cartSpan63.textContent.replace("$", "");
        let amount = parseInt(replaceSymbel);
        let replaceAnotherSymbel = totalRate.textContent.replace("$", "");
        let orderAmount = parseInt(replaceAnotherSymbel);
        let finalAmount = orderAmount - amount;
        totalRate.textContent = `$${finalAmount}`;
        let replaceThirdSymbel = cartSpan6.textContent.replace("x", "");
        let countNoOfItems = parseInt(replaceThirdSymbel);
        let yourCartNum = parseInt(yourCart.textContent)-countNoOfItems;
        yourCart.textContent = yourCartNum;
        card6.classList.remove("cards-styles-after-click");
        button6.classList.remove("d-none");
        buttonAfterClick6.classList.add("d-none");
    });
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
    liElement7 = document.createElement("li");
    liElement7.textContent = item7.textContent;
    liElement7.classList.add("cart-items");
    containerOfItems.appendChild(liElement7);

    anotherContainer7 = document.createElement("div");

    let divContainerOfCartMini = document.createElement("div");
    divContainerOfCartMini.classList.add("mini-cart");
    anotherContainer7.appendChild(divContainerOfCartMini);

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

    containerOfItems.appendChild(anotherContainer7);

    let containerOfDeleteImg = document.createElement("div");
    liElement7.appendChild(containerOfDeleteImg);



    imgElement7 = document.createElement("img");
    imgElement7.src ="./assets/images/icon-remove-item.svg";
    imgElement7.classList.add("remove-img7");
    //imgElement7.classList.setAttribute("id", "removeImg7");
    liElement7.appendChild(imgElement7);

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = cartSpan73.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) + parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

    typeDelivery.classList.remove("d-none");

    imgElement7.addEventListener("click", function(event){
        liElement7.classList.add("d-none");
        anotherContainer7.classList.add("d-none");
        let replaceSymbel = cartSpan73.textContent.replace("$", "");
        let amount = parseInt(replaceSymbel);
        let replaceAnotherSymbel = totalRate.textContent.replace("$", "");
        let orderAmount = parseInt(replaceAnotherSymbel);
        let finalAmount = orderAmount - amount;
        totalRate.textContent = `$${finalAmount}`;
        let replaceThirdSymbel = cartSpan7.textContent.replace("x", "");
        let countNoOfItems = parseInt(replaceThirdSymbel);
        let yourCartNum = parseInt(yourCart.textContent)-countNoOfItems;
        yourCart.textContent = yourCartNum;
        card7.classList.remove("cards-styles-after-click");
        button7.classList.remove("d-none");
        buttonAfterClick7.classList.add("d-none");
    });
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
    liElement8 = document.createElement("li");
    liElement8.textContent = item8.textContent;
    liElement8.classList.add("cart-items");
    containerOfItems.appendChild(liElement8);

    anotherContainer8 = document.createElement("div");

    let divContainerOfCartMini = document.createElement("div");
    divContainerOfCartMini.classList.add("mini-cart");
    anotherContainer8.appendChild(divContainerOfCartMini);

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

    containerOfItems.appendChild(anotherContainer8);

    let containerOfDeleteImg = document.createElement("div");
    liElement8.appendChild(containerOfDeleteImg);



    imgElement8 = document.createElement("img");
    imgElement8.src ="./assets/images/icon-remove-item.svg";
    imgElement8.classList.add("remove-img8");
    //imgElement8.classList.setAttribute("id", "removeImg8");
    liElement8.appendChild(imgElement8);

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = cartSpan83.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) + parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

    typeDelivery.classList.remove("d-none");

    imgElement8.addEventListener("click", function(event){
        liElement8.classList.add("d-none");
        anotherContainer8.classList.add("d-none");
        let replaceSymbel = cartSpan83.textContent.replace("$", "");
        let amount = parseInt(replaceSymbel);
        let replaceAnotherSymbel = totalRate.textContent.replace("$", "");
        let orderAmount = parseInt(replaceAnotherSymbel);
        let finalAmount = orderAmount - amount;
        totalRate.textContent = `$${finalAmount}`;
        let replaceThirdSymbel = cartSpan8.textContent.replace("x", "");
        let countNoOfItems = parseInt(replaceThirdSymbel);
        let yourCartNum = parseInt(yourCart.textContent)-countNoOfItems;
        yourCart.textContent = yourCartNum;
        card8.classList.remove("cards-styles-after-click");
        button8.classList.remove("d-none");
        buttonAfterClick8.classList.add("d-none");
    });
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

    liElement9 = document.createElement("li");
    liElement9.textContent = item9.textContent;
    liElement9.classList.add("cart-items");
    containerOfItems.appendChild(liElement9);


    anotherContainer9 = document.createElement("div");

    let divContainerOfCartMini = document.createElement("div");
    divContainerOfCartMini.classList.add("mini-cart");
    anotherContainer9.appendChild(divContainerOfCartMini);

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

    containerOfItems.appendChild(anotherContainer9);

    let containerOfDeleteImg = document.createElement("div");
    liElement9.appendChild(containerOfDeleteImg);



    // let anotherContainer = document.createElement("div");

    // let cartSpan1 = document.createElement("p");
    // cartSpan1.textContent = "Rakesh";
    // anotherContainer.appendChild(cartSpan1);

    // liElement.appendChild(anotherContainer);

    imgElement9 = document.createElement("img");
    imgElement9.src ="./assets/images/icon-remove-item.svg";
    imgElement9.classList.add("remove-img9");
    //imgElement9.classList.setAttribute("id", "removeImg9");
    liElement9.appendChild(imgElement9);

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = cartSpan93.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) + parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

    typeDelivery.classList.remove("d-none");
    
    imgElement9.addEventListener("click", function(event){
        liElement9.classList.add("d-none");
        anotherContainer9.classList.add("d-none");
        let replaceSymbel = cartSpan93.textContent.replace("$", "");
        let amount = parseInt(replaceSymbel);
        let replaceAnotherSymbel = totalRate.textContent.replace("$", "");
        let orderAmount = parseInt(replaceAnotherSymbel);
        let finalAmount = orderAmount - amount;
        totalRate.textContent = `$${finalAmount}`;
        let replaceThirdSymbel = cartSpan9.textContent.replace("x", "");
        let countNoOfItems = parseInt(replaceThirdSymbel);
        let yourCartNum = parseInt(yourCart.textContent)-countNoOfItems;
        yourCart.textContent = yourCartNum;
        card9.classList.remove("cards-styles-after-click");
        button9.classList.remove("d-none");
        buttonAfterClick9.classList.add("d-none");
    });
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

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = rate1.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) + parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

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

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = rate1.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) - parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

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

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = rate2.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) + parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

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

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = rate2.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) - parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

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

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = rate3.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) + parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

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

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = rate3.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) - parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

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


    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = rate4.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) + parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

});
decrementIcon4.addEventListener("click", function(event){
    if (parseInt(spanForAddCart4.textContent) > 1){
        let parseOfSpanForAddCart4 = parseInt(spanForAddCart4.textContent);
        spanForAddCart4.textContent = parseOfSpanForAddCart4 - 1;

        let parseOfYourCart = parseInt(yourCart.textContent);
        yourCart.textContent = parseOfYourCart - 1;

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

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = rate4.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) - parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

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

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = rate5.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) + parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

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

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = rate5.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) - parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

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

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = rate6.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) + parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

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

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = rate6.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) - parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

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

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = rate7.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) + parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

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

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = rate7.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) - parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

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

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = rate8.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) + parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

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

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = rate8.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) - parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

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

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = rate9.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) + parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

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

    orderTotal.classList.remove("d-none");
    let rate = totalRate.textContent;
    let finalRate1 = rate.replace("$", "");
    let rat = rate9.textContent;
    let finalRat1 = rat.replace("$", ""); 
    totalRate.textContent = `$${parseFloat(finalRate1) - parseFloat(finalRat1)}`;
    console.log(finalRate1);
    console.log(finalRat1);
    console.log(totalRate.textContent);

    }
});



