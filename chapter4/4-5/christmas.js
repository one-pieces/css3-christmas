/**
 * 背景音乐
 * @param {[type]} url  [description]
 * @param {[type]} loop [description]
 */
 function HTML5Audio(url, loop) {
 	var audio = new Audio(url);
 	audio.autoplay = true;
 	audio.loop = loop || false;
 	audio.play();
 	return {
 		end: function(callback) {
 			audio.addEventListener("ended", function() {
 				callback();
 			}, false);
 		}
 	}
 }

 $(function() {
 	$("button:first").click(function() {
 		//背景音乐
 		var audio1 = new HTML5Audio("http://www.imooc.com/upload/media/one.mp3");
 		audio1.end(function() {
 			alert("音乐结束");
 		});
 	});
 	$("button:last").click(function() {
 		//循环播放
 		var audio2 = new HTML5Audio("url = http://www.imooc.com/upload/media/two.mp3", true);
 	});
 });