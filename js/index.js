/**
 * Created by Administrator on 2016/11/25.
 */
$(document).ready(function(){
    $(".item").click(function () {
        initItemClick($(this).attr("storeId"));
    });
});

function initItemClick (storeId) {
    window.location.href = "../view/detail.html" ;
    window.sessionStorage.setItem("storeId",storeId);
}
