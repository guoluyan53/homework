<template>
    <div class="home">
    <div class="bigword">
      <p>Submit your</p>
      <p>homework</p>
      <p>now</p>
    </div>
    <div class="smallword">
      <p>Your work will be graded and evaluated after</p>
      <p>submission,please pay attention to it in time,</p>
      <p>hope you can submit a satisfactory answer sheet</p>
    </div>
    <div class="btn">
      <router-link to="mission">
        <button>Let us start &rsaquo;</button>
      </router-link>
    </div>
    <ul>
        <router-link to="principal">
            <li class="li">Index</li>
        </router-link>
        <router-link to="mission">
            <li class="lili">Task</li>
        </router-link>
            <li class="lili">张三</li>  
    </ul>
    </div>
</template>

<script>
    export default {
        name:'principal',
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
  }
    }
</script>
<style>
 .home{
      width: 100%;
      height: 100%;
      background-image: url(../assets/index.png);
      background-size: 100% 100%;
      position: fixed;
    }
    .bigword{
      font-size:60px;
      font-weight: 600;
      font-family:'Times New Roman', Times, serif;
      color: #315fe8;
      padding-left:10%;
      padding-top: 7%;
    }
    .smallword{
      font-size:20px;
      font-family: 'Times New Roman', Times, serif;
      color: #7882a3;
      padding-left: 10%;
      padding-top:1%;
    }
    .home button{
      font-size: 25px;
      font-family: 'Times New Roman', Times, serif;
      color: white;
      font-weight: bolder;
      background-color: #5798fa;
      transition: background-color 1s;
      transition: font-size 1s;
    }
    .home button:hover{
      background-color:#315fe8;
      font-size: 28px;
    }
    .btn{
      padding-left: 10%;
      padding-top: 2%;
    }
    .home ul{
        width: 450px;
        position:absolute;
        right: 10%;
        top: 5%;
    }
</style>
