function setCookiesOnChange(expireDate) {
	$('#subtitleswitch').change(function() {
		/*this will contain a reference to the checkbox*/
		if (this.checked) {
			Cookies.set('subtitle','true', { expires: expireDate, path: '/' });
			$('.rb_description').css('display','inline');
		} else {
			Cookies.set('subtitle','false', { expires: expireDate, path: '/' });
			$('.rb_description').css('display','none');
		}
	});
	
	/* Punkte */
	$('#points_left').change(function() {
		if (this.checked) {
			Cookies.set('points','left', { expires: expireDate, path: '/' });
			$('#rb_toggle').css('left','1%');
			$('.rb_description').css('left','1%');
		}
	});
	
	$('#points_middle').change(function() {
		if (this.checked) {
			Cookies.set('points','middle', { expires: expireDate, path: '/' });
			$('#rb_toggle').css('left','49%');
			$('.rb_description').css('left','49%');
		}
	});
	
	$('#points_right').change(function() {
		if (this.checked) {
			Cookies.set('points','right', { expires: expireDate, path: '/' });
			$('#rb_toggle').css('left','95%');
			$('.rb_description').css('left','95%');
		}
	});
	
	/* Rundung */
	$('input[type=range]').on('input',function() { $(this).trigger('change'); });
	$('#roundRange').change(function() {
		Cookies.set('round',$(this).val());
		$('.divID').css('border-radius',$(this).val() + 'px');
	});
	
	/* Helligkeit */
	$('input[type=range]').on('input',function() { $(this).trigger('change'); }); 
	$('#brightRange').change(function() {
		Cookies.set('bright',$(this).val());
		$('.divID').css('-webkit-filter','brightness(' + $(this).val() + '%)');
	});
	
	/* Sound */
	$('#soundswitch').change(function() {
		if (this.checked) {
			Cookies.set('sound','true', { expires: expireDate, path: '/' });
			$('audio').each(function(){ this.play(); });
		} else {
			Cookies.set('sound','false', { expires: expireDate, path: '/' });
			$('audio').each(function() { this.pause(); });
		}
	});
	
	/* Color */
	$('#colorswitch').change(function() {
		if (this.checked) {
			Cookies.set('color','red', { expires: expireDate, path: '/' });
			$('body').css('background-color','#991b33');
			$('.divID').css('background-color','#949494');
			$('#rcorners1').css('background-color','#949494');
			$('body').css('color','black');
		} else {
			Cookies.set('color','grey', { expires: expireDate, path: '/' });
			$('body').css('background-color','#949494');
			$('.divID').css('background-color','#991b33');
			$('#rcorners1').css('background-color','#991b33');
			$('body').css('color','white');
		}
	});	
}

/* Not Working! Wenn man den Code in eine Funktion setzt funktioniert er nicht */
function getCookiesOnLoad() {
	/* Rundung */
	var rundung = Cookies.get('round');
	if(rundung != null) {
		$('#roundRange').val(rundung);
		$('#rangevalue').val(rundung);
		$('.divID').css('border-radius',rundung + 'px');
	}
	
	/* Helligkeit */
	var hell = Cookies.get('bright');
	if(hell != null) {
		$('#brightRange').val(hell);
		$('#brightRange').val(hell);
		$('.divID').css('-webkit-filter','brightness(' + $(this).val() + '%)')
	}
	
	
	/* Punkte */
	var pointsSwitch = Cookies.get('points');
	switch(pointsSwitch) {
		case "left":
			$('#rb_toggle').css('left','1%');
			$('.rb_description').css('left','1%');
			$('#points_left').prop("checked",true);
			break;
		case "middle":
			$('#rb_toggle').css('left','45%');
			$('.rb_description').css('left','45%');
			$('#points_middle').prop("checked",true);
			break;
		case "right":
			$('#rb_toggle').css('left','95%');
			$('.rb_description').css('left','95%');
			$('#points_right').prop("checked",true);
			break;
		default:
			console.log("No changes to Points");
	}
	
	/* Subtitle */
	var subtitleSwitch = Cookies.get('subtitle');
	switch(subtitleSwitch) {
		case "true":
			$('.rb_description').css('display','inline');
			$('#subtitleswitch').prop("checked",true);
			break;
		case "false":
			$('.rb_description').css('display','none');
			$('#subtitleswitch').prop("checked",false);
			break;
		default:
			console.log("No changes to Subtitle");
	}
	
	/* Sound */
	var soundSwitch = Cookies.get('sound');
	switch(soundSwitch) {
		case "true":
			$('audio').each(function(){ this.play(); });
			$('#soundswitch').prop("checked",true);
			break;
		case "false":
			$('audio').each(function() { this.pause(); });
			$('#soundswitch').prop("checked",false);
			break;
	}
	
	/* Color */
	var colorSwitch = Cookies.get('color');
	switch(colorSwitch) {
		case "red":
			$('body').css('background-color','#991b33');
			$('#settings').css('background-color','#949494');
			$('#rcorners1').css('background-color','#949494');
			$('#colorswitch').prop("checked",true);
			$('body').css('color','black');
			break;
		case "grey":
			$('body').css('background-color','#949494');
			$('#rcorners1').css('background-color','#991b33');
			$('#colorswitch').prop("checked",false);
			$('#settings').css('background-color','#991b33');
			$('body').css('color','white');
			break;
	}
}	

