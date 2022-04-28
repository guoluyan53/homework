<template>
    <div class="pball">
        <div class="pbbai"></div>
        <div class="pbmain">
            <div class="pbtitle">ADD TASK</div>
            <p>Title</p>
            <input type="text"  v-model="input" class="pbinput">
            <p>Task description</p>
            <el-input type="textarea" :rows="3" v-model="textarea" ></el-input>
            <p>Attachment</p>
            <el-upload class="upload-demo" dragaction="" multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或点击上传</div>
            </el-upload>
            <button>确认</button>
            <button>取消</button>
        </div>
    </div>
</template>
<script>
    export default{
        name:'publish',
        data(){
            return{
                textarea:'',
                input:''
            }
        }
    }
</script>
<style scoped>
.pball{
    width:100%;
    height: 100%;
    background-color: #9075ff;
}
.pbbai{
    width: 100%;
    height: 10%;
}
.pbmain{
    width: 70%;
    height: 80%;
    margin-left: 15%;
    background-color: #7553ff;
    color: white;
}
.pbtitle{
    width: 100%;
    text-align: center;
    font-size: 25px;
    padding-top: 20px;
}
.pbmain p{
    margin-left: 15%;
    margin-top: 10px;
}
.pbinput{
    width: 70%;
    height: 30px;
    text-indent: 1rem;
    margin-left: 15%;
    margin-top: 3px;
    border: none;
    outline: none;
}
.el-upload__text{
    color: rgb(160, 159, 158);
    font-weight: 500;
    font-size: 15px;
}
.el-icon-upload{
    color: rgb(160, 159, 158) ;
    margin-top: 25px;
}
button:nth-of-type(1){
    margin-left: 25%;
}
button:nth-of-type(2){
    margin-left: 100px;
}
button{
    color: white;
    background-color: #9075ff;
    width: 100px;
    border-radius: 0;
    font-size: 20px;
    padding: 3px 0;
    margin-top: 10px;
}
</style>
