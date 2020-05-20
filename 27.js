// 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

function willSurpassHeight(
  twoKidsArray = [
    (kid1 = { height: 0, rate: 0 }),
    (kid2 = { height: 0, rate: 0 }),
  ]
) {
  if (kid1.height === kid2.height) {
    console.log('Alturas Iguais');
    return;
  }
  let sortedKids = sortKids(twoKidsArray);

  let tallestKid = sortedKids[0];
  let smallestKid = sortedKids[1];

  if (tallestKid.rate >= smallestKid.rate) {
    console(`${smallestKid} não ultrapassará ${tallestKid}`);
    return;
  }

  console.log(
    `A menor criança irá superar a maior em: ${calcAnos(
      tallestKid,
      smallestKid
    )} anos`
  );
}

function sortKids(twoKidsArray) {
  let sortedKids = twoKidsArray.sort((a, b) => {
    return a.height > b.height;
  });
  let tallestKid = sortedKids[0];
  let smallestKid = sortedKids[1];
  return [tallestKid, smallestKid];
}

function calcAnos(tallestKid, smallestKid) {
  let anos = 1;
  while (tallestKid.height >= smallestKid.height) {
    anos++;
    tallestKid.height += tallestKid.rate;
    smallestKid.height += smallestKid.rate;
  }
  return anos;
}

let kid1 = { height: 170, rate: 5 };
let kid2 = { height: 160, rate: 7 };
willSurpassHeight([kid1, kid2]);
