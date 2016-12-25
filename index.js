$(document).ready(function () {
	var id = 0,i=0,k=0,x,d=0;
	var order = [];
	$('.score').append(0);
	$('.lives').append(3);
	$('.start').click(function () {
			console.log("called");
			statgame();
	});
	function statgame() {
			if (d<=id) {
				order[id] = Math.ceil(Math.random()*4);
					setTimeout(function(){
					$('#'+order[d]).css({
						'background-color':'red'
					});},200);
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
		$('.gg').click(function(){
			x = $(this).attr('id');
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
			console.log("game over");
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
