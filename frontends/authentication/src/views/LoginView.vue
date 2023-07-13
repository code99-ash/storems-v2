<template>
  <div class="bg-white p-3 w-full md:max-w-[450px] h-max pb-3">
    <header class="py-3 space-y-2">
      <h1 class="text-secondary text-2xl font-bold">Login Page</h1>
      <div class="bg-mintgreen h-[2px] w-[80px]"></div>
    </header>

    <section class="form">
      <div 
        class="bg-red-50 text-red-400 p-3 font-medium text-sm rounded flex justify-between font-medium gap-2" 
        :class="[error?'scale-100':'scale-0']" v-if="error"
      >
        {{ error }}
        <i class="pi pi-times text-red-300 cursor-pointer"></i>
      </div>
      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="text" v-model="email"/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" />
      </div>
      <router-link :to="{name: 'signup'}" class="text-xs text-cyan-400">Don't have an account?</router-link>
      <div class="flex justify-end">
        <button class="bg-primary text-slate-50 btn" @click="login" :disabled="loading">
          Login <i :class="['pi text-xs', loading?'cursor-not-allowed pi-spin pi-spinner':'pi-lock']"></i>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import  { ref } from 'vue'
import { getBaseUrl  } from '@/composables/environ.js'
import { parseError } from '@/composables/errlogs.js'
import store from '@/store'
import axios from 'axios'


const error = ref('')
const email = ref('')
const password = ref('')
const loading = ref(false)


const formIsInvalid = () => {
  return !(email.value && password.value);
}
const login = async() => {
  if(formIsInvalid()) {
    return error.value = 'All fields are required';
  }

  loading.value = true
  try {
    const response = await axios.post(`${getBaseUrl()}/login`, { email: email.value, password: password.value })
    store.dispatch('auth/setAccessToken', response.data);
  } catch(err) {
    error.value = parseError(err)
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