'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  // Added new questions for quiz
  questions: [
    {
      text: 'What are the different ways to declare a JS variable?',
      answers: {
        a: 'constant, let, variable',
        b: 'var, const, let, function',
        c: 'var, let, const',
      },
      correct: 'c',
      selected: null,
      timer: 10,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'What does `typeof` do?',
      answers: {
        a: 'changes the type of a primitive value',
        b: 'returns a string describing the type of a value',
        c: 'determines if a value is primitive',
        d: 'can tell the difference between arrays and objects',
      },
      correct: 'b',
      selected: null,
      timer: 10,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text: 'How do you write `Hello World` in an alert box?',
      answers: {
        a: `alertBox('Hello World')`,
        b: `msgBox('Hello World')`,
        c: `alert('Hello World')`,
        d: `msg('Hello World')`,
      },
      correct: 'c',
      selected: null,
      timer: 10,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/alert-prompt-confirm',
        },
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/alert',
        },
      ],
    },
    {
      text: 'How do you round the number 7.25, to the nearest integer?',
      answers: {
        a: 'round(7.25)',
        b: 'Math.round(7.25)',
        c: 'rnd(7.25)',
        d: 'Math.rnd(7.25)',
      },
      correct: 'b',
      selected: null,
      timer: 10,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/number#rounding',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round',
        },
      ],
    },
    {
      text: 'Which event occurs when the user clicks on an HTML element?',
      answers: {
        a: 'onchange',
        b: 'onmouseclick',
        c: 'onmouseover',
        d: 'onclick',
      },
      correct: 'd',
      selected: null,
      timer: 10,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/introduction-browser-events',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick',
        },
      ],
    },
    {
      text: 'What will the following code return: Boolean(10 > 9)?',
      answers: {
        a: 'false',
        b: 'true',
        c: 'NaN',
      },
      correct: 'b',
      selected: null,
      timer: 10,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/logical-operators',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean',
        },
      ],
    },
    {
      text:
        'If you type the following code in the console window, what result will you get? 3 > 2 > 1 === false;',
      answers: {
        a: 'true',
        b: 'false',
      },
      correct: 'a',
      selected: null,
      timer: 10,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/logical-operators',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean',
        },
      ],
    },
    {
      text:
        'Which JavaScript label catches all the values, except for the ones specified?',
      answers: {
        a: 'catch',
        b: 'label',
        c: 'try',
        d: 'default',
      },
      correct: 'd',
      selected: null,
      timer: 10,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/function-basics#default-values',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters',
        },
      ],
    },
    {
      text: `What is the short cute of JS?`,
      answers: {
        a: 'JavaScript',
        b: 'Java',
        c: 'C++',
        d: 'C',
      },
      correct: 'a',
      selected: null,
      timer: 10,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/string',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition',
        },
      ],
    },
    {
      text:
        'Which array function/s we can use to know if this array contain specific element value or not ?',
      answers: {
        a: 'filter',
        b: 'map',
        c: 'includes',
      },
      correct: 'c',
      selected: null,
      timer: 10,
      links: [
        {
          text: 'javascript.info',
          href:
            'https://javascript.info/array-methods#indexof-lastindexof-and-includes',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes',
        },
      ],
    },
  ],
};
