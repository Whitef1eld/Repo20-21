function() {
    'use strict';
    var i, c;
    
    function init() {
        i=document.getElementById('keyboard').getElementsByTagName('input');
        for(c=0;c<i.length;c++) {
            if(i[c].type==='button') {
                i[c].addEventListener('onclick',makeClickHandler(c));
            }
        }
 
        document.getElementById('clear').onclick=function() {
            document.getElementById('text').value='';
        }
    }
 
    function makeClickHandler(c) {
        i[c].onclick=function() {
            document.getElementById('text').value+=this.value.toLowerCase();
        }
    }
 
    window.addEventListener?
    window.addEventListener('load',init,false):
    window.attachEvent('onload',init);
 }