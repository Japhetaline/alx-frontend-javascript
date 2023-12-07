// task_1/main.ts
interface printTeacherFunction{
(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
const firstLetter = firstName.charAt(0).toUpperCase();
const fullName = `${firstLetter}, ${lastName}`;
return fullName
}


interface Directors extends Teacher{
numberOfReports: number;
}

//Example usage:
const result = printTeacher("John", "Doe");
console.log(result);


class Teacher {
  private _firstName: string;
  private _lastName: string;
  private _fullTimeEmployee: boolean;
  private _yearsOfExperience?: number;
  private _location: string;
  private _additionalAttributes: Record<string, any>;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._fullTimeEmployee = true; // Default value for fullTimeEmployee
    this._location = 'Default Location'; // Default value for location
    this._additionalAttributes = {};
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get fullTimeEmployee(): boolean {
    return this._fullTimeEmployee;
  }

  set fullTimeEmployee(value: boolean) {
    // Once set, cannot be modified
    if (this._fullTimeEmployee === undefined) {
      this._fullTimeEmployee = value;
    }
  }

  get yearsOfExperience(): number | undefined {
    return this._yearsOfExperience;
  }

  set yearsOfExperience(value: number | undefined) {
    this._yearsOfExperience = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    // Once set, cannot be modified
    if (this._location === undefined) {
      this._location = value;
    }
  }

  get additionalAttributes(): Record<string, any> {
    return this._additionalAttributes;
  }

  setAdditionalAttribute(name: string, value: any): void {
    this._additionalAttributes[name] = value;
  }
}

// Interface describing the constructor of StudentClass
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface describing the methods of StudentClass
interface StudentClassMethods {
  workOnHomework(): string;
  displayName(): string;
}

// Interface combining both constructor and methods
interface StudentClass extends StudentClassConstructor, StudentClassMethods {}

// StudentClass implementation
class StudentClass implements StudentClassMethods {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this._firstName;
  }
}
