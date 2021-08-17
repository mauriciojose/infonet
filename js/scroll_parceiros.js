
const wrapContainer = document.querySelector('.flex-wrap-container');

wrapContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    wrapContainer.scrollLeft += evt.deltaY;
});

var widthScroll = wrapContainer.scrollWidth;
var offsetWidth = wrapContainer.offsetWidth;

var lastLeft = 0;
var movieWidth = 160;

const time = () => {
    setTimeout(function(){
        nextItemAuto();
        time();
    },4000);
};

const nextItemAuto = () => {
    wrapContainer.scrollLeft += movieWidth;
    lastLeft = wrapContainer.scrollLeft+movieWidth;
    movieWidth = ( ( lastLeft + offsetWidth ) >= widthScroll ) || ( lastLeft <= 0 ) ? movieWidth * -1 : movieWidth;
}

const nextItem = () => {
    wrapContainer.scrollLeft += movieWidth > 0 ? movieWidth : movieWidth * -1;
}

const prevItem = () => {
    wrapContainer.scrollLeft += movieWidth < 0 ? movieWidth : movieWidth * -1;
}

time();