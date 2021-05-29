import CountryCriteria from './models/CountryCriteria';

interface CountryI {
  [key: string]: {
    name: string,
    criteria: CountryCriteria
  }
}

export const COUNTRIES: CountryI = {
  'esp': {
    name: 'Spain',
    criteria: {
      extraFields: ['maritalStatus', 'socialInsuranceNumber'],
      requirements: {
        minHolidayAllowance: 30
      }
    }
  },
  'gha': {
    name: 'Ghana',
    criteria: {
      extraFields: ['maritalStatus', 'numberOfChildren'],
      requirements: {}
    }
  },
  'bra': {
    name: 'Brazil',
    criteria: {
      extraFields: ['workingHours'],
      requirements: {
        maxHolidayAllowance: 40
      }
    }
  }
}

export const MARITAL_STATUS = [
  'Single',
  'Divorced',
  'Separated',
  'Widowed',
]