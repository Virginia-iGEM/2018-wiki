# Integrated Human Practices

# Integrating Expert Advice 

## Amin Zargar

As we were designing our project during the end of the spring and beginning of the summer, we used Amin Zargar's paper as a significant reference (Zargar et al. 2016). This paper was written while Dr. Zargar was researching under Dr. William Bentley’s lab at the University of Maryland and described a way to enhance bacterial quorum sensing, which is a system bacteria use to alter their behavior based on population density. The circuit developed in the paper upregulates a portion of the autoinducer-2 (AI-2) regulated Lsr operon (a quorum sensing operon) during a quorum response to increase the percent of cells activated as well as the average level of activation per cell. It consists of two parts, an AI-2 regulated plasmid which encodes for T7 RNA polymerase when a quorum response is activated, and a T7 regulated plasmid which encodes for the genes which need to be expressed or upregulated. This enhanced autoinduction circuit can be used to increase the efficiency and cost effectiveness of protein biomanufacturing by avoiding the lack of control in constitutive expression and the cost of inducers (such as IPTG) in induced expression.

To introduce enhanced autoinduction to iGEM and improve on Dr. Zargar’s system, the first iteration of our project design consisted of upregulating the same genes as the previous system as well as two other genes which are not on the Lsr operon but still impact AI-2 levels in the cell. Since our project was so heavily influenced by his paper, we decided to reach out to Dr. Zargar to discuss how best to approach our design and experimentation. 

To our delight, Dr. Zargar agreed to this request, so we scheduled a video call with him early in the summer. During this conversation, we described our project to him and gave him an outline of our design and plans for experimentation. Further conversation led to several key tips and new directions for the project.

We asked him about the best way to ensure that the system has the proper “switch” activity, meaning that the expression or upregulation of the genes we're interested in only happens when the correct cell density has been reached and a quorum response is activated. Our original construct idea was to put all parts of the system on one plasmid, including the AI-2 sensitive and T7 sensitive portions, to make the design and construction more simple and straightforward. However, Dr. Zargar helped us understand that this would reduce our dynamic control of the system. To avoid this, he suggested using different copy number plasmids for the different parts of the system. A single or low copy plasmid for the AI-2 sensitive portion will ensure that T7 transcription will activate only during a quorum response. He even noted that putting this portion in the genome would produce better regulated and heritable control, which we have recommended for future work. The copy number for the second plasmid can be chosen based on how much expression or upregulation is desired. After this suggestion, we decided to invest most of our time developing a two plasmid system to allow for a more switch-like system.

We also asked him how he would go about designing and testing our edits to the system. After he heard that we were planning on using the same changes he had made as well as introducing some of our own, Dr. Zargar recommended a combinatorial and modular design of our plasmid. He noted that breaking up the genes we were interested in into separate, modular parts, and simultaneously constructing plasmids to upregulate different combinations of these genes is the best option. This design paradigm allows for more efficient construction, since all parts and part combinations can be made concurrently, and compensates for an incomplete knowledge about how the genes and their products will interact with each other. Since we had a small number of genes we were interested in upregulating, this “brute-force” method is an effective optimization strategy. With the new combinatorial design, we were also inspired to build a mathematical model to make predictions about which combination of edits would be most effective at enhancing autoinduction. This quorum activation model can be found under the <a href="/Model.html">modeling</a> tab.

## Shaun Moshasha

Shaun Moshasha is the Chief Executive Officer of Kombucha Biomaterials, LLC and Executive Director of Open Bio Labs, both in Charlottesville, Virginia. He is an alumnus of Virginia iGEM, and we came to him early on to talk about our project. We started working with him more directly to understand what kind of impact our project can have on the world based on his field of expertise. His company Kombucha Biomaterials, LLC extracts bacterial cellulose from the biofilm culture called SCOBY, which forms as a part of kombucha fermentation. They then take this cellulose and convert it into paper products.  

