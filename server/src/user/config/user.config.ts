export enum UserEnumGenderOption {
  MALE = 'male',
  FEMALE = 'female',
}
export enum UserEnumStatusOption {
  BLOCKED = 'blocked',
  ACTIVE = 'active',
}
export const userEntityConfig = {
  firstName: {
    minLength: 1,
    maxLength: 50,
  },
  lastName: {
    minLength: 1,
    maxLength: 50,
  },
};
