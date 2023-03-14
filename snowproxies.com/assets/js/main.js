    //change all timers to 500
    AOS.init({
        duration: 600,
    });

    $(document).ready(function() {
        $('.products-container').hide();
        started = false;
        $('.filter-button').click(function() {
            if (started) {
                return;
            }
            started = true;

            let target = $(this).attr('data-target');
            console.log(target);
            $('.filter-button').removeClass('active');
            $(this).addClass('active');

            //slowly hide the products-container and then show the target
            $('.products-container').fadeOut(300);
            setTimeout(function() {
                $(target).fadeIn(100, function() {
                    started = false;
                });

            }, 300);


        });

        //click on the first button
        $('.filter-button').first().click();


        $('.faq-card').click(function() {

            $('.faq-card-header-right').slideUp(300);
            let target = $(this).attr('data-target');
            //wait for the animation to finish

            $(target).slideDown(300);

        });

        $('.close-btn').click(function() {
            $(this).parent().slideUp(300);
        });
    });