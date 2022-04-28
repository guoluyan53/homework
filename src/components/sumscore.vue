<template>
    <div class="sum">
        <div class="aaa"></div>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="name" label="用户名" width="250px"></el-table-column>
            <el-table-column prop="score" label="总分" width="250px"></el-table-column>
            <el-table-column prop="rank" label="排名"></el-table-column>
        </el-table>

        <div class="page">
            <el-pagination backgroundlayout="prev, pager, next"  page-size="10" :total="30">
                </el-pagination>
        </div>
    </div>
</template>

<script>
    export default{
        name:'sumscore',
        data() {
            return {
                tableData: [
            {
                name: '小明',
                score: '59星',
                rank: '1'
            },
            {
                name: '小花',
                score: '45星',
                rank: '2'
            },  
            {
                name: '小张',
                score: '40星',
                rank: '3'
            },  
            {
                name: '小航',
                score: '39星',
                rank: '4'
            },  
            {
                name: '小西',
                score: '36星',
                rank: '5'
            }, 
            {
                name: '小系',
                score: '34星',
                rank: '6'
            },  
            {
                name: '小王',
                score: '30星',
                rank: '7'
            },  
            {
                name: '小李',
                score: '25星',
                rank: '8'
            },  
            {
                name: '小月',
                score: '24星',
                rank: '9'
            },  
            {
                name: '小皇',
                score: '22星',
                rank: '10'
            },   
            ]
      }
    }
    }
</script>
<style>
.sum{
    width: 100%;
    height: 100%;
    background-color: #9075ff;
}
.aaa{
    height: 40px;
}

</style>