<template>
    <div class="answer">
      <div class="top">
        <ul>
            <li>
                <router-link to="/manage/mission/nocheckwork">
                <h4>小花</h4>
                </router-link>
                <div class="part">
                    <div class="part-left">
                        <p>第三次作业.doc</p>
                    </div>
                    <div class="part-right">
                        <p class="author">时间</p>
                        <p>8月2号</p>
                    </div>
                </div>
            </li>
            <li>
                <h4>小明</h4>
                <div class="part">
                    <div class="part-left">
                        <p>第三次作业.doc</p>
                    </div>
                    <div class="part-right">
                        <p class="author">时间</p>
                        <p>8月2号</p>
                    </div>
                </div>
            </li>
            <li>
                <h4>小王</h4>
                <div class="part">
                    <div class="part-left">
                        <p>第三次作业.doc</p>
                    </div>
                    <div class="part-right">
                        <p class="author">时间</p>
                        <p>8月2号</p>
                    </div>
                </div>
            </li>
            <li>
                <h4>小黄</h4>
                <div class="part">
                    <div class="part-left">
                        <p>第三次作业.doc</p>
                    </div>
                    <div class="part-right">
                        <p class="author">时间</p>
                        <p>8月2号</p>
                    </div>
                </div>
            </li>
        </ul>
      </div>
        <div class="page">
            <el-pagination backgroundlayout="prev, pager, next" page-size="4" :total="10">
                </el-pagination>
        </div>
    </div>
</template>
<script>
    export default{
        name:'nocheck'
    }
</script>
<style scoped>
h4{
    color: white;
}
</style>