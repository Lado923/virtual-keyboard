let keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 32];


// document.onkeypress = function(event){
    
//     keyboard.push(event.charCode);
//     console.log(event);
// }

function init(){
    let out = '';
    for (i = 0; i < keyboard.length; i++){
switch(i){
case 12: out += `<div class="k-item">${String.fromCharCode(keyboard[i])}</div>
<div class="k-item wide_k backspace">Backspace</div>
<div class="clearfix"></div>
<div class="k-item tab">Tab</div>`;
break;
case 25: out += `<div class="k-item">${String.fromCharCode(keyboard[i])}</div>
<div class="k-item backspace">Del</div>
<div class="clearfix"></div>
<div class="k-item capslock wide_k">CapsLock</div>`;
break;
case 36: out += `<div class="k-item">${String.fromCharCode(keyboard[i])}</div>
<div class="k-item wide_k enter">Enter</div>
<div class="clearfix"></div>
<div class="k-item shift wide_k">Shift</div>`;
break;
case 47: out += `<div class="k-item">${String.fromCharCode(keyboard[i])}</div>
<div class="k-item arrow_up">▲</div>
<div class="k-item wide_k shift">Shift</div>
<div class="clearfix"></div>
<div class="k-item strl">Ctrl</div>
<div class="k-item win">Win</div>
<div class="k-item alt">Alt</div>`;
break;
case 48: out += `<div class="k-item space extra-wide">${String.fromCharCode(keyboard[i])}</div>
<div class="k-item alt">Alt</div>
<div class="k-item arrow_left">◄</div>
<div class="k-item arrow_left">▼</div>
<div class="k-item arrow_right">►</div>
<div class="k-item strl">Ctrl</div>
`;
break;
default:out += `<div class="k-item">${String.fromCharCode(keyboard[i])}</div>`

}

    }
    document.querySelector('body').innerHTML = out;
}

init()