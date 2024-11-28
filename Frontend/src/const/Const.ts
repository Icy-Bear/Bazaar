interface Category {
    title: string;
    img: string;   
}

interface Product {
    title: string; 
    price: number;       
    description: string; 
    img: string;
    category: string,
    height: string,
    weight: string,
    breastSize: string,
    skinColor: string,


}

interface ApiDetails {
    category: Category;
    product: Product;
}

const apiDetails: ApiDetails = {
    category: {
        title: "",
        img: "",
    },
    product: {
        title: "",
        price: 0,
        description: "",
        img: "",
        category: "",
        height: "",
        weight: "",
        breastSize: "",
        skinColor: ""

    },
};
