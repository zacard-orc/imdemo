# 区域变换

<img src="mds_sucai/Web/node_git_001.png" alt="1" width="600px"/>

# untrack区
## query
```text
git status
```

## 清理
```text
git clean -n 列出仅根目录的待清除文件
git clean -nd 列出递归子目录的待清除文件
git clean -f 仅根目录的清除文件
git clean -fd 递归子目录的东西一并清除
```

## untrack to stage
```text
git add a.txt
```

# stage区
## query
```text
git status
```

## stage to untrack
```text
git rm --cached a.txt  直接把文件从stage db删除，放到了untrack状态，但内容保留
git rm --cached a.txt -f  直接把文件从stage db删除，放到了untrack状态
git checkout -- b.txt 还原到上个版本
```

## stage to .git-repodb
```text
git commit -m 'abc'
```


# .git-repodb
## .git-repodb to stage区
```text
git reset --hard 80b0d4a3 记录+文件一起被销毁

git revert d4c326283fa822316ce857081f5b3ae6d6c69caa --no-commit
内容销毁,但需要提交一次多一个commit msg有revert
带不带--no-commit 只是跳转到自动vim到区别
```


