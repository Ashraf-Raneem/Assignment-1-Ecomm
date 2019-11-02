product = JSON.parse(window.localStorage.getItem("productItems"));
cart = JSON.parse(window.localStorage.getItem("cart"));
console.log(cart);
console.log(product);

$.each(product,function(i,value){
    $.each(cart,function(j,value){
    // console.log(product[i].name)
        if(product[i].name == cart[j]){

            var tableName = $("<h3>",{
                class:"header"
            }).text(product[i].name); 

            var tableQuantity = $("<input>",{
                type: "number", 
                value: "1",
                class: "inputQuantity"
            });

            var priceSpan = $("<p>").text("$ ")
            var tablePrice = $("<p>",{
                class: "uniquePrice"
            }).text(product[i].price);
            
            var tableButton = $("<button>",{
                class: "btn btn-warning removeBtn",
                style: "float:right"
            }).text("Remove Item")
            //correspondingPrice.push(s)

/*
            var mainDiv = $("<div>",{
                class: "d-flex justify-content-between mainDiv border-bottom",
                style: "margin-bottom:10px "
            })
            var leftDiv = $("<div>",{
                class: "d-flex justify-content-start"
            }).append(tableName); 

            var midDiv = $("<div>",{
                class: "d-flex justify-content-center"
            }).append(tableQuantity); 

            var endDiv = $("<div>",{
                class: "d-flex justify-content-end"
            }).append(tablePrice,tableButton); 

            mainDiv = mainDiv.append(leftDiv,midDiv,endDiv); 
            $(".cartItemsView").append(mainDiv);          
*/
            var divTable = $("<div>",{
                class: "cartContainer"
            }).append(tableName,tablePrice,tableQuantity,tableButton)
            $(".row").append(divTable)
            
        }
        
        if (cart[j]== null){
            var cover = $("<h2>").text("Your cart is currently empty")
            $(".cartItemsView").append(cover); 
        }
    })
})

    
    var itemQuantity = []; 
    var correspondingPrice = []; 
    $(".inputQuantity").each(function(){
            itemQuantity.push(Number($(this).val())); 
        })
    $(".uniquePrice").each(function(){
        //sum =  sum + Number($(this).text()); 
        correspondingPrice.push(Number($(this).text()));
    })
    var totalBill = math.dot(correspondingPrice,itemQuantity) ; 
    console.log(totalBill)
    $(".priceShow").text("Total Bill: $ "+totalBill); 
    

$(".removeBtn").click(function(){
    var removeItem = $(this).parent().children(".header"); 
    cart =  cart.splice($.inArray(removeItem,cart),1); 
    window.localStorage.setItem("cart",JSON.stringify(cart))
    location.reload(true);
    
})
$(".shop").click(function(){
    window.open("homepage.html");
})
