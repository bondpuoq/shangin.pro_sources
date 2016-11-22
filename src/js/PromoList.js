function PromoList() {
  var self, data, hbVar, $containerVar;
  self = this;
  self = {
    init: _init,
    render: _render
  }

  function _init(dataParam, listingTemplateMarkup) {
    data = dataParam;
    hbVar = hbVar || Handlebars.compile(listingTemplateMarkup);
  }

  function _render($promoListingContainer) {
    var result;
    result = new Object();
    result.data = data;
    $containerVar = $containerVar || $promoListingContainer;
    html = hbVar(result);
    $containerVar.html(html);
  }
  return self;
}