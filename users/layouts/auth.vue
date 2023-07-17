<template>
<section>
    <div class="fixed w-full z-[1]">
        <div class="header">
            <router-link to="/">
                <span>Our Menu</span>
            </router-link>
            <div class="flex items-center gap-x-3">
                <nuxt-link to="/cart">
                    <span>Cart <i class="pi pi-shopping-cart"></i></span>
                </nuxt-link>
                <nuxt-link to="/login">
                    <span>Login <i class="pi pi-unlock"></i></span>
                </nuxt-link>
            </div>
        </div>
    </div>
    <section class="flex flex-col pt-[100px] px-3 md:px-[50px] gap-3">
        <div class="tabbar">
            <router-link 
                :to="auth.route" v-for="auth in auths" 
                :key="auth.name" 
                class="tab"
            >
                <i :class="['pi', auth.icon]" class="tab-icon"></i>
                <p class="tab-text">{{ auth.name }}</p>
            </router-link>
            <div class="tab-indicator"></div>
        </div>
        <main class="grow px-3 py-[25px]">
            <nuxt />
        </main>
    </section>
</section>
</template>
    
<script>
import FeedbackItem from '@/components/Feedbacks/FeedbackItem.vue'

export default {
    components: { FeedbackItem },
    data: () => ({
        auths: [
            {name: 'Signup', icon: 'pi-user', route: '/signup'},
            {name: 'Login', icon: 'pi-unlock', route: '/login'},
            {name: 'Forgot Password', icon: 'pi-lock', route: '/'},
        ]
    }),
    watch: {
        '$route': function(val) {
            this.setLinkActive()
        }
    },
    mounted() {
        this.setLinkActive()
    },
    methods: {
        setLinkActive() {
            const indicator = document.querySelector('.tab-indicator')
            const tabs = document.querySelectorAll('.tab')

            for(let i=0; i<this.auths.length; i++) {
                const auth = this.auths[i]
                if(auth.route == this.$route.path) {
                    indicator.style.left = `${tabs[i].offsetLeft}px`;
                    indicator.style.width = `${tabs[i].clientWidth}px`;
                }
            }
        }
    }
}
</script>
    
<style scoped>
.header {
    @apply py-[25px] flex items-center justify-between px-3 md:px-[50px];
}
.header a {
    @apply text-slate-100 text-sm mx-[14px] py-[6px] relative;
}
.header a ::after {
    content: '';
    @apply w-0 h-[2px] transition-all border block bg-slate-200 absolute left-0 -bottom-1;
}
.header a:hover ::after, .header .nuxt-link-exact-active ::after {
    @apply w-[25px];
}
.tabbar {
    @apply flex items-center gap-x-5 relative;
}
.tab {
    @apply flex items-center gap-x-3 p-[14px] text-neutral-300 text-sm
    hover:bg-amber-600 hover:text-amber-50 transition-all; 
}
.tab.nuxt-link-exact-active {
    @apply text-amber-600;
}
.tab:hover.nuxt-link-exact-active {
    @apply text-amber-50;
}
.tab-icon {
    
}
.tab-text {
    @apply text-xs sm:text-sm;
}
.tab-indicator {
    @apply h-[4px] min-w-[45px] bg-amber-600 absolute bottom-0 left-0 transition-all;
}
</style>