$(function(){
  Reveal.addEventListener('fragmentshown', function(event) {
    var f = $(event.fragment);
    if (f.data('toggle') == 'avatar') {
      if (f.data('target') == 1) {
        $('#bondy, #simonovits').css({'margin-bottom': '100px', opacity: 0}).animate({opacity: 1, height: '200px', width: '200px', 'margin': "0 10px"});
      } else if (f.data('target') == 2) {
        $('#bondy').css({transition: 'all 0.4s cubic-bezier(.02, .01, .47, 1)', "transform": 'translateY(-105px)', height: '95px', width: '95px', 'margin-left': '10px'});
        $('#simonovits').css({"transform": 'translateX(-115px)', transition: 'all 0.4s cubic-bezier(.02, .01, .47, 1)', height: '95px', width: '95px'});
        $('#verstraete').css({'margin-bottom': '100px', opacity: 0}).animate({opacity: 1, height: '200px', width: '200px', 'margin': "0 10px 0 -110px"});
      } else if (f.data('target') == 3) {
        $('#verstraete').css({"transform": 'translateY(-105px)', transition: 'all 0.4s cubic-bezier(.02, .01, .47, 1)', height: '95px', width: '95px'});
        $('#pikhurko').css({'margin-bottom': '100px', opacity: 0}).animate({opacity: 1, height: '200px', width: '200px', 'margin': "0 10px"});
      } else if (f.data('target') == 4) {
        $('#pikhurko').css({"transform": 'translateX(-115px)', transition: 'all 0.4s cubic-bezier(.02, .01, .47, 1)', height: '95px', width: '95px'});
        $('#bukh').css({'margin-bottom': '100px', opacity: 0}).animate({opacity: 1, height: '200px', width: '200px', 'margin': "0 10px 0 -105px"});
        $('#jiang').css({'margin-bottom': '100px', opacity: 0}).animate({opacity: 1, height: '200px', width: '200px', 'margin': "0 10px"});
      }
    }
    return true;
  });
});