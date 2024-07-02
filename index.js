let streamID
const getStreamId = async () => {
    const response = await fetch('https://mvg1tf7nai.execute-api.eu-north-1.amazonaws.com/default/getStreamId')
    console.log(response)
    const streamId = await response.json();
    console.log('Stream ID:', streamId)
}

getStreamId()

var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        videoId: streamID,
        playerVars: {
          'autoplay': 1,
          'controls': 0,
          'rel': 0,
          'fs': 1,
          'modestbranding': 1,
          'mute': 1
        },
        events: {
          'onReady': onPlayerReady
        }
      });
    }
    function onPlayerReady(event) {
      event.target.playVideo();
      var iframe = document.getElementById('player');
      requestFullScreen(iframe);
    }
    function requestFullScreen(element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) { /* Firefox */
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { /* IE/Edge */
        element.msRequestFullscreen();
      }
    }

console.log(streamID)