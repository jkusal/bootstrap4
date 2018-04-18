/*jshint esversion: 6 */
const canvasElem = document.getElementById('canvas');
const ctx = canvasElem.getContext('2d');

// x, y, width, height
ctx.fillRect(25, 25, 100, 100);

//czyszczenie
ctx.clearRect(45, 45, 60, 60);

for (var i = 0; i < 10; i++) {
ctx.strokeRect(50 + i * 2, 50 + i *2, 50 - i * 2, 50 - i * 2);
}


// określenie czcionki
ctx.font= 'italic bold 30px arial';
// top, bottom
ctx.textBaseline = 'middle';
ctx.fillText('Witaj w canvas', 5, 145);

// określenie czcionki
ctx.font= 'italic bold 20px arial';

ctx.fillStyle = 'blue';
// top, bottom
ctx.textBaseline = 'middle';
ctx.textAlign = 'center' ;
ctx.fillText('Wstawiamy tekst', 90, 180);


ctx.fillStyle = 'red';
ctx.beginPath();

ctx.arc(150, 150, 50, 0, 2*Math.PI);
ctx.fill();

ctx.strokeStyle = 'darkBlue';
ctx.arc(150, 150, 40, 0, 1.5*Math.PI);
ctx.stroke();
