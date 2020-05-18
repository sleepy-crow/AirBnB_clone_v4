

document.addEventListener('DOMContentLoaded', function (data, status) {
  let cache_id = document.getElementById('cache_id').value;
  let dic = {};

  // create the dic
  $('.amenities > h4')
  $('input[type="checkbox"]').click(function(){
    if($(this).is(":checked")){
      dic[$(this).data('id')] = $(this).data('name');
    }
    else if($(this).is(":not(:checked)")){
      delete dic[$(this).data('id')];
    }
  });

  // verify status of the api
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });

  // make the post
  $('button').click(function(){
   $.ajax({
     
   });
  

    // takes the dic from the api

    $.get('http://0.0.0.0:5001/api/v1/places_search/', function (data) {
      const places = data;
      let place;
      for (let index = 0; index < places.lenght; index++) {
        place = '<li>'+places[index]['name']+'</li>';
        $('article').append(place);
      }
    });
  });
});
