
function getInput(){
    var input = '';
    var textElement = document.getElementById('input');
    input = textElement.input.value
    // console.log(input)
    stringManipulate(input);
}

function stringManipulate(input){
    charList = [];
    rawInput = Array.from(input.trim());
    // console.log(rawInput);
    desiredList = ['o', 'O', 'r', 'R','e', 'E', '&'];
    var i;
    for(i=0; i<rawInput.length; i++){
        if (!(desiredList.includes(rawInput[i]))){
            alert('Your Receipe is not valid! The Receipe should be a combination of o,re or O,RE');
            // console.log(1);
            return;
        }
        if(rawInput[i] === 'r' || rawInput[i] === 'R'){
            // console.log(rawInput[i])
            // console.log(i)

            if (rawInput[i+1] === 'E' || rawInput[i+1] === 'e'){
                var str = rawInput[i] + rawInput[i+1];
                charList.push(str);
                i = i+1;
            }
            else {
                // console.log(rawInput[i+1])
                // console.log(i+1)
                alert('Your Receipe is not valid! The Receipe should be a combination of o,re or O,RE');
                // console.log(0);
                return;
            }
            
        }
        else {
            charList.push(rawInput[i]);
        }   
        
    }
    // console.log(charList);
    arrangeElement(charList);
}

function arrangeElement(charList){
    custom_oreo = document.createElement('div')
    custom_oreo.setAttribute('class', 'oreo')
    charList.forEach(ele => {
        if(ele === 'O' || ele === 'o'){
            var div = document.createElement("div");
            div.setAttribute("class", "black");
            custom_oreo.appendChild(div)
        }
        else if(ele === 'RE' || ele === 're'){
            div = document.createElement("div");
            div.setAttribute("class", "white");
            custom_oreo.appendChild(div)
        }
        else if(ele === '&'){
            div = document.createElement("div");
            div.setAttribute("class", "blank");
            custom_oreo.appendChild(div)
        }
    });
    oreos = document.getElementsByClassName('oreos')[0];
    oreos.appendChild(custom_oreo);
    // dragAndDrop();
}

// function dragAndDrop(){
//     oreos = document.getElementsByClassName('oreo');

//     for(i=0; i<oreos.length; i++){
//         dragOreo(oreos[i]);
//         function dragOreo(oreo){
//             var oldX = 0, oldY = 0, newX = 0, newY = 0;
//             oreo.onmousedown = dragMouseDown;
    
//             function dragMouseDown(event) {
//                 // event = event || window.event
//                 event.preventDefault();
//                 oldX = event.clientX;
//                 oldY = event.clientY;
//                 document.onmouseup = closeDragElement;
//                 document.onmousemove = elementDrag;
//             }
    
//             function elementDrag(event){
//                 // event = event || window.event
//                 event.preventDefault();
//                 newX = oldX - event.clientX;
//                 newY = oldY - event.clientY;
//                 oldX = event.clientX;
//                 oldY = event.clientY;
    
//                 oreo.style.top = (oreo.offsetTop - newY) + 'px';
//                 oreo.style.left = (oreo.offsetLeft - newX) + 'px';
    
//             }
    
//             function closeDragElement(){
//                 document.onmouseup = null;
//                 document.onmousemove = null;
//             }
//         }
//     }
    
//     }

    