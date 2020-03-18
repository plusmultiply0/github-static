/*顶部搜索框点击*/
var topSearchClick = document.getElementsByClassName('topsearch')[0];
var topSearchImg = document.getElementsByClassName('searchImg')[0];
var topSearchInput = document.getElementsByClassName('searchin')[0];

var turnWhite = function(){
    topSearchImg.style.display="none";
    topSearchClick.style.width = "400px";
    topSearchClick.style.background = "white";
    topSearchInput.style.width="390px";
}

topSearchClick.addEventListener("click",turnWhite);

/*取消顶部搜索框点击*/
var cancelTopClick = function(){
    topSearchImg.style.display="inline";
    topSearchClick.style.width = "300px";
    topSearchClick.style.background = "hsla(0,0%,100%,.125)";
    topSearchInput.style.width="288px";
}
topSearchClick.addEventListener('focusout',cancelTopClick);
