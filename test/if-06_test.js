const f = require('../if-06.js');

QUnit.test("ЗАДАЧА 06. f(k, b, R) === Количество точек пересечения прямой y=kx+b и окружности x^2+y^2=R^2", 
	function(assert){
		assert.deepEqual(f(1, -1, 1), 2, "Не выполнено f(1, -1, 1) Прямая пересекает окружность в двух точках");
		assert.deepEqual(f(5, -3, 1), 2, "Не выполнено f(5, -3, 1) Прямая пересекает окружность в одной точке");
		assert.deepEqual(f(0, 1, 1), 1, "Не выполнено f(2, 3, 1) Прямая пересекает окружность в одной точке");
		assert.deepEqual(f(0, -1, 1), 1, "Не выполнено f(2, 3, 1) Прямая пересекает окружность в одной точке");
		assert.deepEqual(f(2, -4, 1), 0, "Не выполнено f(2, -4, 1) Прямая не пересекает окружность");
		assert.deepEqual(f(2, 3, 1), 0, "Не выполнено f(2, 3, 1) Прямая не пересекает окружность");
	}
);
