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

	// Use a single function, but make sure to add comments where
	// you would otherwise have called a helper function.
	methods.randArrayInRange = (len, a, b) => {
		const array = new Array(len);
		for (let i = 0; i < len; ++i) {
			// Generate random number at least 0, less than 1
			const randfloat = Math.random();
			// Move randfloat into [a, b) range
			array[i] = a + Math.floor(randfloat * (b - a));
		}
		return array;
	}

	// Expose the public methods
	return methods;
})();
