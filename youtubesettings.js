jQuery('#youtube-feed').youtubeFeed({		
		//ID of the channel to pull in
	 channelId: 'YOUR-CHANNEL-ID',
		//API Key
		key: 'YOUR-API-KEY', 
		//Number of videos to return (number per page if "pager" is set to true)
		count: 9, 
		//include Next and Previous page buttons to asynchronously load more videos
		pager: false, 
		//Previous Page Text
		prevPageText: 'Previous Page',
		//Next Page Text
		nextPageText: 'Next Page',
		//Append autoplay to video embed url
	    autoplay: true,
		//HTML pattern for the output
		pattern: '<li class="gdlr-core-item-mglr">'
		+ '<div class="gdlr-core-portfolio-grid  gdlr-core-left-align gdlr-core-style-normal">'
		+ '<div "class="gdlr-core-portfolio-thumbnail gdlr-core-media-image  gdlr-core-style-icon">'
		+ '<div class="gdlr-core-portfolio-thumbnail-image-wrap  gdlr-core-zoom-on-hover">' +
					'<a href="{{VideoEmbedUrl}}" target="_blank" class="gdlr-core" alt="">' +
						'<img class="gdlr-core " loading="lazy" width="700" alt="" height="450" src="{{ThumbnailLarge}}">'  
				+ '</a>' 
				+ '</div>' 
				+ '</div>' 
				+ '<div class="gdlr-core-portfolio-content-wrap gdlr-core-skin-divider">' 
				+ '<h3 class="gdlr-core-portfolio-title gdlr-core-skin-title">' 
				+ '<a href="{{VideoUrl}}">{{Title}}</a>' 
				+ '</h3>' 
				+ '<span class="gdlr-core-portfolio-info gdlr-core-portfolio-info-date gdlr-core-info-font gdlr-core-skin-caption">' 
				+ '<a href="{{VideoUrl}}">{{Date}}</a>' 
				+ '</span>' 
				+ '</div>' 
				+ '</div>' 
		 + '</li>'
	},
);