<template>
    <div class="worksc">
        <h2>第三次作业</h2>
        <div class="worktext">作业要求：掌握grid布局和flex布局，运用三种方法完成骰子的六个面</div>
        <div class="worktext">提交者：小皇</div>
        <div class="worktext">作业文件：第三次作业.doc</div>

        <div class="title1">评语：</div>
        <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 6}" v-model="textarea"></el-input>
        <div class="score">
        <div>评分：</div>
        <div class="block">
            <el-rate v-model="value1"></el-rate>
        </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'yeschecklook',
        data() {
             return {
                value1: '4',
                textarea:'做的很好'
      };
}
    }
</script>

<style scoped>
.worksc{
    width: 100%;
    height: 100%;
    background-color: #9075ff;
    color:white;
}
.worksc h2{
    padding-top: 30px;
    padding-left: 12%;
    margin-bottom: 30px;
}
.worktext{
    width: 70%;
    height: 30px;
    margin-left: 15%;
}
.title1{
    margin-left: 15%;
    margin-top: 30px;
}
.title2{
    float: left;
}
.score{
    width: auto;
    margin-left: 15%;
    margin-top: 30px;
}

</style>