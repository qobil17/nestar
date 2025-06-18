//TASK-ZO

function areParenthesesBalanced(input: string): boolean {
	let balance = 0;

	for (const char of input) {
		if (char === '(') {
			balance++;
		} else if (char === ')') {
			balance--;
			if (balance < 0) return false;
		}
	}

	return balance === 0;
}

console.log(areParenthesesBalanced('string()ichida(qavslar)soni()balansda'));

//TASK-ZN

// function rotateArray(arr: number[], index: number): number[] {
// 	const before = arr.slice(0, index);
// 	const after = arr.slice(index);
// 	return after.concat(before);
// }

// const natija = rotateArray([1, 2, 3, 4, 5, 6], 3);
// console.log(natija);

//TASK-ZL

// function stringToKebab(str: string): string {
// 	return str.toLowerCase().trim().replace(/\s+/g, '-');
// }

// console.log(stringToKebab('Oldiingi Dars Taski Pasda. Uzur'));

//TASK-ZM

// function reverseInteger(num: number): number {
// 	const reversed = num.toString().split('').reverse().join('');
// 	return parseInt(reversed);
// }

// console.log(reverseInteger(123456789));

//TASK-ZK

// function printNumbers(): void {
// 	let count = 1;

// 	const intervalId = setInterval(() => {
// 		console.log(count);
// 		count++;

// 		if (count > 5) {
// 			clearInterval(intervalId);
// 		}
// 	}, 5000);
// }

// printNumbers();