$(document).ready(function(){
	/* Show Cookies Click */
	var expireDate = 365;
	
		/* Rundung */
	var rundung = Cookies.get('round');
	if(rundung != null) {
		$('#roundRange').val(rundung);
		$('#rangevalue').val(rundung);
		$('.divID').css('border-radius',rundung + 'px');
	}
	
	/* Helligkeit */
	var hell = Cookies.get('bright');
	if(hell != null) {
		$('#brightRange').val(hell);
		$('#brightRange').val(hell);
		$('.divID').css('-webkit-filter','brightness(' + $(this).val() + '%)')
	}
	
	
	/* Punkte */
	var pointsSwitch = Cookies.get('points');
	switch(pointsSwitch) {
		case "left":
			$('#rb_toggle').css('left','1%');
			$('.rb_description').css('left','1%');
			$('#points_left').prop("checked",true);
			break;
		case "middle":
			$('#rb_toggle').css('left','45%');
			$('.rb_description').css('left','45%');
			$('#points_middle').prop("checked",true);
			break;
		case "right":
			$('#rb_toggle').css('left','95%');
			$('.rb_description').css('left','95%');
			$('#points_right').prop("checked",true);
			break;
		default:
			console.log("No changes to Points");
	}
	
	/* Subtitle */
	var subtitleSwitch = Cookies.get('subtitle');
	switch(subtitleSwitch) {
		case "true":
			$('.rb_description').css('display','inline');
			$('#subtitleswitch').prop("checked",true);
			break;
		case "false":
			$('.rb_description').css('display','none');
			$('#subtitleswitch').prop("checked",false);
			break;
		default:
			console.log("No changes to Subtitle");
	}
	
	/* Sound */
	var soundSwitch = Cookies.get('sound');
	switch(soundSwitch) {
		case "true":
			$('audio').each(function(){ this.play(); });
			$('#soundswitch').prop("checked",true);
			break;
		case "false":
			$('audio').each(function() { this.pause(); });
			$('#soundswitch').prop("checked",false);
			break;
	}
	
	/* Color */
	var colorSwitch = Cookies.get('color');
	switch(colorSwitch) {
		case "red":
			$('body').css('background-color','#991b33');
			$('.divID').css('background-color','#949494');
			$('#rcorners1').css('background-color','#949494');
			$('#colorswitch').prop("checked",true);
			$('body').css('color','black');
			break;
		case "grey":
			$('body').css('background-color','#949494');
			$('#rcorners1').css('background-color','#991b33');
			$('#colorswitch').prop("checked",false);
			$('.divID').css('background-color','#991b33');
			$('body').css('color','white');
			break;
	}
	
	
	setCookiesOnChange(expireDate);
	
/*}*/
});