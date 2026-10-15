import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

// 오른쪽 장바구니 영역: 헤더(개수, Clear Cart) + 상품 목록 + 총금액
export default function Cart({ items, onIncrease, onDecrease, onRemove, onClear }) {
  return (
    <aside className="cart">
      <div className="cart-header">
        <h2 className="section-title">
          장바구니 <span className="count">{items.length}</span>
        </h2>
        {items.length > 0 && (
          <button type="button" className="btn-clear" onClick={onClear}>
            Clear Cart
          </button>
        )}
      </div>
      {items.length === 0 ? (
        <p className="empty">장바구니가 비어있습니다</p>
      ) : (
        <>
          <ul className="cart-list">
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onRemove={onRemove}
              />
            ))}
          </ul>
          <CartSummary items={items} />
        </>
      )}
    </aside>
  );
}
