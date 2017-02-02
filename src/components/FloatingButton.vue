<template>
  <div id="container-floating">
    <div class="btn prev" data-placement="left" v-if="showPrev" @click="prev()">
      <p class="letter"><i class="fa fa-angle-left"></i></p>
    </div>
    <div class="btn next" data-placement="left" v-if="showNext" @click="next()">
      <p class="letter"><i class="fa fa-angle-right"></i></p>
    </div>

    <div id="floating-button">
      <p class="plus">
        <i class="fa fa-bars"></i>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'floating-button',
    props: {
      next: {
        type: Function,
        default () {
          return null
        }
      },
      prev: {
        type: Function,
        default () {
          return null
        }
      },
      showNext: {
        type: Boolean,
        required: true
      },
      showPrev: {
        type: Boolean,
        requireds: true
      }
    }
  }
</script>

<style scoped>
  #floating-button {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: #222222;
    position: fixed;
    bottom: 30px;
    right: 30px;
    cursor: pointer;
    box-shadow: 0px 2px 5px #666;
  }

  .plus {
    color: white;
    position: absolute;
    top: 0;
    display: block;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    padding: 0;
    margin: 0;
    line-height: 55px;
    font-family: 'Roboto';
    font-weight: 300;
    animation: plus-out 0.3s;
    transition: all 0.3s;
  }

  #container-floating {
    position: fixed;
    width: 70px;
    height: 70px;
    bottom: 30px;
    right: 30px;
    z-index: 50px;
  }

  #container-floating:hover {
    height: 400px;
    width: 90px;
    padding: 30px;
  }

  #container-floating:hover .plus {
    animation: plus-in 0.15s linear;
    animation-fill-mode: forwards;
  }

  .edit {
    position: absolute;
    top: 0;
    display: block;
    bottom: 0;
    left: 0;
    display: block;
    right: 0;
    padding: 0;
    opacity: 0;
    margin: auto;
    line-height: 65px;
    transform: rotateZ(-70deg);
    transition: all 0.3s;
    animation: edit-out 0.3s;
  }

  #container-floating:hover .edit {
    animation: edit-in 0.2s;
     animation-delay: 0.1s;
    animation-fill-mode: forwards;
  }

  @keyframes edit-in {
      from {opacity: 0; transform: rotateZ(-70deg);}
      to {opacity: 1; transform: rotateZ(0deg);}
  }

  @keyframes edit-out {
      from {opacity: 1; transform: rotateZ(0deg);}
      to {opacity: 0; transform: rotateZ(-70deg);}
  }

  @keyframes plus-in {
      from {opacity: 1; transform: rotateZ(0deg);}
      to {opacity: 0; transform: rotateZ(180deg);}
  }

  @keyframes plus-out {
      from {opacity: 0; transform: rotateZ(180deg);}
      to {opacity: 1; transform: rotateZ(0deg);}
  }

  .btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: fixed;
    z-index: 300;
    transform:  scale(0);
    cursor: pointer;
  }

  .btn:hover {
    opacity: 0.8;
  }

  .prev {
    background: #999999;
    right: 40px;
    bottom: 120px;
    animation-delay: 0.2s;
      animation: bounce-out-btn 0.3s linear;
    animation-fill-mode:  forwards;
  }

  .next {
    background: #aaaaaa;
    right: 40px;
    bottom: 180px;
    animation-delay: 0.15s;
      animation: bounce-out-btn 0.15s linear;
    animation-fill-mode:  forwards;
  }

  @keyframes bounce-btn{
      from {opacity: 0;}
      to {opacity: 1; transform: scale(1);}
  }

  @keyframes bounce-out-btn{
      from {opacity: 1; transform: scale(1);}
      to {opacity: 0; transform: scale(0);}
  }

  #container-floating:hover .btn{
    animation: bounce-btn 0.1s linear;
    animation-fill-mode:  forwards;
  }

  .letter {
    font-size: 23px;
    font-family: 'Roboto';
    color: white;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0;
    top: 0;
    bottom: 0;
    text-align: center;
    line-height: 40px;
  }
</style>