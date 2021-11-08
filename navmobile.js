const menuicon=document.querySelector('#menuicon');
      function changemenuicon(menubtn){
    if(menubtn.checked){
    menuicon.classList.add("fa-times");
    menuicon.classList.remove("fa-menu");
    }
    else{
    menuicon.classList.remove("fa-times");
    menuicon.classList.add("fa-menu");
    }
}