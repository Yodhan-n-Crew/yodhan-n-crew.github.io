const htmlCode = document.getElementById('html-code');
const previewWindow = document.getElementById('html-view').contentWindow.document;

function updatePreview() {
    // Open the iframe document context
    previewWindow.open();
    // Write the raw HTML from the textarea into the iframe
    previewWindow.write(htmlCode.value);
    // Close the document stream
    previewWindow.close();
}

// Run the function every time the user types a character
htmlCode.addEventListener('keyup', updatePreview);

// Optional: Set some default starting HTML code
htmlCode.value = "<h1>Hello World!</h1>\n<p>Start typing your HTML code here to see it live.</p>";
updatePreview();
