$("#firstElement").hide(); 

var product  = JSON.parse(window.localStorage.getItem('productItems'));
console.log(product); 
    if (product ==null){

        var product = [{
            name: "Denim Jacket",
            productDetail:"This is a figuarene",
            url: "img/denimJacket.jpg",
            quantity: "5",
            price: "1500"
        }]
            window.localStorage.setItem('productItems',JSON.stringify(product)); 
    }
/*var window = document.getElementById("1stcol-display").innerHTML ; 
window = product.innerHTML; 
document.body.append(window);
*/
/*
product.forEach(function(elements){
    // $("#1stcol-display").text(elements["price"])
    /*let div= $("<div>").attr("class", "col-sm-4"); 
    $(".row").append(div); 
    let itemName = $("<h1>").text(elements["name"]);
    let itemPrices = $("<h4>").text("$"+" "+ elements["price"]);

    $(".row").append(); 
})
*/
$(".cartBtn").click(function(){
    window.open("cartView.html");
})
cart = window.localStorage.getItem("cart"); 

var cartLength
if(cart != null){
    cartLength = cart.length
}
else{
    cartLength = 0
}
$('.cartBtn').children("span").children("sup").text(cartLength);


var cardCount = 1; 
product.forEach(function(e){  
    var divNewCard = $('<div>', {
        id: ('card' + (++cardCount)),
        class: 'card shadow-lg m-3',
        style: 'width: 18rem;' 
           
    });

  /*  var divCardBlock = $("<div>", {
        class: "card-block"
    })
*/
    var divCardImage = $("<img>",{
        class:"card-img-top",
        src: e['url'],
    })

    var divCardBody = $("<div>",{
        class: "card-body"
    })

    var divCardHeader = $("<h5>",{
        class: "card-title"
    }).append(e["name"]); 

    var divCardText = $("<p>",{
        class: "card-text"
    }).text(e['productDetail'])

    var divCardPrice = $("<p>",{
        class: "card-price"
    }).text("Price: $"+e["price"])

    var divCardQuantity = $("<p>",{
        class: "card-quantity"
    }).append("Number of Items available: "+e["quantity"])

    var divCardButton = $("<button>",{
        class: "btn btn-danger btn-sm cart-btn"
    }).text("Add to Cart")

    var divCardBody = divCardBody.append(divCardHeader,divCardText,divCardQuantity,divCardPrice,divCardButton);
    var divCompleteCard = divNewCard.append(divCardImage).append(divCardBody);
    //.append(divCardText)

    var lastCard = $('div.row div.card').last();
    divCompleteCard.insertAfter(lastCard);
    
})

//single page view

$(".card-img-top").click(function(){
    let cardClicked = $(this).next().children("h5").text(); 
    window.localStorage.setItem("cardClicked", JSON.stringify(cardClicked));
    window.open("singlePage.html");
    console.log(cardClicked);
})

//form-page
$("#notice").hide();
var eachData= {}; 
var header = []; 
$('#productForm').submit(function(event){
    event.preventDefault();
    var data = $(this).serializeArray();
    data.forEach(function(x){
        eachData[x.name]=x.value;
    })
    product.push(eachData);
    window.localStorage.setItem('productItems', JSON.stringify(product));
   // var productItems = JSON.parse(window.localStorage.getItem('productItems'));
    //console.log(productItems);
    $("#notice").show(); 
});

var cart = []; 
$(".cart-btn").click(function(){
    var cartHeader = []; 
    var cartHeader = $(this).parent().children("h5").text(); 
    console.log(cartHeader);
    cart= JSON.parse(window.localStorage.getItem('cart'))
    if(cart == null){
        cart = [cartHeader]
    }
    else{
        cart.push(cartHeader);
    }
    window.localStorage.setItem('cart', JSON.stringify(cart))
    alert("The product has been added to your cart");
    location.reload(true);
})
console.log(JSON.parse(window.localStorage.getItem("cart")));
/*
 var finaldata = [15,{name: 25}]
 var eachData= {}; 
$("#my-form").submit(function(event){
    var data = $(this).serializeArray();
    data.forEach(function(x){
        eachData[x.name]= x.value; 
    });
        finaldata.push(eachData); 
        console.log(finaldata);  
    
    event.preventDefault();
    */
