const topLeft = document.getElementById('top-left');
const topRight = document.getElementById('top-right');
const bottomLeft = document.getElementById('bottom-left');
const bottomRight = document.getElementById('bottom-right');
const box = document.getElementById('box');
const btncopiar = document.getElementById('copiar');

topLeft.addEventListener('input', updateBorderRadius);
topRight.addEventListener('input', updateBorderRadius);
bottomLeft.addEventListener('input', updateBorderRadius);
bottomRight.addEventListener('input', updateBorderRadius);

function updateBorderRadius(){

    const tL = topLeft.value + 'px';
    const tR = topRight.value + 'px';
    const bL = bottomLeft.value + 'px';
    const bR = bottomRight.value + 'px';

    const borderRadiusValue = `${tL} ${tR} ${bL} ${bR}`;
    box.style.borderRadius = borderRadiusValue;
    
}

btncopiar.addEventListener('click', copyCSS);

function copyCSS(){

    const cssValue = `Border radius: ${ box.style.borderRadius};`;
    navigator.clipboard.writeText(cssValue)

    .then(() => alert('CSS cópiado!'))
    .catch(console.error('Erro ao cópiar o CSS: ', error))

}
