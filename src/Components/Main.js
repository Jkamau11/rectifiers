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
                        <td>{props.BlockChainPendingIntegration}</td>
                        <td>{((props.BlockChainIdeanNetEcoIntegration/props.BlockAllocatedUnits) * 100).toFixed(0)}%</td>
                    </tr>
                    <tr>
                    <td>2</td>
                        <td className="p-name"><b>{props.Partner2}</b></td>
                        <td>{props.BroadcomAllocatedUnits}</td>
                        {/* <td>{props.BroadcomChainIssuedUnits}</td> */}
                        <td>{props.BroadcomCommissionedUnits}</td>
                        <td>{props.BroadcomIdeanNetEcoIntegration}</td>
                        <td>{props.BroadcomPendingIntegration}</td>
                        <td>{props.BroadcomEndtoEndCompletion}%</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td className="p-name"><b>{props.Partner3}</b></td>
                        <td>{props.CamusatAllocatedUnits}</td>
                        {/* <td>{props.CamusatIssuedUnits}</td> */}
                        <td>{props.CamusatCommissionedUnits}</td>
                        <td>{props.CamusatIdeanNetEcoIntegration}</td>
                        <td>{props.CamusatPendingIntegration}</td>
                        <td>{props.CamusatEndtoEndCompletion}%</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td className="p-name"><b>{props.Partner4}</b></td>
                        <td>{props.EgyproAllocatedUnits}</td>
                        {/* <td>{props.EgyproIssuedUnits}</td> */}
                        <td>{props.EgyproCommissionedUnits}</td>
                        <td>{props.EgyproIdeanNetEcoIntegration}</td>
                        <td>{props.EgyproPendingIntegration}</td>
                        <td>{props.EgyproEndtoEndCompletion}%</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td className="p-name"><b>{props.Partner5}</b></td>
                        <td>{props.NextgenAllocatedUnits}</td>
                        {/* <td>{props.NextgenIssuedUnits}</td> */}
                        <td>{props.NextgenCommissionedUnits}</td>
                        <td>{props.NextgenIdeanNetEcoIntegration}</td>
                        <td>{props.NextgenPendingIntegration}</td>
                        <td>{props.NextgenEndtoEndCompletion}%</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td className="p-name"><b>{props.Partner6}</b></td>
                        <td>{props.PaviconAllocatedUnits}</td>
                        {/* <td>{props.PaviconIssuedUnits}</td> */}
                        <td>{props.PaviconCommissionedUnits}</td>
                        <td>{props.PaviconIdeanNetEcoIntegration}</td>
                        <td>{props.PaviconPendingIntegration}</td>
                        <td>{props.PaviconEndtoEndCompletion}%</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td className="p-name"><b>{props.Partner7}</b></td>
                        <td>{props.TetranetAllocatedUnits}</td>
                        {/* <td>{props.TetranetIssuedUnits}</td> */}
                        <td>{props.TetranetCommissionedUnits}</td>
                        <td>{props.TetranetIdeanNetEcoIntegration}</td>
                        <td>{props.TetranetPendingIntegration}</td>
                        <td>{props.TetranetEndtoEndCompletion}%</td>
                    </tr>
                    <tr className="last-table-row">
                        <td colspan="2">{props.lebel}</td>
                        <td>{props.AllUnits}</td>
                        {/* <td>{props.totalSites}</td> */}
                        <td>{props.totalCommissioned}</td>
                        <td>{props.totalIntegrations}</td>
                        <td>{props.pendingIntegrations}</td>
                        <td>{props.EndToEndCompletion}%</td>
                    </tr>
            </table>
</div>
        
        
    )
}

export default Main;
