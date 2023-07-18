<template>
    <tr>
        <td>
            <input type="text" class="menu-input w-full" v-model="menu.title">
        </td>
        <td>
            <input type="text" class="menu-input w-[65px] md:w-[120px]" v-model="menu.price">
        </td>
        <td>
            <input type="text" class="menu-input w-[45px] md:w-[100px]" v-model="menu.qtyAvailable">
        </td>
        <td class="">
            <button 
                class="btn bg-amber-600 text-amber-50 rounded text-sm"
                :disabled="disabled" 
                :class="{'cursor-not-allowed saturate-50': disabled}"
                @click="addMenu"
            >
                <span class="hidden md:inline">Add
                </span> <i :class="['pi text-xs', loading?'pi-spin pi-spinner':'pi-plus']"></i>
            </button>
        </td>
    </tr>
</template>

<script>
import errorLog from '~/mixins/errorLog'
export default {
    mixins: [errorLog],
    data: () => ({
        loading: false,
        disabled: true,
        menu: {
            title: '',
            price: '',
            qtyAvailable: 1,
        }
    }),
    watch: {
        menu: {
            handler(val) {
                this.disabled = !((
                    val.title && parseFloat(val.price) > 0.01 && parseInt(val.qtyAvailable) > 0 
                    && !this.loading))
            },
            deep: true
        }
    },
    methods: {
        inValidForm() {
            const { title, price, qtyAvailable } = this.menu
            return !( title &&  parseFloat(price) > 0.01 &&  parseInt(qtyAvailable) > 0 )
        },
        async addMenu() {
            if(this.inValidForm()) return;

            this.loading = true;
            try {

                const resp = await this.$axios.$post('/products', 
                {...this.menu})
                // console.log(resp)
                await this.$store.dispatch('products/addProduct', resp)
                
                this.$store.dispatch('addFeedback', {
                    heading: 'Success !!',
                    variant: 'success',
                    body: 'Successfully added new menu item',
                })
            } catch(err) {
                this.$store.dispatch('addFeedback', {
                    heading: 'Error Alert',
                    variant: 'error',
                    body: this.parseError(err),
                })
            }
            this.loading = false;
        }
    }
}
</script>

<style scoped>
tr {
    @apply border-y border-neutral-500 hover:bg-neutral-700 transition-all;
}
td {
    @apply py-3 text-neutral-200 px-2;
}
.menu-input {
    @apply h-[38px] border border-neutral-500 outline-0 rounded bg-neutral-600 px-2;
}
</style>