<template>
  <div class="team fk__team">
    <div class="fk__team__bg--texture"></div>
    <div class="fk__team__bg--orange"></div>
    <div class="fk__team__gradient"></div>
    <h2 class="fk__heading fk__heading--dark fk__team__heading">Our Mission</h2>

    <div class="fk__team__container">
      <div class="fk__team__info fk__team__info--main">
        <p class="fk__team__info__copy">Famous King's mission is to share who the one true God is to the world and to help make him famous by using film and creative media.</p>
        <p class="fk__team__info__copy">Our vision is that Famous King would help engage people in making God famous through projects such as promotional videos for non-profit organizations who are actively expressing who God is through their existing work, documentaries expressing characteristics of God and how he works with his people, as well as narrative works of fiction that help express God's characteristics and truth in the lives of his people.</p>
        <div class="fk__team__info__image-container">
          <img class="fk__team__info__image" src="../assets/team/missionFeature.jpg"/>
          <img class="fk__team__info__image" src="../assets/team/famousKingLogo.jpg"/>
        </div>
        <p class="fk__team__info__copy">Famous King is committed to producing works with excellence and with a cost-effective mindset. Video production can be a costly process and can result in big budgets and with lots of expenses. Famous King is committed to using a thoughtful and prayerful process to create the most impactful products with a minimum amount of cost.</p>
        <p class="fk__team__info__copy">The Famous King team is looking for partners who are making an impact for the Kingdom. We will ambitiously team up to produce creative media that will make God famous to the nations.</p>
      </div>
      <div class="fk__team__member">
        <img class="fk__team__member__head" src="../assets/team/kent.jpg"/>
        <a class="fk__team__member__email" href="mailto:kent.broddle@famousking.com">
          <img class="fk__team__member__email--icon" src="../assets/mail.svg"/>
        </a>
        <div class="fk__team__member__info">
          <h3 class="fk__team__member__info--name">Kent Broddle</h3>
          <p class="fk__team__member__info--position">CEO</p>
          <p class="fk__team__member__info--description">Kent Broddle has worked at Garmin International for the last 25 years as a software engineer and engineering leader. He has been assigned to many interesting products including automotive infotainment, mobile phones, digital radios, GPS equipped PDAs, aviation navigation devices, and GPS surveying equipment. His travels have taken him to many leading cultural centers such as London, Beijing, Shanghai, Taipei, and Barcelona. Kent has been an integral part of this world-wide, world-class company and has learned valuable lessons in product development, process structure, and large team organization.</p>
          <p class="fk__team__member__info--description">
