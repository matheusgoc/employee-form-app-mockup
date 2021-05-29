export default class CountryCriteria {
  extraFields: Array<
    'maritalStatus' |
    'socialInsuranceNumber' |
    'numberOfChildren' |
    'workingHours'
    > = []
  requirements: {
    minHolidayAllowance?: number
    maxHolidayAllowance?: number
  } = {}
}
