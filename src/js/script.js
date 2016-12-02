(function() {
  var promoList, mainMenu, mainData, listingTemplateMarkup, $promoListingContainer, data, scr,
  menuTemplateMarkup, $mainMenuContainer;
  data = new Data();

  mainData = mainData || data.mainData;
  listingTemplateMarkup = listingTemplateMarkup || $('#promo-listing-template').html();
  $promoListingContainer = $promoListingContainer || $('#promo-listing-container');

  mainMenuMarkup = menuTemplateMarkup || $('#main-menu-template').html();
  $mainMenuContainer = $mainMenuContainer || $('#main-menu-container');

  mainMenu = mainMenu || new MainMenu();
  mainMenu.init(mainData, mainMenuMarkup);
  mainMenu.render($mainMenuContainer);

  promoList = promoList || new PromoList();
  promoList.init(mainData, listingTemplateMarkup);
  promoList.render($promoListingContainer);
  $(window).on('scroll', showScrollTop);
  $('#scrollTop').on('click', scrollUp);
  $('#send_mail').on('click', sendEmail);

  function sendEmail() {
    var feedback = new Feedback();
    feedback.send();
    console.log('check email');
  }

  function showScrollTop() {
    if ($(this).scrollTop() > 100) {
      $('#scrollTop').fadeIn();
    } else {
      $('#scrollTop').fadeOut();
    }
  }

  function scrollUp() {
    window.scrollTo(0,0);
  }
})();