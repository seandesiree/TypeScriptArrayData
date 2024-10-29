import React from 'react';

const filterNumbers = (numbers: number[]): number[] => {
    return numbers.filter(num => num % 2 === 0);
};

const EvenNumbers: React.FC = () => {
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNumbers: number[] = filterNumbers(numbers);
    
    return (
        <div>
            <h2>Even Numbers</h2>
            <ul>
                {evenNumbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
        </div>
    );
};

export default EvenNumbers;