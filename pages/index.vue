<template>
  <div class="home-container">
    <section class="swiper-banner">
      <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <template v-for="(item, index) of data.data.modules[0].data.banner">
            <nuxt-link
              to="/detail"
              :key="index"
              class="swiper-slide"
              :style="{ 'background-image': `url(${item.image})` }"
            ></nuxt-link>
          </template>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "~/plugins/lib/axios";
import Logo from "~/components/Logo.vue";
import Swiper from "swiper";

export default {
  data() {
    data: {
    }
  },
  mounted() {
    console.log(process);
    console.log(this.data.data.modules);
    this.getBannerData();
  },
  methods: {
    getBannerData() {
      let mySwiper = new Swiper(".swiper-container", {
        speed: 400,
        spaceBetween: 15,
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        },
      });
    }
  },
  components: {
    Logo
  },
  async asyncData({ params }) {
    const result = await axios.get(
      "https://market.douban.com/api/v2/market/home/modules"
    );
    return {
      data: result
    };
  }
};
</script>

<style>
.swiper-container {
  background: #f9f9f9;
}
.swiper-slide {
  padding: 25% 0;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  text-align: center;
  font-size: 18px;
}
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
