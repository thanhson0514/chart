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
window.addEventListener('click', e => {
    let i = 1;
    let x = 1;

    let setAnimationColumn = setInterval(()=>{
        let j = x;
        if (j <= 20) {
            console.log(i,j);
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
            x = 1;
        }
        if (i > 20) {
            clearInterval(setAnimationColumn);
            sortHeight();
            canvas.style.zIndex = '3';
            drawLine(store);
            console.log('The End!')
        }
    },40);
})