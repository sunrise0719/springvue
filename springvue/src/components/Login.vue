<template>
  <div>
    用户名：<input type="text" v-model="loginForm.username" placeholder="请输入用户名"/>
    <br/>
    密码：<input type="text" v-model="loginForm.password" placeholder="请输入用户名"/>
    <br/>
    <button v-on:click="login">登录</button>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        responseResult: []
      }
    },
      methods: {
       login () {
        this.$axios
          .post('/ManagerController/login', {
            managerName: this.loginForm.username,
            managerPwd: this.loginForm.password
          })
          .then(successResponse => {
            if (successResponse.data.code === 1) {
              this.$router.replace({path: '/index'})
            } else {
              console.log('输入失败！')
            }
          })
          .catch(failResponse => {
            console.log('faild:' + failResponse)
          })
      }
    }
  }
</script>

<style scoped>

</style>
