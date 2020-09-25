import React from 'react';

const Display = ({skills}) => {
   return (
      <div>
         {
            skills.map((skill) => {
               return(
                  <li>{skill}</li>
               );
            })
         }
      </div>
   );
}

export { Display }