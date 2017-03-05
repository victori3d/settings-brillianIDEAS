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
			$('#iconThreeDots').css('left','1%');
			$('.rb_description').css('left','1%');
		}
	});
	
	$('#points_middle').change(function() {
		if (this.checked) {
			Cookies.set('points','middle', { expires: expireDate, path: '/' });
			$('#iconThreeDots').css('left','49%');
			$('.rb_description').css('left','49%');
		}
	});
	
	$('#points_right').change(function() {
		if (this.checked) {
			Cookies.set('points','right', { expires: expireDate, path: '/' });
			$('#iconThreeDots').css('left','90%');
			$('.rb_description').css('left','90%');
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
		} else {
			Cookies.set('color','grey', { expires: expireDate, path: '/' });
			$('body').css('background-color','#949494');
			$('.divID').css('background-color','#991b33');
			$('#rcorners1').css('background-color','#991b33');
		}
	});	
}



$(document).ready(function(){
	/* Show Cookies Click */
	var expireDate = 365;
	
	setCookiesOnChange(expireDate);

	/* Rundung */
	var rundung = Cookies.get('round');
	if(rundung != null) {
		$('#roundRange').val(rundung);
		$('#rangevalue').val(rundung);
		$('.divID').css('border-radius',rundung + 'px');
	}
	
	/* Helligkeit */
	var hell = Cookies.get('round');
	if(hell != null) {
		$('#brightRange').val(hell);
		$('#brightRange').val(hell);
		$('.divID').css('-webkit-filter','brightness(' + $(this).val() + '%)')
	}
	
	
	/* Punkte */
	var pointsSwitch = Cookies.get('points');
	switch(pointsSwitch) {
		case "left":
			$('#iconThreeDots').css('left','1%');
			$('.rb_description').css('left','1%');
			$('#points_left').prop("checked",true);
			break;
		case "middle":
			$('#iconThreeDots').css('left','45%');
			$('.rb_description').css('left','45%');
			$('#points_middle').prop("checked",true);
			break;
		case "right":
			$('#iconThreeDots').css('left','90%');
			$('.rb_description').css('left','90%');
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
			$('#colorswitch').prop("checked",true);
			break;
		case "grey":
			$('body').css('background-color','#949494');
			$('#colorswitch').prop("checked",false);
			break;
	}
/*}*/
});
/*
$(document).on('click','#settingsButton', function() {
	$('#settingsDiv').append('<div id="settingsDiv" style="float:right; width: 30vw; height: 80vh; font-size:20px;"><form id="settingsForm"><br>Untertitel:<div class="onoffswitch">	<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="subtitleswitch" checked><label class="onoffswitch-label" for="subtitleswitch"><span class="onoffswitch-inner"></span><span class="onoffswitch-switch"></span></label></div>Drei Punkte:<fieldset><div class="switch-toggle switch-candy"><input id="points_left" name="view" type="radio" checked><label for="points_left" onclick="">Links</label><input id="points_middle" name="view" type="radio"><label for="points_middle" onclick="">Mittel</label><input id="points_right" name="view" type="radio"><label for="points_right" onclick="">Rechts</label><a></a></div></fieldset><br>Rundungen:<div id="slider"><input class="bar" type="range" id="roundRange" max="50" value="30" onchange="rangevalue.value=value"/><span class="highlight"></span><output id="rangevalue">50</output></div><br>Helligkeit:<br>Sound:<div class="onoffswitch"><input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="soundswitch" checked><label class="onoffswitch-label" for="soundswitch"><span class="onoffswitch-inner"></span><span class="onoffswitch-switch"></span></label></div>Switch Colors:<div class="onoffswitch"><input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="colorswitch" checked><label class="onoffswitch-label" for="colorswitch"><span class="onoffswitch-inner"></span><span class="onoffswitch-switch"></span></label></div><br><br><button type="button" id="buttonSub" value="submit">submit</button>  type="button"<button type="button" id="cookie" value="showCookie">Show Cookies</button></form></div>');
});*/
/*
function Text01() {
	/*$('#settingsDiv').after('<div id="settingsDiv" style="float:right; width: 30vw; height: 80vh; font-size:20px;"><form id="settingsForm"><br>Untertitel:<div class="onoffswitch"><input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="subtitleswitch" checked><label class="onoffswitch-label" for="subtitleswitch"><span class="onoffswitch-inner"></span><span class="onoffswitch-switch"></span></label></div>Drei Punkte:<fieldset><div class="switch-toggle switch-candy"><input id="points_left" name="view" type="radio" checked><label for="points_left" onclick="">Links</label><input id="points_middle" name="view" type="radio"><label for="points_middle" onclick="">Mittel</label><input id="points_right" name="view" type="radio"><label for="points_right" onclick="">Rechts</label><a></a></div></fieldset><br>Rundungen:<div id="slider"><input class="bar" type="range" id="roundRange" max="50" value="30" onchange="rangevalue.value=value"/><span class="highlight"></span><output id="rangevalue">50</output></div><br>				Helligkeit:<div id="slider"><input class="bar" type="range" id="brightRange" max="200" value="100" onchange="rangevalue2.value=value + '%'"/><span class="highlight"></span><output id="rangevalue2">100%</output></div><br>Sound:<div class="onoffswitch"><input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="soundswitch" checked><label class="onoffswitch-label" for="soundswitch"><span class="onoffswitch-inner"></span><span class="onoffswitch-switch"></span></label></div>Switch Colors:<div class="onoffswitch"><input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="colorswitch" checked><label class="onoffswitch-label" for="colorswitch"><span class="onoffswitch-inner"></span><span class="onoffswitch-switch"></span></label></div><br><br><button type="button" id="buttonSub" value="submit">submit</button>  type="button"<button type="button" id="cookie" value="showCookie">Show Cookies</button></form></div>');
	/*
	document.write('<div id="settings" style="float:right; width: 30vw; height: 80vh; font-size:20px;"></div>');
	*/
	/*
	$(document).on('click','#settingsButton', function() {
		$('#settingsDiv').append('<div id="settingsDiv" style="float:right; width: 30vw; height: 80vh; font-size:20px;"><form id="settingsForm"><br>Untertitel:<div class="onoffswitch">	<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="subtitleswitch" checked><label class="onoffswitch-label" for="subtitleswitch"><span class="onoffswitch-inner"></span><span class="onoffswitch-switch"></span></label></div>Drei Punkte:<fieldset><div class="switch-toggle switch-candy"><input id="points_left" name="view" type="radio" checked><label for="points_left" onclick="">Links</label><input id="points_middle" name="view" type="radio"><label for="points_middle" onclick="">Mittel</label><input id="points_right" name="view" type="radio"><label for="points_right" onclick="">Rechts</label><a></a></div></fieldset><br>Rundungen:<div id="slider"><input class="bar" type="range" id="roundRange" max="50" value="30" onchange="rangevalue.value=value"/><span class="highlight"></span><output id="rangevalue">50</output></div><br>Helligkeit:<div id="slider"><input class="bar" type="range" id="brightRange" max="200" value="100" onchange="rangevalue2.value=value + "%""/><span class="highlight"></span><output id="rangevalue2">100%</output></div><br>Sound:<div class="onoffswitch"><input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="soundswitch" checked><label class="onoffswitch-label" for="soundswitch"><span class="onoffswitch-inner"></span><span class="onoffswitch-switch"></span></label></div>Switch Colors:<div class="onoffswitch"><input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="colorswitch" checked><label class="onoffswitch-label" for="colorswitch"><span class="onoffswitch-inner"></span><span class="onoffswitch-switch"></span></label></div><br><br></form></div>');
	})
}
/*<div id="slider"><input class="bar" type="range" id="brightRange" max="200" value="100" onchange="rangevalue2.value=value + '%'"/><span class="highlight"></span><output id="rangevalue2">100%</output></div>*/

