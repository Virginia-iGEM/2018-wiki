# Growth and Heterogeneity

> Model of Population Growth and Activation With Heterogenous Induction

## Background and Goals

This model is designed to illustrate and predict the dynamics of population growth and protein synthesis after quorum activation. The goal of the Quorus is to not only increase the magnitude of quorum activation within each cell, but to decrease variance of activation across the population. Since fully quorum activated cells are in steady state, they can easily be outcompeted by less activated cells that grow much more quickly. This poses a key problem in inducible systems which can have heterogenous, often bimodal, population activation distributions. Quorus’ Enhancement System is designed to combat this by reducing variance and pushing the system towards unimodality (Zargar et al 2016).

This model is an analytical interpretation of a 2016 computational study Quan et al. which explored the molecular dynamics of quorum activation and the effects of heterogeneity and fractional activation on population growth dynamics. In Figure 1 below, from Quan et al, depicts the effect of heterogeneous quorum activation on the distribution of induced cells over time. As the colony grows the initial heterogeneity pulls the mean of activation downwards as the proportion of uninduced cells increases. This cell-by cell model with internal molecular kinetics was emulated in our  <a href="">Quorum Activation Model</a>. 

<figure>
	<img src="/images/Modeling/Desynch.png" alt=QSDesync>
</figure>

_Figure 1: “Quorum Sensing Desynchronization Leads to Bimodality and Patterned Behaviors” Quan et al (2016)_

Our approach to this model uses a system of analytical equations to simulate the effect of induction bimodality in a way applicable to batch biomanufacturing. The system relies on three essential functions. The first is **Initial(x)**, the normalized distribution of cell activation at time zero that is comprised of a normalized set of gaussian curves, see **Section I**. This function defines the initial“activation profile,”  or the distribution of the population across percentages of maximal activation. This function is characterized by five parameters, which are the size ratio between the more activated population A and less activated population B, and the means and standard deviations of each population. This is a function of activation (x) , and its  output  is the population proportion density, which can be integrated to find the fraction of the population found between two levels of activation.

The second is **Rate(x)**, which relates cell activation (x) to the exponential growth rate of the cell. The definitions of activation and induction in this model are abstract and used interchangeably. However, they can operationalized in an experimental setting to be peak concentration of T7, number of LsrACDB transporter proteins, initial concentration of AI2-P after activation, or peak rate of protein production. The effect of this varied growth rate on the distribution of activation can be seen in **Section II**. 

 The third function is **TimeMax**, which indicates at what time a given population reaches its population ceiling. At this time, it is assumed all growth stops, and the activation distribution of the colony is fixed. This is to allow for investigation of the outcompetition of induced cells while reducing the analytical complexity of the model. Because of this assumption, after TimeMax and for the remainder of the batch culture, the average protein synthesis rate is constant. In **Section III**, we will explore how this system might allow for the prediction of qualitative and comparative dynamics of protein expression between populations with varying activation profiles.

## Section I: Visualization of Bimodal and Unimodal Activation Profile

<figure>
	<img src="/images/Modeling/Bimodal.png" alt=Bimodal>
</figure>

_Figure 2: Bimodal Activation_ - Plot of initial activation distribution of in bimodal population with k = 0.7, ma = 0.8, sa = 0.05, mb = 0.3, sb = 0.1. With these parameters, ~70% of the cells lie within 0.1 normalized activation units of the higher mode, with a mean of 0.8 units. The population activation mean is equal to 0.65 normalized activation units.

<figure>
	<img src="/images/Modeling/Unimodal.png" alt="Unimodal">
</figure>

_Figure 3: Unimodal Activation_ - Plot of initial activation distribution of a unimodal population with k = 1, ma = 0.65, sa = 0.075. This population has the same mean of activation as the bimodal one from Figure 2, but is more homogeneously activated due to its unimodality.

## Section II: Heterogenous Growth and a Changing Activation Profile

With the concept of unimodal and bimodal activation distributions encoded in an analytical equation, we applied activation-dependent growth mode to study how these heterogeneously induced systems behaved over time. Due to lack of information in literature about the relationship between growth rate and activation, the relationship was assumed to be linear and negatively correlated, with a maximum rate at zero activation and a rate of zero at maximum activation (x=1).

<figure>
	<img src="/images/Modeling/BiVsUni.gif" alt=BiVsUni>
</figure>

_Figure 4: Unimodality versus Bimodality_ - The graphs above are of the effect of growth on the activation distribution of the initial profiles in Figures 2 and 3. As time progresses, the bimodal activation profile (orange) undergoes a much more drastic change than the unimodal (blue). As a result, after seven  hours have passed, the bimodal distribution has approached a near unimodal distribution with an average activation three times smaller. Meanwhile, the mean activation of the unimodal profile only decreases by 5%.

From Figure 4, we can clearly see the importance of reducing bimodality in activation to ensure a homogenous, well-induced culture for many bacterial generations. Without measures to ensure quorum sensing does not yield the fractional activation illustrated in Figure 1 and Figure 2,  the predictability of population phenotypes and mean cellular gene expression are significantly diminished. 

<figure>
	<img src="/images/Modeling/UniUniUni.gif" alt=BiVsUni>
</figure>

_Figure 5: Effects of Variance in a Unimodal Population_ - The orange graph above is identical to the unimodal population found in Figures 3 and 4, and remains within 10% of its initial activation mean. However, when the initial variance (σ squared) and standard deviation (σ) of this unimodal profile is changed, there is a drastic change in growth dynamics. In the case of halving the standard deviation (blue), the total drift of the mean activation is less than half that of the control. If the standard standard deviation is doubled (green), there is a significantly greater degree of drift, over four times that of control.

