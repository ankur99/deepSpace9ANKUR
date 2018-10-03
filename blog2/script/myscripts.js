
// script for seleting premium seats

$(document).ready(function(){
    $(".premium-seat").click(function(){
        var element = $(this).attr('id');
        var numbers = parseInt(element.match(/\d+/g));
        $(".seat").removeClass("selected");
        var seats=$("#no_of_seats").val();
        $("#type_of_seat").val(150);
        $("#continue_btn").text("Pay Rs. "+($("#no_of_seats").val()*$("#type_of_seat").val()));
        $("#continue_btn").css("display", "block");
        for(var i=0;i<seats;i++){
        	$("#P"+numbers).addClass("selected");
        	numbers++;
        }
	  
    });
});




// script for seleting general seats

$(document).ready(function(){
    $(".general-seat").click(function(){
        var element = $(this).attr('id');
        var numbers = parseInt(element.match(/\d+/g));
        $(".seat").removeClass("selected");
        var seats=$("#no_of_seats").val();
        $("#type_of_seat").val(100);
        $("#continue_btn").text("Pay Rs. "+($("#no_of_seats").val()*$("#type_of_seat").val()));
        $("#continue_btn").css("display", "block");
        for(var i=0;i<seats;i++){
        	$("#G"+numbers).addClass("selected");
        	numbers++;
        }
	  
    });
});




// script for popping modal n page load

$(window).on('load',function(){
        $('#myModal').modal('show');

    });





// script for higligting the chosen number of seat

$(document).ready(function(){
    $(".col-md-1").click(function(){
        	$(".col-md-1").removeClass("selected-seats");
        	$(this).addClass("selected-seats");
        
	  
    });
});




// script for changing the images from car to train and updating flag for seat number

$(document).ready(function(){
$('#seat1').on({
    'click': function(){
    	$("#no_of_seats").val(1);
        $('.seat-img').attr('src','images/scooter.png');
    }
});


$('#seat2').on({
    'click': function(){
    	$("#no_of_seats").val(2);
        $('.seat-img').attr('src','images/quad.png');
    }
});


$('#seat3').on({
    'click': function(){
    	$("#no_of_seats").val(3);
        $('.seat-img').attr('src','images/taxi.png');
    }
});


$('#seat4').on({
    'click': function(){
    	$("#no_of_seats").val(4);
        $('.seat-img').attr('src','images/car.png');
    }
});


$('#seat5').on({
    'click': function(){
    	$("#no_of_seats").val(5);
        $('.seat-img').attr('src','images/school-bus.png');
    }
});



$('#seat6').on({
    'click': function(){
    	$("#no_of_seats").val(6);
        $('.seat-img').attr('src','images/volskwagen-van.png');
    }
});



$('#seat7').on({
    'click': function(){
    	$("#no_of_seats").val(7);
        $('.seat-img').attr('src','images/buses.png');
    }
});



$('#seat8').on({
    'click': function(){
    	$("#no_of_seats").val(8);
        $('.seat-img').attr('src','images/bus-stop.png');
    }
});



$('#seat9').on({
    'click': function(){
    	$("#no_of_seats").val(9);
        $('.seat-img').attr('src','images/train.png');
    }
});



$('#seat10').on({
    'click': function(){
    	$("#no_of_seats").val(10);
        $('.seat-img').attr('src','images/train (1).png');
    }
});


$('#select_no_seat').on({
    'click': function(){
        if($( ".col-md-1" ).hasClass( "selected-seats" )){
        	$(".col-md-1").removeClass("selected-seats");
        	$('#myModal').modal('toggle');
        	$("#type_of_seat").val(0);
        	$(".seat").removeClass("selected");
        	$("#continue_btn").css("display", "none");
        	$("#seat_text").text($("#no_of_seats").val()+" tickets");
        }
        else{
        	alert("Please Select the number of seats!");
        }
    }
});

});


