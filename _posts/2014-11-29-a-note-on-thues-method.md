---
layout: post
title:  "On Thue's method"
categories: blog
tags: polynomial-method math.NT
excerpt:
  This note is based on my talk Introduction to Diophantine Approximation at Carnegie Mellon University on November 4, 2014.
---
This note is based on my talk Introduction to Diophantine Approximation at Carnegie Mellon University on November 4, 2014. Due to limit of time, details of Thue's method were not fully presented in the talk. The note is supposed to serve as a complement to that talk.

Diophantine Approximation

Diophantine approximation deals with the approximation of real numbers by rational numbers. In other words, given a real number $$\alpha$$, we are interested in finding a rational approximation $$p/q$$ such that the error $$|\alpha – p/q|$$ is “small''. The smaller the error, the better the approximation. Since the set of rationals is dense, there is no best rational approximation of an irrational number (apparently, the best rational approximation of a rational number is itself). However, if we compare the error with the complexity of the rational, i.e., the denominator of the rational, it is natural to expect that the more complicated the rational approximation, the smaller the error. In particular, we can make sense of this in the following way.

Theorem (DIRICHLET) Given an irrational $$\alpha$$, we have $$|\alpha – p/q| < 1/q^2$$ for infinitely many rationals $$p/q$$.

Proof Think of $$C = \mathbb{R}/\mathbb{Z}$$ as a circle with circumference 1. Fix a natural number $$N$$ and mark $$nq$$ on $$C$$ for $$n=1,\ldots,N$$. By the pigeonhole principle, there are $$1\leq n_1 \leq n_2\leq N$$ such that $$n_1\alpha$$ and $$n_2\alpha$$ is $$\leq 1/N$$ apart from each other on $$C$$. Let $$q = n_2 – n_1 < N$$. Then there is $$p$$ such that $$|q\alpha – p| \leq 1/N$$, and so $$|\alpha – p/q| \leq 1/(Nq) < 1/q^2$$. Taking $$N$$ large enough yields better approximation $$p/q$$ with the desired property.

By means of continued fraction, one can push the result a bit further by a constant factor.

Theorem (HURWITZ 1891) Given an irrational $$\alpha$$, we have $$|\alpha – p/q| < 1/\sqrt{5}q^2$$ for infinitely many rationals $$p/q$$. Moreover, the constant $$\sqrt{5}$$ is the best possible for $$\alpha = (1+\sqrt{5})/2$$.

These show us how “well'' we can approximate reals by rationals. On the other hand, we would also like to say that we cannot approximate “too well'', i.e., given a real number $$\alpha$$, we have $$|\alpha – p/q| > 1/q^n$$ for all but finite rationals $$p/q$$, where $$n$$ may depend on $$\alpha$$. Unfortunately, this is not so because of the existence of Liouville numbers.

Definition A Liouville number is an irrational number $$\alpha$$ with the property that, for every natural number $$n$$, there exists a rational $$p/q$$ and such that $$|\alpha – p/q| < q^{-n}$$.

For example, $$\alpha = \sum_{k=1}^\infty 2^{-k!}$$ is a Liouville number.

However, we indeed can say something along those lines for algebraic numbers.
Diophantine Approximation for Algebraic Numbers

Definition An algebraic number is a number that is a root of a non-zero polynomial in one variable with rational coefficients (or equivalently integer coefficients). Given an algebraic number, there is a monic polynomial (with rational coefficients) of least degree that has the number as a root. This polynomial is called its minimal polynomial. If its minimal polynomial has degree $$d$$, then the algebraic number is said to be of degree $$d$$.

Theorem (LIOUVILLE 1844) Given an algebraic irrational number $$\alpha$$ of degree $$d$$, there exists $$A>0$$ such that for all rationals $$p/q$$, $$|\alpha – p/q|>Aq^{-d}$$.

A immediate consequence of the theorem is that Liouville numbers are not algebraic.

Proof Let $$f(x)$$ be a polynomial with integer coefficients of degree $$d$$ that has $$\alpha$$ as a root. Note that $$f'(\alpha)\neq 0$$ otherwise $$f'(x)$$ is a polynomial of degree $$<d$$ that has $$\alpha$$ as a root. As $$f'(x)$$ is continuous, there is $$r>0$$ such that $$|f'(x)| < 1 / A$$ for all $$|x-\alpha|<r$$. Without loss of generality, we may assume $$p/q$$ is pretty close, i.e., within distance $$r$$, to $$\alpha$$ by taking $$A < r$$. Note that also $$f(p/q)\neq 0$$ otherwise $$f(x) / (x-p/q)$$ is a polynomial of degree $$<d$$ that has $$\alpha$$ as a root. Since $$q^df(p/q)$$ is an integer, $$|f(p/q)| \geq q^{-d}$$. On the other hand, by mean value theorem, there is $$c$$ between $$p/q$$ and $$\alpha$$ such that $$|f(\alpha)-f(p/q)| = |f'(c)||\alpha – p/q|$$. Therefore $$|\alpha – p/q| = |f(p/q)|/f'(c) > Aq^{-n}$$ since $$|c-\alpha| < r$$.

