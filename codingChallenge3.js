const dolphins = [90, 89, 100];
const koalas = [110, 100, 81];

const Average_Dol = dolphins.reduce((item) => {
  return item / 3;
});

const Average_koal = koalas.reduce((item) => {
  return item / 3;
});

if (Average_Dol > Average_koal) {
  console.log(`Dolphins Won with ${Average_Dol} points `);
} else if (Average_Dol < Average_koal) {
  console.log(`Koal Won with ${Average_koal} points`);
} else {
  console.log("Draw !!");
}
