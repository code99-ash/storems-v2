<template>
    <section class="tabbar">
        <button class="tab active" @click="setLinkActive($event, 0)">Cart items</button>
        <button class="tab" @click="setLinkActive($event, 1)">Checkout</button>
        <div class="tab-indicator"></div>
    </section>
</template>


<script>
export default {
    data: () => ({
        active: 0
    }),
    mounted() {
        // const active = document.querySelector('.active');
        const indicator = document.querySelector('.tab-indicator')
        const tab = document.querySelector('.tab')

        indicator.style.left = `${tab.offsetLeft}px`;
        indicator.style.width = `${tab.clientWidth}px`;
    },
    methods: {
        setLinkActive(e, idx) {
            const indicator = document.querySelector('.tab-indicator')
            indicator.style.left = `${e.target.offsetLeft}px`
            indicator.style.width = `${e.target.clientWidth}px`

            const tabs = document.querySelectorAll('.tab')
            for(let i=0; i<tabs.length; i++) {
                if(i == idx) {
                    tabs[i].classList.add('active')
                    this.$emit('activeTabChanged', i)
                }
                else
                    tabs[i].classList.remove('active')
            }
        }
    }
}
</script>

<style scoped>
.tabbar {
    @apply p-[12px] bg-white border rounded relative flex items-center 
    gap-x-3 h-[65px] shadow mb-3;
}
.tabbar .tab {
    @apply text-slate-300 font-medium text-base uppercase px-[14px] py-[10px] transition-all;
}
.tabbar .tab.active {
    @apply text-amber-500;
}
.tab-indicator {
    @apply h-[4px] min-w-[45px] bg-amber-500 absolute bottom-0 left-0 transition-all;
}
</style>