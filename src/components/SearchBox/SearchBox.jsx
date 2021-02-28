import { WrapperSearchBox, Icon } from "./style";
import SearchIcon from "../../assets/img/icons/search.png";
import { useState } from "react";
import { getProductsByWords } from "../../services/services";
import { saveProducts } from "../../redux/actions/products";
import { useHistory, withRouter } from "react-router-dom";
import { connect } from "react-redux";

/** 
 * Component:SearchBox 
 * 
 * @param {Function} saveProducts 
 * Example Usage:
 *      <SearchBox/> 
 */

const SearchBox = ({ saveProducts, ...props }) => {
    const [text, setText] = useState("");
    const history = useHistory()

    //Setting the state from the input search
    const handleChange = async (e) => {
        setText(e.target.value);
    }


    //Get the products by the words written
    const getSearch = async () => {
        await getProductsByWords(text).then((response) => {
            let results = response.data.results;
            if (results.length > 4) {
                results = results.slice(0, 4)
            }
            saveProducts(results)
            //After from save the products in the redux we push the params to the route
            history.push("/items?search=" + text)
        }).catch((e) => {
            console.error("Errors", e)
        })
    }

    //Get the products in case that someone press enter in the searchbox
    const handleKey = async (e) => {
        if (e.key === 'Enter') {
            getSearch();
        }
    }


    return (
        <WrapperSearchBox>
            <input
                className="search-input"
                placeholder="Nunca dejes de buscar"
                value={text}
                onChange={(value) => {
                    handleChange(value);
                }}
                onKeyDown={(e) => { handleKey(e) }}
            />
            <Icon title="Buscar" onClick={() => { getSearch(text) }}>
                <img className="icon" src={SearchIcon} alt="Busqueda mercadolibre" />
            </Icon>
        </WrapperSearchBox>
    );
};

const mapDispatchToProps = (dispatch) => ({
    saveProducts: (products) => dispatch(saveProducts(products)),
});

export default withRouter(connect(null, mapDispatchToProps)(SearchBox));
