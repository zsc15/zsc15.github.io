# 积分不等式最优系数
> 求最小正实数 $A$，使得任意连续函数 $f:[0,1]\to [0,+\infty)$ 都有
$$\begin{equation*}
        \int_0^1 \mathrm{e}^x f(x) \, dx \int_0^1 \mathrm{e}^{-x} f(x) \, dx  \leq A \int_0^1 f^2(x) \, dx.
 \end{equation*}
$$

解：由 Cauchy-Schwarz 不等式，

$$
\int_0^1 \mathrm{e}^x f(x) \, dx \leq \left(\int_0^1 \mathrm{e}^{2x} \, dx\right)^{1/2} \left(\int_0^1 f^2(x) \, dx\right)^{1/2},
$$

$$
= \left(\frac{\mathrm{e}^2-1}{2}\right)^{\frac{1}{2}} \left(\int_0^1 f^2(x) \, dx\right)^{1/2}.
$$

同理

$$
\int_0^1 \mathrm{e}^{-x} f(x) \, dx \leq \left(\int_0^1 \mathrm{e}^{-2x} \, dx\right)^{1/2} \left(\int_0^1 f^2(x) \, dx\right)^{1/2} = \left(\frac{1-\mathrm{e}^{-2}}{2}\right)^{\frac{1}{2}} \left(\int_0^1 f^2(x) \, dx\right)^{1/2}.
$$

因此存在 

$$
A = \frac{1}{2} \sqrt{(\mathrm{e}^2-1)(1-\mathrm{e}^{-2})} = \frac{\mathrm{e}^2-1}{2\mathrm{e}}
$$ 

使得

$$
\label{eq:integral inequality}
\int_0^1 \mathrm{e}^x f(x) \, dx \int_0^1 \mathrm{e}^{-x} f(x) \, dx  \leq A\int_0^1 f^2(x) \, dx.
$$
下面将求出~\eqref{eq:integral inequality} 中的最小正实数 $A$。

令 $W$ 是基底 $\mathrm{e}^x,\mathrm{e}^{-x}$  构成的子空间，任取 $f :[0, 1]\to \left[0,+\infty\right)$ 且 $f\neq 0$，则存在 $g =a\mathrm{e}^x+b\mathrm{e}^{-x}\in W$ 和 $h\in W^{\perp}$ 使得

$$
f = g + h.
$$

故

$$
\begin{aligned}
    & \int_0^1 \mathrm{e}^x f(x) \, dx = \int_0^1 \mathrm{e}^x \left[a\mathrm{e}^x+b\mathrm{e}^{-x}+h(x)\right]dx = \frac{\mathrm{e}^2-1}{2}a+b,\\
    & \int_0^1 \mathrm{e}^{-x} f(x) \, dx = \int_0^1 \mathrm{e}^{-x} \left[a\mathrm{e}^x+b\mathrm{e}^{-x}+h(x)\right]dx = \frac{1-\mathrm{e}^{-2}}{2}b+a.
\end{aligned}
$$
因此

$$
\begin{aligned}
    \int_0^1 \mathrm{e}^x f(x) \, dx \int_0^1 \mathrm{e}^{-x} f(x) \, dx & = \left(\frac{\mathrm{e}^2-1}{2}a+b\right)\left(\frac{1-\mathrm{e}^{-2}}{2}b+a\right)\\
    & = \frac{\mathrm{e}^2-1}{2}a^2+\frac{\mathrm{e}+\mathrm{e}^{-1}}{4} ab +\frac{1-\mathrm{e}^{-2}}{2}b^2.
\end{aligned}
$$

而

$$
\begin{aligned}
    \int_0^1 f^2(x) \, dx & = \int_0^1 \left[a\mathrm{e}^x+b\mathrm{e}^{-x}+h(x)\right]^2 dx\\
    & = \int_0^1 (a\mathrm{e}^x+b\mathrm{e}^{-x})^2 dx + \int_0^1 h^2(x) \, dx\\
    & =\frac{\mathrm{e}^2-1}{2}a^2+2ab+\frac{1-\mathrm{e}^{-2}}{2}b^2 + \int_0^1 h^2(x) \, dx.
