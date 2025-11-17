// localStorage 저장함수
// 저장 키 이름
const KEY = "favoriteAnimals";

// 좋아요 저장
export const saveFavorite = (item) => {
  const saved = JSON.parse(localStorage.getItem(KEY)) || [];

  // 이미 존재하는지 체크
  const exists = saved.some((v) => v.desertionNo === item.desertionNo);
  if (!exists) {
    saved.push(item);
    localStorage.setItem(KEY, JSON.stringify(saved));
  }
};

// 모든 저장된 항목 가져오기
export const getFavorites = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

// 특정 항목 삭제
export const removeFavorite = (desertionNo) => {
  const saved = JSON.parse(localStorage.getItem(KEY)) || [];
  const filtered = saved.filter((v) => v.desertionNo !== desertionNo);
  localStorage.setItem(KEY, JSON.stringify(filtered));
};
