var product = JSON.parse(window.localStorage.getItem('productItems')); 
var cardClicked = JSON.parse(window.localStorage.getItem('cardClicked')); 
//console.log(cardClicked); 


$.each(product,function(i,val){
    //console.log(product[i].name); 
    if (product[i].name === cardClicked){
        let divMain = $("<div>",{
            class: "mainDiv shadow-lg row", 
            style: "padding: 10px"
        })
        let rightCol = $("<img>",{
            class: "col-md-4",
            src: product[i].url
        })
        let leftCol = $("<div>",{
            class:"col-md-8"
        })
        let productHeader = $("<h2>").text(product[i].name); 
        let productDesc = $("<p>").append(product[i].productDetail);
        let productQuantity = $("<p>").append("Quantity: "+ ""+ product[i].quantity);
        let productPrice = $("<p>").append("Price: $ "+ product[i].price); 
        let divBtn = $("<button>",{
            class: "btn btn-danger btn-sm cart-btn"
        }).text("Add to cart")
        leftCol = leftCol.append(productHeader,productDesc,productQuantity,productPrice,divBtn); 
        divMain = divMain.append(rightCol,leftCol); 
        $(".productContainer").append(divMain); 
        window.localStorage.setItem('cardClicked',null)
    }

});

var cart = []; 
$(".cart-btn").click(function(){
    var cartHeader = []; 
    var cartHeader = $(this).parent().children("h5").text(); 
    console.log(cartHeader);
    cart= JSON.parse(window.localStorage.getItem('cart'))
    if(cart == null){
        cart_items = [cartHeader]
    }
    else{
        cart.push(cartHeader);
    }
    window.localStorage.setItem('cart', JSON.stringify(cart))
    location.reload(true);
})
