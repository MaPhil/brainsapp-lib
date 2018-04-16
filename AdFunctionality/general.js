
function checkIfBannerModalPopup() {
    let account = getRandomItem(_ba.account);
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
            newModalImg.src = imgUrl;

            let oldModalImg = modal.querySelector('img');

            let closeBtn = document.querySelector('._ba_modal > .close');

            if (oldModalImg) {
                modal.replaceChild(oldModalImg, newModalImg);
                replacementTags(madal, ldModalImg, newModalImg);
            } else {
                modal.insertBefore(newModalImg, modal.firstChild);
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