Kent’s passion for starting Famous King started while travelling internationally. During one of the long flights to-from Taipei, God provided overwhelming inspiration to startup a film company whose mission would be to make Him famous. After many conversations and much soul searching, a team began to form that shared much of this same passion. Several years later, God has guided us to this tipping point… we want to share who the one true God is to the world and to help make him famous by using film and creative media.</p>
          <p class="fk__team__member__info--description">Kent has been married to his wife, Tonya, for 30 years and have 3 grown children. Kent and Tonya have been serving at Foundry Church in Lenexa, Kansas. During his free time Kent enjoys many activities and hobbies including basketball, softball, biking, playing games, watching sports, and spending time with family and friends.</p>
        </div>
      </div>
      <div class="fk__team__member">
        <img class="fk__team__member__head" src="../assets/team/derek.jpg"/>
        <a class="fk__team__member__email" href="mailto:derek.hammeke@famousking.com">
          <img class="fk__team__member__email--icon" src="../assets/mail.svg"/>
        </a>
        <div class="fk__team__member__info">
          <h3 class="fk__team__member__info--name">Derek Hammeke</h3>
          <p class="fk__team__member__info--position">Creative Lead</p>
          <p class="fk__team__member__info--description">Derek Hammeke is an award winning filmmaker, multiple business owner, husband and father.</p>
          <p class="fk__team__member__info--description">
            Derek hails from Kansas City, Kansas and received a Bachelor's of Biblical Literature from Ozark Christian College in Joplin, Missouri. He currently runs the production company Flying Treasure LLC and works for hire on various video projects including commercials, short films, and documentaries. His short films have won many awards and have played at multiple film festivals all over the country. His full length film Finding Home was accepted to the Cleveland International Film Festival which IndieWire deemed "one of the top 50 festivals in the world." The film was also accepted onto Netflix in late 2016 and can still currently be viewed on the streaming service.
          </p>
          <p class="fk__team__member__info--description">Derek is also a co-owner of Amplify Gymnastics based in Joplin MO. The gym was one week from opening when the F5 tornado of 2011 destroyed the building. After 9 months of rebuilding Amplify opened twice the original size and was honored by Washington D.C. with the Phoenix award which honored Amplify as The Best Small Business Recovery from a Disaster in the nation.</p>
          <p class="fk__team__member__info--description">As a filmmaker Derek has had the privilege to work on projects that span the globe, taking him to multiple countries for short and long term work. Derek is an experienced traveler when it comes to location shoots, having filmed in Cambodia, Thailand, Mozambique, Kenya, Poland, Ireland, Chile, DR Congo, South Africa, Honduras, and Japan.</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'mission',
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
    &__info{
      background: $white;
      box-shadow: 0px 0px 20px transparentize($black, 0.8);
      border-radius: 10px;
      width: 100%;
      margin: 2rem 0 0 0;
      padding: 0.5rem;
      &--main{
        @include breakpoint('phone'){
          padding: 2rem;
        }
      }
      @include breakpoint('desktop'){
        margin: 2rem 0;
      }
      &__copy{
        font-family: $lato;
        color: $brown;
        margin: 2rem;
        font-size: 1rem;
        @include breakpoint('desktop'){
          font-size: 1.25vw;
          line-height: 1.75vw;
          text-align: left;
        }
      }
      &__image{
        flex: 1;
        display: inline-block;
        border-radius: 5px;
        max-width: 100%;
        margin: 1rem 0;
        @include breakpoint('tablet'){
          max-width: calc(50% - 1rem);
          margin: 0;
        }
        &-container{
          display: flex;
          flex-direction: column;
          width: calc(100% - 4rem);
          @include breakpoint('tablet'){
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-between;
          }
          margin: 0 2rem;
        }
      }
    }
    &__member{
      position: relative;
      margin: calc((180px / 2) + 4rem) 0rem 0 0rem;
      width: 100%;
      background: $white;
      box-shadow: 0px 0px 20px transparentize($black, 0.8);
      border-radius: 10px;
      min-height: 300px;
      &:last-child{
        margin-bottom: 2rem;
      }
      @media screen and (min-width: 1024px){

        width: calc(50% - 3rem);
        &:nth-child(odd){
          margin: 7rem 0rem 2rem 4rem;
        }
        &:nth-child(even){
          margin: 7rem 1rem 2rem 1rem;
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
        // @include breakpoint('desktop'){
        //   margin: 0;
        //   top: -1rem;
        //   left: -1rem;
        // }
      }
      &__info{
        font-family: $lato;
        color: $brown;
        margin: calc(180px /2 + 2rem) 1rem 2rem 1rem;
        text-align: center;
        font-size: 1rem;
        padding: 0 1rem;
        // @include breakpoint('desktop'){
        //   font-size: 1.25vw;
        //   line-height: 1.75vw;
        //   text-align: left;
        //   margin: 2rem 1rem 2rem calc(135px + 1rem);
        // }
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
          text-align: left;
        }
      }
      &__email{
        &:active, &:visited, &:hover, &:link{
          outline: none;
          text-decoration: none;
        }
        &--icon{
          position: absolute;
          height: 30px;
          width: 30px;
          top: 40px;
          right: 45px;
          // @include breakpoint('desktop'){
          //   top: 180px;
          //   left: 90px;
          // }
        }
      }
    }

  }
</style>
