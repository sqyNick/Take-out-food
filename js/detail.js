$(document).ready(function(){
    var storeId = window.sessionStorage.getItem("storeId");
    console.log(storeId);
    initInfo(storeId);
});
function initInfo (storeId) {
    switch(storeId){
        case '1':
            $(".img-box").css("background-image","url(../images/d_kdj.jpg)");
            $("#info-address").html("地址: 光谷步德国风情街5号楼301");
            $("#info-tel").html("电话: 4008-823-823");
            $(".detail-description").html("肯德基这次在全球同步统一发布新标识，无论在美国、英国、澳大利亚，还是中国，人们都将陆续看到换上新装的肯德基餐厅。中国第一个使用全新标识及装饰理念的肯德基餐厅位于北京市望京商业区。");
            break;
        case '2':
            $(".img-box").css("background-image","url(../images/d_mc.jpg)");
            $("#info-address").html("地址: 鲁巷工业园体综合楼16号");
            $("#info-tel").html("电话：18888888888");
            $(".detail-description").html("电话：18888888888</br>营业时间:9:00 - 23:00</br>冒菜、麻辣烫");
            break;
        case '3':
            $(".img-box").css("background-image","url(../images/store.png)");
            $("#info-address").html("地址: 光谷通讯广场公元铭美食城负一楼A09号");
            $("#info-tel").html("电话: 18672375832");
            $(".detail-description").html("龙记水煮鱼片，好吃就是这么任性</br>原价:￥18</br>现价：￥14.9");
            break;
        case '4':
            $(".img-box").css("background-image","url(../images/d_szy.jpg)");
            $("#info-address").html("地址: 鲁巷集贸市场内1楼21号");
            $("#info-tel").html("电话: 13296658787");
            $(".detail-description").html("配送费：￥4</br>满20减6元，满45减15");
            break;
        case '5':
            $(".img-box").css("background-image","url(../images/d_dt.jpg)");
            $("#info-address").html("地址: 鲁磨路117号");
            $("#info-tel").html("电话: 207-87779517");
            $(".detail-description").html("出售：熔岩泡芙、葡式蛋挞、肉松饼、手工蛋挞等美食</br>满10减2，满35减10，满80减22（在线支付专享）");
            break;
        case '6':
            $(".img-box").css("background-image","url(../images/d_lmj.jpg)");
            $("#info-address").html("地址: 光谷资本大厦巨幕影城旁");
            $("#info-tel").html("电话: 13886038663");
            $(".detail-description").html("配送时间：10:45 - 21:30</br>实际支付35元返3元商家代金券");
            break;
    }
}

function back(){
    history.back();
}
