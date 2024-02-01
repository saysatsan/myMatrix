import React from 'react';
import { TextField } from '@mui/material';
import { StyledButton, StyledInputWrapper } from './styled';

const InputData = (
  {
    birthDate,
    birthMonth,
    birthYear,
    setBirthDate,
    setBirthMonth,
    setBirthYear,
    calculateDestinyMatrix,
  },
) => (
  <>
    <StyledInputWrapper>
      <TextField
        label="Day of Birth"
        color="secondary"
        focused
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <TextField
        label="Month of Birth"
        color="secondary"
        focused
        value={birthMonth}
        onChange={(e) => setBirthMonth(e.target.value)}
      />
      <TextField
        label="Year of Birth"
        color="secondary"
        focused
        value={birthYear}
        onChange={(e) => setBirthYear(e.target.value)}
      />
    </StyledInputWrapper>
    <StyledButton
      className='styledButton'
      variant='contained'
      onClick={calculateDestinyMatrix}
      disabled={birthDate === '' || birthMonth === '' || birthYear === ''}
    >
      Calculate
    </StyledButton>
  </>
);

export default InputData;
