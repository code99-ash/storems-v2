<template>
    <tr class="group pb-2">
      <td class="menu-data group-hover:opacity-70 group-hover:cursor-pointer">{{ item.title }}</td>
      <td class="menu-data price group-hover:opacity-70 group-hover:cursor-pointer">
        <span>${{ item.price }}</span>
        <i class="pi pi-times menu-data"></i>
        <input type="number" v-model="qty" class="cart-input" id="fffbeb5e">
      </td>
      <td class="px-3 menu-data">
        = ${{ item.price * qty}}
      </td>
    </tr>
</template>

<script>
import { centralBase } from '@/utils'
export default {
  props: ['item'],
  data: () => ({
    imageBase: `${centralBase}/images`,
    qty: 1
  }),
  mounted() {
    const trgt = this.$store.state.cartItems.find(each => each._id == this.iteitem._id);
    if(trgt) {
        this.qty = trgt.quantity
    } 
  },
  methods: {
    updateCartItem(e) {
        this.$store.dispatch('updateCart', {_id: this.iteitem._id, quantity: e.target.value})
    },
    removeFromCart() {
        this.$store.dispatch('removeFromCart', this.iteitem._id)
        this.$store.dispatch('addFeedback', {
                heading: 'Success Alert',
                variant: 'success',
                body: 'Successfully deleted from cart !!',
        })
    }
  }
}




</script>

<style scoped>
.cart-img {
  @apply flex-none w-[65px] sm:w-[85px] md:w-[120px] h-[65px] sm:h-[85px] md:h-[120px];
}

.menu-data {
  @apply text-sm text-left text-[#fff] capitalize py-3;
}
.menu-data.right {
  @apply text-right;
}
.menu-data.price {
  @apply flex items-center gap-x-3;
}
.cart-input {
  @apply w-[65px] h-[32px] border border-[#fffbeb5e] bg-transparent outline-0 px-2;
}
</style>