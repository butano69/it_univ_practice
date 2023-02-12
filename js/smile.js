'use strict';

{

    const img = [".jpg", "foo.jpg", "bar.jpg"];

    let count = -1;

    const hoge = () => {
    count++;
    // カウントが最大になれば初期値に戻す
    if (count == img.length) count = 0;
    //画像選択
    pic.src = img[count];
    //1秒ごとに実行    
    setTimeout(() => { hoge(); }, 1000);
    }

    window.onload = () => {

    hoge();

    }

}
