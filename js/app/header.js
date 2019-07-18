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
