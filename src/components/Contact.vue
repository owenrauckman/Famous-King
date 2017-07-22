<template>
  <div class="contact fk__contact">
    <div class="fk__contact__bg"></div>
    <div class="fk__contact__box">
      <h2 class="fk__heading fk__heading--light fk__contact__heading">Contact</h2>
      <p class="fk__contact__box__copy">Famous King's mission is to share who the one true God is to the world and to help make him Famous by using film and creative media.</p>
      <p class="fk__contact__box__copy">The vision of Famous King is to help make God famous throughout the world by using creative media arts in engaging ways. Such projects would be promotional videos for non-profit organizations who are actively expressing who God is through their existing work, documentaries expressing characteristics of God and how he works with his people, as well as Narrative works of fiction that help express God's characteristics and Truth in the lives of his people.</p>
      <ul class="fk__contact__social">
        <li class="fk__contact__social__icon">
          <a href="https://www.facebook.com/famouskinginc">
            <img src="../assets/social/facebook.svg"/>
          </a>
        </li>
        <li class="fk__contact__social__icon">
          <a href="https://www.instagram.com/famouskingmedia">
            <img src="../assets/social/instagram.svg"/>
          </a>
        </li>
        <li class="fk__contact__social__icon">
          <a href="https://twitter.com/famouskingmedia">
            <img src="../assets/social/twitter.svg"/>
          </a>
        </li>
        <li class="fk__contact__social__icon">
          <a href="https://medium.com/@famousking">
            <img src="../assets/social/medium.svg"/>
          </a>
        </li>
        <li class="fk__contact__social__icon">
          <a href="https://vimeo.com/famousking">
            <img src="../assets/social/vimeo.svg"/>
          </a>
        </li>
      </ul>
    </div>
    <div class="fk__contact__box fk__contact__box--white">
      <!-- todo update this to the production link -->
      <form id="ajax-contact" class="fk__contact__form" method="post" action="http://dev.famousking.com/email.php">
        <input id="name" name="name" class="fk__contact__form__input" type="text" autocomplete="off" required placeholder="Name / Organization">
        <input id="email" name="email"class="fk__contact__form__input" type="email" autocomplete="off" required placeholder="Email Address">
        <textarea id="message" name="message" class="fk__contact__form__textarea" autocomplete="off" required placeholder="Type your message here..."></textarea>
        <button class="fk__contact__form__button" type="submit">Send Email</button>
      </form>
      <div id="form-messages"></div>
    </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      menuType: 'light'
    }
  },
  beforeMount(){
    this.$store.commit('setMenuType', this.menuType);
  },
  mounted(){
    /* Submit the form with AJAX */
    $(function() {
      const form = $('#ajax-contact');
      const formMessages = $('#form-messages');

      $(form).submit(function(event) {
          event.preventDefault();
          const formData = $(form).serialize();
          $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
          })
          .done(function(response) {
            $(formMessages).removeClass('form__error');
            $(formMessages).addClass('form__success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        })
        .fail(function(data) {
          // Make sure that the formMessages div has the 'error' class.
          $(formMessages).removeClass('success');
          $(formMessages).addClass('error');

          // Set the message text.
          if (data.responseText !== '') {
              $(formMessages).text(data.responseText);
          } else {
              $(formMessages).text('Oops! An error occured and your message could not be sent.');
          }
        });

      });


    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
  @import "../assets/global.scss";

  html, body{
    height: 100%;
  }
  .form__error{
    font-family: $rubik;
    color: $white;
    background: $brown;
    border-radius: 5px;
    padding: 1rem;
  }
  .form__success{
    font-family: $rubik;
    color: $white;
    background: $brown;
    border-radius: 5px;
    padding: 1rem;
  }
  .fk__contact{
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
        @include breakpoint('desktop'){
          font-size: 1.25vw;
          line-height: 1.75vw;
        }
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
          font-size: 1.25vw;
          line-height: 1.75vw;
          max-width: 500px;
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
      }
      &__textarea{
        font-family: $lato;
        background: transparent;
        border: none;
        border-bottom: solid 1px $brown;
        color: $brown;
        margin: 2rem 0;
        min-height: 100px;
        font-style: italic;
        letter-spacing: 0.75px;
        font-size: 16px;
        border-radius: 0;
        @include breakpoint('desktop'){
          font-size: 0.9rem;
          font-size: 1vw;
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
        @include breakpoint('desktop'){
          font-size: 1vw;
          max-width: 300px;
        }
      }
    }
    &__social{
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 2rem 0 0 0;
      @include breakpoint('desktop'){
        justify-content: flex-start;
      }
      &__icon{
        height: 50px;
        width: 50px;
        margin: 0.5rem 2rem;
        @include breakpoint('desktop'){
          height: 4vw;
          width: 4vw;
          margin: 0.5rem 1rem;
          &:first-child{
            margin-left: 0;
          }
        }
      }
    }
    &__bg{
      background-image: linear-gradient(to bottom left, transparentize($black, 0.5),transparentize($black, 0.4)), url('../assets/contact-bg.jpg');
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
