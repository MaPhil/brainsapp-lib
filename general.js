
let css = `._ba_modal{position:relative;display:flex;justify-content:center;z-index:1;left:0;top:0;overflow:auto;background-color:rgba(0,0,0,.4);height:100%;align-items:center;cursor:pointer}._ba_modal>img{display:block;width:80%;margin-left:auto;margin-right:auto}._ba_modal>.close{position:absolute;right:40px;top:30px;font-size:2em}._ba_banner>a>img{width:100%;height:auto}`;

function checkIfBannerModalPopup() {
    let account = getRandomItem(_ba.account);
    addStype();
    if(_ba.setting.banner) {
        createBanner(account);
    }

    if (_ba.setting.modal) {
        createModal(account);
    }


    if (_ba.setting.popup) {
        createPopup(account);
    }

};

function replacementTags(parentEl, oldEl, newEl) {
    parentEl.replaceChild(oldModalImg, newModalImg);
} 

function addStype(){
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
}

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    console.log(rect);
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}


function createPopup(account) {
    let isPopupOpen = true;
    let popupEl = document.querySelector('._ba_popup');
    document.addEventListener('scroll', () => {
        if (checkVisible(popupEl) && isPopupOpen) {
            console.log('god');
            isPopupOpen = false;
            openNewWindow(account.link);
        }

    });
}

function createBanner(account) {

    let bannerLink = document.createElement('a');
    let bannerImg = document.createElement('img');
    let bannerEl = document.querySelector('._ba_banner');

    bannerLink.href = account.link;
    bannerImg.src = account.banner;

    bannerLink.appendChild(bannerImg);
    bannerEl.appendChild(bannerLink);

}

function createModal(account) {

    let isModelVisible = true;
    let modal = document.querySelector('._ba_modal');


    document.addEventListener('scroll', () => {
        if (checkVisible(modal) && isModelVisible) {
            // alert('visible');
            modal.style.position = 'fixed';
            isModelVisible = false;
            let imgUrl = account.modal;

            let newModalImg = document.createElement('img');
            let closeElement = document.createElement('i');
            closeElement.classList.add('close');
            closeElement.innerHTML = '&times;'
            newModalImg.src = imgUrl;
            
            let oldModalImg = modal.querySelector('img');


            if (oldModalImg) {
                modal.replaceChild(oldModalImg, newModalImg);
                replacementTags(madal, ldModalImg, newModalImg);
            } else {
                modal.insertBefore(newModalImg, modal.firstChild);
                modal.appendChild(closeElement);
            }
            modal.addEventListener('click', (event) => {
                console.log(event.srcElement);
                if (event.srcElement.classList.contains('close')) {
                    modal.style.display = 'none'
                } else {
                    openNewWindow(account.link);
                }
            });
        };

    });


}

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function openNewWindow(url) {
    window.open(url, '_blank', "toolbar=yes,top=500,left=500,width=800,height=600");
}


checkIfBannerModalPopup();
