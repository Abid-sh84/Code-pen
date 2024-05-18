document.getElementById('run-button').addEventListener('click', function() {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = document.getElementById('css-code').value;
    const jsCode = document.getElementById('js-code').value;
    
    const previewFrame = document.getElementById('preview');
    const preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
    
    preview.open();
    preview.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>
                ${jsCode}
            <\/script>
        </body>
        </html>
    `);
    preview.close();
});
