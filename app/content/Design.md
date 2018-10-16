# Design 

## What is quorum sensing?
 
Quorum sensing is the mechanism by which bacteria communicate with each other what the current cell population density is.   

Many bacteria constantly produce and export out of the cell a chemical called autoinducer. All bacteria of a same species produce the same autoinducer, so if the population density of the bacteria producing the autoinducer increases, it leads to increased concentration of that autoinducer in the extracellular environment. Bacteria are constantly monitoring the concentration of the autoinducer in the environment, and if the concentration exceeds a certain threshold (which indicates that the population density exceeds a threshold), bacteria detect that and trigger responses such as formation of biofilms, luminescence, or production of virulence factors; that is, they auto-induce themselves based on the concentration of the autoinducer they made, without input of stimuli from outside.    

On the other hand, if the population density of the bacteria is not high, any autoinducer produced will diffuse away from the bacteria faster than it accumulates, so autoinducer concentration will not increase, not triggering a population-specific response from the bacteria.    

## Quorum sensing in E. coli
 
Like many other bacteria, E. coli also use quorum sensing to determine their population density and respond to high density by producing biofilms or starting virulence. Autoinducer used by E. coli is named Autoinducer-2 (AI-2), and is also used among other bacterial species.     

The AI-2 quorum sensing pathway of E. coli is regulated by the following genes: lsrACDB (which are four different proteins that are expressed and work together), lsrK, lsrR, luxS and ydgG. The lsrACDB, lsrK, and lsrR are all adjacent to one another as shown and affect each other’s transcription rate; luxS and ydgG are distant and their transcription is unaffected by other Lsr proteins.     

First, the LuxS protein uses the precursor molecule DPD (S-4,5-dihydroxypentane-2,3-dione) to produce the AI-2 molecule. The AI-2 is then exported out of the cell through YdgG, a transmembrane transport protein. The AI-2 exported accumulates outside the cell, and upon reaching a certain concentration, is imported into the cell through a different set of transmembrane transport protein, LsrACDB. The imported AI-2 is then phosphorylated by LsrK kinase, turning into AI-2P. AI-2P can then inhibit LsrR, which is a repressor that binds to pLsr and inhibits the transcription of lsrACDB. Therefore, by importing AI-2 that is then phosphorylated and inhibits LsrR, LsrACDB is inhibiting the expression of its inhibitor LsrR. And since it inhibits its inhibitor, expression of LsrACDB is a positive feedback look, allowing more LsrACDB to be produced and accelerating the import of AI-2, until there is no more AI-2 to take in and the AI-2 already taken in are dissolved letting LsrR bind to pLsr again (Bassler, 2005).    

## Dr. Zargar’s paper, which our project is largely based on
 
In his paper, Dr. Zargar recognizes a problem with E. coli quorum sensing; when the E. coli cells start intaking the extracellular AI-2, not all of them start that process at the exact same time. Because some cells start the intake process later than others, by the time the LsrACDB expression is activated and the slower cells really start absorbing the AI-2, there is no more AI-2 left in the extracellular environment. This causes part of the population of E. coli to not be activated by quorum sensing, thus “losing” the competition of intaking AI-2 and not responding to cell density increase like all the other cells do. Zargar found that due to such reason, wild type bacteria population has only about 70% of its population activated by autoinduction with AI-2 (2016, Zargar et al).      

Therefore, he manipulated two different genes in the lsr pathway, which are part of what we manipulate later on; he inserted a synthetic feedback loop where even more LsrACDB or LsrK is produced along with the natural feedback loop of lsr operon. LsrACDB and LsrK were chosen because LsrACDB are the primary AI-2 intake proteins and LsrK is the kinase that phosphorylates AI-2 to activate them.     

To make the synthetic feedback loop, he added pCT6 plasmid, an AI-2 induced expresser of T7RNA polymerase, into the E. coli system because the native plsr promoter is weak and does not transcribe well enough to yield observable experimental results; having pCT6 would amplify the AI-2 quorum sensing signal by producing T7RNA polymerase when intracellular AI-2 level is high, while T7RNA polymerase in turn activates the GFP gene in another synthetic plasmid, pET, making the increase in AI-2 level observable. Then Zargar added onto the pET plasmid either lsrACDB, lsrK, or none as a control. The added gene in pET were attached to T7 promoter, so they transcribe not when LsrR is inhibited but rather when lots of T7RNA polymerase is produced, which ultimately means the same thing, that AI-2 is taken into the cell. The addition of the synthetic loop produced additional LsrACDB or LsrK along with the native pathway, which led to increased rate of AI-2 intake in the cells.      

