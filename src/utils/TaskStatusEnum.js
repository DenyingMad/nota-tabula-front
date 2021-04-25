export class TaskStatus {
  static OPEN = new TaskStatus("OPEN", false);
  static DONE = new TaskStatus("DONE", true);
  static INPROGRESS = new TaskStatus("IN_PROGRESS", false);
  static REVIEW = new TaskStatus("REVIEW", false);

  constructor(statusType, isDone) {
      this.statusType = statusType;
      this.isDone = isDone;
  };

  getStatus() {
      return this.statusType;
  };

  getIsDone() {
      return this.isDone;
  };

  static toStatusEnum(status) {
      switch (status) {
            case 'OPEN':
                return TaskStatus.OPEN;
            case 'DONE':
                return TaskStatus.DONE
            case 'IN_PROGRESS':
                return  TaskStatus.INPROGRESS;
            case 'REVIEW':
                return  TaskStatus.REVIEW;
            default:
                throw new Error(`${status} is not an allowed value for a TaskStatus instance`);
        }
  };
}
