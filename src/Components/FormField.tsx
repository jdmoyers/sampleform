import { FC, ChangeEvent } from 'react';
import InputRow from './InputRow';
import InputText from './InputText';
import Label from './Label';
import ValidationMessage from './ValidationMessage';
import { lightTheme } from '../theme';

interface FormInput {
  name: string;
  value: string;
  errorMessage: string | boolean;
  valid: boolean;
  label: string;
  type: 'number' | 'text' | 'email' | 'password';
  required: boolean;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormField: FC<{ fieldData: FormInput }> = ({ fieldData }) => {
  return (
    <InputRow>
      <Label htmlFor={`${fieldData.name}`}>{fieldData.label}</Label>

      <InputText
        type={`${fieldData.type}`}
        name={`${fieldData.name}`}
        id={`${fieldData.name}`}
        aria-describedby={!fieldData.valid ? `${fieldData.name}Validation` : undefined}
        value={fieldData.value}
        required={fieldData.required}
        onChange={fieldData.changeHandler}
      />

      <ValidationMessage id={`${fieldData.name}Validation`}>
        {!fieldData.valid && fieldData.errorMessage}
      </ValidationMessage>
    </InputRow>
  );
};

export default FormField;
