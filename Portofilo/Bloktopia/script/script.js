//Information blocks 
var learntext=document.getElementById("learntext");
var learnimg=document.getElementById("learnimg");
var earntext=document.getElementById("earntext");
var earnimg=document.getElementById("earnimg");
var playtext=document.getElementById("playtext");
var playimg=document.getElementById("playimg");
var createtext=document.getElementById("createtext");
var createimg=document.getElementById("createimg");

//Information blocks close on functions
document.getElementById("learnimg").onclick=function(){
    if(learntext.style.display=="block"){
        learntext.style.display="none";
        learnimg.style.marginTop="180px";
        learnimg.style.transition="0.5s"
    }
    else{
        learntext.style.display="block";
        learnimg.style.marginTop="0px";
    }
}
document.getElementById("earnimg").onclick=function(){
    if(earntext.style.display=="block"){
        earntext.style.display="none";
        earnimg.style.marginTop="180px";
        earnimg.style.transition="0.5s"
    }
    else{
        earntext.style.display="block";
        earnimg.style.marginTop="0px";
    }
}

document.getElementById("playimg").onclick=function(){
    if(playtext.style.display=="block"){
        playtext.style.display="none";
        playimg.style.marginTop="180px";
        playimg.style.transition="0.5s"
    }
    else{
        playtext.style.display="block";
        playimg.style.marginTop="0px";
    }
}

document.getElementById("createimg").onclick=function(){
    if(createtext.style.display=="block"){
        createtext.style.display="none";
        createimg.style.marginTop="180px";
        createimg.style.transition="0.5s"
    }
    else{
        createtext.style.display="block";
        createimg.style.marginTop="0px";
    }
}

const upscroll = document.querySelector("#upscroll")
document.addEventListener("scroll", () => {
    if(window.pageYOffset>300){
        upscroll.style.display="block";
    }
    else{
        upscroll.style.display="none";
    }
})
 
upscroll.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    });
});