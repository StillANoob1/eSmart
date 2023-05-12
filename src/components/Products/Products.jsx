import "./Products.scss";
import Product from "./Product/Product";
import Loader from "../loader/Loader"

const Products = ({ products, innerPage, headingText ,loading}) => {
    return (
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className={`products ${innerPage ? "innerPage" : ""}`}>
                {loading? <Loader/> :products?.data?.map((item) => (
                    <Product
                        key={item.id}
                        id={item.id}
                        data={item.attributes}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;