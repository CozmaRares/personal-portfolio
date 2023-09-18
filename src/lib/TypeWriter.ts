export type Action =
  | {
      type: "add";
      text: string;
    }
  | {
      type: "pause";
      duration: number;
    }
  | {
      type: "delete";
      numChars: number;
    }
  | {
      type: "clear";
    };

async function sleep(duration: number) {
  return new Promise<void>(resolve => {
    setTimeout(resolve, duration);
  });
}

export default class TypeWriter {
  private initialQueue?: Array<() => Promise<void>> = undefined;
  private queue: Array<() => Promise<void>>;
  private loop: boolean;
  private delay: number;
  private typingSpeed: number;
  private deletingSpeed: number;

  private text = "";
  private stopped = false;

  constructor(
    actions: Action[],
    setTextCallback: (text: string) => void,
    { loop = false, delay = 0, typingSpeed = 50, deletingSpeed = 50 } = {},
  ) {
    this.loop = loop;
    this.delay = delay;
    this.typingSpeed = typingSpeed;
    this.deletingSpeed = deletingSpeed;

    if (loop) actions.push({ type: "clear" });

    this.queue = actions.map(action => {
      switch (action.type) {
        case "add":
          return () =>
            new Promise((resolve, reject) => {
              let i = 0;
              const interval = setInterval(() => {
                if (this.stopped) {
                  clearInterval(interval);
                  reject();
                }

                this.text += action.text[i];
                setTextCallback(this.text);
                i++;
                if (i >= action.text.length) {
                  clearInterval(interval);
                  resolve();
                }
              }, this.typingSpeed);
            });
        case "pause":
          return () => sleep(action.duration);
        case "delete":
          return () =>
            new Promise((resolve, reject) => {
              let i = 0;
              const interval = setInterval(() => {
                if (this.stopped) {
                  clearInterval(interval);
                  reject();
                }
                this.text = this.text.substring(0, this.text.length - 1);
                setTextCallback(this.text);
                i++;
                if (i >= action.numChars) {
                  clearInterval(interval);
                  resolve();
                }
              }, this.deletingSpeed);
            });
        case "clear":
          return () =>
            new Promise((resolve, reject) => {
              const interval = setInterval(() => {
                if (this.stopped) {
                  clearInterval(interval);
                  reject();
                }
                this.text = this.text.substring(0, this.text.length - 1);
                setTextCallback(this.text);
                if (this.text.length == 0) {
                  clearInterval(interval);
                  resolve();
                }
              }, this.deletingSpeed);
            });
      }
    });

    if (loop) this.initialQueue = [...this.queue];
  }

  async start() {
    if (!this.stopped && this.delay) await sleep(this.delay);

    this.stopped = false;
    let cb = this.queue.shift();
    while (cb != null) {
      await cb();

      if (this.stopped) break;

      if (this.loop) this.queue.push(cb);
      cb = this.queue.shift();
    }
  }

  pause() {
    this.stopped = true;
    this.queue = this.initialQueue ? [...this.initialQueue] : [];
  }

  stop() {
    this.stopped = true;
    this.queue = [];
  }

  isRunning() {
    return !this.stopped;
  }
}
