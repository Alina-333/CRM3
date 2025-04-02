console.log('hello');

// const el1 = document.querySelector('.page-container')
// console.log('el1: ', el1);

// const els1 = document.querySelectorAll('.page-container')
// console.log('els1: ', els1);


const itemsContainerElements = document.querySelectorAll('.form-container2 .items-container');

const dataArray = [
  {
    id: '246016548',
    name: 'Навигационная система Soundmax',
    category: 'Техника для дома',
    unit: 'шт',
    count: 10,
    price: '$100',
    total: '$500'
  },
  {
    id: '246016548',
    name: 'Навигационная система Soundmax',
    category: 'Техника для дома',
    unit: 'шт',
    count: 10,
    price: '$100',
    total: '$500'
  },
];

itemsContainerElements.forEach(el => {
  // console.log('el: ', el.innerHTML);
  const idElement = el.querySelector('p');
  const nameElement = el.querySelector('.item1');
  const countElement = el.querySelector('.item4');
  const catElement = el.querySelector('.item2');
  const priceElement = el.querySelector('.item5');

  // debugger
  console.log('id: ', idElement.innerText,
    'nameElement: ', nameElement.innerText,
    'countElement: ', countElement.innerText,
    'catElement: ', catElement.innerText,
    'priceElement: ', priceElement.innerText
  );
});

dataArray.forEach((el, index) => {
  const line = `
    <div class="items-container">
      <p class="item0">${el.id}</p>
      <p class="item1">${el.name}</p>
      <p class="item2">${el.category}</p>
      <p class="item3">${el.unit}</p>
      <p class="item4">${el.count}</p>
      <p class="item5">${el.price}</p>
      <p class="item6">${el.total}</p>
    </div>
`;
  console.log(`${index} line: `, line);
});

  // Запрос данных у пользователя
const productName = prompt("Введите наименование товара:");
const productCategory = prompt("Введите категорию товара:");
let productQuantity = prompt("Введите количество товара:");
let productPrice = prompt("Введите цену товара:");

// Преобразование типов данных
productQuantity = Number(productQuantity);
productPrice = Number(productPrice);

// Проверка корректности данных
if (isNaN(productQuantity) || isNaN(productPrice)) {
  console.error("Ошибка: количество и цена должны быть числами!");
} else {
  const totalPrice = productQuantity * productPrice;
  console.log(`На складе ${productQuantity} единицы товара "${productName}" на сумму ${totalPrice} деревянных`);
}
