// 장바구니 하단의 총 결제금액
export default function CartSummary({ items }) {
  // 총금액: 각 상품의 price × quantity를 모두 더한 값
  // state에 따로 저장하지 않고 items로부터 매번 계산한다
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="total">
      <span>총 결제금액</span>
      <span className="total-price">{totalPrice.toLocaleString()}원</span>
    </div>
  );
}
