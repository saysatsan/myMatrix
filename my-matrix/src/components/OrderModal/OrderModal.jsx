import React, { useRef, useState } from 'react';
import { Typography } from '@mui/material';
import {
  StyledClose, StyledOrderModal, StyledPromo, StyledOrderTitle,
} from './styled';
import { orderText } from '../../constants/constants';
import OrderForm from '../OrderForm/OrderForm';

const OrderModal = ({ handleClothe }) => {
  const [timer, setTimer] = useState(59);
  const [submitClicked, setSubmitClicked] = useState(false);
  const {
    timerOk, timerEnd, congratulationOk, congratulationEnd,
  } = orderText;
  let intervalId;

  useRef(() => {
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

  return (
    <StyledOrderModal className='styledBox' sx={{ width: 300 }}>
      <StyledClose src='/static/images/icons8-close-45.png' alt="close" onClick={() => handleClothe()} />
      {!submitClicked && (
        <>
          <StyledPromo>
            {timer > 0
              ? `Time left: ${Math.floor(timer / 60)}:${timer % 60}`
              : 'The promotional offer has ended'
            }
          </StyledPromo>
          <StyledOrderTitle>
            {timer > 0 ? timerOk : timerEnd}
          </StyledOrderTitle>
          <OrderForm submission={handleSubmission} />

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
