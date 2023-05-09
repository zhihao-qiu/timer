const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  //The user can press b and it should beep right away
  if (key === 'b') {
    process.stdout.write('\x07');
  }

  // The user can use ctrl + c to exit the program, at which point the program should 
  // say "Thanks for using me, ciao!" before terminating
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }

  if (key === '1' || key === '2' || key === '3' ||
    key === '4' || key === '5' || key === '6' ||
    key === '7' || key === '8' || key === '9') {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(key) * 1000);
  }
});