Liouville's theorem (on Diophantine approximation) can be phrased in an alternative way.

Corollary Given an irrational algebraic number $$\alpha$$ of degree $$d$$. If the equation $$|\alpha – p/q| < 1/q^n$$ has infinitely many rational solutions $$p/q$$, then $$n\leq d$$.

The continuing working was established by Axel Thue (1909), Carl Ludwig Siegle (1921), Freeman Dyson (1947), and culminated at Klaus Roth's result (1955):

Theorem (ROTH 1955) Given an irrational algebraic number $$\alpha$$. If the equation $$|\alpha-p/q|<1/q^n$$ has infinitely many rational solutions $$p/q$$, then $$n\leq 2$$.

The constant $$2$$ cannot be improved due to Dirichlet's theorem. Another way to interpret Roth's theorem is as follows.

Corollary Any irrational algebraic number $$\alpha$$ has approximation exponent equal to 2, i.e., for any $$\epsilon>0$$, the inequality $$|\alpha-p/q|<1/q^{2+\epsilon}$$ can only have finitely many solutions $$p/q$$.

This amounts to say that we cannot approximate irrational algebraic numbers “too well'' in the sense that if we slightly restrict the error from $$q^{-2}$$ to $$q^{-(2+\epsilon)}$$, the number of “good'' approximation changes from infinite to finite.
Thue's Method

Although Roth's proof has merit in itself, part of his idea dates back to Thue's work. Indeed, Thue used a method, now known as the polynomial method, in a special way to prove the following theorem.

Theorem (THUE 1909) Given an irrational algebraic number $$\alpha$$. If the equation $$|\alpha-p/q|<1/q^n$$ has infinitely many rational solutions $$p/q$$, then $$n\leq d/2+1$$, where $$d$$ is the degree of $$\alpha$$.

Proof Suppose that the irrational algebraic number $$\alpha$$ has two “good'' rational approximations $$r_1 = p_1/q_1, r_2 = p_2/q_2$$, i.e., $$|\alpha – p_i/q_i| < q_i^{-n}$$ for $$i = 1,2$$. Since there are infinitely many “good'' rational approximations, we get to choose later how large we want $$q_i$$ to be.

The rest of the proof can be broken into three parts. Let $$m\in\mathbb{N}$$ and $$0 < \epsilon \ll 1$$ be two constants to be determined. The constant $$\epsilon$$ is fixed before we send it to $$0$$.

We are going to use $$C_0, \ldots, C_6$$ to indicate positive constants that may depend on $$\epsilon, d$$ and $$c$$, a constant determined by $$\alpha$$ (defined later). We may always assume $$\alpha, d, c, C_0,\ldots, C_6 \ll m$$.

Part I Find a non-zero polynomial $$f(x,y) = P(x) + Q(x)y$$ with integer coefficients that satisfies the following properties:

1. it vanishes at $$(\alpha, \alpha)$$ to order $$(m, 1)$$, i.e., $$\partial_x^k f(\alpha, \alpha) = 0$$ for all $$k<m$$;
1. its degree in $$x$$ is $$\leq D := \frac{1}{2}(1+\epsilon)dm$$.
1. its size, i.e., the maximum of all its coefficients' absolute values, denoted by $$|f|$$, is $$\leq C_1^m$$ for some constant $$C_1$$.

Proof of Part I The proof is a classical “parameter counting'' argument. Consider a polynomial $$f(x,y)=P(x)+Q(x)y = \sum_{i<D}a_ix^i + \sum_{i<D}b_ix^iy$$ with degree $$\leq D$$ in $$x$$ and think of its $$2D$$ coefficients as undetermined. We can interpret the first property as a homogeneous system of $$m$$ linear equations with coefficients in $$\mathbb{Z}[\alpha]$$ because $$\frac{1}{k!}\partial_x^k f(\alpha, \alpha) = 0 \text{ if and only if } \sum_{i < D}{i\choose k}\alpha^{i-k}a_i + \sum_{i < D}{i\choose k}\alpha^{i-k+1}b_i = 0.$$

