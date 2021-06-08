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
    query.skip(index * 10);
    query.include('company')
    query.find().then((jobData) => {

        jobData.forEach((job, index) => {
            addItem(job, index)
        });
    });


}


function addItem(job, index) {
    const pid = job.get("pid");
    const name = job.get("name");
    const type = job.get("type");
    const city = job.get("city");
    const company = job.get("company").get("name");
    const payFrom = job.get("payFrom");
    const payTo = job.get("payTo");
    const pay = payFrom + " - " + payTo;
    const date = job.get("createdAt");

    const node = '<tbody><tr><td><label class="lyear-checkbox checkbox-primary"><input type="checkbox"name="ids[]"value="1"><span></span></label></td><td>' + pid + '</td><td id="name-' + index + '">' + name + '</td><td id="type-' + index + '">' + type + '</td><td id="city-' + index + '">' + city + '</td><td id="company-' + index + '">' + company + '</td><td id="pay-' + index + '">' + pay + '</td><td id="date-' + index + '">' + date + '</td><td><div class="btn-group"><button class="btn btn-success btn-w-md"type="button">查看</button></div><div class="btn-group"><button class="btn btn-info btn-w-md"type="button">编辑</button></div><div class="btn-group"><button class="btn btn-danger btn-w-md"type="button">删除</button></div></td></tr></tbody>';


    var jobType = '#' + 'type-' + index;
    $(jobType).text(type);


    $("#job-list").append(node)


}