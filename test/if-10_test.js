const MonthName = require('../if-10.js');

QUnit.test("ЗАДАЧА 10.", 
  function(assert){
	assert.deepEqual(MonthName(1),'январь','ошибка!');
	assert.deepEqual(MonthName(2),'февраль','ошибка!');
	assert.deepEqual(MonthName(3),'март','ошибка!');
	assert.deepEqual(MonthName(4),'апрель','ошибка!');
	
  }
);
