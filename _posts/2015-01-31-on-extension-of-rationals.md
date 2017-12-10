---
layout: post
title:  "On extension of rationals"
categories: blog
tags: p-adic non-archimedean math.NT
---
This note is based on my talk An Expedition to the World of $$p$$-adic Numbers at Carnegie Mellon University on January 15, 2014.<!--more-->

Construction from Cauchy Sequences

A standard approach to construct the real numbers from the rational numbers is a procedure called completion, which forces all Cauchy sequences in a metric space by adding new points to the metric space.

Definition A norm, denoted by $$\vert\cdot\vert$$, on the field $$F$$ is a function from $$F$$ to the set of nonnegative numbers in an ordered field $$R$$ such that (1) $$\vertx\vert=0$$ if and only if $$x=0$$; (2) $$\vertxy\vert=\vertx\vert\verty\vert$$; (3) $$\vertx+y\vert\leq\vertx\vert+\verty\vert$$.

Remark The ordered field is usually chosen to be $$\mathbb{R}$$. However, to construct of $$\mathbb{R}$$, the ordered field is $$\mathbb{Q}$$.

A norm on the field $$F$$ naturally gives rise to a metric $$d(x,y)=\vertx-y\vert$$ on $$F$$. For example, the standard metric on the rationals is defined by the absolute value, namely, $$d(x, y) = \vertx-y\vert$$, where $$x,y\in\mathbb{Q}$$, and $$\vert\cdot\vert$$ is the standard norm, i.e., the absolute value, on $$\mathbb{Q}$$.

Given a metric $$d$$ on the field $$F$$, the completion procedure considers the set of all Cauchy sequences on $$F$$ and an equivalence relation

$$(a_n)\sim (b_n)\text{ if and only if }d(a_n, b_n)\to 0\text{ as }n\to\infty.$$

Definition Two norms on $$F$$, $$\vert\cdot\vert_1, \vert\cdot\vert_2$$, are equivalent if and only if for every sequence $$(a_n)$$, it is a Cauchy sequence with respect to $$d_1$$ if and only if it is so with respect to $$d_2$$, where $$d_1, d_2$$ are the metrics determined by $$\vert\cdot\vert_1, \vert\cdot\vert_2$$ respectively.

Remark It is reasonable to worry about the situation in which two norms $$\vert\cdot\vert_1$$ and $$\vert\cdot\vert_2$$ are equivalent, but they introduce different equivalent relationships on the set of Cauchy sequences. However, given two equivalent norms, $$\verta_n\vert_1$$ converges to 0 if and only if it does so with respect to $$d_2$$. (Hint: prove by contradiction and consider the sequence $$(1/a_n)$$.)

Definition The trivial norm on $$F$$ is a norm $$\vert\cdot\vert$$ such that $$\vert0\vert=0$$ and $$\vertx\vert=1$$ for $$x\neq 0$$.

Since we are interested in norms that generate different completions of the field, it would be great if we can classify all nontrivial norms modulo the norm equivalence.
Alternative Norms on Rationals

Definition Let $$p$$ be any prime number. For any non-zero integer $$a$$, let $$\mathrm{ord}_pa$$ be the highest power of $$p$$ which divides $$a$$. For any rational $$x=a/b$$, define $$\mathrm{ord}_px=\mathrm{ord}_pa-\mathrm{ord}_pb$$. Further define a map $$\vert\cdot\vert_p$$ on $$\mathbb{Q}$$ as follows: $$\vertx\vert_p = \begin{cases}p^{-\mathrm{ord}_px} & \text{if }x\neq 0 \\ 0 & \text{if }x=0\end{cases}.$$

Proposition $$\vert\cdot\vert_p$$ is a norm on $$\mathbb{Q}$$. We call it the $$p$$-adic norm on $$\mathbb{Q}$$.

