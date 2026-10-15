// 상품 1개 카드: 썸네일, 이름, 가격, Add to Cart 버튼
export default function ProductItem({ product, onAdd }) {
  return (
    <li className="product-item">
      <div className="thumb">{product.emoji}</div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="price">
          {product.price.toLocaleString()}
          <small>원</small>
        </p>
      </div>
      <button type="button" className="btn-add" onClick={() => onAdd(product)}>
        Add to Cart
      </button>
    </li>
  );
}
