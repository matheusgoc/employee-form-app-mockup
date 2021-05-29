# Employee Form App
_version: 1.0.0_

A mockup of employee form application to demonstrate 
the implementation of a dynamic form using React JS 
integrated with Material-UI and Formik libraries

## Running

### `npm start`

The server will be available at [http://localhost:3000](http://localhost:3000)

## Stack

| Libraries                                                         | Versions    |
| ----------------------------------------------------------------- | ----------- |
| [ReactJS](https://reactjs.org/)                                   | ^17.0.2     |
| [TypeScript](https://www.typescriptlang.org/)                     | ^4.3.2      |
| [Material-UI](https://material-ui.com/)                           | ^4.11.4     |
| [Formik](https://formik.org/)                                     | ^2.2.8      |

## Proposal

### Perspective

The current version of this app address only the creation of employee, although it could be easily adapted to include
the editing too. It adds separated layers for models, whole features, and components. 
There are two entities CountryCriteria and Employee which is defined as models.

The usage of Material-UI in combination with Formik libraries makes the implementation of dynamic forms more concise 
and simple. It works by defining separately the characteristics of each country since the forms changes according to 
the country. Thus, whenever the country is changed, the EmployeeForm checks for the criteria according to the country 
and change the form and its validation based on that.

### Improvements

This app could be evolved to a much large one by covering all the aspects of employee resource itself and their
associations. First, the employee feature could be completed by implementing the list, delete, and edit capabilities.
Also, many other resources associated to it could be managed, such as the roles, departments, payroll, time sheet and 
benefits having a complete employee management system. Moreover, it could aggregate many other aspects of the company.

Once the API web service was enable to be consumed, a recommended approach would be added a service layer that 
would take care of transactions between the app and the server. It would use a client library such as Axios. 
Moreover, for persistence and flexibility of data, the Redux and Redux-persistence libraries would be also handy 
since the data could be stored at the local storage and manipulated anywhere in the app. 

The employee data is indeed sensitive, so that it should not be accessed by anyone. Therefore, an authentication 
layer must be implemented. It should follow the Web Service API architecture determination. Even though, knowing 
that the standards is to use OAuth2 or JWT, it could be implemented with Axios client library by 
creating a middleware to intercept each request and add the Authorization passing by the token.

For the last, once grown, this app would have other addresses routes to be handled. Thus, React Router library is
good solution for this.

### Conclusion

It is a fact that this app would not be limited by just adding employees. It could cover the whole employee
CRUD resource and beyond. Therefore, many structural aspects should be considered including adding a 
service layer, context libraries such as Redux, and a http client such Axios implementing 
an authentication middleware.



