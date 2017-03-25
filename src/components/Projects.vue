<template>
  <div class="projects fk__projects">
    <div class="fk__projects__bg--texture"></div>
    <div class="fk__projects__bg--orange"></div>
    <div class="fk__projects__gradient"></div>
    <h2 class="fk__heading fk__heading--dark fk__projects__heading">Check Out Our Projects</h2>


    <div class="fk__projects__container">
      <router-link to="/projects/finding-home" class="fk__projects__project">
        <img class="fk__projects__project__poster" src="../assets/posters/findingHome.jpg"/>
        <h3 class="fk__projects__project__title">Finding Home</h3>
      </router-link>
      <router-link to="/projects/finding-home" class="fk__projects__project">
        <img class="fk__projects__project__poster" src="../assets/posters/findingHome.jpg"/>
        <h3 class="fk__projects__project__title">Finding Home OMG OMG OMG OMG OMGOG</h3>
      </router-link>
      <router-link to="/projects/finding-home" class="fk__projects__project">
        <img class="fk__projects__project__poster" src="../assets/posters/findingHome.jpg"/>
        <h3 class="fk__projects__project__title">Finding Home</h3>
      </router-link>
      <router-link to="/projects/finding-home" class="fk__projects__project">
        <img class="fk__projects__project__poster" src="../assets/posters/findingHome.jpg"/>
        <h3 class="fk__projects__project__title">Finding Home</h3>
      </router-link>
      <router-link to="/projects/finding-home" class="fk__projects__project">
        <img class="fk__projects__project__poster" src="../assets/posters/findingHome.jpg"/>
        <h3 class="fk__projects__project__title">Finding Home</h3>
      </router-link>
      <router-link to="/projects/finding-home" class="fk__projects__project">
        <img class="fk__projects__project__poster" src="../assets/posters/findingHome.jpg"/>
        <h3 class="fk__projects__project__title">Finding Home</h3>
      </router-link>

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
        min-height: 400px;
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
      &__poster{
        height: 300px;
        width: 200px;
        border-radius: 10px;
        box-shadow: 0px 0px 20px transparentize($black, 0.8);
        transition: box-shadow 0.2s ease-out;
      }
      &__title{
        font-size: 0.9rem;
        font-family: $lato;
        font-weight: 400;
        text-transform: uppercase;
        color: $white;
        letter-spacing: 1px;
      }
      &:hover{
        transform-origin: center center;
        transform: scale(1.05);
        .fk__projects__project__poster{
          box-shadow: 0px 0px 30px transparentize($black, 0.8);
        }
      }
    }
  }
</style>
