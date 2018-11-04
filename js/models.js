
var createModel = function(){
	console.log("create new model");
	var obj = new Object();
	
	var indexi;
	console.log("test ---------- : " + typeof(app));
	if( typeof(app) == "undefined")
		indexi = Math.round(Math.random()*100*DifficultyLv)%DifficultyLv;
	else
	{
		indexi = Math.round(Math.random()*100*app.difficutyLv.value)%app.difficutyLv.value;
		console.log("test ---------- diflv : " + app.difficutyLv.value);
	}
		
	
		
	obj.indexi = indexi;
	obj.indexm = 0;
	obj.data = modelMatrixs[obj.indexi][obj.indexm];
	obj.origin = {x:0,y:3}
	
	obj.exchange = function(step){
		var len = modelMatrixs[this.indexi].length;
		this.indexm = (this.indexm + step + len)%len;//括号中再加一个len，防止余数出现负数
		console.log(this.indexm);
		this.data = modelMatrixs[this.indexi][this.indexm];
	}
	
	obj.transform = function(i ,j){
		var row = i - this.origin['x'];
		var col = j - this.origin['y'];
		var len = this.data.length;
		if(0 <= col && col < len && 0 <= row && row < len)
		{
			return this.data[row][col];
		}
		return false;
	}
	
	return obj;
}