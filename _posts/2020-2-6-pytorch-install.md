# Pytorch 安装与配置
1.创建python虚拟环境
在[清华镜像网址](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/)下载anaconda,我使用的版本为`Anaconda3-4.2.0-Windows-x86_64`.下载安装成功后打开Anacanda Prompt, 创建虚拟环境命令为：`conda create vitual_name python version`.我电脑使用3.6的环境，对应命令是`conda create torch python=3.6`,回车输入y，虚拟环境创建成功，最后激活输入：`activate torch`,这样我们完成第一步。
2.接入清华镜像网址
初次安装pytorch之前，我们需要在cmd命令框依次键入下面的命令：
```
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --set show_channel_urls yes 
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/
```
鄙人浅薄的理解就是接上它们的网址，好在里面下东西。然后打开Anaconda Prompt运行`conda install pytorch-cpu`，即安装CPU版本的pytorch,GPU也有对应的版本，好像需要弄CUDA和Cudnn这些，配置起来非常麻烦也没有必要，而且对于普通的电脑容量有限根本装不下，所以推荐大家安装cpu版本的pytorch过过瘾。下图是安装pytorch的过程
![conda install pytorch-cpu](_v_images/20200206210814407_31259.png =960x)
![conda install pytorch-cpu](_v_images/20200206210929912_8662.png =960x)
3.测试pytorch
默认大家安装了python 编辑器，我们这里使用的是pycharm2019版本。注意我们需要使用虚拟环境中的python环境，点file$\to$ settings, 对project interpreter选定虚拟环境的python.exe, 我们这里是`C:\Users\user\Anaconda3\envs\torch\python.exe`. 给出一段测试代码：
```
# Summary：PyTorch的Tensor基础知识
# Author:  Amusi
# Date:    2018-12-20
# github:  https://github.com/amusi/PyTorch-From-Zero-To-One
# Reference: http://pytorch.org/tutorials/beginner/pytorch_with_examples.html#pytorch-tensors

import torch

dtype = torch.FloatTensor
# dtype = torch.cuda.FloatTensor # Uncomment this to run on GPU

# N is batch size; D_in is input dimension;
# H is hidden dimension; D_out is output dimension.
N, D_in, H, D_out = 64, 1000, 100, 10

# Create random input and output data
x = torch.randn(N, D_in).type(dtype)
y = torch.randn(N, D_out).type(dtype)

# Randomly initialize weights
w1 = torch.randn(D_in, H).type(dtype)
w2 = torch.randn(H, D_out).type(dtype)

learning_rate = 1e-6
for t in range(500):
    # Forward pass: compute predicted y
    h = x.mm(w1)
    h_relu = h.clamp(min=0)
    y_pred = h_relu.mm(w2)

    # Compute and print loss
    loss = (y_pred - y).pow(2).sum()
    print(t, loss)

    # Backprop to compute gradients of w1 and w2 with respect to loss
    grad_y_pred = 2.0 * (y_pred - y)
    grad_w2 = h_relu.t().mm(grad_y_pred)
    grad_h_relu = grad_y_pred.mm(w2.t())
    grad_h = grad_h_relu.clone()
    grad_h[h < 0] = 0
    grad_w1 = x.t().mm(grad_h)

    # Update weights using gradient descent
    w1 -= learning_rate * grad_w1
    w2 -= learning_rate * grad_w2
```然后运行，不出意外应该是下面的运行结果：
![2020-02-06 (4)](_v_images/20200206212509836_18258.png)![2020-02-06 (4)](_v_images/20200206212620502_1332.png =1152x
证明pytorch 安装成功