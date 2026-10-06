# 模拟凭证弹窗（0.0.3）

列表工具栏的“模拟凭证”调用现有 RAP Simulate，读取返回 RunId 对应的 Items，在弹窗展示凭证明细、配置消息及按币种分列的借贷合计。首页 Go 仍查询实时余额。

按公司、年度、期间、账簿、WBS、币种去重；每组会模拟全部符合条件的科目，而非只模拟被选科目。分录分页读取，金额合计使用十进制定点算法，避免浮点误差。

此版本不修改 ABAP：现有后端仍可能保存 ZPC_RUN/ZPC_ITEM；关闭弹窗只释放前端数据，不删除后端记录。不执行真实 FI 过账。

## BAS 测试

切换到 feature/simulation-dialog 分支（或导入源码包），在 project1 目录执行：

```bash
npm ci
npm start
```

选择记录，点击“模拟凭证”。配置不全应显示错误消息、无分录；配置完整应显示分录和借贷合计；同 WBS 同期间多选只调用一次；跨期间分别显示；关闭后可重新模拟。

确认后执行 npm run deploy。部署目标保持 ZPROJECTCARRY、my200292、btp292、ZTEST_PROJECTCARRY、ZAZK900859；传输请求须可修改。

## 本地验证

npm ci 成功；npm run build 成功；node --test tests/simulation.test.cjs 两项通过（多币种精确合计、去重调用与分页读取）。

npm run lint 受本机沙箱 EPERM realpath 限制，未完成。未在 SAP 实际运行 Action 或验证 BAS/Launchpad 弹窗，仍需上述联调测试。

实现参考：[SAP Fiori Elements custom actions](https://help.sap.com/docs/SAPUI5/fbdf2b2c05364a829185721c6ce5daa0/7619517a92414e27b71f02094bd08d06.html)。
