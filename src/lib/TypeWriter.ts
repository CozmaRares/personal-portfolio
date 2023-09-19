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
    };

export default class TypeWriter {
  private queue: Array<Action>;
  private loop: boolean;
  private typingSpeed: number;
  private deletingSpeed: number;
  private setTextCallback: (text: string) => void;

  private text = "";
  private delay: number = 0;
  private stopped = false;
  private lastFrameTime: ReturnType<typeof Date.now> | null = null;
  private animationFrame: ReturnType<typeof requestAnimationFrame> | null =
    null;

  constructor(
    actions: Action[],
    setTextCallback: (text: string) => void,
    { loop = false, delay = 0, typingSpeed = 50, deletingSpeed = 50 } = {},
  ) {
    this.loop = loop;
    this.typingSpeed = typingSpeed;
    this.delay = delay;
    this.deletingSpeed = deletingSpeed;
    this.setTextCallback = setTextCallback;

    this.queue = actions.flatMap(action => {
      switch (action.type) {
        case "add":
          return action.text
            .split("")
            .map(char => ({ type: "add", text: char }));
        case "pause":
          return action;
        case "delete":
          return new Array<Action>(action.numChars).fill({
            type: "delete",
            numChars: 1,
          });
      }
    });
  }

  start() {
    this.setTextCallback(this.text);
    this.stopped = false;
    this.runEventLoop();
  }

  stop() {
    this.stopped = true;
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }

  isRunning() {
    return !this.stopped;
  }

  private runEventLoop() {
    if (this.lastFrameTime == null) this.lastFrameTime = Date.now();

    const now = Date.now();
    const delta = now - this.lastFrameTime;

    if (this.stopped || this.queue.length == 0) return;

    this.animationFrame = requestAnimationFrame(() => this.runEventLoop());

    if (delta < this.delay) return;

    const action = this.queue.shift()!;

    switch (action.type) {
      case "add":
        this.text += action.text;
        this.delay = this.typingSpeed;
        break;
      case "pause":
        this.delay = action.duration;
        break;
      case "delete":
        this.text = this.text.substring(0, this.text.length - action.numChars);
        this.delay = this.deletingSpeed;
        break;
      default:
        break;
    }

    if (this.loop) this.queue.push(action);

    this.setTextCallback(this.text);
    this.lastFrameTime = now;
  }
}
