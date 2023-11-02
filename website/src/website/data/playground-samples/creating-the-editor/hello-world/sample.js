const value = /* set from `myEditor.getModel()`: */ `{
	border: solid 1px red;
}`;

// Hover on each property to see its docs!
const myEditor = monaco.editor.create(document.getElementById("container"), {
	value,
	language: "css",
	automaticLayout: true,
});
