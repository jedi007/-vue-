var cellWidth = 40;
var cellHeight = 40;

var gsMatrixRows = 20;
var gsMatrixCols = 10;

var doneMatrix = new Array();
for(var i = 0;i < gsMatrixRows;i++)
{
	doneMatrix[i] = new Array();
	for(var j = 0;j<gsMatrixCols;j++)
	{
		doneMatrix[i][j] = 0;
	}
}

var initGamediv = function (){
	var html = $("#gamediv").html();
	for(var i = 0;i < gsMatrixRows;i++)
	{
		for(var j = 0;j<gsMatrixCols;j++)
		{
			html += '<div :class="(nowarray['+i+']['+j+'] || currentmodel.transform('+i+','+j+'))? \'pixelmodel1\' : \'pixelmodel0\' " ' +
					':style="{top:cellHeight*'+i+'+\'px\', left:cellWidth*'+j+'+\'px\', '+
					'width:cellWidth+\'px\', height:cellHeight+\'px\'}"></div>';
		}
	}
	$("#gamediv").html(html);
}

var initNextdiv = function(){
	var html2 = $("#nextdiv").html();
	for(var i = 0;i < 4;i++)
	{
		for(var j = 0;j<4;j++)
		{
			html2 += '<div :class="nextmodel.transform('+i+','+j+')? \'pixelmodel1\' : \'pixelmodel0\' " ' +
					':style="{top:cellHeight*'+i+'+\'px\', left:500+cellWidth*'+j+'+\'px\', '+
					'width:cellWidth+\'px\', height:cellHeight+\'px\'}"></div>';
		}
	}
	$("#nextdiv").html(html2);
}

var app,appnext;
$(function(){
	initGamediv();
	initNextdiv();
	
    app = new Vue({
        el: '#gamediv',
        data: {
        	currentmodel:createModel(),
        	nowarray:doneMatrix,
        	cellWidth:cellWidth,
        	cellHeight:cellHeight,
        	gsMatrixRows:gsMatrixRows,
        	gsMatrixCols:gsMatrixCols
        	
        }
        
    });
    
    appnext = new Vue({
        el: '#nextdiv',
        data: {
        	nextmodel:createModel(),
        	cellWidth:cellWidth,
        	cellHeight:cellHeight,
        	gsMatrixRows:gsMatrixRows,
        	gsMatrixCols:gsMatrixCols
        	
        }
        
    });
});