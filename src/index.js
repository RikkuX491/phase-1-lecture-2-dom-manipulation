const burgers = [
    {
        name: "Flatburger",
        image: "./assets/food/flatburger.jpeg",
        description: "Our signature Flatburger which is a super delicious cheeseburger that'll leave you wanting another Flatburger! It's too good to be true!"
    },
    {
        name: "Maple Bacon Burger",
        image: "./assets/food/maple-bacon-burger.jpeg",
        description: "A great option for a breakfast burger or a great option for brunch if you're hungry enough to eat 2 of these burgers!"
    },
    {
        name: "Mushroom Burger",
        image: "./assets/food/mushroom-burger.webp",
        description: "A mushroom burger with our exclusive Flatburger melted cheese!"
    },
    {
        name: "Avocado Bun Burger",
        image: "./assets/food/avocado-bun-burger.jpeg",
        description: "A healthier take on our signature Flatburger but with avocado buns!"
    },
    {
        name: "Ramen Burger",
        image: "./assets/food/ramen-burger.jpeg",
        description: "If you love ramen and burgers, what are you waiting for? Order our exclusive ramen burger now!"
    }
]

const otherFoods = [
    {
        name: "French Fries",
        image: "./assets/food/french-fries.jpeg",
        description: "The good old french fries made in Flatburger style!"
    },
    {
        name: "Burrito",
        image: "./assets/food/burrito.webp",
        description: "A Flatburger style burrito with our exclusive Flatburger melted cheese and any meat of your choosing in addition to your choice of additional ingredients!"
    },
    {
        name: "Taco",
        image: "./assets/food/taco.jpeg",
        description: "The Flatburger exclusive Taco! Get it while supplies last!"
    },
    {
        name: "Hot Dog",
        image: "./assets/food/hot-dog.jpeg",
        description: "The Flatburger exclusive Hot Dog! Get it while supplies last!"
    },
    {
        name: "Onion Rings",
        image: "./assets/food/onion-rings.jpeg",
        description: "The Flatburger exclusive Onion Rings! Get them while supplies last!"
    }
]

// .getElementById()
const restaurantMenu = document.getElementById('restaurant-menu')

burgers.forEach(burger => {
    // .createElement()
    const foodImage = document.createElement('img')
    foodImage.src = burger.image
    foodImage.className = "burger"
    // .appendChild()
    restaurantMenu.appendChild(foodImage)
})

otherFoods.forEach(food => {
    const foodImage = document.createElement('img')
    foodImage.src = food.image
    restaurantMenu.appendChild(foodImage)
})

// .querySelector()
const foodDetailImage = document.querySelector('.detail-image')
foodDetailImage.src = burgers[0].image

const foodName = document.querySelector('.name')
// .textContent
foodName.textContent = burgers[0].name

const descriptionDisplay = document.getElementById('description-display')
descriptionDisplay.textContent = burgers[0].description

// .querySelectorAll()
const foodImages = document.querySelectorAll('#restaurant-menu img')
foodImages.forEach(foodImage => {
    foodImage.style = "border-style: solid; border-color: red; border-width: 3px"
})

// .getElementsByClassName()
const burgerImages = document.getElementsByClassName('burger')
for(let burgerImage of burgerImages){
    burgerImage.style.borderColor = "blue"
}

// .remove()
const burgerToRemove = document.querySelector('#restaurant-menu img')
burgerToRemove.remove()