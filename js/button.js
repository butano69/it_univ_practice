'use strict';

{
    const btn=document.getElementById('btn');
    const cont=document.getElementById('cont');

    console.log(btn);
    console.log(cont);

    btn.addEventListener('click',()=>{
    cont.classList.toggle('on');

    });
}

{
    const menu = document.querySelector('.menu-btn');

    menu.addEventListener('click',()=>{
        menu.classList.toggle('active');
    });
}


