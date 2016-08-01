Tabs = require('bluegg-tabs');
Modal = require('bluegg-modal');

console.log(Tabs)
// Get your Tab elements
var alltabs = document.querySelectorAll('.js-tabs');

// Init the tabs
[].forEach.call(alltabs, function(item, i) {
	new Tabs(alltabs[i]);
});

// find modals
var modals = document.querySelectorAll('.js-modal');

// init on each modal˜˜
[].forEach.call(modals, function(item, i) {
    new Modal(modals[i]);
});
