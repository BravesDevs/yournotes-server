export interface userRegistrationDTO {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  programId: number;
  departmentId: number;
}

// Regex for email

export interface userLoginDTO {
  email: string;
  password: string;
}
