/*顶部搜索框点击*/
/*显示下拉搜索框 */
var topSearchClick = document.getElementsByClassName('topsearch')[0];
var topSearchImg = document.getElementsByClassName('searchImg')[0];
var topSearchInput = document.getElementsByClassName('searchin')[0];

var btsearchinput = document.getElementsByClassName('btsearch')[0];
var getSearchValue = document.getElementsByClassName('searchin')[0];
var showValuein = document.getElementsByClassName('forvalue')[0];
var getFormerValue = document.getElementsByClassName('forvalue');



var turnWhite = function(){
    topSearchImg.style.display="none";
    topSearchClick.style.width = "460px";
    topSearchClick.style.background = "white";
    topSearchInput.style.width="390px";

    btsearchinput.style.display="flex";
}

topSearchClick.addEventListener("click",turnWhite);

/*取消顶部搜索框点击*/
var cancelTopClick = function(){
    topSearchImg.style.display="inline";
    topSearchClick.style.width = "300px";
    topSearchClick.style.background = "hsla(0,0%,100%,.125)";
    topSearchInput.style.width="288px";

    btsearchinput.style.display="none"
}
topSearchClick.addEventListener('focusout',cancelTopClick);

/*在搜索框下方实时显示输入结果 */
var showSearchResult = function(event){
    var putValue = document.getElementsByClassName('searchvalue')[0];
    console.log(putValue.value);
    var showValue = document.getElementsByClassName('searchin')[0];
    console.log(showValue.value);
    if(!showValue.value){
        putValue.value="";
    }
    else{
        putValue.value = showValue.value;
    }
    
}
/*
var showSearchResult = function(event){
    if( btsearchinput.style.display == "flex"){
        var getValue = document.getElementsByClassName('searchin')[0];
        var getformerValue = document.getElementsByClassName('forvalue');

        var value = getValue.value;
        console.log(value);
        //showValuein.removeChild(nowValue);
        var nowValue = document.createTextNode(value);

        if(!getformerValue[0].firstChild.wholeText){
            showValuein.appendChild(nowValue);
        }

        var formervalue = getFormerValue[0].firstChild;
        console.log('yes');

        showValuein.replaceChild(nowValue,formervalue);
    }
}
*/
topSearchClick.addEventListener('keyup',showSearchResult);

/*顶部+号点击*/
var topRightadd = document.getElementById('addicon');

var toprightrepo = document.getElementById('menurepo');
var toprightrepotwo = document.getElementById('menutwo');
var toprightrepotri = document.getElementById('menutri');
var toprightrepof = document.getElementById('menuf');

var hiderepochoice = function(e){
    if(e.target === toprightrepo || e.target === toprightrepotri || e.target === toprightrepotwo || e.target===toprightrepof){
        topRightadd.style.display = "flex";
    }
    else if(e.target !== topRightadd ){
        topRightadd.style.display = "none";
    }
    if(e.target === toprightavatar || e.target===toprightavataricon || e.target===toprightavatartri){
        showiconmenu.style.display = "block";
    }
    else if(e.target !== showiconmenu ){
        showiconmenu.style.display = "none";
    }
}
document.addEventListener('click',hiderepochoice);

/*顶部头像框点击*/
var toprightavatar = document.getElementsByClassName('selfinfo')[0];
var toprightavataricon = document.getElementsByClassName('avatar')[0];
var toprightavatartri = document.getElementsByClassName('selfinfo')[2];

var showiconmenu = document.getElementById('avatarmenu');

