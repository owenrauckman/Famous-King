<template>
  <div class="donate fk__donate">
    <div class="fk__donate__bg"></div>
    <div class="fk__donate__box">
      <h2 class="fk__heading fk__heading--light fk__donate__heading">Make a Donation</h2>
      <p class="fk__donate__box__copy">This is some filler text explaining where your donation will go and how it will be used. This is just some more text to take up space.</p>
      <p class="fk__donate__box__copy">Not able to make a contribution but still want to support Famous King? Contact Us to see how you can get involved!</p>
    </div>
    <div class="fk__donate__box fk__donate__box--white">
      <form class="fk__donate__form">
        <input class="fk__donate__form__input fk__donate__form__input--amount" type="text" placeholder="$50.00">
        <input class="fk__donate__form__input" type="text" placeholder="Full Name / Organization">
        <input class="fk__donate__form__input" type="email" placeholder="Email Address">
        <input class="fk__donate__form__input" type="text" placeholder="Credit Card Number">
        <input class="fk__donate__form__input" type="text" placeholder="Exp Date / CVC">
        <button class="fk__donate__form__button" type="submit">Make Donation</button>
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
        padding: 2rem;
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
