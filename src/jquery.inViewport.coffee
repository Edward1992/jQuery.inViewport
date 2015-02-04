### 
	inViewport jQuery plugin
	Copyright (c) 
	Dual licensed under the MIT (http://opensource.org/licenses/MIT)
	and GPL (http://opensource.org/licenses/GPL-2.0) licenses.
###

do ($ = jQuery)->
	getViewportHeight = ->
		client = window.document.documentElement.clientHeight
		inner = window.innerHeight

		if client < inner
			return inner
		else
			return client

	getScrollYOffset = ->
		return window.pageYOffset or window.document.documentElement.scrollTop

	getOffset = (element)->
		offsetTop = 0
		offsetLeft = 0

		loop
			unless isNaN(element.offsetTop)
				offsetTop += element.offsetTop

			unless isNaN(element.offsetLeft)
				offsetLeft += element.offsetLeft

			break unless element = element.offsetParent

		return {
			top: offsetTop
			left: offsetLeft
		}


	$.fn.inViewport = (factor)->
		# jquery method inViewport is supposed to be called returning a boolean for the first matched element
		element = @get(0)
		elementHeight = element.offsetHeight
		scrolledYOffset = getScrollYOffset()
		viewedOffset = scrolledYOffset + getViewportHeight()
		elementTopOffset = getOffsets(element).top
		elementBottomOffset = elementTopOffset + elementHeight
		factor = factor or 0

		firstClause = (elementTopOffset + elementHeight * factor) <= viewedOffset
		secondClause = elementBottomOffset >= scrolledYOffset

		return firstClause and secondClause

