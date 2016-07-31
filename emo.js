/**
 * Simple regex experiment to create an automatic emoticons by Taufik Nurrohman
 * Visit: http://hompimpaalaihumgambreng.blogspot.com
 * Update: 23 August 2012
 */

$(function() {

	// Append an emoticon bar before comment-form
	if (putEmoAbove) {
		$(putEmoAbove).before('<div class="emoWrap"> :aa :bo :cl :co :cry :id :jp :lov :nod :nw :par :sy :wow :yc :yay :tp :pc :gal :giv :ninja :bm</div>');
	}
	function emo(emo, imgRep, emoKey) {
		$(emoRange).each(function() {
			$(this).html($(this).html().replace(/<br ?\/?>(:|;|=|\^)/ig, "<br> $1").replace(emo, " <img src='" + imgRep + "' class='emo delayLoad' alt='" + emoKey + "' />"));
		});
	}
	emo(/\s:aa/g, "http://dezige-in.googlecode.com/svn/trunk/ZigeMo/anger.gif", ":aa");
	emo(/\s:bo/g, "http://dezige-in.googlecode.com/svn/trunk/ZigeMo/boogie.gif", ":bo");
	emo(/\s:bm/g, "http://dezige-in.googlecode.com/svn/trunk/ZigeMo/boom.gif", ":bm");
	emo(/\s:cl/g, "http://dezige-in.googlecode.com/svn/trunk/ZigeMo/clap.gif", ":cl");
	emo(/\s:co/g, "http://dezige-in.googlecode.com/svn/trunk/ZigeMo/confused.gif", ":co");
	emo(/\s:cry/g, "http://dezige-in.googlecode.com/svn/trunk/ZigeMo/crying.gif", ":cry");
	emo(/\s:gal/g, "http://dezige-in.googlecode.com/svn/trunk/ZigeMo/gallery.gif", ":gal");
	emo(/\s:giv/g, "http://dezige-in.googlecode.com/svn/trunk/ZigeMo/give-up.gif", ":giv");
	emo(/\s:id/g, "http://dezige-in.googlecode.com/svn/trunk/ZigeMo/idontknow.gif", ":id");
	emo(/\s:jp/g, "http://dezige-in.googlecode.com/svn/trunk/ZigeMo/jawdrop.gif", ":jp");
	emo(/\s:lov/g, "http://dezige-in.googlecode.com/svn/trunk/ZigeMo/love.gif", ":lov");
	emo(/\s:ninja/g, "http://dezige-in.googlecode.com/svn/trunk/ZigeMo/ninjabattle.gif", ":ninja");
	emo(/\s:nod/g, "http://dezige-in.googlecode.com/svn/trunk/ZigeMo/nod.gif", ":nod");
	emo(/\s:nw/g, "http://dezige-in.googlecode.com/svn/trunk/ZigeMo/notworthy.gif", ":nw");
	emo(/\s:par/g, "http://dezige-in.googlecode.com/svn/trunk/ZigeMo/party.gif", ":par");
	emo(/\s:pc/g, "http://dezige-in.googlecode.com/svn/trunk/ZigeMo/pc.gif", ":pc");
	emo(/\s:sy/g, "http://dezige-in.googlecode.com/svn/trunk/ZigeMo/shameonyou.gif", ":sy");
	emo(/\s:wow/g, "http://dezige-in.googlecode.com/svn/trunk/ZigeMo/wow.gif", ":wow");
	emo(/\s:yc/g, "http://dezige-in.googlecode.com/svn/trunk/ZigeMo/yahoo-coffee.gif", ":yc");
	emo(/\s:yay/g, "http://dezige-in.googlecode.com/svn/trunk/ZigeMo/yay.gif", ":yay");
	emo(/\s:tp/g, "http://dezige-in.googlecode.com/svn/trunk/ZigeMo/top.gif", ":tp");

	var one = 0; // Show alert one times!

	// Click anywhere to hide the emoticon
	$(document.body).on("click", function() {
		$('.emoKey').remove();
	});

	// Click to show the code!
	$('.emo').css('cursor', 'pointer').on("click", function(e) {
		$('.emoKey').remove();
		$(this).after('<input class="emoKey" type="text" size="6" value=" ' + this.alt + '" />');
		$('.emoKey').trigger("select");
		if(emoMessage && one === 0) {
			alert(emoMessage);
			one = 1;
		}
		e.stopPropagation();
	});

});