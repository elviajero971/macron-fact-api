$(document).ready(function(){
	$('#nav-icon').click(function(){
    $(this).toggleClass('open');
    if($('#nav-icon').hasClass('open')){
      $('#toggle-header').addClass('active');
    }else{
      $('#toggle-header').removeClass('active');
    }
  });
  
});