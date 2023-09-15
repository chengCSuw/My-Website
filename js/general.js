
function changeTitle(){
    const pictures = document.querySelectorAll(".picture");
    for (let i = 0; i < pictures.length; i++) {
        pictures[i].setAttribute("title", "zoom-in");
    }
    return;
}



function openMenu(){
    document.getElementById("show-menu").style.transition_delay = "0s";
    document.getElementById("nav-menu").style.transition_delay = "0.25s";
    document.getElementById("show-menu").style.left = "-60px";
    document.getElementById("nav-menu").style.left = "0px";
    setTimeout(function () {
        document.getElementById("nav-menu").style.transition = "0s";
    }, 250);
}

function closeMenu(){
    document.getElementById("show-menu").style.transition_delay = "0.25s";
    document.getElementById("nav-menu").style.transition_delay = "0s";
    document.getElementById("nav-menu").style.transition = "0.25s";
    document.getElementById("nav-menu").style.left = "-358px";
    document.getElementById("show-menu").style.left = "20px";
}


var originalTop;
var originalLeft;
var originalWidth;
var originalHeight;
var childrenId;
var bodyHeight;
function pictureZoom(id){
    getInfo(id);
    document.getElementById(id).style.position = "fixed" ;
    document.getElementById(id).style.top = "54%";
    document.getElementById(id).style.left = "50%";
    document.getElementById(id).style.transform = "translate(-50%, -50%)";
    document.getElementById(id).style.zIndex = "110";
    document.getElementById(childrenId[1]).style.width = "100%";
    document.getElementById(childrenId[0]).style.opacity = "100";
    document.getElementById(childrenId[0]).style.cursor = "pointer";
    document.getElementById(childrenId[1]).style.cursor = "auto";
    document.getElementById(childrenId[2]).style.color = "white";
    document.getElementById(childrenId[2]).style.fontSize = "18px";
    document.getElementById(childrenId[2]).style.fontWeight = "400";
    document.getElementById(childrenId[2]).style.maxWidth = "800px";
    document.getElementById("image-background").style.width = "100vw";
    document.getElementById("image-background").style.height = "100vh";
}

function pictureClose(id){
    document.getElementById(id).style.position = "relative" ;
    document.getElementById(id).style.top = originalTop;
    document.getElementById(id).style.left = originalLeft;
    document.getElementById(id).style.transform = "";
    document.getElementById(childrenId[1]).style.width = originalWidth;
    document.getElementById(id).style.zIndex = "0";
    document.getElementById(childrenId[0]).style.opacity = "0";
    document.getElementById(childrenId[0]).style.cursor = "auto";
    document.getElementById(childrenId[1]).style.cursor = "zoom-in";
    document.getElementById(childrenId[2]).style.color = "black";
    document.getElementById(childrenId[2]).style.fontSize = "14px";
    document.getElementById(childrenId[2]).style.fontWeight = "300";
    document.getElementById(childrenId[2]).style.maxWidth = "";
    document.getElementById("image-background").style.width = "0px";
    document.getElementById("image-background").style.height = "0px";
}

function getInfo(id){
    const parent = document.getElementById(id);

    const children = Array.from(parent.children);

    childrenId = children.map(element => {
    return element.id;
    });
    originalTop = document.getElementById(id).style.top;
    originalLeft = document.getElementById(id).style.left;
    originalWidth = document.getElementById(id).style.width;
    originalHeight = document.getElementById(id).style.height;
}

function copyEmail() {
    navigator.clipboard.writeText("chengjietesting@outlook.com");
    document.getElementById("copied-notification").style.opacity = "100";
}