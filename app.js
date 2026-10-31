// Exercise 1: Read the menu
console.log();
const menuItems = ['Tea', 'Coffee', 'Sandwich', 'Cookie']

console.log(menuItems[0]);
console.log(menuItems[2]);
console.log(menuItems.length);
console.log(menuItems[menuItems.length-1]);

//===================================================
console.log();
//Exercise 2: Update the waiting list
const waitingCustomers = ['Aisha', 'Omar', 'Noor'];


waitingCustomers[1] = 'Ali'
waitingCustomers.push('Dana')
console.log(waitingCustomers.length);

let removedCustomer = waitingCustomers.pop()

console.log(removedCustomer);
console.log(waitingCustomers);


//===================================================
console.log();
//Exercise 3: Print a numbered menu

const drinks = ['Water', 'Tea', 'Coffee', 'Juice'];


for (let index = 0; index < drinks.length; index++) {
    const element = drinks[index];

    console.log(`${index +1}. ${element}`);
    
}

//===================================================
console.log();
//Exercise 4: Calculate the prices

const prices = [2, 5, 3, 6, 4];

let totalPrice = 0
let expensiveItemCount = 0

prices.forEach(element => {
   totalPrice = totalPrice+ element

   if(element >= 4)
   {
    expensiveItemCount += 1

   }
});

console.log('Total Price: ' + totalPrice);
console.log('Items costing 4 or more: ' + expensiveItemCount);


//===================================================
console.log();
//Exercise 5: Describe the café

const cafe = {
name: 'Campus Café',
location: 'Building A',
seats: 24,
isOpen: true
}

console.log(`${cafe.name} is located in ${cafe.location}`);
console.log(`Available seats: ${cafe.seats}`);

//Exercise 6: Update a drink
console.log();

const drink = {
  name: 'Iced Coffee',
  price: 3,
  size: 'small',
  temporaryCode: 'TEMP-01',
};


drink.size = 'large'
drink.price += 1
drink.isAvailable = true
delete drink.temporaryCode

console.log(drink);

//===================================================
console.log();
//Exercise 7: Check an order

const order = {
  customerName: 'Mariam',
  itemName: 'Sandwich',
  price: 4,
  quantity: 3,
  isPaid: true,
};


order.orderTotal = order.price * order.quantity

console.log(`Mariam ordered ${order.quantity} ${order.itemName} items \n order total: ${order.orderTotal}  `);

if (order.isPaid) {
    console.log('\nReady to prepare');
    
} else {
    console.log('\nWaiting for payment');
}


//===================================================
console.log();
//Exercise 8: Plan a study session

const studySession = {
  title: 'JavaScript Practice',
  room: 'Lab 2',
  topics: ['Variables', 'Arrays'],
};


studySession.topics.push('Objects')
console.log(studySession.topics.length);

studySession.topics.forEach(element => {
    console.log(element);
    
});

studySession.room = 'Lab 3'
console.log(`${studySession.title} will take place in ${studySession.room}`);

console.log(studySession.topics);



//===================================================
console.log();
//Exercise 9: Manage the products

const products = [
  { name: 'Tea', price: 2 },
  { name: 'Sandwich', price: 4 },
  { name: 'Cookie', price: 1 },
];


console.log(products[1].name);
products[1].price = 5
products.push({ name: 'Juice', price: 3 })
console.log();
products.forEach(element => {
    console.log(`${element.name} costs ${element.price} BD`);
    
});

//Exer
const studyGroup = {
  name: 'JavaScript Crew',
  members: [
    { name: 'Aisha', completedHomework: true },
    { name: 'Omar', completedHomework: false },
    { name: 'Noor', completedHomework: true },
  ],
};


console.log(studyGroup.name);
console.log(studyGroup.members.length);
let completedCount = 0

for (let index = 0; index < studyGroup.members.length; index++) {
    const studentName = studyGroup.members[index].name;
    if (studyGroup.members[index].completedHomework) {
        completedCount += 1

    }
    else{
        console.log(`${studentName} needs to finish the homework.`);
    }
}

console.log(`Completed homework: ${completedCount}`);