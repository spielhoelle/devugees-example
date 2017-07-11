$(document).ready(function() {

  function toNextStep(steps) {
    console.log(steps);
    $('.steps').html(steps);

    var width = 0;
    var button = $('.step button');
    var progressBar = $('.progress-bar');
    $('.steps').on('click', 'button', function() {
      var nextStep = $(this).closest('.step').next('.step');
      nextStep.fadeIn('slow');
      nextStep.removeClass('hidden');
      $(this).fadeOut('slow', function() {
        $(this).remove();
      });
      if (width < 100) {
        width += 25;
        progressBar.css('width', width + '%');
        progressBar.text(width + '%')
      }
    });
  }
  $.ajax("./steps.html", {
    timeout: 3000,
    success: function(steps) {
      setTimeout(function() {
        toNextStep(steps);
      }, 2000);
    },
    beforeSend: function() {
      $(".alert").load("alert.html");
    },
    complete: function() {
      setTimeout(function() {
        $('.alert').html('<strong>info</strong>' + ' steps are now loaded!!').addClass('alert-success');

      }, 2000)
    }
  });

});
