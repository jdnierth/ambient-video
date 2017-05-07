# ambient-video
Prototyping an ambient video

# What does it do?
1. An existing video DOM node will play a video (Note: autoplay property will be ignored on mobile)
2. If the the video ends or the user clicks the 'swap video' button the existing video will be swapped with the new video

# Dependencies
1. jQuery >= 1.3
2. Video format: mp4, webm ([Video basics HTML5Rocks](https://www.html5rocks.com/en/tutorials/video/basics/))
3. Poster image, video file names should follow a certain pattern for substitution purposes by using a regular expression (see section Configurations for further information). Example

```
<video poster="assets/images/jellyfish_poster.jpg" id="bg-video" playsinline autoplay muted preload
       data-intro-video-key="jellyfish"
       data-next-video-name="particle_tunnel"
       data-next-video-loop="true">

    <source src="assets/video/jellyfish.mp4" type="video/mp4">
    <source src="assets/video/jellyfish.webm" type="video/webm">
</video>
```

# Recommended file size and formats
- MP4, WebM 
- Video length 30 - 40s
- Video file size: < 2MB

# Browser support
1. FF 53.0.2
2. Chrome 57.0.2987.133
3. IE edge

# Configurations

## Define first video
- The value of the property 'data-intro-video-key' will be used for a regular expression to be substituted
with the value of the 'next-video-name' when swapping the video. 
```data-intro-video-key=<FILENAME_OF_FIRST_VIDEO_WITHOUT_FILETYPE>```

## Define next video
- The value of the property 'data-next-video-name' will substitute the value of the 'data-intro-video-key' within teh video object 
- Once the video is substituted and the 'dataloaded' event handler is triggered, the new video will be played.
```data-next-video-name=<FILENAME_OF_NEXT_VIDEO_WITHOUT_FILETYPE>```

## Loop
- The following attribute when set on the video DOM node will make sure that the following video will loop endlessly
```data-next-video-loop="true"```

If set to false the following video won't loop and just pause once ended.

`Note: The browser will loop the video until the tab is closed. This effects the users CPU usage and can slow down the rest of the page` [Prevent endlessly looping the video] (https://www.sitepoint.com/10-guidelines-better-website-background-videos/)