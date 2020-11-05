window.addEventListener("keydown",function(e){
    let audio = this.document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    let keys = this.document.querySelector(`.key[data-key = "${e.keyCode} ]`);


    if(!audio){
        return
    }

    audio.currentTime = 0;
    audio.play()
    keys.classList.add('playing')
})

let removeTransition = function(e){
    if(e.propertyName !=="transform")
    return
    this.classList.remove('playing')
}


let key = document.querySelector('.key')
console.log(key)
key.forEach(function(keys){
    keys.addEventListener('transitionend',removeTransition)
})