By incorporating the pCT6 and enhanced pET plasmid, Zargar was able to increase the percentage of cells being activated by auto-induction from the wild type’s 70% to 90% for enhanced LsrK and 94% for enhanced LsrACDB feedback system. Also, not only did the percentage of cells that were activated by autoinduction increase, but the mean fluorescence intensity for the enhanced cells were 1.6 times that of control cells. Zargar credits this increase in percentage of cells being auto-induced and increase in mean fluorescence to the decrease in variability and heterogeneity in the AI-2 intake process; because the cells were designed to have faster AI-2 uptake rate, more cells could take in AI-2 to be auto-induced, while less cells were to slow with AI-2 uptake to be unable to be auto-induced.    

## What problem are we trying to solve?
Upon coming across Dr. Zargar’s paper, we thought that we could apply his work to revolutionize biomanufacturing.
Today, biomanufacturing using bacteria involves mainly one of two methods; inserting a constitutively active gene that will always produce the wanted product, or using inducers to induce the bacteria to produce the product. However, both methods each have a disadvantage; while the use of a constitutively active gene will guarantee that the bacteria will always be producing the product, because that gene is constitutively active, it places a metabolic strain on the bacteria, hindering their growth. Thus it takes a longer than usual time for those bacteria fully grow and reach their full potential for production, meaning that the waiting time before efficient harvesting is long.     

The use of inducers can avoid this problem, since the bacteria will multiply normally while not expressing the wanted product, and the inducer will be added to cause expression of the product only after there are plenty of bacteria grown. But while this may be effective, using inducers has its own problem; they are expensive.
A solution to both of these is quorum sensing. If a gene is linked to quorum sensing, then it will not be expressed until the bacteria have grown to a certain population density, so the gene causes no strain involved in bacterial growth. On the other hand, once the bacteria have grown enough, they will auto-induce themselves to express the gene, not requiring the use of any inducers. If bacteria are designed to produce based on quorum signaling, then one has to worry neither about growth rate nor cost of inducers. The only problem was efficiency, since not all bacteria in a population will be activated by quorum signaling, but that is now solved through Zargar’s research decreasing the heterogeneity of AI-2 intake and greatly increasing the percentage of bacteria that are sensitive to AI-2.     

So in our project, we aimed to utilize and improve upon Zargar’s enhanced quorum sensing system to apply it to biomanufacturing. We tried to incorporate two new genes into Zargar’s system; luxS and ydgG. By adding genes that we think will be helpful to the quorum sensing system and developing multiple combinations of them to use in combination with an AI-2 sensitive plasmid, we tried to further decrease heterogeneity and increase the % of cells activated by auto-induction, so that it is closer to 100%.    

## A Quorus Design 
We extensively used the engineering design method to effective construct and test our various Quorum Sensing parts. We followed the following process:     
1) Define a Problem       
2) Background Research      
3) Constraints/Design Requirements       
4) Conceptualize Solutions      
5) Select a Solution       
6) Detailed Design/Plan      
7) Implementation       
8) Validation       
9) Communicate       
10) Iterate       

We designed our constructs and methodology based on the advice we received from Dr. Zargar and various other advisors at UVA. Our problem is constrained to limiting the bimodal expression graphs that Zargar’s research showed. We want to all the cells to be expressing the gene of interest (in our case sfGFP) rather than a group of cells no expressing the gene of interest because there is not enough AI-2 available for them to express. Our project is divided into two main design goals similar to Dr. Zargar’s work: Design an AI-2 sensitive plasmid and design various iterations of T7 regulated plasmids.    

## AI-2 Sensitive Plasmid

Our AI-2 sensitive plasmid or Synthetic Quorum Sensing Plasmid is controlled by an inducible promoter sensitive to AI-2. The promoter is called pLsr. pLsr works concurrently with LsrR. Dimers of LsrR bind to and repress this promoter. However, AI-2P can bind to these dimers and cause them to dissociate, depressing the promoter. Since the expression of this plasmid produces LsrR, which represses the promoter pLsr, this system is self regulating (Basseler et al 2001). We added T7 RNA polymerase to the plasmid also so that when AI-2 is present, T7 is transcribed. This T7 is used to activate T7 promoters (pT7) in the T7 regulated plasmids. pSQS is built in a low copy vector in order to prevent leakiness of the AI-2 sensitive promoter.


<figure>
	<img src="/images/Wetlab/sPQS.png" alt=sPQS>
	<figcaption> Figure 1: Synthetic Quorum Sensing Plasmid (pSQS) </figcaption>
</figure>

<br>
<br> 
<br>
<br> 

pSQS was built using NEB golden gate assembly. It was important to build this plasmid in a low or single copy plasmid. We decided to use the low copy plasmid pACYC.   

