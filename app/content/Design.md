# Design 

# What is quorum sensing?
 
Quorum sensing is the mechanism bacteria use to communicate cell population density to each other. Many bacteria constantly produce and export a molecule called an autoinducer. If a bacterial strain produces an autoinducer, the total concentration of that autoinducer in the extracellular environment will increase as the population density of the bacteria increases. Bacteria are constantly monitoring autoinducer concentration in the environment, and can detect when the concentration exceeds a certain threshold (which indicates that the population density exceeds a threshold). This triggers responses such as biofilm formation, luminescence, or production of virulence factors on a population wide scale; that is, the population induces itself based on the concentration of the autoinducer made, without input of stimuli from outside the system.

If the population density of the bacteria is not high enough, any autoinducer produced will diffuse away from the bacteria faster than it accumulates, preventing autoinducer concentration from reaching the threshold, and not triggering a population-dependent response from the bacteria.
    
<figure>
	<img src="images/Wetlab/Design1.jpg" alt="Activation">
	<figcaption>Figure 0: Autoinducer diagram.</figcaption>
</figure>
   
See our video <a href="http://2018.igem.org/wiki/images/0/0d/T--Virginia--2018_quorum_sensing_v1.webm" target="_blank">"Quorum Sensing: A Brief Introduction on Quorum Sensing"</a> to learn more.
 
## Quorum sensing in E. coli
 
Like many other bacteria, *E. coli* use quorum sensing to determine population density and respond to high density by producing biofilms or virulence factors. The autoinducer used by E. coli and some other bacterial strains is called Autoinducer-2 (AI-2).

The AI-2 quorum sensing pathway of *E. coli* is regulated by the following genes: *lsrACDB* (which encodes four different proteins that are expressed and work together), *lsrF*, *lsrG*, *lsrK*, *lsrR*, *luxS* and *ydgG*. *lsrACDB*, *lsrF*, *lsrG*, *lsrK*, and *lsrR* are all adjacent to one another, as shown below, and affect each other’s transcription rate; *luxS* and *ydgG* are distant and their transcription is unaffected by other Lsr proteins.

<figure>
	<img src="images/Wetlab/Design2.jpg" alt="Activation">
	<figcaption>Figure 1: The lsr operon and related genes. Details about each part are below.</figcaption>
</figure>

First, (1) the LuxS protein uses precursor molecules (omitted in figure) to produce the AI-2 molecule. (2) The AI-2 is then exported through YdgG, a transmembrane transport protein. Exported AI-2 accumulates outside the cell, and upon reaching a certain concentration, (3) is imported through a different transmembrane transport protein, LsrACDB. Import can happen in a different cell from the one that exported the AI-2 originally. (4) The imported AI-2 is then phosphorylated by LsrK kinase, converting it into AI-2P. (4.5) AI-2P can then inhibit the binding of LsrR, a repressor that inhibits the transcription of *lsrACDB*. Since LsrACDB imports AI-2, whose phosphorylated form inhibits repressor LsrR, the expression of LsrACDB creates a positive feedback loop. That is, the expression of LsrACDB accelerates the import of AI-2, indirectly allowing more LsrACDB to be produced, and creating a positive feedback loop. The positive feedback loop goes on until there is insufficient AI-2 to import and (5) the AI-2 already imported are degraded by LsrF and LsrG, letting LsrR inhibit pLsr again (Xavier & Bassler, 2005).

# The State of the Art, which we are improving upon

In a 2016 paper, Dr. Zargar, Quan, and Bentley recognized a problem with E. coli quorum sensing; when *E. coli* cells start importing AI-2, not all of them start that process at the exact same time, some cells being slower than others. So by the time LsrACDB expression is activated and the slower cells seriously begin importing the AI-2, the faster cells have already imported most of the AI-2 in the extracellular environment and there is very little AI-2 left for slower cells to import. This causes part of the population of E. coli to be effectively blind to high AI-2 concentration, and they will not be activated by quorum sensing nor respond to high cell density like all the other cells do. Zargar et al found that due to such reason, wild type bacteria population has only about 70% of its population activated by autoinduction with AI-2 (Zargar, Quan, & Bentley, 2016).

To increase the percentage of population that is activated by autoinduction, they manipulated two different genes in the *lsr* pathway (which are part of what we manipulate later on) inserting a synthetic feedback loop where even more LsrACDB or LsrK is produced along with the natural feedback loop of *lsr* operon. LsrACDB and LsrK were chosen because LsrACDB are the primary AI-2 intake proteins and LsrK is the kinase that phosphorylates AI-2 to activate them. 
   
