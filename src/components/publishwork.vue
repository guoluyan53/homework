<template>
    
    <div class="submit">
        <div class="top">
        <router-link to="/manage/mission/publish">
        <div class="plbtn">+发布作业</div>
        </router-link>
        <div class="sbmwork sbm1">
            <div class="workday">{{workday[0]}}</div>
            <div class="workcontent">
                <router-link to="">
                    <a href="">{{workcontent[0]}}</a>
                </router-link>
                <p>作业要求：需要掌握HTML的常用标签，css样式和浮动，完成所给的页面</p>
            </div>
        </div>
        <div class="sbmwork">
            <div class="workday">{{workday[1]}}</div>
            <div class="workcontent">
                <router-link to="">
                <a href="">{{workcontent[1]}}</a>
                </router-link>
                <p>作业要求：了解css，并掌握使用css</p>
            </div>
        </div>
        <div class="sbmwork">
            <div class="workday">{{workday[2]}}</div>
            <div class="workcontent">
                <a href="">{{workcontent[2]}}</a>
                <p>作业要求：了解css，并掌握使用css</p>
            </div>
        </div>
        <el-pagination backgroundlayout="prev, pager, next" page-size="3" :total="10">
        </el-pagination>
    </div>
    </div>
</template>

<script>
    export default{
        name:'publishwork',
        data(){
            return{
                workday:['2020.8.4','2020.8.2','2020.8.1'],
                workcontent:['第三次作业  页面设计','第二次作业  布局排列','第一次作业  骰子练习']
            }
        }
    }
</script>
<style>
.submit{
    width: 100%;
    height: 100%;
    background-color: #9075ff;
}
.sbmwork{
    width: 100%;
}
.plbtn{
    width: 100px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border-radius: 5px;
    margin-left: 74%;
    background-color: white;
    color: #9075ff;
    font-weight: 600;
    font-size: large;
    margin-bottom: -50px;
}
.workday{
    width: 300px;
    height: 30px;
    color: white;
    font-size: x-large;
}
.workcontent{
    width: 70%;
    height: 100px;
    color: #9075ff;
    background-color: #e4ebf9;
    margin-top: 5px;
    border-radius: 10px;

}
.sbm1{
    padding-top: 20px;
}
.workcontent a{
    font-size: large;
    margin-left: 15px;
    color: #9075ff;
    text-decoration: none;
    border-bottom: 2px solid #9075ff;
    font-weight:600;
}
.workcontent p{
    text-indent: 2rem;
    margin-top: 5px;
    
}
</style>