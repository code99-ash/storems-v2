<template>
  <div class="bg-white p-3 w-full md:max-w-[450px] h-max pb-3">
    <header class="py-3 space-y-2">
      <h1 class="text-secondary text-2xl font-bold">Signup</h1>
      <div class="bg-mintgreen h-[2px] w-[80px]"></div>
    </header>

    <section class="form">
      <div 
        class="bg-red-50 text-red-400 p-2 font-medium text-xs rounded flex justify-between font-medium gap-2" 
        :class="[error?'scale-100':'scale-0']" v-if="error"
      >
        {{ error }}
        <i class="pi pi-times text-red-300 cursor-pointer"></i>
      </div>
      <div class="form-group">
        <label for="email">Full name</label>
        <input type="text" v-model="form.name" />
      </div>
      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="text" v-model="form.email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="form.password" />
      </div>
      <router-link :to="{name: 'login'}" class="text-xs text-cyan-400">Already have an account?</router-link>
      <div class="flex justify-end">
        <button class="bg-primary text-slate-50 btn" @click="signup" :disabled="loading">
          Sign up <i :class="['pi text-xs', loading?'cursor-not-allowed pi-spin pi-spinner':'pi-lock']"></i>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import  { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios';
import { getBaseUrl  } from '@/composables/environ.js'

const router = useRouter()
const error = ref('')
const loading = ref(false)
const form = reactive({
  email: '',
  name: '',
  password: ''
})

const formIsInValid = () => {
  return !(form.email && form.name && form.password);
}


const signup = async() => {
  if(formIsInValid()) {
    return error.value = 'All fields are required!';
  }
  error.value = ''

  loading.value = true
  try {
    await axios.post(`${getBaseUrl()}/register`, { ...form })
    router.push('/login')
  } catch(err) {
    error.value = err.response.data ?? 'An error occured, please try again'
  }
  loading.value = false
}

</script> 


<style lang="scss">
.form {
  @apply space-y-3;

  #{&}-group {
    @apply space-y-1;

    label {
      @apply text-sm text-slate-400;
    }
    input {
      @apply border border-slate-200 rounded text-slate-500 text-sm outline-0 px-2 h-[38px] w-full;
    }
  }
}
</style>