<figure>
	<img src="images/Wetlab/Design3.png" alt="Activation">
	<figcaption>Figure 2: A figure by Zargar et al (2016). (A) Depiction of E. coli quorum sensing system without modifications to the feedback loop. The only modification is the addition of an AI-2 sensitive plasmid (pCT6) and sfGFP gene (in pET plasmid) sensitive to pCT6 activation. This is a representation of the wild type quorum sensing system. (B) E. coli quorum sensing system with modifications to the feedback loop. pET plasmid has in it either lsrK or lsrACDB gene in addition to the sfGFP gene.</figcaption>
</figure>

To make the synthetic feedback loop, Zargar et al added pCT6 plasmid, an AI-2 induced expresser of T7RNA polymerase, into E. coli because the native *lsrACDB* promoter is weak and does not transcribe well enough to yield observable results; having pCT6 would amplify the AI-2 quorum sensing signal by producing T7RNA polymerase when intracellular AI-2 level is high, while T7RNA polymerase in turn activates the GFP gene in another synthetic plasmid, pET, making the increase in AI-2 level observable. Then they added onto the pET plasmid either lsrACDB or lsrK. The added gene in pET was attached to T7 promoter, so they transcribe not when LsrR is inhibited but rather when T7RNA polymerase is produced, which ultimately means the same thing, that AI-2 is imported by the cell. The addition of the synthetic loop produced additional LsrACDB or LsrK along with the native pathway, which led to increased rate of AI-2 intake in the cells.

By incorporating the pCT6 and enhanced pET plasmid, Zargar et al were able to increase the percentage of cells being activated by auto-induction from the wild type’s 70% to 90% for enhanced LsrK and 94% for enhanced LsrACDB feedback system. Also, not only did the percentage of cells that were activated by autoinduction increase, but the mean fluorescence intensity for the enhanced cells were 1.6 times that of control cells. Zargar et al credit this increase in percentage of cells being auto-induced and increase in mean fluorescence to the decrease in heterogeneity(bimodality of population) in the AI-2 intake process; because the cells were designed to have faster AI-2 uptake rate, more cells could import AI-2 in time to be auto-induced, while less cells were too slow importing AI-2 and failed to be auto-induced. Thus, bacteria were more consistently being auto-induced as they should.

<figure>
	<img src="images/Wetlab/Design4.png" alt="Activation">
	<figcaption>Figure 3: From a figure by Zargar et al (2016). (C) shows that the fluorescent population of enhanced E. coli is up to 20% greater than that of control, and (D) shows that fluorescent intensity of enhanced E. coli is up to 1.6 times that of control cells.</figcaption>
</figure>

## What problem are we trying to solve?

Upon coming across Zargar et al’s paper, we thought of applying his work to revolutionize biomanufacturing.

Today’s biomanufacturing involves the use of recombinant DNA encoding for the wanted product in combination with inducers as either activators or repressors. In the case of insulin, a ubiquitous product produced and sold universally, IPTG is used as an activator. IPTG is added to fully grown bacterial cultures to activate and start transcription of recombinant DNA in bacteria. Another common method to produce insulin is using tryptophan as a repressor. Tryptophan is constantly added to bacterial culture while it is growing to repress the recombinant DNA until the culture is fully grown; when the bacteria culture reaches full growth, no more tryptophan is added so that bacteria degrade all the tryptophan present and de-repress the gene of interest in the recombinant DNA. In both cases, the addition of IPTG/halt of addition of tryptophan is done only when the bacteria culture is fully grown, because production of the wanted product is proportional to cell density and premature production stops cell growth. (Ladisch & Kohlmann, 1982) A problem with this method of biomanufacturing is that inducers are costly; IPTG costs $305 per 100g (Seller: P212121. Product ID: GB-I0920-100G), and while tryptophan costs less ($105 per 100g. Seller: Sigma-Aldrich. Product ID: T0254-L-Tryptophan), much greater amount of it is needed because it must be constantly added onto the bacterial culture until bacterial population reaches the ideal level.

A potential solution to expensive inducers is quorum sensing. If a gene is linked to quorum sensing, then it will not be expressed until the bacteria have grown to a certain population density, so the gene causes no strain involved in bacterial growth. On the other hand, once the bacteria have grown enough, they will auto-induce themselves to express the gene, not requiring the use of any inducers. If bacteria are designed to produce based on quorum signaling, then one has to worry neither about growth rate nor cost of inducers. The only concern is efficiency, since not all bacteria in a population will be activated by quorum signaling, but efficiency has been improved through Zargar’s research decreasing the heterogeneity of AI-2 intake and greatly increasing the percentage of bacteria that are sensitive to AI-2.

