(function(module) {
	"use strict";

	var SoundCloud = {},
		embed = '<iframe class="soundclound-embed" width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/$1"></iframe>';


	SoundCloud.parse = function(postContent, callback) {
		// modified from http://stackoverflow.com/questions/7168987/
		postContent = postContent.replace(/<a href="(?:https?:\/\/)?(?:www\.)?(?:soundcloud\.com)\/?(.+)">.+<\/a>/g, embed);
		callback(null, postContent);
	};

	module.exports = SoundCloud;
}(module));