From this, we can see it is not enough to simply minimize bimodality. To ensure a homogeneity among cells and through time, the variance of the largest mode must also be minimized. When it comes to quorum activation, compounding upon the adverse effects of an initially heterogeneous system are the effects of heterogeneous growth illustrated in this section.

## Section III: Implications for Protein Synthesis and Future Work
In this model, we developed a system of equations for the total gene expression and protein synthesis of a population over time. In this extension of the model, an initial phase allows for the shifting of the activation profile based on our model of activation-depend growth rate explored in Section II. Once the population ceiling is reached, the activation profile is fixed, and the rate of protein production is fixed for the remainder of the simulation. This method is designed to address the shortcomings of the exponential growth model by taking into account the limited availability of metabolic resources and the finite carrying capacity of the batch in which the colony is grown.

An even more biologically consistent model would incorporate logistic growth dynamics. The characteristic sigmoidal curve of logistic growth would improve the reliability of this model’s predictions by more accurately modeling carrying capacity and its effect on growth. One problem with this is that it significantly increases the complexity of Rate(x), as logistic growth is defined by more factors than just initial population and growth rate. This would be an item for future work.

The system described above has been coded, but not yet tested and analyzed. After further development, it could provide significant understanding of the effects of induction variance on the output of a batch culture over its lifetime. In order to make reliable predictions, this model must be improved by experimental characterization of its many parameters, constants, and functions.

Some abstract examples of experiments that would benefit this model are as follows:
- Testing methods for operationalization of the “activation” variable and its correlation to actual protein output
- Applying this activation measure for investigating activation profiles over time in vivo 
- Developing an empirical formula for Rate(x), relating level of quorum activation to rate of growth
- Verifying the distribution of activation modes as approximately Gaussian
- Inducing populations bimodally to characterize the dynamics of heterogeneous growth in vivo for comparison

## Mathematica Code

<p class="noinitial">
maxRate = 1;         
**Rate**[activation_] = maxRate*(1-activation);         
**Initial**[x_,k_,ma_,sa_,mb_,sb_] := (1/Sqrt[2*Pi])*((k/sa)*E^(-(x-ma)^2/(2*sa^2))+((1-k)/sb)*E^(-(x-mb)^2/(2*sb^2)));         
**Population**[t_,k_,ma_,sa_,mb_,sb_] := NIntegrate[E^(Rate[x1]*t)*Initial[x1,k,ma,sa,mb,sb],{x1,0,1}] ;         
**Growth**[x_,t_,k_,ma_,sa_,mb_,sb_] :=Initial [x,k,ma,sa,mb,sb]*E^((Rate[x]*t));         
**NormalizedGrowth**[x_,t_,k_,ma_,sa_,mb_,sb_] := Initial [x,k,ma,sa,mb,sb]*E^(Rate[x]*t)/Population[t,k,ma,sa,mb,sb] ;         
**AverageActivation**[t_,k_,ma_,sa_,mb_,sb_ ] := NIntegrate[x1*NormalizedGrowth [x1,t,k,ma,sa,mb,sb],{x1,0,1}] ;         
**SummedActivation**[t_,k_,ma_,sa_,mb_,sb_ ] := NIntegrate[x1*Growth [x1,t,k,ma,sa,mb,sb],{x1,0,1}]  ;         
**TotalYield**[tf_,k_,ma_,sa_,mb_,sb_ ] := NIntegrate[x1*Growth [x1,t1,k,ma,sa,mb,sb] ,{t1,0,tf},{x1,0,1} ] ;         
**SPostTimeMax**[t_] := SatTimeMax;         
**TsPostTimeMax** [t_, TimeMax_ ,SatTimeMax_,TsAtTimeMax_] :=  SatTimeMax*(t-TimeMax)+TsAtTimeMax;         
**TimeMax**[maxPop,endTime,K,MA,SA,MB,SB ] = FindRoot[Population[t,K,MA,SA,MB,SB ]==maxPop,{t,endTime/2 ,0,endTime}];         
</p>


## Functions

<p class="noinitial">
**Rate(x)**: function of exponential growth constant versus level activation for our simulation         
**Initial**: initial population proportion density distribution of A and B; AUC =  total initial population = 1 unit ;          
**Population**: total population over time as a multiple of initial size         
**Growth**: growth of population activation distribution over time         
**NormalizedGrowth**: normalized growth of population activation distribution; indicates relative distribution of cell activation         
**AverageActivation**: average rate of protein production among cells at time t         
**SummedActivation**: total rate of protein production of the colony at time t         
**TotalYield**: total integral protein produced by time t         
**SPostTimeMax**: when incorporating a population ceiling, indicates total rate of protein production of the colony once the ceiling is reached         
**TsPostTimeMax**: when incorporating a population ceiling, indicates total protein produced of any t after the ceiling is reached         
**TimeMax**: indicates the time at which the population ceiling is reached         
</p>

## Variables and Constants

<p class="noinitial">
x = Level of activation as a proportion of maximal induction; x = [0,1]         
t = time in hours         
k = initial proportion of cells in population A         
1-k =  initial proportion of cells in population B         
ma = mean activation of A         
sa = std dev of activation in A         
mb = mean activation of B         
sb = std dev of activation in B         
endTime = total time the batch is grown for         
maxPop = multiple of initial population where growth stops         
</p>

# References

Zargar A, Quan D, Bentley W (2016)  Enhancing Intercellular Coordination: Rewiring Quorum Sensing Networks for Increased Protein Expression through Autonomous Induction. ACS Synth. Biol 2016, 5,  923-928     
 
Quan, D. N., Tsao, C.-Y., Wu, H. C., and Bentley, W. E. (2016) Quorum sensing desynchronization leads to bimodality and patterned
behaviors. PLoS Comp. Biol., DOI: 10.137/journal/pcbi.1004781.        

