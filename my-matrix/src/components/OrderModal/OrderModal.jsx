// import React, { useEffect, useRef, useState } from 'react';
// import { Typography } from '@mui/material';
// import {
//   StyledClose, StyledOrderModal, StyledPromo, StyledOrderTitle,
// } from './styled';
// import { orderText } from '../../constants/constants';
// import OrderForm from '../OrderForm/OrderForm';

// const OrderModal = ({ handleClothe }) => {
//   const [timer, setTimer] = useState(59);
//   const [submitClicked, setSubmitClicked] = useState(false);
//   const {
//     timerOk, timerEnd, congratulationOk, congratulationEnd,
//   } = orderText;
//   const intervalIdRef = useRef();

//   useEffect(() => {
//     if (timer > 0) {
//       intervalIdRef.current = setInterval(() => {
//         setTimer((prevTime) => prevTime - 1);
//       }, 1000);
//     } else {
//       clearInterval(intervalIdRef.current);
//     }

//     return () => {
//       clearInterval(intervalIdRef.current);
//     };
//   }, [timer]);

//   const handleSubmission = () => {
//     setSubmitClicked(true);
//     clearInterval(intervalIdRef.current);
//   };

//   const congratulation = () => {
//     switch (true) {
//       case timer > 0:
//         return congratulationOk;
//       default:
//         return congratulationEnd;
//     }
//   };

//   return (
//     <StyledOrderModal className='styledBox' sx={{ width: 300 }}>
//       <StyledClose src='/static/images/close.png' alt="close" onClick={() => handleClothe()} />
//       {!submitClicked && (
//         <>
//           <StyledPromo>
//             {timer > 0
//               ? `Time left: ${Math.floor(timer / 60)}:${timer % 60}`
//               : 'The promotional offer has ended'
//             }
//           </StyledPromo>
//           <StyledOrderTitle>
//             {timer > 0 ? timerOk : timerEnd}
//           </StyledOrderTitle>
//           <OrderForm submission={handleSubmission} />

//         </>
//       )}
//       {submitClicked && (
//         <Typography variant="body1" color="primary">
//           {congratulation()}
//         </Typography>
//       )}
//     </StyledOrderModal>
//   );
// };

// export default OrderModal;
import React, { useEffect, useState, useRef } from 'react';
import { Typography } from '@mui/material';
import {
  StyledClose, StyledOrderModal, StyledPromo, StyledOrderTitle,
} from './styled';
import { orderText } from '../../constants/constants';
import OrderForm from '../OrderForm/OrderForm';

const OrderModal = ({ handleClothe }) => {
  const [timer, setTimer] = useState(() => {
    const storedTime = localStorage.getItem('timer');
    return storedTime ? parseInt(storedTime, 10) : 59;
  });

  const [submitClicked, setSubmitClicked] = useState(false);
  const {
    timerOk, timerEnd, congratulationOk, congratulationEnd,
  } = orderText;

  const intervalIdRef = useRef();

  useEffect(() => {
    if (timer > 0) {
      intervalIdRef.current = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(intervalIdRef.current);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [timer]);

  useEffect(() => {
    localStorage.setItem('timer', timer.toString());
  }, [timer]);

  const handleSubmission = () => {
    setSubmitClicked(true);
    clearInterval(intervalIdRef.current);
    localStorage.removeItem('timer');
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
      <StyledClose src='/static/images/close.png' alt="close" onClick={() => handleClothe()} />
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