Therefore, the goal of our project is to utilize and improve upon Zargar et al’s enhanced quorum sensing system and apply it to the biomanufacturing industry. We incorporated new genes into Zargar’s system that will be helpful to the quorum sensing system and developing multiple combinations of them to use in concert with an AI-2 sensitive plasmid, so that heterogeneity further decreases and the % of cells activated by auto-induction increases closer to 100%.

# A Quorus Design 
We extensively used the engineering design method to effectively construct and test our various Quorum Sensing parts. We followed the following process.
1) Define a Problem           
2) Background Research          
3) Constraints/Design Requirements           
4) Conceptualize Solutions          
5) Consult Experts          
6) Select a Solution           
7) Detailed Design/Plan          
8) Implementation           
9) Validation           
10) Communicate           
11) Iterate  

We designed our constructs and methodology based on the advice we received from Dr. Zargar and various other advisors at University of Virginia. Our problem is constrained to decreasing the heterogeneity that occurs among E. coli when they import AI-2. We want as many cells as possible to be expressing the gene of interest (in our case sfGFP) and eliminate as much as possible the group of cells not expressing the gene of interest because they had insufficient AI-2 available for them to import. Our project is divided into two main design goals similar to Zargar et al’s work: Design an AI-2 sensitive plasmid and design various iterations of T7 regulated plasmids. 

## AI-2 Sensitive Plasmid/pSQS

Our AI-2 sensitive plasmid or Synthetic Quorum Sensing Plasmid (pSQS) is controlled by an inducible promoter sensitive to AI-2. Figure 4 shows the plasmid. The promoter is called pLsr. pLsr works concurrently with LsrR. Dimers of LsrR bind to and repress this promoter. However, AI-2P can bind to these LsrR dimers and cause them to dissociate, de-repressing the promoter. Because the expression of this plasmid produces LsrR, which represses the promoter pLsr, this system is self regulating (Basseler et al 2001). We added a gene that encodes T7 RNA polymerase to the plasmid also so that when AI-2 is present, T7 is transcribed. This T7 is used to activate T7 promoters (pT7) in the T7 regulated plasmids.

<figure>
	<img src="images/Wetlab/sPQS.png" alt="Activation">
	<figcaption>Figure 4: Synthetic Quorum Sensing Plasmid (pSQS). </figcaption>
</figure>

pSQS was built using New England Biolabs’ Golden Gate assembly. It was important to build this plasmid in a low or single copy plasmid.  pSQS is built in a low copy vector in order to minimize premature production of T7 RNA polymerase due to any leakiness of the AI-2 sensitive promoter. We decided to use the low copy plasmid pACYC184 because it has a copy number around 5, has tetracycline resistance which will be useful for double transformations with other resistance plasmids, and is readily available from the American Type Culture Collection. pACYC184 was constructed by Chang and Cohen in 1978 (Chang, 1978). We would’ve ideally liked to built the plasmid in a single copy backbone. We initially tried to do this but had great difficulty doing so due to incredibly low copy number and the shear size of the plasmid (~10kb). We would’ve liked to use an IGEM low copy backbone however after discussion with students at the Mid-Atlantic Meetup at the University of Maryland, it was suggested no to use IGEM low copy backbones as they are not reliable to be low copy. For future research, it is important that IGEM adopts a reliable low copy and single copy backbone to its registry. 

## T7 Regulated Plasmids

Our T7 regulated plasmids are used to help optimize the efficiency of the lsr Operon in relation to its wild-type process. In our project, the gene of interest to produce is sfGFP so all of the T7 regulated parts will end up producing sfGFP. The T7 regulated plasmids are focused around three main genes: *lsrK*, *luxS*, and *ydgG*. The plasmids are regulated by pT7. 

LsrK is a kinase that phosphorylates AI-2 so that it can be turned into AI-2P (Basseler et al 2001). LsrK is necessary because AI-2P is what binds to LsrR to inhibit the transcription of the system when there is no AI-2 present. 

