let taskbar = document.getElementsByClassName("taskbar")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];
let icon = document.getElementsByClassName("iconjs")[0];
taskbar.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-650px"
    }
    else{
        startmenu.style.bottom = "50px"

    }
})

icon.addEventListener("click", ()=> {
    window.location.href = "http://www.google.com";
  });
  


  
