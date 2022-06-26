export class Validator {
  ruleMap = new Map();

  setRule(id: string, handler: Function) {
    this.ruleMap.set(id, handler);
  }

  getRule(id: string) {
    return this.ruleMap.get(id);
  }

  validate(value: any, ruleIds: string[]) {
    const errors = [];

    for (const ruleId of ruleIds) {
      const ruleHandler = this.getRule(ruleId);

      if (!ruleHandler(value)) {
        errors.push(ruleId);
      }
    }

    return errors;
  }
};