const BUTTON = document.querySelector('button');
const INPUT = document.querySelector('input');
let tagsSet = new Set;
const tagsBlock = document.querySelector('#tagsBlock');

class Tag {
    _name;
    _textContent;

    constructor (value) {
        this._name = value;
        this._textContent = value;
    }

}

BUTTON.addEventListener('click', function () {
    oldSize = tagsSet.size;
    tagsSet.add(INPUT.value);
    newSize = tagsSet.size;
    
    
    if (oldSize != newSize && INPUT.value != '') {
    let newP = document.createElement('p');
    if (INPUT.value[0] === '#'){
    newP.textContent = INPUT.value;
    } else { newP.textContent ='#' + INPUT.value;};
    tagsBlock.appendChild(newP);
    console.log(tagsSet);

}
INPUT.value = '';
}
)