Proof (sketch) We only check the triangle inequality. Notice that $$\begin{eqnarray*}\mathrm{ord}_p\left(\frac{a}{b}-\frac{c}{d}\right) &=& \mathrm{ord}_p\left(\frac{ad-bc}{bd}\right) \\ &=& \mathrm{ord}_p(ad-bc)-\mathrm{ord}_p(bd) \\ &\geq& \min(\mathrm{ord}_p(ad), \mathrm{ord}_p(bc)) – \mathrm{ord}_p(bd) \\ &=& \min(\mathrm{ord}_p(ad/bd), \mathrm{ord}_p(bc/bd)).\end{eqnarray*}$$ Therefore, we obtain $$\verta/b-c/d\vert_p \leq \max(\verta/b\vert_p, \vertc/d\vert_p) \leq \verta/b\vert_p+\vertc/d\vert_p$$. QED

Remark Some counterintuitive fact about the $$p$$-adic norm are

The following theorem due to Ostrowski classifies all possible norms on the rationals up to norm equivalence. We denote the standard absolute value by $$\vert\cdot\vert_\infty$$.

Theorem [OSTROWSKI 1916] Every nontrivial norm $$\vert\cdot\vert$$ on $$\mathbb{Q}$$ is equivalent to $$\vert\cdot\vert_p$$ for some prime $$p$$ or for $$p=\infty$$.

Proof We consider two cases (i) There is $$n\in\{1,2,\ldots\}$$ such that $$\vertn\vert>1$$; (ii) For all $$n\in\{1,2,\ldots\}$$, $$\vertn\vert\leq 1$$. As we shall see, in the 1st case, the norm is equivalent to $$\vert\cdot\vert_\infty$$, whereas, in the 2nd case, the norm is equivalent to $$\vert\cdot\vert_p$$ for some prime $$p$$.

Case (i) Let $$n_0$$ be the least such $$n\in\{1,2,\ldots\}$$ such that $$\vertn\vert>1$$. Let $$\alpha > 0$$ be such that $$\vertn_0\vert=n_0^\alpha$$.

For every positive integer $$n$$, if $$n_0^s \leq n < n_0^{s+1}$$, then we can write it in $$n_0$$-base: $$n = a_0 + a_1n_0 + \ldots + a_sn_0^s.$$

By the choice of $$n_0$$, we know that $$\verta_i\vert\leq 1$$ for all $$i$$. Therefore, we obtain $$\begin{eqnarray*}\vertn\vert & \leq & \verta_0\vert + \verta_1\vert\vertn_0\vert + \ldots + \verta_s\vert\vertn_0\vert^s \\ & \leq & 1 + \vertn_0\vert + \ldots \vertn_0\vert^s \\ & \leq & n_0^{s\alpha}\left(1+n_0^{-\alpha}+n_0^{-2\alpha}+\ldots\right) \\ & \leq & Cn^\alpha,\end{eqnarray*}$$ where $$C$$ does not depend on $$n$$. Replace $$n$$ by $$n^N$$ and get $$\vertn\vert^N = \vertn^N\vert \leq Cn^{N\alpha}$$, and so $$\vertn\vert\leq \sqrt[N]{C}n^\alpha$$. As we can choose $$N$$ to be arbitrarily large, we obtain $$\vertn\vert \leq n^\alpha$$.

On the other hand, we have $$\begin{eqnarray*}\vertn\vert & \geq & \vertn_0^{s+1}\vert – \vertn_0^{s+1}-n\vert \\ & \geq & n_0^{(s+1)\alpha} – (n_0^{s+1}-n_0^s)^\alpha\\ & = & n_0^{(s+1)\alpha}\left[1-(1-1/n_0)^\alpha\right] \\ & > & C'n^\alpha.\end{eqnarray*}$$ Using the same trick, we can actually take $$C'=1$$.

Therefore $$\vertn\vert = n^\alpha$$. It is easy to see it is equivalent to $$\vert\cdot\vert_\infty$$.

Case (ii) Since the norm is nontrivial, let $$n_0$$ be the least $$n$$ such that $$\vertn\vert<1$$.

Claim 1 $$n_0=p$$ is a prime.

Claim 2 $$\vertq\vert=1$$ if $$q$$ is a prime other than $$p$$.

