var images = document.querySelectorAll(".image img");
var prev = document.querySelector(".prev");
var next = document.querySelector(".right");
var close = document.querySelector("#close");
var galleryImg = document.querySelector(".gallery_inner img");
var gallery = document.querySelector(".gallery");
var currenIndex=0;
function showgallery()
{
    if(currenIndex==0)
    {
        prev.classList.add('hide');
    }
    else 
    {
        prev.classList.remove('hide');
    }

    if(currenIndex==images.length-1)
    {
        next.classList.add('hide');
    }
    else 
    {
        next.classList.remove('hide');
    }
    galleryImg.src = images[currenIndex].src;
    gallery.classList.add("show");
}
images.forEach((item, index)=>{
    item.addEventListener("click",function(){
        currenIndex=index;
        showgallery();
    });
});
close.addEventListener("click", function(){
    gallery.classList.remove("show");
});

document.addEventListener("keydown", function(e){
    if(e.keyCode==27){
        gallery.classList.remove('show');
    }
});

prev.addEventListener('click', function(){
    if(currenIndex>0)
    {
        currenIndex--;
        showgallery();
    }
});
next.addEventListener('click', function(){
    if(currenIndex<images.length-1)
    {
        currenIndex++;
        showgallery();
    }
});
