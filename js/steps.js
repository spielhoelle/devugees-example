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
  $.ajax("./stesps.html", {
    timeout: 4000,
    success: function(steps) {
      setTimeout(function() {
        toNextStep(steps);
        $.notify({
          message:"The steps now are loaded"
        },{
          type:'success',
          animate: {
              enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
               }
        });
      }, 3000);
    },
    error:function() {
      setTimeout(function(){
        $.notify({
          message:"Sorry we can't load the steps"
        },{
          type:'danger',
          animate: {
              enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
               }
        });

      },3000)


    }
  });

});
