<template>
  <div class="project fk__project">
    <div class="bg"></div>
    <div class="cover"></div>
    <div class="fk__project__top">
      <div class="fk__project__top__image">
        <img class="fk__project__top__image__img" src="../../assets/posters/flyingTreasure.jpg"/>
      </div>
      <div class="fk__project__top__info">
        <div class="fk__project__top__info__container">
          <h2 class="fk__project__top__info__title">Flying Treasure</h2>
          <p class="fk__project__top__info__year">2014-2017</p>
          <p class="fk__project__top__info__details">Promotional/Mini-Documentary</p>
          <div class="fk__project__top__info__description">
            <p>Flying Treasure is a for profit company owned by Derek Hammeke, the creative lead of Famous King.  Derek has been working for many years doing various video production projects for his company.  Many of these projects are ministry based projects where he works with churches, para-church organizations and other non-profits that are pursuing to make Jesus famous.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="fk__project__bottom">
      <h2 class="fk__heading fk__heading--dark fk__project__bottom__heading">Videos</h2>
      <div class="fk__project__video-container">
        <div v-for="video in videos" class="fk__project__video">
          <div class="js__fitvids">
            <iframe :src="video.link + '?title=0&byline=0&portrait=0'" frameborder="0" rameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
          <p class="fk__project__video__title">{{video.name}}</p>
          <p v-if="video.credit" class="fk__project__video__credit">{{video.credit}}</p>
        </div>
      </div>
    </div>

    <div class="fk__project__testimonial">
      <div class="fk__project__testimonial__person">
        <div class="fk__project__testimonial__person__info">
          <img class="fk__project__testimonial__person__info--photo" src="../../assets/projects/flying-treasure/flyingTreasureTestimonial.jpg"/>
          <h3 class="fk__project__testimonial__person__info--name">MD Neely</h3>
          <h3 class="fk__project__testimonial__person__info--title">CIY Video Director</h3>
        </div>

      </div>
      <div class="fk__project__testimonial__quote">
        <h3 class="fk__project__testimonial__quote__heading">Client Testimonial</h3>
        <p class="fk__project__testimonial__quote__copy">Derek's understanding of the language of cinema and his efficiency as an editor and cinematographer are excellent. He is a problem solver and works with a positive, team oriented attitude. Derek has become a trusted collaborator. As a cinematographer, he understands visual storytelling and emotion. On our most challenging projects he is my first choice as editor. I highly recommend him.</p>
      </div>
    </div>

  </div>
</template>

<script>
import fitvids from 'fitvids'

