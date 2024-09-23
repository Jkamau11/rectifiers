
const CreateHtmlElement = ()=>{

    let name = prompt("What is your name ?")
    
    const diva = document.createElement('div');

    const para = document.createElement('p');

    para.innerHTML = name;

    diva.appendChild(para);

    document.body.appendChild(diva);

};

let Partners = [
    {
        id : 1,
        Partner : "Blockchain",
        IssuedUnits :5,
        CommissionedUnits : 5,
        IdeanNetEcoIntegration : 5,
        PendingIntegration :0,
        PartnerEndtoEndCompletion : 100
    },
    {
        id : 2,
        Partner : "Broadcom",
        IssuedUnits : 11,
        CommissionedUnits : 11,
        IdeanNetEcoIntegration :11,
        PendingIntegration : 0,
        PartnerEndtoEndCompletion : 100
    },
    {
        id : 3,
        Partner : "Camusat",
        IssuedUnits : 7,
        CommissionedUnits : 6,
        IdeanNetEcoIntegration : 3,
        PendingIntegration : 3,
        PartnerEndtoEndCompletion : 43
    },
    {
        id : 4,
        Partner : "Egypro",
        IssuedUnits : 10,
        CommissionedUnits : 10,
        IdeanNetEcoIntegration : 10,
        PendingIntegration : 0,
        PartnerEndtoEndCompletion : 100
    },
    {
        id : 5,
        Partner : "Nextgen",
        IssuedUnits : 4,
        CommissionedUnits : 4,
        IdeanNetEcoIntegration : 4,
        PendingIntegration : 0,
        PartnerEndtoEndCompletion : 100
    },
    {
        id : 6,
        Partner : "Pavicon",
        IssuedUnits : 10,
        CommissionedUnits : 8,
        IdeanNetEcoIntegration : 7,
        PendingIntegration :1,
        PartnerEndtoEndCompletion : 70
    },
    {
        id : 7,
        Partner : "Tetranet",
        IssuedUnits : 10,
        CommissionedUnits : 8,
        IdeanNetEcoIntegration : 8,
        PendingIntegration : 0,
        PartnerEndtoEndCompletion : 73
    }
]

// const partnerProgress = ()=>{
//     let partnerName = document.getElementById('partnerName');

//     let allData = Partners.map((correctData)=>{

//         return correctData.Partner
//     })

//     console.log(allData)

//     console.log(partnerName.value)

//     for(let i = 0; i<= allData.length; i++){
//         console.log(allData[i])
        
//         if(partnerName.value === allData[i]){

//             console.log('Good Job')
//         }else{
//             console.log("Not found")
//         }

//     }
    // console.log(allData)

