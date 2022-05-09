let EnKeyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 63, 32];
let RuKeyboard = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46, 32];
let RuEn = ''
let keyboard = ''



// Проверка одновременно нажатых клавиш (для переключения языка)
function runOnKeys(func, ...codes) {
  let pressed = new Set();

  document.addEventListener('keydown', function(event) {
    pressed.add(event.code);

    for (let code of codes) { 
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();
    func();
  });

  document.addEventListener('keyup', function(event) {
    pressed.delete(event.code);
  });

}

!localStorage.RuEn ? RuEn = 'EN' : RuEn = JSON.parse(localStorage.getItem('RuEn'));


// document.onkeypress = function(event){
    
//     RuKeyboard.push(event.code);
//     console.log(RuKeyboard);
// }

function init(){
    RuEn == 'EN' ? keyboard = EnKeyboard : keyboard = RuKeyboard
    let out = '';
    out += `
    <div class="page_box">
    <textarea class="input" autofocus></textarea>
    <div class="keyboard-box">
    <div class="line-k-box">`;
    for (i = 0; i < keyboard.length; i++){
switch(i){

case 12: out += `<div class="k-item" data="${String.fromCharCode(keyboard[i])}">${String.fromCharCode(keyboard[i])}</div>
<div class="k-item wide_k backspace" data="Backspace">Backspace</div>
</div>
<div class="line-k-box">
<div class="k-item command" data="Tab">Tab</div>`;
break;
case 25: out += `<div class="k-item" data="/">/</div>
<div class="k-item del command" data="Delete">Del</div>
</div>
<div class="line-k-box">
<div class="k-item capslock wide_k" data="CapsLock">CapsLock</div>`;
break;
case 36: out += `<div class="k-item" data="${String.fromCharCode(keyboard[i])}">${String.fromCharCode(keyboard[i])}</div>
<div class="k-item wide_k enter" data="Enter">Enter</div>
</div>
<div class="line-k-box">
<div class="k-item shift wide_k" data="Shift">Shift</div>`;
break;
case 46: out += `<div class="k-item" data="${String.fromCharCode(keyboard[i])}">${String.fromCharCode(keyboard[i])}</div>
<div class="k-item arrow_up command" data="ArrowUp">▲</div>
<div class="k-item wide_k shift" data="Shift">Shift</div>
</div>
<div class="line-k-box">
<div class="k-item strl command" data="Control">Ctrl</div>
<div class="k-item win command" data="Meta">Win</div>
<div class="k-item alt command" data="Alt">Alt</div>`;
break;
case 47: out += `<div class="k-item space extra-wide" data="">${RuEn}</div>
<div class="k-item alt command" data="Alt">Alt</div>
<div class="k-item arrow_left command" data="ArrowLeft">◄</div>
<div class="k-item arrow_left command" data="ArrowDown">▼</div>
<div class="k-item arrow_right command" data="ArrowRight">►</div>
<div class="k-item strl command" data="Control">Ctrl</div>
</div>
`;
break;
default:out += `<div class="k-item" data="${String.fromCharCode(keyboard[i])}">${String.fromCharCode(keyboard[i])}</div>`

}


    }
    out += `</div>
    <div class="text">
    <p>To change language use Shift + Alt</p>
    <p>Клавиатура сделана в Windows ОС</p>
    </div>
    </div>`;
    document.querySelector('body').innerHTML = out;
}






const updateLocal = () => {

    RuEn == 'EN' ? RuEn = 'RU' : RuEn = 'EN';
    localStorage.setItem('RuEn', JSON.stringify(RuEn));
    init()
}



runOnKeys(
    () => updateLocal(),
    "ShiftLeft",
    "AltLeft"
  );

console.log(RuEn)
init()

function foo() {
    let btn = document.querySelectorAll('.k-item');
    let input = document.querySelector('input');
    
    console.log(btn);
    console.log(input)
    // Развешиваем событие клика на кнопки
    for(let i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', function() {
        // При клике на кнопку записываем ее значение в инпут
        input.value = "5";
      });
    }
  
  }
  
  
  foo();


document.onkeydown = function (event) {
    console.log(event.code);
    document.querySelectorAll('.k-item').forEach(function(element){
        element.classList.remove('active');
    });
    document.querySelector(`[data="${event.key}"]`).classList.add('active');
}

document.onkeyup = function (event) {
    console.log(event.key);
    document.querySelectorAll('.k-item').forEach(function(element){
        element.classList.remove('active');
    });
}