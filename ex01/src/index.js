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
        document.getElementById('textArea').value += this.value.toLowerCase();
    }
}

/* var backSpace = function() {
    var string = document.getElementById('textArea').value;
    document.getElementById('textArea').value = string.substring(0, string.length - 1);
} */

window.addEventListener?
window.addEventListener('load', init, false) : window.attachEvent('onload', init);
