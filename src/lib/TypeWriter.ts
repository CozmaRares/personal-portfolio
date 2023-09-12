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

export default class TypeWriter {
  private queue: Array<() => Promise<void>>;
  private loop: boolean;
  private typingSpeed: number;
  private deletingSpeed: number;

  private text = "";
  private running = false;

  constructor(
    actions: Action[],
    setTextCallback: (text: string) => void,
    { loop = false, typingSpeed = 50, deletingSpeed = 50 } = {},
  ) {
    this.loop = loop;
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
                if (!this.running) {
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
          return () =>
            new Promise(resolve => {
              setTimeout(resolve, action.duration);
            });
        case "delete":
          return () =>
            new Promise((resolve, reject) => {
              let i = 0;
              const interval = setInterval(() => {
                if (!this.running) {
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
                if (!this.running) {
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
  }

  async start() {
    this.running = true;
    let cb = this.queue.shift();
    while (cb != null) {
      await cb();

      if (!this.running) break;

      if (this.loop) this.queue.push(cb);
      cb = this.queue.shift();
    }
  }

  stop() {
    this.running = false;
  }

  isRunning() {
    return this.running;
  }
}
