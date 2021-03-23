'use strict';

const table = document.querySelector('table');

if (table) {
  const rows = table.rows;
  const indexToClone = 1;

  for (const row of rows) {
    const rowCells = [...row.cells];
    const indexToInsert = rowCells.length - 1;
    const clone = rowCells[indexToClone].cloneNode(true);
    const lastCell = rowCells[indexToInsert];

    row.insertBefore(clone, lastCell);
  }
}
