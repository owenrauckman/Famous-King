<template>
  <div class="team fk__team">
    <div class="fk__team__bg--texture"></div>
    <div class="fk__team__bg--orange"></div>
    <div class="fk__team__gradient"></div>
    <h2 class="fk__heading fk__heading--dark fk__team__heading">Meet Our Team</h2>

    <div class="fk__team__container">
      <div class="fk__team__member">
        <img class="fk__team__member__head" src="../assets/team/kent.jpg"/>
        <div class="fk__team__member__info">
          <h3 class="fk__team__member__info--name">Kent Broddle</h3>
          <p class="fk__team__member__info--position">CEO</p>
          <p class="fk__team__member__info--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus diam sed facilisis varius. Integer id lacus id velit efficitur condimentum. Integer ac sapien eu massa sollicitudin sagittis. Duis eu consequat nisi. Nulla finibus fermentum elementum. Nam id ornare orci, in maximus diam.</p>
          <p class="fk__team__member__info--description">Sed a commodo nulla. Vivamus tristique nunc eget lacus ornare eleifend. Ut sodales dui non neque maximus dapibus. Nam in aliquet mi, et dictum mauris. In nisl lacus, congue a purus ut, consequat facilisis justo. In id ante consequat</p>
        </div>
      </div>
      <div class="fk__team__member">
        <img class="fk__team__member__head" src="../assets/team/derek.jpg"/>
        <div class="fk__team__member__info">
          <h3 class="fk__team__member__info--name">Derek Hammeke</h3>
          <p class="fk__team__member__info--position">Creative Lead</p>
          <p class="fk__team__member__info--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus diam sed facilisis varius. Integer id lacus id velit efficitur condimentum. Integer ac sapien eu massa sollicitudin sagittis. Duis eu consequat nisi. Nulla finibus fermentum elementum. Nam id ornare orci, in maximus diam.</p>
          <p class="fk__team__member__info--description"> nunc eget lacus ornare eleifend. Ut sodales dui non neque maximus dapibus. Nam in aliquet mi, et dictum mauris. In nisl lacus, congue a purus ut, consequat facilisis justo. In id ante consequat</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'team',
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
  .fk__team{
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
      margin-bottom: 2rem !important; //mixin override
    }
    &__container{
      position: relative;
      @include padding();
      display: flex;
      flex-wrap: wrap;
    }
    &__member{
      position: relative;
      margin: calc((180px / 2) + 4rem) 1rem 0 1rem;
      width: calc(100% - 2rem);
      background: $white;
      box-shadow: 0px 0px 20px transparentize($black, 0.8);
      border-radius: 10px;
      min-height: 300px;
      @include breakpoint('desktop'){
        width: calc(50% - 3rem);
        &:nth-child(odd){
          margin: 2rem 2rem 2rem 1rem;
        }
        &:nth-child(even){
          margin: 2rem 1rem 2rem 2rem;
        }
      }
      &__head{
        height: 180px;
        width: 135px;
        box-shadow: 0px 0px 20px transparentize($black, 0.8);
        border-radius: 10px;
        position: absolute;
        left: 0; right: 0;
        margin: 0 auto;
        top: calc(-180px / 2);
        @include breakpoint('desktop'){
          margin: 0;
          top: -1rem;
          left: -1rem;
        }
      }
      &__info{
        font-family: $lato;
        color: $brown;
        font-size: 0.75rem;
        margin: calc(180px /2 + 2rem) 1rem 2rem 1rem;
        text-align: center;
        @include breakpoint('desktop'){
          text-align: left;
          margin: 2rem 1rem 2rem calc(135px + 1rem);
        }
        &--name{
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 0;
        }
        &--position{
          font-weight: 400;
          letter-spacing: 0.5px;
          margin-top: 0.25rem;
        }
        &--description{
          font-weight: 400;
          line-height: 1.2rem;
          text-align: left;
        }
      }
    }

  }
</style>
