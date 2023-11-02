// Through the options literal, the behaviour of the editor can be easily customized.
// Here are a few examples of config options that can be passed to the editor.
// You can also call editor.updateOptions at any time to change the options.

var editor = monaco.editor.create(document.getElementById("container"), {
	value: "// First line\nfunction hello() {\n\tborder: solid 1px red;\n}\n// Last line",
	language: "css",

	lineNumbers: "off",
	roundedSelection: false,
	scrollBeyondLastLine: false,
	readOnly: false,
	theme: "vs-dark",
});
setTimeout(function () {
	editor.updateOptions({
		lineNumbers: "on",
	});
}, 2000);
