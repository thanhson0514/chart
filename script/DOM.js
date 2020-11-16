document.getHTML= function(who, deep){
    if(!who || !who.tagName) return '';
    var txt, ax, el= document.createElement("div");
    el.appendChild(who.cloneNode(false));
    txt= el.innerHTML;
    if(deep){
        ax= txt.indexOf('>')+1;
        txt= txt.substring(0, ax)+who.innerHTML+ txt.substring(ax);
    }
    el= null;
    return txt;
}

// sort animation
buttonSort.addEventListener('click', e => {
    canvas = document.querySelector('.canvas');
    canvas.style.zIndex = '0';

    let i = 0;
    let x = 0;

    let setAnimationColumn = setInterval(()=>{
        let j = x;
        if (j < 20) {
            let pre = parseInt(container.childNodes[i].style.height);
            let curr = parseInt(container.childNodes[j].style.height);
            if (pre > curr) {
                let temp = pre;
                container.childNodes[i].style.height = `${curr}px`;
                container.childNodes[i].textContent =  `${curr}`;
                container.childNodes[j].style.height = `${temp}px`;
                container.childNodes[j].textContent = `${temp}`;
            }
            x++;
        }
        else {
            i++;
            x = 0;
        }
        if (i >= 20) {
            clearInterval(setAnimationColumn);
            sortHeight();
            console.log('The End!')
        }
    },40);
});

buttonLine.addEventListener('click', e => {
    drawLine(store);
})

buttonColumn.addEventListener('click', e => {
    canvas = document.querySelector('.canvas');
    canvas.style.zIndex = '0';
})

buttonClean.addEventListener('click', e => {
    clearLine();
})