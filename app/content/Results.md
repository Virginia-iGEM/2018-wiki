# Results

# Project Achievements

- Created a library of lsr operon and quorum sensing parts unique to the iGEM Registry
	- Created a functional AI-2 sensitive plasmid 
	- Created various functional T7 regulated plasmids 
- Characterized quorum activation trends of lsrK, ydgG, and luxS genes through measurement of sfGFP expression
- Developed of a functional model to predict the behavior of our synthetically optimized lsr operon
- Reduced the bimodality and variance of the population by increasing expression of YdgG and LsrK

# An AI-2 Sensitive Plasmid 
We were able to construct a plasmid that is induced in the presence of AI-2. The plasmid is known as the Synthetic Quorum Sensing Plasmid (pSQS) -- BBa_K2535019. This plasmid is controlled by an inducible promoter, pLsr, which is regulated by phosphorylated AI-2 (AI-2P). The plasmid was built and tested in the low copy vector pACYC. We were able to test the functionality of the pSQS by combining it with part BBa_I746909 (sfGFP regulated by a T7 promoter). Figure 1 shows percent of population fluorescence over time for BBa_K2535019 and BBa_I746909 transformed together into E. coli DH5ɑ cells. Data was collected using Flow Cytometry. The first data point was collected at OD600 = 0.4. This was time point t = 0 hours Samples were collected every hour for a total of 5 hours. Constitutively expressed sfGFP would produce a straight horizontal line since the number of cells being expressed would not change with the concentration of AI-2. Figure 1 shows that a quorum activation occurred a t = 0. This means a quorum activation occurred at OD600 of 0.4. At that cell density, the amount of sfGFP in the cell population was the greatest. Thus AI-2 was at the highest concentration, causing more T7 RNA polymerase to be created and transcribe the pT7 promoter controlling sfGFP. 

<figure>
	<img src="images/Wetlab/Results1.png" alt="Results">
	<figcaption>Figure 1: Percent of cells expressing sfGFP when transformed with pSQS and sfGFP block. </figcaption>
</figure>

The introduction of pSQS to the registry is vital because this modular part is able to activate the expression of T7 RNA polymerase in the presence of AI-2. This part can be used to control quorum activation of any gene added to a T7 promoter.

# T7 Regulated plasmids 

We able to run flow cytometry tests on parts BBa_K2535006 (LuxS-sfGFP), BBa_K2535010 (LsrK-sfGFP), BBa_K2535013 (YdgG-sfGFP), BBa_K2535015 (LsrK-LuxS-sfGFP), BBa_K2535020 (LuxS-YdgG-sfGFP), and BBa_K2535017 (LsrK-LuxS-YdgG-sfGFP). Each of the T7 regulated plasmids listed above were transformed into E. coli DH5ɑ cells along with BBa_K2535019 (pSQS).

## LsrK-sfGFP, LuxS-sfGFP, YdgG-sfGFP
We tested these parts, our single-gene T7 regulated plasmids, by measuring how much sfGFP was expressed when they were transformed with together with the pSQS. Data was collected using Flow Cytometry to measure the percent of cells expressing sfGFP. Data was collected starting at OD600 = 0.4. This was time point t = 0 hours. Samples were collected every hour for a total of 6 hours. Figure 2 shows the results of the flow cytometry run.

<figure>
	<img src="images/Wetlab/Results2.png" alt="Results">
	<figcaption>Figure 2: pSQS + LsrK/LuxS/YdgG-sfGFP percent sfGFP expression.</figcaption>
</figure>

LsrK and YdgG both expressed at similar rates and follow a similar quorum activation curve. These two curves match what our mathematical model predicted. Quorum activation peak occurs between t = 3 and t = 4, corresponding to our model prediction of quorum activation peak at 3.5 hrs. This shows that enhancing phosphorylation of AI-2 (lsrK) produces the same quorum activation curve as enhancing export of AI-2 out of the cell (ydgG). The quorum activation curve for lsrK also matches the curve that Dr. Zargar was able to produce at a similar quorum activation peak time of 3.75 hours. We therefore are able to to verify our model and produce a quorum activation curve for LsrK and YdgG genes.  The LuxS-sfGFP part seems not have reached any quorum activation through the run. The static expression of sfGFP in the LuxS strain suggests a problem with either the part, or ability of LuxS to affect quorum response on its own that we were not able to verify. We decided to further optimize the system by combining LsrK with YdgG and LuxS, combining LuxS with YdgG, and combining LsrK, LuxS, and YdgG all together. 

