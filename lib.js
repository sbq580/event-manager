/* Author: Shabiq Hazarika
 * Contact: hazarika.shabiq@gmail.com
 * Description: A simple custom events publish-subscribe library for JavaScript
*/
(function(global) {
  function EventManager() {
    this.events = {};
  }

  EventManager.prototype.subscribe = function(event, handler) {
    // Throw error in case the event type is not string
    if(typeof event !== 'string') {
      throw new Error('Event name should be of type \'string\'');
    }
    // Throw error in case the handler type is not function
    if (typeof handler !== 'function') {
      throw new Error('Handler type should be \'function\'');
    }
    // Create a new array for fisrt subscription of the event, esle add the new handler
    if (this.events[event]) {
      this.events[event].push(handler);
    } else {
      this.events[event] = [];
      this.events[event].push(handler);
    }
    // If the event is already published, execute handler with last value
    // code in future
  };

  EventManager.prototype.publish = function(event, data) {
    // Throw error in case the event type is not string
    if(typeof event !== 'string') {
      throw new Error('Event name should be of type \'string\'');
    }
    // Call each registered handler for the event
    if (this.events[event]) {
      this.events[event].forEach(item => {
        item.call(null, data);
      });
    } else {
      // If there are no handlers, initialize empty handler array
      this.events[event] = [];
    }
    // Set published true and set the last published value
    // code in future
  }

  window.eventManager = new EventManager();
}(window))