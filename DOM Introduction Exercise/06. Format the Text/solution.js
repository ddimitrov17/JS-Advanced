function solve() {
  const textAreaReference = document.getElementById('input');
  const outputDivReference = document.getElementById('output');
  let wholeText = textAreaReference.value;
  let sentences = wholeText.split(`.`).filter(x => x.length > 0);
  sentences = sentences.map(x => x += `.`);
  let sentencesCounter = 0;
  let currentParagraph = document.createElement('p');
  outputDivReference.appendChild(currentParagraph);
  for (i = 0; i < sentences.length; i++) {
    if (sentencesCounter == 3) {
      currentParagraph = document.createElement('p');
      outputDivReference.appendChild(currentParagraph);
      sentencesCounter=0;
    }
    currentParagraph.textContent += sentences[i];
    sentencesCounter++;
  }
}