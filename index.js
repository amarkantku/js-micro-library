var myPlugin = (function () {
	'use strict';

	// Create the methods object
	var methods = {};

	// helper methods to the library

    /**
     * Get an element in the DOM
     * @param  {String} selector The selector to match against
     * @param  {Node} scope      An element to search within [optional]
     * @return {Node}            The first matching element
     */
    methods.get = function (selector, scope) {
        if (!selector) throw new Error('Please provide a selector.');
        return scope ? scope.querySelector(selector) : document.querySelector(selector);
    };


	methods.getAll = function () {
		console.log('getAll');
	};

	methods.on = function () {
		console.log('on');
	};

	// Expose the public methods
	return methods;
})();
