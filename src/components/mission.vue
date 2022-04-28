<template>
    <div class="task">
        <div class="task-img"></div>
        <div class="header"> 
            <ul>
            <router-link to="/manage/principal">
                <li>Index</li>
            </router-link>
            <li class="textshadow">Task</li>
            <router-link to="/index">
            <li>Log off</li>
            </router-link>
        </ul>
        </div>
        <div class="task-main">
            <div class="task-main-left">
                <h2>Hello,</h2>
                <h1>张三</h1>
                <router-link to="/manage/mission/publishwork">
                    <div class="left-1" :class="{bg:color == 1}" @click="changebg(1)">
                        <div class="left-1-img"></div>
                        <div class="left-text">发布作业</div>
                    </div>
                </router-link>
                <router-link to="/manage/mission/nocheck">
                    <div class="left-2" :class="{bg:color == 2}" @click="changebg(2)">
                        <div class="left-2-img"></div>
                        <div class="left-text">未批改</div>
                    </div>
                </router-link>
                <router-link to="/manage/mission/yescheck">
                    <div class="left-3" :class="{bg:color == 3}" @click="changebg(3)">
                        <div class="left-3-img"></div>
                        <div class="left-text">已批改</div>
                    </div>
                </router-link>
                <router-link to="/manage/mission/scans">
                    <div class="left-4" :class="{bg:color == 4}" @click="changebg(4)">
                        <div class="left-4-img"></div>
                        <div class="left-text">上传答案</div>
                    </div>
                </router-link>
                <router-link to="/manage/mission/rank">
                    <div class="left-5" :class="{bg:color == 5}" @click="changebg(5)">
                        <div class="left-5-img"></div>
                        <div class="left-text">成绩统计</div>
                    </div>
                </router-link>
                
            </div>

            <!-- 右边部分 -->
            
            <div class="task-main-right">
                <router-view></router-view>
                <router-view name="workcontent"></router-view>
            </div>
        </div>
        
    </div>
</template>

<script scoped>
    export default {
        name:'mission',
        data(){
            return{
                color:1
            };
        },
        methods:{
            changebg(index){
                if(index===1 || index===2 ||index===3 ||index===4 ||index===5){
                    this.color = index
                }
            }
        }
    }
</script>
<style>
.bg{
    background-color: #9075ff;
}
.task-img{
    width: 250px;
    height: 200px;
    background-image: url(../assets/task-right.png);
    background-size: 100% 100%;
    position: absolute;
    right:-50px;
}
.task{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color:#e4ebf9;
}
.header{
    width: 100%;
    height: 50px;
}
.header li{
    color:#162343;
    margin-top: 10px;
}

/* 主体部分 */

.task-main{
    width: 90%;
    height: 88%;
    margin: 0 auto;
    background-color: rgb(176, 176, 231);
}

/* 主体左边 */

.task-main-left{
    width:20%;
    height: 100%;
    background-color:#7553ff ;
    float: left;
}
.task-main-left h2{
    margin-left: 30px;
    padding-top: 20px;
    color: white;
    font-weight: 500;
}
.task-main-left h1{
    text-align: center;
    color: white;
    font-weight: 500;
}

.left-1{
    width: 75%;
    height: 30px;
    padding-left: 25%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 50px;
    cursor: pointer;
    transition: background-color .3s;
}
.left-1:hover{
    background-color: #9075ff;
}
.left-1-img{
    width: 10%;
    height: 90%;
    background-image: url(../assets/submit-img.png);
    background-size: 100% 100%;
    float: left;
}
.left-2{
    width: 75%;
    height: 30px;
    padding-left: 25%;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    transition: background-color .3s;
}
.left-2:hover{
    background-color: #9075ff;
}
.left-2-img{
    width: 10%;
    height: 90%;
    background-image: url(../assets/nocheck.png);
    background-size: 100% 100%;
    float: left;
}
.left-3{
    width: 75%;
    height: 30px;
    padding-left: 25%;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    transition: background-color .3s;
}
.left-3:hover{
    background-color: #9075ff;
}
.left-3-img{
    width: 10%;
    height: 90%;
    background-image: url(../assets/yescheck.png);
    background-size: 100% 100%;
    float: left;
}

.left-4{
    width: 75%;
    height: 30px;
    padding-left: 25%;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    transition: background-color .3s;
}
.left-4:hover{
    background-color: #9075ff;
}
.left-4-img{
    width: 10%;
    height: 90%;
    background-image: url(../assets/answer.png);
    background-size: 100% 100%;
    float: left;
}
.left-5{
    width: 75%;
    height: 30px;
    padding-left: 25%;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    transition: background-color .3s;
}
.left-5:hover{
    background-color: #9075ff;
}
.left-5-img{
    width: 10%;
    height: 90%;
    background-image: url(../assets/sum.png);
    background-size: 100% 100%;
    float: left;
}
.left-text{
    color: white;
    font-size: large;
    float: left;
    margin-left: 10px;
}

/* 主体右边 */
.task-main-right{
    width: 80%;
    height: 100%;
    float: left;
}


</style>