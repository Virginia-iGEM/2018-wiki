# Quorum Activation Model

## Files

A zip file containing all of the Matlab code created for this model and figures can be found [here](http://2018.igem.org/wiki/images/1/18/T--Virginia--2018_Model.zip). Additionally, the GitHub repository containing the model can be found [here](https://github.com/Virginia-iGEM/2018-modeling). The repository has a more complete record of the model's history, but is also more complex as it was directly used for simulations on UVA's Rivanna HPC.

## Overview

Information on the effects of genetic modifications on population and cellular scale quorum sensing responses was limited during project development, even after consulting experts and literature. To address this deficiency, we developed a model incorporating intracellular and intercellular quorum sensing (QS) dynamics which allowed for the testing of specific genetic and environmental changes on a quorum sensitive population of cells.  The goal of developing our model was to provide a foundation for simulating QS populations with synthetic quorum responses and recombinant genes for auto-inductive expression. A model of this kind has not been produced before, as previous models have not gone beyond the level of wild-type quorum dynamics.

The intracellular half of the model relies on mass action kinetics to predict interactions between the lsr operon, the Quorus device, AI-2, and the surrounding medium. Incorporating this intracellular model on a cell-by-cell basis, we simulated an array of cells to capture the intercellular interactions and population dynamics that arise from this highly interconnected system.

Using this two-phase model to simulate a population of cells, we worked to establish and refine model parameters where information was lacking in literature. Through iterative sensitivity tests based on a cycle of prediction, modification, simulation and analysis, we were able to replicate the dynamic character of studied lsr quorum sensing systems while incorporating Quorus’ Synthetic Quorum Sensing response plasmid, pSQS.

Following these iterative sensitivity tests, we combinatorially modelled the effects of the Enhancement System using pairs of genes from the pool of LsrK, LsrACDB, LuxS, and YdgG. This was to enable an expanded understanding of our project when the resources available for testing the Enhancement System combinatorially were limited.

After refining and validating the design of our model in Simulation & Results Sections I and II, and exploring determining factors of QS activation characteristics in Sections III and IV, we tested the predictions of our model versus actual experimental data in Section V. From this last section, the model proved its predictive power in its ability to forecast the relative variance of QS activation in a population. 

The development and tuning of this computational tool, along with the implications of predictions already made by the model, will allow for more precise engineering of synthetic quorum sensing circuits and the construction of even more dynamically complex systems.

# Background

## Quorum Sensing and the lsr Operon

Quorum sensing (QS) is a system bacteria used to coordinate population based behaviors, such as the release of virulence factors and the formation of biofilms (Zargar et al. 2016). These types of behaviors are called quorum responses, and are only beneficial to a cell if others around it are engaging in the same behavior. For example, a population of cells all acting together can make an effective biofilm, but a single cell can not do much alone. Quorum responses are controlled by a class of molecules called autoinducers. Bacteria produce these molecules at low levels and export them into their environment until a threshold extracellular concentration reached. This concentration indicates that the population density is high enough for a quorum response to be appropriate. At this point, autoinducer importers bring the molecules into the cell where they activate a set of genes associated with promoting quorum responses. 

The QS system we are working with is the lsr operon, which is regulated by the autoinducer molecule called autoinducer-2 (AI-2) (Figure 1).

<figure>
	<img src="images/Modeling/Activation1.png" alt="Activation">
	<figcaption> Figure 1: The lsr operon feedback loop in a wild type bacterium. (Quan et al 2016) </figcaption>
</figure>

This process has many components that allow it to operate as a QS system. The operon can be broken up into five main sections and a bidirectional AI-2 sensitive promoter, pLsr. On one side of this promoter,  are the genes LsrR and LsrK. LsrR is a repressor of the operon (Quan et al. 2016). Two dimers of LsrR bind together and associate with an operator sequence to repress both sides of the promoter. LsrK is a kinase which phosphorylates AI-2 to phospho-AI-2 (AI2-P) (Zargar et al. 2016). AI2-P is the form of AI-2 that derepresses the operon by binding to LsrR and causing it to dissociate from pLsr, which permits transcription. On the other side of the operon are the genes LsrACDB and LasFG. LsrACDB is an AI-2 importer complex, and LsrFG is a set of enzymes which break down intracellular AI2-P. In the wild type, when the threshold extracellular AI-2 concentration is reached, AI-2 enters the cell and activates the lsr operon. This allows LsrACDB and LsrK to increase the uptake of extracellular AI-2 and phosphorylation of intracellular AI-2 to AI2-P, respectively, which activates the operon even further. This positive feedback loop is the quorum response, and is linked to the expression of quorum regulated genes. Once there is no more AI-2 to import, this activation is eventually shut off by the increased LsrR and LsrFG that repress the operon and take AI2-P out of the system. Three other genes are also important to the dynamics of the system. LuxS is an enzyme that catalyzes cellular metabolites to intracellular AI-2 (Gonzalez et al. 2006). YdgG is a transport protein that exports AI-2 from the cell (Herzberg et al. 2006). PTS is another transport protein that imports AI-2 into the cell. 

Previous research has shown that, in natural populations, small population heterogeneity can lead to bimodal activation of cells (Zargar et al. 2016, Quan et al. 2016). Because of the positive feedback dynamic of the operon, early activation of some cells causes them to uptake extracellular AI-2 quickly enough that others never get the chance to activate. It has also been shown that quorum activation can be linked to protein production to provide autonomous induction (Tsao et al. 2010). However, this bimodality means that only about 70% of cells are activated by a quorum response, decreasing the amount of potential protein produced (Zargar 2016). With our Synthetic Quorum Sensing response plasmid, pSQS, our project centers on reducing this bimodality and increasing the levels of activation in a quorum response to boost protein yields and provide higher quorum regulated control of genes of interest. 

A previous paper by Zargar et al. (2016) upregulated LsrACDB and LsrK to decrease bimodality and increase protein production. In this paper, a two plasmid system was used. The first plasmid was single copy, and included the LsrR gene, the pLsr promoter, and a gene for T7 RNA polymerase. This allowed the plasmid to have the same regulatory dynamics as the lsr operon. The second plasmid contained the genes to be upregulated under the control of a pT7 promoter, which requires T7 RNA polymerase for transcription. This second plasmid was of a higher copy, allowing for upregulation of the genes it controlled. We built our project off of this paper, and were interested in seeing how upregulating those genes (LsrACDB and LsrK), as well as LuxS and YdgG would impact the bimodality of activation levels in our own synthetic plasmid, pSQS. After talking to Dr. Zargar (see Integrated Human Practices) we decided to construct and test multiple combinations of these genes on a similar two plasmid system to what he used.

# Development

## Identifying the System and Scope of Model

For the first step in building the model, we had to clearly define our system and what the model should include. After some thought, and reviewing how past papers modeled the lsr operon, we decided that the abstract system in which we wanted to model quorum activation was a colony of cells in a Petri dish. This provided the following contexts for our model:
Cells with fixed location in two dimensional space
Medium considered to behave like water for diffusion 
AI-2 free to diffuse within the system
No growth, fixed number of cells (model starts at stationary phase where reproduction is slowed)
Bounded or unbounded in space (Dirichlet or Neumann boundary conditions, respectively)
Cells’ only interaction with the medium and each other is through AI-2 flux

## Defining Equations and Relationships

After we clearly defined the system, we were ready to begin developing the mathematical components of the model. There were three main types of interactions we needed to develop equations for:
Repression/Activation: LsrR repression of pLsr, T7 activation of pT7
Enzymatic reactions (transport, catalysis, and degradation)
Standard mass action reactions

For repression of the lsr operon by LsrR, we used the hill function model with cooperativity:

<figure>
	<img src="images/Modeling/Activation2.png" alt="Activation">
	<figcaption>Equation 1: Hill function model for repression of the lsr operon. </figcaption>
</figure>

where *[S]* is the concentration of the substrate (LsrR), Vmax is the maximum rate of transcription of the genes repressed by LsrR, n (cooperativity) is the number of repressors needed for repression (4 in the case of LsrR), and K is the repression coefficient (Stan 2014).

For activation of pT7 by T7 RNA polymerase, we also used the hill function model:

<figure>
	<img src="images/Modeling/Activation3.png" alt="Activation">
	<figcaption>Equation 2: Hill function model for activation of pT7 </figcaption>
</figure>

where *[S]* is the concentration of the substrate (T7), Vmax is the maximum rate of transcription of the genes activated by T7, n (cooperativity) is the number of activators needed for activation (1 in the case of T7), and K is the activation coefficient (Stan 2014). 

For the enzymatic reaction of LsrK, we were able to find better documentation of enzyme kinetics, so we used the standard form of the Michaelis-Menten equation:

<figure>
	<img src="images/Modeling/Activation4.png" alt="Activation">
	<figcaption>Equation 3: standard form of the Michaelis-Menten equation </figcaption>
</figure>

where *[P]* is the concentration of the product, kcat is the catalytic rate, *[B]* is the concentration of the enzyme, *[A]* is the concentration of the substrate, and KM is the *[A]* at half the maximum rate of reaction (Stan 2014).

For the enzymatic reaction of LsrFG as well as the transport reactions of LsrACDB and YdgG, we used the following reduction of the Michaelis-Menten equation:

<figure>
	<img src="images/Modeling/Activation5.png" alt="Activation">
	<figcaption>Equation 4: reduction of the Michaelis-Menten equation </figcaption>
</figure>

where k is the rate of the reaction (Stan 2014). In order to use this reduction, we made two assumptions:    
**Assumption 1**: LsrFG, LsrACDB, and YdgG reactions are at quasi-equilibrium (i.e. B << A)    
**Assumption 2**: [Substrate] for these reactions much less than Michaelis-Menten constant (i.e. A << Km)    

For the enzymatic reaction of LuxS, we used the equation

<figure>
	<img src="images/Modeling/Activation6.png" alt="Activation">
	<figcaption>Equation 5: enzymatic reaction of LuxS </figcaption>
</figure>

To do this, we had to make another assumption.   
**Assumption 3**: The concentration of the substrate (the metabolite S-ribosylhomocysteine) is much greater than the concentration of LuxS (i.e. kcat[A]/(KM+[A]) is some constant)

For all other reactions (translation, AI-2 binding to LsrR, etc.), the standard mass-action kinetic equation is used:

<figure>
	<img src="images/Modeling/Activation5.png" alt="Activation">
	<figcaption>Equation 4: standard mass-action kinetic equation is used </figcaption>
</figure>

For diffusion of AI-2 through the medium (which is represented as a 2D array), we used a numerical solution to the finite element method of diffusion approximation:

<figure>
	<img src="images/Modeling/Activation7.png" alt="Activation">
	<figcaption>Equation 6: finite element method of diffusion approximation </figcaption>
</figure>

where f(x,y) is a function that reports the concentration of AI-2 at that location in the array, and Δt is the change in time between timesteps in the model.

**Additional Assumptions**    
Our model incorporates several more assumptions aside from those already listed:    
**Assumption 4**: All reactions requiring ATP (LsrACDB and YdgG) are assumed to have it in excess (Graff 2013)    
**Assumption 5**: We did not include the AI-2 importer PTS into our model, and instead assumed that the refined import dynamics of LsrACDB and YdgG after sensitivity testing would make PTS unnecessary     

A list of all the equations used in our model can be found <a href="http://2018.igem.org/wiki/images/8/8d/T--Virginia--2018_ODE.pdf">here</a>.

## Parameter Searching

After we had established the set of equations we wanted to use to model our system, we had to start searching through literature to find values for our parameters and initial conditions. While it is always easier to have the correct values at the outset, this is not always possible. Often, not enough research has been done about a system for it to be easy or even possible to determine many of the parameters in any given model. Since we were having trouble finding some of our parameter values, we settled with finding a general order of magnitude for some, and left others to be entirely determined through sensitivity testing. We recommend that future teams begin moving on to set up sensitivity testing sooner rather than later, and prioritize finding parameters and initial conditions within some order of magnitude.

A table describing all of the parameter values and initial conditions used can be found <a href="http://2018.igem.org/wiki/images/b/b3/T--Virginia--2018_Parameter_Table.pdf">here</a>

## Choosing a Platform

As part of iGEM, we were given access to the SimBiology software package from Matlab. We were initially going to use this software to design our model, and kept working on constructing our system within SimBiology for around the first month and a half of summer. As an easy to learn and user-friendly platform, starting with SimBiology helped us conceptualize and visualize our system as well as gain some understanding of what kind of differential equations and interactions we would be using with our final model. Because we wanted to be able to quickly and carefully adjust many parameter values, run trials with different cell counts, and incorporate diffusion of AI-2 between cells, the model we were building required a more customizable platform. Therefore, we decided to choose Matlab as our software and language of choice for this model. We completed the project in Matlab, but used the insights into the system and conceptual idea for our model that we gained from SimBiology along the way. 

# Structure

After getting within an order of magnitude for most of our parameters, we were ready to construct the actual model and begin sensitivity testing. The structure of our model can be broken into three main parts.

## Population Simulation

This section holds an matrix of n cell and another of n “locations” to store the extracellular AI-2 relevant to each cell. The boundary conditions are also defined in this section, and can be either Dirilecht or Neumann. Dirilecht boundary conditions allow AI-2 to diffuse past the boundary of cells. This models an open system. Neumann boundary conditions keep AI-2 from diffusing away past the boundary of cells. This models a closed system. 

At every time step, this section makes a call to each of the other sections of the model. Simulation uses Cellular Dynamics to update the concentration of each variable for all cells, then uses Diffusion to update the AI-2 concentration outside of each cell 

## Cellular Dynamics

This section of the model contains the system of 23 interdependent differential equations which define how each of the concentrations of molecules in the cell change from one timestep to another. Each differential equation corresponds to a variable we have incorporated into our model. The differential equations can be quickly edited to incorporate pSQS enhancement and response edits to the system. These equations can be found here. 

## Diffusion

This section of the model contains the equation for a numerical solution to finite element diffusion. It defines how extracellular AI-2 moves from block to block through each time step

# Sensitivity Testing

After finishing the code for our model and populating the Diffusion.m and Cellular_Function.m files with our diffusion equation and cellular equations, respectively, we had a working model. However, when we ran the model using the parameter values we found searching through literature, we did not get the correct results or dynamics. However, this divergence from previous work (Quan et al. 2016) and experimental data was expected, since some of the parameter values were only broad approximations or completely unknown. To determine the correct value (or correct order of magnitude for most cases) of the unknown parameters, we designed an iterative process of sensitivity testing, keeping the **engineering design cycle** in mind when planning and analyzing each round of tests, as exemplified with bolded text. 

A sensitivity test is an analysis of how much impact changing a parameter will have on the results of a model. All of our tests were done without incorporating any synthetic changes into the model. We optimized the model’s parameters using these “wild type” runs because previous research provided expected results for them (Quan et al. 2016). For a description and graphic of the previous work we were trying to replicate, see Section I of results.

For our first round of tests, we ran the model with the initial parameter values, **studied the dynamics** of the runs, and **made hypotheses** about which parameters would need to be changed to drive the dynamics of the system toward that of previous work. Once we identified the parameters we suspected most impacted the results, we **developed a set of tests** to run, each of which changed only one or two variables so that we could attribute any changes in the dynamics to a single variable. 

For each subsequent round of sensitivity testing, we analyzed the results of the previous round and **compared it to the expected results**. If some parameter’s new value clearly brought the dynamics closer to what is expected, we made it the new default value for future tests. Then, we repeated the process of **designing tests** for new parameters, **analyzing the results** of these tests, **comparing them to previous research**, and **updating the default parameter values**. We repeated this iterative process of updating the model through sensitivity testing 10 times, until the **default values showed similar dynamics to that of previous research.** 

This successful model of the wild type made it possible to simulate the effects of any possible combination of sQS edits to the system.

# Simulations and Results

## Section I: Characterization

<h5>Characterization and Comparison of Quorum Sensing</h5>

In a 2016 study by Quan et al, the molecular dynamics of quorum activation in the Lsr operon were modeled in a system of differential equations. The results of this model are depicted in Figure 2 and illustrate the qualitative dynamics of quorum activation with normalized concentration curves of extracellular AI-2, phosphorylated AI-2 (AI2-P) and the gene induction of the lsr operon (lsrACDBFG). 

<figure>
	<img src="images/Modeling/Activation8.png" alt="Activation">
	<figcaption>Figure 2: “Numerical solution to system of ODEs revealing Lsr/AI-2 topology.” (Quan et al, 2016)</figcaption>
</figure>

In order to validate that our model of the sQS plasmid behaves in a way consistent with the dynamics of the lsr operon, we developed a similar simulation. In our simulation, what changed is that instead of the activation of the lsr regulatory sequence inducing expression of lsrACDBFG, the sQS plasmid expresses T7 RNA Polymerase. Figure 3 depicts our attempt to replicate the results of Quan et al in our sQS plasmid with T7RPol replacing lsrACDBFG.

<figure>
	<img src="images/Modeling/Activation9.png" alt="Activation">
	<figcaption>Figure 3: pSQS/lsr/AI-2 Topology</figcaption>
</figure>

In Figure 3, the characteristic curve of extracellular AI-2 is similar to that of Figure 2, with growth up to a time of activation followed by rapid elimination of AI-2 from the extracellular space. T7RPol behaves similarly to lsrACDB as well, growing rapidly at the time of activation and quickly approaching a stable, higher concentration. There is dissimilarity, though. AI2-P in Figure 3a is modal instead of sigmoidal as in Figure 2. The cause of this peaking is unknown, but in Figure 3b, when the values of AI2-P are truncated to eliminate the mode, a curve similar to that in Figure 2 of Quan et al can be seen underlying the mode. Once the peak of AI2-P passes, the concentration of AI2-P approaches a stable new concentration higher than the initial, which is consistent with the prediction. 

One other area of inconsistency between our model and that of Quan et al is the timing of activation. In our model the point activation, here defined as the point of peak extracellular AI-2, is at 190 minutes. In Figure 2, activation occurs at 275 minutes. This discrepancy could be attributed to the presence of additional lsr regulatory components from pSQS. However, when the copy number of pSQS is increased from single copy (n=1) to low copy (n=5), this point of activation shifts to almost exactly match that of Quan et al (See Figure 4).

While for the development of this model we were unable to obtain the code that produced Figure 2, our Quorum Activation Model would benefit from a comparison of the equations used for the model of Quan et al. The positive curvature of extracellular AI-2 concentration for time less than 275 min indicates that a different set of constants or equations were used for some AI-2 dynamics. While this test verifies that our model replicates the dynamics of another lsr-based QS model, there are particular disparities in the simulation topologies that warrant future investigation and refinement of our model design.

<figure>
	<img src="images/Modeling/Activation10.png" alt="Activation">
	<figcaption>Figure 4: pSQS/lsr/AI-2 Topology with Higher Copy Number</figcaption>
</figure>

In the simulation shown in Figure 4, the dynamics of AI2-P and extracellular AI-2 are nearly identical to in Figure 3. However, the time of activation is shifted to 280 minutes, within 2% of the time Quan et al predicted. However, at this copy number, T7RPol overshoots a stable concentration and begins to fall around 350 min. In this way, the single copy pSQS test remains more consistent with predicted results. This change in topology as a result of pSQS copy number has important implications for the exploration of activation by Quorus because a delay in activation can correspond to a change in sensitivity of sQS to population density.

## Section II: Validation 

<h5>Validation of Quorum-Sensitive Activation</h5>

To validate that activation in our model relied on external AI-2 accumulation and cellular cooperativity, and not individual self-activation, we simulated QS dynamics in a single cell. The cells were placed in a small virtual medium with the bounds one unit from the edges of the cell. Two different boundary conditions (BC) for AI-2 diffusion in the medium were simulated in compared for this test. These two BC were designed to simulate the behavior of a cell in a group of other quorum sensing cells versus when isolated in an AI-2 deficient solution.

The first applied Neumann BC, where the edges of the medium are insulated to AI-2 diffusion. This allows for the cooperative activation of an entire population to be simplified to a single cell, as AI-2 can accumulate in the isolated compartment as it would in a large colony. 

The second applied Dirichlet BC, where the edges of the medium are kept at zero concentration, and AI-2 is eliminated from the system as it diffuses away from the cell. This simulates how a cell would behave when in a large compartment with no other cells. Quorum activation should not be possible in this situation due to the inability of AI-2 to accumulate. 

<figure>
	<img src="images/Modeling/Activation11.png" alt="Activation">
	<figcaption>Figure 5: Comparison of Single Cell Activation Dynamics</figcaption>
</figure>

From the simulation of a single cell in isolation (Dirichlet BC) and in a group of other quorum sensing cells (Neumann BC), it is evident there is a significant decrease in measures of quorum response when the cell is in Isolation. Both the concentration of AI2-P and the total production of GFP, our protein of interest, are consistently higher in Group than Isolation.

In this simulation, activation is measured by the concentration of AI2-P in the cell, as it directly correlates with the activity of the lsr promoter region on both the operon and the sQS plasmid. The time of activation corresponds to the time of peak AI2-P concentration, as this is the point at which the cell responds with a proportional amount of protein expression. This can be seen by comparing the concentration of AI2-P in Figure 2 to the rate of change of GFP concentration in Figure 3 around the 300 minute  mark.

The steady-state, post-activation levels of AI2-P found at time greater than 400 min correspond to the total amount of GFP that will be produced before its synthesis rate equilibrates with its degradation rate. This maximal protein production is crucial in manufacturing because it corresponds to retrievable yield. When the cell is in Group, this steady-state concentration is approximately two times larger than when in Isolation. The total GFP expression has a similar relationship, further supporting the characteristic cooperativity found in our model.

There is still noticeably a problem with the model. Though significantly less than in true quorum response, the cell in Isolation still produces protein at 30% of Group due to the accumulation of AI2-P. This indicates that while our Quorum Activation Model captures some of the cooperative behavior found in quorum sensing, some fraction of the observed quorum response will simply be due to the self-induction of a single cell. Potential causes of this problem and ways future iterations of this model can be improved to address it will be discussed in “Limitations and Future Work.”

## Section III: pSQS Copy Number

<h5>Investigation of sQS Plasmid Copy Number and Leaky Expression</h5>

When first designing our Synthetic Quorum Response plasmid, there was concern over the potential leaky expression if it were put in a mid to high copy backbone. In previous designs of plasmids similar to the sQS plasmid (pSQS), chiefly its predecessor pCT6, the backbone has been single copy to avoid AI-2 independent self-activation (Zargar). This reasoning arises from the logic that fewer pLsr binding sites, from less pCT6, mean a higher ratio of LsrR protein to its operator binding site and an overall more reliable OFF state. The justification for avoiding a higher copy number of pSQS is that it would cause activation to occur earlier and less cooperatively.

Because the iGEM Registry does not contain a single copy backbone, our system had to be designed using low to mid copy vectors. To predict potential effects of sQS plasmid copy number, the unenhanced pSQS-GFP system was simulated for three different copy numbers, single (n = 1), low (n = 5) and high (n = 20). The results of these simulations are as follows. 

<figure>
	<img src="images/Modeling/Activation12.png" alt="Activation">
	<figcaption>Figure 6: Effect of pSQS Copy Number on Two Measures of Activation</figcaption>
</figure>

From the comparative AI2-P accumulation and the T7 RNA Polymerase (T7RPol) expression it induces, it is evident that the copy number of pSQS affects dynamics of activation. Specifically, the level and time of activation increase as the copy number increases. From the single copy pSQS to the high copy pSQS, there is a 100 minute increase in the time of activation, as measured by the time of peak AI2-P concentration. In Figure 3a there is also a noticeable difference in the concentration of AI2-P in the steady state (time greater than 400 min). This correlates to the results in Figure 3b, where the relative levels of AI2-P are mirrored in the relative levels of T7RPol in steady state.

The results of this simulation call into question whether a high copy number indeed leads to increased leakage of pSQS activation and subsequent T7 RNA Polymerase expression. In fact, due to the higher peak levels of AI2-P and 100 minute delay in activation, there is evidence that a higher copy number increases synchrony and magnitude of activation in the population. Due to the delay, higher copy number could potentially reinforce OFF state behavior for higher levels of AI2-P outside the cell.

This begs for experimental validation. A simple set of  pSQS + pT7-sfGFP transformed cells, with pSQS copy number as the independent variable and pT7-sfGFP on a high copy backbone could be analyzed with flow cytometry. The results from an experiment of this kind would further validate the conclusions of this simulation.

## Section IV: Combinatorial Tests

<h5>Exploring the Quorus Enhancement System</h5>

In this section, a combinatorial approach is taken to the design of the Quorus Enhancement System. When we discussed our project with Dr. Amin Zargar, whose work we used as the foundation of our project, he suggested performing these tests experimentally. Due to time constraints, not all of these combinations could be constructed and tested. As a result, this model provides insight into the future design of the Quorus Enhancement and Response System.

The key population characteristics we used as bases for comparison between combinations were the average GFP accumulation per cell after 600 minutes, the standard deviation of activation as measured by AI2-P concentration, and the time to activation as measured by the time of peak AI2-P concentration. 

<figure>
	<img src="images/Modeling/Activation13.png" alt="Activation">
	<figcaption>Figure 7: Mean GFP Accumulation per Cell at 600 minutes (in μM of GFP)</figcaption>
</figure>

Figure 7 above is a table that details the total GFP expression for different combinations of AI-2 regulating genes on the Enhancement System (ES) plasmid. The color of each block reflects its value versus the control system (None,None). The simulation suggests that **LuxS is the most beneficial to protein production**, as it more than doubles the expression of the empty Enhancement System (None and None). Combining LuxS and LsrK genes in the ES not only increases the rate of AI-2 production in the cytoplasm but increases the concentration of LsrK protein available to convert that AI-2 to AI2-P.

A discrepancy between the model above and known experimental data is in the incorporation of LsrACDB. In Zargar et al (2016), incorporating LsrACDB improved overall induction levels of a system with pCT6 as its synthetic quorum response. What is consistent is that LsrK results in higher 

<figure>
	<img src="images/Modeling/Activation14.png" alt="Activation">
	<figcaption>Figure 8: Standard Deviation of Peak Activation Among Cells (in μM of AI2-P)</figcaption>
</figure>

Figure 8 above is a table that details the peak standard deviation of activation. As in other parts of this project, activation is operationalized in the concentration of AI2-P, so the units of each block are micromolar of AI2-P in the cell. A red color shift in a block indicates the standard deviation increase from control. Green color shift indicates a decrease. **YdgG significantly decreases activation variance whenever present.** However, **LuxS significantly increases variance of activation**. As predicted in a study by Zargar et al. (2016), **the inclusion of LsrK decreases variance compared to unmodified quorum sensing**, though not as much as by the inclusion of YdgG.

Comparing the results from Figures 7 and 8, and balancing the costs of low expression and activation heterogeneity, **the model suggests that LuxS and YdgG are the most effective combination to be incorporated into the Enhancement System**

However, another important aspect of the Enhancement System is the population density at which activation occurs. Manipulating how cells respond to different concentrations of extracellular AI-2 affects how they will respond to growth and AI-2 accumulation. As shown in Results, modifying the Enhancement System results in a shift of the timing, and population density, of initial quorum activation. As a result, the following table enumerates the time of activation relative to unmodified sQS response.

<figure>
	<img src="images/Modeling/Activation15.png" alt="Activation">
	<figcaption>Figure 9: Shift of Activation Time from pSQS Quorum Response (in Minutes)</figcaption>
</figure>

Orange block coloring corresponds to a negative change, where activation happens earlier. Green activation corresponds to positive change and a delay in activation. **YdgG delays quorum activation** in both the case of being alone and with LuxS. However, when YdgG is combined with LsrK, the activation is significantly earlier. In fact, **LsrK causes quorum activation to be significantly earlier** whenever it is incorporated into the Enhancement System. This likely means the incorporation of LsrK enables activation at lower extracellular AI-2 concentrations and corresponding lower population densities.

This exploration of the dynamics of the Quorus Enhancement System elucidate the dimensions of control that can be exerted over a quorum sensing population. In Figures 7 and 8, the factors directly related to manufacturing, mean and homogeneity of induction, are found to be manipulable by selecting certain pairs of genes from the Modular T7-Regulated Library of parts. Additionally, the sensitivity of quorum response can be modulated from the natural value by similar pairings, as shown in Figure 9.

## Section V: Experimental Validation

<h5>Comparison to Experimental Results</h5>

Our model of quorum-sensing based induction produced many predictions of experimental behavior. Figures 7 through 9 from Section IV contain  The strongest agreement between experimental results and our model predictions is in our predictions from Figure 8: Standard Deviation of Peak Activation Among Cells. Using our population model of an array of quorum sensing cells, we computed the variance of activation levels among the cells. These measures of activation variance, and consequently standard deviation, provided comparative predictions for how different Enhancement System variants might affect population activation distributions.

<figure>
	<img src="images/Modeling/Activation16.png" alt="Activation">
	<figcaption>Figure 10: Activation Distributions of Enhancement System Variants</figcaption>
</figure>

The figure above depicts the population activation profile histograms for six variants of the induction system. The yellow bars indicate the division between GFP positive and GFP positive fluorescence readings. The y-axis is cell count and the x-axis is the FL1-H GFP level from flow cytometry. FL1-H GFP is the measure of cellular activation for this section. The sample for a given histogram was taken directly after quorum activation, indicated by a significant increase in the average FL1-H GFP level from the prior sample. Because these samples are taken directly post-activation, they can be related to the activation-characterizing results of Section IV.  In these results, the control condition in Figures 7-9 of (None, None) is represented by Figure 10a, which contains only pSQS and pT7-sfGFP-terminator.

Based on the results of Section IV, specifically Figure 8, our model predicts that the incorporation of LuxS tends to significantly increase the spread of activation. The greatest predicted standard deviation of activation is approximately twice that of the control and occurs when LuxS and LsrK are put together. Analyzing the graphs above and estimating relative standard deviation as full-width-at-half-max (FWHM) while ignoring the lowest mode, it is apparent that experimental results agree with this prediction. Figure 10e, pSQS with LuxS and LsrK, not only corresponds to the population with the greatest spread of activation, but also the distribution with greatest number of uninduced cells (lowest bin has count of ~5000 cells). This not only suggests the introduction of more variance with the incorporation of LuxS, but the creation of a more bimodally or multimodally activated population. **In both experiment and model, activation variance is greatest when LuxS and LsrK are combined in the Enhancement System**. This agreement reinforces the predictive power of our model. 

The tests in Figure 8 also predict that the variance brought about by LuxS can be counteracted and eliminated by the inclusion of YdgG. Figure 10f depicts the activation profile of this system. While the FWHM of this system is still larger than the control (Figure 10a) there is still a reduction of FWHM by the incorporation of YdgG compared to LuxS without YdgG in Figure 10e. From this we see that **the incorporation of YdgG is associated with reduced activation variance.**

This method of analysis, using the FWHM of population activation histograms, is limited, as the resolution of the bins does not allow for quantitative comparison of the LuxS-excluding Figures 10a through 10d. While each of these figures depicts the same mean within the positively produced cells, there are differences among them that agree with computational predictions. According to the predictions of Section IV, LsrK (Figure 10b), YdgG (Figure 10c), and LsrK+YdgG (Figure 10d) trials should have lower levels of activation variance than the control (Figure 10a). While this prediction is not supported in the variance within the positively expressed cells, but there is a reduction in overall population variance and bimodality. The cell count in the lowest bin (~0% induction) is ~4250 for the control, but with the incorporation of LsrK and/or YdgG, the count of the lowest bin decreases to ~2000. This represents a significant reduction of both total population variance and bimodality. From this, we see that experimental and computational methods agree that **incorporating LsrK and/or YdgG is effective in decreasing variance in population activation and combating bimodal activation characteristics.**

# Future Work

Many of the physical and mathematical assumptions made in this model’s development limit its validity and predictive power. One such assumption is that there is no cellular growth in the system. Although QS activation puts a colony in steady state where the rate of growth is greatly reduced, both computational and experimental data indicate that there can be significant variance in this activation within a population. Because of this, certain portions of the population can maintain their rate of growth and change the proportional activation of the group over time. This concept is explored in our Growth and Heterogeneity(link) Model, which remains limited in its predictive ability as it remains highly conceptual. The incorporation of growth dynamics into the Quorum Activation Model would allow for it to bridge into the conceptual and predictive area explored by the Growth Model. The result of this would greatly expand the capability and applicability of the Quorum Activation Model by allowing it to capture the importance of variance reduction and bimodality elimination. It is possible that the thorough development of this extended model the predictive limitations of the Financial Model(link) could be improved by defining in greater detail the dynamics of QS autoinduction over the longer timescales characteristic of biomanufacturing.
Another set of assumptions limiting the scope of the model relates to enzyme kinetics. The first of these is that the concentration of enzyme substrates are always significantly less than their respective Michaelis-Menten constant. The second is that the concentration of s-ribosylhomocysteine is constant, and the rate of AI-2 synthesis is linearly dependent on the concentration of LuxS. The limitations of these assumptions are evident in Figure 5 and Figure 7. In Figure 5, it is evident that there is quorum-independent activation of the cell in Isolation. This is likely from the substrate catalysis rate lacking the typical sigmoidal curve of Michaelis-Menten kinetics. In Figure 7, the GFP expression is likely overestimated by the model when LuxS is incorporated into the Enhancement System. This stems from the fact that, if s-ribosylhomocysteine where more realistically modeled as not being held constant, the rate of AI-2 production as LuxS concentration increases would appear more sigmoidal. This would put a ceiling on the synthesis rate on AI-2 and reduce the likelihood of unrealistic outcomes of simulations involving LuxS in the Enhancement System.

# Citations

Herzberg M, Kaye I, Peti W, Wood T (2006) YdgG (TqsA) Controls Biofilm Formation in Escherichia coli K-12 through Autoinducer 2 Transport. J Bacteriol. 2006 Jan; 188(2): 587–598.

G.-B. Stan. (2014). Modelling in Biology. [Online]. Available:
http://www.bg.ic.ac.uk/research/g.stan/2010_Course_MiB_handouts.pdf

Gonzalez J, Neshavan N (2006). Messing with Bacterial Quorum Sensing. Microbiology and Molecular Biology Reviews 70, 859-875.

Graff, Steven. “A Mathematical Model to Study the Role of the Lsr Intergenic Region in Mediation of Autoinducer-2 Quorum Sensing in Escherichia Coli” University of Maryland, 2013.

Graff, Steven M., and William E. Bentley. “Mathematical Model of LsrR-Binding and Derepression in Escherichia Coli K12.” Journal of Bioinformatics and Computational Biology, vol. 15, no. 01, 2017, p. 1650039., doi:10.1142/s0219720016500396.

Tropini, Carolina. Modeling Diffusion Equations... A Simple Tutorial. 2008, carolina.tropini.org/assets/files/Diffusion_Equation_Tutorial.pdf.

Tsao, C.-Y., Hooshangi, S., Wu, H.-C., Valdes, J. J., and Bentley, W. E. (2010) Autonomous induction of recombinant proteins by minimally rewiring native quorum sensing regulon of E. coli Metab. Eng. 12, 291– 297DOI: 10.1016/j.ymben.2010.01.002

Quan, D. N., Tsao, C.-Y., Wu, H. C., and Bentley, W. E. (2016) Quorum sensing desynchronization leads to bimodality and patterned
behaviors. PLoS Comp. Biol., DOI: 10.137/journal/pcbi.1004781.

Zargar A, Quan D, Bentley W (2016)  Enhancing Intercellular Coordination: Rewiring Quorum Sensing Networks for Increased Protein Expression through Autonomous Induction. ACS Synth. Biol 2016, 5,  923-928