Fix a (non-zero) polynomial $$c_dx^d + \ldots + c_0$$ with integer coefficients that has $$\alpha$$ as a root and $$c$$ the size of this polynomial. Notice that $$c_d\alpha^d = -(c_{d-1}\alpha^{d-1} + \ldots + c_0)$$. For each of the linear equation above of the form $$L_0 + L_1\alpha + \ldots + L_t\alpha^t = 0,$$ for some $$t \geq d$$ where $$L_k$$ are linear combination of $$a_i, b_i$$ with integer coefficients, we can replace it by $$c_d(L_0 + L_1\alpha + \ldots + L_{t-1}\alpha^{t-1}) – L_t(c_0\alpha^{t-d} + \ldots + c_{d-1}\alpha^{t-1}) = 0,$$ i.e., $$L'_0 + L_1'\alpha + \ldots + L_{t-1}\alpha^{t-1} = 0$$ with $$L'_k = \begin{cases} c_dL_k & 0\leq k < t-d \\ c_dL_k – c_{k-t+d}L_t & t-d \leq k < t\end{cases}$$ and we can repeat this until its degree in $$\alpha$$ becomes smaller than $$d$$. Let $$|L_k|_1$$ be the sum of the absolute values of all coefficients in $$L_k$$. Note that each replacement increases the $$\max |L_k|_1$$ to $$\max |L_k'|_1 \leq 2c \max|L_k|$$. Note that the initially $$\max |L_k| < 2^D$$. After at most $$D$$ replacements, the equation satisfies $$\max |L_k| < 2^D(2c)^D = C_0^m$$ for some constant $$C_0$$.

Finally, for each of the linear equation, after the replacements, of the form $$L_0 + L_1\alpha + \ldots +  L_{d-1}\alpha^{d-1} = 0$$, it is equivalent to have $$ L_0 = L_1 = \ldots = L_{d-1}$$ because $$1, \alpha, \ldots, \alpha^{d-1}$$ are linearly independent over $$\mathbb{Q}$$. Therefore each linear equation with coefficient in $$\mathbb{Z}[\alpha]$$ corresponding to $$\partial_x^k f(\alpha, \alpha) = 0$$ is equivalent to $$d$$ linear equations whose $$|\cdot|_1$$ are all bounded by $$C_0^m$$. In total, we have $$dm$$ linear equations with $$2D$$ undetermined.

One can view this homogeneous system of linear equations as a linear transformation $$L = (L_1, \ldots, L_{dm}): \mathbb{Z}^{2D} \to \mathbb{Z}^{dm}$$. Consider all integral points in $$[-M, M]^{2D}$$ and their image under $$L$$. Because $$|L_k|_1 \leq C_0^m$$, their image is contained in $$[-C_0^mM, C_0^mM]^{dm}$$. By the pigeonhole principle, as long as $$(2M+1)^{2D} > (2C_0^mM+1)^{dm},$$ there are two integral points $$v', v''$$ in $$[-M,M]^{2D}$$ such that $$Lv'=Lv''$$, hence there is an integral point $$v=v'-v''\in [-2M, 2M]^{2D}$$ such that $$Lv=0$$ and $$v\neq 0$$, hence a non-zero solution to the linear system. To guarantee the above inequality involving $$M$$, it is enough to have $$2M > C_0^{m/\epsilon}$$, and so $$2M = C_1^m$$, for some constant $$C_1$$, works.

Part II Find $$l < L := \epsilon m$$ such that $$g(x,y) = \frac{1}{l!}\partial_x^l f(x,y)$$ satisfies the following properties:

    it vanishes at $$(\alpha, \alpha)$$ to order $$(m-L, 1)$$;
    its degree in $$x$$ is $$\leq D$$ ($$=\frac{1}{2}(1+\epsilon)dm$$);
    its size is $$|g| \leq {D\choose l}C_1^m < C_2^m$$ for some constant $$C_2$$;
    and $$g(r_1, r_2)\neq 0$$.

Proof of Part II The first three properties follow immediately from the properties of $$f$$. Henceforth, we only have to show there exists $$l < L$$ such that the last property holds. For the sake of contradiction, assume that $$\partial_x^l f(r_1, r_2) = 0$$ for all $$l < L$$. Define $$D(x) := \begin{vmatrix}P(x) & Q(x) \\ P'(x) & Q'(x)\end{vmatrix} = P(x)Q'(x) – P'(x)Q(x).$$ Because $$f(x,y)$$ vanishes at $$(r_1, r_2)$$ to order $$(L,1)$$, by Leibniz rule, $$D(x)$$ vanishes at $$r_1$$ to order $$L-1$$. Note that $$D(x)$$ is in $$\mathbb{Z}[x]$$. By Gauss' lemma, $$(q_1x-p_1)^{L-1}$$ divides $$D(x)$$. Therefore either (1) $$|D(x)| \geq q_1^{L-1}$$; or (2) $$D(x) = 0$$ as a polynomial.

