<template>
    <div>
        <h1 class="text-xl md:text-3xl font-['Quesha'] font-medium mb-3 text-neutral-50">
          User Login
        </h1>
        <div class="error-alert" :class="[error?'scale-100':'scale-0']" v-if="error">
          {{ error }}
          <i class="pi pi-times text-red-300 cursor-pointer" @click="error=''"></i>
        </div>
        <section class="mt-[25px] space-y-5 max-w-[450px]">
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="text" v-model="form.email" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="form.password" />
            </div>
            <button class="checkout-btn group" :class="{'cursor-not-allowed': loading}" @click="login" :disabled="loading">
                <span class="indicator w-0 group-hover:w-full"></span>
                <span class="z-[100] relative">Login 
                  <i :class="['pi text-sm ml-1', loading?'pi-spin pi-spinner':'pi-unlock']"></i>
                </span>
            </button>
        </section>
    </div>
</template>

<script>
import errorLog from '@/mixins/errorLog.js'
export default {
    layout: 'auth',
    mixins: [errorLog],
    data: () => ({
      error: '',
      loading: false,
      form: { email: 'devridwan@gmail.com', password: 'password' }
    }),
    methods: {
      formIsInvalid() {
        return !(this.form.email && this.form.password);
      },
      async login() {
        if(this.formIsInvalid()) {
          return this.error = 'All fields are required';
        }

        this.loading = true
          try {
            const response = await this.$auth.loginWith('local', {data: this.form})
            console.log(response)
            this.$router.push('/')
          } catch(err) {
            // console.log(err)
            this.error = this.parseError(err)
          }
        this.loading = false
      }
    }
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