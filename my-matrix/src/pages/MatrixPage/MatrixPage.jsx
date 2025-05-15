import React, { useState } from 'react';
import { StyledWrapper } from './styled';
import Matrix from '../../components/Matrix/Matrix';
import InputData from '../../components/InputData/InputData';

const MatrixPage = () => {
  const [birthDate, setBirthDate] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [results, setResults] = useState([]);

  const calculateSingleDigit = (input) => {
    const sum = input.toString();
    if (sum > 22) {
      const result = sum.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
      return result;
    }
    return sum;
  };

  const inputClear = () => {
    setBirthDate('');
    setBirthMonth('');
    setBirthYear('');
  };
  const calculateDestinyMatrix = () => {
    const dateDigits = calculateSingleDigit(birthDate.replace(/\D/g, ''));
    const monthDigit = calculateSingleDigit(birthMonth);
    const yearDigits = calculateSingleDigit(birthYear.replace(/\D/g, ''));

    const A1 = parseInt(dateDigits, 10);
    const B1 = parseInt(monthDigit, 10);
    const C1 = parseInt(yearDigits, 10);
    const D1 = parseInt(calculateSingleDigit(A1 + B1 + C1), 10);
    const E1 = parseInt(calculateSingleDigit(D1 + A1 + B1 + C1), 10);

    const newResults = [A1, B1, C1, D1, E1];

    setResults(newResults);

    inputClear();
  };

  return (
    <StyledWrapper data-testid='matrixWrapper'>
      <h2>Destiny Matrix Calculator</h2>
      <InputData
        birthDate={birthDate}
        birthMonth={birthMonth}
        birthYear={birthYear}
        setBirthDate={setBirthDate}
        setBirthMonth={setBirthMonth}
        setBirthYear={setBirthYear}
        calculateDestinyMatrix={calculateDestinyMatrix}
      />
      <Matrix
        results={results}
      />
    </StyledWrapper>
  );
};

export default MatrixPage;
