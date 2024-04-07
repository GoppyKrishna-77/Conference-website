const tablecontainer = document.getElementById("TableContainer");
tablecontainer.textContent = "";
var table = document.createElement("table");
table.classList.add("mt-4");
const btntop = document.getElementById("btntop");
var headerRow = document.createElement("tr");
headerRow.style.color = "#2B4E8E";
headerRow.style.backgroundColor = "#ECF9FF";

var headerCells = ["S.no", "Name", "Designation", "Affiliation", "Photograph"];
headerCells.forEach(function (cellText) {
	var th = document.createElement("th");
	th.textContent = cellText;
	headerRow.appendChild(th);
});

table.appendChild(headerRow);

var rowData = [
	["xxx", "Dr. xxx", "xxx", "xxx"],
	["xxx", "Dr. xxx", "xxx", "xxx"],
	["xxx", "Dr. xxx", "xxx", "xxx"],
	["xxx", "Dr. xxx", "xxx", "xxx"],
	["xxx", "Dr. xxx", "xxx", "xxx"],
	["xxx", "Dr. xxx", "xxx", "xxx"],
];

rowData.forEach(function (rowDataItem) {
	var row = document.createElement("tr");
	rowDataItem.forEach(function (cellData) {
		var td = document.createElement("td");
		td.textContent = cellData;
		row.appendChild(td);
	});
	var imgCell = document.createElement("td");
	var img = document.createElement("img");
	img.src =
		"https://imgs.search.brave.com/Q4bL_yMEAbXiFCo2MCwZ4wHEa5PwxrArKnfgEBhrCTU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODVlNGJmM2NiMTFi/MjI3NDkxYzMzOWEu/cG5n";
	img.classList.add("photo");
	imgCell.appendChild(img);
	row.appendChild(imgCell);

	table.appendChild(row);
});

tablecontainer.appendChild(table);

function table1() {
	tablecontainer.textContent = "";
	var table = document.createElement("table");
	table.classList.add("mt-4");

	var headerRow = document.createElement("tr");
	headerRow.style.color = "#2B4E8E";
	headerRow.style.backgroundColor = "#ECF9FF";

    var tableTitle = document.getElementById("table-title");

	var headerCells = [
		"S.no",
		"Name",
		"Designation",
		"Affiliation",
		"Photograph",
	];
	headerCells.forEach(function (cellText) {
		var th = document.createElement("th");
		th.textContent = cellText;
		headerRow.appendChild(th);
	});

	table.appendChild(headerRow);

	var rowData = [
		["xxx", "Dr. xxx", "xxx", "xxx"],
		["xxx", "Dr. xxx", "xxx", "xxx"],
		["xxx", "Dr. xxx", "xxx", "xxx"],
		["xxx", "Dr. xxx", "xxx", "xxx"],
		["xxx", "Dr. xxx", "xxx", "xxx"],
		["xxx", "Dr. xxx", "xxx", "xxx"],
	];

	rowData.forEach(function (rowDataItem) {
		var row = document.createElement("tr");
		rowDataItem.forEach(function (cellData) {
			var td = document.createElement("td");
			td.textContent = cellData;
			row.appendChild(td);
		});
		var imgCell = document.createElement("td");
		var img = document.createElement("img");
		img.src =
			"https://imgs.search.brave.com/Q4bL_yMEAbXiFCo2MCwZ4wHEa5PwxrArKnfgEBhrCTU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODVlNGJmM2NiMTFi/MjI3NDkxYzMzOWEu/cG5n";
		img.classList.add("photo");
		imgCell.appendChild(img);
		row.appendChild(imgCell);

		table.appendChild(row);
	});

	tablecontainer.appendChild(table);

    tableTitle.innerHTML = "Organizing Committee";
}

function table2() {
	tablecontainer.textContent = "";
	var table = document.createElement("table");
	table.classList.add("mt-4");

	var headerRow = document.createElement("tr");
	headerRow.style.color = "#2B4E8E";
	headerRow.style.backgroundColor = "#ECF9FF";

    var tableTitle = document.getElementById("table-title");

	var headerCells = [
		"S.no",
		"Name",
		"Designation",
		"Affiliation",
		"Photograph",
	];
	headerCells.forEach(function (cellText) {
		var th = document.createElement("th");
		th.textContent = cellText;
		headerRow.appendChild(th);
	});

	table.appendChild(headerRow);

	var rowData = [
		["yyy", "Dr. yyy", "yyy", "yyy"],
		["yyy", "Dr. yyy", "yyy", "yyy"],
		["yyy", "Dr. yyy", "yyy", "yyy"],
		["yyy", "Dr. yyy", "yyy", "yyy"],
		["yyy", "Dr. yyy", "yyy", "yyy"],
		["yyy", "Dr. yyy", "yyy", "yyy"],
	];

	rowData.forEach(function (rowDataItem) {
		var row = document.createElement("tr");
		rowDataItem.forEach(function (cellData) {
			var td = document.createElement("td");
			td.textContent = cellData;
			row.appendChild(td);
		});
		var imgCell = document.createElement("td");
		var img = document.createElement("img");
		img.src =
			"https://imgs.search.brave.com/Q4bL_yMEAbXiFCo2MCwZ4wHEa5PwxrArKnfgEBhrCTU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODVlNGJmM2NiMTFi/MjI3NDkxYzMzOWEu/cG5n";
		img.classList.add("photo");
		imgCell.appendChild(img);
		row.appendChild(imgCell);
		table.appendChild(row);
	});

	tablecontainer.appendChild(table);

    tableTitle.innerHTML = "International Co-ordinators";
}
