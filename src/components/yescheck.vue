<template>
    <div class="answer">
      <div class="top">
        <ul>
            <li v-for="item in tabledata" :key="item.id">
                <router-link to="/manage/mission/yeschecklook">
                <h4>{{item.title}}</h4>
                </router-link>
                <div class="part">
                    <div class="part-left">
                        <p prop="file">{{item.file}}</p>
                    </div>
                    <div class="part-right">
                        <p class="author" prop="name">{{item.name}}</p>
                        <p prop="date">{{item.date}}</p>
                    </div>
                </div>
            </li>
            
        </ul>
      </div>
        <div class="page">
            <el-pagination backgroundlayout="prev, pager, next" :total="2" 
            page-size="4" @current-change="page">
                </el-pagination>
        </div>
    </div>
</template>
<script>
    export default{
        name:'yescheck',
        methods:{
            //分页
            page(currentPage){
                const _this = this
                axios.get(''+currentPage+'/4').then(function(resp){
                _this.tableData = resp.data.content
                _this.total = resp.data.totalElements
            })
            }
        },
        created(){
            //获得数据，渲染到页面上
            const _this = this
            axios.get('').then(function(resp){
                _this.tableData = resp.data.content
                _this.total = resp.data.totalElements//计算总页数
            })
        },
        data(){
            return{
                total:'',
                tabledata:[{
                    title:'小皇',
                    file:'第三次作业.doc',
                    name:'时间',
                    date:'8月5日'
                },
                {
                    title:'小航',
                    file:'第三次作业.doc',
                    name:'时间',
                    date:'8月14日'
                }]
            }
        }
    }
</script>
<style scoped>
h4{
    color: white;
}
</style>