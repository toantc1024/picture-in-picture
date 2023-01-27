const videoElement = document.getElementById('video'),
      button = document.getElementById('button'),
      instructor = document.getElementById('instructor'),
      selectScreen = document.getElementById('button-select');

// Prompt to select media stream, pass to video element, then play
const selectMediaStream = async () => {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
            instructor.removeAttribute('hidden');
        }
    } catch (err) {
        // Catch Error here
        console.log(err);
    }
}

// On Load

button.addEventListener('click', async () => {
    // Disable Button 
    button.disabled = true;
    // Start Picture-in-Picture
    await videoElement.requestPictureInPicture();
    // Reset the Button
    button.disabled = false;
});

selectScreen.addEventListener('click', selectMediaStream);