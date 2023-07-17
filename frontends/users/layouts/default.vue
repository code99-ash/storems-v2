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
    <nuxt />
</section>
</template>

<script>
import FeedbackItem from '@/components/Feedbacks/FeedbackItem.vue'
import HeaderRightLinks from '@/components/HeaderRightLinks'
// import initiateData from '@/mixins/initiateData'

export default {
    components: { FeedbackItem, HeaderRightLinks },
    // mixins: [initiateData]
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
</style>