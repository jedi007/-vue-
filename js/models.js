var DifficultyLv = 8;

var modelMatrixs = new Array();
var modelMatrixs0 = [   [[0,0,0,0],
					     [0,1,0,0],
					     [0,0,0,0],
					     [0,0,0,0]
					    ]
					];
var modelMatrixs1 = [   [[0,1,0,0],
					     [1,1,1,0],
					     [0,0,0,0],
					     [0,0,0,0]
					    ],
					    [[0,1,0,0],
					     [0,1,1,0],
					     [0,1,0,0],
					     [0,0,0,0]
					    ],
					    [[0,0,0,0],
					     [1,1,1,0],
					     [0,1,0,0],
					     [0,0,0,0]
					    ],
					    [[0,1,0,0],
					     [1,1,0,0],
					     [0,1,0,0],
					     [0,0,0,0]
					    ]
					];
var modelMatrixs2 = [   [[1,0,0,0],
					     [1,1,1,0],
					     [0,0,0,0],
					     [0,0,0,0]
					    ],
					    [[1,1,0,0],
					     [1,0,0,0],
					     [1,0,0,0],
					     [0,0,0,0]
					    ],
					    [[1,1,1,0],
					     [0,0,1,0],
					     [0,0,0,0],
					     [0,0,0,0]
					    ],
					    [[0,1,0,0],
					     [0,1,0,0],
					     [1,1,0,0],
					     [0,0,0,0]
					    ]
					];
var modelMatrixs3 = [   [[0,1,0,0],
					     [0,1,0,0],
					     [0,1,0,0],
					     [0,1,0,0]
					    ],
					    [[0,0,0,0],
					     [1,1,1,1],
					     [0,0,0,0],
					     [0,0,0,0]
					    ]
					];
var modelMatrixs4 = [   [[0,1,1,0],
					     [0,1,1,0],
					     [0,0,0,0],
					     [0,0,0,0]
					    ]
					];
var modelMatrixs5 = [   [[1,1,0,0],
					     [0,1,1,0],
					     [0,0,0,0],
					     [0,0,0,0]
					    ],
					    [[0,0,1,0],
					     [0,1,1,0],
					     [0,1,0,0],
					     [0,0,0,0]
					    ]
					];
var modelMatrixs6 = [   [[0,1,1,0],
					     [1,1,0,0],
					     [0,0,0,0],
					     [0,0,0,0]
					    ],
					    [[0,1,0,0],
					     [0,1,1,0],
					     [0,0,1,0],
					     [0,0,0,0]
					    ]
					];
modelMatrixs[0] = modelMatrixs0;
modelMatrixs[1] = modelMatrixs1;
modelMatrixs[2] = modelMatrixs2;
modelMatrixs[3] = modelMatrixs3;
modelMatrixs[4] = modelMatrixs4;
modelMatrixs[5] = modelMatrixs5;
modelMatrixs[6] = modelMatrixs6;

var createModel = function(){
	console.log("create new model");
	var obj = new Object();
	
	var indexi = Math.round(Math.random()*10*DifficultyLv)%DifficultyLv;
	if(indexi>7)
		indexi ++;
		
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