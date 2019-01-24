export default class GameLoop {
  constructor() {
    this.subscribers = [];
    this.activeLoop = null;
    this.loop = this.loop.bind(this);
  }

  loop() {
    this.subscribers.forEach(callback => {
      callback.call();
    });

    this.activeLoop = window.requestAnimationFrame(this.loop);
  }

  start() {
    if (!this.activeLoop) {
      this.loop();
    }
  }

  stop() {
    if (this.activeLoop) {
      window.cancelAnimationFrame(this.activeLoop);
      this.activeLoop = null;
    }
  }

  subscribe(callback) {
    this.subscribers.push(callback);
  }

  unsubscribe(callback) {
    this.subscribers = this.subscribers.filter(
      _callback => _callback !== callback
    );
  }
}
