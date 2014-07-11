(function(module) {
    "use strict";
    var Soundcloud = {},
        embed = '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/$1/$2&amp;show_artwork=true"></iframe>',
        embeds = '<iframe width="100%" height="410" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/$1/sets/$2&amp;show_artwork=true"></iframe>'

    Soundcloud.parse = function(postContent, callback) {
        var	embedtrack = /<a href="(?:https?:\/\/)?(?:www\.)?(?:soundcloud\.com)\/?([\w\-_]+)\/([\w\-_]+)">.+<\/a>/g;
        var	embedset = /<a href="(?:https?:\/\/)?(?:www\.)?(?:soundcloud\.com)\/?([\w\-_]+)\/sets\/([\w\-_]+)">.+<\/a>/g;

        if (postContent.match(embedtrack)) {
            postContent = postContent.replace(embedtrack, embed);
        }
        if (postContent.match(embedset)) {
            postContent = postContent.replace(embedset, embeds);
        }

        callback(null, postContent);
    };

    module.exports = Soundcloud;
}(module));
