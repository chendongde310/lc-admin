function getContent(type) {

    switch (type) {
        case "灰工":
            return "岗位描述\n" +
                "1、根据工艺或客户要求，制作成品；\n" +
                "2、熟悉批灰工艺和流程；\n" +
                "3、实际操作熟练 ；\n" +
                "4、按时按量完成生产任务；\n" +
                "5、了解家具打磨的质量要求和质量标准；\n" +
                "6、能够听从领导安排的各项任务。\n" +
                "岗位要求 \n" +
                "1、具备一定沟通和理解能力；\n" +
                "2、认真，踏实，有较强的责任心和主动性；\n" +
                "3、具有良好的职业道德；\n" +
                "4、吃苦耐劳、认真，踏实，有较强的责任心和主动性。";
        case "安装":
            return "岗位要求 \n" +
                "1、送货上门，家具安装、修补等问题 \n" +
                "2、处理顾客的投诉、能安抚顾客的情绪 \n" +
                "3、对出现问题的订单进行记录并解决 \n" +
                "4、完成上级安排的其他任务 \n" +
                "岗位要求\n" +
                "1、年龄25-45岁 \n" +
                "2、具备一年以上定制家具行业工作经验 \n" +
                "3、具备定制家具安装技能，能自行维修处理安装上的问题 \n" +
                "4、性格成熟稳定，有责任心、勤奋务实 \n" +
                "5、具备良好的沟通技能、服务意识，灵活处事的能力 "
        case "搬运":
            return "岗位描述\n" +
                "1、负责货物的包装保护工作；\n" +
                "2、负责货物出、入库的装卸和搬运工作；\n" +
                "3、负责入库货物的摆放，做到合理、整齐。\n" +
                "岗位要求\n" +
                "1、初中以上学历;\n" +
                "2、具备装卸搬运知识以及装卸搬运作业安全规范;\n" +
                "3、具备1年以上装卸、搬运工作经验;\n" +
                "4、工作认真负责，能吃苦耐劳。"
        case "厂长":
            return "岗位描述\n" +
                "1、根据年度计划，全面负责工厂的生产运营和统筹工作；\n" +
                "2、熟悉以上产品的生产工艺、设备及流程的管理；\n" +
                "3、具有较强的协调和管理能力，能组织，能领导一支务实、高效的团队，生产一流的产品，秉承我们“以质为先、以诚为本”的宗旨。\n" +
                "4、健全和完善生产管理系统，降低能耗、控制成本、增加产值。\n" +
                "5、擅长现场管理，生产计划管理，生产目标管理，生产精益管理，成本控制管理，产品质量过程控制，生产安全管理，团队管理和绩效管理。\n" +
                "6、了解施工工艺，设计方案，沟通能力强，能承接工程类合同谈判及销售。\n" +
                "7、完成领导交给的其他任务。\n" +
                "岗位要求\n" +
                "1、有战略眼光、吃苦耐劳、极强的责任心。\n" +
                "2、大专及以上学历，5年以上工作经验，同岗经验3年以上； \n" +
                "3、熟悉建材、家居行业知识、熟悉生产、品质管理，经验丰富，有开拓新工厂经验。\n" +
                "4、具有较强的计划与执行能力，团队管理能力，组织协调能力，判断与决策能力，人际沟通能力。"
        case "打包":
            return "1、独立完成包装，熟悉包装流程；\n" +
                "2、负责公司产品的打包工作，打包时做到检查产品质量 \n" +
                "3、打包时必须将同一订单的所有产品全部打包。\n" +
                "4、校验每一件产品，避免错包，多包，漏包，保证质量。\n" +
                "5、按时按量完成生产任务；\n" +
                "6、能够听从领导安排的各项任务。\n" +
                "岗位要求 \n" +
                "1、身体健康，吃客耐劳，服从安排。\n" +
                "2、具备一定沟通和理解能力；\n" +
                "3、认真，踏实，有较强的责任心和主动性。\n" +
                "4、具有良好的职业道德。"

        case "前工序管理":
            return ""
        case "下料":
            return ""
        case "精裁":
            return ""
        case "打架子":
            return ""
        case "压机":
            return ""
        case "雕刻":
            return ""
        case "木磨":
            return ""
        case "异型":
            return ""
        case "后工序管理":
            return ""
        case "油磨":
            return ""
        case "贴纸":
            return ""
        case "贴皮":
            return ""
        case "底漆":
            return ""
        case "面漆":
            return ""
        case "助手":
            return ""
        case "质检":
            return ""
        case "质检主任":
            return ""
        case "清货":
            return ""
        case "会计":
            return ""
        case "财务":
            return ""
        case "拆单文员":
            return ""
        case "接单文员":
            return ""
        case "下单文员":
            return ""
        case "售后":
            return ""
        case "整装设计师":
            return ""
        case "平面设计师":
            return ""
        case "销售主管":
            return ""
        case "销售":
            return ""
        case "网络销售":
            return ""
        case "网络运营":
            return ""
        case "视频剪辑":
            return ""
        case "机修电工":
            return ""
        case "司机":
            return ""
        case "库管":
            return ""
        case "普工":
            return ""
        default:
            return ""
    }


}




function getWelfare(type) {

    switch (type) {
        case "灰工":
            return "2"
        case "安装":
            return ""
        case "搬运":
            return ""
        case "厂长":
            return ""
        case "打包":
            return ""
        case "前工序管理":
            return ""
        case "下料":
            return ""
        case "精裁":
            return ""
        case "打架子":
            return ""
        case "压机":
            return ""
        case "雕刻":
            return ""
        case "木磨":
            return ""
        case "异型":
            return ""
        case "后工序管理":
            return ""
        case "油磨":
            return ""
        case "贴纸":
            return ""
        case "贴皮":
            return ""
        case "底漆":
            return ""
        case "面漆":
            return ""
        case "助手":
            return ""
        case "质检":
            return ""
        case "质检主任":
            return ""
        case "清货":
            return ""
        case "会计":
            return ""
        case "财务":
            return ""
        case "拆单文员":
            return ""
        case "接单文员":
            return ""
        case "下单文员":
            return ""
        case "售后":
            return ""
        case "整装设计师":
            return ""
        case "平面设计师":
            return ""
        case "销售主管":
            return ""
        case "销售":
            return ""
        case "网络销售":
            return ""
        case "网络运营":
            return ""
        case "视频剪辑":
            return ""
        case "机修电工":
            return ""
        case "司机":
            return ""
        case "库管":
            return ""
        case "普工":
            return ""
        default:
            return "待遇从优，保底计件，多劳多得"
    }


}