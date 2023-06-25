const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
	let scrollToOptions = {
        top : 0, //スクロール位置にページ最上部を指定
        behavior : 'smooth' //スムーズに移動させる条件を指定
    };

  window.scrollTo(scrollToOptions);
});