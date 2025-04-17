Git 基础与项目同步指南

本指南适用于 React 项目开发中的版本管理、多人协作与多设备同步操作，适合初学者入门。

预备环境检查：是否安装 Node.js 和 npm

在使用 React 项目或运行 npm install、npm run dev 之前，请确认本机是否已正确安装 Node.js：

✅ 检查命令

node -v
npm -v

如果提示：

无法将“node”项识别为 cmdlet

说明你尚未安装 Node.js。

✅ 安装方式

请访问 https://nodejs.org/zh-cn 下载 LTS 稳定版本（建议 ≥ 18），安装完成后自动包含 npm。

🔍 Node.js 与 npm 的关系

工具

说明

Node.js

JavaScript 的运行环境，支持 JS 在命令行中运行

npm

Node.js 自带的包管理器，用于安装 React/Vite 等前端库

一、Git 基础概念

名称

作用

Git

本地版本管理工具，用于记录、回滚和协作开发代码

GitHub

托管远程 Git 仓库的服务平台，可多人共享项目代码

commit

一次提交，记录某个版本的变更内容

push

将本地修改推送到 GitHub 上的远程仓库

pull / clone

从远程仓库拉取或下载项目到本地

branch

分支，便于多人开发不同功能，不影响主线代码

二、本地项目上传 GitHub（SSH 方式）

✅ 步骤 1：初始化 Git 仓库

cd D:\Projects\my-home-dashboard
git init

✅ 步骤 2：添加全部文件并提交

git add .
git commit -m "init: first commit"

✅ 步骤 3：连接远程 GitHub 仓库

确保你在 GitHub 上新建了一个仓库，如：my-home-dashboard

git remote add origin git@github.com:JESONWINE/my-home-dashboard.git

✅ 步骤 4：推送代码到 GitHub

git branch -M main
git push -u origin main

推送成功后，在 GitHub 网页上即可看到你上传的项目结构。

三、从 GitHub 下载项目到另一台电脑

cd D:\Projects
# 克隆整个项目到当前目录
git clone git@github.com:JESONWINE/my-home-dashboard.git

cd my-home-dashboard
npm install
npm run dev

四、错误排查

🔸 错误 1：Repository not found

仓库名或用户名拼错

仓库未创建

使用 SSH，但未配置密钥

🔸 错误 2：Permission denied (publickey)

没有配置 SSH 公钥到 GitHub 账户

解决方法：生成并添加 SSH Key（可另开章节）

🔸 查看远程地址验证

git remote -v

五、常用命令速查表

命令

说明

git status

查看当前变动状态

git add .

添加全部更改文件到暂存区

git commit -m "说明"

提交变更

git push

推送代码到远程仓库

git pull

拉取最新远程仓库代码

git log

查看提交记录

下一节可介绍 SSH 配置、Git 分支管理等进阶内容。

