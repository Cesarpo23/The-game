const puzzle = document.querySelector('#puzzle1');
const pieces = puzzle.querySelectorAll('.piece');

pieces.forEach(piece => {
  piece.addEventListener('dragstart', dragStart);
  piece.addEventListener('dragend', dragEnd);
});

function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
}

function dragEnd(e) {
  const id = e.dataTransfer.getData('text/plain');
  const piece = document.getElementById(id);
  piece.style.opacity = '1';
}

puzzle.addEventListener('dragover', dragOver);
puzzle.addEventListener('drop', drop);

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  const id = e.dataTransfer.getData('text/plain');
  const piece = document.getElementById(id);
  const puzzleRect = puzzle.getBoundingClientRect();
