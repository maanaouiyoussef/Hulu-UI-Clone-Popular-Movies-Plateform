tabs = document.querySelectorAll('.tab');
tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {

        contentId = this.dataset.contentId;
        content = document.getElementById(contentId);

        clearOutput();

        this.classList.add('active');
        content.classList.add('active');
    });
});

function clearOutput() {
    tabContents.forEach(function (content) {
        content.classList.remove('active');
    });

    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });
}