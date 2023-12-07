namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (this._teacher?.experienceTeachingJava === undefined) {
        return "No available teacher";
      }
      return `Available Teacher: ${this._teacher.firstName}`;
    }
  }
}

