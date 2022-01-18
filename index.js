const tbody = document.getElementById("nbr-table-body");
const input = document.getElementById("input-nbr");
const select = document.getElementById("select-base");
const btn = document.getElementById("btn-add");

const from = 1;
const to = 5;
const decimalNumbers = Array.from({ length: to - from + 1 }, (_, i) => from + i);

const rows = decimalNumbers.reduce((curr, x) => curr + createRow(x), '');
tbody.innerHTML = rows;

btn.addEventListener('click', () => {
	const nbr = input.value;
  const base = parseInt(select.value);
  tbody.innerHTML += createRow(nbr, base);
});

function createRow(numberStr, base) {
	const nbr = parseInt(numberStr, base);
	return `<tr>
  	<td class="binary">${nbr.toString(2)}</td>
  	<td class="decimal">${nbr.toString(10)}</td>
    <td class="hexa">${nbr.toString(16)}</td>
	</tr>`;
}