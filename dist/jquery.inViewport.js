// Generated by CoffeeScript 1.8.0

/* 
	inViewport jQuery plugin
	Copyright (c) 
	Dual licensed under the MIT (http://opensource.org/licenses/MIT)
	and GPL (http://opensource.org/licenses/GPL-2.0) licenses.
 */
(function($) {
  var getOffset, getScrollYOffset, getViewportHeight;
  getViewportHeight = function() {
    var client, inner;
    client = window.document.documentElement.clientHeight;
    inner = window.innerHeight;
    if (client < inner) {
      return inner;
    } else {
      return client;
    }
  };
  getScrollYOffset = function() {
    return window.pageYOffset || window.document.documentElement.scrollTop;
  };
  getOffset = function(element) {
    var offsetLeft, offsetTop;
    offsetTop = 0;
    offsetLeft = 0;
    while (true) {
      if (!isNaN(element.offsetTop)) {
        offsetTop += element.offsetTop;
      }
      if (!isNaN(element.offsetLeft)) {
        offsetLeft += element.offsetLeft;
      }
      if (!(element = element.offsetParent)) {
        break;
      }
    }
    return {
      top: offsetTop,
      left: offsetLeft
    };
  };
  return $.fn.inViewport = function(factor) {
    var element, elementBottomOffset, elementHeight, elementTopOffset, firstClause, scrolledYOffset, secondClause, viewedOffset;
    element = this.get(0);
    elementHeight = element.offsetHeight;
    scrolledYOffset = getScrollYOffset();
    viewedOffset = scrolledYOffset + getViewportHeight();
    elementTopOffset = getOffsets(element).top;
    elementBottomOffset = elementTopOffset + elementHeight;
    factor = factor || 0;
    firstClause = (elementTopOffset + elementHeight * factor) <= viewedOffset;
    secondClause = elementBottomOffset >= scrolledYOffset;
    return firstClause && secondClause;
  };
})(jQuery);