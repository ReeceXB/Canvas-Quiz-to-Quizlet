function extractQuestions() {


  const questionContainers = document.querySelectorAll('.quiz_sortable.question_holder');

  if (questionContainers.length === 0) {
    console.error("No question containers found.");
    return;
  }

  let extractedData = '';

  questionContainers.forEach((questionContainer, index) => {
    const questionTextElement = questionContainer.querySelector('.question_text');
    if (!questionTextElement) {
      console.error(`Question text not found for question ${index + 1}`);
      return;
    }

    // Check if the question is marked as incorrect by examining the question header
    const questionHeader = questionContainer.querySelector('.header');
    if (!questionHeader) {
      console.error(`Question header not found for question ${index + 1}`);
      return;
    }

    const isIncorrect = questionHeader.querySelector('.answer_arrow.incorrect');

    if (isIncorrect) {
      return; // Skip this question
    }

    const questionText = questionTextElement.textContent.trim();

    let answer = '';

    const multipleChoiceAnswers = questionContainer.querySelectorAll('.select_answer.answer_type');
    if (multipleChoiceAnswers.length > 0) {
      multipleChoiceAnswers.forEach((choice) => {
        if (choice.querySelector('input').checked) {
          answer = choice.querySelector('.answer_text').textContent.trim();
        }
      });
    } else {
      const shortAnswer = questionContainer.querySelector('.answer.selected_answer.no_answer input');
      if (shortAnswer) {
        answer = shortAnswer.value;
      }
    }

    extractedData += questionText + '\t' + answer + '\n';
  });

  const blob = new Blob([extractedData], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = "Export" + '.txt';
  a.click();
}

extractQuestions();
