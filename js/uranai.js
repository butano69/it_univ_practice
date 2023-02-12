'use strict';

/* js内で使用する定数に、htmlのidを代入する。 */
const btn=document.getElementById('btn');
const result=document.getElementById('resolt');

btn.addEventListener('click',()=>{
    /*Math.random はランダムの0～0.999までの値が代入される。 */
    const num=Math.random();

    if(num == 0.000){
        result.textContent='神吉';
    }else if(num < 0.2){
        result.textContent='大吉';
    }else if(num < 0.5){
        result.textContent='中吉';
    }else if(num < 0.8){
        result.textContent='吉';
    }else if(num < 0.9){
        result.textContent='小吉';
    }else if(num == 0.999){
        result.textContent='大凶';
    }else{
        result.textContent='凶';
    }


})

