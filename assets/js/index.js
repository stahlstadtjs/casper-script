/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    const playButton = (videoID) => `<button data-video="${videoID}" class="play-button">
  <img src="//scriptconf.org/assets/images/play.svg">
</button>`;

    const videoTemplate = (videoID) => `<iframe class="blog-video" width="560" height="315"
  src="https://www.youtube.com/embed/${videoID}?autoplay=1" frameborder="0" allowfullscreen></iframe>`;

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".menu-button, .nav-cover, .nav-close").on("click", function(e){
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

        var $vid = $('[data-video-id]');

        if ($vid.length) {
          $('.post-head').append(playButton($vid.data('video-id')))
        }

        $('.play-button').on('click', function(e) {
          $('.post-head').html(videoTemplate($(this).data('video'))).addClass('has-video');
        });

    });
})(jQuery);
