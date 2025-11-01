
$(document).ready(function() {
    $('#currentYear').text(new Date().getFullYear());
});


$(document).ready(function() {
    if ($('#scoreboard .list-group-item').length) {
        $('#scoreboard .list-group-item').on('click', function() {
            const $details = $(this).find('.score-details');

            $details.slideToggle(300);
        });
    }
});
