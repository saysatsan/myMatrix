import React, { useState } from 'react';
import { StyledNumbers, StyledNumber } from './styled';
import ImageMatrix from './matrix.png';
import PopoverMatrix from '../PopoverMatrix/PopoverMatrix';

const Matrix = ({ results }) => {
  const [anchorEls, setAnchorEls] = useState(new Array(results.length).fill(null));

  const handelPopoverOpen = (index, e) => {
    setAnchorEls((prevAnchorEls) => {
      const newAnchorEls = [...prevAnchorEls];
      newAnchorEls[index] = e.currentTarget;
      return newAnchorEls;
    });
  };

  const handlePopoverClose = (index) => {
    const newAnchorEls = [...anchorEls];
    newAnchorEls[index] = null;
    setAnchorEls(newAnchorEls);
  };

  return (
    <StyledNumbers className='matrixWrapper'>
      <img src={ImageMatrix} alt='Matrix' />
      {results.length > 0 && (
        <div>
          {results.map((number, index) => (
            <>
              <StyledNumber
                className={`numberLi-${index}`}
                key={index}
                id={number}
                onClick={(e) => handelPopoverOpen(index, e)}
              >
                {number}
                <PopoverMatrix
                  index={index}
                  key={index}
                  id={number}
                  anchorEl={anchorEls[index]}
                  onClose={() => handlePopoverClose(index)}
                  open={Boolean(anchorEls[index])}
                />
              </StyledNumber>
            </>
          ))}
        </div>
      )}
    </StyledNumbers>
  );
};

export default Matrix;
