# Parts Collection 

<table style="width:100%" id="parts">
	<tr>
		<th>Name</th>
		<th>Description</th> 
		<th>Part</th>
	</tr>
	<tr>
		<td>T7 promoter</td>
		<td>T7 promoter controlled sfGFP used in all 2nd plasmids as an expression indicator</td>
		<td>pT7_rbs_sfGFP_term I746909, (from iGEM07_Cambridge) </td>
	</tr>
	<tr>
		<td>Constitutive sfGFP</td>
		<td>A constitutively expressed sfGFP used as positive control in flow cytometry. </td>
		<td>K608002 + K1365020</td>
	</tr>
	<tr>
		<td>LuxS</td>
		<td>Built in high copy pGGA cloning vector due to simplicity of using Golden Gate assembly. LuxS is a protein, not native to the Lsr Operon, that catalyzes the cleavage of metabolites to synthesize the autoinducer molecule AI-2 (Gonzalez et al 2006). The LuxS gene is regulated by a T7 driven promoter in order to cooperate with the AI-2 sensitive plasmid that this part is used in conjunction with. </td>
		<td>spacer_pT7_rbs_LuxS_term_spacer</td>
	</tr>
	<tr>
		<td>LuxS 2nd plasmid</td>
		<td>Built in high copy pGGA cloning vector due to simplicity of using Golden Gate assembly.This is a composite part of LuxS and I746909. </td>
		<td>pT7_rbs_sfGFP_term_LuxS</td>
	</tr>
	<tr>
		<td>LsrK</td>
		<td>Built in high copy pGGA cloning vector due to simplicity of using Golden Gate assembly. LsrK is a kinase that is native to the Lsr Operon. It converts intracellular AI-2 to phosphorylated AI-2 (AI-2P),  which derepresses the Lsr Operon (Xavier et al 2004). The LsrK gene is regulated by a T7 driven promoter in order to cooperate with the AI-2 sensitive plasmid that this part is used in conjunction with. 
		</td>
		<td>spacer_ pT7_rbs_LsrK_term_spacer</td>
	</tr>
	<tr>
		<td>LsrK 2nd plasmid</td>
		<td>Built in high copy pGGA cloning vector due to simplicity of using Golden Gate assembly.This is a composite part of LsrK and I746909. </td>
		<td>pT7_rbs_sfGFP_term_LsrK</td>
	</tr>
	<tr>
		<td>YdgG</td>
		<td>Built in high copy pGGA cloning vector due to simplicity of using Golden Gate assembly. YdgG is a membrane transport protein, not native to the Lsr Operon, which exports AI-2 out of the cell (Herzberg et al 2006). The YdgG gene is regulated by a T7 driven promoter in order to cooperate with the AI-2 sensitive plasmid that this part is used in conjunction with.  </td>
		<td> spacer_ pT7_rbs_YdgG_term_spacer</td>
	</tr>
	<tr>
		<td>YdgG 2nd plasmid</td>
		<td>Built in high copy pGGA cloning vector due to simplicity of using Golden Gate assembly.This is a composite part of YdgG and I746909. </td>
		<td>  pT7_rbs_sfGFP_term_YdgG</td>
	</tr>
	<tr>
		<td>LsrK-LuxS 2nd plasmid</td>
		<td>Built in high copy pGGA cloning vector due to simplicity of using Golden Gate assembly.This is a composite part of LsrK and LuxS put together with I746909. This part allows the upregulation of LuxS and LsrK so that intracellular AI-2 production and phosphorylation are increased concurrently. 
		</td>
		<td>pt7_rbs_sfGFP_term_LsrK_LuxS</td>
	</tr>
	<tr>
		<td>LsrK-YdgG 2nd plasmid</td>
		<td>Built in high copy pGGA cloning vector due to simplicity of using Golden Gate assembly.This is a composite part of LsrK and YdgG put together with I746909.  This part allows the upregulation of LuxS and YdgG so that intracellular AI-2 production and export out of the cell are increased concurrently.  </td>
		<td>pt7_rbs_sfGFP_term_LsrK_YdgG</td>
	</tr>
	<tr>
		<td>LsrK-LuxS-YdgG 2nd plasmid</td>
		<td>Built in high copy pGGA cloning vector due to simplicity of using Golden Gate assembly.  </td>
		<td>pt7_rbs_sfGFP_term_LsrK_LuxS_YdgG</td>
	</tr>
	<tr>
		<td>1st plasmid</td>
		<td>This plasmid contains an AI-2 regulated promoter, pLsr, which is bidirectional. Dimers of LsrR bind to and repress this promoter. However, AI-2P can bind to these dimers and cause them to dissociate, depressing the promoter.  Since the expression of this plasmid produces LsrR, which represses the promoter pLsr, this system is self regulating. </td>
		<td> pLsr_rbs_LsrR_rbs_T7_term </td>
	</tr>
</table>

# References 
Gonzalez (2006)