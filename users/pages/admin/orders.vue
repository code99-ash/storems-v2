<template>
    <section>
        <div class="flex items-center gap-3 mb-5">
            <h1 class="text-white text-2xl font-['Quesha'] font-medium">Orders</h1>

            <div class="flex items-center gap-x-3">
                <button class="btn bg-teal-700 text-teal-100 rounded text-sm">Mark Delivered (0)</button>
                <button class="btn bg-amber-600 text-amber-50 rounded text-sm">Mark Pending (0)</button>
            </div>
        </div>

        <section class="space-y-3">
            <div :class="['order-list', i<5? 'border-amber-600':'border-neutral-900']" v-for="i in 9" :key="i">
                <div class="text-lg text-neutral-300 pb-3 border-b border-neutral-800 text-sm flex items-center gap-x-3">
                    <div class="w-[15px] h-[15px] bg-neutral-800 border border-neutral-500 rounded-sm"></div> Ridwan Adewole
                </div>
                <p class="text-sm text-neutral-300">( +234 812 902 9753 )</p>
                <p class="text-sm text-neutral-300">No 2, ABC Street, Off Abak road, Uyo</p>
                <div class="flex items-center gap-3">
                    <div class="w-max px-3 py-2 bg-neutral-800 text-white text-sm">Double Expresso</div>
                    <div class="w-max px-3 py-2 bg-neutral-800 text-white text-sm">x2</div>
                    <div class="w-max px-3 py-2 bg-neutral-800 text-white text-sm">$25.8</div>
                </div>
            </div>
        </section>
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
.order-list {
    @apply bg-neutral-900 w-full border p-3 rounded space-y-5;
}
</style>