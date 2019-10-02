//jshint esversion:6
function get_request() {
  $('.myPic').each(function() {
    var images = ['Gimg1.jpg', 'Gimg2.jpg', 'Gimg3.jpg', 'Gimg4.jpg', 'Gimg5.jpg', 'Gimg6.jpg', 'Gimg7.jpg',
    'Gimg8.jpg', 'Gimg9.jpg', 'Gimg10.jpg', 'Gimg11.jpg', 'Gim12.jpg', 'Gi13g5.jpg', 'Gimg14.jpg'];
    img = $(this);
    var num= (Math.floor(Math.random() * images.length + 1 ));

  img.attr('src', 'Gallery/Gimg' + num + '.jpg');
   img.attr('alt', 'src: ' + img.attr('src'));
  });
  setTimeout(get_request, 30000);

}
get_request();
// C:\Users\USER\Desktop\WEBDEVELOPMENT\1InspireMe\RandomPhotoBox\Gallery\Gimg1.jpg //
