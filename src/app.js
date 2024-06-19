document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Teh Hitam 24pcs", img: "produk-1.jpg", price: 40000 },
      { id: 2, name: "Teh Hijau 24pcs", img: "produk-2.jpg", price: 35000 },
      { id: 3, name: "Teh Kayu Aro 24pcs", img: "produk-3.jpg", price: 35000 },
      { id: 4, name: "Teh Binahong 24pcs", img: "produk-4.jpg", price: 30000 },
    ],
    addToCart(item) {
      this.$store.cart.add(item);
    },
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      const cartItem = this.items.find((item) => item.id === newItem.id);

      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        this.items = this.items.map((item) => {
          if (item.id === newItem.id) {
            item.quantity++;
            item.total = item.price * item.quantity;
            this.total += item.price;
          }
          return item;
        });
        this.quantity++;
      }
    },
    remove(id) {
      // ambil item yg mau di remove berdasarkan id
      const cartItem = this.items.find((item) => item.id === id);

      //jika item lebih dari 1
      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
