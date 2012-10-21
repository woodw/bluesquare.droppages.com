$(document).ready(function(){
		var documentWidth = $(document).width();
		var documentHeight = $(document).height();
	$('head').append('<style>body{background-color:#152F3E;}.blueFriend{position:absolute;left:-100px;top:-100px;width:100px;height:100px;opacity:.5;}.dieingFriend{position:absolute;width:100px;height:100px;}</style>');
	$('body').append('<div id="div_blue_loader" style="display:none;"><img src="http://bluesquare.droppages.com/images/blueFriend/blueFriendright.png"/><img src="http://bluesquare.droppages.com/images/blueFriend/blueFriendleft.png"/><img src="http://bluesquare.droppages.com/images/blueFriend/blueFrienddown.png"/><img src="http://bluesquare.droppages.com/images/blueFriend/blueFriendupleft.png"/><img src="http://bluesquare.droppages.com/images/blueFriend/blueFriendupright.png"/><img src="http://bluesquare.droppages.com/images/blueFriend/blueFriend.gif"/></div>');
	$(document).mousemove(function(e){
		switch ($('.blueFriend').size()) {
			case 1:
			//$('div').html(Math.atan(($('img').offset().top-e.pageY)/($('img').offset().left-e.pageX)));
			if((e.pageX-($('.blueFriend').offset().left))<0){
				if((Math.round(Math.atan((($('.blueFriend').offset().top)-e.pageY)/(e.pageX-($('.blueFriend').offset().left)))*180/Math.PI*100)/100)<0){
					$('.blueFriend').attr({'src':'http://bluesquare.droppages.com/images/blueFriend/blueFriendupleft.png'});
				}
				else{
					$('.blueFriend').attr({'src':'http://bluesquare.droppages.com/images/blueFriend/blueFriendleft.png'});
				}
			}
			else{
				if((Math.round(Math.atan((($('.blueFriend').offset().top)-e.pageY)/(e.pageX-($('.blueFriend').offset().left)))*180/Math.PI*100)/100)>0){
					$('.blueFriend').attr({'src':'http://bluesquare.droppages.com/images/blueFriend/blueFriendupright.png'});
				}
				else{
					//if()
					//{
						$('.blueFriend').attr({'src':'http://bluesquare.droppages.com/images/blueFriend/blueFriendright.png'});
					//}
					//alert('in');
				}
			}
			$('.blueFriend').stop(true,false).animate({
				'left':e.pageX,
				'top':e.pageY
			},{
				easing:'easeOutBack',
				duration:2000,	
				complete: function() {
					//alert('bam');
					$(this).attr({'src':'http://bluesquare.droppages.com/images/blueFriend/blueFrienddown.png'});
			}});
			break;
		}
	});
	$(document).mousedown(function(event) {
		//alert(event.which);
		if(event.which===2){
			//alert('do');
			switch ($('.blueFriend').size()) {
				case 0:
					$('body').append($('<img>').addClass('blueFriend'));
					break;
				case 1:
					$('.blueFriend').addClass('dieingFriend').removeClass('blueFriend').stop(true,false).fadeOut('slow',function(){
						$(this).remove();
					});
					break;
			}
		}
	});
})(jQuery);