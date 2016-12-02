function MainMenu() {
  var self, data, hbVar, $containerVar;
  self = this;
  self = {
    init: _init,
    render: _render,
    scrollTo: _scrollTo
  }

  function _init(dataParam, listingTemplateMarkup) {
    data = dataParam;
    hbVar = hbVar || Handlebars.compile(listingTemplateMarkup);
  }

  function _render($mainMenuContainer) {
    var result;
    result = new Object();
    result.data = data;
    $containerVar = $containerVar || $mainMenuContainer;
    html = hbVar(result);
    $containerVar.html(html);
    $containerVar.on('click', '.js-anchor', self.scrollTo);
  }

  function _scrollTo() {
    event.preventDefault();
    var whereScroll, scrollTarget;
    whereScroll = $(this).data('target');
    scrollTarget = document.getElementById(whereScroll);
    var destination = $(scrollTarget).offset().top;
    $('html,body').animate( { scrollTop: destination }, 1100 );
  }
  return self;
}