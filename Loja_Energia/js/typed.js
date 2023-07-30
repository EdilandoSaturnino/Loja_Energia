document.addEventListener("DOMContentLoaded", function() {
  var typedElement1 = document.querySelector('.typed');
  if (typedElement1) {
    var typed1 = new Typed('.typed', {
      strings: ['O CAOS', 'O͠ ̵̡̀C͏҉͏̶́͝A̵̴̢͜҉̸̧͘͡O̵̴̡̧͝͠S͝҉̕', 'O̧ ͜҉C̸̶̕҉A̧̰̩̪̖͈͟͜͞͞R̡̡͔̭̺̳̙̔̕͞͞͞Į̵̡͝͡͠҉̦̫͇̬̭̜͔Ã̴̷̧̡̨̠̯͕̹͎̖͔̲̕͘͝O͏̴̸̀͘͘͞҉̵͈͔͖̳̯̫̤̱̜', 'O CAOS', '𝙊͢ ͝𝘾̡͞𝘼̶̀͠𝙊̡͘̕͝𝙎̷̶̵͟͞', 'O CAOS'],
      speed: 50,
      loop: true,
      cursorChar: '',
      startDelay: 10,
      backSpeed: 10,
      typeSpeed: 100,
      smartBackspace: true,
    });
  }

  var typedElement2 = document.querySelector('.type');
  if (typedElement2) {
    var typed2 = new Typed('.type', {
      strings: ['A PRODUÇÃO', 'O̶̮ ̗͟A͖̘̕͠N̢̧̲̫͓͝F҉̸̨̯̺͉͚̕Ị̶̶̸̡͇̗̜͇͢Ţ̰̩̪̖͈͟͟͟͡R̡̡͔̭̺̳̙̟̕͞͞͞Į̵̡͝͡͠҉̦̫͇̬̭̜͔Ã̴̷̧̡̨̠̯͕̹͎̖͔̲̕͘͝O͏̴̸̀͘͘͞҉̵͈͔͖̳̯̫̤̱̜', 'A PRODUÇÃO', 'A P̵̸̴̢̢̀͟͞R҉̡̧́͘͢҉͟Ò̵̴̧̀͘͟͡D̶́͢͟҉̵̸̀U̷̸̶̢̢͢͠͡Ç̨͏̸̨̕͟͞͏Ã̧̢̢̡̕͜͝͠O̴̡̡̡͢͠͏͏', 'A PRODUÇÃO', '', 'O ANFITRIÃO'],
      speed: 50,
      loop: true,
      cursorChar: '',
      startDelay: 10,
      backSpeed: 10,
      typeSpeed: 100,
      smartBackspace: true,
    });
  }

  var typedElement3 = document.querySelector('.types');
  if (typedElement3) {
    var typed3 = new Typed('.types', {
      strings: ['PRODUÇÃO', 'PRODUÇÃO', 'P̷̷͜͢͝͝Ŗ̶̸̷̨͞O̵̷̷̴͜͞D̵̸̸̨̧͡U͘͜͜͝͏̴Ḉ̧͜͠͠͠Ą̵̡̛̛̃͘Ǫ̵̵̛҉͡', 'PRODUÇÃO', 'P̷̢̕͏̶̡̢͟R҉͢͟͡͠͏̢͜Ó̢̕͘̕͢͡͠D͟͜͏̸̶̀͜͞U̶̴͏̸́͢͠͞Ḉ̷̷̕҉̸́̕Ã̷̵̢̨͜͝͞͡Ǫ̷̸̶̛̕͟͝', 'ANFITRIÃO', 'Ṕ̷̢͘͘͟͟͝R͏̵̧͘҉̀̕͞Ǫ̢̧̢̕͟͟͠Ḑ̵̵̢̛͟҉̛Ư̷̧͘̕͘͝͠Ḉ̶̸̡̢́͘͜Ã̶̷̡́͜͟͝͠Ớ̷̡̧͡͞͏'],
      speed: 1000,
      loop: true,
      cursorChar: '',
      startDelay: 10,
      backSpeed: 10,
      typeSpeed: 100,
      smartBackspace: true,
    });
  }
});
