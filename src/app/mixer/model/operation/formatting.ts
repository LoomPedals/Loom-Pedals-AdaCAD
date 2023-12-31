import { Draft } from "../../../core/model/datatypes";
import { generateMappingFromPattern, getDraftName, wefts, warps } from "../../../core/model/drafts";

/**
 * transfers data about systems and shuttles from input drafts to output drafts. 
 * @param d the output draft
 * @param op_input.drafts the input drafts
 * @param type how to handle the transfer (first - use the first input data, interlace, layer)
 * @returns 
 */
export function transferSystemsAndShuttles(d: Draft, drafts: Array<Draft>, params: any, type: string){
    if (drafts.length === 0) return;

    let rowSystems: Array<Array<number>> =[];
    let colSystems: Array<Array<number>> =[];
    let uniqueSystemRows: Array<Array<number>> = [];
    let uniqueSystemCols: Array<Array<number>> = [];

    let rowShuttles: Array<Array<number>> =[];
    let colShuttles: Array<Array<number>> =[];
    let standardShuttleRows: Array<Array<number>> = [];
    let standardShuttleCols: Array<Array<number>> = [];


    switch (type) {
      case 'first':
        // if there are multiple op_input.drafts, 
        d.colShuttleMapping =  generateMappingFromPattern(d.drawdown, drafts[0].colShuttleMapping,'col', 3);
        d.rowShuttleMapping =  generateMappingFromPattern(d.drawdown, drafts[0].rowShuttleMapping,'row', 3);
        d.colSystemMapping =  generateMappingFromPattern(d.drawdown, drafts[0].colSystemMapping,'col', 3);
        d.rowSystemMapping =  generateMappingFromPattern(d.drawdown, drafts[0].rowSystemMapping,'row', 3);
        
        break;

      case 'jointop':
        // if there are multipleop_input.drafts, 
        d.colShuttleMapping = generateMappingFromPattern(d.drawdown, drafts[0].colShuttleMapping, 'col', 3);
        d.colSystemMapping = generateMappingFromPattern(d.drawdown, drafts[0].colSystemMapping, 'col', 3);

        break;

      case 'joinleft':
        //if there are multiple op_input.drafts, 
        d.rowShuttleMapping =  generateMappingFromPattern(d.drawdown, drafts[0].rowShuttleMapping,'row', 3);
        d.rowSystemMapping =  generateMappingFromPattern(d.drawdown, drafts[0].rowSystemMapping,'row', 3);

        break;

      case 'second':

        const input_to_use = (drafts.length < 2) ? drafts[0] : drafts[1];

        d.colShuttleMapping =  generateMappingFromPattern(d.drawdown, input_to_use.colShuttleMapping,'col',3);
        d.rowShuttleMapping =  generateMappingFromPattern(d.drawdown, input_to_use.rowShuttleMapping,'row',3);
        d.colSystemMapping =  generateMappingFromPattern(d.drawdown, input_to_use.colSystemMapping,'col',3);
        d.rowSystemMapping =  generateMappingFromPattern(d.drawdown, input_to_use.rowSystemMapping,'row',3);

        break;
        
      case 'materialsonly':

        d.colShuttleMapping =  generateMappingFromPattern(d.drawdown, drafts[1].colShuttleMapping,'col',3);
        d.rowShuttleMapping =  generateMappingFromPattern(d.drawdown, drafts[1].rowShuttleMapping,'row',3);
        d.colSystemMapping =  generateMappingFromPattern(d.drawdown, drafts[0].colSystemMapping,'col',3);
        d.rowSystemMapping =  generateMappingFromPattern(d.drawdown, drafts[0].rowSystemMapping,'row',3);
       
        break;

      case 'interlace':
        rowSystems = drafts.map(el => el.rowSystemMapping);
        uniqueSystemRows = this.ss.makeWeftSystemsUnique(rowSystems);

        rowShuttles = drafts.map(el => el.rowShuttleMapping);
        standardShuttleRows = this.ms.standardizeLists(rowShuttles);

        d.drawdown.forEach((row, ndx) => {

          const select_array: number = ndx % drafts.length; 
          const select_row: number = Math.floor(ndx / drafts.length) % wefts(drafts[select_array].drawdown);
          d.rowSystemMapping[ndx] = uniqueSystemRows[select_array][select_row];
          d.rowShuttleMapping[ndx] = standardShuttleRows[select_array][select_row];

        });
     
        break;

      case 'layer':
        rowSystems=drafts.map(el => el.rowSystemMapping);
        colSystems =drafts.map(el => el.colSystemMapping);
        uniqueSystemRows = this.ss.makeWeftSystemsUnique(rowSystems);
        uniqueSystemCols= this.ss.makeWarpSystemsUnique(colSystems);
  
        rowShuttles = drafts.map(el => el.rowShuttleMapping);
        colShuttles = drafts.map(el => el.colShuttleMapping);
        standardShuttleRows = this.ms.standardizeLists(rowShuttles);
        standardShuttleCols = this.ms.standardizeLists(colShuttles);
  
        d.drawdown.forEach((row, ndx) => {
  
          const select_array: number = ndx %drafts.length; 
          const select_row: number = Math.floor(ndx /drafts.length)%wefts(drafts[select_array].drawdown);
        
          d.rowSystemMapping[ndx] = uniqueSystemRows[select_array][select_row];
          d.rowShuttleMapping[ndx] = standardShuttleRows[select_array][select_row];

        });
  
        for (let i = 0; i < wefts(d.drawdown); i++) {
          const select_array: number = i % drafts.length; 
          const select_col: number = Math.floor(i /drafts.length) % warps(drafts[select_array].drawdown);
          d.colSystemMapping[i] = uniqueSystemCols[select_array][select_col];
        d.colShuttleMapping[i] = standardShuttleCols[select_array][select_col];
        }     
        
        break;

    case 'stretch':
        d.colShuttleMapping =  generateMappingFromPattern(drafts[0].drawdown, drafts[0].colShuttleMapping,'col', 3);
        d.rowShuttleMapping =  generateMappingFromPattern(drafts[0].drawdown, drafts[0].rowShuttleMapping,'row', 3);
        d.colSystemMapping =  generateMappingFromPattern(drafts[0].drawdown, drafts[0].colSystemMapping,'col', 3);
        d.rowSystemMapping =  generateMappingFromPattern(drafts[0].drawdown, drafts[0].rowSystemMapping,'row', 3);
        
        //need to determine how to handle this - should it stretch the existing information or copy it over
    break; 
    }
}
  
export function formatName(drafts: Array<Draft>, op_name: string) : string {
    let combined: string = "";
    if (drafts.length == 0) {
      combined = op_name;
    } else {
      combined = drafts.reduce((acc, el) => {
        return acc + "+" + getDraftName(el);
      }, "");

      combined = op_name + "(" + combined.substring(1) + ")";
    }
    return combined;
  }