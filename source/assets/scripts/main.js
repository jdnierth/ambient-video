(function () {

    var videoWrapper = document.getElementById("bg-video-wrapper"),
        video = document.getElementById("bg-video"),
        pauseButton = document.querySelector(".js-pause-video"),
        swapButton = document.querySelector(".js-swap-video");

    function _init() {
        _bindEvents();
    }

    function _toggleFade() {
        videoWrapper.classList.toggle("fade-out");
    }

    /**
     * Pauses and fades the video.
     *
     * @private
     */
    function _pauseAndFadeVideo() {
        video = document.getElementById("bg-video");

        video.pause();

        // Reduces opacity of the video
        _toggleFade();

    }

    /**
     * Pauses the current video instance
     *
     * @private
     */
    function _togglePauseAndPlayVideo() {
        if (video.paused) {
            video.play();
            _toggleFade();
        } else {
            _pauseAndFadeVideo();
        }
    }

    function _swapVideo() {
        var prevVideoName = video.dataset.introVideoKey,
            nextVideoName = video.dataset.nextVideoName,
            loop = video.dataset.nextVideoLoop,
            videoDiv = $(videoWrapper).find('div'),
            videoDomAsString;

        // The 2nd video is supposed to be looping
        if (loop === 'true') {
            video.setAttribute("loop", "loop");
        }

        // Get the current video wrapper markup
        videoDomAsString = videoDiv[0].innerHTML;

        // fade-out out the wrapper when swapping
        $(videoWrapper).fadeOut('slow');

        // Update the current video markup wrapper with the new video content.
        videoDiv[0].innerHTML = videoDomAsString.replace(new RegExp(prevVideoName, "gi"), nextVideoName);

        document.getElementById('bg-video').addEventListener('loadeddata', function () {

            // Play the new video
            video.play();

            $(videoWrapper).fadeIn('slow');
        });
    }

    function _bindEvents() {
        /**
         * Will only work on videos where the property loop is removed
         */
        video.addEventListener('ended', _swapVideo);

        /**
         * If the pause button is clicked the video will be faded out.
         */
        pauseButton.addEventListener("click", _togglePauseAndPlayVideo);
        swapButton.addEventListener("click", _swapVideo);
    }

    _init();

}());
