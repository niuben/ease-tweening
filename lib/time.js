export function createDuration(duration) {
    const startTime = new Date();
    duration = duration !== undefined ? duration : 0;
    return function () {
      return duration + new Date().getTime() - startTime.getTime();
    };
  }
