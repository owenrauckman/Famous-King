<template>
  <div class="project fk__project">
    <div class="fk__project__cover"></div>
    <div class="fk__project__info-container">
      <img class="fk__project__info__poster" src="../../assets/posters/findingHome.jpg"/>
      <div class="fk__project__info">
        <h2 class="fk__project__info__title">Finding Home</h2>
        <p class="fk__project__info__year">2014</p>
        <p class="fk__project__info__details">Full Length Documentary / Rapha House</p>
      </div>
    </div>
    <div class="fk__project__description">
      <p>No child deserves to be trafficked. No child deserves to be sexually exploited. Rapha House’s vision is to see children living safely in communities without the threats of trafficking and sexual exploitation.</p>
      <p>Finding Home is a gripping documentary following the lives of three young Cambodian women who were victims of sex trafficking at a young age. Through three years of filming their post trafficking experiences, the film allows these young women to reveal their stories with dignity. The viewer will see the devastation and heartache of these tragic stories, but will also experience hope and joy as they journey with these young women on a path from victim to survivor. Finding Home reminds us that we are all connected in our humanity; that we are all looking for a place of love, acceptance and community. A place called home.</p>
    </div>


    <div class="fk__project__content">
      <div class="fk__project__content__videos">
        <div class="fk__project__content__videos--clip"></div>
        <div class="fk__project__content__videos__container">
          <div class="fk__project__content__videos__playlist">
            <div v-for="video in videos"  v-if="video.active" class="fk__project__content__videos__playlist__box fk__project__content__videos__playlist__video">
              <iframe :src="video.link" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="fk__project__content__videos__playlist__box fk__project__content__videos__playlist__list">
              <ul>
                <li v-for="video in videos" @click="activateVideo(video)" :class="[{ 'fk__project__content__videos__playlist__list__item--active': video.active},'fk__project__content__videos__playlist__list__item']">
                  {{video.name}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="fk__project__content__testimonial">
        <div class="fk__project__content__testimonial__person">
          <div class="fk__project__content__testimonial__person__info">
            <img class="fk__project__content__testimonial__person__info--photo" src="../../assets/team/kent.jpg"/>
            <h3 class="fk__project__content__testimonial__person__info--name">Jonathan Doe</h3>
            <p class="fk__project__content__testimonial__person__info--title">Job Title Here</p>
          </div>
          <div class="fk__project__content__testimonial__person--organization">
            <img src="../../assets/projects/finding-home/ab4k.jpg"/>
          </div>
        </div>
        <div class="fk__project__content__testimonial__quote">
          <h3 class="fk__project__content__testimonial__quote__heading">Client Testimonial</h3>
          <p class="fk__project__content__testimonial__quote__copy">Finding Home is a unique documentary about trafficking, as the stories go far beyond the actual trafficking experiences. Finding Home shows in depth the struggle, growth, and challenges that come with trying to pick a life back up after it has been</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
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
        }
      ]
    }
  },
  mounted(){
    $(document).ready(function(){
      this.resizeCover();
      $(window).resize(function(){
        this.resizeCover();
      }.bind(this));
    }.bind(this));
  },
  methods:{
    // Super jank method to resize cover photo so overflow doesn't happen on mobile
    resizeCover(){
      let coverHeight = $('.fk__project__info__details').offset().top + $('.fk__project__info__details').outerHeight() + 16;
      if( $(window).width() < 540 ){
        $('.fk__project__cover').height(coverHeight + 80);
        $('.fk__project__info__poster').css('top',$('.fk__project__info__details').offset().top - 50);
        // position the project description
        $('.fk__project__description').css('top', $('.fk__project__info__poster').offset().top + $('.fk__project__info__poster').outerHeight() + 32 +'px');

      }
      else{
        $('.fk__project__cover').height(coverHeight);
        $('.fk__project__info__poster').css('top','0px');
        // position the project description
        $('.fk__project__description').css('top', $('.fk__project__cover').offset().top + $('.fk__project__cover').outerHeight() + 32 +'px');
      }
      // decide where to start the content (ew, gross soluton, but okay)
      $('.fk__project__content').css('top', $('.fk__project__description').offset().top + $('.fk__project__description').outerHeight() + 'px');

    },

    /* activates video in video list */
    activateVideo(selectedVideo){
      this.videos.forEach((video)=>{
        video.active = false;
      });
      selectedVideo.active = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
  @import "../../assets/global.scss";
  html, body{
    height: 100%;
  }
  .fk__project{
    &__cover{
      background-image: linear-gradient(to bottom left, transparentize($black, 0.4),transparentize($black, 0.5)), url('../../assets/projects/finding-home/cover.jpg');
      background-size: cover;
      background-position: top;
      height: 300px;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
      z-index: -1;
    }
    &__info-container{
      @include padding();
      position: absolute;
      height: 300px;
      margin-top: 100px;
      width: calc(100% - 6rem);
      @include breakpoint('phone'){
        margin-top: 150px;
        width: calc(100% - 8rem);
      }
      @include breakpoint('tablet'){
        width: calc(100% - 12rem);
        margin-top: 150px;

      }
    }
    &__info{
      position: absolute;
      top: 0;
      @include breakpoint('phone'){
        left: calc(200px + 5rem);
        width: calc(100% - 200px - 3rem);
      }
      @include breakpoint('tablet'){
        left: calc(200px + 6rem);
        width: calc(100% - 200px - 8rem);
      }
      &__title{
        font-size: 1.5rem;
        font-family: $lato;
        font-weight: 900;
        text-transform: uppercase;
        position: relative;
        color: $white;
        letter-spacing: 3px;
        margin-top:0;
      }
      &__year{
        font-size: 1.25rem;
        font-family: $lato;
        font-weight: 400;
        text-transform: uppercase;
        position: relative;
        color: $white;
        letter-spacing: 3px;
        margin-top: 0;
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
      }
      &__poster{
        height: 300px;
        width: 200px;
        border-radius: 10px;
        box-shadow: 0px 0px 20px transparentize($black, 0.8);
        top: 130px;
        position: absolute;
        @include breakpoint('phone'){
          top: auto;
        }
      }
    }
    &__description{
      position: absolute;
      color: $brown;
      font-family: $lato;
      font-style: italic;
      font-size: 0.9rem;
      line-height: 1.4rem;
      padding: 1rem;
      left: 0;
      max-width: 500px;
      @include breakpoint('phone'){
        padding: 2rem;
        left: calc(200px + 3rem);
      }
      @include breakpoint('tablet'){
        left: calc(200px + 4rem);
      }


    }
    &__content{
      position: absolute;
      height:auto;
      width: 100%;
      &__videos{
        margin-top: 3rem;
        background: linear-gradient(to bottom right, #F0C418, #F1A346);
        min-height: 400px;
        &--clip{
          clip-path: polygon(0 0%, 100% 0%, 100% 80%, 0% 100%);
          background: $white;
          background-size: cover;
          position: absolute;;
          left: 0;
          top: 0;
          width: 100%;
          min-height: 200px;
        }
        &__container{
          @include padding();
          padding-bottom: 4rem !important;
        }
        &__playlist{
          box-shadow: 0px 0px 20px transparentize($black, 0.8);
          border-radius: 10px;
          min-height: 300px;
          background: $white;
          position: relative;
          display: flex;
          flex-direction: column;
          @include breakpoint('tablet'){
            flex-direction: row;
          }
          &__box{
            padding: 2rem 2rem 0 2rem;
            width: calc(100% - 4rem);
            @include breakpoint('tablet'){
              padding: 2rem;
              width: calc(50% - 4rem);
            }
          }
          &__video{
            iframe{
              height: 100%;
              width: 100%;
            }
          }
          &__list{
            ul{
              padding: 0;
              list-style: none;
            }
            &__item{
              margin: 1rem;
              border: solid 1px $brown;
              border-radius: 10px;
              padding: 1rem 1rem;
              font-family: $lato;
              color: $brown;
              font-weight: 600;
              text-transform: uppercase;
              font-size: 0.9rem;
              background: transparent;
              transition: 0.2s background ease-in;
              &--active{
                border: solid 1px $yellow;
                background: transparentize($yellow, 0.5);
              }
              &:hover{
                border: solid 1px $yellow;
                background: transparentize($yellow, 0.9);
                cursor: pointer;
              }
            }
          }
        }
      }
      &__testimonial{
        display: flex;
        min-height: 400px;
        flex-wrap: wrap;
        &__person{
          position: relative;
          width: 100%;
          padding: 2rem 0;
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
            }
            &--title{
              font-weight: 400;
              margin: 0;
              margin-top: 0.25rem;
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
          background:url('../../assets/textureBackground.jpg');
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
          }
          &__heading{
            font-family: $lato;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 2px;
            max-width: 500px;
            margin-top: 3rem;
            @include breakpoint('tablet'){
              margin-top: 0;
            }
          }
          &__copy{
            font-family: $rubik;
            font-style: italic;
            max-width: 500px;
            position: relative;
            margin-left: 3rem;
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

  }
</style>
