function check() {
	let myMatrix = document.getElementById("input").value.split("\n");
	let matrixWidth = myMatrix[0].split(" ").length;
	let checked = 0;

	for (let i = 0; i < myMatrix.length; i++) {
		let split = myMatrix[i].split(" ");

		for (let j = 0; j < split.length; j++) {
			if(!(split[j] == 0 || split[j] == 1)) {
				checked = 1;
			}
		}

		if(split.length != matrixWidth) {
			checked = 2;
		}
	}

	if (checked == 0) {
		let checkY = true;
		for (let i = 0; i < myMatrix.length; i++) {
			let checkX = 0;
			let split = myMatrix[i].split(" ");
			for (let j = 0; j < matrixWidth; j++) {
				if (split[j] == 1) {
					checkX++;
				}
			}

			if (checkX != 1) {
				checkY = false;
			}
			if (checkY) {
				document.getElementById("result").innerHTML = "Да, матрица является функцией.";
			}
			else {
				document.getElementById("result").innerHTML = "Нет, матрица не является функцией.";
			}
		}
		}
		else if (checked == 1) {
			alert("В матрице не может быть элементов, отличных от нуля или единицы!")
		}
		else {
			alert("Матрица не прямоугольная!")
		}
	}