$(document).ready(function(){

	setTimeout(function(){
		$('#dinosaur').addClass('zilla');
		$('#dinosaur').css('visibility', 'visible');
	}, 400);

	setTimeout(function(){
		$('#chat').show();
	}, 1600);

	setTimeout(function(){
		$('#chat').hide();
	}, 2700);

  $("#dinosaur").hover(function(){
		$('#first').hide();
		$('#second').show();
		$('#chat').show();
    }, function(){
    $('#chat').hide();
  });

	$('#skate-vid').click(function() {
		$('.modal').show();
		setTimeout(function(){
			$('#skating').get(0).play()
		}, 200);
	});

	$('button.modal-close').click(function() {
		$('.modal').hide();
		$('#skating').get(0).pause()
	});
});