/**
 * 第二副场景页面
 *
 */
function pageC() {

    this.$window   = $(".page-c .window");
    this.$leftWin  = this.$window.find(".window-left");
    this.$rightWin = this.$window.find(".window-right");
    this.$sceneBg  = this.$window.find(".window-scene-bg");
    this.$closeBg  = this.$window.find(".window-close-bg");
    this.$deer = $(".page-c").find(".deer");

    // 背景切换
    this.$sceneBg.transition({
        opacity: 0,
    }, 3000);
    this.$closeBg.css("transform", "translateZ(0)")
    this.$closeBg.transition({
        opacity: 1
    }, 5000);

    //关门动作
    this.closeWindow();
}


/**
 * 运行下一个动画
 * @return {Function} [description]
 */
pageC.prototype.next = function(options) {
    var dfd = $.Deferred();
    this.$deer.transition(options.style, options.time, "linear",function() {
        dfd.resolve()
    });
    return dfd;
}

/**
 * 关闭窗
 * @return {[type]} [description]
 */
pageC.prototype.closeWindow = function() {
    var count=1;
    var that = this;
    var complete=function(){
        ++count;
        if(count==3){
            // that.run();
        }
    }
    var bind=function(element){
        element.addClass("close").one("animationend webkitAnimationEnd",function(event){
            complete(); 
        })
    }
    bind(this.$leftWin);
    bind(this.$rightWin);
}

/**
 * 路径
 * @return {[type]} [description]
 */
pageC.prototype.run = function(callback){
    var that = this;
    var next = function() {
        return this.next.apply(this, arguments);
    }.bind(this);

    next({
        "time":1500,
        "style": {
            "top": "5rem",
            "right": "-3rem"
        }
    })
    .then(function() {
       return next({
            "time":500,
            "style": {
               "rotateY" : "-180",
               "scale": "0.9"
            }
        })
    })    
    .then(function() {
        return next({
            "time": 10000,
            "style": {
                "top": "1rem",
                "right": "16rem",
                "scale": "0.1"
            }
        })
    });
}
