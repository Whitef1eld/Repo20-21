var i, c, caps = 0, shift = 0;
    
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
            document.getElementById('textArea').value = document.getElementById('textArea').value.slice(0, -1);
        } else if(i[c].id === 'okKey') {
            document.getElementById('textArea').value += '\n';
        }  else if(i[c].id === 'capsLockKey') {
            if(caps === 0) {
                caps = 1;
            } else {
                caps = 0;
            }
        } else if(i[c].id === 'shiftKey') {
            shift = 1;
        } else if(caps === 1) {
            if(shift === 1) {
                document.getElementById('textArea').value += this.value.toLowerCase();
                shift = 0;
            } else {
                document.getElementById('textArea').value += this.value.toUpperCase();
            }
        } else {   
            if(shift === 1) {
                document.getElementById('textArea').value += this.value.toUpperCase();
                shift = 0;
            } else {
                document.getElementById('textArea').value += this.value.toLowerCase();
            }
       }
    };
}

function showAlert() {
    alert(document.getElementById('textArea').value);
}

window.addEventListener?
window.addEventListener('load', init, false) : window.attachEvent('onload', init);
