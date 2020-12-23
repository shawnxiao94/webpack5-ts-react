/*
 * @Author: your name
 * @Date: 2020-11-10 16:44:27
 * @LastEditTime: 2020-11-24 11:59:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /gov-react-ts/src/api/matching/model.js
 */
/**
 * Model 数据中转层
 */
export const submitMatching = {
  request(params) {
    const { basicForm, yanFa, touZhi, jinYin, renCai } = params
    return {
      corpName: params.name,
      // 基础信息
      enterpriseName: basicForm.companyName, // 企业名称
      enterpriseArea:
        Object.prototype.toString.call(basicForm.region) === '[object Array]'
          ? basicForm.region.join('/')
          : basicForm.region, // 企业所属区域
      registeredTime: basicForm.regTime, // 注册时间
      registeredCapital: basicForm.registeredCapital, // 注册资本
      industrys: basicForm.industry, // 所属行业
      subfield: basicForm.subfield, // 子领域
      mainProductsOrServices: basicForm.servers, // 主要产品或服务
      park: basicForm.park, // 所属园区
      enterpriseScale: basicForm.enterpriseScale, // 企业规模
      independentLegalPerson: basicForm.legalPerson, // 独立法人
      dishonesty: basicForm.dishonesty, // 违法违规失信行为
      marketShare: basicForm.marketShare, // 市场占有率
      participateDevelopment: basicForm.standardSetting, // 标准制定
      enterpriseQualification: basicForm.enterpriseQualification, // 企业资质
      brandCharacteristics: basicForm.honoraryTitle, // 荣誉称号
      industryTop10: basicForm.rankingField, // 市场领域内排名
      productOrService: basicForm.features, // 服务满足“四新”经济（新技术、新产业、新业态、新模式）的发展特征
      productOrService2: basicForm.valuation, // 估值
      // 研发模块
      empTotal: yanFa.numWorkers, // 职工总数
      dpersonnel: yanFa.numDevelopers, // 研发人员数
      inventionPatentsNumberOneClass: yanFa.numPatent, // 发明专利数
      utilityModelPatentsTwoClass: yanFa.numUtilityModel, // 实用新型专利数
      appearancePatentsTwoClass: yanFa.numAppearance, // 外观专利数
      softwareCopyrightTwoClass: yanFa.numSoftwareCopyright, // 软件著作权数
      integratedCircuitsOneClass: yanFa.numIntegratedCircuit, // 集成电路数
      dexpensesInTheYearBefore: yanFa.costYearBefore, // 大前年研发费用
      dexpensesOfThePreviousYear: yanFa.costBeforeLast, // 前年研发费用
      dexpensesLastYear: yanFa.costLastYear, // 去年研发费用
      technologicalAchievements: yanFa.technologicalAchievements, // 科技成果转化（项）
      researchAndDevelopmentSite: yanFa.siteEquipment, // 是否有研发场地、研发设备等
      highTechProductsOfLastYear: yanFa.incomeHighSalaryLastYear, // 上年度高薪产品收入
      researchInstitution: yanFa.universityCooperation, // 大学合作协议是否
      rulesAndRegulations: yanFa.teamControlMechanism, // 是否有经营管理团队和风险控制机制
      formulatedAndImproved: yanFa.managementSystem, // 研发管理制度体系
      // 投资
      projectsUnderConstruction: touZhi.projectsUnder, // 是否有在建项目
      projectContent: touZhi.projectContent, // 项目内容
      // 经营
      annualNumberOfSMEs: jinYin.numberCustomers, // 年服务中小企业数量
      totalAssets: jinYin.totalAssets, // 资产总额
      totalLiabilities: jinYin.totalLiabilities, // 负债总额
      netAssets: jinYin.netAssets, // 净资产
      growthRateOfNetAssets: jinYin.growthRate, // 净资产增长率
      yearBeforeTheUniversity: jinYin.incomePreYear, // 大前年营业收入
      businessIncomeOfThePpreviousYear: jinYin.incomYearBefore, // 前年营业收入
      businessIncomeOfLastYear: jinYin.incomYearLast, // 去年营业收入
      annualNetProfitOfThePreviousYear: jinYin.profitPreYear, // 大前年净利润
      netProfitOfThePreviousYear: jinYin.profitYearBefore, // 前年净利润
      netProfitOfLastYear: jinYin.profitYearLast, // 去年净利润
      totalTaxRevenueOfLastYear: jinYin.totaltaxRevenuePreyear, // 上一年度税收总额
      energySavingLastYear: jinYin.energySavingLastYear, // 去年节约能耗
      // 人才
      overseasStudentsOrNot: renCai.overseas, // 是否留学人员
      householdRegister: renCai.householdRegister, // 户籍
      age: renCai.age, // 年龄
      hostingOrParticipatingInProjects: renCai.projectSituation, // 主持或参与项目/课题情况
    }
  },
  response(data) {
    return data
  },
}
