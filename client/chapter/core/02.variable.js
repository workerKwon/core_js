// 갯수 별 상품 가격 계산하기
let calcProductPriceQuantity;

// 구매 제품 가격의 총 합
let totalProductPrice = 0;

// 1년 기준 일(day)자 수
const DAYS_IN_YEAR = 365;

// 구매 결제 여부
let isPaid = false;

// 구매 결제 내역
let purchaseHistory = [];

// 브랜드 접두사
const BRAND_PREFIX = 'Brand_';

// 오늘의 운세(변수)
let todayLucky;

// 상품 정보
let productInfo = {};
