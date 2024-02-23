import React from "react";
import { useState } from "react";
import { Button, SingleSelect, SingleSelectOption } from "@strapi/design-system";

import {Seed} from "@strapi/icons";

/*
import { useCMEditViewDataManager } from '@strapi/helper-plugin'; // FOR IMPORT
const { allLayoutData, modifiedData } = useCMEditViewDataManager();
const { uid } = allLayoutData.contentType;
*/


const HelloWorldButton = () => {

    const excludedPagePaths = [
        "/admin/content-manager/collectionType/api::client.client",
        "/admin/content-manager/collectionType/api::location.location",
        "/admin/content-manager/collectionType/plugin::users-permissions.user",
        
    ];


      // Don't render the component if the current page is the excluded page
      if (excludedPagePaths.includes(window.location.pathname)) {
        return null;
    }

    const buttonClick = async () => {

      console.log("HEY YTRTEST")


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
      Make ROH 
    </Button>


  );
};

export default HelloWorldButton;