Based on our research, we were able to find two unique genes that help optimize the lsr operon: *luxS* and *ydgG*. LuxS is a protein that synthesizes AI-2 intracellularly by cleaving the precursor molecule DPD (Gonzalez et al 2006). YdgG is a transmembrane protein that exports AI-2 outside of the cell (Herzberg et al 2006). Based on these two processes, we realized that we could solve the heterogeneity problem by increasing the amount of AI-2 outside the cell by using YdgG. This would increase the extracellular AI-2 concentration so that more cells could be activated. However, we do not want the amount of AI-2 inside the cell to be depleted due to extra YdgG produced, so we realized that we also need extra LuxS to produce more AI-2 inside the cell. We originally decided to also implement LsrACDB, a gene vital in Zargar et al’s system, which would import AI-2 from outside the cell. After having a discussion with Dr. Zargar, he suggested that LsrACDB is not necessary since LuxS is already producing AI-2 inside the cell so there would be no need to import more AI-2. We took his advice and decided to constrain our project to only upregulating phosphorylation, export, and synthesis of AI-2 rather than worry about import right now. Phosphorylation through LsrK is necessary in this system because as we are upregulating a process that produces more AI-2, it must be converted to AI-2P so that inhibition of the system eventually occurs when there is no more AI-2 in the cells. Otherwise, the excess AI-2 would cause a strain on the wild-type Lsr Operon process already present in the cell. 

We then proceeded to design various plasmids that have different combinations of *lsrK*, *ydgG*, and *luxS*. Dr. Zargar advised us to work combinatorially so that we could construct all the iterations in time. We originally decided to approach the problem the way Dr. Zargar did by using a double plasmid system. We were worried about this at first since working with double plasmids in one cell tends to be difficult. But after looking at the Vilnius-Lithuania 2017 IGEM project on double plasmid systems, we realized that it isn’t a bad idea after all. Dr. Zargar suggested a 3 pathway approach: single plasmid, double plasmid, and clonetegration. A single plasmid approach would combine the AI-2 sensitive plasmid and the T7-regulated plasmids into one plasmid. This is an interesting approach because we are able to combine both systems into a single plasmid so that the end product is one plasmid rather than two. The double plasmid system involves the system using both the AI-2 sensitive plasmid and the T7 regulated plasmid as two separate units in one cell. The clonetegration method involves incorporating the AI-2 sensitive plasmid into the genome of the bacteria. This way, only the T7 regulated plasmid has to be transformed into the bacteria to complete the system. We split the team into 3 groups to each work on a different pathway concurrently. 

## Single Plasmid

Below is how the first plasmid was originally first designed. 

<figure>
	<img src="images/Wetlab/Original.png" alt="Activation">
	<figcaption>Figure 5: Proposed design of single plasmid system </figcaption>
</figure>

As we starting designing this, we ran into several problems. Due to the size of the plasmid (~10000 bp), constructing the plasmid was difficult and we had trouble transforming the whole plasmid. The main problem was the expression of LsrK, LuxS, and YdgG. Since all three of the genes are controlled by a single promoter (pT7), the expression of each gene will go down as the genes are transcribed down the plasmid. 

As a result, we decided to redesign this system. We decided to create blocks of LsrK, YdgG, and LuxS so that each gene is controlled by its own T7 promoter. Now each gene will be expressed equally. This redesign let us create modular parts. Figure 6 shows how these parts are redesigned. Modular parts are essential to IGEM because it allows us to easily switch parts in and out of a system. We decided to take this modular design to the double plasmid system also. Due to the difficulties we experienced with the single plasmid system, we decided to put this method on hold until we could perfect the double plasmid system. A generic gene-block is composed of pT7_rbs_(LsrK/LuxS/YdgG)_terminator. Our three main blocks: LsrK-block, YdgG-block, and LuxS-block were all synthesized using IDT. 

<figure>
	<img src="images/Wetlab/Modular.png" alt="Activation">
	<figcaption>Figure 6: Modular Block Design. These four parts when put together make LsrK/LuxS/YdgG-Block. For instance, the LuxS-Block is composed of pT7-rbs-LuxS-terminator</figcaption>
</figure>

## Double Plasmid

Once we built modular parts, we built the double plasmid system using them. The double plasmid system is split into to the synthetic Quorum Sensing plasmid (pSQS) and the T7 regulated parts. Figure 4 shows how we built pSQS. For building the T7 regulated plasmids, we were approached with the challenge of deciding which iteration of LsrK-Block, LuxS-Block, and YdgG-Block to use. The mathematical model to predict which iteration would be the best was still being built so we decided to approach the problem by building all iterations of those three parts. In addition to putting all the three of the gene blocks in one plasmid, we decided to break them up further to understand how each of these genes work better. 

