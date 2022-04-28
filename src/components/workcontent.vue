<template>
    <div class="work">
        <h2>第三次作业</h2>
        <div class="worktext">作业要求：需要掌握HTML的常用标签，css样式和浮动，完成所给的页面</div>
        <div class="worktext">发布时间：2020.8.4</div>
        <div class="worktext">发布人：张三</div>
        <div class="worktext">参考文件：作业.doc</div>

        <div class="title1">提交作业：</div>
        <el-upload class="upload-demo" drag action="" multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
        </el-upload>
        <div class="title2">备注/问题反馈：</div>
        
        <el-input type="textarea" :autosize="{ minRows: 1, maxRows: 2}" placeholder="请输入内容" v-model="textarea"></el-input><br>
        <button>确认提交</button>
    </div>
</template>

<script>
    export default{
        name:'workcontent',
        data() {
            return {
                textarea: ''
    }
  }
}
</script>

<style scoped>
.work{
    width: 100%;
    height: 100%;
    background-color: #9075ff;
    color:white;
}
.work h2{
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
    margin-left: 15%;
}
button{
    border-radius: 0;
    background-color:#7553ff;
    color:white;
    padding: 5px;
    font-size: medium;
    margin-left: 47%;
    margin-top: 20px;
    }
</style>