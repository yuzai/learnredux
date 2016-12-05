## 简介
这个游戏是模拟打地鼠，采用react-redux实现的。样式上主要用了bootstrap的样式，然后这个模态框也是采用bootstrap实现的，这里 有待更改，因为bootstrap的Js效果是借助jq实现的。两者都很大，但是效果真的比自己做的特效要好看。
## 用到的主要库
1. react
2. redux
3. bootstrap
4. jquery
*其中，bootstrap,jquery主要用来完成模态框和样式的调整，游戏的主体是采用react-redux的方式实现*

## 游戏规则：

1. start键开始游戏，此时方块会有部分改变成绿色，这个就是地鼠，我们的目标就是打地鼠
2. 点击绿色区域，会打到地鼠
3. 按键pause可以暂停游戏

使用方法：

1. git clone
2. cd Whac-A-Mole
3. npm install
4. npm start

如果想要发行版的，运行npm run build.这里有一点问题，自动build的代码的资源的路径始终有一个'/'打头，有时候会出现资源加载不正确，需要手动修改
