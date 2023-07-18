<template>
    <section>
        <header class="py-[25px] px-[50px] backdrop-blur shadow flex justify-between">
            <nuxt-link to="/" class="logo">SmoothKafé</nuxt-link>

            <div class="flex items-center gap">
                <router-link to="/admin/account" class="top-link">Account</router-link>
                <button class="top-link" @click="$auth.logout()">Logout</button>
            </div>
        </header>
        <main class="flex gap-3">
            <nav class="menu-list">
                <nuxt-link v-for="m in menus" :key="m.menu" :to="m.path" class="menu group">
                    {{ m.name }}
                </nuxt-link>
            </nav>

            <div class="grow px-3 pb-[80px] md:pb-0">
                <nuxt />
            </div>

            <div class="w-[300px] h-max p-2 space-y-2 z-[50] fixed top-0 right-0 mt-[65px]">
                <TransitionGroup name="list">
                    <feedback-item :feedback="f" v-for="f in $store.state.feedbacks" :key="f.id"></feedback-item>
                </TransitionGroup>
            </div>
        </main>
    </section>
</template>


<script>
import FeedbackItem from '~/components/Feedbacks/FeedbackItem.vue';
export default {
    components: { 
        FeedbackItem,
    },
    middleware: ['admin'],
    data: () => ({
        menus: [
            {name: 'Menu', icon: 'pi-chevron-right', path: '/admin'},
            {name: 'Orders', icon: 'pi-chevron-right', path: '/admin/orders'},
            {name: 'Account', icon: 'pi-chevron-right', path: '/admin/account'},
        ]
    })
}
</script>


<style scoped>
.logo {
    @apply font-['Quesha'] text-3xl font-medium text-white;
}
.menu-list {
    @apply fixed bottom-0 left-0 w-full flex flex-row items-center justify-between 
    md:inline-block py-3 md:py-0
    md:relative flex-none md:w-[220px] md:min-h-[60vh] px-3 md:space-y-5;
}
.menu {
    @apply flex py-[10px] text-neutral-400 items-center gap-x-3 hover:gap-x-5 
    transition-all border-x md:border-l border-[#73737382] hover:border-x 
    hover:border-neutral-500 rounded-full px-[12px] hover:pl-[20px];
}
.menu.nuxt-link-exact-active {
    @apply border-x border-orange-500 text-orange-500;
}
.top-link {
    @apply px-[12px] py-[8px] text-sm text-neutral-200 hover:shadow transition-all
    hover:border-x rounded-full mx-3;
}
.top-link.nuxt-link-exact-active {
    @apply border-x border-orange-500 text-orange-500;
}
</style>