Since our gene of interest to express in the system is sfGFP, an sfGFP-block (pT7_rbs_sfGFP_terminator) is added to every T7 regulated plasmid. Luckily, the registry already has a T7 promoter regulated sfGFP part (BBa_I719005), we did not have to build one. 

We built a total of 7 different T7 regulated plasmids: LuxS-sfGFP, LsrK-sfGFP, YdgG-sfGFP, LsrK-LuxS-sfGFP, LsrK-YdgG-sfGFP, LuxS-YdgG-sfGFP, and LsrK-LuxS-YdgG-sfGFP. These are all modular gene blocks put together. Figure 7 shows an example the T7 regulated plasmid YdgG-sfGFP.

<figure>
	<img src="images/Wetlab/T7.png" alt="Activation">
	<figcaption>Figure 7: An example of a T7 regulated plasmid would look like. This depicts the sfGFP block and YdgG block put together to form YdgG-sfGFP plasmid. </figcaption>
</figure>

All of the T7 regulated plasmids were built using NEB golden gate assembly inside the pGGA backbone. This backbone was used for simplicity since it is optimized for golden gate assembly with its BSA1 recognition sites. When designing the primers for golden gate assembly, we ran into another problem with our design. Since each block begins with the same promoter-rbs sequences and ends with same terminator sequence, there ended up being too much similarity between the parts so would not have ended up being assembled in the right order. To solve this problem, redesigned out 3 main blocks using a unique 10 nucleotide sequence at the beginning and end of each block. 

## Clonetegration

Due to time restraints, we were not able to pursue the clonetegration method. The first step in the clonetegration process is to build to pSQS. The clonetegration team was therefore focused on building pSQS throughout the summer. 

## Validation and Implementation

We validated all of parts using restriction enzymes digests and running gels on them to verify part length. We then sent all the parts to sequencing to verify the sequences. Since our system produces sfGFP, we measured the expression of sfGFP using flow cytometry. We were mainly concerned with how many cells were activated (expressing sfGFP) and how many cells were unactivated (sfGFP). To completely reduce bimodality, all the cells must be activated. We based our experimental process on the scientific method. We implemented our double plasmid system in DH5ɑ E. coli cells. This was our chassis. We transformed pSQS and a T7 regulated plasmid into each cell. When quorum activation is reached, AI-2 would activate pSQS producing T7 RNA polymerase which would activate the T7 regulated plasmids to express some iteration of LsrK, LuxS, and/or YdgG. We used Dr. Zargar’s data to find when quorum activation occurs. We decided to collect cell population samples starting from OD = 0.4 (t=0) once every 1 hour for 6 hours to track sfGFP expression. In all of our tests, had a negative control which would be a bacterial population transformed with only pSQS so that no sfGFP would be expressed. This process was created by us by talking to our advisor Dr. Kozminski and several conversations with Dr. Zargar. We would iterate through this communication and testing process through several flow cytometry runs. The results page dives in deeper into our experiments. The experiments page has a detailed protocol of our flow cytometry measurements. 



# References 

Bassler B, Miller M (2001). Quorum Sensing in Bacteria. Annual Review of Microbiology 55, 165-199.  

Chang AC, Cohen SN. Construction and characterization of amplifiable multicopy DNA cloning vehicles derived from the P15A cryptic miniplasmid. J. Bacteriol. 134: 1141-1156, 1978. 

Gonzalez J, Neshavan N (2006). Messing with Bacterial Quorum Sensing. Microbiology and Molecular Biology
Reviews 70, 859-875.   

Herzberg M, Kaye I, Peti W, Wood T (2006) YdgG (TqsA) Controls Biofilm Formation in Escherichia
coli K-12 through Autoinducer 2 Transport. J Bacteriol. 2006 Jan; 188(2): 587–598.    

Ladisch MR, Kohlmann KL. Recombinant Human Insulin. Biotechnology Progress 8: 469-478, 1992   

Xavier KB, Bassler BL. 2005. Regulation of uptake and processing of the quorum-sensing autoinducer AI-2 in Escherichia coli. J Bacteriol 187:238–248. doi:10.1128/JB.187.1.238-248.2005.  

Zargar A, Quan D, Bentley W (2016) Enhancing Intercellular Coordination: Rewiring Quorum Sensing Networks
for Increased Protein Expression through Autonomous Induction. ACS Synth. Biol 2016, 5, 923-928 26.     

