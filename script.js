let images = document.querySelectorAll(".gallery img")
let lightbox = document.getElementById("lightbox")
let lightboxImg = document.getElementById("lightbox-img")
let download = document.getElementById("download")

let current = 0

images.forEach((img,index)=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex"

lightboxImg.src = img.src

download.href = img.src

current = index

})

})

document.querySelector(".close").onclick=()=>{

lightbox.style.display="none"

}

document.querySelector(".next").onclick=()=>{

current++

if(current>=images.length){
current=0
}

lightboxImg.src = images[current].src
download.href = images[current].src

}

document.querySelector(".prev").onclick=()=>{

current--

if(current<0){
current=images.length-1
}

lightboxImg.src = images[current].src
download.href = images[current].src

}


/* filter */

function filterImages(category){

let items=document.querySelectorAll(".image")

items.forEach(item=>{

if(category==="all"){

item.style.display="block"

}

else if(item.classList.contains(category)){

item.style.display="block"

}

else{

item.style.display="none"

}

})

}


/* search */

document.getElementById("search").addEventListener("keyup",function(){

let value=this.value.toLowerCase()

document.querySelectorAll(".image").forEach(img=>{

if(img.className.includes(value)){

img.style.display="block"

}

else{

img.style.display="none"

}

})

})


/* dark mode */

document.getElementById("toggleMode").onclick=()=>{

document.body.classList.toggle("dark")

}