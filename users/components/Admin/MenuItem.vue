<template>
    <tr v-if="!edit">
        <td>{{ item.title }}</td>
        <td>${{ item.price }}</td>
        <td>{{ item.qtyAvailable }}</td>
        <td class="space-x-5">
            <i class="pi pi-pencil cursor-pointer" @click="edit=true"></i>
            <i class="pi pi-trash text-red-500 cursor-pointer"></i>
        </td>
    </tr>
    <tr v-else>
        <td>
            <input type="text" class="menu-input w-full" v-model="editData.title">
        </td>
        <td>
            <input type="text" class="menu-input w-[120px]" v-model="editData.price">
        </td>
        <td>
            <input type="text" class="menu-input w-[100px]" v-model="editData.qtyAvailable">
        </td>
        <td class="">
            <button class="btn bg-amber-600 text-amber-50 rounded text-sm"
            @click="update">Update</button>
        </td>
    </tr>
</template>

<script>
export default {
    props: ['item'],
    data: () => ({
        edit: false,
        editData: {
            title: '',
            price: null,
            qtyAvailable: 0
        }
    }),
    watch: {
        edit: function(val) {
            if(!val) return;
            const {title, price, qtyAvailable} = this.item
            this.editData = {title, price, qtyAvailable}
        }
    },
    methods: {
        update() {
            this.edit = false;
        }
    }
}
</script>

<style scoped>
tr {
    @apply border-y border-neutral-500 hover:bg-neutral-700 transition-all;
}
td {
    @apply py-3 text-neutral-200 px-2 text-xs sm:text-sm md:text-base;
}
.menu-input {
    @apply h-[38px] border border-neutral-500 outline-0 rounded bg-neutral-600 px-2;
}
</style>