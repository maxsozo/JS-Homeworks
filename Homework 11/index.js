// {
//   function makeProfileTimer() {
//     const start = performance.now();

//     return function () {
//       const end = performance.now();
//       return end - start;
//     };
//   }

//   const timer = makeProfileTimer();
//   alert("Вимiрюємо час роботи цього alert"); //якийсь код, час виконання якого ми хочемо виміряти з високою точністю
//   alert(timer()); //alert повинен вивести час у мілiсекундах від виконання makeProfileTimer до моменту виклику timer(),
//   // тобто виміряти час виконання alert
//   const timer2 = makeProfileTimer();
//   prompt("");
//   alert(`Час роботи двух аlert та одного prompt ${timer()}`);
//   alert(`Час роботи prompt та попереднього alert ${timer2()}`);
// }

// {
//     function makeSaver(func, defaultValue = null) {
//         let savedDefaultValue = defaultValue; 

//         return function() {
//             if (savedDefaultValue === null) {
//                 savedDefaultValue = func();
//             }
//             return savedDefaultValue;
//         };
//     }

//   let saver = makeSaver(Math.random); //створює функцію-сховище результату переданої як параметр функції (Math.random
//   // у прикладі). На цьому етапі Math.random НЕ ВИКЛИКАЄТЬСЯ
//   let value1 = saver(); //saver викликає передану в makeSaver функцію, запам'ятовує результат і повертає його
//   let value2 = saver(); //saver надалі просто зберігає результат функції, і більше НЕ викликає передану
//   //в makeSaver функцію;
//   alert(`Random: ${value1} === ${value2}`);

//   let saver2 = makeSaver(() => {
//     console.log("saved function called");
//     return [null, undefined, false, "", 0, Math.random()][
//       Math.floor(Math.random() * 6)
//     ];
//   });
//   let value3 = saver2();
//   let value4 = saver2();

//   value3 === value4; // теж має бути true

//   let namePrompt = prompt.bind(window, "Як тебе звуть?");
//   let nameSaver = makeSaver(namePrompt);
//   alert(`Привіт! Prompt ще не було!`);
//   alert(
//     `Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`
//   );
//   alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`);
// }

{   
    function myBind(func, context, defaultArgs) {
        return function(...args) {
          const allArgs = defaultArgs.map((defaultValue, index) => {
            return typeof args[index] !== 'undefined' ? args[index] : defaultValue;
          }).concat(args.slice(defaultArgs.length));
          return func.apply(context, allArgs);
        };
      }

      let pow5 = myBind(Math.pow, Math, [undefined, 5]);
      let cube = myBind(Math.pow, Math, [undefined, 3]);
      
      console.log(pow5(2));
      console.log(pow5(4));
      console.log(cube(3));

      let chessMin = myBind(Math.min, Math, [Infinity, 4, Infinity, 5, Infinity, 8, Infinity, 9]);
      console.log(chessMin(-1,-5,3,15));

      let zeroPrompt = myBind(prompt, window, [undefined, "0"]);
      
      let someNumber = zeroPrompt("Введіть число");
      console.log(someNumber);

      const bindedJoiner = myBind((...params) => params.join(''), null, [undefined, 'b', undefined, undefined, 'e', 'f']);
      
      console.log(bindedJoiner('a','c','d'));
      console.log(bindedJoiner('1','2','3'));
}