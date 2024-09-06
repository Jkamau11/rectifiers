import React from "react";

import NavBar from "./Navabar";

import Main from "./Main"
import "../Styles/main.css"

import Footer from "./Footer";

import RectfierUpgardes from "./Rectifier-Upgardes";

import "../Styles/app.css"

function App(){
  return(
    <div className="App">
      < NavBar/>
      < Main  
      //  BlockChain
          Partner1 = "Blockchain"
          BlockAllocatedUnits = {13}
          // BlockChainIssuedUnits = {5}
          BlockChainCommissionedUnits = {5}
          BlockChainIdeanNetEcoIntegration = {5}
          BlockChainPendingIntegration ={0}
          BlockChainEndtoEndCompletion = {38}

        // Broadcom
        Partner2 = "Broadcom"
        BroadcomAllocatedUnits = {11}
        // BroadcomChainIssuedUnits = {11}
        BroadcomCommissionedUnits = {11}
        BroadcomIdeanNetEcoIntegration = {11}
        BroadcomPendingIntegration ={0}
        BroadcomEndtoEndCompletion = {100}

        // Camusat
        Partner3 = "Camusat"
        CamusatAllocatedUnits = {7}
        // CamusatIssuedUnits = {7}
        CamusatCommissionedUnits = {6}
        CamusatIdeanNetEcoIntegration = {6}
        CamusatPendingIntegration ={0}
        CamusatEndtoEndCompletion = {86}

        // Egypro

        Partner4 = "Egypro"
        EgyproAllocatedUnits = {19}
        // EgyproIssuedUnits = {10}
        EgyproCommissionedUnits = {10}
        EgyproIdeanNetEcoIntegration = {10}
        EgyproPendingIntegration ={0}
        EgyproEndtoEndCompletion = {53}

        //  Nextgen

        Partner5 = "Nextgen"
        NextgenAllocatedUnits = {7}
        // NextgenIssuedUnits = {4}
        NextgenCommissionedUnits = {4}
        NextgenIdeanNetEcoIntegration = {4}
        NextgenPendingIntegration ={0}
        NextgenEndtoEndCompletion = {57}

        // Pavicon
        Partner6 = "Pavicon"
        PaviconAllocatedUnits = {10}
        // PaviconIssuedUnits = {10}
        PaviconCommissionedUnits = {10}
        PaviconIdeanNetEcoIntegration = {9}
        PaviconPendingIntegration ={1}
        PaviconEndtoEndCompletion = {90}

        // Tetranet
        Partner7 = "Tetranet"
        TetranetAllocatedUnits = {11}
        // TetranetIssuedUnits = {11}
        TetranetCommissionedUnits = {9}
        TetranetIdeanNetEcoIntegration = {9}
        TetranetPendingIntegration ={0}
        TetranetEndtoEndCompletion = {82}

        // totals
        lebel = "78 Sites"
        AllUnits = "78"
        // totalSites = {58}
        totalCommissioned = {55}
        totalIntegrations = {54}
        pendingIntegrations = {1}
        EndToEndCompletion = {69}

      />
      < RectfierUpgardes/>
      < Footer />
    </div>
  )
}

export default App;
