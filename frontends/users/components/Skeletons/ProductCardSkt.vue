<template>
    <div class="product-card">
          <div class="prod-img bg-slate-50"></div>
          <div class="prod-body">
            <section class="slate-y-2">
                <div class="bg-slate-100 w-full h-[8px] mb-2"></div>
                <div class="bg-slate-100 w-[80%] h-[8px]"></div>
            </section>
            <div class="flex justify-between items-center">
              <div class="bg-slate-50 h-[28px] w-[50px]"></div>
              <div class="flex items-center gap-x-3">
                <div class="w-[65px] h-[38px] bg-slate-50"></div>
                <div class="w-[45px] h-[38px] bg-slate-50"></div>
              </div>
            </div>
          </div>
        </div>
</template>

<style scoped>
.product-card {
  @apply bg-white border border-slate-200 hover:shadow-lg p-2 flex flex-col justify-between h-max;
}
.prod-img {
  @apply grow object-cover w-full h-[250px] xl:scale-100;
}
.prod-body {
  @apply p-2 space-y-2 flex-none h-[100px] flex flex-col justify-end;
}
</style>