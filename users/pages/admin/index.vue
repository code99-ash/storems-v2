<template>
    <section>
        <h1 class="text-white text-2xl font-['Quesha'] font-medium">Admin Overview</h1>

        <table class="table-auto w-full my-[25px]">
            <thead>
                <tr class="thead-r">
                    <th>Name</th>
                    <th>Price ($)</th>
                    <th>
                        <span class="md:hidden">Qty</span>
                        <span class="hidden md:inline">Quantity</span>
                    </th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <add-menu></add-menu>
                <MenuItem v-for="item in $store.state.products.data" :key="item._id" :item="item" />
            </tbody>
        </table>
    </section>
</template>

<script>
import MenuItem from '~/components/Admin/MenuItem.vue'
import AddMenu from '~/components/Admin/AddMenu.vue';
export default {
    layout: 'admin',
    components: {
        MenuItem, AddMenu
    },
    data: () => ({
        menu: [
            {id: 1, title: 'Double Expresso', price: '12.9', available: 10},
            {id: 2, title: 'Americano', price: '13.9', available: 10},
            {id: 3, title: 'Iced Americano', price: '13.9', available: 10},
            {id: 4, title: 'Capuccino', price: '14.9', available: 10},
            {id: 5, title: 'Flat White', price: '11.9', available: 10},
        ]
    })
}
</script>

<style scoped>
thead {
    @apply bg-neutral-600;
}
.thead-r th {
    @apply font-normal text-neutral-300 py-3 px-2 text-left;
}
</style>