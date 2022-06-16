import {reactive} from 'vue';

const productExample = {
    name: 'Наименование товара',
    description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    imgUrl: require('@/assets/images/productImage.png'),
    cost: '10 000',
};

const store = reactive({
    sortType: 'default',
    newProduct: {
        name: '',
        description: '',
        imgUrl: '',
        cost: '',
    },
    products: [
        Object.assign({},productExample),
        Object.assign({},productExample),
        Object.assign({},productExample),
        Object.assign({},productExample),
        Object.assign({},productExample),
        Object.assign({},productExample),
        Object.assign({},productExample),
    ],
    save: (() => {
        localStorage.setItem('products', JSON.stringify(store.products));
    }).bind(this),
    load: (() => {}).bind(this)
});

store.save = () => {
    localStorage.setItem('products', JSON.stringify(store.products));
};

store.load = () => {
    if(localStorage.getItem('products'))
        store.products = JSON.parse(localStorage.getItem('products'));
};

store.load();

export default store;