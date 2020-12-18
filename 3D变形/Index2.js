let imgL = $("#wrap img").length;
//  360/imgL   和角度有关系
let Deg = 360 / imgL;
let roY = 0, roX = -10, xN=0, yN=0,play=null;

play=setInterval(move,200)

//遍历 $('#wrap img')----改变他们的css样式
//旋转以及禁止拖拽复制
$("#wrap img").each(function (i) {
    $(this).css('transform', 'rotateY(' + i * Deg + 'deg) translateZ(700px)')
        .attr('ondragstart', 'return false');
})
$(document).mousedown(function (e) {
    clearInterval(play);
    //获取当前鼠标相对于浏览器页面（或客户区）的  x  方向的位置 保存在变量 x_
    let x_ = e.clientX
    let y_ = e.clientY
    $(this).bind("mousemove", function (e) {
        let x = e.clientX
        let y = e.clientY

        //计算鼠标在当前元素内 相对 上次鼠标按下时的 x轴距离  并保存在变量
        xN = x - x_;    
        yN = y - y_;
        //按照比例换算  并在变量基础上增加
        roX += yN * 0.07;
        roY += xN * 0.2;
        //改变css动画transform样式  值为…………角度是变量roY,roX的
        $('#wrap').css('transform', 'perspective(3000px) rotateX(' + roX + 'deg) rotateY(' + roY + 'deg)');
        //并将鼠标按下的位置设置成当前移动到的位置
        x_ = e.clientX
        y_ = e.clientY



    })
}).mouseup(function () {
    $(this).unbind('mousemove');
    console.log(2);
    play=setInterval(move,200)  
})
function move() {
    console.log(1);
    xN=1;
    yN=0;
    // xN +=1;
    // //按照比例换算 
    // yN = yN * 2;
    //按照比例换算  并在变量基础上增加
    roX += yN * 0.07;
    roY += xN * 0.2;
    
    $('#wrap').css('transform', 'perspective(3000px) rotateX(' + roX + 'deg) rotateY(' + roY + 'deg)');
}