<template>
  <section>
    <div class="hero-banner">
      <div class="hero-wrapper">
        <div class="banner-content">
          <h1 class="">SmoothKafé</h1>
          <p>Discover the real taste of coffee with SmoothKafé</p>
          <button class="px-[14px] py-[10px] rounded-full bg-amber-600 text-white">
            Order menu <i class="pi pi-arrow-down text-sm ml-2"></i>
          </button>
        </div>
        <div class="hero-footer space-y-2">
          <p class="text-slate-50">12 Aka Road, Uyo, Akwa Ibom</p>
          <div class="footer-socials">
            <i class="pi pi-instagram"></i>
            <i class="pi pi-facebook"></i>
            <i class="pi pi-twitter"></i>
          </div>
        </div>
      </div>
    </div>
    <section class="about">
      <div class="flex flex-col md:flex-row gap-3 xl:gap-5 max-w-[900px] mx-auto px-3">
        <img 
          src="/images/coffee-hero.jpg" 
          class="w-[300px] h-auto md:w-[400px] md:h-[500px] hidden sm:inline" 
        />
        <div class="max-w-[600px] px-3 sm:pl-[80px] space-y-5 md:pt-[50px]">
          <h1 class="font-['Quesha sans-serif'] text-4xl text-neutral-100 uppercase">About SmoothKafé</h1>
          <p class="text-sm text-slate-100">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus maiores porro accusamus eius provident blanditiis dolorum sed explicabo! Hic saepe sunt temporibus praesentium expedita. Voluptate voluptatibus culpa temporibus aspernatur cupiditate tempora, molestias sapiente porro, inventore libero, voluptatum maxime qui architecto!</p>

          <button class="px-[14px] py-[6px] rounded-full border border-slate-50 text-slate-50">
            Learn more <i class="pi pi-arrow-right text-xs"></i>
          </button>
        </div>
      </div>
    </section>
    <section class="menu">
      <div class="max-w-[800px] mx-auto flex flex-col md:flex-row gap-3 px-3">
        <div class="md:w-1/2">
          <h1 class="text-amber-50 text-5xl md:text-[50px] font-['Quesha san-serif']">Our Menu</h1>
          <button class="w-[150px] py-[8px] border-2 border-amber-50 text-amber-50 rounded-full mt-4">
            See more <i class="pi pi-arrow-right ml-2 text-xs"></i>
          </button>
        </div>

        <!-- Menu List -->
        <table class="table-auto md:w-1/2 px-3">
          <thead>
            <tr>
              <th class="menu-head">Name</th>
              <th class="menu-head right">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="m in menus" :key="m.id" class="group">
              <td class="menu-data group-hover:opacity-50 group-hover:cursor-pointer">{{ m.title }}</td>
              <td class="menu-data right group-hover:opacity-50 group-hover:cursor-pointer">{{ m.price }}</td>
              <td class="px-3">
                <i class="pi pi-shopping-cart text-amber-50 hover:cursor-pointer"></i>
              </td>
            </tr>
          </tbody>
        </table>


      </div>
    </section>
  </section>
</template>

<script>
export default {
  data: () => ({
    menus: [
      {id: 1, title: 'Double Expresso', price: '$12.9'},
      {id: 2, title: 'Americano', price: '$13.9'},
      {id: 3, title: 'Iced Americano', price: '$13.9'},
      {id: 4, title: 'Capuccino', price: '$14.9'},
      {id: 4, title: 'Flat White', price: '$11.9'},
    ]
  })
}

</script>


<style scoped>
.hero-banner {
  background: url('/images/coffee-g31f50df5c_1280.jpg');
  @apply w-full h-[500px] sm:h-[100vh] bg-cover bg-no-repeat bg-center relative;
}
.hero-wrapper {
  @apply w-full h-full;
}
.banner-content {
  @apply pt-[100px] md:pt-[150px] pb-[80px] max-w-[90%] sm:max-w-[768px] mx-auto flex flex-col
  items-center space-y-2;
}
.banner-content p, .banner-content h1 {
  font-family: Quesha;
  @apply drop-shadow-lg;
}
.banner-content h1 {
  @apply text-white text-4xl sm:text-7xl font-medium;
}
.banner-content p {
  @apply text-white text-base sm:text-3xl font-light text-center;
}

.hero-footer {
  @apply absolute bottom-0 py-[25px] pl-3 border-t border-slate-300 min-w-[95%] 
  md:min-w-[400px] min-h-[120px] text-slate-300;
}
.arrow-down {
  @apply w-[65px] h-[65px] rounded-full bg-[#8D6527] text-white absolute bottom-[30px] 
  right-0 hidden md:block;
}
.footer-socials {
  @apply flex gap-3 items-center;
}
.footer-socials .pi {
  @apply text-slate-100 text-sm transition hover:bg-white hover:text-slate-700 px-2 py-1 rounded-full;
}
.about {
  @apply bg-neutral-800 min-h-[60vh] py-[100px] border-t border-slate-50;
}
.menu {
  @apply bg-amber-800 min-h-[60vh] py-[100px];
}
tr {
  @apply border-b border-[#fffbeb5e];
}
.menu-head {
  @apply text-sm text-left text-[#fff] opacity-50 uppercase pb-3;
}
.menu-head.right {
  @apply text-right;
}
.menu-data {
  @apply text-sm text-left text-[#fff] capitalize py-3;
}
.menu-data.right {
  @apply text-right;
}
</style>