
$(function() {
	$(".thumbnail a").on("click",function() {
		var url=$(this).attr("href");
		if(url.indexOf("youtube.com")>-1) {
			var title=$(this).parent().find(".caption").text();
			var pos=url.indexOf("v=");
			var hash=url.substr(pos+2);
			var video='<div class="embed-responsive embed-responsive-4by3"><iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube-nocookie.com/embed/'+hash+'?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>';
			$("#player .modal-title").html(title);
			$("#player .modal-body").html(video);
			$("#player").modal("show");
			return false;
		}
		if(url.indexOf("twitter.com")>-1) {
			//'<blockquote class="twitter-tweet" data-lang="es"><p lang="und" dir="ltr">Els condemnats per l&#39;assalt a Blanquerna, encara més lluny de la presó <a href="https://t.co/V9Q60F64tS">https://t.co/V9Q60F64tS</a></p>&mdash; 324.cat (@324cat) <a href="https://twitter.com/324cat/status/931998197920215041?ref_src=twsrc%5Etfw">18 de noviembre de 2017</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
		}
	});
});
