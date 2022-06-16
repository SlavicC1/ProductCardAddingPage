import {reactive} from 'vue';

const productExample = {
    name: 'Наименование товара',
    description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    imgUrl: require('@/assets/images/productImage.png'),
    cost: '10 000',
};

const store = reactive({
    sortType: '',
    newProduct: {
        name: '',
        description: '',
        imgUrl: '',
        cost: '',
    },
    products: [
        productExample,
        productExample,
        productExample,
        productExample,
        productExample,
        productExample,
        productExample,
    ],
});

export default store;