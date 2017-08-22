<template>
  <div class="projects fk__projects">
    <div class="fk__projects__bg--texture"></div>
    <div class="fk__projects__bg--orange"></div>
    <div class="fk__projects__gradient"></div>
    <h2 class="fk__heading fk__heading--dark fk__projects__heading">Check Out Our Projects</h2>


    <div class="fk__projects__container" id="js__projects__container">
      <router-link to="/projects/finding-home" class="fk__projects__project">
        <img class="fk__projects__project__poster" src="../assets/posters/findingHome.jpg"/>
        <h3 class="fk__projects__project__title">Finding Home</h3>
      </router-link>
      <router-link to="/projects/mustard-seed" class="fk__projects__project">
        <img class="fk__projects__project__poster" src="../assets/posters/mustardSeed.jpg"/>
        <h3 class="fk__projects__project__title">Mustard Seed</h3>
      </router-link>
      <router-link to="/projects/honduras-ministries" class="fk__projects__project">
        <img class="fk__projects__project__poster" src="../assets/posters/hondurasMinistries.jpg"/>
        <h3 class="fk__projects__project__title">Honduras Ministries</h3>
      </router-link>
      <router-link to="/projects/flying-treasure" class="fk__projects__project">
        <img class="fk__projects__project__poster" src="../assets/posters/flyingTreasure.jpg"/>
        <h3 class="fk__projects__project__title">Flying Treasure</h3>
      </router-link>
      <router-link to="/projects/a-bright-future-for-kids" class="fk__projects__project">
        <img class="fk__projects__project__poster" src="../assets/posters/aBrightFutureForKids.jpg"/>
        <h3 class="fk__projects__project__title">A Bright Future For Kids</h3>
      </router-link>
      <router-link to="/projects/velvet-ashes" class="fk__projects__project">
        <img class="fk__projects__project__poster" src="../assets/posters/placeholder.jpg"/>
        <h3 class="fk__projects__project__title">Velvet Ashes</h3>
      </router-link>
      <!-- prev/next arrows -->
      <div class="fk__projects__arrow fk__projects__arrow--left" id="js__projects__arrow__left">
        <svg class="fk__projects__arrow__svg fk__projects__arrow__svg--left" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5"><path d="M12.664 31.332L50 68.67 87.34 31.33" fill="none" stroke="#fff" stroke-width="16.38627"/></svg>
      </div>
      <div class="fk__projects__arrow fk__projects__arrow--right" id="js__projects__arrow__right">
        <svg class="fk__projects__arrow__svg fk__projects__arrow__svg--right" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5"><path d="M12.664 31.332L50 68.67 87.34 31.33" fill="none" stroke="#fff" stroke-width="16.38627"/></svg>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'projects',
  data () {
    return {
      menuType: 'dark'
    }
  },
  mounted(){
    /* Global Vars */
    const container = $('#js__projects__container');
    const leftArrow = $('#js__projects__arrow__left');
    const rightArrow = $('#js__projects__arrow__right');

    /* Methods to call on mount */
    this.checkWidth(container, leftArrow, rightArrow);

    console.log(container.width());

    /* Event Listeners */
    container.scroll(()=>{
      this.checkWidth(container, leftArrow, rightArrow);
    });

    $(window).resize(()=>{
      this.checkWidth(container, leftArrow, rightArrow);
    });

    /* Click Events */
    rightArrow.click(()=>{
      container.animate({
        scrollLeft: container.scrollLeft() + $('.fk__projects__project').width()
      }, 250);
    });

    leftArrow.click(()=>{
      container.animate({
        scrollLeft: container.scrollLeft() - $('.fk__projects__project').width()
      }, 250);
    });

  },
  methods: {
    checkWidth(container, leftArrow, rightArrow){
      const project = $('.fk__projects__project');

      if($(window).width() >= 768){
        if(container.scrollLeft() === 0){
          leftArrow.hide();
        } else{
          leftArrow.show();
        }
        /* add 128 to make up for 8rems of container padding*/
        if(container.width() + container.scrollLeft() > ((project.length) * project.width() + 128) ){
          rightArrow.hide();
        } else{
          rightArrow.show();
        }
      } else{
        leftArrow.hide();
        rightArrow.hide();
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
  @import "../assets/global.scss";
  html, body{
    height: 100%;
  }
  .fk__projects{
    &__bg{
      &--texture{
        clip-path: polygon(0 0%, 100% 0%, 100% 80%, 0% 100%);
        background:url('../assets/textureBackground.jpg');
        background-size: cover;
        position: absolute;;
        left: 0;
        top: 0;
        width: 100%;
        min-height: 60vh;
      }
      &--orange{
        height: 100%;
        width: 100%;
        position: fixed;
        left: 0; top: 0;
        background: linear-gradient(to bottom right, #F0C418, #F1A346);
        z-index: -1;
      }
    }
    &__heading{
      @include padding();
      margin-bottom: 2rem !important; //overrides mixin
    }
    &__container{
      position: relative;
      @include padding();
      display: flex;
      overflow-x: auto;
      height: auto;
      align-items: baseline;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar {
        width: 0px;  /* remove scrollbar space */
        background: transparent;  /* optional: just make scrollbar invisible */
      }
    }
    &__project{
      display: inline-block;
      text-decoration: none;
      outline: none;
      border: none;
      transform: scale(1);
      transition: transform 0.2s ease-in;
      transform-origin: center center;
      margin: 2rem 2rem;
      &:first-child{
        margin: 2rem 2rem 2rem 0;
      }
      &:last-child{
        padding-right: 2rem;
      }
      &__poster{
        height: 300px;
        width: 200px;
        @include breakpoint('desktop'){
          height: 30vw;
          width: 20vw;
        }
        /* this is specifically for tablets */
        @media screen and (min-width: 540px) and (max-width: 1025px){
          height: 45vh;
          width: 30vh;
        }
        @media screen and (min-height: 600px) and (max-height: 1366px) and (max-width: 1024px){
          height: 60vh;
          width: 40vh;
        }
        /* end for tablets */
        border-radius: 10px;
        box-shadow: 0px 0px 20px transparentize($black, 0.8);
        transition: box-shadow 0.2s ease-out;

        /* only the last one needs this padding */
        &:last-child{
          margin-right: 2rem !important;
        }
      }
      &__title{
        font-size: 0.9rem;
        font-family: $lato;
        font-weight: 400;
        text-transform: uppercase;
        color: $white;
        letter-spacing: 1px;
        @include breakpoint('tablet'){
          font-size: 1rem;
        }
        @media screen and (min-width: 1025px){
          font-size: 1.2vw;
        }
      }
      &:hover{
        transform-origin: center center;
        transform: scale(1.05);
        .fk__projects__project__poster{
          box-shadow: 0px 0px 30px transparentize($black, 0.8);
        }
      }
    }
    &__arrow{
      position: fixed;
      height: 50px;
      width: 50px;
      top: calc(50% + 50px);
      bottom: 0;
      background: white;
      border-radius: 500px;
      box-shadow: 0px 0px 30px transparentize($black, 0.8);
      transition: background 0.2s ease-in-out;
      /* Hide on everything but desktop */
      display: none;
      @include breakpoint('tablet'){
        display: block;
      }
      @include breakpoint('desktop'){
        display: block;
        width: 4vw;
        height: 4vw;
        top: calc(50% + 4vw);
      }
      &:hover{
        cursor: pointer;
        background: darken($white, 5%);
      }
      &--left{
        left: 1rem;
      }
      &--right{
        right: 1rem;
      }
      &__svg{
        height: 20px;
        width: 20px;
        position: absolute;
        top: 50%;
        left: 0; right: 0;
        margin: 0 auto;
        @include breakpoint('desktop'){
          height: 1.5vw;
          width: 1.5vw;
        }
        &--left{
          transform: translateY(-50%) rotate(90deg);
        }
        &--right{
          transform: translateY(-50%) rotate(-90deg);
        }
        path{
          stroke: $brown;
        }
      }
    }
  }
</style>
