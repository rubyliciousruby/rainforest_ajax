$(document).on('ready page:load', function() {
  $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();

//using $.ajax() method  
	// $.ajax({
 //      	url: '/products?search=' + searchValue,
 //      	type: 'GET',
 //      	dataType: 'html'
 //    	}).done(function(data){
 //      $('#products').html(data);
 //  	  });

//using $.get() shorthand
    // $.get('/products?search=' + searchValue)
    //   .done(function(data){
    //     console.log(data);
    //     $('#products').html(data);
    //   });
 	$.getScript('/products?search=' + searchValue);
  //     .done(function(data){
  //       console.log(data);
  //       $('#products').html(data);
  //     });

	});

   $(window).scroll(function() {
     if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
       // return alert('near bottom');
       // console.log($('.pagination span.next').children().attr('href'));
       // $.getScript($('.pagination span.next').children().attr('href'));
      
      var url = $('.pagination span.next').children().attr('href');
      if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
        $('.pagination').text("Fetching more products...");
        return $.getScript(url);
     }
   });
});