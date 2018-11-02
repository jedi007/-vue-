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
var modelMatrixs3 = [   [[0,0,1,0],
					     [1,1,1,0],
					     [0,0,0,0],
					     [0,0,0,0]
					    ],
					    [[0,1,1,0],
					     [0,0,1,0],
					     [0,0,1,0],
					     [0,0,0,0]
					    ],
					    [[1,1,1,0],
					     [1,0,0,0],
					     [0,0,0,0],
					     [0,0,0,0]
					    ],
					    [[1,0,0,0],
					     [1,0,0,0],
					     [1,1,0,0],
					     [0,0,0,0]
					    ]
					];
var modelMatrixs4 = [   [[0,1,0,0],
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
var modelMatrixs5 = [   [[0,1,1,0],
					     [0,1,1,0],
					     [0,0,0,0],
					     [0,0,0,0]
					    ]
					];
var modelMatrixs6 = [   [[1,1,0,0],
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
var modelMatrixs7 = [   [[0,1,1,0],
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
modelMatrixs[7] = modelMatrixs7;
//以上是基础难度模块

var cellWidth = 40;
var cellHeight = 40;

var gsMatrixRows = 20;
var gsMatrixCols = 10;

var FreefallID;
var FallSpeed = 800;

var doneMatrix = new Array();

var isover = false;