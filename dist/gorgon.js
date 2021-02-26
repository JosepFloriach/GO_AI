var winW = document.body.scrollWidth * 1.0;
var winH = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

function add_stone()
{
	console.log("CLICKED");
}

function create_board()
{
	var boardContainer = document.getElementsByClassName("boardcontainer")[0];
	for (var rowsIndex = 0; rowsIndex < 15; ++rowsIndex)
	{
		var divRow = document.createElement("tr");
		divRow.classList.add("row");
		for (var colsIndex = 0; colsIndex < 15; ++colsIndex)
		{
			var intersection = document.createElement("img");
			intersection.classList.add("intersection");
			intersection.src = "assets/common_intersection.png";
			intersection.onclick = function(){
				add_stone();
			}
			var cell = document.createElement("th");
			
			cell.appendChild(intersection);
			cell.classList.add("cell");
			divRow.appendChild(cell);
			
		}
		boardContainer.appendChild(divRow);
	}
}

function main() 
{
	create_board();	
}

window.onload = main;