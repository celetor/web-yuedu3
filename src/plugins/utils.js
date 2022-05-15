export function getImageFromLegado(src, width) {
  if (/cover\?path=|data:/.test(src)) {
    return null;
  }
  return (
    "../../image?path=" + encodeURIComponent(src) +
    "&url=" + encodeURIComponent(sessionStorage.getItem("bookUrl")) +
    "&width=" + width
  );
}

/**
 *
 * @param {*} fn  是我们需要包装的事件回调
 * @param {*} delay 是每次推迟执行的等待时间
 */
export function debounce(fn, delay = 250) {
  // 定时器
  let timer = null;
  // 将debounce处理结果当作函数返回
  return function() {
    // 保留调用时的this上下文
    let context = this;
    // 保留调用时传入的参数
    let args = arguments;
    // 每次事件被触发时，都去清除之前的旧定时器
    if (timer) {
      clearTimeout(timer);
    }
    // 设立新定时器
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
};
