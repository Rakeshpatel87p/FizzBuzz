$( document ).ready(function() {
    console.log( "ready!" );


for( var num =1; num<=100; num++){
		if (num % 3 ==0 && num % 5 ==0) {
			$("body").append("<li>Fizz Buzz</li>");
		}

		else if (num % 3 == 0) {
			$("body").append("<li>Fizz</li>");
		}

		else if (num % 5 == 0){
			$("body").append("<li>Buzz</li>");
		}

		else {
			$("body").append("<li>" + num + "</li>");
		}

	}
	


});