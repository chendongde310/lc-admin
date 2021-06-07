window.onload = function () {
    const {Query, User} = AV;
    AV.init({
        appId: "AVf50EocEmhH2UzDNILkFTNa-gzGzoHsz",
        appKey: "tmqGyXvxaq3jjBAR3XiK9s4N",
        serverURL: "https://api2.91liangcai.com"
    });
    localStorage.setItem('debug', 'leancloud*');


    init();
};

function init() {

    $("#push").click(function () {
        console.log('提交。')
        push();
    })


}


//上传
function push() {

    //是否推荐工作
    let isRec = $("#isRec").val();
    console.log("是否推荐：  " +isRec)
    let contet = $("#content").val();
    console.log("职位详情：  " +contet)


    let name = $("#name").val();
    console.log("职位名称：  " + name)
    let location = $("#location").val();
    console.log("详细地址：  " + location)

    let payRrom = $("#payRrom").val();
    let payTo = $("#payTo").val();
    console.log("薪资：  " + payRrom + "-" + payTo)

    let phone = $("#phone").val();
    console.log("联系电话：  " + phone)


    let payType = $("#payType").val();
    console.log("薪酬类型：  " + payType)


    let tags = $("#tags").val();
    console.log("职位标签：  " + tags)


    let type = $("#type").val();
    console.log("职位类型：  " + type)


    let welfare = $("#welfare").val();
    console.log("福利待遇：  " + welfare)


    if (isEmpty(contet) ){
        alert("职位详情不能为空")
    }


}

var jobBean = {
    name: "",
    type: "",
    isRec: false,


}


function isEmpty(obj) {
    if (typeof obj == "undefined" || obj == null || obj == "") {
        return true;
    } else {
        return false;
    }
}




