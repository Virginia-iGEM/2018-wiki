# Experimentation and Documentation  

# iGEM Protocol Handbook

Click <a href="http://2018.igem.org/wiki/images/c/ce/T--Virginia--2018_Virginia_IGEM_Protocol_Handbook.pdf" target="_blank">here</a> to view a curated list of protocols Virginia iGEM has used and refined over the past few years.

# Workflow  

The general workflow of our team occurred as follows. 

1) Creation of and testing of competent cells.   
2) Part assembly using Golden Gate or Gibson assembly.    
3) Transformation.    
4) Colony picking for overnight cultures and restreaking.   
5) Culture miniprep and glycerol stock creation.    
6) Digestion and gel electrophoresis of miniprep product.   
7) Growth and sampling for Flow Cytometry.   
8) Creation of BioBrick.    
9) Sequencing of final part.  

# Overall Laboratory Tips

<figure>
	<img src="/images/Wetlab/Streaking.png" alt=Streaking>
	<figcaption> Restreak places using this or similar techniques. Resterlize and cool inoculation loop after each step. </figcaption>
</figure>
  
-  Always check the proper storage temperature for buffers, reagents, etc.          
-  Buffers that freeze at -20˚C and need to be thawed for each use should be aliquoted into usable amounts. Many of these buffers degrade after multiple thawings. Aliquoting ensures that each buffer you use has only been thawed once before and minimizes losses if left out of the freezer.    
-  Fully thaw and mix all buffers before use. Use the vortex.      
-  Take enzymes out of the -20˚C only before you are about to add them.     
-  Glass spreaders take a long time to cool. On your first time spreading, sterilize one, wait until you believe it is cool, then touch the glass to get an idea of the time it takes.    
-  When growing overnight cultures for miniprep from a ligation, choose at least 7-9 colonies from each plate of transformants and grow them is separate tubes. This increases the chances of miniprep with a successful gel and without backbone reannealing.    
*Below are unique protocols that UVA IGEM teams have developed and edited over the years   

# Protocols

## Chemically Competent E. Coli Cells

### Materials:
• Pre-culture of XL1-blue, DH5α, or SCS       
• 500 mL LB       
• 2800 mL Fernbach flask       
• 2.5 mL 2M MgCl2       
• Cooling culture shaker       
• Two 500 mL centrifuge bottle, autoclaved and chilled at 4C       
• Liquid N2       
• 80-160 1.5mL Eppendorf Tubes, autoclaved and chilled at 4C       
• Cold Room        
• 3 mL DMSO       
• 500mL Transformation Buffer       

### Transformation Buffer:
1) Add 350 mL of MilliQ water.     
2) Then add 15 mM CaCl2●2H2O (7.5mL of 1M).     
3) Then add 250 mM KCl (50 mL of 2.5M).     
4) Then add 10 mM PIPES-disodium salt pH 7.0 - adjust with KOH (10 mL of 0.5M).     
5) Adjust pH to 7.0 with 1M KOH or NaOH.     
6) Then add 55 mM MnCl2●4H2O (55 mL of 0.5M).     
7) Fill up volume to 500mL using MililQ Water.     
8) Filter Sterilize.     
9) Chill at 4C before use.     

