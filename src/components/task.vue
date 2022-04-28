<template>
    <div class="task">
        <div class="task-img"></div>
        <div class="header"> 
            <ul>
            <router-link to="/user/home">
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
                <h1>小花</h1>
                <router-link to="/user/task/submit">
                    <div class="left-1" :class="{bg:color == 1}" @click="changebg(1)">
                        <div class="left-1-img"></div>
                        <div class="left-text">提交作业</div>
                    </div>
                </router-link>
                <router-link to="/user/task/already-submit">
                    <div class="left-2" :class="{bg:color == 2}" @click="changebg(2)">
                        <div class="left-2-img"></div>
                        <div class="left-text">已提交</div>
                    </div>
                </router-link>
                <router-link to="/user/task/answer">
                    <div class="left-3" :class="{bg:color == 3}" @click="changebg(3)">
                        <div class="left-3-img"></div>
                        <div class="left-text">查看答案</div>
                    </div>
                </router-link>
                <!-- 随机语句 -->
                <div class="tell">好好学习，天天向上</div>
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
        name:'task',
        data(){
            return{
                color:1
            };
        },
        methods:{
            changebg(index){
                if(index===1 || index===2 ||index===3){
                    this.color = index
                }
            }
        }
    }
</script>
<style >
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
.header ul li{
    color:#7553ff;
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
    background-image: url(../assets/already-sb.png);
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
    background-image: url(../assets/answer.png);
    background-size: 100% 100%;
    float: left;
}
.left-text{
    color: white;
    font-size: large;
    float: left;
    margin-left: 10px;
}
/* 随机语句 */
.tell{
    width: 100%;
    height: auto;    
    color: white;
    font-size:large;
    text-align: center;
    margin-top: 50px;
}

/* 主体右边 */
.task-main-right{
    width: 80%;
    height: 100%;
    float: left;
}
.textshadow{
    text-shadow: 0 0 10px #7553ff;

}

</style>