<template>
    <div id="app">
        <Header></Header>
        <router-view/>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './components/body/Header'
import Footer from './components/body/Footer'

export default {
    name: 'App',
    data () {
        return {

        }
    },
    components: {
        Header,
        Footer
    }
}
</script>

<style lang="scss">
  body 
  {
    font: 14px/100% '微软雅黑', 'Microsoft YaHei', 'arial';

    margin: 0;
  }

  ul, 
  ol
  {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a
  {
    text-decoration: none;
    color: #383a4c;
    cursor: pointer;
  }

  p {
    margin: 0;
  }

  input, button {
    border: 0;
    padding: 0;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  select {
    -webkit-appearance: none;
    border: 0;
    background-color: #fff;
  }

  h1, h2, h3, h4, h5, h6 
  {
    margin: 0;
  }

  img {
    display: block;
  }

  .clearfix:after, .clearfix:before {
    content: '';
    display: table;
    font: 0/0 a;
    overflow: hidden;
  }

  .clearfix:after {
    clear: both;
  }

  .fl 
  {
    float: left;
  }

  .fr 
  {
    float: right;
  }

  .wrap
  {
    width: 1170px;
    margin: 0 auto;
  }
  .common-header
  {
      display: flex;
      flex-direction: column;

      width: 100%;

      justify-content: center;
      .main-title
      {
          font: 48px bold;

          text-align: center;
      }
      .sub-title
      {
          font: 16px normal;

          margin: 10px 0 40px;

          text-align: center;
      }
  }
  $lightText-color: #4ca1af;
  $normalText-color: #2c3e50;
</style>
