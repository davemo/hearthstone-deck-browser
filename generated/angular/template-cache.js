angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("admin.html",
    "<div id=\"admin\" class=\"row\">\n" +
    "  <ng-include src=\"'nav.html'\"></ng-include>\n" +
    "  <div class=\"large-12 column artwork-frame\">\n" +
    "    The Admin Area will go here.\n" +
    "  </div>\n" +
    "</div>\n"
  );

  $templateCache.put("cards.html",
    "<div id=\"cards\" class=\"row\">\n" +
    "  <ng-include src=\"'nav.html'\" ng-class=\"{blurred: isDetailState()}\"></ng-include>\n" +
    "  <div class=\"large-12 column\" ng-class=\"{blurred: isDetailState()}\">\n" +
    "    <div id=\"card-filter\">\n" +
    "      <ul>\n" +
    "        <li class=\"{{hero.value}}\"\n" +
    "            ng-repeat=\"hero in heroFilters\"\n" +
    "            ng-class=\"{current:currentHeroFilter === hero.value}\">\n" +
    "          <a href=\"\" ng-click=\"setHeroFilter(hero.value)\"></a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"large-12 column\" style=\"z-index: 1;\" ng-class=\"{blurred: isDetailState()}\">\n" +
    "    <div class=\"prev-page\" ng-click=\"prevPage()\" ng-show=\"canGoPrev()\"></div>\n" +
    "    <div class=\"hero-filter {{currentHeroFilter}}\">\n" +
    "      <span>{{currentHeroFilter | capitalize}}</span>\n" +
    "    </div>\n" +
    "    <div id=\"card-book\">\n" +
    "      <div ng-repeat=\"card in cards | filter:searchQuery\" ng-click=\"detailViewFor(card)\" class=\"card\">\n" +
    "        <img ng-src=\"{{card.image_url}}\" alt=\"{{card.name}}\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"page-num\">\n" +
    "      <span>Page {{currentPage + 1}}</span>\n" +
    "    </div>\n" +
    "    <div class=\"next-page\" ng-click=\"nextPage()\" ng-show=\"canGoNext()\"></div>\n" +
    "  </div>\n" +
    "  <div class=\"large-12 column\" ng-class=\"{blurred: isDetailState()}\">\n" +
    "    <div id=\"card-book-mana-filter\">\n" +
    "      <ul>\n" +
    "        <li class=\"{{mana.value}}\"\n" +
    "            ng-class=\"{current:currentManaFilter === mana.value}\"\n" +
    "            ng-repeat=\"mana in manaFilters\">\n" +
    "          <a href=\"\" ng-click=\"setManaFilter(mana.value)\">{{mana.label}}</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ui-view></div>\n" +
    "</div>\n"
  );

  $templateCache.put("decks.html",
    "<div id=\"my-decks\" class=\"row\">\n" +
    "  <ng-include src=\"'nav.html'\"></ng-include>\n" +
    "  <div class=\"large-12 column artwork-frame\">\n" +
    "    A deck builder!\n" +
    "  </div>\n" +
    "</div>\n"
  );

  $templateCache.put("detail.html",
    "<div class=\"detail-view\"\n" +
    "     ng-show=\"isDetailState()\"\n" +
    "     ng-click=\"hide()\">\n" +
    "        <img ng-src=\"{{card.image_url}}\" />\n" +
    "        <div class=\"card-back\"></div>\n" +
    "</div>\n"
  );

  $templateCache.put("flash.html",
    "<div class=\"row\">\n" +
    "  <div class=\"large-6 large-offset-3 column\">\n" +
    "    <div id=\"flash\" class=\"alert-box alert\" ng-show=\"flash\">\n" +
    "      {{ flash }}\n" +
    "    </div>\n" +
    "    <div id=\"error\" class=\"alert-box alert\" ng-show=\"error\">\n" +
    "      {{ error.message}}\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );

  $templateCache.put("login.html",
    "<div id=\"login\" class=\"row\">\n" +
    "  <div class=\"large-6 large-offset-3\">\n" +
    "    <form ng-submit=\"login()\">\n" +
    "      <fieldset class=\"radius\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"large-6 columns\">\n" +
    "            <input type=\"text\" name=\"username\" placeholder=\"username\"\n" +
    "            ng-model=\"credentials.username\" required/>\n" +
    "          </div>\n" +
    "            <div class=\"large-6 columns\">\n" +
    "            <input type=\"password\" name=\"password\" placeholder=\"password\"\n" +
    "            ng-model=\"credentials.password\" required/>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"large-12 columns\">\n" +
    "            <button type=\"submit\" class=\"button large expand radius\">Log In</button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </fieldset>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>\n"
  );

  $templateCache.put("nav.html",
    "<div class=\"column large-12 text-center\">\n" +
    "  <img src=\"/img/logo-small.png\" height=\"178\" width=\"435\" alt=\"\">\n" +
    "  <nav class=\"card-builder-nav\" role=\"navigation\">\n" +
    "    <ul>\n" +
    "      <li ui-sref-active=\"active\">\n" +
    "        <a ui-sref=\"cards\">Cards</a>\n" +
    "      </li>\n" +
    "      <li ui-sref-active=\"active\">\n" +
    "        <a ui-sref=\"decks\">My Decks</a>\n" +
    "      </li>\n" +
    "      <li ui-sref-active=\"active\">\n" +
    "        <a ui-sref=\"admin\">Admin</a>\n" +
    "      </li>\n" +
    "      <li id=\"search-input\">\n" +
    "        <div class=\"search-bar\">\n" +
    "          <input type=\"text\" id=\"search-field\" ng-model=\"searchQuery\" ng-change=\"searchQueryChanged(searchQuery)\" placeholder=\"Search...\" />\n" +
    "        </div>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </nav>\n" +
    "</div>\n"
  );

}]);