Since biofilms form as a consequence of high cell density, which is communicated through quorum sensing and autoinducers, Mr. Moshasha proposed that the enhanced autoinduction from our project could increase levels of biofilm formation, and subsequent production of bacterial cellulose. He told us that bacterial cellulose can be used as a replacement for cellulose harvested from wood pulp, which is used to make paper. This perspective helped us understand that this application of our system, an alternative method of paper production, has many societal and environmental impacts. By increasing the system’s efficiency of cellulose production, our project makes bacterial cellulose more economically feasible. Since bacterial cellulose can be grown in vats indoors, this will decrease the environmental impact of the paper industry. In order for us to get a more concrete idea of the potential economic impact of our project, Mr. Moshasha encouraged us to develop a financial analysis comparing the economics of bacterial cellulose and wood pulp cellulose as well as comparing traditional induction methods and our autoinduction methods for protein biomanufacturing. After talking to Mr. Moshasha, we devoted more time to understanding bacterial cellulose production as an application and to writing the financial analysis to measure the potential impact of our project.

## Paul Humphreys

Professor Paul Humphreys teaches philosophy at the University of Virginia. Early in the summer, we reached out to him to get a philosophical perspective on our project and quorum sensing in general. When we sat down and described our project to him, we quickly got to talking about the concept of emergent behaviors, which quorum sensing is an example of. Emergent behaviors are phenomena that can only exist as a consequence of the interactions between components in a system. In some respects, emergent phenomena are examples of the sum being greater than simply the sum of its parts. There are many examples of this in everyday life; for example, an image is just a collection of pixels, but through the interactions and relative positions of the pixels, the image conveys some meaning or subject. 

After talking about these examples with Professor Humphreys, we realized that the concept of emergent phenomena would be an effective teaching tool to introduce people to quorum sensing, since it can be connected through some easily understood example. We then created an <a href="http://2018.igem.org/wiki/images/0/0d/T--Virginia--2018_quorum_sensing_v1.webm" target="_blank">educational video</a> about quorum sensing using the case of a man who wants to build a park but doesn’t have the means to do so by himself, so he waits until a group of other people are all willing to chip in to fund the park before he commits to it. This illustrates the emergent phenomena of “crowdfunding” or reducing the cost of an action to all individuals by acting as a unit. This same concept is why bacteria wait until a threshold concentration of cells is reached before they devote resources to costly quorum responses. This conversation with Professor Humphreys, and the resulting instructional video, gave us some insight into how to better communicate our project to the general public.

## Charles Richardson

We were referred to Dr. Richardson by Shaun Moshasha, because they work together at Open Bio Labs in Charlottesville, Virginia. Since he studies and works in the field of biochemistry, we spoke to him to get general feedback on the design and applications of our project. 

For our project design, he helped us understand that T7 is very specific and may lead to leaky expression for T7 promoters even at low levels. To combat this, he recommended incorporating something like a T7 molecular sponge or some other low level constitutive repression of T7 to make sure that a certain threshold of the RNA polymerase is reached before the system is activated. We have kept this in mind and recommend it as future work.

Dr. Richardson also gave us another biofilm-related potential application of our project. He recommended that the increased biofilm formation possible with higher autoinduction could be applied as a test for anti-biofilm technology on medical equipment and surfaces. The increased ability of cells using our system to make biofilms would be, in a controlled environment, a more rigorous test of the material’s anti-biofilm activity than waiting to see if standard bacteria would form biofilms on it. 

Our conversation with Dr. Richardson helped us develop our goals and vision for our project as well as understand some of the potential impacts our system has on our society.

## Alexander Zorychta

