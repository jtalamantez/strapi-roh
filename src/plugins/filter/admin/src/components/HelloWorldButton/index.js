import React from "react";
import { Button } from "@strapi/design-system";
import {Seed} from "@strapi/icons";
//import { useCMEditViewDataManager, useQueryParams } from "@strapi/helper-plugin";


const HelloWorldButton = () => {

    const buttonClick = async () => {
        let ids = []
        document.querySelectorAll('input[type="checkbox"]:checked').forEach(c => {
            //Find the nearest 'th' parent element
            let tr = c.closest('tr');
            //Now get the th inside the tr with aria-colindex="2"
            let td = tr.querySelector('td[aria-colindex="2"]');
            //Now get the text value of the span element inside the td
            let idVal = td.querySelector('span').textContent
            ids.push(idVal)
        })
        console.log("Selected ids: ", ids) 
        //Call the backend API
        const response = await fetch('https://roh-backend-rd8bg.ondigitalocean.app/api/custom', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ids: ids})
        })
        const data = await response.json()
        console.log("RESPON SE",data)
        
        //Refresh the page
        window.location.reload()
    }

  return (
    <Button
      variant="secondary"
      startIcon={<Seed />}
      onClick={() => buttonClick()}
    >
      Make ROH Original
    </Button>
  );
};

export default HelloWorldButton;