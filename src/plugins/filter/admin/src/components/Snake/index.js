import React from "react";
import { useState } from "react";
import { Button, SingleSelect, SingleSelectOption } from "@strapi/design-system";
import {Link} from "@strapi/icons";
//import { useCMEditViewDataManager, useQueryParams } from "@strapi/helper-plugin";


const Snake = () => {
    const excludedPagePaths = [
        "/admin/content-manager/collectionType/api::client.client",
        "/admin/content-manager/collectionType/api::location.location",
        "/admin/content-manager/collectionType/plugin::users-permissions.user",
        
    ];


      // Don't render the component if the current page is the excluded page
      if (excludedPagePaths.includes(window.location.pathname)) {
        return null;
    }

    const [value, setValue] = useState();

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
        //If this is ROH it goes to a seperate backend (formally Make ROH Original)
        const localUrlBase = 'http://localhost:1337/api/'
        const urlBase = 'https://roh-backend-rd8bg.ondigitalocean.app/api/'
        // removed this 3/8 when James noticed it wasn't changing the locations to ROH -->
        //const endpoint = (value === "14") ? 'custom' : 'snake'
        const endpoint = 'snake'

        //Call the backend API
        const response = await fetch(urlBase+endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ids: ids, location: value})
        })
        const data = await response.json()
        console.log("RESPON SE",data)
        
        //Refresh the page
        window.location.reload()
    }

  return (
    <>
    <SingleSelect placeholder="Location" style={{width:200}} onClear={() => {
      setValue(undefined);
    }} value={value} onChange={setValue}>
        <SingleSelectOption value="15">600 W Chicago</SingleSelectOption>
        <SingleSelectOption value="11">Alpenof</SingleSelectOption>
        <SingleSelectOption value="13">Goodsurf</SingleSelectOption>
        <SingleSelectOption value="5">Home Run Dugout</SingleSelectOption>
        <SingleSelectOption value="14">Ring On Hook</SingleSelectOption>
        <SingleSelectOption value="7">Snake River Lodge</SingleSelectOption>
        <SingleSelectOption value="12">Victory Ranch</SingleSelectOption>
      </SingleSelect>
    <Button
      variant="secondary"
      //startIcon={<Link />}
      onClick={() => buttonClick()}
    >
      Update
    </Button>
    </>
  );
};

export default Snake;