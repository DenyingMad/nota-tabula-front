export class PriorityEnum {
    static LOW = new PriorityEnum("LOW", "Low");
    static MEDIUM = new PriorityEnum("MEDIUM", "Medium");
    static HIGH = new PriorityEnum("HIGH", "High");

    constructor(priority, priorityText) {
        this.priority = priority;
        this.priorityText = priorityText;
    };

    getPriority() {
        return this.priority;
    };

    getPriorityText() {
        return this.priorityText;
    };

    static toPriorityEnum(priority) {
        switch (priority) {
            case 'LOW':
                return PriorityEnum.LOW;
            case 'MEDIUM':
                return PriorityEnum.MEDIUM;
            case 'HIGH':
                return PriorityEnum.HIGH;
            default:
                throw new Error(`${priority} is not an allowed priority value.`)
        }
    };
}
