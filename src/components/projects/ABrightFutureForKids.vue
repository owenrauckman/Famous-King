<template>
  <div class="project fk__project">
    <div class="bg"></div>
    <div class="cover"></div>
    <div class="fk__project__top">
      <div class="fk__project__top__image">
        <img class="fk__project__top__image__img" src="../../assets/posters/aBrightFutureForKids.jpg"/>
      </div>
      <div class="fk__project__top__info">
        <div class="fk__project__top__info__container">
          <h2 class="fk__project__top__info__title">A Bright Future For Kids</h2>
          <p class="fk__project__top__info__year">2016-2017</p>
          <p class="fk__project__top__info__details">Promotional</p>
          <div class="fk__project__top__info__description">
            <p>A Bright Future for Kids targets the core causes of poverty by embracing a holistic approach for lasting transformation that secures a bright future for underprivileged communities.  Their outreach team in Ethiopia and in Kenya are currently working with families in an effort to change their current situations to provide pathways to success. This ranges from providing school supplies for kids to helping parents build a small business that will provide for their families through the Small scale business venture.</p>
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
        </div>
      </div>
    </div>

    <div class="fk__project__testimonial">
      <div class="fk__project__testimonial__person">
        <div class="fk__project__testimonial__person__info">
          <img class="fk__project__testimonial__person__info--photo" src="../../assets/projects/a-bright-future-for-kids/aBrightFutureForKidsTestimonial.jpg"/>
          <h3 class="fk__project__testimonial__person__info--name">Solomon Dabe</h3>
          <h3 class="fk__project__testimonial__person__info--title">Founder of A Bright Future For Kids</h3>
        </div>

      </div>
      <div class="fk__project__testimonial__quote">
        <h3 class="fk__project__testimonial__quote__heading">Client Testimonial</h3>
        <p class="fk__project__testimonial__quote__copy">Traveling with Derek was more than filming; for me it was being sent to do kingdom work along side a brother in Christ.  During the whole video production process Derek took much time to have lengthy discussions on not only the project for him to understand the whole story of the organization and to try to understand every detail.  Derek serves passionately, gives his everything, and performed excellent work for our organization that has been much needed.
        </br></br>The impact of the final videos has just begun for us, but I believe these videos that Famous King has provided for us will give a way of exposing the dark places in the areas we work and bring a powerful message.  God for sure crossed our paths for a reason.  I thank God and am grateful for Famous King to come along side of ABF4K.  We would not have been able to videos or videos of such quality otherwise.</p>
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
          name: 'A Bright Future for Kids',
          link: 'https://player.vimeo.com/video/228287489',
          active: true,
        },
        {
          name: 'A Bright Future for Kids - Momma Daniel',
          link: 'https://player.vimeo.com/video/218064524',
          active: false,
        },
        {
          name: 'A Bright Future for Kids - Grandma Ester',
          link: 'https://player.vimeo.com/video/228283874',
          active: false,
        },
        {
          name: 'A Bright Future for Kids - Momma Rose',
          link: 'https://player.vimeo.com/video/228286126',
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
    background-image: linear-gradient(to bottom left, transparentize($black, 0.4),transparentize($black, 0.5)), url('../../assets/projects/a-bright-future-for-kids/cover.jpg');
    background-size: cover;
    background-position: top;
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
