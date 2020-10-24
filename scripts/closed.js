
console.log("Closed");

// Add modal to order online click events - start
$("#order-online").html(
	`<a class="box-shadow" data-toggle="modal" data-target="#exampleModal">Order Online</a>`
)

$("#hero-order-online-button").html(
	`<a id="hero-button" class="mt-3" data-toggle="modal" data-target="#exampleModal">ORDER ONLINE</a>`
)

$("#desktop-hero-order-online").html(
	`<a id="hero-button" class="mt-3" data-toggle="modal" data-target="#exampleModal">ORDER ONLINE</a>`
)

$("#order-online-mobile").html(
	`<a data-toggle="modal" data-target="#exampleModal" href="https://nellasnutribar.square.site/">Order Online</a>`
)

$(".product-click").click(function(event){
	event.preventDefault();
	$('#exampleModal').modal('show'); // show modal
	$("#continue-link").click(function(){
		window.location = event.currentTarget.href
	})
});
// Add modal to order online click events - end
$(".modal-body").html(
	"<p style='color: black;'>Sorry, the store is currently closed while we are on vacation. We will be open as normal again on Novemner 3rd.</span></p>"
)
// Generate modal message - end
			