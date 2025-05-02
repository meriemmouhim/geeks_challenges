const chalk = require('chalk').default;
function coloredMessage() {
    const message = chalk.bold.red('H') + 
    chalk.bold.yellow('e') +
    chalk.bold.green('l') +
    chalk.bold.blue('l') +
    chalk.bold.magenta('o') +
    ', ' +
    chalk.bold.cyan('colorful') +
    ' ' +
    chalk.bold.white.bgBlue('world') +
    '!';

    console.log(message);
  }
module.exports = { coloredMessage };