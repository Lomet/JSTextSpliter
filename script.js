let chunks = [];

function handleFileSelect(evt) {
    const file = evt.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const text = e.target.result;
        const words = text.split(' ');
        const chunkSizeInput = document.getElementById('chunkSize');
        const chunkSize = parseInt(chunkSizeInput.value) || 2000;

        chunkSizeInput.disabled = true; // disable the chunkSize input after file is loaded

        while (words.length > 0) {
            chunks.push(words.splice(0, chunkSize).join(' '));
        }
    }

    reader.readAsText(file);
}

function getNextChunk() {
    if (chunks.length === 0) {
        alert('No more chunks!');
        return;
    }

    const chunk = chunks.shift();
    const prefix = document.getElementById('prefix').value;
    const suffix = document.getElementById('suffix').value;
    const textArea = document.getElementById('chunkArea');
    textArea.value = prefix + chunk + suffix;
    textArea.select();
    document.execCommand('copy');
}
