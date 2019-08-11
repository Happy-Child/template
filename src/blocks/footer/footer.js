// -- Helpers BEGIN
const documentReady = require("%helpers%/document-ready.js");
const windowLoad = require("%helpers%/window-load.js");
const breakpoints = require("%helpers%/breakpoints.js");
const isDesktop = require("%helpers%/is-desktop.js");
const isIE = require("%helpers%/is-ie.js");
const isEdge = require("%helpers%/is-edge.js");
const cleanFieldsForms = require("%helpers%/clean-fields-forms.js");
const inputFilter = require("%helpers%/input-filter.js");
// -- Helpers END


// -- Libraries BEGIN
// -- Libraries END


documentReady(function() {
	const ex = $(".footer");

	// -- Functions BEGIN
	const fn = () => {
		console.log("footer");
	};
	// -- Functions END


	if (ex.length) fn();
});
