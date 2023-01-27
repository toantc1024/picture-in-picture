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
            instructor.textContent = 'Hint: click Start button to show picture-in-picture';
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
    if(!video.srcObject) {
        instructor.textContent = 'Please select screen';
        instructor.removeAttribute('hidden');
    } else {
        button.disabled = true;
        // Start Picture-in-Picture
        await videoElement.requestPictureInPicture();
        // Reset the Button
        button.disabled = false;
    }
});

selectScreen.addEventListener('click', selectMediaStream);