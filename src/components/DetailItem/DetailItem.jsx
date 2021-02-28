import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getCategories, getProductById } from "../../services/services";
import CardDetail from "../CardDetail/CardDetail";
import { WrapperDetailItem } from "./style";

const DetailItem = () => {
    const history = useHistory();
    const [product, setProduct] = useState({});
    const [categories, setCategories] = useState([]);

    /**
    *  Getting id for product details
    */
    const id = history.location.pathname.replace('/items/', '');

    /**
     * Getting async categories for build breadcrumb
    */
    const getBreadcrumb = async (idcategory) => {
        await getCategories(idcategory).then((response) => {
            setCategories(response.data.path_from_root)
        }).catch((e) => {
            console.error("Errors", e)
        })

    }

    /**
     * Getting product with the id captured in the 
     * params from the route
    */
    const getProduct = async () => {
        await getProductById(id).then((response) => {
            let newProduct = response.data[0]['body']
            setProduct(newProduct)
            getBreadcrumb(newProduct.category_id)
        }).catch((e) => {
            console.error("errors", e)
        })
    }

    useEffect(() => {
        /* Getting product before mount the view */
        getProduct()
        // eslint-disable-next-line
    }, []);

    return (
        <WrapperDetailItem>
            <ul className="breadcrumb">
                {categories.map((category) => {
                    return (
                        <li key={category.id}>{category.name}</li>
                    )
                })}

            </ul>
            <CardDetail product={product} />
        </WrapperDetailItem>

    )

}

export default DetailItem;