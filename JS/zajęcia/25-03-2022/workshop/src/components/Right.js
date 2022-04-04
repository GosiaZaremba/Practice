import { useEffect, useState } from "react";

function Right() {
    const [numbers, setNumbers] = useState({ num1: 1, num2: 2 });
    const [isTrue, setIsTrue] = useState(true);

    let SumOfNumbers = 0;
    const calcSum = (numbers) => SumOfNumbers = numbers.num1 + numbers.num2;
    calcSum(numbers);

    // const useEffect = (() => {
    //     const timer = setTimeout(() => calcSum, 3000);
    //     return () => clearTimeout(timer);
    // }, [])

    return (
        <div>

            {isTrue == true ? SumOfNumbers : null}

        </div>
    );
}

export default Right;
