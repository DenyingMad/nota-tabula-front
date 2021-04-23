export class StatusEnum {
  static OPEN = new StatusEnum("OPEN", false);
  static DONE = new StatusEnum("DONE", true);
  static INPROGRESS = new StatusEnum("IN_PROGRESS", false);
  static REVIEW = new StatusEnum("REVIEW", false);

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
            case false:
                return StatusEnum.OPEN;
            case true:
                return StatusEnum.DONE;
            case 'OPEN':
                return StatusEnum.OPEN;
            case 'DONE':
                return StatusEnum.DONE
            case 'IN_PROGRESS':
                return  StatusEnum.INPROGRESS;
            case 'REVIEW':
                return  StatusEnum.REVIEW;
            default:
                throw new Error(`${status} is not an allowed value for a TaskStatus instance`);
        };
  };
};
