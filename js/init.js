var cellWidth = 40;
var cellHeight = 40;


var currentarray = [];
for(var i = 0; i < 20; i++)
{
	var temparray = [];
	for( var j = 0; j < 10; j++)
	{
		temparray.push(0)
	}
	currentarray.push(temparray);
}

var initGamediv = function (){
	console.log("initGamediv is called");
	var html = $("#gamediv").html();
	for(var i = 0;i < 20;i++)
	{
		for(var j = 0;j<10;j++)
		{
			html += '<div :class="nowarray['+i+']['+j+'] ? \'pixelmodel1\' : \'pixelmodel0\' " ' +
					':style="{top:cellHeight*'+i+'+\'px\', left:cellWidth*'+j+'+\'px\', '+
					'width:cellWidth+\'px\', height:cellHeight+\'px\'}"></div>';
		}
	}
	$("#gamediv").html(html);
}