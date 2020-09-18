require('shelljs/global'); // nodejs中使用shelljs模块的exec方法执行shell脚本命令
const chalk = require('chalk');

publish();
function publish() {
  var scpStartTime = new Date().getTime();
  var scpCmd = 'scp -r -P 5044 ./.nuxt/*  root@47.93.14.55:/webroot/umi';
  exec(
    scpCmd,
    {
      async: true,
    },
    (code, output) => {
      var nowTime = new Date().getTime();
      console.log(chalk.cyan('  已成功上传到47.93.14.55服务器！\n'));
      console.log(
        chalk.cyan('  上传耗时:' + (nowTime - scpStartTime) / 1000, 's'),
      );
      console.log(chalk.cyan('  访问http://htpre.yladm.com/ \n'));
    },
  );
}
