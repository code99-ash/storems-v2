<template>
    <div>
        <h1 class="text-xl md:text-3xl font-['Quesha'] font-medium mb-3 text-neutral-50">
          Signup to SmoothKafé
        </h1>

        <section class="mt-[25px] space-y-5 max-w-[450px]">
            <div class="error-alert" :class="[error?'scale-100':'scale-0']" v-if="error">
              {{ error }}
              <i class="pi pi-times text-red-300 cursor-pointer" @click="error=''"></i>
            </div>
            <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" v-model="name" />
            </div>
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="text" v-model="email" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="pw1" />
            </div>
            <div class="form-group">
                <label for="password2">Confirm Password</label>
                <input type="password" v-model="pw2" />
            </div>
            <button class="checkout-btn group" @click="signup">
                <span class="indicator w-0 group-hover:w-full"></span>
                <span class="z-[100] relative">Continue 
                <i :class="['pi text-sm ml-1', loading?'pi-spin pi-spinner':'pi-arrow-right']"></i></span>
            </button>
        </section>
    </div>
</template>

<script>
import errorLog from '~/mixins/errorLog'
export default {
    layout: 'auth',
    mixins: [errorLog],
    data: () => ({
      loading: false,
      email: 'devridwan@gmail.com',
      name: 'Dev Ridwan',
      pw1: 'password',
      pw2: 'password',
      error: '',
    }),
    methods: {
      formIsInvalid() {
        return !(this.email && this.name && this.pw1 && this.pw2)
      },
      async signup() {
        if(this.formIsInvalid()) {
          return this.error = 'All fields are required'
        }
        if(this.pw1 !== this.pw2) {
          return this.error = 'Passwords do not match'
        }

        this.loading = true
        try {
          const { name, email, pw1 } = this
          await this.$axios.$post(`/auth/register`, { name, email, password: pw1 })
          this.$router.push('/login')
        } catch(err) {
          this.error = this.parseError()
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