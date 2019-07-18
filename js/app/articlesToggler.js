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
