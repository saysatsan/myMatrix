import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  FormControl, InputLabel, MenuItem, TextField,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { StyledButton, StyledForm } from '../OrderModal/styled';
import orderRules from '../../constants/rules';
import StyleSelect from './styled';
import userThunk from '../../store/sources/users/thunks';

const OrderForm = ({ submission }) => {
  const { control, handleSubmit } = useForm();
  const [gender, setGender] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const onSubmit = (data) => {
    dispatch(userThunk.createUser(data));
  };

  return (
    <StyledForm>
      <Controller
        name='name'
        control={control}
        rules={orderRules.name}
        defaultValue={''}
        render={({ field, fieldState: { error } }) => (
          <TextField
            label='Name'
            placeholder='Name'
            margin='normal'
            error={!!error}
            helperText={error ? error.message : null}
            {...field}
          />
        )}
      />
      <Controller
        name='lastname'
        control={control}
        rules={orderRules.lastname}
        defaultValue={''}
        render={({ field, fieldState: { error } }) => (
          <TextField
            label='Lastname'
            placeholder='lastname'
            margin='normal'
            error={!!error}
            helperText={error ? error.message : null}
            {...field}
          />
        )}
      />
      <Controller
        name='phone'
        control={control}
        rules={orderRules.phone}
        render={({ field, fieldState: { error } }) => (
          <TextField
            label='Phone'
            id='outlined-size-normal'
            placeholder='Phone number'
            margin='normal'
            error={!!error}
            helperText={error ? error.message : ''}
            {...field}
          />
        )}
      />
      <Controller
        name='birthday'
        control={control}
        rules={orderRules.birthday}
        defaultValue={''}
        render={({ field, fieldState: { error } }) => (
          <TextField
            label='Birthday'
            id='outlined-size-normal'
            placeholder='Birthday'
            margin='normal'
            error={!!error}
            helperText={error ? error.message : ''}
            {...field}
          />
        )}
      />
      <Controller
        name='gender'
        control={control}
        defaultValue={''}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <StyleSelect
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label='Gender'
              margin='normal'
              value={gender}
              onChange={handleChange}
              {...field}
            >
              <MenuItem value="female">female</MenuItem>
              <MenuItem value="male">male</MenuItem>
            </StyleSelect>
          </FormControl>
        )}
      />
      <StyledButton
        className='button'
        variant='contained'
        onClick={() => {
          handleSubmit((data) => {
            onSubmit(data);
            submission();
          })();
        }}
      >
        Submit
      </StyledButton>
    </StyledForm>
  );
};

export default OrderForm;
