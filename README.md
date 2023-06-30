### codingci 指南

1. 登录coding新建项目
2. 新建代码库
3. 点击代码库并复制url，替换.env文件中的CODING_REPO_URL，同时设置你的应用名称
  ```js
    // 你新建的代码仓库地址，对比如下url格式，修复changlog commit路径问题
    CODING_REPO_URL=https://suk-bear.coding.net/p/temp/d/tempnext/git
    // 用于pm2启动nextjs应用的名称，每次ci都会根据这个名称去执行delete命令，删除应用进程，防止因端口被占用而导致的ci失败
    APP_NAME=tempnext
  ```
4. 配置代码库的自定义构建节点
  - 请将你的电脑主机设置为构建节点，可以避免因低配置服务器而导致的构建失败
  - 请确保在主机上安装了正确的依赖后，再执行如下👇步骤，[接入节点的环境依赖](https://coding.net/help/docs/ci/node/customize.html#rely)，只需要在本机安装如下依赖，剩余的通过bash自动安装
    - Python 3.6, Python 3.7, Python 3.8, Python 3.9
    - Git ≥ 2.8
    - Java 8, Java 11
  - 依赖安装好后，重新接入节点，并配置节点的选项
    - Bash接入
    - 接入配置选**团队节点池**，方便其他项目复用同一个构建节点
    - 其余选项默认
  - 接入成功后，codingci会自动启动qci_worker服务,coding的节点池也会实时同步上线，并且每次开机重启，同时会在你的安装目录下生成一个codingci文件夹。
5. 配置Jenkins
  1. [Jenkins的访问地址](http://localhost:15740/login?from=%2F)
  2. 默认账号密码: coding/11bf48c0403ec88231b530b5f98a113cad
  3. 配置凭证
    - 配置用于访问远程服务器的 SSH Username with private key 凭证
      - 首先在你的主机上生成 ssh 访问密钥和公钥
      - 将你的公钥添加到远程服务器上的 /root/.ssh/authorized_keys 文件中，并添加 chmod 700 权限，本机 ssh 登录测试访问通过
      - 配置凭证成功后，用 Jenkins 生成的凭证ID,替换 Jenkinsfile 的 JENKINS_SSH_CREDENTIALS
        ```js
          JENKINS_SSH_CREDENTIALS='90e00041-cbb2-49b8-a88a-7096e79f679f'
        ```
    - 配置用于semantic-release push tag 的 Username with password 凭证
      - 基于coding的用户名和密码的身份认证，semantic-release将在ci中发布应用新版本
      - 配置凭证成功后，用 Jenkins 生成的凭证ID，替换 Jenkinsfile 的 JENKINS_GIT_USERNAMEPASSWORD_CREDENTIALS
  4. 修改Jenkinsfile其他变量
      ```js
        // 用户名和远程ip
        REMOTE_HOST='yang@121.42.141.182'
        // nginx的应用目录
        REMOTE_DIR='/usr/local/nginx/jzypm'
        // 应用的名称和.env的APP_NAME一致
        APP_NAME='tempnext'
      ```
  5. 常见问题
     
    1. 初始化git之后请重新执行`npx husky install`激活钩子
    2. bash接入构建节点失败，请审查报错信息，或者将错误信息喂给chatgpt，让它指导你安装python、java和Git依赖
    3. 每次修改了APP_NAME请手动去远程服务器删除pm2应用进程，避免ci因端口问题而导致的部署失败

### Nextjs模板

- react 18
- nextjs 13
- next/auth

### 代码规范

* 默认集成了 prettier eslint stylelint 解决编码规范问题
* 默认集成了 commitlint commitizen 解决commit规范问题
* 默认集成了 husky lint-staged 解决了commit之前自动校验代码规范
* 默认集成了 semantic-release 解决了版本更新和更新日志

```js 
// git 提交规范自动化
git add .
git commit
git release
```

## 使用

```js
yarn

yarn run dev
```



