export const loggerEventName = 'logger-event';

export const createLoggerEvent = (message) => {
    return new CustomEvent(loggerEventName, {
      detail: message,
      composed:true,
      bubbles:true
    })
  }