## Multi-gene T7 Regulated Plasmids

We ran flow cytometry tests on LsrK-LuxS-sfGFP and LuxS-YdgG-sfGFP. Flow cytometry data collected on LsrK-LuxS-sfGFP and LuxS-YdgG-sfGFP followed the same protocol and setup as that described above for single-gene T7 regulated plasmids. Figure 3 shows the results of the flow cytometry tests. 

<figure>
	<img src="images/Wetlab/Results3.png" alt="Results">
	<figcaption>Figure 3: pSQS + LsrK-LuxS-sfGFP and pSQS + LuxS-YdgG-sfGFP percent sfGFP expression</figcaption>
</figure>

From the graph on the left of Figure 3, we are able to see that when combing LuxS with LsrK, an interesting curve is produced. Peak quorum activation is reached at t = 4 but there is a low point in the quorum activation at t = 3. Extrapolating towards the left of t = 0, we predict that another peak quorum activation occurred at some state before OD600 of 0.4. Another interesting thing about the LsrK-LuxS-sfGFP graph is that percent sfGFP expression at t = 0 is higher than the percent sfGFP expression at t = 0 of the single-gene T7 regulated plasmids (Figure 1) graph. From extrapolation, this likely occurred because LuxS was able to synthesize AI-2 early on, resulting in more AI-2 present at t = 0. This AI-2 would then be immediately phosphorylated into AI-2P by the additional LsrK being produced. The result would be enhancing of the positive feedback of the system since AI-2P binds to the pLsr to activate the system. In the system containing only LsrK-sfGFP, AI-2 is phosphorylated immediately but relies only on the AI-2 produced by the wild type lsr operon. In the system containing only LuxS-sfGFP, we suspect that AI-2 is produced in excess but is rate limited at the phosphorylation step since it relies only on the kinase present in the wild type lsr operon. As a result, only LsrK-LuxS-sfGFP can effectively cause a quorum activation at an earlier time point. This is significant because LsrK-LuxS-sfGFP is an example of a system that is able to control the timing of quorum activation; more specifically, control the quorum activation based on the OD of the cells. This is a significant discovery we were able to make.

LuxS-YdgG-sfGFP (on the right of Figure 3) follows a similar quorum activation curve to that of LsrK-LuxS-sfGFP but does not have an early quorum activation. The curve reaches two quorum activation peaks. Trial 1 and 2 reach the first activation peak at different times, and if we extrapolate, we can see that another peak is being formed by the curves in both trials. This is an interesting trend in both graphs because it is shown that LuxS creates a quorum activation curve with multiple peaks. We are able to see an oscillating curve here which is a unique observation in quorum sensing. Testing across a broader time range is necessary to verify this oscillation without extrapolation. 

The next multi-gene T7 regulated plasmid tested was LsrK-YdgG-sfGFP transformed with the pSQS following the same procedure as above. The left side of Figure 4 shows the results of the flow cytometry test. We are able to see that without LuxS, we only see one quorum activation curve with no oscillation. Quorum activation also likely does not occur very early because there is no extra AI-2 present in the system at low ODs since no additional AI-2 can be synthesized from our system. This shows that LuxS does indeed cause some form of oscillation in the system that needs to be looked into more.

