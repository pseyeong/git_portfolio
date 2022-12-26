var bg_color = ["#b33032","#000000"];

var i = 0;

function change_col(){
    i++;
    if(i>=bg_color.length){
        i=0;
        document.getElementById("me_face").src = "./images/me.gif";
        document.getElementById("switch_img").src = "./images/switch_on.png";
        
    }else{
        document.getElementById("me_face").src = "./images/me2.gif";
        document.getElementById("switch_img").src = "./images/switch_off.png";
    }

    var bodyTag = document.getElementById("bg_col");
    bodyTag.style.backgroundColor = bg_color[i];

    var switch_bg = document.getElementById("switch_img");
    switch_bg.style.backgroundColor = bg_color[i];
}


