---
layout: post
title:  "Hausdorff moment problem"
categories: blog
tags: tricks math.PR
excerpt:
  Hausdorff moment problem asks for the necessary and sufficient conditions for a sequence $$(m_n)$$ with $$m_0=1$$ to be the sequence of the moments of a random variable $$X$$ supported on $$[0,1]$$.
---
Hausdorff moment problem asks for the necessary and sufficient conditions for a sequence $$(m_n)$$ with $$m_0=1$$ to be the sequence of the moments of a random variable $$X$$ supported on $$[0,1]$$, that is, $$\mathrm{E}X_n=m_n$$ for all $$n$$.

**Theorem (Hausdorff 1921)** The sequence $$(m_n)$$ is a moment sequence if and only if the sequence is *completely monotonic*, that is, its difference sequences satisfy the equation $$(D^rm)_s \ge 0$$ for all $$r,s \ge 0$$. Here $$D$$ is the difference operator on the space of real sequences $$(a_n)$$ given by $$D_a=(a_n–a_{n+1})$$.

The proof under the fold follows the outline given in (E18.5 – E18.6) *Probability with Martingales* by David Williams.

*Proof of necessity* Suppose $$(m_n)$$ is the moment sequence of a random variable $$X$$ supported on $$[0,1]$$. By induction, one can show that $$(D^rm)_s=\mathrm{E}(1−X)^rX^s$$. Clearly, as $$X$$ is supported on $$[0,1]$$, the moment sequence is completely monotonic. <!--tomb-->

*Proof of sufficiency* Suppose $$(m_n)$$ is a completely monotonic sequence with $$m_0=1$$. Define

$$F_n(x) := \sum_{i \le nx}{n\choose i}(D^{n-i}m)_i.$$

Clearly, $$F_n$$ is right-continuous and non-decreasing, and $$F_n(0^−)=0$$. To prove $$F_n(1)=1$$, one has to prove the identity
$$
\sum_{i}{n\choose i}(D^{n-i}m)_i = m_0.
$$

**A classical trick** Since the identity above is about vectors in the linear space (over the reals) spanned by $$(m_n)$$, and the linear space spanned by $$(m_n)$$ is isomorphic to the one spanned by $$(\theta^n)$$, the identity is equivalent to 

$$
\sum_{i}{n\choose i}(D^{n-i}\theta)_i = 1,
$$

where $$\theta$$ is the sequence defined by $$\theta_n=\theta^n$$. Now, we take advantage of the ring structure of $$\mathbb{R}[\theta]$$. Notice that $$(D^r\theta)_s=(1−\theta)^r\theta^s$$. Using the binomial theorem, we obtain

$$
\sum_{i}{n\choose i}(D^{n-i}\theta)_i = \sum_{i}{n\choose i}(1-\theta)^{n-i}\theta^i = (1-\theta + \theta)^n = 1.
$$

Therefore $$F_n$$ is a bona fide distribution function. Define 

$$
m_{n, k} := \int_{[0,1]} x^kdF_n(x),
$$ 

that is $$m_{n,k}$$ is the $$k$$th moment of $$F_n$$. We find an explicit formula for $$m_{n,k}$$.

Noticing that $$F_n$$ is a constant, say $$c_{n,i}$$, on $$[\frac{i}{n},\frac{i+1}{n})$$, for all $$0 \le i < n$$ and $$c_{n,i}$$ is a linear combination of $$m_0, \dots, m_n$$, we know that there exist $$a_{n,k,0},\dots,a_{n,k,n}$$ such that

$$m_{n,k} = \sum_{i=0}^n a_{n,k,i}m_i.$$

Again we use the special case $$m_n=\theta^n$$ to compute the coefficients $$a_i=a_{n,k,i}$$, where $$0\le \theta \le 1$$. In this case,

$$
F_n(x) = \sum_{i \le nx}{n\choose i}(D^{n-i}\theta)_i = \sum_{i\le nx}{n\choose i}(1-\theta)^{n-i}\theta^i, m_{n,k} = \sum_{i=0}^n a_{i}\theta^i.
$$

Now consider the situation in which a coin with probability $$\theta$$ is tossed at times $$1,2,\dots$$. The random variable $$H_k$$ is 1 if the $$k$$th toss produces heads, 0 otherwise. Define $$A_n$$ to be the average of $$H_1,\dots, H_n$$. It is immediate from the formula of $$F_n$$ that $$F_n$$ is the distribution function of $$A_n$$, and so $$m_{n,k}$$ is the $$k$$th moment of $$A_n$$. However, one can calculate the $$k$$th moment of $$A_n$$ explicitly. Given $$n$$ and $$k$$. Let $$f\colon [k]\to [n]$$ be chosen uniformly at random, $$\vert f \vert$$ be the cardinality of the image of $$f$$, and denote by $$p_i=\mathrm{Pr}(\vert f \vert=i)$$. We obtain

$$
\operatorname{E}A_n^k = \operatorname{E}\left(\frac{H_1 + \dots + H_n}{n}\right)^k
= \operatorname{E}H_{f(1)}\dots H_{f(k)} \\
= \operatorname{E}\operatorname{E}[H_{f(1)}\dots H_{f(k)}\mid \vert f\vert]
= \operatorname{E}\theta^{\vert f\vert}
= \sum_{i=0}^n p_{i}\theta^i.
$$

Therefore, for all $$\theta\in [0,1]$$, we know that $$\sum_{i=0}^n a_i\theta^i = \sum_{i=0}^n p_i\theta^i$$, and so $$a_i=p_i$$ for all $$i=0,\dots,n$$.

As both $$(a_i)$$ and $$(p_i)$$ do not depend on $$m_i, a_i=p_i$$ holds in general. Since $$p_k = \prod_{i=0}^{k-1}(1-i/n)\to 1$$ as $$n\to\infty$$ and $$p_i=0$$ for all $$i>k$$, we know that $$\lim_n m_{n,k}=m_k$$.

Using the [Helly–Bray Theorem](https://en.wikipedia.org/wiki/Helly%E2%80%93Bray_theorem), since $$(F_n)$$ is tight, there exists a distribution function $$F$$ and a subsequence $$(F_{k_n})$$ such that $$F_{k_n}$$ converges weakly to $$F$$. The definition of weak convergence implies that

$$
\int_{[0,1]} x^k dF(x) = \lim_n \int_{[0,1]}x^k dF_{k_n}(x) = \lim_n m_{k_n,k} = m_k.
$$

Therefore, the random variable $$X$$ with distribution function $$F$$ is supported on $$[0,1]$$ and its $$k$$th moment is $$m_k$$.<!--tomb-->

There are other two classical moment problems: the [Hamburger moment problem](https://en.wikipedia.org/wiki/Hamburger_moment_problem) and the [Stieltjes moment problem](https://en.wikipedia.org/wiki/Stieltjes_moment_problem).