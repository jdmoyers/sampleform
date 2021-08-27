import { FC, FormEvent, ChangeEvent, useState } from 'react';
import Box from '../Components/Box';
import Button from '../Components/Button';
import ButtonRow from '../Components/ButtonRow';
import ErrorMessage from '../Components/ErrorMessage';
import FormField from '../Components/FormField';
import { validateField } from '../Utils/validateField';

const Register: FC = () => {
  const initialState = {
    firstName: { value: '', valid: true },
    lastName: { value: '', valid: true },
    email: { value: '', valid: true },
    username: { value: '', valid: true },
    password: { value: '', valid: true },
    invalid: false,
  };

  const [formState, setFormState] = useState(initialState);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type } = event.target;

    if (validateField(type, value)) {
      setFormState({ ...formState, [name]: { value, valid: true } });
    } else {
      setFormState({ ...formState, [name]: { value, valid: false } });
    }
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { firstName, lastName, email, username, password } = formState;

    if (firstName.valid && lastName.valid && email.valid && username.valid && password.valid) {
      setFormState({ ...formState, invalid: false });
      alert('Form valid, submitting');
      console.log('formData', formState);
    } else {
      setFormState({ ...formState, invalid: true });
    }
  };

  return (
    <Box>
      <h1>Register</h1>

      <form id="register" onSubmit={submitHandler}>
        <FormField
          fieldData={{
            name: 'firstName',
            label: 'First Name',
            type: 'text',
            value: formState.firstName.value,
            required: true,
            errorMessage: 'First Name is required.',
            valid: formState.firstName.valid,
            changeHandler,
          }}
        />

        <FormField
          fieldData={{
            name: 'lastName',
            label: 'Last Name',
            type: 'text',
            value: formState.lastName.value,
            required: true,
            errorMessage: 'Last Name is required.',
            valid: formState.lastName.valid,
            changeHandler,
          }}
        />

        <FormField
          fieldData={{
            name: 'email',
            label: 'Email Address',
            type: 'email',
            value: formState.email.value,
            required: true,
            errorMessage: 'Please enter a valid email address.',
            valid: formState.email.valid,
            changeHandler,
          }}
        />

        <FormField
          fieldData={{
            name: 'username',
            label: 'Username',
            type: 'text',
            value: formState.username.value,
            required: true,
            errorMessage: 'Username is required.',
            valid: formState.username.valid,
            changeHandler,
          }}
        />

        <FormField
          fieldData={{
            name: 'password',
            label: 'Password',
            type: 'password',
            value: formState.password.value,
            required: true,
            errorMessage: 'Password must be at least 8 characters.',
            valid: formState.password.valid,
            changeHandler,
          }}
        />

        {formState.invalid && (
          <ErrorMessage aria-live="assertive">Please correct any errors then try again.</ErrorMessage>
        )}

        <ButtonRow>
          <Button type="submit">Register</Button>
        </ButtonRow>
      </form>
    </Box>
  );
};

export default Register;
