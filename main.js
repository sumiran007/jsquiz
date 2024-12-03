function checkAnswers() {
    const form = document.getElementById('quiz-form');
    const result = document.getElementById('result');
    let score = 0;

    const answers = {
        q1: 'b',
        q2: 'a'
    };

    const formData = new FormData(form);
    for (let [question, answer] of formData.entries()) {
        if (answer === answers[question]) {
            score = score + 1; 
        }
    }

    result.textContent = `You scored ${score} out of ${Object.keys(answers).length}`;
}