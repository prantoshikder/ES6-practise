const ages = [10, 15, 20];
const ages1 = [25, 30, 35, 40];
const ages2 = [45, 50, 55, 60];
const totalAge = ages.concat(ages1).concat(100).concat(ages2);
const allAges = [...ages, ...ages1, ...ages2];
console.log(allAges);

const webDesign = 850;
const graphicDesign = 550;
const seo = 450;
const totalPrice = [850, 550, 450, 1050];
// const averageTotal = Math.max(webDesign, graphicDesign, seo);
const averageTotal = Math.max(...totalPrice);
console.log(averageTotal);