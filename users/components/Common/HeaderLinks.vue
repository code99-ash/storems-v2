<template>
    <div class="header">
        <router-link to="/">
            <span>Our Menu</span>
        </router-link>
        <div class="flex items-center gap-x-3">
            <nuxt-link to="/cart">
                <span>Cart <i class="pi pi-shopping-cart"></i></span>
            </nuxt-link>
            <nuxt-link to="/login" v-if="!$auth.loggedIn">
                <span>Login <i class="pi pi-unlock"></i></span>
            </nuxt-link>
            <button v-else @click="$auth.logout()">
                Logout <i class="pi pi-logout"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>


<style scoped>
.header {
    @apply py-[25px] flex items-center justify-between px-3 md:px-[50px];
}
.header a, .header button {
    @apply text-slate-100 text-sm mx-[14px] py-[6px] relative;
}
.header a ::after, .header button ::after  {
    content: '';
    @apply w-0 h-[2px] transition-all border block bg-slate-200 absolute left-0 -bottom-1;
}
.header a:hover ::after, .header .nuxt-link-exact-active ::after {
    @apply w-[25px];
}
</style>