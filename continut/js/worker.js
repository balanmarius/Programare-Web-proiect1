self.onmessage = function (event) {
  // self.setInterval(() => self.postMessage(null), 5000);
  this.setTimeout(() => {
    self.postMessage(null);
  }, 1000);
};
