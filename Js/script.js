let menubar = document.getElementById("menuList")
menubar.style.maxHeight = "0px";

function toggle_menu(){
    if(menubar.style.maxHeight == "0px")
    {
        menubar.style.maxHeight = "320px";
    }
    else{
        menubar.style.maxHeight = "0px";
    }

}

function show_details_1(){
    let detail = document.getElementById("info1");
    let photo2 = document.getElementById("photo2");
    let photo3 = document.getElementById("photo3");
    if(detail.open){
        detail.open = false;
        detail.style.display = "none";
        photo2.style.display = "block";
        photo3.style.display = "block";
    }else{
        detail.style.display = "block";
        detail.open = true; 
        photo2.style.display = "none";
        photo3.style.display = "none";
    }
}
function show_details_2(){
    let detail = document.getElementById("info2");
    let photo1 = document.getElementById("photo1");
    let photo3 = document.getElementById("photo3");
    if(detail.open){
        detail.open = false;
        detail.style.display = "none";
        photo1.style.display = "block";
        photo3.style.display = "block";
    }else{
        detail.style.display = "block";
        detail.open = true; 
        photo1.style.display = "none";
        photo3.style.display = "none";
    }
}
function show_details_3(){
    let detail = document.getElementById("info3");
    let photo1 = document.getElementById("photo1");
    let photo3 = document.getElementById("photo2");
    if(detail.open){
        detail.open = false;
        detail.style.display = "none";
        photo1.style.display = "block";
        photo2.style.display = "block";
    }else{
        detail.style.display = "block";
        detail.open = true; 
        photo1.style.display = "none";
        photo2.style.display = "none";
    }
}