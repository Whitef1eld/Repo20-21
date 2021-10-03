var i, c;
    
function init() {
    i = document.getElementById('keyboard').getElementsByTagName('button');
    for(c = 0; c < i.length; c++) {
        if(i[c].type === 'button') {
            i[c].addEventListener('onclick', makeClickHandler(c));
        }
    }
}

function makeClickHandler(c) {
    i[c].onclick = function() {
        if(i[c].id === 'backSpaceKey') {
            document.getElementById('textArea').value = document.getElementById('textArea').value.replace(/.$/,'');
        } else {
            document.getElementById('textArea').value += this.value.toLowerCase();
       }
    };
}

window.addEventListener?
window.addEventListener('load', init, false) : window.attachEvent('onload', init);
