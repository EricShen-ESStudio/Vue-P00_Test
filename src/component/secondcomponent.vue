<template>
    <div id="secondcomponent">
        <h1>I am another page</h1>
        <span>written by {{author}}</span>
        <p>Vue测试用例001</p>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h1 style="line-height: 36px; color: #20A0FF">豆瓣电影排行榜</h1>
            </div>
            <div v-for="article in articles" class="text item">
                {{article.title}}
            </div>
        </el-card>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                author:"EricShen @2017年4月12日09:24:27",
                articles:[],
            }
        },
        mounted:function(){
            this.$http.jsonp("https://api.douban.com/v2/movie/top250?count=2",{},{
                headers:{},
                emulateJSON:true
            }).then(function(response){
                this.articles=response.data.subjects;
            },function(response){console.log(response);});
        }
    }
</script>
<style>

</style>