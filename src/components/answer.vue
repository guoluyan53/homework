<template>
    <div class="answer">
      <div class="top">
        <ul>
            <li>
                <h4>第一次作业答案</h4>
                <div class="part">
                    <div class="part-left">
                        <p>第一次答案.doc</p>
                    </div>
                    <div class="part-right">
                        <p class="author">张三</p>
                        <p>8月3号</p>
                    </div>
                </div>
            </li>
            <li>
                <h4>第二次作业答案</h4>
                <div class="part">
                    <div class="part-left">
                        <p>第二次答案.doc</p>
                    </div>
                    <div class="part-right">
                        <p class="author">张三</p>
                        <p>8月5号</p>
                    </div>
                </div>
            </li>
            <li>
                <h4>第三次作业答案</h4>
                <div class="part">
                    <div class="part-left">
                        <p>第三次答案.doc</p>
                    </div>
                    <div class="part-right">
                        <p class="author">张三</p>
                        <p>8月11号</p>
                    </div>
                </div>
            </li>
            <li>
                <h4>第四次作业答案</h4>
                <div class="part">
                    <div class="part-left">
                        <p>第四次答案.doc</p>
                    </div>
                    <div class="part-right">
                        <p class="author">张三</p>
                        <p>8月16号</p>
                    </div>
                </div>
            </li>
        </ul>
      </div>
        <div class="page">
            <el-pagination backgroundlayout="prev, pager, next" page-size="3" :total="10">
                </el-pagination>
        </div>
    </div>
</template>
<script>
    export default{
        name:'answer'
    }
</script>

<style scoped>
.answer{
    width: 100%;
    height: 100%;
    background-color: #9075ff;
}
.answer li{
    width: 70%;
    height: 80px;
    margin-left: 15%;
    margin-top: 20px;
    text-align: left;
}
.answer h4{
    height: 40%;
    font-size: 25px;
}
.part{
    height: 60%;
    background-color: #e4ebf9;
    color: #9075ff;
    border-radius: 10px;
}
.part-left{
    width: 70%;
    height: 100%;
    float: left;
    border-radius: 10px;
}
.part-left p{
    font-size: large;
    margin-top: 14px;
    margin-left: 20px;
}
.part-right{
    width: 30%;
    height: 100%;
    float: left;
    border-radius: 10px;
}
.part-right p{
    font-size: large;
    margin-top: 14px;
    float: left;
}
.author{
    margin-right: 10px;
    border-right: 1px solid #9075ff;
    padding-right: 10px;
    margin-left: 35%;
}
.top{
    width: 100%;
    height: 80%;
}
.page{
    height: 30px;
    margin-top: 30px;
}
</style>