\end{aligned}
$$

故 

$$
\begin{aligned}
    \frac{ \int_0^1 \mathrm{e}^x f(x) \, dx \int_0^1 \mathrm{e}^{-x} f(x) \, dx}{\int_0^1 f^2(x) \, dx} & = \frac{\frac{\mathrm{e}^2-1}{2}a^2+\frac{\mathrm{e}+\mathrm{e}^{-1}}{4} ab +\frac{1-\mathrm{e}^{-2}}{2}b^2}{\frac{\mathrm{e}^2-1}{2}a^2+2ab+\frac{1-\mathrm{e}^{-2}}{2}b^2 + \int_0^1 h^2(x) \, dx}\\
    &\leq \frac{\frac{\mathrm{e}^2-1}{2}a^2+\frac{\mathrm{e}+\mathrm{e}^{-1}}{4} ab +\frac{1-\mathrm{e}^{-2}}{2}b^2}{\frac{\mathrm{e}^2-1}{2}a^2+2ab+\frac{1-\mathrm{e}^{-2}}{2}b^2 }.
\end{aligned}
$$

当且仅当 $h(x)=0$ 时取等号。分两种情况，若 $a =0$，则  

$$
\frac{\frac{\mathrm{e}^2-1}{2}a^2+\frac{\mathrm{e}+\mathrm{e}^{-1}}{4} ab +\frac{1-\mathrm{e}^{-2}}{2}b^2}{\frac{\mathrm{e}^2-1}{2}a^2+2ab+\frac{1-\mathrm{e}^{-2}}{2}b^2 }=1.
$$

若 $a\neq 0$，设 $k=\frac{b}{a}$，则 

$$
\frac{\frac{\mathrm{e}^2-1}{2}a^2+\frac{\mathrm{e}+\mathrm{e}^{-1}}{4} ab +\frac{1-\mathrm{e}^{-2}}{2}b^2}{\frac{\mathrm{e}^2-1}{2}a^2+2ab+\frac{1-\mathrm{e}^{-2}}{2}b^2 } =\frac{\frac{\mathrm{e}^2-1}{2}+\frac{\mathrm{e}+\mathrm{e}^{-1}}{4} k +\frac{1-\mathrm{e}^{-2}}{2}k^2}{\frac{\mathrm{e}^2-1}{2}+2k+\frac{1-\mathrm{e}^{-2}}{2}k^2 }.
$$

令

$$
l(k) = \frac{\frac{\mathrm{e}^2-1}{2}+\frac{\mathrm{e}+\mathrm{e}^{-1}}{4} k +\frac{1-\mathrm{e}^{-2}}{2}k^2}{\frac{\mathrm{e}^2-1}{2}+2k+\frac{1-\mathrm{e}^{-2}}{2}k^2 }.
$$

下面求 $l(k)$ 的最大值，下文将函数 $l(k)$ 简记为 $l$。从方程观点来看，实数 $k$ 是下面二次方程的解

$$
\begin{equation}
    \label{eq:quadratic equation}
    \frac{\mathrm{e}^2-1}{2}(l-1)+\left[2l-\frac{(\mathrm{e}+\mathrm{e}^{-1})^2}{4}\right]k+\frac{1-\mathrm{e}^{-2}}{2}(l-1)k^2 =0,
\end{equation}
$$

存在实根，因此判别式

$$
\begin{aligned}
    &\Delta = \left[2l-\frac{(\mathrm{e}+\mathrm{e}^{-1})^2}{4}\right]^2 - 4\cdot \frac{\mathrm{e}^2-1}{2}(l-1)\cdot \frac{1-\mathrm{e}^{-2}}{2}(l-1) \geq 0 \\
    &\iff \left[2l-\frac{(\mathrm{e}+\mathrm{e}^{-1})^2}{4}\right]^2-\frac{(\mathrm{e}^2-1)}{\mathrm{e}^2}(l-1)^2\geq 0\\
    &\iff \left[\left(2+\frac{\mathrm{e}^2-1}{\mathrm{e}}\right)l-\frac{(\mathrm{e}+\mathrm{e}^{-1})^2}{4}-\frac{\mathrm{e}^2-1}{\mathrm{e}}\right]\cdot \left[\left(\frac{\mathrm{e}^2-1}{\mathrm{e}}-2\right)l+\frac{(\mathrm{e}+\mathrm{e}^{-1})^2}{4}-\frac{\mathrm{e}^2-1}{\mathrm{e}}\right]\leq 0.
