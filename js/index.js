const topLeft = document.getElementById('top-left');
const topRight = document.getElementById('top-right');
const bottomLeft = document.getElementById('bottom-left');
const bottomRight = document.getElementById('bottom-right');
const box = document.getElementById('box');
const btncopiar = document.getElementById('copiar');
const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');

topLeft.addEventListener('input', updateBorderRadius);
topRight.addEventListener('input', updateBorderRadius);
bottomLeft.addEventListener('input', updateBorderRadius);
bottomRight.addEventListener('input', updateBorderRadius);
btncopiar.addEventListener('click', copyCSS);

widthInput.addEventListener('input', updateWidthValue);
heightInput.addEventListener('input', updateHeightValue);

function updateBorderRadius(){

    const tL = topLeft.value + 'px';
    const tR = topRight.value + 'px';
    const bL = bottomLeft.value + 'px';
    const bR = bottomRight.value + 'px';

    const borderRadiusValue = `${tL} ${tR} ${bL} ${bR}`;
    box.style.borderRadius = borderRadiusValue;
    
}

function updateWidthValue(){

    const Wdth = widthInput.value + 'px';
    const Hght = heightInput.value + 'px';

    const widthHeightValue = `${Wdth} `;
    box.style.width = widthHeightValue;
}

function updateHeightValue(){

    const Hght = heightInput.value + 'px';

    const heightValue = `${Hght}`;
    box.style.height = heightValue;

}

function copyCSS(){

    const cssValue = `Border-radius: ${ box.style.borderRadius};\n    width: ${box.style.width};\n    height: ${box.style.height};`;
    navigator.clipboard.writeText(cssValue)

    .then(() => alert('CSS cópiado!'))
    .catch(console.error('Erro ao cópiar o CSS: ', error))

}
