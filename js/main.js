$(function () {
    $('#SWJ').fullpage({
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#121821', '#121821', '#121821', '#A4DE7F'],
        responsiveWidth: 1000,
    })
    $('.toolsicon').click(function () {
        $('.durationicon').removeClass('on-duration')
        $('.durationicon').addClass('off-duration')
        $('.timeframe').hide()
        $(this).toggleClass('off-tools')
        $(this).toggleClass('on-tools')
        $('.toolframe').toggle()
    })
    $('.durationicon').click(function () {
        $('.toolsicon').removeClass('on-tools')
        $('.toolsicon').addClass('off-tools')
        $('.toolframe').hide()
        $(this).toggleClass('off-tools')
        $(this).toggleClass('on-duration')
        $('.timeframe').toggle()
    })
    $('.thumbnail').click(function () {
        $('.toolframe .toolskill').hide()
        $('.timeframe .time').hide()
        $('.titlename p').hide()
        $('.bottomitem button a').hide()
        let num = $(this).index()
        $('.toolframe .toolskill').eq(num).show()
        $('.timeframe .time').eq(num).show()
        $('.titlename p').eq(num).show()
        $('.bottomitem button a').eq(num).show()

    })
    $('.thumbnail').eq(0).trigger('click')
    $(".thumbnail").on("click", function(){
	$("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$("iframe")[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$("iframe")[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$("iframe")[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$("iframe")[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$("iframe")[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$("iframe")[6].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$("iframe")[7].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

});

})
