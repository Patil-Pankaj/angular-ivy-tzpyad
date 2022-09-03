$('.header-cell').click(function() {
  var isSortedAsc  = $(this).hasClass('sort-asc');
  var isSortedDesc = $(this).hasClass('sort-desc');
  var isUnsorted = !isSortedAsc && !isSortedDesc;
 
  $('.header-cell').removeClass('sort-asc sort-desc');
  
  if (isUnsorted || isSortedDesc) {
     $(this).addClass('sort-asc');
  } else if (isSortedAsc) {
    $(this).addClass('sort-desc');
  }
});