export default {
  name: 'project',
  data () {
    return {
      menuType: 'dark',
      videos: [
        {
          name: 'CIY - Aullido - Short Narrative Film',
          credit: 'Trailer and Film Edit',
          link: 'https://player.vimeo.com/video/128621690',
          active: true,
        },
        {
          name: 'Christ in Youth - Ruby - Short Documentary Film',
          link: 'https://player.vimeo.com/video/98465957',
          credit: 'Trailer and Film Edit',
          active: false,
        },
        {
          name: 'Christ in Youth - Unseen - Short Narrative Film',
          link: 'https://player.vimeo.com/video/219902386',
          credit: 'Credit - Film Edit',
          active: false,
        },
        {
          name: 'First Church Verdigris - Promotional',
          link: 'https://player.vimeo.com/video/138999597',
          credit: 'Credit - Creator',
          active: false,
        },
        {
          name: 'First Church - Wes - Testimony',
          link: 'https://player.vimeo.com/video/124335519',
          credit: 'Credit - Creator',
          active: false,
        },
      ]
    }
  },
  mounted(){
    fitvids('.js__fitvids') //fitvids
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../assets/global.scss";
  .bg{
    position: fixed;
    top: 0; left: 0; height: 100%; width: 100%;
    z-index: -2;
  }
  .cover{
    background-image: linear-gradient(to bottom left, transparentize($black, 0.4),transparentize($black, 0.5)), url('../../assets/projects/flying-treasure/cover.jpg');
    background-size: cover;
    background-position: center;
    height: 188px; //300px (height of poster) - header height
    width: 100%;
    position: absolute;
    top: -112px; //this is the calced height of the header
    @include breakpoint('desktop'){
      height: 16vw;
      top: calc(-8vw - 2rem); //this is the calced height of the header
    }
    left: 0;
    z-index: -1;
  }
  html, body{
    height: 100%;
  }
  .js__fitvids{
    background: darken($white, 5%);
  }
  .fk__project{
    position: relative;
    &__top{
      position: relative;
      @include padding();
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      @include breakpoint('tablet'){
        flex-wrap: nowrap;
        justify-content:flex-start;
      }
      &__image{
        width: auto;
        @include breakpoint('tablet'){
          flex-wrap: nowrap;
          width: 300px;
        }
        &__img{
          height: 300px;
          width: 200px;
          border-radius: 10px;
          box-shadow: 0px 0px 20px transparentize($black, 0.8);
        }
      }
      &__netflix{
        display: block;
        border-radius: 5px;
        margin: 1rem 0;
        border: solid 1px $brown;
        text-align: center;
        font-family: $rubik;
        text-transform: uppercase;
        padding: 0.5rem 0;
        transition: all 0.2s ease-in;
        width: 200px;
        &:link, &:visited, &:hover, &:active{
          text-decoration: none;
          color: $brown;
        }
        &:hover{
          background: $brown;
          color: $white;
        }
      }
      &__info{
        width: 100%;
        margin-top: 0;
        @include breakpoint('tablet'){
          margin-top: 6rem;
        }
        @include breakpoint('desktop'){
          margin-top: 8vw;
        }
        &__container{
          @include breakpoint('tablet'){
            margin: 0 0 0 1rem;
          }
          @include breakpoint('desktop'){
            margin: 0;
          }
        }
        &__title{
          font-size: 1.5rem;
          font-family: $lato;
          font-weight: 900;
          text-transform: uppercase;
          position: relative;
          color: $white;
          letter-spacing: 3px;
          margin-top:1rem;
          margin-bottom: 0.5rem;
          color: $brown;
          text-align: center;
          @include breakpoint('tablet'){
            margin-top: 0;
            text-align: left;
          }
        }
        &__year{
          font-size: 1rem;
          font-family: $lato;
          font-weight: 600;
          text-transform: uppercase;
          position: relative;
          color: $white;
          letter-spacing: 3px;
          margin-top: 0;
          color: $brown;
          text-align: center;
          margin-bottom: 0.5rem;
          @include breakpoint('tablet'){
            text-align: left;
            margin-bottom: 1rem;
          }
        }
        &__details{
          font-size: 0.75rem;
          font-family: $lato;
          font-weight: 400;
          font-style: italic;
          position: relative;
          color: $white;
          letter-spacing: 2px;
          margin-top: 0;
          color: $brown;
          text-align: center;
          @include breakpoint('tablet'){
            text-align: left;
          }
          @include breakpoint('desktop'){
            font-size: 1.25vw;
          }
        }
        &__description{
          color: $brown;
          font-family: $lato;
          font-style: italic;
          font-size: 0.9rem;
          line-height: 1.4rem;
          @include breakpoint('desktop'){
            font-size: 1.25vw;
            line-height: 1.75vw;
          }
        }
      }
    }

    //video stuff
    &__video-container{
      display: flex;
      flex-wrap: wrap;
    }
    &__video{
      width: 100%;
      padding: 2rem 0;
      margin: 0 auto;
      @include breakpoint('tablet'){
        width: calc(50% - 2rem);
        &:nth-child(odd){
          padding: 2rem 2rem 2rem 0;
        }
        &:nth-child(even){
          padding: 2rem 0rem 2rem 2rem;
        }
      }
      &__title{
        font-family: $lato;
        color: $brown;
        font-weight: 700;
        margin: 1rem 0 0 0;
        letter-spacing: 0.5px;
        @include breakpoint('desktop'){
          font-size: 1.25vw;
        }
      }
      &__credit{
        font-family: $lato;
        color: $brown;
        font-weight: 300;
        margin: 0;
        letter-spacing: 0.5px;
        @include breakpoint('desktop'){
          font-size: 1.25vw;
        }
      }
    }

    &__bottom{
      @include padding();
      &__heading{
        margin: 2rem 0 2rem 0 !important;
        text-align: center;
        &:after{
          left: 0; right: 0;
          margin: 1rem auto;
        }
        @include breakpoint('desktop'){
          margin: 2rem 0 3rem 0 !important;
        }

      }
      &__list{
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
        margin: 2rem 0;
        justify-content: center;
        @include breakpoint('phone'){
          justify-content: flex-start;
        }
        &__item{
          list-style: none;
          margin: 0.5rem 0.25rem;
          border: solid 1px $brown;
          border-radius: 10px;
          padding: 0.5rem;
          font-family: $lato;
          color: $brown;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.7rem;
          background: transparent;
          transition: 0.2s background ease-in;
          &:hover{
            border: solid 1px $yellow;
            background: transparentize($yellow, 0.9);
            cursor: pointer;
          }
          &--active{
            border: solid 1px $yellow;
            background: transparentize($yellow, 0.5);
          }
        }
      }
      &__video{
        iframe{
          height: 100%;
          width: 100%;
          min-height: 200px;
          @include breakpoint('phone'){
            min-height: 400px;
          }
        }
      }
    }

    &__testimonial{
      margin: 2rem 0 0 0;
      display: flex;
      min-height: 400px;
      flex-wrap: wrap;
      &__person{
        position: relative;
        width: 100%;
        padding: 2rem 0 0 0;
        background: $white;
        background: url('../../assets/textureBackground.jpg');
        backgorund-size: cover;
        @include breakpoint('tablet'){
          width: 350px;
        }
        display: flex;
        justify-content: center;
        align-items: center;

        &__info{
          font-family: $lato;
          color: $brown;
          font-size: 0.75rem;
          margin-bottom: 2rem;
          text-align: center;
          @include breakpoint('tablet'){
            margin-bottom: 0;
          }
          &--photo{
            height: 135px;
            width: 101.25px;
            box-shadow: 0px 0px 20px transparentize($black, 0.8);
            border-radius: 10px;
          }
          &--name{
            font-weight: 700;
            margin: 1rem 0 0 0;
            letter-spacing: 0.5px;
            @include breakpoint('desktop'){
              font-size: 1vw;
            }
          }
          &--title{
            font-weight: 400;
            margin: 0;
            margin-top: 0.25rem;
            @include breakpoint('desktop'){
              font-size: 1vw;
            }
          }
        }
        &--organization{
          height: 100px;
          width: 100px;
          background: $white;
          border-radius: 500px;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          bottom: -50px;
          left: 0;
          right: 0;
          margin: 0 auto;
          @include breakpoint('tablet'){
            right: -50px;
            top: 50px;
            left: auto;
          }
          img{
            height: 60px;
            width: 60px;
          }
        }
      }
      &__quote{
        background: $yellow;
        background-size: cover;
        color: $brown;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: left;
        width: 100%;
        padding: 2rem;
        @include breakpoint('tablet'){
          width: calc(100% - 350px - 4rem);
          padding: 5rem 2rem;
        }
        &__heading{
          font-family: $lato;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 2px;
          max-width: 1024px;
          margin-top: 3rem;
          @include breakpoint('tablet'){
            margin-top: 0;
          }
          @include breakpoint('desktop'){
            font-size: 1.25vw;
          }
        }
        &__copy{
          font-weight: 400;
          font-family: "Lato", Helvetica, Arial, sans-serif;
          font-style: italic;
          max-width: 1024px;
          position: relative;
          margin-left: 3rem;
          width: 100%;
          @include breakpoint('desktop'){
            font-size: 1.25vw;
          }
          &:before{
            position: absolute;
            content: '"';
            font-family: $rubik;
            font-style: italic;
            font-weight: 900;
            font-size: 4rem;
            left: -3rem;
            top: -2rem;
          }
        }
      }
    }

  }
</style>
