$(document).ready(function () {
	var id = 0,i=0,k=0,x,d=0,lives=3;
	var order = [];
	$('.score').append(0);
	$('.lives').append(3);
	$('.start').click(function () {
			console.log("called");
			lives=3;
			id=0;
			$('.score').html("Score:0");
			$('.lives').html("Lives Remaining:3");
			d=0;
			statgame();
			$('.start').hide();
			$('.game').show();
	});
	$('.strict').click(function () {
			console.log("called");
			lives=0;
			id=0;
			$('.score').html("Score:0");
			$('.lives').html("");
			d=0;
			statgame();
			$('.start').hide();
			$('.strict').hide();
			$('.game').show();
	});
	function PlaySound(y) {
				if (y==1) {
					var sound = document.getElementById("audio1");
				}
				else if (y==2) {
					var sound = document.getElementById("audio2");
				}
				else if (y==3) {
					var sound = document.getElementById("audio3");
				}
				else {
					var sound = document.getElementById("audio4");
				}
				 sound.play()
		 }
	function statgame() {
			if (d<=id) {
				order[id] = Math.ceil(Math.random()*4);
					setTimeout(function(){
					$('#'+order[d]).css({
						'background-color':'red'
					});
					PlaySound(order[d]);
				},200);
					setTimeout(function(){
						$('#'+order[d++]).css({
							'background-color':'whitesmoke'
						});
						statgame();
					},500);
			}
			else {
				console.log(order);
			}
	}
	function showagain() {
		if (d<=id) {
			setTimeout(function(){
				$('#'+order[d]).css({'background-color':'red'});
				PlaySound(order[d]);
			},200);
			setTimeout(function(){
				$('#'+order[d++]).css({'background-color':'whitesmoke'});
				showagain();
			},500);
		}
	}
		$('.gg').click(function(){
			x = $(this).attr('id');
			PlaySound(x);
			//console.log(x);
			$('#'+x).css({
				'background-color':'green'
			});
			setTimeout(function(){$('#'+x).css({'background-color':'whitesmoke'});},500);
			check(x);
			});
	function check(x) {
		if (x == order[k]) {
			k=k+1;
			x= null;
		}
		else if(x!=order[k]){
			if (lives!=0) {
				lives--;
				$('.lives').html("Lives Remaining:"+lives);
				d=0;
				showagain();
			}
			else{
				$('.game').hide();
				$('.start').show();
				$('.strict').show();
			}
		}
		if (k==id+1) {
			k=0;
			d=0;

			id = id+1;
			$('.score').html("Score:"+id);
			setTimeout(function(){
				statgame();
			},500);
		}
	}
});
