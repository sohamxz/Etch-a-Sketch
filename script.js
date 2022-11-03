const canvas = document.getElementById('canvas');
const inputNumber = document.getElementById('inputNumberr');
const inputColor = document.getElementById('inputColor');
const rainbow = document.getElementById('rainbow');
const grayScale = document.getElementById('grayScale');
const eraser = document.getElementById('eraser');

let colorPaint = inputColor.value;
let isRainBow = false;
let isGrayScale = false;
let isEraser = false;     

inputNumber.addEventListener('change', (e)=>{
    cleanCanva();
    paintCanva(e.target.value);
})
inputColor.addEventListener('change', (e)=>{
    isEraser = false;
    isGrayScale = false;
    isRainBow = false;
    colorPaint = e.target.value;
})
rainbow.addEventListener('click', (e)=>{
    isEraser = false;
    isGrayScale = false;
    isRainBow = true;
});

grayScale.addEventListener('click', (e)=>{
    isEraser = false;
    isRainBow = false;
    isGrayScale = true;
});

eraser.addEventListener('click', (e)=>{
    isRainBow = false;
    isGrayScale = false;
    isEraser = true;
})
