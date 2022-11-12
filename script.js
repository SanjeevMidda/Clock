let block = document.querySelector('.block');

let rotation = 0;

// function move(){
//     // block.style.transform = "rotate(0deg)";
//     // block.style.transform = "rotate(180deg)";

//     if(block.classList.contains('transform')){
//         block.classList.remove('transform');
//     }else{
//         block.classList.add('transform')
//     }

// }

// setInterval(move,1000);

function move(){
    block.style.transform = `rotate(${rotation}deg)`;
    rotation +=30;
    console.log(rotation);
}

setInterval(move,1000);

