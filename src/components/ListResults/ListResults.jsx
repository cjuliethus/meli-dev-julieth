import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import { saveProducts } from "../../redux/actions/products";
import { getCategories, getProductsByWords } from "../../services/services";
import ItemResult from "../ItemResult/ItemResult";
import { WrapperListResults } from "./styles";


/**
 * Component: ListResults 
 * 
 * @param {Array} products 
 * 
 * Example:
 *      <ListResults products={myproducts}/>
 * 
 */


const ListResults = ({ products, ...props }) => {

    const history = useHistory();

    /**
     *  Getting params for search
     */
    const params = history.location.search.replace('?search=', '');
    const [categories, setCategories] = useState([]);

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
     * Getting products based into search words
    */
    const getProducts = async () => {
        await getProductsByWords(params).then((response) => {
            let results = response.data.results;
            if (results.length > 4) {
                //cutting the array of result for only show 4 products
                results = results.slice(0, 4)
            }

            //Saving the products in the redux store
            props.saveProducts(results)

            //Calling callback for breadcrumbs
            getBreadcrumb(results[0]["category_id"])

        }).catch((e) => {
            console.error("Errors", e)
        })
    }

    useEffect(() => {
        getProducts()
        // eslint-disable-next-line
    }, [params]);

    const mapProducts = () => {
        //Iterating products with a unique key
        return products.map((product) => {
            return (
                <ItemResult product={product} key={product.id} />
            )
        })
    }

    return (
        <WrapperListResults>
            {/* Setting for SEO the title of the page based into the search */}
            <Helmet>
                <title className="title">{params.charAt(0).toUpperCase() + params.slice(1)} | Mercado libre</title>
            </Helmet>
            <ul className="breadcrumb">
                {categories.map((category) => {
                    return (
                        <li key={category.id}>{category.name}</li>
                    )
                })}
            </ul>
            {mapProducts()}
            {products.length === 0 && <div>No hemos encontrado resultados para tu busqueda intenta de nuevo por favor.</div>}
        </WrapperListResults>
    )

}


//Getting params from the state
const mapStateToProps = state => ({
    products: state.products

})

//Getting function from the actions

const mapDispatchToProps = (dispatch) => ({
    saveProducts: (products) => dispatch(saveProducts(products)),
});

//Creation connection with router and redux
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListResults));


