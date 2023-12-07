namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (this._teacher?.experienceTeachingC === undefined) {
        return "No available teacher";
      }
      return `Available Teacher: ${this._teacher.firstName}`;
    }
  }
}

