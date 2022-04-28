<template>
    <div class="answer">
      <div class="top">
          <router-link to="/manage/mission/publishanswer">
                <div class="scbtn">+上传答案</div>
          </router-link>
        <ul>
            <li>
                <h4>第一次作业答案</h4>
                <div class="part">
                    <div class="part-left">
                        <p>第一次作业.doc</p>
                    </div>
                    <div class="part-right">
                        <p class="author">张三</p>
                        <p>8月2日</p>
                    </div>
                </div>
            </li>
            <li>
                <h4>第二次作业答案</h4>
                <div class="part">
                    <div class="part-left">
                        <p>第二次作业答案.doc</p>
                    </div>
                    <div class="part-right">
                        <p class="author">张三</p>
                        <p>8月8日</p>
                    </div>
                </div>
            </li>
            <li>
                <h4>第三次作业答案</h4>
                <div class="part">
                    <div class="part-left">
                        <p>第三次作业答案.doc</p>
                    </div>
                    <div class="part-right">
                        <p class="author">张三</p>
                        <p>8月16日</p>
                    </div>
                </div>
            </li>
            <li>
                <h4>第四次作业答案</h4>
                <div class="part">
                    <div class="part-left">
                        <p>第四次作业答案.doc</p>
                    </div>
                    <div class="part-right">
                        <p class="author">张三</p>
                        <p>8月19日</p>
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
        name:'scans'
    }
</script>
