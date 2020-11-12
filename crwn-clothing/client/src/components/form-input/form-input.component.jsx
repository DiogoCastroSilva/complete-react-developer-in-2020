import React from 'react';

import {
    FormInputContainer,
    InputContainer,
    FormInputLabel
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <FormInputContainer>
        <InputContainer
            className='form-input'
            onChange={handleChange}
            {...otherProps}
        />
        {
            label ? (
                <FormInputLabel
                    className={`${otherProps.value ? 'shrink' : ''} form-input-label`}
                >
                    {label}
                </FormInputLabel>
            ) : null
        }
    </FormInputContainer>
);

export default FormInput;