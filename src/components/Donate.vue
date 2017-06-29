<template>
  <div class="donate fk__donate">
    <div class="fk__donate__bg"></div>
    <div class="fk__donate__box">
      <h2 class="fk__heading fk__heading--light fk__donate__heading">Make a Donation</h2>
      <p class="fk__donate__box__copy">Famous King is beginning to make an impact and plans to focus full-time creative talent on the task of making God famous. Our goal is to raise over $100k in this first year of operation... we have $10k designated as matching funds already committed to this campaign.</p>
    </div>
    <div class="fk__donate__box fk__donate__box--white">
      <form class="fk__donate__form">
        <iframe src="https://donorbox.org/embed/new-beginnings-for-famous-king?recurring=true" height="685px" width="100%" style="max-width:500px; min-width:310px; max-height:none!important" seamless="seamless" id="dbox-form-embed" name="donorbox" frameborder="0" scrolling="no"></iframe>
      </form>
    </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'donate',
  data () {
    return {
      menuType: 'light'
    }
  },
  beforeMount(){
    this.$store.commit('setMenuType', this.menuType);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
  @import "../assets/global.scss";

  html, body{
    height: 100%;
  }
  .fk__donate{
    position: relative;
    display: flex;
    align-items: flex-start;
    height: auto;
    @include padding();
    flex-wrap: wrap;
    &__box{
      width: 100%;
      @include breakpoint('desktop'){
        width: calc(50% - 1rem);
      }
      &:first-child{
        margin: 2rem 0;
        @include breakpoint('desktop'){
          margin: 2rem 2rem 2rem 0;
        }
      }
      &:last-child{
        margin: 2rem 0;
        @include breakpoint('desktop'){
          margin: 2rem 0 2rem 2rem;
          width: calc(50% - 5rem);
        }
      }
      &--white{
        box-shadow: 0px 0px 20px transparentize($black, 0.8);
        background: transparentize($white, 0.1);
        border-radius: 10px;
        padding: 1rem;
      }
      &__copy{
        font-weight: 400;
        font-family: $rubik;
        font-style: italic;
        color: $white;
        line-height: 1.2rem;
        font-size: 0.9rem;
      }
    }
    &__heading{
      margin-left: 0;
      margin-bottom: 3rem;
    }
    &__form{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 2rem 0;
      &__input{
        width: 100%;
        max-width: 300px;
        background: transparent;
        border: none;
        border-bottom: solid 1px $brown;
        font-family: $lato;
        margin: 1rem 0;
        padding-bottom: 1.5rem;
        color: $brown;
        font-style: italic;
        letter-spacing: 0.75px;
        font-size: 16px;
        border-radius: 0;
        @include breakpoint('desktop'){
          font-size: 0.9rem;
        }
        &::placeholder{
          color: transparentize($brown, 0.5);
          text-transform: uppercase;
        }
        &:focus{
          outline: none;
          border: none;
          border-bottom: solid 2px $yellow;
          font-style: normal;
        }
        &--amount{
          font-family: $lato;
          font-style: italic;
          font-size: 2rem;
          color: $yellow;
          border: none;
          margin: 0;
          &::placeholder{
            color: $yellow;
            text-transform: uppercase;
          }
          &:focus{
            outline: none;
            border: none;
            border-bottom: none;
            font-style: italic;
          }
        }
      }
      &__textarea{
        font-family: $lato;
        background: transparent;
        border: none;
        border-bottom: solid 1px $brown;
        color: $brown;
        font-size: 0.8rem;
        margin: 2rem 0;
        min-height: 100px;
        font-style: italic;
        letter-spacing: 0.75px;
        font-size: 16px;
        border-radius: 0;
        @include breakpoint('desktop'){
          font-size: 0.9rem;
        }
        &::placeholder{
          text-transform: uppercase;
          color: transparentize($brown, 0.5);

        }
        &:focus{
          outline: none;
          border-bottom: solid 2px $yellow;
          font-style: normal;
          color: $brown;
        }
      }
      &__button{
        max-width: 200px;
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
        margin: 0;
        transition: 0.2s ease-in box-shadow;
        &:hover{
          cursor: pointer;
          box-shadow: 0px 0px 20px transparentize($black, 0.9);
        }
      }
    }

    &__bg{
      background-image: linear-gradient(to bottom left, transparentize($black, 0.5),transparentize($black, 0.4)), url('../assets/donate-bg.jpg');
      background-size: cover;
      background-position: center center;
      position: fixed;
      height: 100%;
      width: 100%;
      z-index: -1;
      left: 0;
      top: 0;
    }
  }
</style>
