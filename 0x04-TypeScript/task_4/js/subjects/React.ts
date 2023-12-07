namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (this._teacher?.experienceTeachingReact === undefined) {
        return "No available teacher";
      }
      return `Available Teacher: ${this._teacher.firstName}`;
    }
  }
}

