$(document).ready(function () {
    if ($(window).width() <= 788 && $(window).height() >= 642) {
        $('.hs').on('click', function () {
            let search = $('.search');
            let toph = $('.toph');

            if (search.css('display') === 'block') {
                // Revert to normal
                search.css({
                    'display': '',
                    'position': '',
                    'top': '',
                    'left': '',
                    'width': '',
                    'z-index': ''
                });
                toph.css('position', '');
            } else {
                // Apply changes
                search.css({
                    'display': 'block',
                    'position': 'absolute',
                    'top': '0',
                    'left': '0',
                    'width': '100%',
                    'z-index': '9999'
                });
                toph.css('position', 'relative');
            }
        });
    }
});
