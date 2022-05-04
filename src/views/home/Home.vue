<template>
  <div id="home">
    <nav-bar class="home-bgc">
      <div slot="centen">购物车</div>
    </nav-bar>

    <!-- 轮播图 -->
    <div class="aaa">
    <swiper class="swiper" ref="swiper" @ftouchmove="mouseMove" @ftouchend="mouseLeave">
      <swiper-item
        class="swiper-item"
        ref="sitem"
        v-for="item in banner.list"
        :key="item.list"
      >
        <img :src="item.image" alt="失败" />
      </swiper-item>
    </swiper>
    </div>

  <!-- 推荐栏 -->
  <recommend-view :recommends="recommend" />
  <!-- 特色 -->
  <feature-view />
  <tab-control :tiltes="['流行','新款','精选']" />
  <ul>
    <li>li1</li>
    <li>li2</li>
    <li>li3</li>
    <li>li4</li>
    <li>li5</li>
    <li>li6</li>
    <li>li7</li>
    <li>li8</li>
    <li>li9</li>
    <li>li10</li>
    <li>li11</li>
    <li>li12</li>
    <li>li13</li>
    <li>li14</li>
    <li>li15</li>
    <li>li16</li>
    <li>li17</li>
    <li>li18</li>
    <li>li19</li>
    <li>li20</li>
    <li>li21</li>
    <li>li22</li>
    <li>li23</li>
    <li>li24</li>
    <li>li25</li>
    <li>li26</li>
    <li>li27</li>
    <li>li28</li>
    <li>li29</li>
    <li>li30</li>
    <li>li31</li>
    <li>li32</li>
    <li>li33</li>
    <li>li34</li>
    <li>li35</li>
    <li>li36</li>
    <li>li37</li>
    <li>li38</li>
    <li>li39</li>
    <li>li40</li>
    <li>li41</li>
    <li>li42</li>
    <li>li43</li>
    <li>li44</li>
    <li>li45</li>
    <li>li46</li>
    <li>li47</li>
    <li>li48</li>
    <li>li49</li>
    <li>li50</li>
    <li>li51</li>
    <li>li52</li>
    <li>li53</li>
    <li>li54</li>
    <li>li55</li>
    <li>li56</li>
    <li>li57</li>
    <li>li58</li>
    <li>li59</li>
    <li>li60</li>
    <li>li61</li>
    <li>li62</li>
    <li>li63</li>
    <li>li64</li>
    <li>li65</li>
    <li>li66</li>
    <li>li67</li>
    <li>li68</li>
    <li>li69</li>
    <li>li70</li>
    <li>li71</li>
    <li>li72</li>
    <li>li73</li>
    <li>li74</li>
    <li>li75</li>
    <li>li76</li>
    <li>li77</li>
    <li>li78</li>
    <li>li79</li>
    <li>li80</li>
    <li>li81</li>
    <li>li82</li>
    <li>li83</li>
    <li>li84</li>
    <li>li85</li>
    <li>li86</li>
    <li>li87</li>
    <li>li88</li>
    <li>li89</li>
    <li>li90</li>
    <li>li91</li>
    <li>li92</li>
    <li>li93</li>
    <li>li94</li>
    <li>li95</li>
    <li>li96</li>
    <li>li97</li>
    <li>li98</li>
    <li>li99</li>
    <li>li100</li>
  </ul>
  </div>
</template>

<script>
import Vue from "vue";

import { animation } from "components/common/swiper/animation";
import NavBar from "components/common/navbar/NavBar";
import Swiper from "components/common/swiper/Swiper";
import SwiperItem from "components/common/swiper/SwiperItem";
import TabControl from "components/content/tabControl/TabControl"
import { getHomeMultiData } from "network/home.js";

import RecommendView from "./childrenComps/RecommendView"
import FeatureView from "./childrenComps/FeatureView"
export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    RecommendView,
    FeatureView,
    TabControl
  },
  data() {
    return {
      banner: "",
      recommend: [],
      cloneElement: "",
      flag: true,
      timer:'',
      tempTimer:'',
    };
  },
  methods: {
    mouseMove() {
      console.log('111');
      const tempTimer = this.timer
      clearInterval(this.timer)
      this.timer = tempTimer
    },
    mouseLeave() {
      console.log('11111');
      console.log(this.timer)
      setTimeout(this.timer)
    }
  },
  created() {
    // 请求多个数据
    getHomeMultiData().then((res) => {
      console.log(res);
      this.banner = res.data.data.banner;
      this.recommend = res.data.data.recommend.list;
      console.log(res.data.data.recommend);
    });
  },
  beforeUpdate() {
    console.log(this.banner.list.length);
    if (this.flag) {
      this.$nextTick(() => {
        Vue.set(this.banner.list, this.banner.list.length, this.banner.list[0]);
        this.flag = false;
      });
    }
  },
  updated() {
    this.cloneElement = this.$refs.sitem[3];
  },
  mounted() {
    const swiper = this.$refs.swiper.$el;
    const swiperLength = this.$refs.swiper.$createElement.length;
    let nums = 0;
     const timer = setInterval(() => {
      // console.log(swiper.style.left);
      if (nums <= swiperLength - 1) {
        nums++;
        animation(swiper, nums * -375);
      } else if (nums == swiperLength) {
        swiper.style.left = 0 + "px";
        animation(swiper, -375);
        nums = 1;
      }
    }, 1500)
     this.timer = timer
      // setInterval(this.timer,1500)
    // clearInterval(timer)
  },
};
</script>

<style>
#home{
  padding-top: 44px;
}
.home-bgc {
  background-color: rgb(255, 191, 202);
  color: #fff;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
