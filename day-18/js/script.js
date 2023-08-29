const paragraph = document.getElementById("colored-paragraph");
const originalText = paragraph.textContent;
let currentIndex = 0;

function getNextWord(startIndex) {
  const spaceIndex = originalText.indexOf(" ", startIndex);
  if (spaceIndex === -1) {
    return originalText.slice(startIndex);
  }
  return originalText.slice(startIndex, spaceIndex);
}

function colorWords() {
  const currentWord = getNextWord(currentIndex);
  const currentWordStart = originalText.indexOf(currentWord, currentIndex);
  const currentWordEnd = currentWordStart + currentWord.length;

  const coloredText = originalText.substring(0, currentWordStart) +
    `<span style="color: red;">${currentWord}</span>` +
    originalText.substring(currentWordEnd);

  paragraph.innerHTML = coloredText;

  currentIndex = (currentWordEnd + 1) % (originalText.length + 1);
}

setInterval(colorWords, 500);