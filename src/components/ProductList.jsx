import ProductItem from "./ProductItem";

// 왼쪽 상품 목록 영역
export default function ProductList({ products, onAdd }) {
  return (
    <section>
      <h2 className="section-title">상품 목록</h2>
      <ul className="product-list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} onAdd={onAdd} />
        ))}
      </ul>
    </section>
  );
}
