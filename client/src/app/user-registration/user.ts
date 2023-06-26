export interface User {
  username: string;
  email: string;
  password1: string;
  password2: string;

  usernameError?: string;
  emailError?: string;
  password1Error?: string;
  password2Error?: string;
  success?: string;

}
