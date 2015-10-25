// $('.container1').append("<img src='" + photos[0].pic2 + "'>");

$('.container7').html("<img src='" + photos.pics7[0] + "'>");
$('.container8').html("<img src='" + photos.pics7[1] + "'>");
$('.container9').html("<img src='" + photos.pics7[2] + "'>");
$('.container10').html("<img src='" + photos.pics7[3] + "'>");
$('.container11').html("<img src='" + photos.pics7[4] + "'>");
$('.container12').html("<img src='" + photos.pics7[5] + "'>");

$('.container7').on('click', function(event){
  event.preventDefault();
  $('.photo-boxes-container').toggleClass('hidden');
  $('.album-boxes-container').toggleClass('hidden');
  $('.side-button-container').toggleClass('hidden');
  $('.container1').html("<img src='" + photos.pics1[0] + "'>");
  $('.container2').html("<img src='" + photos.pics1[1] + "'>");
  $('.container3').html("<img src='" + photos.pics1[2] + "'>");
  $('.container4').html("<img src='" + photos.pics1[3] + "'>");
  $('.container5').html("<img src='" + photos.pics1[4] + "'>");
  $('.container6').html("<img src='" + photos.pics1[5] + "'>");
});

$('.container8').on('click', function(event){
  event.preventDefault();
  $('.photo-boxes-container').toggleClass('hidden');
  $('.album-boxes-container').toggleClass('hidden');
  $('.side-button-container').toggleClass('hidden');
  $('.container1').html("<img src='" + photos.pics2[0] + "'>");
  $('.container2').html("<img src='" + photos.pics2[1] + "'>");
  $('.container3').html("<img src='" + photos.pics2[2] + "'>");
  $('.container4').html("<img src='" + photos.pics2[3] + "'>");
  $('.container5').html("<img src='" + photos.pics2[4] + "'>");
  $('.container6').html("<img src='" + photos.pics2[5] + "'>");
});

$('.container9').on('click', function(event){
  event.preventDefault();
  $('.photo-boxes-container').toggleClass('hidden');
  $('.album-boxes-container').toggleClass('hidden');
  $('.side-button-container').toggleClass('hidden');
  $('.container1').html("<img src='" + photos.pics3[0] + "'>");
  $('.container2').html("<img src='" + photos.pics3[1] + "'>");
  $('.container3').html("<img src='" + photos.pics3[2] + "'>");
  $('.container4').html("<img src='" + photos.pics3[3] + "'>");
  $('.container5').html("<img src='" + photos.pics3[4] + "'>");
  $('.container6').html("<img src='" + photos.pics3[5] + "'>");
});

$('.container10').on('click', function(event){
  event.preventDefault();
  $('.photo-boxes-container').toggleClass('hidden');
  $('.album-boxes-container').toggleClass('hidden');
  $('.side-button-container').toggleClass('hidden');
  $('.container1').html("<img src='" + photos.pics4[0] + "'>");
  $('.container2').html("<img src='" + photos.pics4[1] + "'>");
  $('.container3').html("<img src='" + photos.pics4[2] + "'>");
  $('.container4').html("<img src='" + photos.pics4[3] + "'>");
  $('.container5').html("<img src='" + photos.pics4[4] + "'>");
  $('.container6').html("<img src='" + photos.pics4[5] + "'>");
  });

  $('.container11').on('click', function(event){
    event.preventDefault();
    $('.photo-boxes-container').toggleClass('hidden');
    $('.album-boxes-container').toggleClass('hidden');
    $('.side-button-container').toggleClass('hidden');
    $('.container1').html("<img src='" + photos.pics5[0] + "'>");
    $('.container2').html("<img src='" + photos.pics5[1] + "'>");
    $('.container3').html("<img src='" + photos.pics5[2] + "'>");
    $('.container4').html("<img src='" + photos.pics5[3] + "'>");
    $('.container5').html("<img src='" + photos.pics5[4] + "'>");
    $('.container6').html("<img src='" + photos.pics5[5] + "'>");
    });

    $('.container12').on('click', function(event){
      event.preventDefault();
      $('.photo-boxes-container').toggleClass('hidden');
      $('.album-boxes-container').toggleClass('hidden');
      $('.side-button-container').toggleClass('hidden');
      $('.container1').html("<img src='" + photos.pics6[0] + "'>");
      $('.container2').html("<img src='" + photos.pics6[1] + "'>");
      $('.container3').html("<img src='" + photos.pics6[2] + "'>");
      $('.container4').html("<img src='" + photos.pics6[3] + "'>");
      $('.container5').html("<img src='" + photos.pics6[4] + "'>");
      $('.container6').html("<img src='" + photos.pics6[5] + "'>");
    });


