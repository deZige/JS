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
	emo(/\s:aa/g, "https://cdn.rawgit.com/deZige/Gambar/master/anger.gif", ":aa");
	emo(/\s:bo/g, "https://cdn.rawgit.com/deZige/Gambar/master/boogie.gif", ":bo");
	emo(/\s:bm/g, "https://cdn.rawgit.com/deZige/Gambar/master/boom.gif", ":bm");
	emo(/\s:cl/g, "https://cdn.rawgit.com/deZige/Gambar/master/clap.gif", ":cl");
	emo(/\s:co/g, "https://cdn.rawgit.com/deZige/Gambar/master/confused.gif", ":co");
	emo(/\s:cry/g, "https://cdn.rawgit.com/deZige/Gambar/master/crying.gif", ":cry");
	emo(/\s:gal/g, "https://cdn.rawgit.com/deZige/Gambar/master/gallery.gif", ":gal");
	emo(/\s:giv/g, "https://cdn.rawgit.com/deZige/Gambar/master/give-up.gif", ":giv");
	emo(/\s:id/g, "https://cdn.rawgit.com/deZige/Gambar/master/idontknow.gif", ":id");
	emo(/\s:jp/g, "https://cdn.rawgit.com/deZige/Gambar/master/jawdrop.gif", ":jp");
	emo(/\s:lov/g, "https://cdn.rawgit.com/deZige/Gambar/master/love.gif", ":lov");
	emo(/\s:ninja/g, "https://cdn.rawgit.com/deZige/Gambar/master/ninjabattle.gif", ":ninja");
	emo(/\s:nod/g, "https://cdn.rawgit.com/deZige/Gambar/master/nod.gif", ":nod");
	emo(/\s:nw/g, "https://cdn.rawgit.com/deZige/Gambar/master/notworthy.gif", ":nw");
	emo(/\s:par/g, "https://cdn.rawgit.com/deZige/Gambar/master/party.gif", ":par");
	emo(/\s:pc/g, "https://cdn.rawgit.com/deZige/Gambar/master/pc.gif", ":pc");
	emo(/\s:sy/g, "https://cdn.rawgit.com/deZige/Gambar/master/shameonyou.gif", ":sy");
	emo(/\s:wow/g, "https://cdn.rawgit.com/deZige/Gambar/master/wow.gif", ":wow");
	emo(/\s:yc/g, "https://cdn.rawgit.com/deZige/Gambar/master/coffee.gif", ":yc");
	emo(/\s:yay/g, "https://cdn.rawgit.com/deZige/Gambar/master/yay.gif", ":yay");
	emo(/\s:tp/g, "https://cdn.rawgit.com/deZige/Gambar/master/top.gif", ":tp");

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
