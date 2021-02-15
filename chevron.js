$('.chev-container')
  .on('click', '.chev-space:not(.selected, .last)', chevSpaceClicked);

function chevSpaceClicked(e) {
  $('.chev-space.selected, .chevron.selected').removeClass('selected');
  $(this).addClass('selected');
  $(this).next().addClass('selected');
}