The final multi-gene T7 regulated plasmid we tested was LsrK-LuxS-YdgG-sfGFP. This construct is a culmination of all three of our genes. Based on the results shown above, this contruct’s sfGFP expression graph gave us insight into whether the LuxS dependent oscillation prediction is true or not. The right side of Figure 4 shows the flow cytometry results for pSQS + LsrK-LuxS-YdgG-sfGFP. Samples were prepared and collected the same way as above. The graph shows that the system reaches a quorum activation peak between t = 0 and t = 4. Unfortunately, due to time constraints, we were not able to predict the behavior of this construct because the model could not be built in time. One interesting thing about this graph is that there is no clear oscillation pattern shown. It is difficult extrapolate an oscillation trend here. Our model shows that YdgG tends to delay quorum activation, so when we combine YdgG with LsrK and LuxS, a delay can be seen. This likely occurred because YdgG delayed the quorum activating curve so we are only able to see the beginning rise of the curve in the system. We predict that this curve will reach quorum activation peak over time if data was collected for a longer period of time. The spike to the quorum activation peak in our other constructs occurs over a Δt of 1 hr; however, in this case, there is a more gradual trend to the quorum activation peak. This is also seen in the single-gene LuxS-YdgG system (Figure 3) where the quorum activation peak occurs with a Δt of 2 hours. This is evidence that YdgG causes a delay in the quorum activation peak. We ultimately show evidence that synthesis, phosphorylation, and export of AI-2 are able to control quorum activation based on the density of the bacterial population.

<figure>
	<img src="images/Wetlab/Results4.png" alt="Results">
	<figcaption>Figure 4: pSQS + LsrK-LuxS-YdgG-sfGFP and LsrK-YdgG-sfGFP percent sfGFP expression </figcaption>
</figure>

# Bimodality and Variance of GFP Expression

We analyzed our flow cytometry graphs of sfGFP fluorescence in detail in order compare our data to the predictions of our model. The sample flow cytometry diagram below represents all pSQS + LsrK bacterial cells expressing low/negative GFP (GFP-) at time t = 3 hours after OD 0.4. The y-axis represents side-scatter (SSC-H) and the x-axis represents FL1-H sfGFP, a flow parameter specifically describing the relative intensity of sfGFP fluorescence. Both axes are represented on a logarithmic scale.

<figure>
	<img src="images/Wetlab/Results5.jpg" alt="Results">
	<figcaption>Figure 5: Raw Sample of  sfGFP-, pSQS + LsrK Population Data Subdivided Into 20 Segments on FlowJo
 </figcaption>
</figure>

In our flow cytometry analysis software, an sfGFP- sample population was divided into 20 segments such that each segment represents the total number of cells expressing a certain level of sfGFP. We also divided the sfGFP expressing (sfGFP+) population into 20 segments, providing cell counts for various levels of sfGFP expression in the sfGFP+ population of our bacterial sample. 

The number of cells in each segment was then compiled into a histogram. Below are five particular histograms of interest (Figure 5, Figure 6, and Figure 7). These five histograms represents fluorescent cell counts at instances of peak quorum activation (time point listed in title). The two yellow bars in each sample represent the transition from sfGFP- to sfGFP+ based on negative control gating (discussed in Experiments page).

<figure>
	<img src="images/Wetlab/Results6.png" alt="Results">
	<figcaption>Figure 5: Raw Sample of  sfGFP-, pSQS + LsrK Population Data Subdivided Into 20 Segments on FlowJo
 </figcaption>
</figure>

Figure 5 shows that when LuxS is present, the variance in the sfGFP+ population is increased, compared to that of the populations represented in Figures 6 and 7. In Figure 5, the sfGFP- variances are decreased and the sfGFP+ variances are increased. LuxS’s AI-2 producing function is necessary for our system, but without either a phosphorylating LsrK nor an extracellular transporting YdgG protein, this rudimentary system does not reduce sfGFP+ variance as it cannot export phosphorylated AI-2 to actually activate quorum sensing in the population.

<figure>
	<img src="images/Wetlab/Results7.png" alt="Results">
	<figcaption>Figure 6: sfGFP Histograms for pSQS + LsrK-sfGFP t = 3 hours after OD 0.4  and pSQS + YdgG-sfGFP t = 4 hours after OD 0.4 </figcaption>
</figure>

Figure 6 shows that when LuxS is not present, the sfGFP+ variance in the data is decreased. When this variance is decreased, the bimodality of population decreases. We can see that both LsrK and YdgG help activate more cells in the population. By exporting more AI-2 out of the cell using YdgG, we are able to activate nearby cells, since the concentration of AI-2 outside the cells is higher. The native wild type lsr operon will then import AI-2. By upregulating the phosphorylation of AI-2, we able to activate the AI-2 sensitive promoter, so that more cells can be activated. When comparing the variance in Figure 5 to that in Figure 6, there is greater evidence that LuxS increases variation in the sfGFP+ population, validating our model. We are able to conclude that LuxS does not decrease bimodality but does optimize the quorum sensing system when in combination with other genes.

