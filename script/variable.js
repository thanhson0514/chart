// constant variable
const MAX_HEIGHT_CHART = 300;
const MAX_WIDTH_CHART = 400;
const MAX_HEIGHT_CANVAS = 300;
const MAX_WIDTH_CANVAS = 400;
const MAX_COLUMN = 20;
const MAX_WIDTH = 19;

// DOM
const container = document.querySelector('.wrap');
const buttonSort = document.querySelector('.sort');
const buttonLine = document.querySelector('.line');
const buttonColumn = document.querySelector('.column');
const buttonClean = document.querySelector('.clean');

// store
const store = [];
const HashMap = {};

// canvas
let cvs = document.querySelector('.canvas');