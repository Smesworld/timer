const alarm = function(times) {
  for (const time of times) {
    if (Number(time) > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, Number(time) * 1000);
    }
  }
};

const args = process.argv.slice(2);
alarm(args);