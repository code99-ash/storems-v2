<template>
<section>
    <div class="fixed w-full z-[1]">
        <HeaderLinks />
    </div>
    <nuxt />
</section>
</template>

<script>
import FeedbackItem from '@/components/Feedbacks/FeedbackItem.vue'
import HeaderLinks from '~/components/Common/HeaderLinks.vue'

export default {
    components: { FeedbackItem, HeaderLinks },
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