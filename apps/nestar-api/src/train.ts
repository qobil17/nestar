function printNumbers(): void {
	let count = 1;

	const intervalId = setInterval(() => {
		console.log(count);
		count++;

		if (count > 5) {
			clearInterval(intervalId);
		}
	}, 5000);
}

printNumbers();
