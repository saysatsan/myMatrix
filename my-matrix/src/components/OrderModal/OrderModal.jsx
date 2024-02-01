import React, { useEffect, useState } from 'react';
import { TextField, Typography } from '@mui/material';
import {
  StyledButton, StyledClose, StyledOrderModal, StyledPromo,
} from './styled';
import { StyledForm, StyledOrderTitle } from './styled';
import iconClose from '../BaseModal/images/icons8-close-45.png';
import { orderText } from '../../constants';

const OrderModal = ({ handleClothe }) => {
  const [timer, setTimer] = useState(59);
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    birthday: '',
  });
  const [submitClicked, setSubmitClicked] = useState(false);
  const {
    timerOk, timerEnd, congratulationOk, congratulationEnd,
  } = orderText;
  let intervalId;

  useEffect(() => {
    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmission = () => {
    setSubmitClicked(true);
    clearInterval(intervalId);
  };

  const congratulation = () => {
    switch (true) {
      case timer > 0:
        return congratulationOk;
      default:
        return congratulationEnd;
    }
  };

  const isSubmitDisabled = !formValues.name || !formValues.phone || !formValues.birthday;

  return (
    <StyledOrderModal className='styledBox' sx={{ width: 300 }}>
      <StyledClose src={iconClose} alt="close" onClick={() => handleClothe()} />
      <StyledPromo>
        {timer > 0
          ? `Time left: ${Math.floor(timer / 60)}:${timer % 60}`
          : 'The promotional offer has ended'
        }
      </StyledPromo>
      {!submitClicked && (
        <>
          <StyledOrderTitle>
            {timer > 0 ? timerOk : timerEnd}
          </StyledOrderTitle>

          <StyledForm>
            <TextField
              label="Name"
              id="outlined-size-normal"
              placeholder='Name'
              margin='normal'
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
            />
            <TextField
              label="Phone"
              id="outlined-size-normal"
              placeholder='Phone number'
              margin='normal'
              name="phone"
              value={formValues.phone}
              onChange={handleInputChange}
            />
            <TextField
              label="Birthday"
              id="outlined-size-normal"
              placeholder='Birthday'
              margin='normal'
              name="birthday"
              value={formValues.birthday}
              onChange={handleInputChange}
            />
            <StyledButton
              className='button'
              variant="contained"
              onClick={handleSubmission}
              disabled={isSubmitDisabled}
            >
              Submit
            </StyledButton>
          </StyledForm>
        </>
      )}
      {submitClicked && (
        <Typography variant="body1" color="primary">
          {congratulation()}
        </Typography>
      )}
    </StyledOrderModal>
  );
};

export default OrderModal;
