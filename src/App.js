import React from 'react';
import './App.css';
import NavButton from "./Button";
import ProductBag from "./Product";
import bag_1 from "./assets/bag_1.png"
import bag_2 from "./assets/bag_2.png"
import bag_3 from "./assets/bag_3.png"
import bag_4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import people from "./assets/our_story.png"
import Tile from "./FooterFunction";

function App() {

    return (
        <>
            <header>
                <h1>Handbags & Purses</h1>
            </header>
            <nav>
                <NavButton
                    description="to the collection"/>
                <NavButton
                    description="shop all bags"/>
                <NavButton
                    description="pre orders"
                    isDisabled={true}/>
            </nav>
            <main>
                <ProductBag
                    bestSeller={true}
                    image={bag_1}
                    titel="handy bag"
                    price={400}
                />
                <ProductBag
                    bestSeller={true}
                    image={bag_2}
                    titel="stylish"
                    price={"250"}
                />
                <ProductBag
                    bestSeller={false}
                    image={bag_3}
                    titel="simple bag"
                    price={"300"}
                />
                <ProductBag
                    bestSeller={false}
                    image={bag_4}
                    titel="trendy bag"
                    price={150}
                />
            </main>
            <footer>
                <Tile
                    title="THE BRAND"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam architecto aspernatur aut cum ea eius est hic impedit ipsam laborum laudantium, molestiae, natus nisi non obcaecati perspiciatis quam qui, quos rem vel voluptate voluptatum? Aut blanditiis, commodi debitis dolore exercitationem expedita iste, iure nobis odit praesentium voluptatem voluptatibus."
                />
                <Tile
                    image={brand} alt={"eerste"}
                />
                <Tile
                    image={people} alt={"tweede"}
                />
                <Tile
                    title="OUR STORY"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam architecto aspernatur aut cum ea eius est hic impedit ipsam laborum laudantium, molestiae, natus nisi non obcaecati perspiciatis quam qui, quos rem vel voluptate voluptatum? Aut blanditiis, commodi debitis dolore exercitationem expedita iste, iure nobis odit praesentium voluptatem voluptatibus."
                />
            </footer>
        </>
    );
}
    export default App;