Alexander Zorychta is the coordinator for Student Entrepreneurs Program, the director for Works in Progress at UVA, and an alumnus of Virginia iGEM. Since Mr. Zorychta has experience advising students in bringing products to the market, we wanted to get his take on how consumers might react to the use of our system in biomanufacturing. He advised us that the best way to analyze public perception is to avoid talking about our specific project but rather fashion open ended questions and discussions that relate to our project and can tease out the nuances through conversation. This inspired us to make a <a href="/Public_Engagement.html" target="_blank">discussion packet</a> on GMO products in the marketplace, which can be found under Education and Public Engagement. This packet will allow future teams to asses the public’s perception of GMOs and GMO related production methods in their own community, which will help them assess the potential impact and acceptance of their technology.

## Jeffrey Saucerman

Jeffrey Saucerman is the Associate Professor of Biomedical Engineering at UVA. Early on, as we were developing our quorum activation model, we needed to figure out what assumptions we were making with our equations and what implications and limitations those assumptions came with. We spoke with Dr. Saucerman to gain a better understanding of these concepts. He detailed the types of assumptions that come with Michaelis-Menten steady state and quasi-steady state models and helped us understand which is more likely to relate to the different components of the system. His input helped us determine the assumptions and limitations of our model, all of which is detailed under the <a href="/Model.html" target="_blank">Model</a> tab.


# Financial Analysis

## Kraft versus Microbial Manufacturing

Kombucha Biomaterials, LLC was who inspired us to do this financial analysis. After going through a paper making session with them, we learned more about the process of making paper out of Kombucha solutions, and thought that it would be a good idea to do a comparison between two different ways of producing cellulose, kraft pulping and microbial manufacturing. 

<figure>
	<img src="/images/HumanPractices/papermaking.jpg" alt="PaperMaking">
	<figcaption> Some team members measuring out and diluting the kombucha solution onto the sheets.</figcaption>
</figure>

To simplify the analysis, we are making two assumptions here. The first assumption is that the end product of kraft pulping has the same concentration of cellulose with that produced by microbial manufacturing, which makes these two products interchangeable. Secondly, we assume that all cellulose are the same, no matter what it was made from, or what they are used to produce later on. From Table 1, we can see that the unit cost of producing cellulose by using microbio manufacturing is much lower than that of kraft pulping. 

<table style="width:100%" class="va-parts">
	<tr>
		<th></th>
		<th>Kraft Pulping</th> 
		<th>Microbio Manufacturing</th>
	</tr>
	<tr>
		<td>Cost per unit</td>
		<td>$1500~$2000/ton </td>
		<td> $2300/ton (2010, Hungund & Gupta)</td>
	</tr>
</table>

**Table 1**: The cost per unit for producing cellulose using kraft pulping and microbio manufacturing

From Table 1, we can see that the unit production cost of microbio manufacturing is slightly higher than that of kraft pulping. However, microbial manufacturing doesn’t require a huge physical space, while kraft pulping involves the build of a massive mill which leads to a huge one-time installation cost. Lots of research have been done in order to cut down the cost of microbial manufacturing, giving microbial manufacturing a bright future. This is the reason why our project has an important role in biomanufacturing, as the application of it will be able to reduce the cost of microbial manufacturing by a huge portion, seen in the next part of the comparison between Isopropyl β-D-1-thiogalactopyranoside (IPTG) and quorum sensing used as the induction method. 

Besides the financial cost, the environmental impact of different cellulose production methods should also be taken into consideration. However, the focus of this analysis is only on the financial aspect. 

## IPTG versus Quorum Sensing

# References

Hungund B., Gupta, S. (2010) Production of Bacterial Cellulose from Enterobacter Amnigenus GH-1 Isolated From Rotten Apple. World Journal Microbiology and Biotechnology, 2010, Vol. 26, No. 10. Retrieved from https://link.springer.com/article/10.1007/s11274-010-0363-1      

Zargar A, Quan D, Bentley W (2016) Enhancing Intercellular Coordination: Rewiring Quorum Sensing Networks for Increased Protein Expression through Autonomous Induction. ACS Synth. Biol 2016, 5, 923-928
