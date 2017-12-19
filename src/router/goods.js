// 导入商品相关组件
// 内容
import GoodsContentListComponent from "../component/admin/goods/content/GoodsContentList.vue";
import GoodsContentAddComponent from "../component/admin/goods/content/GoodsContentAdd.vue";
import GoodsContentEditComponent from "../component/admin/goods/content/GoodsContentEdit.vue";

// 分类
import GoodsCategoryListComponent from "../component/admin/goods/category/GoodsCategoryList.vue";
import GoodsCategoryAddComponent from "../component/admin/goods/category/GoodsCategoryAdd.vue";
import GoodsCategoryEditComponent from "../component/admin/goods/category/GoodsCategoryEdit.vue";


export default [

    // 内容
    {name: "gctl", path: "goods/content/list", component: GoodsContentListComponent},
    {name: "gcta", path: "goods/content/add", component: GoodsContentAddComponent},
    {name: "gcte", path: "goods/content/edit/:id", component: GoodsContentEditComponent},

    // 分类
    {name: "gcgl", path: "goods/category/list", component: GoodsCategoryListComponent},
    {name: "gcga", path: "goods/category/add", component: GoodsCategoryAddComponent},
    {name: "gcge", path: "goods/category/edit", component: GoodsCategoryEditComponent}
]