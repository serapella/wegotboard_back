const WishlistPage = () => {
  return (
    <div>
      <>
        <section className="headerNav">
          <nav>
            <a href="#" id="wishLeft">
              Wishlist
            </a>
            <div>
              <a href="#" id="homeRight">
                Home
              </a>
              -
              <a href="#" id="wishRight">
                Wishlist
              </a>
            </div>
          </nav>
        </section>
        <section className="mainSection">
          <section className="filter">
            <div className="productCategory">
              <h4>Product Category</h4>
              <hr />
              <ul>
                <li>
                  <div>
                    <input type="checkbox" name="checkboxFilter" id="checkboxFilter" />
                    <p>Juice & Drinks</p>
                  </div>
                  <p>[20]</p>
                </li>
                <li>
                  <div>
                    <input type="checkbox" name="checkboxFilter" id="checkboxFilter" />
                    <p>Dairy & Milk</p>
                  </div>
                  <p>[54]</p>
                </li>
                <li>
                  <div>
                    <input type="checkbox" name="checkboxFilter" id="checkboxFilter" />
                    <p>Snack & Spice</p>
                  </div>
                  <p>[64]</p>
                </li>
              </ul>
            </div>
            <div className="filterByPrice">
              <h4>Filter By Price</h4>
              <hr />
              <div className="priceSlider">
                <input type="range" min="0" max="250" value="10" step="" />
              </div>
              <p>Price : €20 - €250</p>
              <button>Filter</button>
            </div>
            <div className="productCategory">
              <h4>Product Category</h4>
              <hr />
              <ul>
                <li>
                  <div>
                    <input type="checkbox" name="checkboxFilter" id="checkboxFilter" />
                    <p>Blue</p>
                  </div>
                  <p>🟦</p>
                </li>
                <li>
                  <div>
                    <input type="checkbox" name="checkboxFilter" id="checkboxFilter" />
                    <p>Yellow</p>
                  </div>
                  <p>🟨</p>
                </li>
                <li>
                  <div>
                    <input type="checkbox" name="checkboxFilter" id="checkboxFilter" />
                    <p>Red</p>
                  </div>
                  <p>🟥</p>
                </li>
              </ul>
            </div>
            <div className="productCategory">
              <h4>Weigth</h4>
              <hr />
              <ul>
                <li>
                  <div>
                    <input type="checkbox" name="checkboxFilter" id="checkboxFilter" />
                    <p>2kg Pack</p>
                  </div>
                </li>
                <li>
                  <div>
                    <input type="checkbox" name="checkboxFilter" id="checkboxFilter" />
                    <p>20kg Pack</p>
                  </div>
                </li>
                <li>
                  <div>
                    <input type="checkbox" name="checkboxFilter" id="checkboxFilter" />
                    <p>30kg Pack</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="productTags">
              <div className="gridTags">
                <h4>Product Tags</h4>
                <hr />
                <button>Vegetable</button>
                <button>Juice</button>
                <button>Foods</button>
                <button>Dry Fruits</button>
                <button>Vegetable</button>
                <button>Juice</button>
              </div>
            </div>
          </section>
          <section className="productLayout">
            <div className="productSorting">
              <div>
                <button>
                  <i>1</i>
                </button>
                <button>
                  <i>2</i>
                </button>
                <p>We found 29 items for you!</p>
              </div>
              <div>
                <select name="sortDropdown" id="sortDropdown">
                  <option value="default">Sort By : Featured</option>
                  <option value="sale">On Sale</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descening</option>
                </select>
              </div>
            </div>
            <div className="productGrid">
              <div className="productCard">
                <div className="productImage">
                  <img src="../imagesTest/div.cr-image-inner.png" alt="#" />
                </div>
                <button className="addToWishlist">
                  <img src="../icons-temp/wishlist-icon.svg" alt="" />
                </button>
                <div className="cardContainer">
                  <h4>Vegetables</h4>
                  <div className="rating">
                    <i>★★★★★</i>
                    <p>(4.5)</p>
                  </div>
                  <p>Fresh organic villa farm lemon 500gm pack</p>
                  <div className="pricing">
                    <p className="productCardSalePricing">
                      $120.25<p className="productCardPricing">$123.25</p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="productCard">
                <div className="productImage">
                  <img src="../imagesTest/div.cr-image-inner.png" alt="#" />
                </div>
                <button className="addToWishlist">
                  <img src="../icons-temp/wishlist-icon.svg" alt="" />
                </button>
                <div className="cardContainer">
                  <h4>Vegetables</h4>
                  <div className="rating">
                    <i>★★★★★</i>
                    <p>(4.5)</p>
                  </div>
                  <p>Fresh organic villa farm lemon 500gm pack</p>
                  <div className="pricing">
                    <p className="productCardSalePricing">
                      $120.25<p className="productCardPricing">$123.25</p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="productCard">
                <div className="productImage">
                  <img src="../imagesTest/div.cr-image-inner.png" alt="#" />
                </div>
                <button className="addToWishlist">
                  <img src="../icons-temp/wishlist-icon.svg" alt="" />
                </button>
                <div className="cardContainer">
                  <h4>Vegetables</h4>
                  <div className="rating">
                    <i>★★★★★</i>
                    <p>(4.5)</p>
                  </div>
                  <p>Fresh organic villa farm lemon 500gm pack</p>
                  <div className="pricing">
                    <p className="productCardSalePricing">
                      $120.25<p className="productCardPricing">$123.25</p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="productCard">
                <div className="productImage">
                  <img src="../imagesTest/div.cr-image-inner.png" alt="#" />
                </div>
                <button className="addToWishlist">
                  <img src="../icons-temp/wishlist-icon.svg" alt="" />
                </button>
                <div className="cardContainer">
                  <h4>Vegetables</h4>
                  <div className="rating">
                    <i>★★★★★</i>
                    <p>(4.5)</p>
                  </div>
                  <p>Fresh organic villa farm lemon 500gm pack</p>
                  <div className="pricing">
                    <p className="productCardSalePricing">
                      $120.25<p className="productCardPricing">$123.25</p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="productCard">
                <div className="productImage">
                  <img src="../imagesTest/div.cr-image-inner.png" alt="#" />
                </div>
                <button className="addToWishlist">
                  <img src="../icons-temp/wishlist-icon.svg" alt="" />
                </button>
                <div className="cardContainer">
                  <h4>Vegetables</h4>
                  <div className="rating">
                    <i>★★★★★</i>
                    <p>(4.5)</p>
                  </div>
                  <p>Fresh organic villa farm lemon 500gm pack</p>
                  <div className="pricing">
                    <p className="productCardSalePricing">
                      $120.25<p className="productCardPricing">$123.25</p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="productCard">
                <div className="productImage">
                  <img src="../imagesTest/div.cr-image-inner.png" alt="#" />
                </div>
                <button className="addToWishlist">
                  <img src="../icons-temp/wishlist-icon.svg" alt="" />
                </button>
                <div className="cardContainer">
                  <h4>Vegetables</h4>
                  <div className="rating">
                    <i>★★★★★</i>
                    <p>(4.5)</p>
                  </div>
                  <p>Fresh organic villa farm lemon 500gm pack</p>
                  <div className="pricing">
                    <p className="productCardSalePricing">
                      $120.25<p className="productCardPricing">$123.25</p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="productCard">
                <div className="productImage">
                  <img src="../imagesTest/div.cr-image-inner.png" alt="#" />
                </div>
                <button className="addToWishlist">
                  <img src="../icons-temp/wishlist-icon.svg" alt="" />
                </button>
                <div className="cardContainer">
                  <h4>Vegetables</h4>
                  <div className="rating">
                    <i>★★★★★</i>
                    <p>(4.5)</p>
                  </div>
                  <p>Fresh organic villa farm lemon 500gm pack</p>
                  <div className="pricing">
                    <p className="productCardSalePricing">
                      $120.25<p className="productCardPricing">$123.25</p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="productCard">
                <div className="productImage">
                  <img src="../imagesTest/div.cr-image-inner.png" alt="#" />
                </div>
                <button className="addToWishlist">
                  <img src="../icons-temp/wishlist-icon.svg" alt="" />
                </button>
                <div className="cardContainer">
                  <h4>Vegetables</h4>
                  <div className="rating">
                    <i>★★★★★</i>
                    <p>(4.5)</p>
                  </div>
                  <p>Fresh organic villa farm lemon 500gm pack</p>
                  <div className="pricing">
                    <p className="productCardSalePricing">
                      $120.25<p className="productCardPricing">$123.25</p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="productCard">
                <div className="productImage">
                  <img src="../imagesTest/div.cr-image-inner.png" alt="#" />
                </div>
                <button className="addToWishlist">
                  <img src="../icons-temp/wishlist-icon.svg" alt="" />
                </button>
                <div className="cardContainer">
                  <h4>Vegetables</h4>
                  <div className="rating">
                    <i>★★★★★</i>
                    <p>(4.5)</p>
                  </div>
                  <p>Fresh organic villa farm lemon 500gm pack</p>
                  <div className="pricing">
                    <p className="productCardSalePricing">
                      $120.25<p className="productCardPricing">$123.25</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gridPagination">
              <button>Previous</button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>Next</button>
            </div>
          </section>
        </section>
      </>
    </div>
  );
};
export default WishlistPage;