If it is the first case, because $$|D(x)| = |P(x)Q'(x) – P'(x)Q(x)| < 2D|f|^2$$, we have $$2D|f|^2 > q_1^{L-1}$$. Because $$|f| < C_1^m$$, we get a contradiction as long as $$q_1 > C_3,$$ for some constant $$C_3$$.

If it is the second case, $$P(x)$$ and $$Q(x)$$ are linearly dependent over $$\mathbb{Q}$$. Therefore either (1) $$P(x) = -r_2'Q(x)$$ and $$Q(x)$$ vanishes at $$r_1$$ to order $$< L$$ or (2) $$Q(x)$$ vanishes at $$r_1$$ to order $$L$$. If it is the first case, because $$f(x,y) = (y-r_2′)Q(x)$$ vanishes at $$(r_1, r_2)$$ to order $$(L, 1)$$ and $$Q(x)$$ vanish at $$r_1$$ to order $$<L$$, we know that $$r_2′ = r_2$$, hence by Gauss' lemma, $$f(x,y)$$ is a multiple of $$q_2x – p_2$$, and so $$|f| \geq q_2$$. If it is the second case, because $$Q$$ vanishes at $$r_1$$ to order $$L$$, by Gauss' lemma, $$Q(x)$$ is a multiple of $$(q_1x – p_1)^L$$, and so $$|f| \geq |Q| \geq q_1^L$$. To get a contradiction in both cases, we need $$q_1 > C_4\text{ and }q_2 > C_1^m.$$

Therefore, it is enough to have $$q_1 > C_5\text{ and }q_2 > q_1^m$$ for some constant $$C_5$$.

Part III We claim that $$|g(r_1, r_2)| < C_6^m\left(q_1^{-(1-\epsilon)m}+q_2^{-1}\right)$$.

Proof of Part III We know that $$|g(r_1, r_2)-g(r_1, \alpha)| = |Q(r_1)||\alpha – r_2| \leq D|g|(|\alpha|+1)^D|\alpha-r_2|.$$ Because $$g$$ vanishes at $$(\alpha_1, \alpha_1)$$ to order $$(m-L, 1)$$, using Taylor expansion, we have $$|g(r_1, \alpha) – g(\alpha, \alpha)| \leq \sup_{|x| < |\alpha|+1}\frac{1}{(m-L)!}\partial_x^{m-L}g(x,\alpha) |\alpha_1-r_1|^{m-L} < D2^D|g|(|\alpha|+1)^D||\alpha_1-r_1|^{m-L}.$$ As $$r_1, r_2$$ are two “good'' approximations of $$\alpha$$, we obtain $$\begin{eqnarray}|g(r_1, r_2)| & \leq & D|g|(|\alpha|+1)^D|\alpha-r_2| + D2^D|g|(|\alpha|+1)^D||\alpha_1-r_1|^{m-L}\\ & < & C_6^m\left(q_2^{-n} + q_1^{(-m+L)n}\right),\end{eqnarray}$$ for some constant $$C_6$$

From Part II, we know that $$g(r_1, r_2)\neq 0$$, and so $$|g(r_1, r_2)| \geq q_1^{-D}q_2^{-1}$$. From Part III, we know that $$|g(r_1, r_2)| < C_6^m(q_1^{(-m+L)n}+q_2^{-n})$$. Therefore, we obtain $$q_1^{-D}q_2^{-1} < C_6^m\left(q_1^{(-m+L)n}+q_2^{-n}\right).$$ Set $$m$$ to be the biggest integer less than $$\log{q_2} / \log{q_1}$$, and so $$q_1^m < q_2 \leq q_1^{m+1}$$. To ensure Part II to work, we only need to take $$q_1 > C_5$$. In addition, we require $$q_1^\epsilon > C_6$$ and so $$C_6^m < q_1^{\epsilon m} < q_2^\epsilon$$. The choice of $$m$$ implies that $$q_2^{-\frac{1}{2}(1+\epsilon)d – 1} = q_2^{-D/m}q_2^{-1} < q_2^\epsilon\left(q_2^{-\frac{m-L}{m+1}n}+q_2^{-n}\right) < 2q_2^{-(1-2\epsilon)n+\epsilon}.$$ In order to have this inequality hold for arbitrarily large $$q_2$$, we need $$\frac{1}{2}(1+\epsilon)d + 1 > (1-2\epsilon)n-\epsilon$$. Let $$\epsilon$$ go to $$0$$ and obtain $$n\leq \frac{1}{2}d + 1$$. Q.E.D.
Acknowledgement

The proof largely relies on [Larry Guth](http://math.mit.edu/~lguth/)'s [notes](http://math.mit.edu/~lguth/PolynomialMethod.html) on the polynomial method.