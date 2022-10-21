export const CommonValue = {
    // ページネーションにて表示する件数
    PAGENATION_COUNT : 6,
    range : (start, end, length = end - start + 1) =>
    Array.from({ length }, (_, i) => start + i),
    categories : ["react","Spring","Java","Rust","Spring"],
}