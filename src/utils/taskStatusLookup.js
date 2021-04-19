class StatusEnum {
  static open = new StatusEnum("OPEN");
  static done = new StatusEnum("DONE");
  static inProgress = new StatusEnum("IN_PROGRESS");
  static review = new StatusEnum("REVIEW");

  constructor(statusType) {
      this.statusType = statusType;
  };

  getStatus() {
      return this.statusType;
  };
};

export  class TaskStatus {
    statusValue = StatusEnum.done;

    constructor(status) {
        switch (status) {
            case false:
                this.statusValue = StatusEnum.open;
                break;
            case true:
                this.statusValue = StatusEnum.done;
                break;
            case 'OPEN':
                this.statusValue = StatusEnum.open;
                break;
            case 'DONE':
                this.statusValue = StatusEnum.done;
                break;
            case 'IN_PROGRESS':
                this.statusValue = StatusEnum.inProgress;
                break;
            case 'REVIEW':
                this.statusValue = StatusEnum.review;
                break;
            default:
                throw new Error(`${status} is not an allowed value for a TaskStatus instance`);
        }
    };

    toString() {
        return `TaskStatus.${this.statusValue.getStatus()}`;
    };
    toCheckBoxValue() {
        return (this.statusValue === StatusEnum.done);
    };
    getStatus() {
        return this.statusValue.getStatus();
    }
};
