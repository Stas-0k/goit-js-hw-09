import Notiflix from 'notiflix';
const form = document.querySelector('.form');

const inputObj = {
  delay: 0,
  step: 0,
  amount: 0,
  position: 0,
};

form.addEventListener('input', call);

function call(evt) {
  inputObj[evt.target.name] = Number(evt.target.value);
  console.log(inputObj);
}

form.addEventListener('submit', start);



function start(evt) {
  evt.preventDefault();
  for (let i = 0; i < inputObj.amount; i += 1) {
    createPromise(inputObj.position, inputObj.delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    inputObj.delay += inputObj.step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = {
        position,
        delay,
      };

      if (shouldResolve) {
        resolve(result);
      } else {
        reject(result);
      }
    }, delay);
  });
  return promise;
}



/*promise.then(({ position, delay }) => { 
    setTimeout(() => { 
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }, delay)
  })
    .catch(({ position, delay }) => { 
      setTimeout(() => { 
           Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      }, delay)

    })*/
