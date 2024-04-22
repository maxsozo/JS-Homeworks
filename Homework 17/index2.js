function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function changeLight(light) {
    const lights = document.querySelectorAll('.light');
    lights.forEach(l => l.classList.remove('green', 'red'));
    lights[light].classList.add(light === 0 ? 'red' : 'green');
  }

  async function trafficLight() {
    while (true) {
      await changeLight(0);
      await sleep(3000);
      await changeLight(1);
      await sleep(5000);
    }
  }

  async function pedestrianCrossing() {
    const button = document.querySelector('.button');
    button.disabled = true;

    await sleep(5000);
    button.disabled = false;

    button.addEventListener('click', async () => {
      button.disabled = true;
      await changeLight(1);
      await sleep(5000);
      await changeLight(0);
      button.disabled = false;
    });
  }

  Promise.race([trafficLight(), pedestrianCrossing()]);