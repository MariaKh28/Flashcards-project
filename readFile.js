const { log } = require('console');
const inquirer = require('inquirer');
const fs = require('fs').promises;

(async () => {
  try {
    const readFile = await fs.readFile('./topics/raccoon_flashcard_data.txt', 'utf-8');
    const arr = readFile.split('\n');
    const correcthion = {
      gender: 'всеядными',
    };
    
    const answer = await inquirer.default.prompt([
      //   {
      //     type: 'input',
      //     name: 'name',
      //     message: 'Представься: ',
      //   },

      {
        type: 'list',
        name: 'gender',
        message: arr[0],
        choices: ['всеядными', 'травоядные', 'хищники'],
      },
    ]);
    if (answer.gender !== correcthion.gender) {
      console.log('Неправильно');
    } else {
      console.log('Правильно');
    }
  } catch (error) {
    console.error('Лошара', error);
  }
})();
