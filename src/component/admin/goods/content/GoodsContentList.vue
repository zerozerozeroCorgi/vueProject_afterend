<template>
    <div class="list">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>购物商城</el-breadcrumb-item>
            <el-breadcrumb-item>内容管理</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="list_util">

            <!-- 按钮组 -->
            <div class="btns">
                <el-button icon="el-icon-plus" type="primary" plain size="small">添加</el-button>
                <el-button icon="el-icon-check" type="primary" plain size="small">全选</el-button>
                <el-button icon="el-icon-delete" type="primary" plain size="small">删除</el-button>
            </div>

            <!-- 搜索框 -->
            <el-input size="small" @blur="search" clearable placeholder="请输入搜索内容" prefix-icon="el-icon-search" v-model="query.searchvalue"></el-input>
        </div>

        <div class="list_table">
            <el-table ref="multipleTable" height="400" :data="tableData" tooltip-effect="dark"
                style="width: 100%" @selection-change="handleSelectionChange"
                border>
                <el-table-column type="selection">
                </el-table-column>
                <img src="" alt="">
                <el-table-column label="商品标题">
                    <template slot-scope="scope">
                        <el-tooltip placement="right">
                            <div slot="content">商品货号:{{scope.row.goods_no}}<br/>
                                交易积分:{{scope.row.point}}<br/>
                                图片:<br/>
                                <img width="180" height="150" :src="scope.row.imgurl" alt="">
                            </div>
                            <router-link :to="{name: 'gcte', params: {id: scope.row.id}}">{{ scope.row.title }}</router-link>
                            <!-- <a href="javascript:;" @click="edit(scope.row.id)">{{ scope.row.title }}</a> -->
                        </el-tooltip>
                    </template>
                </el-table-column>
                <el-table-column prop="categoryname" label="所属类别" width="100">
                </el-table-column>
                <el-table-column prop="stock_quantity" label="库存" width="100">
                </el-table-column>
                <el-table-column prop="market_price" label="市场价" width="100">
                </el-table-column>
                <el-table-column prop="sell_price" label="销售价" width="100">
                </el-table-column>
                <el-table-column  label="属性" width="140">
                    <template slot-scope="scope">
                        <el-tooltip class="item" effect="dark" content="轮播图" placement="bottom">
                            <i :class='["el-icon-picture", scope.row.is_slide ? "active" : ""]'></i>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="置顶" placement="bottom"> 
                            <i :class='["el-icon-upload", scope.row.is_top ? "active" : ""]'></i>
                        </el-tooltip> 
                        <el-tooltip class="item" effect="dark" content="推荐" placement="bottom">
                            <i :class='["el-icon-star-on", scope.row.is_hot ? "active" : ""]'></i>
                        </el-tooltip>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="100">
                    <template slot-scope="scope">
                        <router-link :to="{name: 'gcte', params: {id: scope.row.id}}">修改</router-link>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="list_pagination">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page="query.pageIndex" :page-sizes="[10, 20, 30, 40]" :page-size="query.pageSize"
            layout="total, sizes, prev, pager, next, jumper" :total="totalcount">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                query: {
                    pageIndex: 1,
                    pageSize: 10,
                    searchvalue: ""
                },
                tableData: [],
                totalcount: 0
            }
        },
        methods: {

            // 获取商品信息
            getGoodsList() {
                this.$http.get(this.$api.gsList, {params: this.query})
                    .then(res => {
                        if(res.data.status == 0) {
                            this.tableData = res.data.message;
                            this.totalcount = res.data.totalcount;
                        }
                    });
            },
            handleSelectionChange() {

            },

            // 每页显示数量改变时
            handleSizeChange(size) {
                this.query.pageSize = size;
                this.getGoodsList();
            },
            handleCurrentChange(currentPage) {
                this.query.pageIndex = currentPage;
                this.getGoodsList();
            },
            search() {
                this.getGoodsList();
            }
        },
        created() {
            this.getGoodsList();
        }
    }
</script>

<style scoped lang="less">
    .list {
        .el-breadcrumb {
            padding-bottom: 10px;
            border-bottom: 1px solid #ccc;
            margin-bottom: 15px;
        }
        .list_util {
            overflow: hidden;
            padding: 10px 10px;
            border: 1px solid #ccc;
            border-radius: 10px;
            .btns {
                float: left;
            }
            .el-input {
                float: right;
                width: 200px;
            }
        }
        .list_table {
            .el-table__row {
                .el-table_1_column_2{
                    font-size: 12px;
                }
            }
        }
        .list_pagination {
            padding: 10px;
        }
    }
</style>