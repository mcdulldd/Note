# CSS Secrets

## 背景和边框

### 半透明边框

::: tip 知识要点
[RGBA/HSLA颜色](https://www.runoob.com/cssref/css-colors-legal.html), [background-clip](https://www.runoob.com/cssref/css3-pr-background-clip.html)
:::

在CSS2.1中，背景会延展到边框所在的区域下面，我们所设置的半透明边框会被透出纯白色背景覆盖，但是在CSS3中，我们可以通过修改`background-clip`属性来修改默认行为，把它的值设为`padding-box`，用内边距的外沿把背景裁掉，实现半透明边框。

<CSS-CSSSecrets-TranslucentBorders />

### 多重边框
::: tip 知识要点
[box-shadow](https://www.runoob.com/cssref/css3-pr-box-shadow.html), [outline](https://www.runoob.com/cssref/pr-outline.html),[outline-offset](https://www.runoob.com/cssref/css3-pr-outline-offset.html)
:::

`box-shadow`可以用来生成投影，它的第四个参数扩张半径可以改变投影的大小，通过设置正值的扩张半径、零偏移量、零模糊值，就可以得到一条实线边框。

`box-shadow`的好处在于，它支持逗号分隔语法，我们可以创建任意数量的投影，需要注意的是投影是层层叠加的，而且边框的样式只能是实线。

当只需要两层边框的时候`outline`同样可以实现，而且`outline`的边框样式非常灵活，`outline-offset`用来控制边框和元素边缘的距离。

<CSS-CSSSecrets-MultipleBorders />

### 灵活的背景定位
::: tip 知识要点
[background-position](https://www.runoob.com/cssref/pr-background-position.html)，[background-origin](https://www.runoob.com/cssref/css3-pr-background-origin.html)，[calc()](https://www.runoob.com/cssref/func-calc.html)
:::

在CSS3中，`background-position`已经得到扩展，它允许我们指定背景图片任意角度的偏移量。
当背景图片偏移量与容器的内边距一致的时候，可以使用`background-origin`，这样使代码更加DRY。
每个元素都存在三个矩形框：`border box`边框的外沿框、`padding box`内边距的外沿框、`content box`内容区的外沿框，`background-position`是以`padding box`为准的。
`calc()`用来动态的计算长度值，但是需要在运算符的两侧加上空白符，以免解析错误。

<CSS-CSSSecrets-FlexibleBackgroundPosition />

### 边框内圆角
::: tip 知识要点
 [box-shadow](https://www.runoob.com/cssref/css3-pr-box-shadow.html), [outline](https://www.runoob.com/cssref/pr-outline.html)
:::

有时候我们需要一个容器，只在内侧有圆角，而边框或者描边仍然保持直角的形状。
使用两个div元素的时候我们很容易做到这种效果。
当只是用一个div元素的时候，利用`outline`不能贴合元素的圆角，实现在外的直角，`box-shadow`用来填补元素圆角边框和`outline`之间的间隙，达到内圆外置的效果。
<CSS-CSSSecrets-InnerRounding />

### 条纹背景
::: tip 知识要点
[CSS线性渐变](https://www.runoob.com/css3/css3-gradients.html),[background-size](https://www.runoob.com/cssref/css3-pr-background-size.html)
:::

如果多个色标具有相同的位置，就会产生一个无限小的过渡区域，从效果上看，形成条纹背景。
在斜条纹中是将4个色标进行旋转，做到无缝对接。
在同色系条纹背景中，可以将深颜色作为背景，把半透明白色的条纹叠加到背景色之上，实现条纹效果。

<CSS-CSSSecrets-StripedBackgrounds />

### 复杂的背景图案
使用CSS3渐变实现的图案库[Patterns Gallery](http://verou.me/css3patterns/#)，
SVG版本[SVG Patterns Gallery](https://philiprogers.com/svgpatterns/)

[Patterns Gallery](https://verou.me/css3patterns ':include :type=iframe width=100% height=8800px')

### 伪随机背景
::: tip 知识要点
[background-image](https://www.runoob.com/cssref/pr-background-image.html),[background-size](https://www.runoob.com/cssref/css3-pr-background-size.html)
::: 

模拟条纹的随机性，可以将一种颜色作为底色，另外三种颜色作为条纹，然后让条纹以不同的间隔进行重复平铺。为了让随机性更加真实，将贴片的尺寸最大化，这些数字最好是[相对质数](https://baike.baidu.com/item/%E7%9B%B8%E5%AF%B9%E7%B4%A0%E6%95%B0/12801819?fr=aladdin)

<CSS-CSSSecrets-PseudoRandomBackgrounds />

### 连续图像边框
::: tip 知识要点
[border-image](https://www.runoob.com/cssref/css3-pr-border-image.html)
:::

<CSS-CSSSecrets-ContinuousImageBorders />

## 形状
### 自适应的椭圆

::: tip 知识要点
[border-radius](https://www.runoob.com/cssref/css3-pr-border-radius.html)
:::

 `border-radius`可以单独指定水平和垂直半径，它可以接受长度值也可以接受百分比，根据这一特点可以创建一个自适应椭圆形

<CSS-CSSSecrets-FlexibleEllipses /> 
 
### 平行四边形
### 菱形图片
### 切角效果
### 梯形标签页
### 简单的拼图

## 视觉效果
### 单侧投影
### 不规则投影
### 染色效果
### 毛玻璃效果
### 折角效果

## 字体排印
### 连字符断行
### 插入换行
### 文本行的斑马条纹
### 调整tab宽度
### 连字
### 华丽的&符号
### 自定义下划线
### 现实中的文字效果
### 环形文字

## 用户体验
### 选用合适的鼠标光标
### 扩大可点击区域
### 自定义复选框
### 通过阴影来弱化背景
### 滚动提示
### 交互式的图片对比控件

## 结构与布局
### 自适应内部元素
### 精确控制表格列宽
### 根据兄弟元素的数量来设置样式
### 满幅的背景，定宽的内容
### 垂直居中
### 紧贴底部的页脚

## 过渡与动画
### 缓动效果
### 逐帧效果
### 闪烁效果
### 打字效果
### 状态平滑的动画
### 沿环形路径平移的动画