(function() {
    var video = document.getElementById("bgvideo");
    var videoWrapper = document.getElementById("bg-video");
    var pauseButton = document.querySelector("#content button");

    function _init() {
        _bindEvents();
    }

    function _videoFade() {
        videoWrapper.classList.add("fade");
    }

    /**
     * Pauses and fades the video.
     *
     * @private
     */
    function _pauseAndFadeVideo() {
        video.pause();
        // to capture IE10
        _videoFade();
    }

    /**
     *
     * @private
     */
    function _togglePauseAndPlayVideo() {
        videoWrapper.classList.toggle("fade");

        if (video.paused) {
            video.play();
            pauseButton.innerHTML = "Pause";
        } else {
            video.pause();
            pauseButton.innerHTML = "Paused";
        }
    }

    function _bindEvents() {
        console.log('bindEvents');
        /**
         * Will only work on videos where the property loop is removed
         */
        video.addEventListener('ended', _pauseAndFadeVideo);

        /**
         * If the pause button is clicked the video will be faded out.
         */
        pauseButton.addEventListener("click", _togglePauseAndPlayVideo);

    }

    
    if (window.matchMedia('(prefers-reduced-motion)').matches) {
        alert(10);
        video.removeAttribute("autoplay");
        video.pause();
        pauseButton.innerHTML = "Paused";
    }

    _init();

}());
