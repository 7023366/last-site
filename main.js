// HTMLの読み込みが完了してから実行する
document.addEventListener('DOMContentLoaded', () => {

    // 1. スクロールアニメーションの制御
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { 
        threshold: 0.1 
    });

    // 監視対象を確実に取得
    const hiddenElements = document.querySelectorAll('.about, .work-item, .contact');
    
    // 要素が存在する場合のみ監視を開始
    if (hiddenElements.length > 0) {
        hiddenElements.forEach((el) => observer.observe(el));
    }

    // 2. ページ更新（リロード）時に最上部へスクロール
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
});