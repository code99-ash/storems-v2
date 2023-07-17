<template>
    <section>
        <h1 class="text-white text-2xl font-['Quesha'] font-medium">Admin Overview</h1>

        <table class="table-auto w-full my-[25px]">
            <thead>
                <tr class="thead-r">
                    <th>Name</th>
                    <th>Price ($)</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <menu-item v-for="item in menu" :key="item.id" :item="item"></menu-item>
            </tbody>
        </table>
    </section>
</template>

<script>
import MenuItem from '../../components/Admin/MenuItem.vue'
export default {
    layout: 'admin',
    components: {
        MenuItem
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