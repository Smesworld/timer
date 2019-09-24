const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const alarm = function(time) {
  if (Number(time) > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(time) * 1000);
  }
};

const timerInput = function(key) {
  if (key === '\u0003') {
    console.log(`Thanks for using me, bie!`);
    process.exit();
  } else if (key === "b") {
    process.stdout.write('\x07');
  } else if (key >= 1 && key <= 9) {
    console.log(`Setting timer for ${key} seconds...`);
    alarm(key);
  } else {
    console.log(`Please input a number...`);
  }
};

stdin.on('data', timerInput);
