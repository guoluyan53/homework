<template>
    <div class="submit">
        <div class="sbmwork sbm1">
            <div class="workday">{{workday[0]}}</div>
            <div class="workcontent">
                <router-link to="/user/task/workcontent">
                    <a>{{workcontent[0]}}</a>
                </router-link>
                <p>作业要求：需要掌握HTML的常用标签，css样式和浮动，完成所给的页面</p>
            </div>
        </div>
        <div class="sbmwork">
            <div class="workday">{{workday[1]}}</div>
            <div class="workcontent">
                <a href="">{{workcontent[1]}}</a>
                <p>作业要求：了解css，并掌握使用css</p>
            </div>
        </div>
        <div class="sbmwork">
            <div class="workday">{{workday[2]}}</div>
            <div class="workcontent">
                <a href="">{{workcontent[2]}}</a>
                <p>作业要求：掌握grid布局和flex布局，运用三种方法完成骰子的六个面</p>
            </div>
        </div>
        <el-pagination backgroundlayout="prev, pager, next"  page-size="3" :total="10">
        </el-pagination>

    </div>
</template>

<script>
    export default{
        name:'submit',
        data(){
            return{
                workday:['2020.8.4','2020.8.2','2020.8.1'],
                workcontent:['第三次作业  页面设计','第二次作业  布局排列','第一次作业  骰子练习']
            }
        }
    }
</script>
