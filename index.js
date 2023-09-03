var num_button = document.querySelectorAll(".drum").length;

function play_sound(text)
{
    if(text === "w")
    {
        audio = new Audio("sounds/crash.mp3");
        audio.play();
    }
    else if(text === "a")
    {
        audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
    else if(text === "s")
    {
        audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    else if(text === "d")
    {
        audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    else if(text === "j")
    {
        audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    else if(text === "k")
    {
        audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    else if(text === "l")
    {
        audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }   
}

function play_animation(text){
    var animation_key = document.querySelector("." + text);

    animation_key.classList.add("pressed");

    setTimeout(function (){
        animation_key.classList.remove("pressed");},
        100
    )
}
// var sound_array = 
for(var i = 0; i < num_button; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener('click', function (){
        
        this.style.color = "black";
        var text = this.textContent;

        play_sound(text);
        play_animation(text);
    })
}

document.addEventListener('keypress', function (event){
    var key = event.key;
    play_sound(key);
    play_animation(key);
})