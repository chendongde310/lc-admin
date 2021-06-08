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


index = 0;


//初始化
function init() {

    const query = new AV.Query('Jobs');
    query.limit(10);
    query.skip(index*10);
    query.find().then((jobDatas) => {
        // students 是包含满足条件的 Student 对象的数组
    });


}