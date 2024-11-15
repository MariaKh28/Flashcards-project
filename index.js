const inquirer = require('inquirer');
const fs = require('fs').promises;

(async () => {
  try {
    const readFile = await fs.readFile('./topics/raccoon_flashcard_data.txt', 'utf-8');

    const answer = await inquirer.default.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Как дела?',
      },
      {
        type: 'list',
        name: 'gender',
        message: 'Выбери',
        choices: ['один', 'два', 'три'],
      },
    ]);
    console.log(answer, readFile);
  } catch (error) {
    console.error('Лошара true', error);
  }
})();
