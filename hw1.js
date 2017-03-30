function newGame() {
	let weapons = ['rock', 'paper', 'scissors'];

	let weaponOfChoice = function() {
		return weapons[parseInt(Math.random() * weapons.length) % 3]
	};

	let p1Wins = 0;
	let p2Wins = 0;

	while (p1Wins < 3 && p2Wins < 3) {
		let p1Weapon, p2Weapon;
		p1Weapon = weaponOfChoice();
		p2Weapon = weaponOfChoice();
		console.log('P1 Score: ', p1Wins);
		console.log('P2 Score: ', p2Wins);

		switch (p1Weapon) {
			case 'rock':
				if (p2Weapon === 'rock') {
					console.log('No body won');
				} else if (p2Weapon === 'paper') {
					console.log('p2 Won!')
					p2Wins++
				} else if (p2Weapon == 'scissors') {
					console.log('p1 Wins');
					p1Wins++
				}
				break;
			case 'paper':
				if (p2Weapon === 'rock') {
					console.log('p1 Won');
					p1Wins++
				} else if (p2Weapon === 'paper') {
					console.log('No body won')
				} else if (p2Weapon == 'scissors') {
					console.log('p2 Wins');
					p2Wins++
				}
				break;
			case 'scissors':
				if (p2Weapon === 'rock') {
					console.log('p2 Won');
					p2Wins++
				} else if (p2Weapon === 'paper') {
					console.log('p1 Won')
					p1Wins++
				} else if (p2Weapon == 'scissors') {
					console.log('No body won');
					p2Wins++
				}
				break;
			default:
				console.log('No case was hit!!!')
		}
	}

	if (p1Wins > 2) {
		console.log('P1 Won with a score of ' + p1Wins + ' to ' + p2Wins);
	} else if (p2Wins > 2) {
		console.log('P2 Won with a score of ' + p2Wins + ' to ' + p1Wins);
	}
}
