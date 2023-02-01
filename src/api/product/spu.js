import request from '@/utils/request'

// 获取SPU列表数据的接口
// /admin/product/{page}/{limit} GET 携带参数：page limit category3Id
export const reqSpuList = (page, limit, category3Id) => request({ url: `/admin/product/${page}/${limit}`, method: 'get', params: { category3Id } })


// 获取SPU信息
// /admin/product/getSpuById/{spuId}  get
export const reqSpu = (spuId) => request({ url: `/admin/product/getSpuById/${spuId}`, method: 'get' })


// 获取品牌信息
// /admin/product/baseTrademark/getTrademarkList  GET
export const reqTradeMarkList = () => request({ url: `/admin/product/baseTrademark/getTrademarkList`, method: 'get' })


// 获取SPU图片接口
// /admin/product/spuImageList/{spuId}  GET
export const reqSpuImageList = (spuId) => request({ url: `/admin/product/spuImageList/${spuId}`, method: 'get' })


// 获取平台中所有销售属性---整个平台销售属性一共三个
// /admin/product/baseSaleAttrList  GET
export const reqBaseSaleAttrList = () => request({ url: `/admin/product/baseSaleAttrList`, method: 'get' })


// 修改SPU或者添加SPU,对于修改或者添加,携带给服务器的参数大致一样,唯一的区别是携带的参数是否带id
export const reqAddOrUpdateSpu = (spuInfo) => {
    // 携带的参数带有id---修改spu
    //  /admin/product/updateSpuInfo  POST
    if (spuInfo.id) {
        return request({ url: '/admin/product/updateSpuInfo', method: 'post', data: spuInfo })
    } else {
        // 携带的参数不带id---添加spu
        // /admin/product/saveSpuInfo  POST
        return request({ url: '/admin/product/saveSpuInfo', method: 'post', data: spuInfo })
    }
}


// 删除SPU
// /admin/product/deleteSpu/{spuId} DELETE
export const reqDeleteSpu = (spuId) => request({ url: `/admin/product/deleteSpu/${spuId}`, method: 'delete' })




// 获取SKU列表数据的接口
// /admin/product/findBySpuId/{spuId} GET
export const reqSkuList = (spuId) => request({ url: `/admin/product/findBySpuId/${spuId}`, method: 'get' })


