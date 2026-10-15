# Shopping Cart

React의 `useReducer`로 장바구니 상태를 관리하는 간단한 Shopping Cart UI입니다.
왼쪽에서 상품을 담고, 오른쪽 장바구니에서 수량 조절·삭제·전체 비우기와 총 결제금액을 확인할 수 있습니다.

## 기능

- 상품 목록 표시 (Keyboard, Mouse, Monitor)
- **Add to Cart**: 처음 담으면 수량 1, 이미 있는 상품을 다시 담으면 수량 +1
- **+ / -**: 수량 증가·감소 (최소 수량 1 유지)
- **Remove**: 상품 하나 삭제
- **Clear Cart**: 장바구니 전체 비우기
- 상품별 소계(가격 × 수량)와 총 결제금액 표시

## 기술 스택

- React 19 (Function Component, `useReducer`)
- Vite 8

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:5173 을 엽니다.

## 폴더 구조

```
src/
├─ App.jsx                 # useReducer + dispatch 핸들러, 전체 배치
├─ App.css                 # 스타일 (2단 레이아웃)
├─ main.jsx                # 진입점
├─ data/
│  └─ products.js          # 상품 데이터
├─ reducers/
│  └─ cartReducer.js       # initialState + cartReducer
└─ components/
   ├─ Header.jsx           # 상단 로고
   ├─ ProductList.jsx      # 상품 목록
   ├─ ProductItem.jsx      # 상품 카드 1개
   ├─ Cart.jsx             # 장바구니 영역
   ├─ CartItem.jsx         # 장바구니 상품 1개
   └─ CartSummary.jsx      # 총 결제금액
```

## 상태 관리

초기 State:

```js
{ items: [] }
```

모든 상태 변경은 `dispatch()`로 Action을 보내고, 변경 규칙은 `cartReducer` 안에만 작성합니다.
기존 State는 직접 수정하지 않고 `map()`, `filter()`, Spread Syntax로 새 객체·배열을 만들어 반환합니다.

| Action | payload | 동작 |
|---|---|---|
| `ADD_ITEM` | 상품 객체 | 새 상품은 `quantity: 1`로 추가, 이미 있으면 수량 +1 |
| `INCREASE_QUANTITY` | 상품 id | 수량 +1 |
| `DECREASE_QUANTITY` | 상품 id | 수량 -1 (최소 1) |
| `REMOVE_ITEM` | 상품 id | 해당 상품 삭제 |
| `CLEAR_CART` | 없음 | 장바구니 비우기 |

```js
dispatch({
  type: "ADD_ITEM",
  payload: product,
});
```
