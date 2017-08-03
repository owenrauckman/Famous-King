<template>
  <div class="project fk__project">
    <div class="bg"></div>
    <div class="cover"></div>
    <div class="fk__project__top">
      <div class="fk__project__top__image">
        <img class="fk__project__top__image__img" src="../../assets/posters/findingHome.jpg"/>
        <a class="fk__project__top__netflix" href="https://www.netflix.com/title/80109146">
          <img class="fk__project__top__netflix__image" src="../../assets/now-on-netflix.png"/>
        </a>
      </div>
      <div class="fk__project__top__info">
        <div class="fk__project__top__info__container">
          <h2 class="fk__project__top__info__title">Finding Home</h2>
          <p class="fk__project__top__info__year">2014</p>
          <p class="fk__project__top__info__details">Full Length Documentary / Rapha House</p>
          <div class="fk__project__top__info__description">
            <p>No child deserves to be trafficked. No child deserves to be sexually exploited. Rapha House’s vision is to see children living safely in communities without the threats of trafficking and sexual exploitation.</p>
            <p>Finding Home is a gripping documentary following the lives of three young Cambodian women who were victims of sex trafficking at a young age. Through three years of filming their post trafficking experiences, the film allows these young women to reveal their stories with dignity. The viewer will see the devastation and heartache of these tragic stories, but will also experience hope and joy as they journey with these young women on a path from victim to survivor. Finding Home reminds us that we are all connected in our humanity; that we are all looking for a place of love, acceptance and community. A place called home.</p>
            <p>*This project was done under the name Flying Treasure which is creative lead Derek Hammeke's company.  The Rapha House organization plans to continue work with Famous King in the future.</p>          </div>
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

    <a href="https://www.netflix.com/title/80109146">
      <img class="fk__project__netflix-banner" src="../../assets/large-netflix.png"/>
    </a>

    <!-- <div class="fk__project__testimonial">
      <div class="fk__project__testimonial__person">
        <div class="fk__project__testimonial__person__info">
          <img class="fk__project__testimonial__person__info--photo" src="../../assets/team/kent.jpg"/>
          <h3 class="fk__project__testimonial__person__info--name">Jonathan Doe</h3>
          <h3 class="fk__project__testimonial__person__info--title">Job Title Here</h3>
        </div>

      </div>
      <div class="fk__project__testimonial__quote">
        <h3 class="fk__project__testimonial__quote__heading">Client Testimonial</h3>
        <p class="fk__project__testimonial__quote__copy">Finding Home is a unique documentary about trafficking, as the stories go far beyond the actual trafficking experiences. Finding Home shows in depth the struggle, growth, and challenges that come with trying to pick a life back up after it has been</p>
      </div>
    </div> -->

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
          name: 'Finding Home Trailer',
          link: 'https://player.vimeo.com/video/87199168',
          active: true,
        },
        {
          name: 'Finding Home - Papa Joe',
          link: 'https://player.vimeo.com/video/92892302',
          active: false,
        },
        {
          name: 'Finding Home - Kids Casin',
          link: 'https://player.vimeo.com/video/92744492',
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
    background-image: linear-gradient(to bottom left, transparentize($black, 0.4),transparentize($black, 0.5)), url('../../assets/projects/finding-home/cover.jpg');
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
        border: solid 1px #ED1C24;
        text-align: center;
        font-family: $rubik;
        text-transform: uppercase;
        padding: 0.5rem 0;
        width: 200px;
        &:link, &:visited, &:hover, &:active{
          text-decoration: none;
        }
        &:hover{
          background: darken($white, 5%) !important;
          color: $white;
        }
        &__image{
          width: 100px;
          height: auto;
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
          font-family: $rubik;
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
    &__netflix-banner{
      display: block;
      width: 100%;
      height: auto;
    }
  }
</style>
