// Since process.stdout.write('\x07') doesn't work, I'm using console.log('beeping') to instead

const args = process.argv.splice(2);
const nonSortArray = [];
let timerArray = [];

// console.log(timerArray);

function beeping(index) {
  if (index < timerArray.length) {
    if (index === -1) {
      setTimeout(() => beeping(index + 1), timerArray[index + 1] * 1000);
    } else {
      // console.log('beeping');
      // console.log(timerArray[index]);
      process.stdout.write('\x07');
      setTimeout(() => beeping(index + 1), (timerArray[index + 1] - timerArray[index]) * 1000);
    }
  } else {
    console.log();
  }
}

const checkBeep = () => {
  for (let i = 0; i < args.length; i++) {
    if (isNaN(Number(args[i]))) {
      console.log(`Warning: argument - ${args[i]} has been skipped because it is not a number.`);
    } else if (Number(args[i]) < 0) {
      console.log(`Warning: argument - ${args[i]} has been skipped, because it is a nevigate number.`);
    } else {
      nonSortArray.push(Number(args[i]));
    }
  }

  if (!nonSortArray.length) {
    console.log('Error: There is no beep at all.');
    process.kill;
  }
  timerArray = nonSortArray.sort((a, b) => a - b);
};
checkBeep();
beeping(-1);

