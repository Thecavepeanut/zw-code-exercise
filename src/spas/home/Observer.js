export default class Observer {
  events = {};
  
  subscribe = (event, callback) => {
    if (!this.hasEvent(event)) {
      this.events[event] = [];
    }

    this.events[event].push(callback);
  };

  publish = (event, payload) => {
    if (!this.hasEvent(event)) {
      return;
    }

    this.events[event].forEach(callback => {
      callback(payload);
    });
  };

  hasEvent = event => !!this.events[event];
}