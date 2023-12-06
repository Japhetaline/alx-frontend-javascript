// task_1/main.ts

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

// Example usage:
const teacher = new Teacher('John', 'Doe');
teacher.setAdditionalAttribute('contract', true);

console.log(teacher);

