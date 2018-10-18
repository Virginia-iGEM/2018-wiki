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

<figure>
	<img src="/images/HumanPractices/papermaking.jpg" alt="PaperMaking">
	<figcaption> Figure 1: Some team members measuring out and diluting the kombucha solution onto the sheets.</figcaption>
</figure>

The 2018 Virginia iGEM team developed a close working relationship with a local microbial biomanufacturing company, Kombucha Biomaterials, LLC. Through a mentorship with an industry expert and working with them in creating Kombucha biofilm papers, the team decided to investigate the financial advantage Kombucha Biomaterials, LLC claims to hold over current state of the art in cellulose manufacturing.

Currently, most cellulose is produced through the traditional method of kraft pulping. Since the pulping process is quite complex, the team makes 2 assumptions to simplify the analysis. The first assumption is that the end product of kraft pulping has the same concentration of cellulose with that produced by microbial manufacturing. Secondly, we assume that all cellulose is the same, no matter from what it is made. These two assumptions make cellulose products produced by both kraft pulping and microbial manufacturing interchangeable. Table 1 shows the unit cost of kraft pulping and microbial manufacturing respectively.



<table style="width:100%" class="va-parts">
	<tr>
		<th></th>
		<th>Kraft Pulping</th> 
		<th>Microbio Manufacturing</th>
	</tr>
	<tr>
		<td>Cost per unit</td>
		<td>$1500~$2000/ton </td>
		<td> $2300/ton (2010, Hungund et al.)</td>
	</tr>
</table>

**Table 1**: The cost per unit for producing cellulose using kraft pulping and microbio manufacturing

We can see that the unit production cost of microbial manufacturing is slightly higher than that of kraft pulping. One potential reason for that, is the lack of information regarding large scale production of microbial cellulose. The microbial manufacturing unit production cost was derived from units of Yen/gram. Converting these units to $/ton, may have distorted the true large scale production cost of microbial manufacturing. **“Many studies have been conducted on creating a mass synthesis process for BC, which significantly reduces the production cost”** (Moniri et al.) Bacteria cellulose (BC) has several physical advantages over plant-based cellulose, such as a considerably higher crystallinity, water absorption capacity, and degree of polymerization. These characteristic properties, along with its biocompatibility, make it an attractive candidate for a broad range of applications in various fields, particularly with biomedical and biotechnology applications. 

As large-scale industrial production of BC is still not feasible, the advantages it holds over plant-based cellulose gives it a bright future. Once the efficiency of BC production is increased to a point where producing BC is cheaper than the state of the art, and is able to be produced on an industrial scale, it may completely replace existing cellulose production methods. 

Microbial biomanufacturing has less of an environmental impact than the kraft pulping method, since it does not consume as much water nor does it require the growing, tending, and harvesting of plant fibers. However, the focus of this analysis is primarily on the financial aspects of the two methods. Further analysis on the environmental impacts (i.e water use, air pollution, arable land use, etc.) of kraft and microbial will have to be done in order to analyze non-financial costs.

## IPTG versus Quorum Sensing

Quorus builds upon the work of Dr. Amin Zargar from the University of Maryland, who studied the effects of enhanced quorum sensing on induction of E. coli in his paper, “Enhancing Intercellular Coordination: Rewiring Quorum Sensing Networks for Increased Protein Expression through Autonomous Induction”(Zargar et al., 2016). Dr. Zargar states that his enhanced autoinducing system actually provides a financial advantage to the state of the art, synthetic induction, using Isopropyl β-D-1-thiogalactopyranoside (IPTG). Virginia iGEM quantitatively investigated the validity of his claim. We established a model for financial comparison of the quorum sensing based autoinduction versus IPTG induction. This model can be applied for any protein whose price and maximum IPTG-induced expression is known. Besides the potential economic savings, this model can also produce an estimate of the total and proportional benefit of the Quorus system over IPTG induction on a financial basis.

<a href="/Application.html">Here</a> is the model that we developed. 

### Model Limitations

Despite all the potential applications, there are still limitations to the model we created. As microbial manufacturing is a relatively new field, we found it difficult to find the production numbers of an active microbial biomanufacturing plant. We found greater success in research papers(Sivashanmugam et al., 2009) where all values were presented clearly and were taken through consistent methods but the production scale was on the level of 6E11 cells in a 50 mL solution, while a traditional biomanufacturing plant can operate with batch volumes of 20,000 L with cell densities of 10E6 cells/mL (Hughes & Hann, 2007). At such large production levels, the amount of IPTG needed to ensure induction may become a significant cost. Additionally, the cost of proteins was determined from popular protein suppliers, such as Sigma Aldrich, where bulk order prices were not immediately available.  Prices were often found in terms of micrograms or milligrams, while microbial manufacturers produce proteins in the realm of 3-6 grams per liter, and that in a batch of 20,000L there is between 60,000 - 120,000 grams of protein (Hughes & Hann, 2007). The price per protein would be lower in bulk, thus decreasing the percentage at which quorum sensing autoinduction must induce in order to be more profitable than synthetic IPTG induction.

