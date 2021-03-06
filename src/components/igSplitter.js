(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgSplitter", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgSplitter = React.createClass($.ig.react.core.buildComponent("igSplitter"));
	if (window) {
		window.IgSplitter = IgSplitter;
	}
	return IgSplitter;
}));

