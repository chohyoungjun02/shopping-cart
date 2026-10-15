// 장바구니에 담긴 상품 1개: 이름·가격, 수량 조절(+/-), Remove, 소계
export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <li className="cart-item">
      <div className="cart-item-top">
        <p className="cart-item-name">
          {item.name} · {item.price.toLocaleString()}원
        </p>
        <button type="button" className="btn-remove" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
      <div className="cart-item-bottom">
        <div className="qty">
          <button
            type="button"
            onClick={() => onDecrease(item.id)}
            disabled={item.quantity === 1}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button type="button" onClick={() => onIncrease(item.id)}>
            +
          </button>
        </div>
        <span className="subtotal">
          {(item.price * item.quantity).toLocaleString()}원
        </span>
      </div>
    </li>
  );
}
