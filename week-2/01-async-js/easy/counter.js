function startCounter() {
    let counterValue = 0;
    function updateCounter() {
      console.log(counterValue);
      counterValue++
      setTimeout(updateCounter, 1000);
    }
    updateCounter();
  }
  startCounter();
  