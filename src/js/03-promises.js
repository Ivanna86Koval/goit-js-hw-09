import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formPromise = document.querySelector('.form');

formPromise.addEventListener('submit', onFormPromise);

function onFormPromise(evt) {
  evt.preventDefault();

  const { delay, step, amount } = evt.currentTarget;
  let inputFormDelay = Number(delay.value);
  let inputFormStep = Number(step.value);
  let inputFormAmount = Number(amount.value);

  if (inputFormDelay < 0 || inputFormStep < 0 || inputFormAmount <= 0) {
    Notify.info('All data must be positive');
    return;
  }

  for (let i = 0; i < inputFormAmount; i += 1) {
    let customDelay = inputFormDelay + i * inputFormStep;
    createPromise(i + 1, customDelay)
      .then(({ position, delay }) => {
        Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
          options
        );
      })
      .catch(({ position, delay }) => {
        Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`,
          options
        );
      });

    // inputFormDelay += inputFormStep;
  }

  evt.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const options = {
  position: 'right-top',
  timeout: 3000,
};
