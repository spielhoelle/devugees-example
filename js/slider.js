/*  $('#slider_partial').load("slider_partial.html", function () {}*/
function slider(response) {
    $('#slider_partial').html(response);
    console.log(response);
    var index = 0;
    console.log("vgwegfe");
    $('.thumbnail').on('click', function () {
        index = $(this).closest('img').index();
        var images = $('.row').find('img');
        var img = images.eq(index);

        function image() {
            images.removeClass('active');
            $(this).addClass('active');
            $(this).removeClass('animation');
        }
        $(img).addClass('animation').hide().fadeIn(500, image);
    });

    setInterval(function () {
        if (index == 4) {
            index = 0;
        } else {
            index++;
        }

        var images = $('.row').find('img');
        var img = images.eq(index);

        function image() {
            images.removeClass('active');
            $(this).addClass('active');
            $(this).removeClass('animation');
        }
        $(img).addClass('animation').hide().fadeIn(500, image)

    }, 5000);

}


$(document).ready(function () {

    $.ajax("slider_partial.html", {
        method: 'GET',
        success: function (response) {
            setTimeout(function () {
                slider(response);
            }, 2000);
        },
        error: function () {
            $('#slider_partial').find('.alert').html('<p>There was a problem fetching the latest photos.Please try again.</p >');
        },
        timeout: 1000,

        beforeSend: function () {
            var alert = $('<div/>', { 'class': 'alert' });
            alert.html('<img id="image"  src="https://media.tenor.com/images/06225ed328372469339e65677a473f7f/tenor.gif"></img>');
            $('#slider_partial').append(alert);
        },
        complete: function () {

        }
    });
});



