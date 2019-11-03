product = JSON.parse(window.localStorage.getItem("productItems"));
cart = JSON.parse(window.localStorage.getItem("cart"));
console.log(cart);
console.log(product);

$.each(product,function(i,value){
    $.each(cart,function(j,value){
    // console.log(product[i].name)
        if(product[i].name == cart[j]){

            var tableImage = $("<img>",{
                class: "cartImage",
                src: product[i].url,
                
            })

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

            var PriceDiv = $("<div>",{
                class: "d-flex justify-content-center"
            }).append(priceSpan,tablePrice); 

            var endDiv = $("<div>",{
                class: "d-flex justify-content-end"
            }).append(tableButton); 

            mainDiv = mainDiv.append(leftDiv,midDiv,PriceDiv,endDiv); 
            $(".cartItemsView").append(mainDiv);          
/*
            var divTable = $("<div>",{
                class: "cartContainer border-bottom"
            }).append(tableImage,tableName,tablePrice,tableQuantity,tableButton)
            $(".row").append(divTable)
    */        
        }
        
        if(cart.length===0){
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
    var itemsRemove = JSON.parse(window.localStorage.getItem("cart"))
    var removeItem = $(this).parent().prev().prev().prev().children(".header").text(); 
    itemsRemove.splice($.inArray(removeItem,itemsRemove),1); 
    window.localStorage.setItem("cart",JSON.stringify(itemsRemove))
    location.reload(true);
    
})
$(".shop").click(function(){
    window.open("homepage.html");
})
