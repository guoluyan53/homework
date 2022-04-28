<template>
    <div class="biglogin">
        <ul>
            <router-link to="index">
                <li>Index</li>
            </router-link>
                <li @click="open">Task</li>
            <router-link to="login">
                <li class="li">Login</li>
            </router-link>
        </ul>
        <div class="main">
            <div class="left"></div>
            <div class="right">
                <!-- 忘记密码页 -->
                <div class="password" v-if="seen">
                    <h3>Forget password</h3>
                    <el-input placeholder="Enter your e-mail" v-model="rusername" clearable ></el-input>
                    <el-input placeholder="Enter your new password" v-model="mail" clearable></el-input>
                    <div class="codepass"> 
                        <el-input placeholder="Enter the code" v-model="codepass" clearable></el-input>
                        <button>获取验证码</button>
                    </div>
                    <div class="btnp">
                        <button @click="Return()">Return</button>
                        <button>Define</button>
                    </div>

                </div>
                <el-tabs v-model="activeName" type="card" @tab-click="handleClick" v-else>
                <!-- 登录页 -->
                    <el-tab-pane label="Login" name="first">
                        <el-input placeholder="Enter your username" v-model="lusername" clearable></el-input>
                        <el-input placeholder="Enter your password" v-model="lpassword" show-password></el-input><br>
                        <el-checkbox v-model="checked">Remember me</el-checkbox>
                        <h3 class="h3" @click="look()">Forget password?</h3>
                        <button class="btn1" @click="Login()">Login</button>
                <!-- 注册页 -->
                    </el-tab-pane>
                    <el-tab-pane label="Sign up" name="second">
                        <el-input placeholder="Enter your username" v-model="rusername" clearable maxlength="10" show-word-limit></el-input>
                        <el-input placeholder="Enter your e-mail" v-model="mail" clearable></el-input>
                        <div class="code"> 
                            <el-input placeholder="Enter the code" v-model="code" clearable></el-input>
                            <button >获取验证码</button>
                        </div>
                        <el-input placeholder="Enter your password" v-model="rpassword" show-password></el-input>
                        <div class="check">
                            <!-- <el-checkbox v-model="form.checked1" @change="checkchange('0')">Teacher</el-checkbox> -->
                            <!-- <el-checkbox v-model="form.checked2" @change="checkchange('1')">Student</el-checkbox> -->
                        </div>
                        <button class="btn2">Sign up</button>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'login',
        data(){
            return {
        activeName: 'first',
        lusername: '小花',
        lpassword: '12345678',
        rusername: '',
        mail: '',
        code: '',
        codepass:'',
        rpassword: '',
        checked:true,
        seen:false
      };
    },
    methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      },
      
      //没登录前点击task,登录拦截
      open() {
        this.$alert('请登录后查看', '提示：', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },
    Login(){
        if(this.lusername=='小花'){
            if(this.lpassword=='12345678'){
                this.$router.push({
                    path:'/user',
                    params:{
                        id:this.lusername
                    }
                })
            }
        }else if(this.lusername=='张三'){
            if(this.lpassword=='12345678'){
                this.$router.push('/manage')
            }
        }
        else{
            alert("还未注册")
        }
        
    },
    look(){
        this.seen=true
    },
    Return(){
        this.seen=false
    },
    // 后退监听
    // handleCommand(command){
    //     if(command == 'loginin'){
    //         sessionStorage.clear();
    //         this.$router.push("/user");
    //         history.pushState(null, null,document.user);
    //         window.addEventListener("popstate",function(e){
    //             history.pushState(null,null,document.user);
    //         },false)
    //     }
    // }
}
}
</script>

<style>
.biglogin{
    width: 100%;
    height: 100%;
    background-image: url(../assets/loginbg.png);
    background-size: 100% 100%;
    position: fixed;
}
.biglogin ul{
    width: 390px;
    position:absolute;
    left: 1%;
    top: 5%;
}
.main{
    width: 80%;
    height: 70%;
    margin: 10% auto;
}
.left{
    width: 60%;
    height: 100%;
    background-image: url(../assets/loginleft.png);
    background-size: 100% 100%;
    float: left;
}
.right{
    width: 40%;
    height: 100%;
    background-color: #943cd0;
    margin: 0;
    float: left;
}
.code{
    width: 61%;
}
.code button{
    border-radius: 10px;
    background-color: #be6af8;
    color: white;
    margin-left: 3px;
    cursor: pointer;
}
.h3{
    color: white;
    margin-left:10%;
    margin-top: 10px;
    font-family: 'Times New Roman', Times, serif;
    cursor: pointer;
}
.btn1{
    width: 100px;
    border-radius: 10px;
    margin-left: 15%;
    margin-top: 20px;
    background-color:#be6af8 ;
    color: white;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 600;
    font-size: large;
    padding: 5px;
    cursor: pointer;
}
.check{
    width: 80%;
}
.check .el-checkbox{
    margin-left: 5%;
}
.btn2{
    width: 100px;
    background-color: #be6af8;
    color: white;
    font-size: large;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 600;
    padding: 5px;
    border-radius: 10px;
    margin-left: 15%;
    margin-top: 20px;
    cursor: pointer;
}

.password{
    width: 100%;
    text-align: center;
}
.password h3{
    font-size: x-large;
    width: 100%;
    color: white;
    margin-top: 50px;
    margin-bottom: 20px;
    text-shadow: 0 0 10px white;
    font-family: 'Times New Roman', Times, serif;
}
.codepass{
    width: 61%;
    margin-left: 19.5%;
}
.codepass button{
    border-radius: 10px;
    background-color: #be6af8;
    color: white;
    margin-left: 10px;
}
.btnp button{
    border-radius: 10px;
    background-color: #be6af8;
    color: white;
    margin: 15px 13px;
    width: 110px;
    cursor: pointer;
}
</style>