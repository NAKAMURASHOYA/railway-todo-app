export function getRemainText(limit) {
  if (!limit) return "";
  const now = new Date();
  const deadline = new Date(limit);
  const diffMs = deadline - now;
  if (diffMs <= 0) return "期限切れ";

  // 日・時・分を計算
  const minutes = Math.floor(diffMs / (1000 * 60)) % 60;
  const hours = Math.floor(diffMs / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  // 表示例: "1日2時間3分"
  const parts = [];
  if (days) parts.push(`${days}日`);
  if (hours) parts.push(`${hours}時間`);
  parts.push(`${minutes}分`);

  return `あと${parts.join('')}`;
}