### Procedure:       
1) Prepare an O/N culture of cells in 1 mL of LB at 37C incubating shaker.        
2) Inoculate the O/N culture in 500 mL of LB in the 2800 mL Fernbach Flask.        
3) Add 2.5 mL of 2M  MgCl2 to the LB in the Fernbach flask.        
4) Grow culture at 18C in the cooling shaker. Grow cells until the OD=0.12.        
5) Take frequent measurements. Usually takes 30-40 hours for DH5a.        
6) Recommended that you plot a curve to predict when the cells will be fully grown.        
7) Transfer culture to centrifuge bottles and incubate on ice for 10 minutes.        
8) Centrifuge at 5,000 rpm [SLA-1000 Rotor] for 10 minutes at -4C.        
9) Decant supernatant and resuspend pellet in 150 mL transformation buffer.        
10) Centrifuge at 5,000 rpm [SLA-1000 Rotor] for 10 minutes at -4C.        
11) Decant supernatant and resuspend by gently pipetting the pellet up and down in 40 mL transformation buffer.        
12) Add 3 mL DMSO. While adding the DMSO, swirl the solution of cells to prevent excess exposure to the DMSO.        
13) Aliquot ~250-500 μL (recommend 300 μL) of cells to each Eppendorf tube. (500 μL will be more than what is needed for most transformations, but will require less pipetting, tubes, and freezer boxes.).        
14) After each Eppendorf tube is filled, quickly freeze it in liquid N2.        
15) Store cells at -80C.        

### Competency Check:

1) Add 1uL of BBa_J04450 to 300uL of competent cells. **Update based on Competent Cell Test Kit provided in your year by iGEM**.             
2) Incubate on ice for 10 mins.             
3) Heat shock for 2 mins at 42C.             
4) Spread 30uL of cells on LB+Amp plate .             
5) If you can see 100 colonies, then competency is 1x10^9/ug DNA for 300ul E. coli; usually you can get at least 0.1-1x10^8/ug competency.        

## Flow Cytometry for GFP Expression Measurement

### Protocol for Measuring GFP Expression from Flow Cytometry Center at UVA
1) Grow an overnight culture of bacteria of interest. Always grow a negative control culture also that has no GFP and a positive control that has GFP.
2) From overnight culture, inoculate a 1000 uL into 4 mL of LB. 
3) At OD~0.4, take first sample. This will be t = 0 mins. Take 350uL from culture and inoculate into 650uL of LB **Label tubes properly - VERY IMPORTANT**. Place sample in 4C fridge. 
4) Take a sample every 60 minutes for the next 6 hours and repeat step 3a & 3b each time.                
5) ~60 mins before flow cytometry appointment, take cells out of 4C fridge.                
6) Spin down cells for 2 minutes at 8,000 rpm.                
7) Resuspend pellet GENTLY in 1 mL of PBS (DO NOT VORTEX).                
8) Spin down cells again for 2 minutes at 8,000 rpm.                
9) Resuspend pellet gently again in 1 mL of PBS (DO NOT VORTEX).                
10) Transfer samples from eppendorf tubes to flow cytometry tubes and transport on ice to the center.             
11) Collect flow cytometry measurements with at least 40,000 events for each run.                

## Transformation

**This protocol is optimized for DH5a E. Coli Competent Cells.**
### Materials

• DH5a competent cells            
• Plasmid of interest            
• LB agar plates with reperspective antibiotic           
• LB media            
*Before starting set water bath to 42C      

### Procedure    
1) Thaw competent cells on ice. Transfer 100 uL of competent cells into separate tube and add 1ul of plasmid.         
For ligation reactions, add 2-4 uL of plasmid. Pipet up and down to mix thoroughly.               
2) Incubate on ice for 15-20 minutes.                
3) Heat shock cells in water bath at 42C for 90 seconds.         
4) Immediately place cells back on ice for 4 minutes.        
5) Add 900ul of LB media to cells and grow them out in the shaker at 37C for 1 hour. For kanamycin and ampicillin resistant plasmids, the cells can be grown out for a shorter time.        
6) Spin down cells at 8000 rpm for 2 minutes. Discard 800ul of supernatant.         
7) Resuspend the cell pellet in the remaining 200 uL of media left in the tube.        
8) Plate 150 uL of cells in one plate and 50 uL of cells on another plate. Sterilize spreader using ethanol and flame. Then let the spreader cool down before using it. Take respective amount of cells and pipette them onto the plate. Use spreader to thoroughly spread the cells around the plate.         
9) Incubate at 37C overnight.        

## Miniprep
Completed using GenScript QuickClean II Plasmid miniprep kit.

## Digestion
Completed according to NEB guidelines.




