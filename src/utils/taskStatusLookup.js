export  class TaskStatus {
    statusValue = "";

    constructor(status) {
        switch (status) {
            case false:
                this.statusValue = "OPEN";
                break;
            case true:
                this.statusValue = "DONE";
                break;
            case 'OPEN':
                this.statusValue = "OPEN";
                break;
            case 'DONE':
                this.statusValue = "DONE";
                break;
            case 'IN_PROGRESS':
                this.statusValue = "IN_PROGRESS";
                break;
            case 'REVIEW':
                this.statusValue = "REVIEW";
                break;
            default:
                throw new Error(`${status} is not an allowed value for a TaskStatus instance`);
        }
    };

    toString() {
        return `TaskStatus.${this.statusValue}`;
    };
    toCheckBoxValue() {
        return (this.statusValue === "DONE");
    };
};
