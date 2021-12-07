// У цього обєкта є чітка структура:

// global LEX ENV - цей обєкт скалдається з двох частин:
// {
//  1.('enviromentRecord'): {
//    'message' : 'Test',
//     'weigth' : 55,
//      'run' : {
//       console.log('RUN')
//     },
//   .....
//   },
//  'createMessenger' : {...}
//    'messanger' : ...
//    },
//2.('outherLexicalEnv'): ссилка на внутрішнє лексичне оточення чому буде рівне для Global? - null
// }

// createMessenger LEX ENV
// {
//  1.('enviromentRecord'): {
//      'message': 'Hello'
//      'sender' : ...
//      'sendMessage' : ...
//       ...
//    },
//
//2.('outherLexicalEnv'): ссилка на внутрішнє лексичне оточення чому буде рівне для Global? - global
// }


// createMessenger2 LEX ENV
// {
//  1.('enviromentRecord'): {
//      'message': 'Just learn it'
//      'sender' : ...
//      'sendMessage' : ...
//       ...
//    },
//
//2.('outherLexicalEnv'): ссилка на внутрішнє лексичне оточення чому буде рівне для Global? - global
// }


// setMessage LEX ENV
// {
//  1.('enviromentRecord'): {
//     'text' - параметри функції вони також записуються в лексичне оточенняю
//    },
//
//2.('outherLexicalEnv'): createMessanger1
// }


// printer LEX ENV
// {
//  1.('enviromentRecord'): {
//     
//    },
//
//2.('outherLexicalEnv'): createMessanger1
// }



const message = "Test";
const weight = 55;

function run() {
  console.log("RUN");
}

function createMessenger() {
  let message = "Just learn it";
  let sender = "Gromcode";

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  function printer() {
    console.log(message);
  }

  return {
    sendMessage,
    setMessage,
    setSender,
    printer,
  };
}

const messanger1 = createMessenger();
messanger1.setMessage('Hello')
messanger1.printer();

const messanger2 = createMessenger();
run();
