# Application

# Model

The following assumptions were made when determining the financial viability of Quorum sensing compared to IPTG:
1. Initial induction of a quorum system corresponds to protein production in the same way that the initial induction of IPTG corresponds to protein production. In other words, we can determine the protein production of an entire batch, based solely on initial induction.
2.	Profit per batch is the determining factor of whether quorum sensing is more financially viable then synthetic IPTG induction
3.	Fixed Costs between IPTG and QS are approximately the same and are assumed to be equal throughout all equations
4.	Fixed Costs includes the cost of chassis, energy consumption, reactor, other of the process (water, nonIPTG chemicals, etc.), cost of construction of facility, wages of personnel running the facilities, as well as every other cost associated with microbial manufacturing.
5.	At α = 1, % Cells induced by IPTG = % Cells induced by QS.
6.	IPTG is considered to be constantly present and corresponds to the number of cells in a batch.
7.	An OD600 value of 15 is assumed for all batches. (Marisch, Bayer, Cserjan-Puschmann, Luchner, & Striedner, 2013; Sivashanmugam et al., 2009).

Variable Descriptions:
- P_total = Total Amount of Protein Expressed
- f = Profit
- C =Cost
- F = Fixed Costs
- N = Number of Cells
- I = $/Cell For IPTG
- m = $/Protein (Individually found from sellers of proteins in question)
- k = Amount of Protein a Single IPTG Induced Cell Expresses
- V = Volume
- α = ratio of % of Cells Induced by QS to % of Cells Induced by IPTG

Gross gain from a single batch can be calculated using the following equation:

<figure>
	<img src="images/Modeling/EQ1.png" alt="EQ1">
	<figcaption> Equation 1: Gross Gain </figcaption>
</figure>

Profit is then defined as:

<figure>
	<img src="images/Modeling/EQ2.png" alt="EQ2">
	<figcaption> Equation 2: Profit </figcaption>
</figure>

k is an average of proteins produced per cell and is defined as:

<figure>
	<img src="images/Modeling/EQ3.png" alt="EQ3">
	<figcaption> Equation 3: k as an average of proteins produced per cell </figcaption>
</figure>

N and I represent the total number of cells and the cost of IPTG per cell respectively and are derived on a case by case basis as is shown in Equations 10 and 12.

Since quorum sensing does not require IPTG, the only cost associated with it are the fixed costs which are assumed to be equal between the two methods. Costs for IPTG and QS are defined respectively as: 

<figure>
	<img src="images/Modeling/EQ4-5.png" alt="EQ4-5">
	<figcaption> Equation 4 and 5: Costs for IPTG (4) and QS (5) </figcaption>
</figure>

Since αIPTG = 1, the profits for each respective method can be defined as:

<figure>
	<img src="images/Modeling/EQ6-8.png" alt="EQ6-8">
	<figcaption> Equations 6-8: Profits for each equation.</figcaption>
</figure>

Based on Equation 8, in order for QS to be more profitable and therefore more advantageous financially than IPTG the following must be true:

<figure>
	<img src="images/Modeling/EQ9.png" alt="EQ9">
	<figcaption> Equations 9: Profitability of QS</figcaption>
</figure>

<figure>
	<img src="images/Modeling/Table1.png" alt="Table1">
	<figcaption>Table 1: Knowns of Different Molecules</figcaption>
</figure>


<figure>
	<img src="images/Modeling/Table2.png" alt="Table1">
	<figcaption>Table 2: Truncated Final Yields (mg) of Triple-Labeled Proteins using High-Cell-Density Expression and Traditional IPTG-Induction Method in a 50-mL Culture (Sivashanmugam et al., 2009)</figcaption>
</figure>

Using the knowns from Table 1, the values from Table 2, and experimental values from the work of Marisch et al. 2013, the values for I, m, k, and the necessary alpha value for QS to create a larger profit than IPTG were derived in Table 2 using the following equations.

<figure>
	<img src="images/Modeling/EQ10-11.png" alt="EQ10-11">
	<figcaption>Equations 10-11: Equations for I and k, respectively. </figcaption>
</figure>

In the case of Human SOD1, it is known that ~80 mg of SOD1 was produced per 1g of CDM, 20μmol of IPTG was used per 1g of CDM, the volume of the batch was 20L (Marisch et al., 2013), and the mass of a dry E. coli is 0.28 pg. These values are utilized within the following calculations:

<figure>
	<img src="images/Modeling/EQ12-13.png" alt="12-13">
	<figcaption>Equations 12-13: Using the values of Human SOD1 and IPTG within the equations. </figcaption>
</figure>

<figure>
	<img src="images/Modeling/Table3.png" alt="Table3">
	<figcaption>Table 3: Derived Values from literature review used in determining the acceptable α range. </figcaption>
</figure>

For Discussion of Results, see the <a href="/Human_Practices.html" target="_blank">Financial Analysis</a>. 

# References

Apolipoprotein A-I from human plasma A0722. (n.d.). Retrieved October 15, 2018, from https://www.sigmaaldrich.com/catalog/product/sigma/a0722   

Human Apolipoprotein E3 Protein, CF | R&D Systems 4144-AE-500 product information. (n.d.). Retrieved October 15, 2018, from https://www.labome.com/product/R-D-Systems/4144-AE-500.html

IPTG | Isopropyl b-D-1-thiogalactopyranoside | CAS 367-93-1 | P212121 Store. (n.d.). Retrieved October 15, 2018, from https://store.p212121.com/IPTG/

IPTG I6758. (n.d.). Retrieved October 15, 2018, from https://www.sigmaaldrich.com/catalog/product/sial/i6758

Marisch, K., Bayer, K., Cserjan-Puschmann, M., Luchner, M., & Striedner, G. (2013). Evaluation of three industrial Escherichia coli strains in fed-batch cultivations during high-level SOD protein production. Microbial Cell Factories, 12, 58. https://doi.org/10.1186/1475-2859-12-58

Mouse APOA1 / Apolipoprotein A 1 Protein (Recombinant His) - LS-G3282 | LifeSpan Biosciences LS-G3282 product information. (n.d.). Retrieved October 15, 2018, from https://www.labome.com/product/LifeSpan-Biosciences/LS-G3282.html

RAP, Human, Recombinant, E. coli 553506M. (n.d.). Retrieved October 15, 2018, from https://www.sigmaaldrich.com/catalog/product/mm/553506m

Sivashanmugam, A., Murray, V., Cui, C., Zhang, Y., Wang, J., & Li, Q. (2009). Practical protocols for production of very high yields of recombinant proteins using Escherichia coli. Protein Science : A Publication of the Protein Society, 18(5), 936–948. https://doi.org/10.1002/pro.102
SOD1 - Superoxide dismutase [Cu-Zn] - Homo sapiens (Human) - SOD1 gene & protein. (n.d.). Retrieved October 15, 2018, from https://www.uniprot.org/uniprot/P00441

