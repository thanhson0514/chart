function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function createColumn(numberRandom) {
    const col = document.createElement('div');
    col.style.width = `${MAX_WIDTH}px`;
    col.className = 'col';
    col.style.height = `${numberRandom}px`;
    col.textContent = `${numberRandom}`;

    return col;
}

function createColumns(HashMap) {
    console.log(HashMap)
    for (let element in HashMap)
        container.innerHTML += HashMap[element];
}


function saveHeight(store) {
    for (let i = 0; i < MAX_COLUMN;++i) {
        let height = getRandomInt(MAX_HEIGHT_CHART);
        store.push(height);
    }
    for (let i = 0; i < store.length; ++i) {       
        let childNode = document.getHTML(createColumn(store[i]),true);
        HashMap[i] = childNode;
    }
}
function sortHeight() {
    store.sort((a,b) => b-a);
}

function drawLine(store) {
    createCanvas();
    canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d');

    canvas.style.zIndex = '3';

    let k = 0;
    let i = 1;
    let setDrawLine = setInterval(() => {
        k = 20*(i-1);
        ctx.moveTo(parseInt((20*i+k)/2), MAX_HEIGHT_CHART - store[i-1]);
        k = 20*i;
        ctx.lineTo(parseInt((20*(i+1)+k)/2),MAX_HEIGHT_CHART-store[i]);
        ctx.strokeStyle = '#000';
        ctx.stroke();
        i++;
        if (i >= store.length) clearInterval(setDrawLine);
    },100);
}

function clearLine() {
    canvas.remove();
}

function createCanvas() {
    const cvs = document.createElement('canvas');
    cvs.className = 'canvas';
    cvs.width = MAX_WIDTH_CHART;
    cvs.height = MAX_HEIGHT_CHART;
    document.querySelector('.container').appendChild(cvs);
}
