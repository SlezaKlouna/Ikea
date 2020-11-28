import {getData} from "./getData.js";

const wishList = ['idd003', 'idd234', 'idd004'];
const cartList = [
    {
        id: 'idd003',
        count: 3,
    },
    {
        id: 'idd015',
        count: 1,
    },
    {
        id: 'idd013',
        count: 5,
    }
];

const loadData = () => {

    if (location.search){
        const search = decodeURI(location.search);
        console.log(search);
        const prop = search.split('=')[0].substring(1);
        const value = search.split('=')[1];

        if (prop === 's'){
            console.log(value);
        } else if (prop === 'wishlist'){
            console.log(wishList);
        } else {
            console.log(prop, value);
        }
    }

    if (location.hash){
        console.log(location.hash.substring(1));
    }

    if (location.pathname.includes('cart')){
        console.log(cartList);
    }
}

export default loadData;