$('.album1').on('click', function(event){
  event.preventDefault();
  
  $('.photo-boxes-container').toggleClass('hidden');
  $('.container1').html("<img src='" + photos.pics1[0] + "'>");
  $('.container2').html("<img src='" + photos.pics1[1] + "'>");
  $('.container3').html("<img src='" + photos.pics1[2] + "'>");
  $('.container4').html("<img src='" + photos.pics1[3] + "'>");
  $('.container5').html("<img src='" + photos.pics1[4] + "'>");
  $('.container6').html("<img src='" + photos.pics1[5] + "'>");
});

$('.album2').on('click', function(event){
  event.preventDefault();
  $('.photo-boxes-container').toggleClass('hidden');
  $('.container1').html("<img src='" + photos.pics2[0] + "'>");
  $('.container2').html("<img src='" + photos.pics2[1] + "'>");
  $('.container3').html("<img src='" + photos.pics2[2] + "'>");
  $('.container4').html("<img src='" + photos.pics2[3] + "'>");
  $('.container5').html("<img src='" + photos.pics2[4] + "'>");
  $('.container6').html("<img src='" + photos.pics2[5] + "'>");
});

$('.album3').on('click', function(event){
  event.preventDefault();
  $('.photo-boxes-container').toggleClass('hidden');
  $('.container1').html("<img src='" + photos.pics3[0] + "'>");
  $('.container2').html("<img src='" + photos.pics3[1] + "'>");
  $('.container3').html("<img src='" + photos.pics3[2] + "'>");
  $('.container4').html("<img src='" + photos.pics3[3] + "'>");
  $('.container5').html("<img src='" + photos.pics3[4] + "'>");
  $('.container6').html("<img src='" + photos.pics3[5] + "'>");
});

$('.album4').on('click', function(event){
  event.preventDefault();
  $('.photo-boxes-container').toggleClass('hidden');
  $('.container1').html("<img src='" + photos.pics4[0] + "'>");
  $('.container2').html("<img src='" + photos.pics4[1] + "'>");
  $('.container3').html("<img src='" + photos.pics4[2] + "'>");
  $('.container4').html("<img src='" + photos.pics4[3] + "'>");
  $('.container5').html("<img src='" + photos.pics4[4] + "'>");
  $('.container6').html("<img src='" + photos.pics4[5] + "'>");
});

$('.album5').on('click', function(event){
  event.preventDefault();
  $('.photo-boxes-container').toggleClass('hidden');
  $('.container1').html("<img src='" + photos.pics5[0] + "'>");
  $('.container2').html("<img src='" + photos.pics5[1] + "'>");
  $('.container3').html("<img src='" + photos.pics5[2] + "'>");
  $('.container4').html("<img src='" + photos.pics5[3] + "'>");
  $('.container5').html("<img src='" + photos.pics5[4] + "'>");
  $('.container6').html("<img src='" + photos.pics5[5] + "'>");
});

$('.album6').on('click', function(event){
  event.preventDefault();
  $('.photo-boxes-container').toggleClass('hidden');
  $('.container1').html("<img src='" + photos.pics6[0] + "'>");
  $('.container2').html("<img src='" + photos.pics6[1] + "'>");
  $('.container3').html("<img src='" + photos.pics6[2] + "'>");
  $('.container4').html("<img src='" + photos.pics6[3] + "'>");
  $('.container5').html("<img src='" + photos.pics6[4] + "'>");
  $('.container6').html("<img src='" + photos.pics6[5] + "'>");
});
