
function CheckCouldMove(model, x, y){
	
	let len = model.data.length;
	let mx = model.origin['x'] + x;
	let my = model.origin['y'] + y;
	
	for(var i = 0; i < len; i++)
	{
		for(var j =0; j < len; j++)
		{
			if(model.data[i][j] == 1)
			{
				if(i+mx < 0 || i+mx >= gsMatrixRows)//上下边界检测
				{
					return false;
				}
				if(j+my < 0 || j+my >= gsMatrixCols)//左右边界检测
				{
					return false;
				}
				if(doneMatrix[i+mx][j+my] == 1)//点位是否已被占领的检测
				{
					return false;
				}
			}
		}
	}
	
	return true;
}

function uptoDoneMatrix(model){
	let len = model.data.length;
	let mx = model.origin['x'];
	let my = model.origin['y'];
	
	for(var i = 0; i < len; i++)
	{
		for(var j =0; j < len; j++)
		{
			if(model.data[i][j] == 1)
			{
				doneMatrix[i+mx][j+my] = 1
			}
		}
	}
}
