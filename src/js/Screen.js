function Scr() {
  var self = this;
  self = {
    renderScreens: _renderScreens
  };

  function _renderScreens() {
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
    $('.screen').css({minHeight: height, minWidth: width}); 
    $('.background').css({minHeight: "100%", minWidth: "100%"}); 
  }
  return self;
}