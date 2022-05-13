
    const mainmenu = document.querySelectorAll(".mainmenu");
    const container = document.querySelectorAll(".container");
    const second = container[1].offsetTop;

    mainmenu[1].onclick = function(){
    window.scroll({top:second, behavior: 'smooth'});
    }