<figure>
	<img src="images/Wetlab/Results8.png" alt="Results">
	<figcaption>Figure 7: sfGFP Histogram for pSQS + LsrK-YdgG-sfGFP t = 3 hours after OD 0.4 </figcaption>
</figure>

Figure 7 displays data from a LsrK-YdgG-sfGFP plasmid transformed together with pSQS. It shows a similar trend to the individual LsrK-sfGFP and YdgG-sfGFP plasmid data in that the sfGFP+ bimodal distributions are favored. A decrease in sfGFP+ variance is observed while the sfGFP- cell count is greatly reduced. Through these results, we can see that a cell equipped with both additional LsrK kinase, as well as YdgG extracellular transporter is optimized to engage in quorum sensing. This is likely due to an increase in extracellular AI-2 concentration, as well as intracellular AI-2P to activate AI-2P sensitive promoters.

These results provide evidence of the completion of our project’s goal to control quorum sensing bimodality using a library of synthetic quorum sensing parts. More information on how this relates to our models and how the data validates the model can be found in the modeling section. 

# Future Work

There is plenty of potential in our research and findings to inspire future synthetic biology projects. These potential projects fall into three areas, further testing, system modification, and system expansion. 

The collection of more data samples over longer sampling periods would be an important aspect of further testing. More data of this nature would better characterize our system and lend credence to our claim that we created a system that controls the timing of quorum activation. Additionally, data collected over a greater number of time samples would allow better tracking of quorum activation trends, such as consistency in oscillation over time. Additional flow cytometry data using our system in the same chassis that Dr. Zargar used, E. coli K-12 W3110, would also be useful to better compare our data. To better compare sfGFP expression of the cells, rather than just the trends, additional testing using an image cytometer would be valuable. This testing would also eliminate the need for liberal and conservative gating of data, as autofluorescence could be distinguished from sfGFP fluorescence (refer to Experiments page for details).

Since increasing efficiency on protein production in biomanufacturing is the major goal of the system, a valuable modification of our current constructs would be the incorporation of a gene of biomanufacturing interest, rather than a simple reporter like sfGFP, into our T7 regulated plasmid. With this modification, a quantitative comparison could then be completed between amount of a protein of biomanufacturing interest being produced by our system and the same protein being produced by an existing expression system of microbial biomanufacturing. Another modification possible in future research is incorporating Dr. Zargar’s work on lsrACDB into our system. This would allow the analysis of trends caused by the combined effects of lsrACDB with LuxS and YdgG.

One example of an expansion to the project, would be the implementation of our Clonetegration design. We designed a version of our system to use genome integration, but due to time constraints, we were unable to begin construction. Integration of pSQS into the genome of a bacterial cell would create a new strain that is able to express any transformed T7 regulated plasmids according to quorum patterns. 

# Summary

We were not able to achieve our original goal of creating a more efficient system than what Dr. Zargar created. We were able to successfully replicate Dr. Zargar’s data on LsrK quorum activation. We were able produce a similar curve and reach peak quorum activation at a similar time. We were also able to validate the results of our model with our flow cytometry tests on the constructs. Our most significant achievement is bringing a functional AI-2 sensitive plasmid to the iGEM registry. This allows future teams to develop projects focused on quorum sensing without having to design an AI-2 sensitive plasmid. We were also able to reduce bimodality in our system using LsrK and YdgG. As predicted from our model, LuxS increased variance in the activated population and also increased bimodality. However, LuxS is still able to optimize the lsr operon system. We also successfully created a modular design where parts can be interchanged easily to test various modifications to natural quorum sensing systems. Our data is able to support the conclusion that we have created a system that is able to control the timing of quorum activation based on the population cell density.  We have created Quorus, a symphony of quorum sensing bacteria. Nonetheless, there is plenty more to design, test, and build in this subject.
