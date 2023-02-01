
import request from '@/utils/request'

// 获取图片数据
// /admin/product/spuImageList/{spuId} GET
export const reqSpuImageList = (spuId) => request({ url: `/admin/product/spuImageList/${spuId}`, method: 'get' })

// 获取销售属性数据
// /admin/product/spuSaleAttrList/{spuId} get
export const reqSpuSaleAttrList = (spuId) => request({ url: `/admin/product/spuSaleAttrList/${spuId}`, method: 'get' })

// 获取平台属性数据
// /admin/product/attrInfoList/{category1Id}/{category2Id}/{category3Id} get
export const reqAttrInfoList = (category1Id, category2Id, category3Id) => request({ url: `/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`, method: 'get' })


// 添加SKU
// /admin/product/saveSkuInfo POST
export const reqAddSku = (spuInfo) => request({ url: `/admin/product/saveSkuInfo`, method: 'post', data: spuInfo })

/* ---------------------------上面的接口应当是spu模块的--------------------------------------------- */


// sku列表的接口
// GET /admin/product/list/{page}/{limit}
export const reqSkuList = (page, limit) => request({ url: `/admin/product/list/${page}/${limit}`, method: 'get' })

// 下架
// /admin/product/cancelSale/{skuId} GET
export const reqCancel = (skuId) => request({ url: `/admin/product/cancelSale/${skuId}`, method: 'get' })

// 上架
// /admin/product/onSale/{skuId} GET
export const reqSale = (skuId) => request({ url: `/admin/product/onSale/${skuId}`, method: 'get' })

// 获取SKU详情的接口
// /admin/product/getSkuById/{skuId} get
export const reqSkuById = (skuId) => request({ url: `/admin/product/getSkuById/${skuId}`, method: 'get' })






