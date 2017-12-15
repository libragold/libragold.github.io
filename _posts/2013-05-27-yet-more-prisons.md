---
layout: post
title:  "Yet more prisons"
categories: blog
tags: recreational-mathematics
excerpt:
  People like prisoner puzzles. Here is the most difficult one I have ever encountered.
---
People like prisoner puzzles. Here is the most difficult one I have ever encountered. I heard it from Professor [Boris Bukh](http://borisbukh.org) during the social hour of Maths Department couple of weeks ago, whom heard it at a maths conference. 

The storyline is like *The Shawshank Redemption*. You are locked in one of the cells in a prison. Unfortunately, you do not know how many other prisoners are in the prison. You do not even know whether you are the only prisoner. The evil-hearted yet mathematically inclined warden wants to play a game with you. The rules are as follows.

1. On the first day, you can write up a communication protocol. The warden will make identical photocopies of your protocol and distribute them among other prisoners.
1. During each of the following days, every prisoner will be given one black card and one white card, and they should turn in one of them to the warden according to your protocol. The rest of the cards will be discarded. The warden would line up all the prisoners cyclically in his mind and imagine each of them passes his or her chosen card to the next person clockwise. After going through all this in his mind, he will redistribute the cards to the prisoners accordingly. Notice, the warden could line up the people by any order he likes -- the orders could differ from day to day.
1. One day, you should call for a stop and immediately tell the number of prisoners in this jail. All prisoners including yourself will be released if you got the number correct.

Remember, the evil-hearted warden knows every detail of your protocol. So all odds are always against you.

Another version of the same puzzle can be found on [XKCD Wiki](http://wiki.xkcd.com/irc/Puzzles#Yet_more_prisoners). Here is a solution that I came up.

Denote the number of prisoners by $$n$$. We want to draft a part of the protocol so that all prisoners will know an upper bound on $$n$$, denoted as $$N$$.

Before we specify the detail of this part of the protocol, let us understand the significance of knowing such an upper bound. Roughly speaking, if all prisoners know an upper bound $$N$$ on $$n$$, then they can broadcast messages. To be more precise, if one turns in a card of some color he chooses, say $$c$$. Everyone else should keep turning in white cards until he receives a black card, and then keep turning in black cards regardless of what cards are received. Then after $$N$$ days, all prisoners will receive the the cards of color $$c$$. Now everyone knows the color $$c$$. Hence they succeeded in broadcasting a single bit. If the protocol says something about coding messages by colors, one can broadcast any message to others. Note that prisoners might not know who has sent the messages.

Let us see how prisoners colaboratively figure out an upper bound $$N$$. We call this process the first stage.

In the first stage, all prisoners will be labeled by either visible or hidden. At the beginning, only I am visible, all the rest are hidden. We break down the following days into several phases. At the beginning of the $$k$$th phase, all prisoners know the upper bound of the current visible prisoners $$N_k$$. For instance, $$N_1=1$$. Now, all hidden people broadcast the a single bit of message telling the others there are hidden people. The broadcasting is done similarly, that is, whoever receives the black card once should keep sending black cards. The broadcasting can be done within $$N_k$$ days because there are at most these many visible prisoners.

There are two possible turnouts. If no visible prisoner receives this message, then all prisoners are visible, and immediately all prisoners know $$N=N_k$$. Otherwise, on the next day, all visible prisoners turn in black cards. Whoever receives a black card sets his or her label to visible. The number of prisoners who change their labels is at most $$N_k$$. Thus we can use $$N_{k+1}=2N_k$$ in the $$k+1$$th phase. Since at least one prisoner changes his label in each phase, eventually, all prisoners will become visible. Hence this process will terminate at a certain phase and provides us an upper bound $$N$$.

In the second stage, we will partition prisoners by clans and try refining the clans as much as possible. At the beginning, I myself alone consists the first clan and the rest of prisoners consist the second clan. This initial set up is written in the protocol and everyone knows it.

The following is how I refine the clans. I can broadcast a message asking the members in a specific clan if any one has turned in a black card on a given day. Prisoners in this certain clan will broadcast a message of a single bit to indicate their answer. And then I broadcast a message that asks if any one in this clan has turned in a white card on that day. If both answers are 'yes', this means there are two people in this clan turned in different card on that given day. Then I will demand the prisoners in that clan to divide into two smaller clans according to their answers. I can also do the same thing to the cards they received on a given day as well.

Thus I can constantly refine the clans by asking questions by clans and days. Since the number of clans can not exceed $$N$$, this refining process will eventually stop and the clans will stabilize. Moreover, prisoners in each clan will turn in the same cards and receive the same cards as well. Otherwise, one day I will interrogate the members in this clan and separate them into smaller clans.

Suppose $$c_i$$ is the number of prisoners in the $$i$$th clan $$C_i$$ for $$i=1,\ldots, m$$, I am in $$C_1$$ and $$c_1=1$$. Our goal is to find out each $$c_i$$.

**Notation** Denote $$[m] := \{1, 2, \dots, n\}$$. For every $$I\subset [m]$$, define $$c_I := \{c_i: i\in I\}$$ and $$\mathrm{span}(c_I)$$ be the set of all linear combinations of $$\{c_i: i\in I\}$$, where every $$c_i$$ is understood as an unknown variable.

We claim that for every $$0 \le r < m$$ and every $$r$$-element subset $$I\subset [m]$$ and $$i\in I$$, $$c_i$$ can be written as a linear combination of $$\{c_j: j\in[m]-I\}$$, or $$c_i\in \mathrm{span}(c_{[m]\setminus I})$$. When we say 'some variable can be written as a linear combination of other variables', we mean all prisoners know this information. In other words, all prisoners keep track of these linear dependencies along the way. We will omit the details of how prisoners could share this information and leave them to the readers.

Specifically when $$r=m-1$$, the claim implies that $$c_2, \ldots, c_m$$ can be written as a linear combination of $$c_1=1$$. Thus we know each $$c_i$$, hence the total number of prisoners.

Now we prove the claim by induction on $$r$$. The base case $$r=0$$ is trivial. Suppose the claim is true for some $$r$$. We shall prove that for every $$(r+1)$$-element subset $$I\subset [m]$$ and $$i\in I$$, $$c_i\in \mathrm{span}(c_J)$$, where $$J=[m]\setminus I$$.

Pick an arbitrary $$i_0\in I$$. By the induction hypothesis, we know for all $$i\in I$$ with $$i\neq i_0$$, we have $$c_i = \alpha_ic_{i_0}+\beta_i(c_J)$$, where $$\beta_i(c_J)\in \mathrm{span}(c_J)$$.

This is also true for $$i=i_0$$. Because we may set $$\alpha_{i_0}=1$$ and $$\beta_{i_0}=0$$. Let the index set $$I_+$$ be the set $$\{i\in I: \alpha_i > 0\}$$ and $$I_-=I\setminus I^+$$. As $$i_0\in I_+$$, $$I_+$$ is non-empty.

Now we demand all clans indexed by $$I^+$$ send out black cards. Suppose the clans indexed by $$I_+'\subset I_+$$ who send out black cards receive white cards and the clans indexed by $$I_-'\subset I_-$$ and $$J'\subset J$$ who send out white cards receive black cards. Hence we have the following equation:

$$\sum_{i\in I'_+}c_i = \sum_{i\in I'_-}c_i+\sum_{j\in J'}c_j.$$

Hence

$$\sum_{i\in I'_+}\left(\alpha_ic_{i_0}+\beta_i(c_J)\right)=\sum_{i\in I'_-}\left(\alpha_ic_{i_0}+\beta_i(c_J)\right)+\sum_{j\in J'}c_j.$$

The $$\alpha$$-coefficient on the left hand side is positive. Meanwhile it is nonpositive on the right hand side. Thus by the equation above we can write $$c_{i_0}$$ as a linear combination of $$c_J$$. <!--tomb-->