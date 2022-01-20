//changetext function on down navbar
function terziniyenile(e, n){
    setInterval(function(){ 
        document.getElementById("yenilepart").innerHTML=n;
     }, e);
}
terziniyenile(1500, "Tərzini");
terziniyenile(3000, "Geyimini");
terziniyenile(4500, "Mover ilə");
terziniyenile(6000, "Kuryerini");
terziniyenile(7500, "Evini");


//statistics number function 
function subscribers(e,n,f){
    var istifadechiintervar = setInterval(function (){
        let number = Number(document.getElementById(f).textContent);
        document.getElementById(f).textContent=number+1;
        if(document.getElementById(f).textContent==e){
           clearInterval(istifadechiintervar);
        };
    },n);
}
subscribers(110,25,"istifadechiler");
subscribers(5,400,"mehsullar");
subscribers(1,1800,"baglamalar");
subscribers(100,30,"emekdashlar");
 
//Tariffs events
function tariffevents(a,b,c,d){
    document.getElementById(a).addEventListener('click',function(){
        document.getElementById(b).style.display="block";
        document.getElementById(b).style.display="block";
        document.getElementById(c).style.display="none";
        document.getElementById(d).style.display="none";
    });
}
tariffevents("standartbutton","table2","table1","table3");
tariffevents("basicbutton","table1","table2","table3");
tariffevents("premiumbutton","table3","table2","table1");
 
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({

        items:2,
        margin:25,
        loop:true,
        nav:true,
         
    });
  });


  $('.owl-theme').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    startPosition:0,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.owl-theme1').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    startPosition:0,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
})