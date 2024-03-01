import React, { useState } from 'react';
import { StyledNumbers, StyledNumber } from './styled';
import PopoverMatrix from '../PopoverMatrix/PopoverMatrix';

interface MatrixProps {
  results: number[];
}

const Matrix = ({ results }: MatrixProps): JSX.Element => {
  const [anchorEls, setAnchorEls] = useState<Array<HTMLInputElement | null>>(new Array(results.length).fill(null));

  const handelPopoverOpen = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEls((prevAnchorEls) => {
      const newAnchorEls = [...prevAnchorEls];
      newAnchorEls[index] = e.currentTarget as HTMLInputElement;
      return newAnchorEls;
    });
  };

  const handlePopoverClose = (index: number): void => {
    const newAnchorEls = [...anchorEls];
    newAnchorEls[index] = null;
    setAnchorEls(newAnchorEls);
  };

  return (
    <StyledNumbers className='matrixWrapper'>
      <img src='/static/images/matrix.png' alt='Matrix' />
      {results.length > 0 && (
        <div>
          {results.map((number, index) => (
            <>
              <React.Fragment key={number}>
              <StyledNumber
                className={`numberLi-${index}`}
                key={index}
                id={number.toString()}
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

              </React.Fragment>              
            </>
          ))}
        </div>
      )}
    </StyledNumbers>
  );
};

export default Matrix;
