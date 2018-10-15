# Basic Parts 

<table style="width:100%" id="parts">
	<tr>
		<th>Name</th>
		<th>Description</th> 
		<th>Part</th>
	</tr>
	<tr>
		<td>spacerLXf</td>
		<td>This is a 10 nucleotide spacer used to build BBa_K2535005. When using Gibson and Golden gate assembly, the spacer at the beginning of the sequence helps create a unique sequence so that if multiple parts have the same beginning sequence, they won't be assembled in the wrong place. </td>
		<td> K2535003</td>
	</tr>
	<tr>
		<td>spacerLXr </td>
		<td>This is a 10 nucleotide spacer used to build BBa_K2535005. When using Gibson and Golden gate assembly, the spacer at the beginning of the sequence helps create a unique sequence so that if multiple parts have the same beginning sequence, they won't be assembled in the wrong place. </td>
		<td>K2535004</td>
	</tr>
	<tr>
		<td>spacerLRf </td>
		<td>This is a 10 nucleotide spacer used to build BBa_K2535009. When using Gibson and Golden gate assembly, the spacer at the beginning of the sequence helps create a unique sequence so that if multiple parts have the same beginning sequence, they won't be assembled in the wrong place. </td>
		<td>K2535007</td>
	</tr>
	<tr>
		<td>spacerLRr </td>
		<td>This is a 10 nucleotide spacer used to build BBa_K2535009. When using Gibson and Golden gate assembly, the spacer at the beginning of the sequence helps create a unique sequence so that if multiple parts have the same beginning sequence, they won't be assembled in the wrong place.</td>
		<td>K2535008 </td>
	</tr>
	<tr>
		<td>spacerYf </td>
		<td>This is a 10 nucleotide spacer used to build BBa_K2535013. When using Gibson and Golden gate assembly, the spacer at the beginning of the sequence helps create a unique sequence so that if multiple parts have the same beginning sequence, they won't be assembled in the wrong place.</td>
		<td> K2535011</td>
	</tr>
	<tr>
		<td>spacerYr</td>
		<td>This is a 10 nucleotide spacer used to build BBa_K2535013. When using Gibson and Golden gate assembly, the spacer at the beginning of the sequence helps create a unique sequence so that if multiple parts have the same beginning sequence, they won't be assembled in the wrong place.</td>
		<td>K2535012</td>
	</tr>
	<tr>
		<td>LuxS</td>
		<td>LuxS is a protein, not native to the Lsr Operon, that catalyzes the cleavage of metabolites to synthesize the autoinducer molecule AI-2 (Gonzalez et al 2006).</td>
		<td>BBa_K2535000</td>
	</tr>
	<tr>
		<td>YdgG </td>
		<td> YdgG is a membrane transport protein, not native to the Lsr Operon, which exports AI-2 out of the cell (Herzberg et al 2006).</td>
		<td> BBa_K2535002</td>
	</tr>
	<tr>
		<td>pLsr_rbs_LsrR_rbs </td>
		<td>This part is an AI-2 (autoinducer 2 from the Lsr Operon) dependent promoter that self regulates itself. pLsr is the specific promoter that is bidirectional. Dimers of the LsrR gene bind to and repress this promoter. However, AI-2P (phosphorylated AI-2) can bind to these dimers and cause them to dissociate, depressing the promoter.  Since the expression of this plasmid produces LsrR, which represses the promoter pLsr, this system is self regulating. </td>
		<td>K2535018</td>
	</tr>
</table>

# References 
Gonzalez (2006)   
Herzberg et al (2006)  