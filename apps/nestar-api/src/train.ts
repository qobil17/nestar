/**MIT TASKS */
//TASK-ZQ

function findDuplicates(arr: number[]): number[] {
	const countMap = new Map<number, number>();
	const result: number[] = [];

	for (const num of arr) {
		countMap.set(num, (countMap.get(num) || 0) + 1);
	}

	for (const [num, count] of countMap.entries()) {
		if (count >= 2) {
			result.push(num);
		}
	}

	return result;
}

console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4]));

//TASK-ZP

// function areArraysEqual(arr1: any[], arr2: any[]): boolean {
// 	const set1 = new Set(arr1);
// 	const set2 = new Set(arr2);

// 	if (set1.size !== set2.size) return false;

// 	for (const value of set1) {
// 		if (!set2.has(value)) return false;
// 	}

// 	return true;
// }
// console.log(areArraysEqual([1, 2, 3], [3, 1, 2]));
// console.log(areArraysEqual([1, 2, 3], [3, 1, 2, 1]));
// console.log(areArraysEqual([1, 2, 3], [4, 1, 2]));

//TASK-ZO

// function areParenthesesBalanced(input: string): boolean {
// 	let balance = 0;

// 	for (const char of input) {
// 		if (char === '(') {
// 			balance++;
// 		} else if (char === ')') {
// 			balance--;
// 			if (balance < 0) return false;
// 		}
// 	}

// 	return balance === 0;
// }

// console.log(areParenthesesBalanced('string()ichida(qavslar)soni()balansda'));

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
