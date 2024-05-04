// export const products = [
//     {
//         id: "#20351",
//         name:"iPhone 14 Pro Max 128GB",
//         img:"https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
//         price:"25,990,000",
//     },
//     {
//         id: '#20352',
//         name: 'iPhone 15 Pro Max 256GB',
//         img:'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_2__5.jpg',
//         price:'34,990,000',
//     },
//     {
//       id:'#20353',
//       name:'SamSum Galaxy S22 Ultra (12GB - 256GB)',
//       img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_phantomblack_211119_2.jpg',
//       price: '18,590,000 ',  
//     },
//     {
//       id:'#20354',
//       name:'SamSung Galaxy Z Fold5 12GB 256GB',
//       img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/a/galaxy-z-fold-5-xanh-1.jpg',
//       price: '31,990,000 ',  
//     },
//     {
//       id:'#20355',
//       name:'SamSung Galaxy S22 Ultra (8GB-128GB)',
//       img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_burgundy_211119.jpg',
//       price: '17,990,000 ',  
//     },
//     {
//       id:'#20356',
//       name:'SamSung Galaxy Z Flip4 128GB',
//       img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung_galaxy_z_flip_m_i_2022-1_1.jpg',
//       price: '13,390,000 ',  
//     },
//     {
//       id:'#20357',
//       name:'SamSung Galaxy Z Flip5 512GB',
//       img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/d/4/d4a672c5-4709-4056-9f7f-72d6d70c2c1d_1.jpg',
//       price: '20,890,000 ',  
//     },
//     {
//       id:'#20358',
//       name:'SamSung Galaxy S21 FE 8GB-128GB',
//       img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-g990_s21fe_backfront_lv.png',
//       price: '9,490,000',  
//     },
//     {
//       id:'#20359',
//       name:'iPhone 14 128GB',
//       img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-storage-select-202209-6-1inch-y889.jpg',
//       price: '16,790,000',  
//     },
//     {
//       id:'#20360',
//       name:'iPhone 12 64GB',
//       img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/1/_/1_252.jpg',
//       price: '12,450,000 ',  
//     },
//     {
//       id:'#20361',
//       name:'iPhone 13 Pro Max 128GB',
//       img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/3/_/3_51_1_7.jpg',
//       price: '23,990,000 ',  
//     },
//     {
//       id:'#20362',
//       name:'iPhone 14 Pro Max 256GB',
//       img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/v/_/v_ng_20.png',
//       price: '27,090,000 ',  
//     },
//   ]

async function getData(){
 var data = fetch('http://localhost:8000/product')
  .then(res => res.json())
  .then(data => data)
  return data;
}
export const DATA_DETAILS_PRODUCT = 'data-details-product';

export const products = await getData();