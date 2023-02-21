// component
import ProductCard from "./product-card";

// images
import icon_1 from "../assets/project-icon-1.png"
import icon_2 from "../assets/project-icon-2.png"



function Products() {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-lg text-zinc-500 font-semibold text-left">My Products</h3>
            <div id="row" className="flex gap-4 flex-col sm:flex-row">

            <ProductCard target={"/project"} icon={icon_1} title="Cool Design" description="These are placeholder words."/>
            <ProductCard icon={icon_2} title="Amazing Project" description="Design is my passion."/>
            </div>
        </div>
    );
}

export default Products;