require('dotenv').config()

module.exports = {
  branches: ['main'], // 指定在哪个分支下要执行发布操作
  ci: false, // 允许从本地机器发布版本
  plugins: [
    '@semantic-release/commit-analyzer', // 解析 commit 信息，默认就是 Angular 规范.
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          commitUrlFormat: `${process.env.CODING_REPO_URL}/commit/{{hash}}`,
          compareUrlFormat: `${process.env.CODING_REPO_URL}/compare/{{previousTag}}...{{currentTag}}`,
          issueUrlFormat: '',
        },
        // host: 'https://suk-bear.coding.net',
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md', // 把发布日志写入该文件
      },
    ],
    // '@semantic-release/github',
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'], // 前面说到日志记录和版号是新增修改的，需要 push 回 Git
      },
    ],
  ],
}
