export default class EmployeeModel {
  firstName: string = ''
  lastName: string = ''
  birthday: Date = new Date()
  holidayAllowance?: number = undefined
  country: string = ''
  maritalStatus?: string = undefined
  socialInsuranceNumber?: number = undefined
  numberOfChildren?: number = undefined
  workingHours?: number = undefined
}