\end{aligned}
$$
最终得到：

$$
\begin{equation}
    \label{ineq:optimal a}
    -\frac{\frac{(\mathrm{e}+\mathrm{e}^{-1})^2}{4}-\frac{\mathrm{e}^2-1}{\mathrm{e}}}{\frac{\mathrm{e}^2-1}{\mathrm{e}}-2}\leq l \leq \frac{\frac{(\mathrm{e}+\mathrm{e}^{-1})^2}{4}+\frac{\mathrm{e}^2-1}{\mathrm{e}}}{\frac{\mathrm{e}^2-1}{\mathrm{e}}+2}.
\end{equation}
$$

因此 $l$ 的最大值为 $\frac{\frac{(\mathrm{e}+\mathrm{e}^{-1})^2}{4}+\frac{\mathrm{e}^2-1}{\mathrm{e}}}{\frac{\mathrm{e}^2-1}{\mathrm{e}}+2}$, 此时判别式 $\Delta = 0$，故 $k$ 取二次函数的对称轴。由于

$$
(1-\mathrm{e}^{-2})(l-1) =\frac{-\mathrm{e}^{-4}+7\mathrm{e}^{-2}-7+\mathrm{e}^2}{4\left(2+\frac{\mathrm{e}^2-1}{\mathrm{e}}\right)},
$$   

和

$$
\begin{align*}
    2l-\frac{(\mathrm{e}+\mathrm{e}^{-1})^2}{4} & =\frac{\frac{\mathrm{e}^2+\mathrm{e}^{-2}+2}{2}+\frac{2\mathrm{e}^2-2}{\mathrm{e}}}{2+\frac{\mathrm{e}^2-1}{\mathrm{e}}} -\frac{\left(\frac{\mathrm{e}^2+\mathrm{e}^{-2}+2}{4}\right)(2+\frac{\mathrm{e}^2-1}{\mathrm{e}})}{2+\frac{\mathrm{e}^2-1}{\mathrm{e}}} \\
    & = \frac{\frac{\mathrm{e}^2+\mathrm{e}^{-2}+2}{2}+\frac{2\mathrm{e}^2-2}{\mathrm{e}}-\left(\frac{\mathrm{e}^2+\mathrm{e}^{-2}+2}{2}+\frac{\mathrm{e}^3+\mathrm{e}-\mathrm{e}^{-3}-\mathrm{e}^{-1}}{4}\right)}{2+\frac{\mathrm{e}^2-1}{\mathrm{e}}} \\
    & = \frac{2\mathrm{e}-2\mathrm{e}^{-1}-\frac{\mathrm{e}^3+\mathrm{e}-\mathrm{e}^{-3}-\mathrm{e}^{-1}}{4}}{2+\frac{\mathrm{e}^2-1}{\mathrm{e}}}\\
    & = \frac{\mathrm{e}(\mathrm{e}^{-4}-7\mathrm{e}^{-2}+7-\mathrm{e}^2)}{4\left(2+\frac{\mathrm{e}^2-1}{\mathrm{e}}\right)}.
\end{align*}
$$

因此实数根为

$$
k =-\frac{2l-\frac{(\mathrm{e}+\mathrm{e}^{-1})^2}{4}}{2\cdot \frac{1-\mathrm{e}^{-2}}{2}(l-1)} = \mathrm{e}.
$$

最优常数为 $\frac{\frac{(\mathrm{e}+\mathrm{e}^{-1})^2}{4}+\frac{\mathrm{e}^2-1}{\mathrm{e}}}{\frac{\mathrm{e}^2-1}{\mathrm{e}}+2}$ 且小于 $A$。等号成立的条件是取 

$$
f(x) =\mathrm{e}^x+\mathrm{e}\mathrm{e}^{-x} =\mathrm{e}^x+\mathrm{e}^{1-x}.
$$
