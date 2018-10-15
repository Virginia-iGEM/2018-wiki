# Composite Parts 

<table style="width:100%" id="parts">
	<tr>
		<th>Name</th>
		<th>Description</th> 
		<th>Part</th>
	</tr>
	<tr>
		<td>LuxS-Block</td>
		<td>spacer_pT7_rbs_LuxS_term_spacer. LuxS is a protein, not native to the Lsr Operon, that catalyzes the cleavage of metabolites to synthesize the autoinducer molecule AI-2 (Gonzalez et al 2006). The LuxS gene is regulated by a T7 driven promoter in order to cooperate with the AI-2 sensitive plasmid that this part is used in conjunction with. </td>
		<td> BBa_K2535005 </td>
	</tr>
	<tr>
		<td>LuxS-sfGFP</td>
		<td> pT7_rbs_sfGFP_term_LuxS-Block. This is a composite part of LuxS-Block and I746909. This part can be regulated using T7 to track LuxS expression based on the sfGFP reporter. Both LuxS and sfGFP are controlled by a T7 promoter.</td>
		<td> K2535006</td>
	</tr>
	<tr>
		<td>LsrK-Block</td>
		<td>spacer_ pT7_rbs_LsrK_term_spacer. LsrK is a kinase that is native to the Lsr Operon. It converts intracellular AI-2 to phosphorylated AI-2 (AI-2P), which derepresses the Lsr Operon (Xavier et al 2004). The LsrK gene is regulated by a T7 driven promoter in order to cooperate with the AI-2 sensitive plasmid that this part is used in conjunction with.  </td>
		<td>K2535009</td>
	</tr>
	<tr>
		<td>LsrK-sfGFP</td>
		<td>pT7_rbs_sfGFP_term_LsrK-Block. This is a composite part of LsrK-Block and I746909. This part can be regulated using T7 to track LsrK expression based on the sfGFP reporter. Both LsrK and sfGFP are controlled by a T7 promoter.</td>
		<td>K2535010</td>
	</tr>
	<tr>
		<td>YdgG-Block</td>
		<td>spacer_ pT7_rbs_YdgG_term_spacer. YdgG is a membrane transport protein, not native to the Lsr Operon, which exports AI-2 out of the cell (Herzberg et al 2006). The YdgG gene is regulated by a T7 driven promoter in order to cooperate with the AI-2 sensitive plasmid that this part is used in conjunction with. </td>
		<td>K2535013</td>
	</tr>
	<tr>
		<td>YdgG-sfGFP</td>
		<td>pT7_rbs_sfGFP_term_YdgG-Block. This is a composite part of YdgG-Block and I746909. This part can be regulated using T7 to track YdgG expression based on the sfGFP reporter. Both YdgG and sfGFP are controlled by a T7 promoter. </td>
		<td>K2535014</td>
	</tr>
	<tr>
		<td>LsrK-LuxS-sfGFP</td>
		<td>pt7_rbs_sfGFP_term_LsrK-Block_LuxS-Block. This is a composite part of LsrK and LuxS put together with I746909 (sfGFP regulated by a T7 promoter). This part allows the upregulation of LuxS and LsrK so that intracellular AI-2 production and AI-2 phosphorylation are increased concurrently. </td>
		<td> K2535015</td>
	</tr>
	<tr>
		<td>LsrK-YdgG-sfGFP</td>
		<td>This is a composite part of LsrK and YdgG put together with I746909 (sfGFP regulated by a T7 promoter).  This part allows the upregulation of LsrK and YdgG so that AI-2 is phosphorylated to AI-2P and AI-2 out of the cell are increased concurrently. </td>
		<td>K2535016 </td>
	</tr>
	<tr>
		<td>LuxS-YdgG-sfGFP</td>
		<td>pt7_rbs_sfGFP_term_LuxS-Block_YdgG-Block. This is a composite part of LuxS and YdgG put together with I746909 (sfGFP regulated by a T7 promoter).  This part allows the upregulation of LuxS and YdgG so that intracellular AI-2 production and export out of the cell are increased concurrently.</td>
		<td>K2535020</td>
	</tr>
	<tr>
		<td>LsrK-LuxS-YdgG-sfGFP</td>
		<td>pt7_rbs_sfGFP_term_LsrK_LuxS_YdgG. This is a composite part of LsrK, LuxS, and YdgG put together with I746909 (sfGFP regulated by a T7 promoter).  This part allows the upregulation of LsrK, LuxS, and YdgG so that intracellular AI-2 production, AI-2 phosphorylation, and export out of the cell are all increased concurrently.  </td>
		<td> K2535017 </td>
	</tr>
	<tr>
		<td>sQS: Synthetic Quorum Response Plasmid Insert</td>
		<td>term_pLsr_rbs_LsrR_rbs_T7_term. Built in low copy pACYC cloning vector and optimized for use in a low copy vector to prevent leakiness of AI-2 regulated promoter. This plasmid contains an AI-2 regulated promoter, pLsr, which is bidirectional. Dimers of LsrR bind to and repress this promoter. However, AI-2P can bind to these dimers and cause them to dissociate, depressing the promoter.  Since the expression of this plasmid produces LsrR, which represses the promoter pLsr, this system is self regulating. sQS plasmid is used to regulate quorum enhancement plasmids. T7 is therefore only expressed in the presence of AI-2P. This plasmid can be used to regulate T7 expression based on AI-2 level in a media. </td>
		<td>K2535019</td>
	</tr>
</table>

# References
Gonzalez J, Neshavan N (2006). Messing with Bacterial Quorum Sensing. Microbiology and Molecular Biology
Reviews 70, 859-875.    

Herzberg M, Kaye I, Peti W, Wood T (2006) YdgG (TqsA) Controls Biofilm Formation in Escherichia
coli K-12 through Autoinducer 2 Transport. J Bacteriol. 2006 Jan; 188(2): 587–598.        

Xavier K, Bassler B (2004). Regulation of Uptake and Processing of the Quorum-Sensing Autoinducer AI-2 in
Escherichia coli. J Bacteriol 187, 238-245.      

