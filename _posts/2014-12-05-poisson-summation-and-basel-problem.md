---
layout: post
title:  "Poisson summation and Basel problem"
categories: blog
tags: poisson-summation math.CA
---
This note is based on Professor [Noam Elkies](http://www.math.harvard.edu/~elkies/)' talk at Carnegie Mellon University on December 2, 2014.

A classical mathematical analysis problem, also known as the Basel problem, first posed by Pietro Mengoli in 1644 and solved by Leonhard Euler in 1735, asks the precise sum in closed form of the infinite series $$\sum_{n=1}^\infty \frac{1}{n^2} = \lim_{n\to\infty}\left(\frac{1}{1^2}+\frac{1}{2^2}+\ldots+\frac{1}{n^2}\right).$$<!--more-->

Here we present an attack to the Basel problem using the Poisson summation formula.
Poisson Summation Formula

The Poisson summation formula states that $$\sum_{n\in\mathbb{Z}}f(n) = \sum_{k\in\mathbb{Z}}\hat{f}(k),$$ where \(f: \mathbb{R}\to\mathbb{R}\) is a "nice" function and \(\hat{f}(\omega):=\int_\mathbb{R}f(x)e^{-2\pi i\omega x}dx\) is the Fourier transformation of \(f\).

For the sake of completeness, we are going to prove the Poisson summation formula and specify how "nice" the function should be for the formula to work.

Proof of Poisson summation formula Let \(R:\mathbb{R}\to\mathbb{R}\) be defined by \(R(t) = \sum_{n\in\mathbb{Z}}f(n+t)\). Because \(R(t+m) = R(t)\) for all \(m\in\mathbb{Z}\), and so \(R\) is a periodic function, we can expand \(R(t)\) in the Fourier series $$R(t) = \sum_{k\in\mathbb{Z}}a_ke^{2\pi i kt},$$ where $$\begin{eqnarray}a_k & = & \int_0^1R(t)e^{-2\pi ikt}dt \\ & = & \int_0^1\sum_{n\in\mathbb{Z}}f(n+t)e^{-2\pi ikt}dt \\ & = & \sum_{n\in\mathbb{Z}}\int_0^1f(n+t)e^{-2\pi ikt}dt \\ & = & \sum_{n\in\mathbb{Z}}\int_n^{n+1}f(t)e^{-2\pi ikt}dt \\ & = & \int_\mathbb{R}f(t)e^{-2\pi ikt}dt.\end{eqnarray}$$ which equals the value at \(-k\) of the Fourier transform \(\hat{f}\) of \(f\). We conclude that $$\sum_{n\in\mathbb{Z}}f(n) = R(0)=\sum_{k\in\mathbb{Z}}a_k = \sum_{k\in\mathbb{Z}}\hat{f}(k).$$ Q.E.D.

Remark In order to use Fourier series for \(R\), we need \(R\in C^1\) to ensure that its Fourier series expansion \(\sum_{n\in\mathbb{Z}}a_ke^{2\pi ikt}\) converges to \(R(t)\) pointwise (and uniformly in fact). This allows us to evaluate \(R\) at \(0\) and equate it with \(\sum_{k\in\mathbb{Z}} a_k\). On the other hand, we switched the integration and the infinite summation $$\int_0^1\sum_{n\in\mathbb{Z}}f(n+t)e^{-2\pi ikt}dt = \sum_{n\in\mathbb{Z}}\int_0^1f(n+t)e^{-2\pi ikt}dt,$$ in the computation. The Fubini–Tonelli theorem says that this is legit if $$\int_0^1\sum_{n\in\mathbb{Z}}\left|f(n+t)e^{-2\pi ikt}\right|dt = \int_0^1\sum_{n\in\mathbb{Z}}\left|f(n+t)\right|dt < \infty$$ or $$\sum_{n\in\mathbb{Z}}\int_0^1\left|f(n+t)e^{-2\pi ikt}\right|dt = \sum_{n\in\mathbb{Z}}\int_n^{n+1}|f(x)|dx = \int_\mathbb{R}|f(x)|dx < \infty.$$
Application to Basel Problem

Take \(f(x) = \frac{1}{x^2+c^2}\), where \(c > 0\) is a constant. For such \(f\), \(R(t) = \sum_{n\in\mathbb{Z}}f(n+t)\) defined above converges uniformly. As each \(f(n+t)\) is continuous, so is \(R\). As \(\sum_{n\in\mathbb{Z}}f'(n+t) = \sum_{n\in\mathbb{Z}}\frac{-2(t+n)}{((t+n)+c^2)^2}\) converges uniformly, we have that \(R'(t) = \sum_{n\in\mathbb{Z}}f'(n+t)\), and moreover, as \(f'(n+t)\) is continuous, so is \(R'\). Now \(R\) is continuously differentiable, and so we can use Fourier series for \(R\). On the other hand, since \(f\) is absolutely integrable, we can switch integral with summation. Therefore we can apply the Poisson summation formula.

Its Fourier transform is, by Cauchy's integral formula, $$\hat{f}(\omega) = \int_\mathbb{R}\frac{1}{x^2+c^2}e^{-2\pi i\omega x}dx = \frac{\pi}{c}e^{-2\pi c|\omega|}.$$ By the Poisson summation formula, we obtain $$\sum_{n\in\mathbb{Z}}\frac{1}{n^2+c^2} = \sum_{k\in\mathbb{Z}}\frac{\pi}{c}e^{-2\pi c|k|} = \frac{\pi}{c}\frac{e^{2\pi c}+1}{e^{2\pi c}-1},$$ and so $$\sum_{n=1}^\infty \frac{1}{n^2+c^2} = \frac{1}{2}\left(\frac{\pi}{c}\frac{e^{2\pi c}+1}{e^{2\pi c}-1}-\frac{1}{c^2}\right).$$

Sending \(c\) to \(0^+\), the left hand side converges to \(\sum_{n=1}^\infty\frac{1}{n^2}\) and the right hand side is equal to $$\begin{eqnarray}& & \frac{1}{2}\left(\frac{\pi}{c}\frac{2+2\pi c+2\pi^2 c^2 + \ldots}{2\pi c + 2\pi^2 c^2 + 4\pi^3c^3/3 + \ldots}-\frac{1}{c^2}\right) \\ & = & \frac{1}{2}\left(\frac{(2 + 2\pi c+2\pi^2c^2 + \ldots) – (2 + 2\pi c + 4\pi^2c^2/3 + \ldots)}{2c^2 + 2\pi c^3 + 4\pi^2c^4/3 + \ldots}\right) \\ & = & \frac{1}{2}\frac{2\pi^2c^2 – 4\pi^2c^2/3 + \ldots}{2c^2 + \ldots }\end{eqnarray}$$ and converges to \(\frac{\pi^2}{6}\) as \(c\to 0^+\).