### Discussion

It was found that in order for Quorum Sensing (QS) to be more profitable than IPTG, it would need to induce the cell culture at a percentage larger than or equal to IPTG. The reasoning behind this finding is because the cost of IPTG per cell is very small compared to the value and amount of protein produced, to the point that IPTG is practically a negligible cost. The research done by Dr. Zargar found that autoinduced E. coli expressed ~85% the amount of proteins that were expressed by IPTG induction. Zargar advocated for autoinduction because he believed the new method held a financial advantage over synthetic induction. yet this, as the analysis shows, is not the case. However, autoinduction still holds many other benefits over IPTG induction. With autoinduction, multiple inductions are able to be run in parallel, which leads to an overall increase in protein yields (Sweeney, n.d.). The OD600 values of cultures induced with autoinduction are around ~3x larger than those induced with IPTG meaning much higher cell concentration per batch. The self-inducing quorum sensing method also removes the need to constantly monitor OD600 and protein will still be expressed nonetheless.  Quorum sensing autoinduction has the potential to revolutionize the industry and make large-scale production possible for microbial biomanufacturing through its multiple advantages over synthetic induction.  The current limitation of the method is the price and the lower percentage induction when compared with IPTG. Virginia iGEM’s Quorus tackles the lower efficiency of induction through our project which will provide an improved alternative to standard autoinducing in the industry, potentially removing this limitation. Local microbial biomanufacturer, Shaun Moshasha, says that our research would help improve cellulose yields in his own company when asked about the possible implications Quorus could have on the industry. The price limitation will fall as more advancements are made in the field and the technology relevant to production becomes more readily available. Quorus’s more efficient autoinduction method provides a foundation for microbial biomanufacturing to overcome the aforementioned limitations and helps move the industry as a whole to begin large-scale production.

### Future Works

 
Future analysis on the advantages/disadvantages of quorum sensing induction compared to IPTG induction should explore larger scale productions. Since our analysis is on the singular batch level, it negates QS’s advantage of being able to be run in parallel. This type of analysis would provide helpful data on determining if QS is financially advantageous on a bigger scale as well as help quantify the differences in OD600 and protein expression of the two methods. Work can be done on increasing the efficiency of autoinduction to where it induces more cells than IPTG. The benefits of autoinduction on variance of the activation of a cell culture over time should also be explored. In the analysis we assumed that initial activation represents the consistent induction rate over all time, yet if the induction rate in heterogeneous populations actually varies over time, then initial induction is no longer a good indicator of the performance of both methods. A comparison of the variance of activation between the two induction methods would inform the model and help determine the validity of using the “initial induction,” assumption. If QS were to have reduced variance in comparison to IPTG then it is possible that the self-inducing method may be more consistent in its protein production over time, a benefit within itself in the microbial biomanufacturing industry.  To improve the model, work can be done to incorporate activation over time which would allow us to model protein expression over time and in turn provide insight on the activation behavior of heterogenous populations. Within the Quorus project, quorum sensing autoinduction was found to have an oscillating pattern of protein expression, so the development of a method of pulse production of protein could capitalize on this documented behavior and potentially over time increase the profit of an autoinducing system.

Quorum sensing-related engineering as a whole needs more development and more characterization, but the advantages it provides over existing methods give the technique potential to revolutionize microbial biomanufacturing.


# References

Hughes, B., & Hann, L. E. (2007). The Production of Biopharmaceuticals. In W.-H. Boehncke & H. H. Radeke (Eds.), Biologics in General Medicine (pp. 59–66). Berlin, Heidelberg: Springer Berlin Heidelberg. https://doi.org/10.1007/978-3-540-29018-6_7

Hungund B., Gupta, S. (2010) Production of Bacterial Cellulose from Enterobacter Amnigenus GH-1 Isolated From Rotten Apple. World Journal Microbiology and Biotechnology, 2010, Vol. 26, No. 10. Retrieved from https://link.springer.com/article/10.1007/s11274-010-0363-1      

Moniri, M., Boroumand Moghaddam, A., Azizi, S., Abdul Rahim, R., Bin Ariff, A., Zuhainis Saad, W., … Mohamad, R. (2017). Production and Status of Bacterial Cellulose in Biomedical Engineering. Nanomaterials, 7(9). https://doi.org/10.3390/nano7090257

Sivashanmugam, A., Murray, V., Cui, C., Zhang, Y., Wang, J., & Li, Q. (2009). Practical protocols for production of very high yields of recombinant proteins using Escherichia coli. Protein Science : A Publication of the Protein Society, 18(5), 936–948. https://doi.org/10.1002/pro.102

Sweeney, T. (n.d.). Auto-induction for  over expression in E. coli. Imperial College London. Retrieved from www3.imperial.ac.uk/pls/portallive/docs/1/15699698.PPT

Zargar A, Quan D, Bentley W (2016) Enhancing Intercellular Coordination: Rewiring Quorum Sensing Networks for Increased Protein Expression through Autonomous Induction. ACS Synth. Biol 2016, 5, 923-928