## T7 Regulated Plasmids: 

Our T7 regulated plasmids are used to help optimize the efficiency of the Lsr Operon in relation to its wild-type process. In our project, the gene of interest to produce is sfGFP so all of the T7 regulated parts will end up producing sfGFP. The T7 regulated plasmids are focused around three main genes: LsrK, LuxS, and YdgG. The plasmids are regulated by pT7.    

LsrK is a kinase that phosphorylates AI-2 so that it can be turned into AI-2P (Basseler et al 2001).. LsrK is necessary because AI-2P is what binds to LsrR to inhibit the transcription of the system when there is no AI-2 present.       

Based on our research, we were able to find two unique genes that help optimize the Lsr operon: LuxS and YdgG. LuxS is a gene that is able to synthesize AI-2 intracellularly by cleaving various metabolites (Gonzalez et al 2006). YdgG is a transmembrane protein that is able to export AI-2 outside of the cell (Herzberg et al 2006). Based on these two processes, we realized that we could solve the bimodality problem by increasing the amount of AI-2 outside the cell by using YdgG. This would increase the extracellular AI-2 concentration so that more cells could be activated. However, we do not want the amount AI-2 inside the cell to be depleted so we realized that LuxS would be useful to produce more AI-2 inside the cell. We originally decided to also implement a gene called LsrACDB, a vital in Zargar’s system, which would import AI-2 from outside the cell inside the cell. After having a discussion with Dr. Zargar, he suggested that LsrACDB would not be necessary since LuxS is already producing AI-2 inside the cell so there would be no need to import more AI-2 in. We took his advice and decided to constrain our project to only upregulating phosphorylation, export, and synthesis of AI-2 rather than worry about import right now. Phosphorylation through LsrK is necessary in this system because as we are upregulating a process that produces more AI-2, it must be converted to AI-2P so that inhibition of the system eventually occurs when there is no more AI-2 in the cells. Otherwise, the excess AI-2 would cause a strain on the wild-type Lsr Operon process already present in the cell.     

We then proceeded to design various plasmids that have different iterations of LsrK, YdgG, and LuxS. Dr. Zargar advised us to work combinatorially so that we could construct all the iterations in time. We originally decided to approach the problem the way Dr. Zargar did by using a double plasmid system. We were worried about this at first since working with double plasmids in one cell tends to be difficult but after looking at the Vilnius-Lithuania 2017 IGEM project on double plasmid systems, we realized that it isn’t a bad idea after all. Dr. Zargar suggested a 3 pathway approach: single plasmid, double plasmid, and clonetegration. A single plasmid approach would combine the AI-2 sensitive plasmid and the T7-regulated plasmids into one plasmid. This is an interesting approach because we are able to combine both systems into a single plasmid so that the end product is one plasmid rather than two. The double plasmid system involves the system using both the AI-2 sensitive plasmid and the T7 regulated plasmid as two separate units in one cell. The clonetegration method involves incorporating the AI-2 sensitive plasmid into the genome of the bacteria. This way, only the T7 regulated plasmid has to be transformed into the bacteria to complete the system. We split the team into 3 groups to each work on a different pathway concurrently.       

## Single Plasmid

Below how the first plasmid was originally first designed:      

<figure>
	<img src="/images/Wetlab/Original.png" alt=Original>
	<figcaption> Figure 2: Proposed design of single plasmid system </figcaption>
</figure>

<br>
<br> 
<br>
<br> 

As we starting designing this, we ran into several problems. Constructing the plasmid was difficult due to the size of the plasmid (~10000 bp). We had trouble transforming the whole plasmid. The main problem was the expression of LsrK, LuxS, and YdgG. Since all three of the genes are controlled by a single promoter (pT7), the expression of each gene will go down as the genes are transcribed down the plasmid.         


<figure>
	<img src="/images/Wetlab/Modular.png" alt="Modular" align="middle">
	<figcaption> Figure 3: Modular Block Design. These four parts when put together make LsrK/LuxS/YdgG-Block. For instance, the LuxS-Block is composed of pT7-rbs-LuxS-terminator. </figcaption>
</figure>

As a result, we decided to redesign this system. We decided to create blocks of LsrK, YdgG, and LuxS so that each gene is controlled by its own T7 promoter. Now each gene will be expressed equally. This redesign let us create modular parts. Figure 3 shows how these parts are redesigned. Modular parts are essential to IGEM because it allows us to easily switch parts in and out of a system. We decided to take this modular design to the double plasmid system also. Due to the difficulties we experienced with the single plasmid system, we decided to put this method on hold until we could perfect the double plasmid system. A generic gene-block is composed of pT7_rbs_(LsrK/LuxS/YdgG)_terminator. Our three main blocks: LsrK-block, YdgG-block, and LuxS-block were all synthesized using IDT.         



