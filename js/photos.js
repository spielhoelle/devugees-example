$(document).ready(function () {
  $('#ajax_button').on('click',function() {
    var button = $(this);
    $.getJSON ("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",{
      tags: 'pancakes',
      tagmode:'any',
      format :'json'
    })
    .done(function(response) {
      for (var i = 0 ; i < 12;i++) {
        var photo = '<div class ="col-md-3 img-row"><img src ='+response.items[i].media.m+' class="img-thumbnail flicker-img" /> </div>' ;
      $('#morePhotos').append(photo);
      }
    });
  });
});
