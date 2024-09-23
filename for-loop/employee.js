const employees = [
    {
        photo : 'https://labourlawadvisor.in/blog/wp-content/uploads/2023/03/How-to-get-out-of-your-employment-bond-1.png',
        name : "James Macharia",
        Title :  "This is Optimization Engineer",
        Company : "Safaricom PLC"
    },
    {
        photo : 'https://cdn.prod.website-files.com/5e6aa7798a5728055c457ebb/64e3ae44c1f35831121b218a_20230821T0630-85551667-531e-40b8-8c88-55a239030fea.jpeg',
        name : "Patrick Muoki",
        Title :  "This is Planning Engineer",
        Company : "Safaricom PLC"
    },
    {
        photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvtEbVagFAf3LtT4CxFoWTwi1GsH27F2P1mr4VFu9DdmwhsK6LeQuNXupKRf63vJcRgO8&usqp=CAU',
        name : "Paul Kinyanjui",
        Title :  "This is Planning Engineer",
        Company : "Safaricom PLC"
    },
    {
        photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvtEbVagFAf3LtT4CxFoWTwi1GsH27F2P1mr4VFu9DdmwhsK6LeQuNXupKRf63vJcRgO8&usqp=CAU',
        name : "Thomas Kaima",
        Title :  "This is Implementation Engineer",
        Company : "Safaricom PLC"
    },
    {
        photo : 'https://labourlawadvisor.in/blog/wp-content/uploads/2023/03/How-to-get-out-of-your-employment-bond-1.png',
        name : "James Macharia",
        Title :  "This is Optimization Engineer",
        Company : "Safaricom PLC"
    },
    {
        photo : 'https://cdn.prod.website-files.com/5e6aa7798a5728055c457ebb/64e3ae44c1f35831121b218a_20230821T0630-85551667-531e-40b8-8c88-55a239030fea.jpeg',
        name : "Patrick Muoki",
        Title :  "This is Planning Engineer",
        Company : "Safaricom PLC"
    },
    {
        photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvtEbVagFAf3LtT4CxFoWTwi1GsH27F2P1mr4VFu9DdmwhsK6LeQuNXupKRf63vJcRgO8&usqp=CAU',
        name : "Paul Kinyanjui",
        Title :  "This is Planning Engineer",
        Company : "Safaricom PLC"
    },
    {
        photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvtEbVagFAf3LtT4CxFoWTwi1GsH27F2P1mr4VFu9DdmwhsK6LeQuNXupKRf63vJcRgO8&usqp=CAU',
        name : "Thomas Kaima",
        Title :  "This is Implementation Engineer",
        Company : "Safaricom PLC"
    },
  
]

// console.log(employees)

function displayEmployee(){

    let employeesSection = ``

    for(let i =0; i < employees.length; i++){

        employeesSection = employeesSection + 
        
        `
        <div class="employee">
            <img class="image" src="${employees[i].photo}" alt="">
            <div class="dscription">
                <h4>${employees[i].name}</h4>
                <p> Title : ${employees[i].Title}</p>
                <p>Company : ${employees[i].Company} </p>
            </div>
         </div>
        `
    
        let allData = document.getElementById('employeeName');
    
        allData.innerHTML = employeesSection;
    
    
        console.log(allData);
    
    }

}

displayEmployee()


