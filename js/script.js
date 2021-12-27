let html = document.querySelector('html');
html.setAttribute('lang' , 'ru');

let metaUTF = document.createElement('meta');
metaUTF.setAttribute('charset' , 'UTF-8');

let title = document.createElement('title');
title.innerHTML = 'JS-8';

document.head.insertBefore(metaUTF, document.querySelector('script'));
document.head.appendChild(title);

let style = document.createElement('style');
style.innerHTML = `
    
    * {
        margin: 0;
        padding: 0;
    }

    .site {
        width: 100%;
        height: 100vh;
    }

    .title-wrapper {
        padding-top: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 55px;
    }

    .title {
        font-size: 36px;
        font-family: Arvo;
        color: #212121;
        margin-bottom: 10px;
    }  
    
    .p1 {
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        color: #9FA3A7;
    }

    .container {
        height: 480px;
        display: flex;
        justify-content: center;
        padding-bottom: 139px;
    }

    .container-1, 
    .container-2 {
        width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-width: 1px 0 1px 1px;
        border-style: solid;
        border-color: #E8E9ED;
        border-radius: 5px 0 0 5px;
    }

    .container-2 {
        width: 401px;
        background-color: #8F75BE;
        border: none;
        border-radius:  0 5px 5px 0;
    }

    .container-1 span, 
    .container-2 span {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        font-size: 12px;
        color: #9FA3A7;
        margin-top: 81px;
    }

    .container-2 span {
        color: #FFC80A;
    }

    .title-h2 {
        width: 210px;
        height: 92px;
        font-family: 'Arvo', serif;
        line-height: 46px;
        font-size: 36px;
        text-align: center;
        color: #212121;
        margin-bottom: 25px;
        margin-top: 15px;
    }

    .container-1 .p1, 
    .container-2 .p1 {
        width: 210px;
        height: 44px;
        font-size: 12px;
        text-align: center;
        margin-bottom: 52px;
        line-height: 22px;
    }

    .container-2 .title-h2,
    .container-2 .p1  {
        color: #FFFFFF;
    }

    .btn {
        width: 147px;
        background-color: transparent;
        padding: 16px 22px;
        font-size: 12px;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        color: #212121;
        border: 3px solid #FFC80A;
        border-radius: 40px;
        cursor: pointer;
    }
`;
document.head.appendChild(style);

//body 
let div = document.createElement('div');
div.classList.add('site');
document.body.appendChild(div);

let div1 = document.createElement('div');
div1.classList.add('title-wrapper');
div.appendChild(div1);

let h1 = document.createElement('h1');
h1.classList.add('title');
h1.innerHTML = 'Choose Your Option';
div1.appendChild(h1);

let p = document.createElement('p');
p.classList.add('p1');
p.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
div1.appendChild(p);

let div2 = document.createElement('div');
div2.classList.add('container');
div.appendChild(div2);

let div3 = document.createElement('div');
div3.classList.add('container-1');
div2.appendChild(div3);

let div4 = document.createElement('div');
div4.classList.add('container-2');
div2.appendChild(div4);

//div3
let span_div3  = document.createElement('span');
span_div3.innerHTML = 'FREELANCER';
div3.appendChild(span_div3);

let h2_div3 = document.createElement('h2');
h2_div3.innerHTML = 'Initially designed to ';
h2_div3.classList.add('title-h2');
div3.appendChild(h2_div3);

let p_div3 = p.cloneNode(true);
div3.appendChild(p_div3);

let button_div3 = document.createElement('button');
button_div3.innerHTML = 'START HERE';
button_div3.classList.add('btn');
div3.appendChild(button_div3);

//div4
let span_div4 = document.createElement('span');
span_div4.innerHTML = 'STUDIO';
div4.appendChild(span_div4);

let h2_div4 = h2_div3.cloneNode(true);
div4.appendChild(h2_div4);

let p_div4 = p.cloneNode(true);
div4.appendChild(p_div4);

let button_div4 = button_div3.cloneNode(true);
div4.appendChild(button_div4);