/*<form id="settingsForm"><br>Untertitel:<div class="onoffswitch">	<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="subtitleswitch" checked><label class="onoffswitch-label" for="subtitleswitch"><span class="onoffswitch-inner"></span><span class="onoffswitch-switch"></span></label></div>Drei Punkte:<fieldset><div class="switch-toggle switch-candy"><input id="points_left" name="view" type="radio" checked><label for="points_left" onclick="">Links</label><input id="points_middle" name="view" type="radio"><label for="points_middle" onclick="">Mittel</label><input id="points_right" name="view" type="radio"><label for="points_right" onclick="">Rechts</label><a></a></div></fieldset><br>Rundungen:<div id="slider"><input class="bar" type="range" id="roundRange" max="50" value="30" onchange="rangevalue.value=value"/><span class="highlight"></span><output id="rangevalue">50</output></div><br>Helligkeit:<br>Sound:<div class="onoffswitch"><input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="soundswitch" checked><label class="onoffswitch-label" for="soundswitch"><span class="onoffswitch-inner"></span><span class="onoffswitch-switch"></span></label></div>Switch Colors:<div class="onoffswitch"><input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="colorswitch" checked><label class="onoffswitch-label" for="colorswitch"><span class="onoffswitch-inner"></span><span class="onoffswitch-switch"></span></label></div><br><br><button type="button" id="buttonSub" value="submit">submit</button>  type="button"<button type="button" id="cookie" value="showCookie">Show Cookies</button></form>*/