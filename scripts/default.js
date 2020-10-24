
			var today = new Date();
			var day = today.getDay();
			var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
			console.log("Today is : " + daylist[day] + ".");
			var hour = today.getHours();
			var minute = today.getMinutes();
			var second = today.getSeconds();
			var prepand = (hour >= 12)? " PM ":" AM ";
			hour = (hour >= 12)? hour - 12: hour;
			if (hour===0 && prepand===' PM ') 
			{ 
			if (minute===0 && second===0)
			{ 
			hour=12;
			prepand=' Noon';
			} 
			else
			{ 
			hour=12;
			prepand=' PM';
			} 
			} 
			if (hour===0 && prepand===' AM ') 
			{ 
			if (minute===0 && second===0)
			{ 
			hour=12;
			prepand=' Midnight';
			} 
			else
			{ 
			hour=12;
			prepand=' AM';
			} 
			}
		
			let currentHour = today.getHours() * 100;
			let currentMinutes = today.getMinutes();
		
			let startHour = 800;
			let startMinutes = 45;
		
			let endHour = 1600;
			let endMinutes = 45;
		
			let endHourSaturday = 1500;
			let endMinutesSaturday = 45;
		
		switch (daylist[day]) {
			case "Sunday": 
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
						"<p style='color: black;'>Sorry, we are closed on Sundays and Mondays (tomorrow). You can still place an order for Tuesday - we'll have it ready for <span style='color:red;'>Tuesday morning at 9:00 AM.</span></p>"
					)
					// Generate modal message - end
			break;
			case "Monday": 
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
						"<p style='color: black;'>Sorry, we are closed on Mondays. You can still place an order for tomorrow - we'll have it ready for <span style='color:red;'>tomorrow (Tuesday) morning at 9:00 AM.</span></p>"
					)
					// Generate modal message - end
			  break;
			  case "Tuesday": 
					console.log("Open Time: " + startHour + startMinutes);
					console.log("Current Time: " + currentHour + currentMinutes);
					console.log("Close Time: " + endHour + endMinutes);
					if ( (currentHour + currentMinutes < startHour + startMinutes) || (currentHour + currentMinutes >= endHour + endMinutes) ) {
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
					}
					// Add modal to order online click events - end
		
					// Generate modal message - start
					if (prepand.includes("AM")) { // Open day morning
						$(".modal-body").html(
							`<p style="color: black;">Sorry, we are not open yet. You can still place an order - we'll have it ready for <span style="color:red;">9:00 AM.</span></p>`
						)
					} else if (prepand.includes("PM")) { // today is not day before closing
						$(".modal-body").html(
							`<p style="color: black;">Sorry, online ordering has ended for today. You can still place an order for tomorrow - we'll have it ready for <span style="color:red;">tomorrow at 9:00 AM.</span></p>`
						)
					} else {
					// Generate modal message - end
		
					// if we are open
						console.log("Open");
		
						$("#order-online").html(
							`<a class="box-shadow" href="https://nellasnutribar.square.site/">Order Online</a>`
						)
		
						$("#hero-order-online-button").html(
							`<a id="hero-button" class="mt-3" href="https://nellasnutribar.square.site/">ORDER ONLINE</a>`
						)
		
						$("#desktop-hero-order-online").html(
							`<a id="hero-button" class="mt-3" href="https://nellasnutribar.square.site/">ORDER ONLINE</a>`
						)
		
						$("#order-online-mobile").html(
							`<a href="https://nellasnutribar.square.site/">Order Online</a>`
						)
					}
		
			  break;
			  case "Wednesday": 
					console.log("Open Time: " + startHour + startMinutes);
					console.log("Current Time: " + currentHour + currentMinutes);
					console.log("Close Time: " + endHour + endMinutes);
					if ( (currentHour + currentMinutes < startHour + startMinutes) || (currentHour + currentMinutes >= endHour + endMinutes) ) {
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
					}
					// Add modal to order online click events - end
		
					// Generate modal message - start
					if (prepand.includes("AM")) { // Open day morning
						$(".modal-body").html(
							`<p style="color: black;">Sorry, we are not open yet. You can still place an order - we'll have it ready for <span style="color:red;">9:00 AM.</span></p>`
						)
					} else if (prepand.includes("PM")) { // today is not day before closing
						$(".modal-body").html(
							`<p style="color: black;">Sorry, online ordering has ended for today. You can still place an order for tomorrow - we'll have it ready for <span style="color:red;">tomorrow at 9:00 AM.</span></p>`
						)
					} else {
					// Generate modal message - end
		
					// if we are open
						console.log("Open");
		
						$("#order-online").html(
							`<a class="box-shadow" href="https://nellasnutribar.square.site/">Order Online</a>`
						)
		
						$("#hero-order-online-button").html(
							`<a id="hero-button" class="mt-3" href="https://nellasnutribar.square.site/">ORDER ONLINE</a>`
						)
		
						$("#desktop-hero-order-online").html(
							`<a id="hero-button" class="mt-3" href="https://nellasnutribar.square.site/">ORDER ONLINE</a>`
						)
		
						$("#order-online-mobile").html(
							`<a href="https://nellasnutribar.square.site/">Order Online</a>`
						)
					}
			  break;
			  case "Thursday": 
					console.log("Open Time: " + startHour + startMinutes);
					console.log("Current Time: " + currentHour + currentMinutes);
					console.log("Close Time: " + endHour + endMinutes);
					if ( (currentHour + currentMinutes < startHour + startMinutes) || (currentHour + currentMinutes >= endHour + endMinutes) ) {
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
					}
					// Add modal to order online click events - end
		
					// Generate modal message - start
					if (prepand.includes("AM")) { // Open day morning
						$(".modal-body").html(
							`<p style="color: black;">Sorry, we are not open yet. You can still place an order - we'll have it ready for <span style="color:red;">9:00 AM.</span></p>`
						)
					} else if (prepand.includes("PM")) { // today is not day before closing
						$(".modal-body").html(
							`<p style="color: black;">Sorry, online ordering has ended for today. You can still place an order for tomorrow - we'll have it ready for <span style="color:red;">tomorrow at 9:00 AM.</span></p>`
						)
					} else {
					// Generate modal message - end
		
					// if we are open
						console.log("Open");
		
						$("#order-online").html(
							`<a class="box-shadow" href="https://nellasnutribar.square.site/">Order Online</a>`
						)
		
						$("#hero-order-online-button").html(
							`<a id="hero-button" class="mt-3" href="https://nellasnutribar.square.site/">ORDER ONLINE</a>`
						)
		
						$("#desktop-hero-order-online").html(
							`<a id="hero-button" class="mt-3" href="https://nellasnutribar.square.site/">ORDER ONLINE</a>`
						)
		
						$("#order-online-mobile").html(
							`<a href="https://nellasnutribar.square.site/">Order Online</a>`
						)
					}
			  break;
			  case "Friday":
					console.log("Open Time: " + startHour + startMinutes);
					console.log("Current Time: " + currentHour + currentMinutes);
					console.log("Close Time: " + endHour + endMinutes);
					if ( (currentHour + currentMinutes < startHour + startMinutes) || (currentHour + currentMinutes >= endHour + endMinutes) ) {
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
					}
					// Add modal to order online click events - end
		
					// Generate modal message - start
					if (prepand.includes("AM")) { // Open day morning
						$(".modal-body").html(
							`<p style="color: black;">Sorry, we are not open yet. You can still place an order - we'll have it ready for <span style="color:red;">9:00 AM.</span></p>`
						)
					} else if (prepand.includes("PM")) { // today is not day before closing
						$(".modal-body").html(
							`<p style="color: black;">Sorry, online ordering has ended for today. You can still place an order for tomorrow - we'll have it ready for <span style="color:red;">tomorrow at 9:00 AM.</span></p>`
						)
					} else {
					// Generate modal message - end
		
					// if we are open
						console.log("Open");
		
						$("#order-online").html(
							`<a class="box-shadow" href="https://nellasnutribar.square.site/">Order Online</a>`
						)
		
						$("#hero-order-online-button").html(
							`<a id="hero-button" class="mt-3" href="https://nellasnutribar.square.site/">ORDER ONLINE</a>`
						)
		
						$("#desktop-hero-order-online").html(
							`<a id="hero-button" class="mt-3" href="https://nellasnutribar.square.site/">ORDER ONLINE</a>`
						)
		
						$("#order-online-mobile").html(
							`<a href="https://nellasnutribar.square.site/">Order Online</a>`
						)
					}
			  break;
			  case "Saturday":
					console.log("Open Time: " + startHour + startMinutes);
					console.log("Current Time: " + currentHour + currentMinutes);
					console.log("Close Time: " + endHourSaturday + endMinutesSaturday);
					if ( (currentHour + currentMinutes < startHour + startMinutes) || (currentHour + currentMinutes >= endHourSaturday + endMinutesSaturday) ) {
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
					}
					// Add modal to order online click events - end
		
					// Generate modal message - start
					if (prepand.includes("AM")) { // Open day morning
						$(".modal-body").html(
							`<p style="color: black;">Sorry, we are not open yet. You can still place an order - we'll have it ready for <span style="color:red;">9:00 AM.</span></p>`
						)
					} else if (prepand.includes("PM")) { // today is not day before closing
						$(".modal-body").html(
							`<p style="color: black;">Sorry, online ordering has ended for today. We are closed Sundays and Mondays but you can still place an order for Tuesday - we'll have it ready for <span style="color:red;"> Tuesday tomorrow at 9:00 AM.</span></p>`
						)
					} else {
					// Generate modal message - end
		
					// if we are open
						console.log("Open");
		
						$("#order-online").html(
							`<a class="box-shadow" href="https://nellasnutribar.square.site/">Order Online</a>`
						)
		
						$("#hero-order-online-button").html(
							`<a id="hero-button" class="mt-3" href="https://nellasnutribar.square.site/">ORDER ONLINE</a>`
						)
		
						$("#desktop-hero-order-online").html(
							`<a id="hero-button" class="mt-3" href="https://nellasnutribar.square.site/">ORDER ONLINE</a>`
						)
		
						$("#order-online-mobile").html(
							`<a href="https://nellasnutribar.square.site/">Order Online</a>`
						)
					}
		}

