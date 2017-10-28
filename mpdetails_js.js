//constructor to define parameters
function harness(size, color, quantity, img) {
    this.size = size;
    this.color = color;
    this.quantity = quantity;
    this.img = img;
}

$(document).ready(function(){

//////////////////////// AESTHETICS //////////////////////////////

//add halo around color selection
$(".circle").click(function(){
    $(".selected-color").removeClass("selected-color");
    $(this).addClass("selected-color");
    });

//view product in red
$("#circle1").click(function(){
    $("#large-img").attr("src","images/dog_detail_1_red.png");
    $("#color-label").text("Strawberry");
});

//view product in black
$("#circle2").click(function(){
    $("#large-img").attr("src","images/dog_detail_1.jpg");
    $("#color-label").text("Blackberry");
});

//view product in green
$("#circle3").click(function(){
    $("#large-img").attr("src","images/dog_detail_1_green.png");
    $("#color-label").text("Camouflage");
});

//view product in orange
$("#circle4").click(function(){
    $("#large-img").attr("src","images/dog_detail_1_yellow.png");
    $("#color-label").text("Fire Orange");
});

//view product in blue
$("#circle5").click(function(){
    $("#large-img").attr("src","images/dog_detail_1_blue.png");
    $("#color-label").text("Night Moon");
});

//view product in purple
$("#circle6").click(function(){
    $("#large-img").attr("src","images/dog_detail_1_purple.png");
    $("#color-label").text("Crazyberry");
});

///////////////////////// COUNTER ////////////////////////////

//counter for cart items

// $("#cart-button").click(function(){

//     //store cart items
// });

///////////////////// ADD TO CART STORAGE //////////////////////


//"add to cart" saves product details
$("#cart-button").click(function() {
    //creating array; accounting for empty cart
     var arr = JSON.parse(localStorage.getItem("cart")) || [];

    //adding cart counter
    count = arr.length;
    document.getElementById("cart-count").innerHTML = count;

    //capturing drop down selections, text, and image for selected product
    var sizeInput =  $("#sizedrop").find("option:selected").text();
    var quantInput = $("#quantdrop").find("option:selected").text();
    var colorInput = $("#color-label").text();
    var imgInput = $("#large-img").attr("src");

    //creates new object containing parameters
    var cartHarness = {"size":sizeInput,"color":colorInput,"quantity":quantInput,"img":imgInput};
    //gets existing cart
    var oldCart = JSON.parse(localStorage.getItem("cart")) || [];

    //calls empty array if there's no existing cart items


    //updates old cart with new item
    oldCart.push(cartHarness);

    //saves updated cart to local storage
    localStorage.setItem("cart", JSON.stringify(oldCart));
    adding();
    /*
    console.log(sizeInput);
    console.log(quantInput);
    console.log(colorInput);
    console.log(imgInput);
    */

});


/*
var cartItems = JSON.parse(localStorage.getItem("cart"));

var myCart = JSON.parse(localStorage.getItem("cart"));

// myCart looks like [{item1}, {item2}, {item2}]



var cartHtml = "";
for (var i = 0; i<myCart.length; i++) {
   var item = myCart[i];
   cartHtml = cartHtml + constructHtml("Dog Adventure Harness",, ...);
}

// render cartHtml
*/

});


/*
function constructHtml(img, name, price, size, color, quant) {

    var prefix = '<div class="cart-item"><div class="cart-img"><img src="dog_detail_1.jpg"></div><div class="cart-item-details"><div>';

    var imgHtml = "<div id = 'large-img'>" + img + "</div>";
    var nameHtml = "<div class='item-name'>" + name + "</div>";
    var priceHtml = "<div class='item-price'>" + price + "</div>";
    var sizeHtml = "<div class='item-size'>" + size + "</div>";
    var colorHtml = "<div class='item-color'>" + color + "</div>";
    var quantHtml = "<div class='item-quant'>" + quant + "</div>";

    var suffix = '</div></div></div>'
    return prefix + nameHtml + priceHtml + sizeHtml + colorHtml + quantHtml + suffix;
} */