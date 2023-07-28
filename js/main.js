class ShoppingCart {
  constructor() {
      this.cartItems = [];
      this.total = 0;
  }

  addToCart(item) {
      const existingItem = this.cartItems.find(cartItem => cartItem.name === item.name);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          item.quantity = 1;
          this.cartItems.push(item);
      }

      this.total += item.price;
      this.updateCartUI();
  }

  removeFromCart(item) {
      const existingItem = this.cartItems.find(cartItem => cartItem.name === item.name);

      if (existingItem) {
          existingItem.quantity--;

Kamel
if (existingItem.quantity === 0) {
              const index = this.cartItems.indexOf(existingItem);
              this.cartItems.splice(index, 1);
          }

          this.total -= item.price;
          this.updateCartUI();
      }
  }

  updateCartUI() {
      const cartItemsElement = document.getElementById('cart-items');
      cartItemsElement.innerHTML = '';
      this.cartItems.forEach(item => {
          const li = document.createElement('li');
          li.innerText = `Item: ${item.name} x${item.quantity} - $${item.price * item.quantity}`;
          cartItemsElement.appendChild(li);
      });

      const totalElement = document.getElementById('total');
      totalElement.innerText = this.total;
  }
}
class Item {
  constructor(name, price) {
      this.name = name;
      this.price = price;
      this.quantity = 0;
  }
}

const shoppingCart = new ShoppingCart();

document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.increment-btn');
  addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
          const price = parseFloat(button.parentElement.previousElementSibling.innerText.slice(1));
          const itemName = button.parentElement.parentElement.querySelector('span:first-child').innerText;
          const item = new Item(itemName, price);
          shoppingCart.addToCart(item);
Kamel
});
  });

  const removeFromCartButtons = document.querySelectorAll('.decrement-btn');
  removeFromCartButtons.forEach(button => {
      button.addEventListener('click', () => {
          const price = parseFloat(button.parentElement.previousElementSibling.innerText.slice(1));
          const itemName = button.parentElement.parentElement.querySelector('span:first-child').innerText;
          const item = new Item(itemName, price);
          shoppingCart.removeFromCart(item);
      });
  });
});
