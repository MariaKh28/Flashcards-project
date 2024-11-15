const inquirer = require('inquirer');
const fs = require('fs').promises;

(async () => {
  try {
    const readFile = await fs.readFile('./topics/raccoon_flashcard_data.txt', 'utf-8');
    

    const answer = await inquirer.default.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Представься: ',
      },
      {
        type: 'list',
        name: 'gender',
        message: readFile,
        choices: ['один', 'два', 'три'],
      },
    ]);
  } catch (error) {
    console.error('Лошара', error);
  }
})();
