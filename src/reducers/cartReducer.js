// 장바구니의 초기 State
export const initialState = {
  items: [],
};

// reducer: 현재 state와 action을 받아 "새로운" state를 반환하는 순수 함수
// 모든 상태 변경 규칙은 이 함수 안에만 작성한다
export function cartReducer(state, action) {
  switch (action.type) {
    // [ADD_ITEM] 상품을 장바구니에 담는다
    // payload: 상품 객체 { id, name, price }
    case "ADD_ITEM": {
      const product = action.payload;

      // 1. 장바구니에 같은 id의 상품이 이미 있는지 확인
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        // 2-1. 이미 있으면 → 해당 상품의 quantity만 1 증가
        //      map()은 새 배열을 만들고, 바꿀 상품은 스프레드(...)로 새 객체를 만든다
        //      (기존 state.items나 item 객체를 직접 수정하지 않음)
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      // 2-2. 처음 추가되는 상품이면 → quantity: 1 을 붙여 새 배열 끝에 추가
      //      push() 대신 스프레드로 새 배열을 만들어 불변성을 지킨다
      return {
        ...state,
        items: [...state.items, { ...product, quantity: 1 }],
      };
    }

    // [INCREASE_QUANTITY] 장바구니에 있는 상품의 수량을 1 늘린다
    // payload: 상품 id
    case "INCREASE_QUANTITY":
      return {
        ...state,
        // id가 같은 상품만 quantity + 1 인 새 객체로 바꾸고, 나머지는 그대로 둔다
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    // [DECREASE_QUANTITY] 장바구니에 있는 상품의 수량을 1 줄인다
    // payload: 상품 id
    case "DECREASE_QUANTITY":
      return {
        ...state,
        // Math.max(1, ...)로 수량이 1보다 작아지지 않게 막는다 (최소 수량 1 유지)
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        ),
      };

    // [REMOVE_ITEM] 장바구니에서 상품 하나를 삭제한다
    // payload: 상품 id
    case "REMOVE_ITEM":
      return {
        ...state,
        // filter()는 조건이 true인 상품만 모아 "새 배열"을 만든다
        // → id가 다른 상품만 남기면 해당 상품이 빠진다
        items: state.items.filter((item) => item.id !== action.payload),
      };

    // [CLEAR_CART] 장바구니를 전부 비운다
    // payload: 없음
    case "CLEAR_CART":
      return {
        ...state,
        // 기존 배열을 비우는 대신(length = 0) 새 빈 배열로 교체한다
        items: [],
      };

    // 정의되지 않은 action은 state를 그대로 반환
    default:
      return state;
  }
}
