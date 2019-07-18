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
