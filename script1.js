function countWords(text) {
    if (text.trim() === '') {
        return 0;
    }
    const words = text.trim().split(/\s+/);
    return words.length;
}
function updateWordCount() {
    const text = document.getElementById("textInput").value;
    const wordCount = countWords(text);
    document.getElementById("wordCountResult").textContent = "Word Count: " + wordCount;
}

document.getElementById("textInput").addEventListener("input", updateWordCount);