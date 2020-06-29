
$( document ).ready(function() {

    AOS.init({
        duration: 1000,
        disable: 'mobile'
    })

        // show and hide shopping-list

    $('#basket-btn').click(function() {
        $(".drawer-wrapper").addClass('show');
        $("#transform").addClass('transform');
    });

    $('.drawer-close-icon').click(function() {
        $(".drawer-wrapper").removeClass('show');
        $("#transform").removeClass('transform');
    });

    $('.drawer-cover').click(function() {
        $(".drawer-wrapper").removeClass('show');
        $("#transform").removeClass('transform');
    });

    //ripple-effect

    setTimeout(function(){
        $('.bg-main-image').ripples({
            resolution: 256,
            dropRadius: 20,
            perturbance: 0.06,
        });
    }, 1000);

});
