$(document).ready(function(){
	window.addEventListener("message", receiveMessage, false);
	
	var title = $('meta[property="og:title"]').attr('content');
	var published = $('meta[property="article:published_time"]').attr('content').replace("+0400", ":00.000Z");
	
	function receiveMessage(event) {
		if(event.origin !== "https://player.mangomolo.com") return;

		if(event.data && event.data.play_id) {
			var playId = event.data.play_id;
			var videoId = event.data.video.video_id;
			
			var dur = parseInt(event.data.video.duration);
			var tvc = event.data.enriched_data.tvchannel;
			var lan = event.data.enriched_data.language;
			var key = event.data.enriched_data.keywords;
			var typ = event.data.enriched_data.type;
			var cat = event.data.enriched_data.category;
			var sca = event.data.enriched_data.subCategory;
			
			var oVideo = {duration: dur,name: title, video_id: videoId, published_at: published};
			
			var oEnriched_data = new Object();
			if(tvc != null)
				oEnriched_data.tvchannel = tvc;
			if(lan != null)
				oEnriched_data.language = lan;
			if(key != null)
				oEnriched_data.keywords = key;
			if(typ != null)
				oEnriched_data.type = typ;
			if(cat != null)
				oEnriched_data.category = cat;
			if(sca != null)
				oEnriched_data.subCategory = sca;
			
			var oAd = null;
			if(event.data.ad != null){
				var adu = event.data.ad.duration;
				var ana = event.data.ad.advertiser_name;
				var lid = parseInt(event.data.ad.lineitem_id);
				var cid = parseInt(event.data.ad.creative_id);
				var adi = parseInt(event.data.ad.ad_id);
				var tit = event.data.ad.title;
				var vty = event.data.ad.video_type;
				
				oAd = new Object();
				if(adu != null)
					oAd.duration = adu;
				if(ana != null)
					oAd.advertiser_name = ana;
				if(lid != null)
					oAd.lineitem_id = lid;
				if(cid != null)
					oAd.creative_id = cid;
				if(adi != null)
					oAd.ad_id = adi;
				if(tit != null)
					oAd.title = tit;
				if(vty != null)
					oAd.video_type = vty;
			}					
			var data = null;					
			if(event.data.event == "VideoPlay"){
				ga('send', 'event', 'Videos', 'play', videoId);
				ga('dmi.send', 'event', 'Videos', 'play' , videoId);
				gtag('event', 'play', {'event_category': 'Videos','event_label': videoId});
				gtag('event', 'play', {'send_to': 'UA-36885283-1', 'event_category': 'Videos','event_label': videoId});
				window.permutive.track("VideoPlay", {play_id: playId, video: oVideo, enriched_data: oEnriched_data});
			} else if(event.data.event == "VideoProgress"){
				var prg = event.data.progress;
				if(prg == "1"){
					ga('send', 'event', 'Videos', 'ended', videoId);
					ga('dmi.send', 'event', 'Videos', 'ended' , videoId);
					gtag('event', 'ended', {'event_category': 'Videos','event_label': videoId});
					gtag('event', 'ended', {'send_to': 'UA-36885283-1','event_category': 'Videos','event_label': videoId});
				}						
				window.permutive.track("VideoProgress", {play_id: playId, progress: prg, video: oVideo, enriched_data: oEnriched_data});
			} else if(event.data.event == "VideoEvent"){
				var evn = event.data.event_sub_type;
				if(evn == "pause"){
					ga('send', 'event', 'Videos', 'pause', videoId);
					ga('dmi.send', 'event', 'Videos', 'pause' , videoId);
					gtag('event', 'pause', {'event_category': 'Videos','event_label': videoId});
					gtag('event', 'pause', {'send_to': 'UA-36885283-1','event_category': 'Videos','event_label': videoId});
				}						
				window.permutive.track("VideoEvent", {play_id: playId, event: evn, video: oVideo, enriched_data: oEnriched_data});
			} else if(event.data.event == "VideoLoad"){						
				window.permutive.track("VideoLoad", {play_id: playId, video: oVideo, enriched_data: oEnriched_data});	
			} else if(event.data.event == "VideoAdPlay"){						
				window.permutive.track("VideoAdPlay", {play_id: playId, ad: oAd, video: oVideo, enriched_data: oEnriched_data});
			} else if(event.data.event == "VideoAdClick"){
				window.permutive.track("VideoAdClick", {play_id: playId, ad: oAd, video: oVideo, enriched_data: oEnriched_data});
			} else if(event.data.event == "VideoAdProgress"){						
				window.permutive.track("VideoAdProgress", {play_id: playId, progress: event.data.progress, ad: oAd, video: oVideo, enriched_data: oEnriched_data});
			} else if(event.data.event == "VideoAdEvent"){
				window.permutive.track("VideoAdEvent", {play_id: playId, event: event.data.event_sub_type, ad: oAd, video: oVideo, enriched_data: oEnriched_data});
			}
		}
	}			
});