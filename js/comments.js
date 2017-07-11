$(document).ready(function () {

  $('#comments_submit_btn_js').click(function () {
    $.ajax('comment_partial.html', {
      method: 'GET',
      success: function (response) {
        console.log(response);
        var comment = response;
        var template = $(response).find('#comment_text').html($('#Text_area_input').val())
        $('#comment_container').before(template.parent().parent());
        $("#Text_area_input").val("");
      }
    });

  });

});
