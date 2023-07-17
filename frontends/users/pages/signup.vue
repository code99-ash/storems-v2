<template>
    <div>
        <h1 class="text-xl md:text-3xl font-['Quesha'] font-medium mb-3 text-neutral-50">
          Signup to SmoothKafé
        </h1>

        <section class="mt-[25px] space-y-5 max-w-[450px]">
            <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" />
            </div>
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="text" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" />
            </div>
            <div class="form-group">
                <label for="password2">Confirm Password</label>
                <input type="password" />
            </div>
            <button class="checkout-btn group">
                <span class="indicator w-0 group-hover:w-full"></span>
                <span class="z-[100] relative">Continue <i class="pi pi-arrow-right text-sm ml-1"></i></span>
            </button>
        </section>
    </div>
</template>

<script>
export default {
    layout: 'auth'
}
</script>

<style scoped>
.form-group {
  @apply space-y-1;
}
.form-group label {
  @apply text-neutral-100 opacity-60 text-[14px] font-light block uppercase;
}
.form-group input {
  @apply h-[42px] w-full border border-[#fffbeb5e] text-sm text-slate-50
  rounded p-2 outline-0 bg-transparent;
}
.checkout-btn {
  @apply px-[14px] py-[10px] border border-neutral-50 text-neutral-50 mt-10 
  relative float-right;
}
.checkout-btn .indicator {
  @apply h-full transition-all bg-amber-600 absolute top-0 left-0;
}
</style>