<template>
    <div class="submit">
        <div class="aaa"></div>
        <div class="sbmwork" v-for="item in items" :key="item.id">
            <div class="workday">{{item.workday}}</div>
            <div class="workcontent">
                <router-link to="/user/task/workscore">
                    <a>{{item.workcontent}}</a>
                </router-link>
                <p>{{item.workp}}</p>
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
                items:[{
                    workday:'2020.8.4',
                    workcontent:'第一次作业 骰子练习',
                    workp:'作业要求：需要掌握HTML的常用标签，css样式和浮动，完成所给的页面'
                },
                {
                    workday:'2020.8.3',
                    workcontent:'第二次作业 布局排列',
                    workp:'作业要求：了解css，并掌握使用css'
                },
                {
                    workday:'2020.8.1',
                    workcontent:'第三次作业 页面设计',
                    workp:'作业要求：掌握grid布局和flex布局，运用三种方法完成骰子的六个面'
                }]
            }
        }
    }
</script>
<style>

</style>