Suppose $$\vertq\vert < 1$$. Find $$M$$ large enough so that both $$\vertp^M\vert$$ and $$\vertq^M\vert$$ are less than $$1/2$$. By Bézout's lemma, there exists $$a,b\in\mathbb{Z}$$ such that $$ap^M + bq^M = 1$$. However, $$1 = \vert1\vert \leq \verta\vert\vertp^M\vert + \vertb\vert\vertq^M\vert < 1/2 + 1/2 = 1,$$ a contradiction.

Therefore, we know $$\vertn\vert=\vertp\vert^{ord_p n}$$. It is easy to see it is equivalent to $$\vert\cdot\vert_p$$. QED
 Non-Archimedean Norm

As one might have noticed, the $$p$$-adic norm satisfies an inequality stronger than the triangle inequality, namely $$\verta\pm b\vert_p\leq \max(\vertx\vert_p, \verty\vert_p)$$.

Definition A norm is non-Archimedean provided $$\vertx\pm y\vert\leq \max(\vertx\vert, \verty\vert)$$.

The world of non-Archimedean norm is good and weird. Here are two testimonies.

Proposition (No more scalene triangles!) If $$\vertx\vert\neq \verty\vert$$, then $$\vertx\pm y\vert = \max(\vertx\vert, \verty\vert)$$.

Proof Suppose $$\vertx\vert < \verty\vert$$. On one hand, we have $$\vertx\pm y\vert \leq \verty\vert$$. On the other hand, $$\verty\vert \leq \max(\vertx\pm y\vert, \vertx\vert)$$. Since $$\vertx\vert < \verty\vert$$, we must have $$\verty\vert \leq \vertx\pm y\vert$$. QED.

Proposition (All points are centers!) $$D(a, r^-) = D(b, r^-)$$ for all $$b\in D(a, r^-)$$ and $$D(a, r) = D(b,r)$$ for all $$b\in D(a,r)$$, where $$D(c, r^-) = \{x : \vertx-c\vert<r\}$$ and $$D(c,r)=\{x:\vertx-c\vert\leq r\}$$.
Construction of $$p$$-adic Numbers

The $$p$$-adic numbers are the completion of $$\mathbb{Q}$$ via the $$p$$-adic norm.

Definition The set of $$p$$-adic numbers is defined as $$\mathbb{Q}_p = \{\text{Cauchy sequences with respect to }\vert\cdot\vert_p\} / \sim_p,$$ where $$(a_n)\sim_p(b_n)$$ iff $$\verta_n-b_n\vert_p\to 0$$ as $$n\to\infty$$.

We would like to extend $$\vert\cdot\vert_p$$ from $$\mathbb{Q}$$ to $$\mathbb{Q}_p$$. When extending $$\vert\cdot\vert_\infty$$ from $$\mathbb{Q}$$ to $$\mathbb{R}$$, we set $$\vert[(a_n)]\vert_\infty$$ to be $$[(\verta_n\vert)]$$, an element in $$\mathbb{R}$$. However, the values that $$\vert\cdot\vert_p$$ can take, after the extension, are still in $$\mathbb{Q}$$.

Definition The extension of $$\vert\cdot\vert_p$$ on $$\mathbb{Q}_p$$ is defined by $$\vert[(a_n)]\vert_p = \lim_{n\to\infty}\verta_n\vert_p$$.

Remark Suppose $$(a_n)\sim_p (a_n')$$. Then $$\lim_{n\to\infty}\verta_n-a_n'\vert_p=0$$, and so $$\lim_{n\to\infty}\verta_n\vert_p=\lim_{n\to\infty}\verta_n'\vert_p$$. Moreover, one can prove that $$\lim_{n\to\infty}\verta_n\vert_p$$ always exists provided that $$(a_n)$$ is a Cauchy sequence. (Hint: Suppose $$\lim_{n\to\infty}\verta_n\vert_p > 0$$. There exists $$\epsilon > 0$$ such that $$\verta_n\vert_p > \epsilon$$ infinitely often. Choose $$N$$ enough so that $$\verta_m – a_n\vert_p < \epsilon$$ for all $$m,n>N$$. Use ‘no more scalene triangles!' property to deduce a contradiction.)
Representation of $$p$$-adic Numbers

