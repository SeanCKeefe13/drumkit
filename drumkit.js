window.addEventListener('keydown', function(e){
    const audio = document.querySelectorAll(`audio[data-key="${e.keycode}"]`);
    if(!audio)return;
    audio.play()
})