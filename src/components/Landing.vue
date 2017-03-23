<template>
  <div class="landing fk__landing">
    <div class="fk__landing__container">
      <h1 class="fk__landing__heading">Let's Make God Famous</h1>
      <p class="fk__landing__copy">We make the true, living God famous through creative use of film and digital media.</p>
      <router-link to="/projects" class="fk__landing__cta">View Our Projects</router-link>
      <svg class="fk__landing__play" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><g transform="translate(5.087 5.087)"><clipPath id="a"><path d="M44.956 89.913c24.83 0 44.957-20.128 44.957-44.957C89.913 20.128 69.785 0 44.956 0 20.128 0 0 20.128 0 44.956c0 24.83 20.128 44.957 44.956 44.957z"/></clipPath><g clip-path="url(#a)"><path fill="#fff" fill-rule="nonzero" d="M-5-5h99.913v99.913H-5z"/></g></g><g transform="translate(5.087 5.087)"><clipPath id="b"><path d="M61.907 46.43L36.85 58.96V33.9L61.907 46.43z"/></clipPath><g clip-path="url(#b)"><path fill="#5B4B49" fill-rule="nonzero" d="M31.85 28.902h35.058V63.96H31.85z"/></g></g></svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'landing',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
  @import "../assets/global.scss";

  html, body{
    height: 100%;
    background-image: linear-gradient(to bottom left, transparentize($black, 0.6),transparentize($black, 0.5)), url('../assets/landing-bg.jpg');
    background-size: cover;
    background-position: center center;
  }
  .fk__landing{
    position: relative;
    padding-top: 80px;
    width: calc(100% - 2rem);
    padding: calc(2rem + 80px) 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px - 9rem);
    @include breakpoint('phone'){
      width: calc(100% - 4rem);
      padding: calc(2rem + 80px) 2rem;
    }
    @include breakpoint('tablet'){
      width: calc(100% - 8rem);
    }
    &__heading{
      font-family: $lato;
      font-weight: 900;
      text-transform: uppercase;
      color: $white;
      letter-spacing: 4px;
      text-align: center;
      font-size: 1.75rem;
    }
    &__copy{
      font-family: $lato;
      font-weight: 400;
      font-style: italic;
      color: transparentize($white, 0.3);
      font-size: 1rem;
      letter-spacing: 0.05px;
      text-align: center;
      padding: 0 0 1rem 0;
    }
    &__cta{
      max-width: 140px;
      text-decoration: none;
      font-size: 0.75rem;
      border: none;
      outline: none;
      background: $yellow;
      padding: 1rem 2rem;
      border-radius: 5px;
      font-family: $lato;
      color: $brown;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 1px;
      font-weight: 900;
      display: block;
      margin: 0 auto;
      transition: 0.2s ease-in box-shadow;
      &:hover{
        cursor: pointer;
        box-shadow: 0px 0px 20px transparentize($black, 0.5);
      }
    }
    &__play{
      height: 50px;
      width: 50px;
      position: relative;
      display: block;
      margin: 2rem auto 0 auto;
      @include breakpoint('tablet'){
        position: absolute;
        right: 0;
        bottom: 2rem;
      }
    }
  }
</style>
