<template>
  <div class="bg-neutral-800 min-h-[100vh] pt-[100px] flex flex-col md:flex-row gap-3">
      <div class="bg-amber-600 w-full md:w-1/3 md:min-h-[80vh] p-3 md:p-[25px]">
        <h1 class="text-xl md:text-3xl font-['Quesha'] font-medium mb-3 text-neutral-50">
          Cart Items
        </h1>

        <table class="w-full">
          <CartItem v-for="m in items" :key="m.id" :item="m" />
        </table>
      </div>

      <!-- Right Side -->
      <div class="p-3 md:p-[25px] w-full md:w-2/3">
        <h1 class="text-xl md:text-3xl font-['Quesha'] font-medium mb-3 text-neutral-50">
          Checkout Information
        </h1>

        <section class="mt-[25px] space-y-5">
          <div class="form-group">
            <label for="address">Delivery Address</label>
            <input type="text" />
          </div>
          <div class="flex items-center gap-3">
            <div class="w-1/2 form-group">
              <label for="phone">Mobile number</label>
              <input type="text" />
            </div>
            <div class="w-1/2 form-group">
              <label for="phone">Delivery time</label>
              <input type="time" />
            </div>
          </div>
        </section>

        <button class="checkout-btn group">
          <span class="indicator w-0 group-hover:w-full"></span>
          <span class="z-[100] relative">Order Now <i class="pi pi-shopping-bag text-sm ml-1"></i></span>
        </button>
      </div>
  </div>
</template>


<script>
import CartItem from '../components/CartItem.vue';
import CartTabbar from '../components/Common/CartTabbar.vue';
export default {
  components: { CartItem, CartTabbar },
  data: () => ({
    address: '2, ABC Street,Uyo',
    phone: '+2348129029753',
    activeTab: 0,
    items: [
      {id: 1, title: 'Double Expresso', price: '12.9', quantity: 1},
      {id: 2, title: 'Americano', price: '13.9', quantity: 1},
    ]
  }),
  methods: {
    activeTabChanged(index) {
      this.activeTab = index
    },
    // async checkoutOrder() {
    //   if(!(this.address && this.phone)) {
    //     this.$store.dispatch('addFeedback', {
    //         heading: 'Form Error Alert',
    //         variant: 'error',
    //         body: 'All fields are required',
    //     })
    //     return;
    //   }
    //   let user = localStorage.getItem('user')
    //   if(!user) {
    //     this.$store.dispatch('auth/setOpenAuth', true)
    //     return;
    //   }
    //   user = JSON.parse(user)
    //   console.log(user)
    //   const data = {
    //     user: user._id,
    //     ref: new Date().getTime().toString(),
    //     address: this.address,
    //     phone: this.phone,
    //     amount: this.$store.state.cartAmount,
    //     items: this.$store.state.cartItems.map(each => {
    //       const item = {
    //         product: each._id,
    //         quantity: each.quantity,
    //         price: each.price
    //       }
    //       return item;
    //     })
    //   }
    //   console.log(data)

    //   try {
    //     const resp = await this.$axios.$post(`${centralBase}/orders`, {...data})
    //     console.log(resp)
    //   }catch(err) {
    //     console.log(err)
    //     this.$store.dispatch('addFeedback', {
    //         heading: 'Error Alert',
    //         variant: 'error',
    //         body: err.response.data ?? 'An error occured',
    //     })
    //   }

    // }
  }
}
</script>

<style scoped>
.form-group {
  @apply space-y-1;
}
.form-group label {
  @apply text-neutral-100 opacity-60 text-[14px] font-light block uppercase;
}
.form-group input {
  @apply h-[42px] w-full border border-[#fffbeb5e] text-sm text-slate-50
  rounded p-2 outline-0 bg-transparent;
}
.no-item {
  @apply border border-red-500 rounded py-[15px] px-3 text-center rounded-md
  text-red-500 font-medium;
}
.checkout-btn {
  @apply px-[14px] py-[10px] border border-neutral-50 text-neutral-50 mt-10 
  relative float-right;
}
.checkout-btn .indicator {
  @apply h-full transition-all bg-amber-600 absolute top-0 left-0;
}

</style>