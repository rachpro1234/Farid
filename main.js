let btn = document.getElementById("btn");

window.onscroll = function(){
    scrollFunction()
};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    {
       btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function topFunction(){
    document.documentElement.scrollTop = 0;
}