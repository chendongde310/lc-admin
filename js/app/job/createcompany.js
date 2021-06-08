window.onload = function () {
    const {Query, User} = AV;
    AV.init({
        appId: "AVf50EocEmhH2UzDNILkFTNa-gzGzoHsz",
        appKey: "tmqGyXvxaq3jjBAR3XiK9s4N",
        serverURL: "https://api2.91liangcai.com"
    });

    $(document).ready(function () {
        init();
    });
};


//初始化
function init() {

    console.log('初始化。')
    $("#push").click(function () {
        console.log('提交。')
        push();
    })


    // //根据选择设置默认数据
    // $("#type").bind('input propertychange', function () {
    //     const payType = $(this).val();
    //     console.log("选择了：  " + payType)
    //     //获取默认数据
    //     $("#content").val(getContent(payType))
    //     $("#welfare").val(getWelfare(payType))
    //     $("#name").val(payType)
    // })


    // // 公司名字搜索
    // $('#company').bind('input propertychange', function () {
    //     getCompany()
    // }).autocomplete({
    //     source: companyName,
    //     select: function (event, ui) {
    //         //加载公司相关的默认数据
    //         if (ui.item) {
    //             loadCompanyDate(ui.item.label);
    //         }
    //     },
    // });


}


//上传
function push() {

    const city = $("#city ").val();
    const dec = $("#dec").val();
    const icon = document.querySelector('input[type=file]').files[0];
    const location = $("#location").val();
    const master = $("#master").val();
    const name = $("#name").val();
    const phone = $("#phone").val();
    const point = $("#point").val();
    const scale = $("#scale").val();
    const tel = $("#tel").val();
    const tags = $("#tags").val().split(',');


    if (isEmpty(city, "城市")) {
        return;
    }
    if (isEmpty(dec, "公司详情")) {
        return;
    }
    if (isEmpty(icon, "上传公司LOGO")) {
        return;
    }
    if (isEmpty(location, "详细地址")) {
        return;
    }
    if (isEmpty(master, "法人")) {
        return;
    }
    if (isEmpty(name, "公司名称")) {
        return;
    }
    if (isEmpty(phone, "电话")) {
        return;
    }

    if (isEmpty(point, "坐标")) {
        return;
    }

    if (isEmpty(scale, "公司规模")) {
        return;
    }

    if (isEmpty(tags, "业务范围")) {
        return;
    }

    if (isEmpty(tel, "座机")) {
        return;
    }


    var reader = new FileReader();
    reader.readAsDataURL(icon);
    reader.onload = function (e) {

        const data = {base64: e.target.result};
        const file = new AV.File('logo.png', data);

        // 为 AV.Object 创建子类
        const company = AV.Object.extend('Company');
        const avCompany = new company();
        avCompany.set('city', city);
        avCompany.set('dec', dec);
        avCompany.set('icon', file);
        avCompany.set('location', location);
        avCompany.set('master', master);
        avCompany.set('name', name);
        avCompany.set('phone', phone);
        //avCompany.set('point', point);
        avCompany.set('scale', scale);
        avCompany.set('tags', tags);
        avCompany.set('tel', tel);


        // 将对象保存到云端
        avCompany.save().then((avJob) => {
            // 成功保存之后，执行其他逻辑
            console.log(`保存成功。objectId：${avCompany.id}`);
            alert(`创建成功。objectId：${avCompany.id}`)
        }, (error) => {
            // 异常处理
            alert(`创建失败，请重试`)
        });

    }


}

function isEmpty(obj, title) {
    if (typeof obj == "undefined" || obj == null || obj == "") {
        alert(title + "不能为空")
        return true;
    } else {
        return false;
    }
}


function getBase64(file) {

}






