function redactText() {
  const originalText = document.getElementById("originalText").value;
  const wordsToRedact = document
    .getElementById("wordsToRedact")
    .value.split(" ");
  const replacementText =
    document.getElementById("replacementText").value || "****";

  const redactedText = originalText
    .split(" ")
    .map((word) => {
      if (wordsToRedact.includes(word.toLowerCase())) {
        return replacementText;
      }
      return word;
    })
    .join(" ");

  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = `<p>Redacted Text:</p><pre>${redactedText}</pre>`;
}
