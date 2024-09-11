import React from "react";

import '../Styles/main.css'

function Main(props){
    return (
        <div className="table-container">
            
            <table cellPadding={1}>
            <caption>Indoor to Outdoor Conversions</caption>
                    <thead className="t-head">
                        <th>#</th>
                        <th>Partner</th>
                        <th>Issued Units</th>
                        {/* <th>Issued Units</th> */}
                        <th>Commissioned Units</th>
                        <th>iDEAN/NetEco Integration</th>
                        <th>Pending Integration</th>
                        <th>End to End Completion</th>
                    </thead>
                    <tr>
                        <td>1</td>
                        <td className="p-name"><b>{props.Partner1}</b></td>
                        <td>{props.BlockAllocatedUnits}</td>
                        {/* <td>{props.BlockChainIssuedUnits}</td> */}
                        <td>{props.BlockChainCommissionedUnits}</td>
                        <td>{props.BlockChainIdeanNetEcoIntegration}</td>
                        <td>{props.BlockChainCommissionedUnits - props.BlockChainIdeanNetEcoIntegration}</td>
                        <td>{((props.BlockChainIdeanNetEcoIntegration/props.BlockAllocatedUnits) * 100).toFixed(0)}%</td>
                    </tr>
                    <tr>
                    <td>2</td>
                        <td className="p-name"><b>{props.Partner2}</b></td>
                        <td>{props.BroadcomAllocatedUnits}</td>
                        {/* <td>{props.BroadcomChainIssuedUnits}</td> */}
                        <td>{props.BroadcomCommissionedUnits}</td>
                        <td>{props.BroadcomIdeanNetEcoIntegration}</td>
                        <td>{props.BroadcomCommissionedUnits - props.BroadcomIdeanNetEcoIntegration}</td>
                        <td>{((props.BroadcomIdeanNetEcoIntegration/props.BroadcomAllocatedUnits) * 100).toFixed(0)}%</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td className="p-name"><b>{props.Partner3}</b></td>
                        <td>{props.CamusatAllocatedUnits}</td>
                        {/* <td>{props.CamusatIssuedUnits}</td> */}
                        <td>{props.CamusatCommissionedUnits}</td>
                        <td>{props.CamusatIdeanNetEcoIntegration}</td>
                        <td>{props.CamusatCommissionedUnits - props.CamusatIdeanNetEcoIntegration}</td>
                        <td>{((props.CamusatIdeanNetEcoIntegration/props.CamusatAllocatedUnits) * 100).toFixed(0)}%</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td className="p-name"><b>{props.Partner4}</b></td>
                        <td>{props.EgyproAllocatedUnits}</td>
                        {/* <td>{props.EgyproIssuedUnits}</td> */}
                        <td>{props.EgyproCommissionedUnits}</td>
                        <td>{props.EgyproIdeanNetEcoIntegration}</td>
                        <td>{props.EgyproCommissionedUnits - props.EgyproIdeanNetEcoIntegration}</td>
                        <td>{((props.EgyproIdeanNetEcoIntegration/props.EgyproAllocatedUnits) * 100).toFixed(0)}%</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td className="p-name"><b>{props.Partner5}</b></td>
                        <td>{props.NextgenAllocatedUnits}</td>
                        {/* <td>{props.NextgenIssuedUnits}</td> */}
                        <td>{props.NextgenCommissionedUnits}</td>
                        <td>{props.NextgenIdeanNetEcoIntegration}</td>
                        <td>{props.NextgenCommissionedUnits - props.NextgenIdeanNetEcoIntegration}</td>
                        <td>{((props.NextgenIdeanNetEcoIntegration/props.NextgenAllocatedUnits) * 100).toFixed(0)}%</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td className="p-name"><b>{props.Partner6}</b></td>
                        <td>{props.PaviconAllocatedUnits}</td>
                        {/* <td>{props.PaviconIssuedUnits}</td> */}
                        <td>{props.PaviconCommissionedUnits}</td>
                        <td>{props.PaviconIdeanNetEcoIntegration}</td>
                        <td>{props.PaviconCommissionedUnits - props.PaviconIdeanNetEcoIntegration}</td>
                        <td>{((props.PaviconIdeanNetEcoIntegration/props.PaviconAllocatedUnits) * 100).toFixed(0)}%</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td className="p-name"><b>{props.Partner7}</b></td>
                        <td>{props.TetranetAllocatedUnits}</td>
                        {/* <td>{props.TetranetIssuedUnits}</td> */}
                        <td>{props.TetranetCommissionedUnits}</td>
                        <td>{props.TetranetIdeanNetEcoIntegration}</td>
                        <td>{props.TetranetCommissionedUnits - props.TetranetIdeanNetEcoIntegration}</td>
                        <td>{((props.TetranetIdeanNetEcoIntegration/props.TetranetAllocatedUnits) * 100).toFixed(0)}%</td>
                    </tr>
                    <tr className="last-table-row">
                        <td colspan="2">{props.lebel}</td>
                        <td>{props.AllUnits}</td>
                        {/* <td>{props.totalSites}</td> */}
                        <td>{props.totalCommissioned}</td>
                        <td>{props.totalIntegrations}</td>
                        <td>{props.totalCommissioned - props.totalIntegrations}</td>
                        <td>{((props.totalIntegrations/props.AllUnits) * 100).toFixed(0)}%</td>
                    </tr>
            </table>
</div>
        
        
    )
}

export default Main;
