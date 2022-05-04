export function animation(obj,target,callback){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var step = (target - obj.offsetLeft) / 10;//缓动效果核心算法
        step = step >= 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            //停止动画 本质停止定时器
            window.clearInterval(obj.timer);
            //回调函数一定要写到定时器结束里面
            // if (callback) {
            //     callback();
            // }
            callback && callback();
        } else {
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 15)
}