## Double Plasmid:
Once we built modular parts, we built the double plasmid system using them. The double plasmid system is split into to the synthetic Quorum Sensing plasmid (pSQS) and the T7 regulated parts. Figure 1 shows how we built pSQS. For building the T7 regulated plasmids, we were approached with the challenge of deciding which iteration of LsrK-Block, LuxS-Block, and YdgG-Block to use. The mathematical model to predict which iteration would be the best was still being built so we decided to approach the problem by building all iterations of those three parts. In addition to putting all the three of the gene blocks in one plasmid, we decided to break them up further to understand how each of these genes work better. 

Since our gene of interest to express in the system is sfGFP, an sfGFP-block (pT7_rbs_sfGFP_terminator) is added to every T7 regulated plasmid. Luckily, the registry already has a T7 promoter regulated sfGFP part (BBa_I719005), we did not have to build one. 

We built a total of 7 different T7 regulated plasmids: LuxS-sfGFP, LsrK-sfGFP, YdgG-sfGFP, LsrK-LuxS-sfGFP, LsrK-YdgG-sfGFP, LuxS-YdgG-sfGFP, and LsrK-LuxS-YdgG-sfGFP. These are all modular gene blocks put together. Figure 4 shows an example the T7 regulated plasmid YdgG-sfGFP.

<figure>
	<img src="/images/Wetlab/T7.png" alt=T7>
	<figcaption>Figure 5: An example of a T7 regulated plasmid would look like. This depicts the sfGFP block and YdgG block put together to form YdgG-sfGFP plasmid.  </figcaption>
</figure>

<br>
<br> 
<br>
<br> 
<br>
<br> 

All of the T7 regulated plasmids were built using NEB golden gate assembly inside the pGGA backbone. This backbone was used for simplicity since it is optimized for golden gate assembly with its BSA1 recognition sites. When designing the primers for golden gate assembly, we ran into another problem with our design. Since each block begins with the same promoter-rbs sequences and ends with same terminator sequence, there ended up being too much similarity between the parts so would not have ended up being assembled in the right order. To solve this problem, redesigned out 3 main blocks using a unique 10 nucleotide sequence at the beginning and end of each block. 

## Clonetegration

Due to time restraints, we were not able to pursue the clonetegration method. The first step in the clonetegration process is to build to pSQS. The clonetegration team was therefore focused on building pSQS throughout the summer. 

## Validation and Implementation

We validated all of parts using restriction enzymes digests and running gels on them to verify part length. We then sent all the parts to sequencing to verify the sequences. Since our system produces sfGFP, we measured the expression of sfGFP using flow cytometry. We were mainly concerned with how many cells were activated (expressing sfGFP) and how many cells were unactivated (sfGFP). To completely reduce bimodality, all the cells must be activated. We based our experimental process on the scientific method. We implemented our double plasmid system in DH5ɑ E. coli cells. This was our chassis. We transformed pSQS and a T7 regulated plasmid into each cell. When quorum activation is reached, AI-2 would activate pSQS producing T7 RNA polymerase which would activate the T7 regulated plasmids to express some iteration of LsrK, LuxS, and/or YdgG. We used Dr. Zargar’s data to find when quorum activation occurs. We decided to collect cell population samples starting from OD = 0.4 (t=0) once every 1 hour for 6 hours to track sfGFP expression. In all of our tests, had a negative control which would be a bacterial population transformed with only pSQS so that no sfGFP would be expressed. This process was created by us by talking to our advisor Dr. Kozminski and several conversations with Dr. Zargar. We would iterate through this communication and testing process through several flow cytometry runs. The results page dives in deeper into our experiments. The experiments page has a detailed protocol of our flow cytometry measurements. 



## References 
Bassler, 2005

Bassler B, Miller M (2001). Quorum Sensing in Bacteria. Annual Review of Microbiology 55, 165-199.  

Gonzalez J, Neshavan N (2006). Messing with Bacterial Quorum Sensing. Microbiology and Molecular Biology
Reviews 70, 859-875.   

Herzberg M, Kaye I, Peti W, Wood T (2006) YdgG (TqsA) Controls Biofilm Formation in Escherichia
coli K-12 through Autoinducer 2 Transport. J Bacteriol. 2006 Jan; 188(2): 587–598.    

Zargar A, Quan D, Bentley W (2016) Enhancing Intercellular Coordination: Rewiring Quorum Sensing Networks
for Increased Protein Expression through Autonomous Induction. ACS Synth. Biol 2016, 5, 923-928
26.     

