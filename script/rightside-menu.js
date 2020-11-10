function OpenMenu(){
    var menu = document.getElementById('rightside-menu');
    var openMenuButton = document.getElementById('open-menu');
    var openClassName = "opened-menu";
    var openMenuLargeClassName = "open-menu-large";

    if(!menu.classList.contains(openClassName)){
        menu.classList.add(openClassName);
        openMenuButton.classList.add(openMenuLargeClassName);
    }
    else{
        menu.classList.remove(openClassName);
        openMenuButton.classList.remove(openMenuLargeClassName);
    }
}