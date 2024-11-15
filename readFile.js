const { log } = require('console');
const inquirer = require('inquirer');
const fs = require('fs').promises;
const cfonts = require('cfonts');
const { EOL } = require('os');

async function andrey() {
  try {
    const dirFile = await fs.readdir('./topics');
    const shortNames = dirFile.map((el) => el.split('.')[0]);
    const answer = await inquirer.default.prompt([
      {
        type: 'list',
        name: 'topic',
        message: 'Выберите тему: ',
        choices: shortNames,
      },
    ]);

    const selectFile = dirFile[shortNames.indexOf(answer.topic)];

    const readTopics = await fs.readFile(`./topics/${selectFile}`, 'utf-8');
    const arr = readTopics.split('\n');

    const testObj = arr.map((el, i) => {
      const [question, answer1, answer2, answer3, currentAnswer] = el.split(',');

      return {
        type: 'list',
        name: question,
        message: question,
        currentAnswer,
        choices: [
          { name: answer1, value: answer1 },
          { name: answer2, value: answer2 },
          { name: answer3, value: answer3 },
        ],
      };
    });
    return testObj;
  } catch (error) {
    console.error('Лошара', error);
  }
}

async function egor() {
  cfonts.say('SMESHARIKI', {
    font: 'block', // define the font face
    align: 'left', // define text alignment
    colors: ['system'], // define all colors
    background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
    letterSpacing: 1, // define letter spacing
    lineHeight: 1, // define the line height
    space: true, // define if the output text should have empty lines on top and on the bottom
    maxLength: '0', // define how many character can be on one line
    gradient: false, // define your two gradient colors
    independentGradient: false, // define if you want to recalculate the gradient for each new line
    transitionGradient: false, // define if this is a transition between colors directly
    rawMode: false, // define if the line breaks should be CRLF (`\r\n`) over the default LF (`\n`)
    env: 'node', // define the environment cfonts is being executed in
  });

  const wawa = await andrey();

  const currentAnswersArr = wawa.map(({ currentAnswer }) => currentAnswer);

  const answers = await inquirer.default.prompt(wawa);
  //   cfonts
  const questions = Object.entries(answers)
    .map((el, index) => {
      if (el[1] === currentAnswersArr[index]) {
        return [el[0], 'Верно 🐸'].join(': ');
      } else {
        return [el[0], 'Неверно 🤡'];
      }
    })
    .join(EOL);

  console.log(questions);
}

egor();
