

// const btn = document.querySelector('.btn');

// const h1 = document.querySelector('h1');

// const h2 = document.querySelector('h2');

// h2.onclick = () =>{
//     alert();
// }

// btn.onclick = () =>{
//     h1.innerHTML = 'We love js';
//     h1.style.backgroundColor = 'yellow'
// }



// const img = document.querySelector('img');

// img.onmouseleave = () =>{
//     h2.innerHTML = 'My Name is kuddus uddin';
//     h2.style.color = 'green';
// }

// const p = document.querySelector('p');

// p.ondblclick = () => {
//     p.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, obcaecati, nihil accusamus harum consequuntur, quia nesciunt quae aliquam molestiae optio id inventore voluptates quas fugiat fuga dolorum quasi accusantium magni.';
// }

// // img.addEventListener('click', function(){
// //     alert();
// // })

// // btn.addEventListener('click', function(){

// //     alert();

// // });

// console.log(btn);

// const click = document.getElementById('add');
// const back = document.getElementById('back');
// const h1 = document.getElementById('data');
// const sound = document.getElementById('sound');
// const no1 = document.getElementById('no1');
// const no2 = document.getElementById('no2');
// const no3 = document.getElementById('no3');

// let count = 0;
// let stopcount = '';
 
// click.onclick = () => {
//     // count ++;

//     // if (count <=10 ) {
//     //     h1.innerHTML = count; 
    
//     // }else{

//     //     count  = 10;

//     // }

//     // setTimeout ( () =>{

//     //     count++;

//     //     h1.innerHTML = count
//     //     no1.play();

//     // }, 2000);

//     stopcount = setInterval ( () =>{
//         count++;
//         h1.innerHTML = count;
//         no1.play();

//     }, 1000);
    
    

// }

// back.onclick = () =>{
//     // count --;

//     // if(count >=0 ){

//     //     h1.innerHTML = count;

//     // }else{
//     //     count = 0
//     // }

//     clearInterval(stopcount);
//     no2.play();
    
    
// }

// sound.onclick = () => {

//     clearInterval(stopcount);
//     count = 0;
//     h1.innerHTML = count;
//     no3.play();
// }

// Timer 

// const start = document.getElementById('start');
// const stop = document.getElementById('stop');
// const reset = document.getElementById('reset');
// const h1 = document.getElementById('data');
// const sound1 = document.getElementById('s1');
// const sound2 = document.getElementById('s2');
// const sound3 = document.getElementById('s3');



// let count = 0;
// let stopcount = '';

// start.onclick = () =>{

//     stopcount = setInterval ( () => {

//         count++;

//         h1.innerHTML = count;
//         sound2.play();
        
//     }, 1000);

// }

// stop.onclick = () =>{

//     clearInterval(stopcount);
//     h1.innerHTML = count;
//     sound1.play();

// }

// reset.onclick = () =>{

//     clearInterval(stopcount);
//     count = 0;
//     h1.innerHTML = count;
//     sound3.play();
// }


// const h1 = document.querySelector('h1');
// const input = document.querySelector('input');
// const button = document.querySelector('button');

// button.onclick = () =>{
//     h1.innerHTML = input.value;
//     h1.style.color = 'red';
// }

// input.onkeydown = () => {
//     h1.innerHTML = input.value;
// }
    
// input.onfocus = () => {
//     console.log("focus");
// }

// const select = document.querySelector('select');
// const h1 = document.querySelector('h1');
// const gender = document.querySelectorAll('input[name = "gender"]');

// gender.forEach (item =>{

//     item.onchange = () =>{
//         h1.innerHTML= item.value;
//     }

// })

// const search = document.querySelector('.search');
// const input = document.querySelector('input');
// const i = document.querySelector('i');

// input.onblur = () =>{
//     if(input.value == ''){
//         search.style.borderColor = 'red';
//         i.style.display = 'block'
//     }else {
//         search.style.borderColor = 'blue';
//         i.style.display = 'none';
//     }
// }

// input.onfocus = () =>{
//     search.style.borderColor = 'blue';
//     i.style.display = 'none';
    
// }


// const heading = document.getElementById('heading');
// const font_size = document.getElementById('font_size');
// const font_family = document.getElementById('font_family');
// const h1 = document.querySelector('h1');
// const align = document.querySelectorAll('.align');
// const color = document.querySelector('.color');

// heading.onkeyup = () =>{
//     h1.innerHTML = heading.value;
//     h1.style.fontSize = '20px';
// }

// align.forEach(type =>{
//     type.onchange = () =>{
//         h1.style.textAlign = type.value;
//     }
// });


// font_size.oninput = () =>{
//     h1.style.fontSize = font_size.value + 'px';
// }

// color.oninput = () =>{
//     h1.style.color = color.value;
// }

// font_family.onchange = () =>{
//     h1.style.fontFamily = font_family.value;
// }


/**
 * Build by Myself
 */


const heading = document.getElementById('heading');
const headingg = document.querySelector('.headingg');
const i = document.querySelector('i');
const h2 = document.querySelector('h2');
const text_align = document.querySelectorAll('#text_align');
const text_size = document.querySelector('#text_size');
const text_color = document.querySelector('#text_color');
const font_family = document.querySelector('#font_family');
const paragraph = document.getElementById('paragraph');
const p = document.querySelector('p');
const formemail = document.querySelector('#formemail');
const formpass = document.querySelector('.formpass');


heading.onkeyup = () =>{
    h2.innerHTML = heading.value;
};





paragraph.onkeyup = () =>{

    p.innerHTML = paragraph.value;
    
}

text_align.forEach (type =>{

    type.onchange = () =>{

        h2.style.textAlign = type.value;
        p.style.textAlign = type.value;

    }

});

text_size.oninput = () =>{
    h2.style.fontSize = text_size.value + 'px';
    p.style.fontSize = text_size.value + 'px';
}

text_color.oninput = () =>{
    h2.style.color = text_color.value;
    p.style.color = text_color.value;
}

font_family.onchange = () =>{
    h2.style.fontFamily = font_family.value;
    p.style.fontFamily = font_family.value;
}