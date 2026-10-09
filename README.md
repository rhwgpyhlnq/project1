## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Mon Oct 05 2026 02:18:22 GMT+0000 (Coordinated Universal Time)|
|**App Generator**<br>SAP Fiori Application Generator|
|**App Generator Version**<br>1.33.0|
|**Generation Platform**<br>SAP Business Application Studio|
|**Template Used**<br>List Report Page V4|
|**Service Type**<br>SAP System (ABAP On-Premise)|
|**Service URL**<br>https://my200292.s4hana.sapcloud.cn/sap/opu/odata4/sap/zui_pc_sim_o4/srvd/sap/zui_pc_sim_o4/0001/|
|**Module Name**<br>project1|
|**Application Title**<br>projectbelence|
|**Namespace**<br>|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.148.10|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>True, see https://www.npmjs.com/package/@sap-ux/eslint-plugin-fiori-tools#rules for the eslint rules.|
|**Value Help Metadata**<br>Downloaded for external services|
|**Main Entity**<br>Runs|
|**Navigation Entity**<br>_Simulations|

## project1

projectbelence

### 当前 UI5 版本（2026-10-09）

源码已与 MY200292 的 `ZPROJECTCARRY` 已部署应用同步，版本为 `0.0.8`。

- `Simulate voucher（模拟）`：直接展示后端返回的分录及借贷合计，不通过模拟历史表读取结果；预览已移除 Source account 列。
- `Posting voucher（创建）`：使用标准 RAP Posting 动作，列表包含过账凭证号、过账日期。
- `Offset voucher（冲销）`：使用标准 RAP OffsetVoucher 动作。冲销原因固定 `01` 并隐藏，由最新 ADT 后端负责；参数窗口只输入冲销过账日期。

`webapp/localService/mainService/metadata.xml` 同步了最新服务定义，模拟单元测试使用 `_Lines` 深层返回结构。过账日志、重复过账检查和冲销处理属于 `ZTEST_PROJECTCARRY` 的 ADT 后端，不由此 UI5 仓库实现；目标系统应先具备对应后端版本。

在 BAS 更新源码后按原流程构建、部署。GitHub 更新本身不会替换 BAS 工作区或自动部署到 MY200285。模拟回归检查可运行 `node --test tests/simulation.test.cjs`。

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  To launch the generated application, run the following from the generated application root folder:

```
    npm start
```

- It is also possible to run the application using mock data that reflects the OData Service URL supplied during application generation.  In order to run the application with Mock Data, run the following from the generated app root folder:

```
    npm run start-mock
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)


