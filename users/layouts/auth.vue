<template>
<section>
    <div class="fixed w-full z-[1]">
        <HeaderLinks />
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
import HeaderLinks from '~/components/Common/HeaderLinks.vue'
export default {
    components: { FeedbackItem, HeaderLinks },
    middleware: 'guest',
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