//Autor: Pius Ganter A904784
$(document).ready(function() {

		$('.nameHighscore').hide()
//true if vehicle was touching the objects
		var person1 = false;
		var person2 = false;
		var person3 = false;
		var person4 = false;
		var tecnun = false;
		var startButtonPressed = true;
		var gameFinished = false;
 
	

	/*$('.starte').addClass('disabled'); */
	
function startGame()
		{
			startButtonPressed = true;
		}
function endGame()
		{
			startButtonPressed = false;
		}
		
//here there are all the collision tests	

/*collision between vehicle and weibe/ person1*/
function collisione($vehicle, $weibe) {
      var x1 = $vehicle.offset().left;
      var y1 = $vehicle.offset().top;
      var h1 = $vehicle.outerHeight(true);
      var w1 = $vehicle.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $weibe.offset().left;
      var y2 = $weibe.offset().top;
      var h2 = $weibe.outerHeight(true);
      var w2 = $weibe.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (!(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2))
		{
			$('#weibe').hide();
			person1 = true;
			clearInterval(refreshIntervalIde);
		}
      return true;
    }
var refreshIntervalIde =setInterval(function() {
    collisione($('#vehicle'), $('#weibe'));
}, 340);



/*collision between vehicle and weib/person2*/
function collision($vehicle, $weib) {
      var x1 = $vehicle.offset().left;
      var y1 = $vehicle.offset().top;
      var h1 = $vehicle.outerHeight(true);
      var w1 = $vehicle.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $weib.offset().left;
      var y2 = $weib.offset().top;
      var h2 = $weib.outerHeight(true);
      var w2 = $weib.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (!(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2))
	  {
			$('#weib').hide();
			person2 = true;
			clearInterval(refreshIntervalIde0);
	  }
      return true;
    }
var refreshIntervalIde0 = setInterval(function() {
    collision($('#vehicle'), $('#weib'));
}, 450);



/*collision between vehicle and simson/person3*/
function collision1($vehicle, $simson) {
      var x1 = $vehicle.offset().left;
      var y1 = $vehicle.offset().top;
      var h1 = $vehicle.outerHeight(true);
      var w1 = $vehicle.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $simson.offset().left;
      var y2 = $simson.offset().top;
      var h2 = $simson.outerHeight(true);
      var w2 = $simson.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (!(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2)) 
		{
			
			$('#simson').hide();
			person3 = true;
			clearInterval(refreshIntervalId1);
		}
      return true;
    }
var refreshIntervalId1 = setInterval(function() {
    collision1($('#vehicle'), $('#simson'));
}, 370);



/*collision between vehicle and junge/person4*/
function collision2($vehicle, $junge) {
      var x1 = $vehicle.offset().left;
      var y1 = $vehicle.offset().top;
      var h1 = $vehicle.outerHeight(true);
      var w1 = $vehicle.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $junge.offset().left;
      var y2 = $junge.offset().top;
      var h2 = $junge.outerHeight(true);
      var w2 = $junge.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (!(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2)) 
	  
	  {
			$('#junge').hide();
			person4 = true;
			clearInterval(refreshIntervalId2);
	  }
      return true;
    }
var refreshIntervalId2 = setInterval(function() {
    collision2($('#vehicle'), $('#junge'));
}, 480);


/*collision between vehicle and tecnun    here is the code for the end of the game, when the driver returns*********************************************************/
function collision3($vehicle, $tecnun) {
      var x1 = $vehicle.offset().left;
      var y1 = $vehicle.offset().top;
      var h1 = $vehicle.outerHeight(true);
      var w1 = $vehicle.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $tecnun.offset().left;
      var y2 = $tecnun.offset().top;
      var h2 = $tecnun.outerHeight(true);
      var w2 = $tecnun.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (!(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2)) 
	  
	  {		
	 
			if(person1 && person2 && person3 && person4 ) // are all the four persons touched?
				
			{	
				/*$('.starte').removeClass('disabled'); */
				$('#vehicle').toggle( "fold" ); 
				stop(); //stops the time
				$('.nameHighscore').show();//shows the field in order to give in the highscore name
				endGame(); // vehicle can not move anymore
				gameFinished = true;
				
				clearInterval(refreshIntervalId3);
				
				
			}
			else {	
							
			
				}
	  }
      return true;
    }
var refreshIntervalId3 = setInterval(function() {
    collision3($('#vehicle'), $('#tecnun'));
}, 400);


/*collision between vehicle and river*/
function collision5($vehicle, $river) {
      var x1 = $vehicle.offset().left;
      var y1 = $vehicle.offset().top;
      var h1 = $vehicle.outerHeight(true);
      var w1 = $vehicle.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $river.offset().left;
      var y2 = $river.offset().top;
      var h2 = $river.outerHeight(true);
      var w2 = $river.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (!(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2)) 
	  
	  {
			$('#vehicle').effect('bounce',{times:3},500); 
			
	  }
      return true;
    }
setInterval(function() {
    collision5($('#vehicle'), $('#river'));
}, 800);

/*collision between vehicle and river1*/
function collision6($vehicle, $river1) {
      var x1 = $vehicle.offset().left;
      var y1 = $vehicle.offset().top;
      var h1 = $vehicle.outerHeight(true);
      var w1 = $vehicle.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $river1.offset().left;
      var y2 = $river1.offset().top;
      var h2 = $river1.outerHeight(true);
      var w2 = $river1.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (!(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2)) 
	  
	  {
			$('#vehicle').effect('bounce',{times:3},600);
			
	  }
      return true;
    }
setInterval(function() {
    collision6($('#vehicle'), $('#river1'));
}, 800);


/*collision between vehicle and concha*/
function collision7($vehicle, $concha) {
      var x1 = $vehicle.offset().left;
      var y1 = $vehicle.offset().top;
      var h1 = $vehicle.outerHeight(true);
      var w1 = $vehicle.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $concha.offset().left;
      var y2 = $concha.offset().top;
      var h2 = $concha.outerHeight(true);
      var w2 = $concha.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (!(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2)) 
	  
	  {
			$('#vehicle').effect('bounce',{times:3},500);
			
	  }
      return true;
    }
setInterval(function() {
    collision7($('#vehicle'), $('#concha'));
}, 700);


/*collision between vehicle and tope*/
function collision8($vehicle, $tope) {
      var x1 = $vehicle.offset().left;
      var y1 = $vehicle.offset().top;
      var h1 = $vehicle.outerHeight(true);
      var w1 = $vehicle.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $tope.offset().left;
      var y2 = $tope.offset().top;
      var h2 = $tope.outerHeight(true);
      var w2 = $tope.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (!(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2)) 
	  
	  {
			$('#vehicle').effect('bounce',{times:3},500);
			
	  }
      return true;
    }
setInterval(function() {
    collision8($('#vehicle'), $('#tope'));
}, 800);


/*collision between vehicle and cat*/
function collision9($vehicle, $cat) {
      var x1 = $vehicle.offset().left;
      var y1 = $vehicle.offset().top;
      var h1 = $vehicle.outerHeight(true);
      var w1 = $vehicle.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $cat.offset().left;
      var y2 = $cat.offset().top;
      var h2 = $cat.outerHeight(true);
      var w2 = $cat.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (!(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2)) 
	  
	  {		
			
			$('#cat').effect('explode');
			$('#vehicle').effect('bounce',{times:3},500);
			clearInterval(refreshIntervalId9);
	  }
      return true;
    }
var refreshIntervalId9 =setInterval(function() {
    collision9($('#vehicle'), $('#cat'));
}, 400);



/*collision between vehicle and lights*/
function collision10($vehicle, $lights) {
      var x1 = $vehicle.offset().left;
      var y1 = $vehicle.offset().top;
      var h1 = $vehicle.outerHeight(true);
      var w1 = $vehicle.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $lights.offset().left;
      var y2 = $lights.offset().top;
      var h2 = $lights.outerHeight(true);
      var w2 = $lights.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (!(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2)) 
	  
	  {
			$('#vehicle').effect('bounce',{times:3},600);
		
			
	  }
      return true;
    }
	
	
var refreshIntervalId10 = setInterval(function() {
    collision10($('#vehicle'), $('#lights'));
}, 800);

		
	






	
		
 $(document).keyup(function(key) {
 
 if(startButtonPressed)
		{
			
			start(); //starts the clock
			
/* here is the code for controlling the vehicle*/
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('#vehicle').animate({left: "-=30px"}, 50);
				break;
			// Up Arrow Pressed
			case 38:
				$('#vehicle').animate({top: "-=30px"}, 50);
				break;
			// Right Arrow Pressed
			case 39:
				$('#vehicle').animate({left: "+=30px"}, 50);
				break;
			// Down Arrow Pressed
			case 40:
					
					$('#vehicle').animate({top: "+=30px"}, 50);
				break;
			}	
		}
	});
});
