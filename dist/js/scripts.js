(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
             requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    /* init - you can init any event */
    throttle("resize", "optimizedResize");
})();


!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):e.MicroModal=o()}(this,function(){"use strict"
var e=function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")},o=function(){function e(e,o){for(var t=0;t<o.length;t++){var i=o[t]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(o,t,i){return t&&e(o.prototype,t),i&&e(o,i),o}}(),t=function(e){if(Array.isArray(e)){for(var o=0,t=Array(e.length);o<e.length;o++)t[o]=e[o]
return t}return Array.from(e)}
return function(){var i=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],n=function(){function n(o){var i=o.targetModal,a=o.triggers,r=void 0===a?[]:a,s=o.onShow,l=void 0===s?function(){}:s,c=o.onClose,d=void 0===c?function(){}:c,u=o.openTrigger,f=void 0===u?"data-micromodal-trigger":u,h=o.closeTrigger,v=void 0===h?"data-micromodal-close":h,g=o.disableScroll,m=void 0!==g&&g,b=o.disableFocus,y=void 0!==b&&b,w=o.awaitCloseAnimation,k=void 0!==w&&w,p=o.debugMode,E=void 0!==p&&p
e(this,n),this.modal=document.getElementById(i),this.config={debugMode:E,disableScroll:m,openTrigger:f,closeTrigger:v,onShow:l,onClose:d,awaitCloseAnimation:k,disableFocus:y},r.length>0&&this.registerTriggers.apply(this,t(r)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}return o(n,[{key:"registerTriggers",value:function(){for(var e=this,o=arguments.length,t=Array(o),i=0;i<o;i++)t[i]=arguments[i]
t.filter(Boolean).forEach(function(o){o.addEventListener("click",function(){return e.showModal()})})}},{key:"showModal",value:function(){this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add("is-open"),this.setFocusToFirstNode(),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.onShow(this.modal)}},{key:"closeModal",value:function(){var e=this.modal
this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus(),this.config.onClose(this.modal),this.config.awaitCloseAnimation?this.modal.addEventListener("animationend",function o(){e.classList.remove("is-open"),e.removeEventListener("animationend",o,!1)},!1):e.classList.remove("is-open")}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var o=document.querySelector("body")
switch(e){case"enable":Object.assign(o.style,{overflow:"",height:""})
break
case"disable":Object.assign(o.style,{overflow:"hidden",height:"100vh"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){e.target.hasAttribute(this.config.closeTrigger)&&(this.closeModal(),e.preventDefault())}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.maintainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(i)
return Array.apply(void 0,t(e))}},{key:"setFocusToFirstNode",value:function(){if(!this.config.disableFocus){var e=this.getFocusableNodes()
e.length&&e[0].focus()}}},{key:"maintainFocus",value:function(e){var o=this.getFocusableNodes()
if(this.modal.contains(document.activeElement)){var t=o.indexOf(document.activeElement)
e.shiftKey&&0===t&&(o[o.length-1].focus(),e.preventDefault()),e.shiftKey||t!==o.length-1||(o[0].focus(),e.preventDefault())}else o[0].focus()}}]),n}(),a=null,r=function(e,o){var t=[]
return e.forEach(function(e){var i=e.attributes[o].value
void 0===t[i]&&(t[i]=[]),t[i].push(e)}),t},s=function(e){if(!document.getElementById(e))return console.warn("MicroModal v0.3.2: ❗Seems like you have missed %c'"+e+"'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'+e+'"></div>'),!1},l=function(e){if(e.length<=0)return console.warn("MicroModal v0.3.2: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'),!1},c=function(e,o){if(l(e),!o)return!0
for(var t in o)s(t)
return!0}
return{init:function(e){var o=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),i=[].concat(t(document.querySelectorAll("["+o.openTrigger+"]"))),a=r(i,o.openTrigger)
if(!0!==o.debugMode||!1!==c(i,a))for(var s in a){var l=a[s]
o.targetModal=s,o.triggers=[].concat(t(l)),new n(o)}},show:function(e,o){var t=o||{}
t.targetModal=e,!0===t.debugMode&&!1===s(e)||(a=new n(t),a.showModal())},close:function(e){e?a.closeModalById(e):a.closeModal()}}}()})

function findVideos() {
	let videos = document.querySelectorAll('.video');

	for (let i = 0; i < videos.length; i++) {
		setupVideo(videos[i]);
	}
}

function setupVideo(video) {
	let link = video.querySelector('.video__link');
	let id = youTubeGetID(link.href);

	video.addEventListener('click', (e) => {
		e.preventDefault();
		let iframe = createIframe(id);
        let videoModal = document.querySelector('#video-modal .video-holder');

		videoModal.appendChild(iframe);
	});

	video.classList.add('video_enabled');
}

function youTubeGetID(url) {
    let ID = '';
    url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (url[2] !== undefined) {
        ID = url[2].split(/[^0-9a-z_\-]/i);
        ID = ID[0];
    } else {
        ID = url;
    }
    return ID;
}

function createIframe(id) {
	let iframe = document.createElement('iframe');

	iframe.setAttribute('allowfullscreen', '');
	iframe.setAttribute('allow', 'autoplay');
	iframe.setAttribute('src', generateURL(id));
	iframe.classList.add('video__media');

	return iframe;
}

function generateURL(id) {
	let query = '?rel=0&showinfo=0&autoplay=1';

	return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();

MicroModal.init({
	onClose: modal => document.querySelector('#video-modal .video-holder').innerHTML = '',
	openTrigger: 'data-modal',
	closeTrigger: 'data-modal-close'
});

function calcModalSize() {
	let videoModal = document.querySelector('#video-modal .video-holder');
	let videoModalWidth = videoModal.dataset.width;
	let videoModalHeight = videoModal.dataset.height;

	if (videoModalWidth) {
		videoModal.parentElement.style.maxWidth = videoModalWidth + 'px';
	}
	if (videoModalWidth && videoModalHeight) {
		videoRatio = videoModalHeight * 100 / videoModalWidth;
		videoModal.style.paddingBottom = videoRatio + '%';
	}
}

calcModalSize();

function articlesToggler() {
    let articlesButtons = document.querySelectorAll('.articles__button');

    articlesButtons.forEach(button => {
        let articlesList = button.parentElement.querySelector('.articles__list');
        button.addEventListener('click', function() {
            button.classList.toggle('articles__button_active');
            articlesList.classList.toggle('articles__list_active');
        });
    });
}

articlesToggler();

function headerPadding() {
    let header = document.querySelector('.navbar');
    let main = document.querySelector('.main');

    main.style.paddingTop = headerHeight(header) + 'px';

    window.addEventListener("optimizedResize", function() {
        main.style.paddingTop = headerHeight(header) + 'px';
    });
}

function headerHeight(header) {
    return header.clientHeight;
}

headerPadding();

