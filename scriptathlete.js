const athlete1 = new Athlete('Usain', 'Bolt', 1980, 'atletica', [3, 5 , 7, 2, 10], 'm', true);

console.log(athlete1);

console.log('Età: ', athlete1.calculateAge());

console.log(athlete1.toString());

console.log('Best result:', athlete1.bestResult());



const athlete2 = new Athlete('Michael', 'Phelps', 1986, 'nuoto', [1, 3 , 1, 2, 1], 'm', true);

console.log(athlete2);

console.log('Età: ', athlete2.calculateAge());

console.log(athlete2.toString());

console.log('Best result:', athlete2.bestResult());



const athlete3 = new Athlete('Yuri', 'Chechi', 1962, 'ginnastica ritmica', [10, 8 , 6, 9, 10], 'm', false);

console.log(athlete3);

console.log('Età: ', athlete3.calculateAge());

console.log(athlete3.toString());

console.log('Best result:', athlete3.bestResult());



