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


    $("#push").click(function () {
        console.log('提交。')
        push();
    })


    //根据选择设置默认数据
    $("#type").bind('input propertychange', function () {
        const payType = $(this).val();
        console.log("选择了：  " + payType)
        //获取默认数据
        $("#content").val(getContent(payType))
        $("#welfare").val(getWelfare(payType))
        $("#name").val(payType)
    })


    // 公司名字搜索
    $('#company').bind('input propertychange', function () {
        getCompany()
    })


    $(function () {
            var $company = $('#company');
            $company.autocomplete({
                source: companyName,
                select: function (event, ui) {

                    //加载公司相关的默认数据
                    if (ui.item) {
                        loadCompanyDate(ui.item.label);
                    }


                },
            });
        }
    )
    ;


}


//上传
function push() {

    const isRec = $("#isRec").val() === "是";
    const name = $("#name").val();
    const content = $("#content").val();
    const location = $("#location").val();
    const payFrom = $("#payFrom").val();
    const payTo = $("#payTo").val();
    const phone = $("#phone").val();
    const company = $("#company").val();
    const payType = $("#payType").val();
    const type = $("#type").val();
    const welfare = $("#welfare").val();
    const tags = $("#tags").val().split(',');


    if (isEmpty(name, "职位名称")) {
        return;
    }
    if (isEmpty(content, "职位详情")) {
        return;
    }
    if (isEmpty(location, "详细地址")) {
        return;
    }
    if (isEmpty(payFrom, "薪资起")) {
        return;
    }
    if (isEmpty(payTo, "薪资止")) {
        return;
    }
    if (isEmpty(phone, "联系电话")) {
        return;
    }
    if (isEmpty(company, "公司ID")) {
        return;
    }

    if (isEmpty(welfare, "福利待遇")) {
        return;
    }


    // 为 AV.Object 创建子类
    const Job = AV.Object.extend('Jobs');

// 为该类创建一个新实例
    const avJob = new Job();
    avJob.set('name', name);
    avJob.set('content', content);
    avJob.set('location', location);
    const pf = parseInt(payFrom)
    avJob.set('payFrom', pf);
    const pt = parseInt(payTo)
    avJob.set('payTo', pt);
    avJob.set('phone', phone);
    avJob.set('payType', payType);
    avJob.set('type', type);
    avJob.set('welfare', welfare);
    avJob.set('tips', tags);
    avJob.set('isRec', isRec);

    const userAV = AV.Object.createWithoutData('_User', '60bb853d1bdb986f5f938bd2');
    avJob.set('user', userAV);


    const companyAV = AV.Object.createWithoutData('Company', companys.get(company).get("objectId"));
    avJob.set("company", companyAV)


    avJob.set('point', companys.get(company).get("point"));


    // 将对象保存到云端
    avJob.save().then((avJob) => {
        // 成功保存之后，执行其他逻辑
        console.log(`保存成功。objectId：${avJob.id}`);
        alert(`创建成功。objectId：${avJob.id}`)
    }, (error) => {
        // 异常处理
        alert(`创建失败，请重试`)
    });


}

function isEmpty(obj, title) {
    if (typeof obj == "undefined" || obj == null || obj == "") {
        alert(title + "不能为空")
        return true;
    } else {
        return false;
    }
}

companyName = [""];
companys = new Map();

//获取公司信息
function getCompany() {
    const key = $("#company").val()
    const query = new AV.Query('Company');
    query.contains('name', key);
    query.select(['name', 'objectId', 'location', 'city', 'point', 'phone']);
    query.find().then((companyAV) => {
        companyName.length = 0;
        companys.length = 0;
        companyAV.forEach((c) => {
            // 该操作无需网络连接
            const name = c.get('name');
            companyName.push(name)
            companys.set(name, c)
        });
    });
}


//加载公司相关的默认数据
function loadCompanyDate(label) {
    $("#phone").val(companys.get(label).get('phone'));
    $("#location").val(companys.get(label).get('location'));
}