Even though each real number is an equivalence class of Cauchy sequences, each equivalence class has a canonical representative. For instance, the canonical representative of $$\pi$$ is $$(3, 3.1, 3.14, 3.141, 3.1415, \ldots)$$. The analog for $$\mathbb{Q}_p$$ is the following.

Theorem Every equivalence class $$a$$ in $$\mathbb{Q}_p$$ for which $$\verta\vert_p\leq 1$$ has exactly one representative Cauchy sequence of the form $$(a_i)$$ for which (1) $$0\leq a_i < p^i$$ for $$i=1,2,3,\ldots$$; (2) $$a_i = a_{i+1} (\pmod p^i)$$ for $$i=1,2,3,\ldots$$.

Proof of Uniqueness Prove by definition chasing.

Proof of Existence We shall repeatedly apply the following lemma.

Lemma For every $$b\in\mathbb{Q}$$ for which $$\vertb\vert_p \leq 1$$ and $$i\in\mathbb{N}$$, there exists $$a\in\{0, \ldots, p^i-1\}$$ such that $$\verta-b\vert_p \leq p^{-i}$$.

Proof of Lemma Suppose $$b=m/n$$ is in the lowest form. As $$\vertb\vert_p\leq 1$$, we know that $$(n, p^i)=1$$. By Bézout's lemma, $$an+a'p^i=m$$ for some integers $$a,a'$$. We may assume $$a\in\{0,\ldots,p^i-1\}$$. Note that $$a-b=a'p^i/n$$, and so $$\verta-b\vert_p \leq p^{-i}$$. qed

Suppose $$(c_i)$$ is a representative of $$a$$. As $$(c_i)$$ is a Cauchy sequence, we can extract a subsequence $$(b_i)$$ such that $$\vertb_i – b_j\vert \leq p^{-i}$$ for all $$i < j$$ which is still a representative of $$a$$. Using the lemma above, for each $$b_i$$, we can find $$0 \leq a_i < q^i$$ such that $$\verta_i-b_i\vert_p \leq q^{-i}$$. Therefore $$(a_i)$$ is a representative of $$a$$ as well. For all $$i<j$$, we have $$\verta_i-a_j\vert_p \leq \max(\verta_i – b_i\vert_p, \vertb_i-b_j\vert_p, \vertb_j-a_j\vert_p) \leq q^{-i}$$, Therefore $$q^i$$ divides $$a_i – a_j$$.

QED

For $$\verta\vert_p\leq 1$$, we write $$a=b_0 + b_1p + b_2p^2 + \ldots$$, where $$(b_{n-1}b_{n-2}\ldots b_0)_p = a_n$$.

What if $$\verta\vert_p > 1$$? As $$\vertap^m\vert=\verta\vert/p^m$$, $$\vertap^m\vert\leq 1$$ for some natural number $$m$$. By the representation theorem, we can write $$ap^m = b_0 + b_1p + b_2p^2 + \ldots$$, and $$a = b_0p^{-m} + b_1p^{-m+1} + b_2p^{-m+2} + \ldots$$.

Using the representation of $$p$$-adic numbers, one can perform arithmetic operations such as addition, subtraction, multiplication and division.

Like $$\mathbb{R}$$, $$\mathbb{Q}_p$$ is not algebraically closed. Though $$\mathbb{C}$$, the algebraic closure of $$\mathbb{R}$$, has degree $$2$$ over $$\mathbb{R}$$, and it is complete with respect to the absolute value, it is not so for $$\overline{\mathbb{Q}_p}$$, the algebraic closure of $$\mathbb{Q}_p$$. In fact, $$\overline{\mathbb{Q}_p}$$ has infinite degree over $$\mathbb{Q}_p$$ and is, unfortunately, not complete with respect to proper extension of $$\vert\cdot\vert_p$$. The good news is that the completion of $$\overline{\mathbb{Q}_p}$$, denoted by $$\Omega$$ is algebraically closed.