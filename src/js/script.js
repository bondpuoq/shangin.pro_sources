(function() {
  var promoList, mainData, listingTemplateMarkup, $promoListingContainer, data;
  data = new Data();
  mainData = mainData || data.mainData;
  listingTemplateMarkup = listingTemplateMarkup || $('#promo-listing-template').html();
  $promoListingContainer = $promoListingContainer || $('#promo-listing-container');
  promoList = promoList || new PromoList();
  promoList.init(mainData, listingTemplateMarkup);
  promoList.render($promoListingContainer);
})();