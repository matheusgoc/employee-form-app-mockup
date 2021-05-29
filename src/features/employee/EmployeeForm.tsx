import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import moment from 'moment'
import { KeyboardDatePicker } from '@material-ui/pickers'
import EmployeeModel from '../../models/EmployeeModel'
import { Button, Container, createStyles, makeStyles, MenuItem, TextField, Typography } from '@material-ui/core'
import { COUNTRIES, MARITAL_STATUS } from '../../constants';

const initialValidation = {
  firstName: yup
    .string()
    .required('First name is required'),
  lastName: yup
    .string()
    .required('Last name is required'),
  birthday: yup
    .date()
    .required('Birthday is required'),
  holidayAllowance: yup
    .number()
    .required('Holiday Allowance is required'),
  country: yup
    .string()
    .required('Country is required'),
}

const EmployeeForm = () => {

  const classes = useStyles()

  const [validationSchema, setValidationSchema] = useState(yup.object(initialValidation))
  // const validationSchema = yup.object(validations)

  const removeUnnecessaryFields = (values: any) => {
    const extraFields = ['maritalStatus', 'socialInsuranceNumber', 'numberOfChildren', 'maritalStatus']
    for (const field of extraFields) {
      if(!checkExtraField(field) && Object.keys(values).indexOf(field) >= 0) {
        delete values[field]
      }
    }

    return values
  }

  const formik = useFormik({
    initialValues: new EmployeeModel(),
    validationSchema: validationSchema,
    onSubmit: (values) => {
      values = removeUnnecessaryFields(values)
      console.log(JSON.stringify(values, null, 2))
    }
  })

  const checkExtraField = (extraField: any) => {
    return COUNTRIES[formik.values.country]?.criteria.extraFields.indexOf(extraField) >= 0
  }

  useEffect(() => {

    const validation:any = {...initialValidation}

    if (checkExtraField('maritalStatus')) {
      validation['maritalStatus'] = yup
        .string()
        .required('Marital status is required')
    }

    if (checkExtraField('socialInsuranceNumber')) {
      validation['socialInsuranceNumber'] = yup
        .number()
        .required('Social Insurance Number is required')
    }

    if (checkExtraField('numberOfChildren')) {
      validation['numberOfChildren'] = yup
        .number()
        .required('Number of Children is required')
    }

    if (checkExtraField('workingHours')) {
      validation['workingHours'] = yup
        .number()
        .required('Working hours is required')
    }

    const minHolidayAllowance = COUNTRIES[formik.values.country]?.criteria.requirements?.minHolidayAllowance
    if (minHolidayAllowance) {
      validation.holidayAllowance = yup
        .number()
        .min(minHolidayAllowance,`A minimum of ${minHolidayAllowance} is required`)
        .required('Holiday Allowance is required')
    }

    const maxHolidayAllowance = COUNTRIES[formik.values.country]?.criteria.requirements?.maxHolidayAllowance
    if (maxHolidayAllowance) {
      validation.holidayAllowance = yup
        .number()
        .max(maxHolidayAllowance,`The maximum of holiday allowed are ${maxHolidayAllowance}`)
        .required('Holiday Allowance is required')
    }

    setValidationSchema(yup.object(validation))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.country])



  return (
    <Container maxWidth='sm' className={classes.root}>
      <Typography variant='h4' component='h1'>Employee</Typography>
      <form onSubmit={formik.handleSubmit} noValidate autoComplete='off'>
        <TextField
          fullWidth
          name='firstName'
          label='First Name'
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          fullWidth
          name='lastName'
          label='Last Name'
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <KeyboardDatePicker
          margin='normal'
          id='birthday'
          label='Date of birth'
          format='MM/dd/yyyy'
          autoOk
          clearable
          openTo='year'
          views={['year', 'month', 'date']}
          value={formik.values.birthday}
          onChange={date => {
            formik.setFieldValue('birthday', date)
          }}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          maxDate={new Date()}
          maxDateMessage='Birthday must be less than today'
          initialFocusedDate={moment().subtract(20, 'years').date(1).month(0).toDate()}
        />
        <TextField
          fullWidth
          name='holidayAllowance'
          label='Holiday Allowance'
          type='number'
          value={formik.values.holidayAllowance}
          onChange={formik.handleChange}
          error={formik.touched.holidayAllowance && Boolean(formik.errors.holidayAllowance)}
          helperText={formik.touched.holidayAllowance && formik.errors.holidayAllowance}
        />
        <TextField
          fullWidth
          name="country"
          select
          label="Country"
          value={formik.values.country}
          onChange={formik.handleChange}
          error={formik.touched.country && Boolean(formik.errors.country)}
          helperText={formik.touched.country && formik.errors.country}>
          {Object.entries(COUNTRIES).map(([code, info]) => (
            <MenuItem key={code} value={code}>{info.name}</MenuItem>
          ))}
        </TextField>
        {(checkExtraField('maritalStatus'))? (
          <TextField
            fullWidth
            name="maritalStatus"
            select
            label="Marital Status"
            value={formik.values.maritalStatus}
            onChange={formik.handleChange}
            error={formik.touched.maritalStatus && Boolean(formik.errors.maritalStatus)}
            helperText={formik.touched.maritalStatus && formik.errors.maritalStatus}>
            {MARITAL_STATUS.map((status) => (
              <MenuItem key={status} value={status}>{status}</MenuItem>
            ))}
          </TextField>
        ) : null}
        {(checkExtraField('socialInsuranceNumber'))? (
          <TextField
            fullWidth
            name='socialInsuranceNumber'
            label='Social Insurance Number'
            type='number'
            value={formik.values.socialInsuranceNumber}
            onChange={formik.handleChange}
            error={formik.touched.socialInsuranceNumber && Boolean(formik.errors.socialInsuranceNumber)}
            helperText={formik.touched.socialInsuranceNumber && formik.errors.socialInsuranceNumber}
          />
        ) : null}
        {(checkExtraField('numberOfChildren'))? (
        <TextField
          fullWidth
          name='numberOfChildren'
          label='Number of Children'
          type='number'
          value={formik.values.numberOfChildren}
          onChange={formik.handleChange}
          error={formik.touched.numberOfChildren && Boolean(formik.errors.numberOfChildren)}
          helperText={formik.touched.numberOfChildren && formik.errors.numberOfChildren}
        />
        ) : null}
        {(checkExtraField('workingHours'))? (
        <TextField
          fullWidth
          name='workingHours'
          label='Working Hours'
          type='number'
          value={formik.values.workingHours}
          onChange={formik.handleChange}
          error={formik.touched.workingHours && Boolean(formik.errors.workingHours)}
          helperText={formik.touched.workingHours && formik.errors.workingHours}
        />
        ) : null}
        <Button color='primary' variant='contained' fullWidth type='submit' className={classes.btn}>
          Add
        </Button>
      </form>
    </Container>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(3),
      '& form > *': {
        marginTop: theme.spacing(3)
      }
    },
    btn: {
      marginTop: 30,
      maxWidth: '10em'
    }
  })
)

export default EmployeeForm