import React, { useState } from 'react';
import { 
   Button, 
   Card, 
   CardContent, 
   CardMedia,  
   Dialog, 
   DialogActions, 
   DialogContent, 
   Grid,
   Typography 
} from '@material-ui/core';
import './experience.scss';

const experiences = [
   {
      company: "OpenText",
      position: "Software Engineer Intern",
      date: "January 2020 - April 2020",
      description: `As an enterprise software engineer intern at OpenText in an agile environment, I was tasked with taking on multiple task
         in regards to maintaining or improving product quality. This involved implementing new UI components, bug fixes, or developing
         scripts for monitoring PCI compliance. Just to name a few.`
   },
   {
      company: "SESA",
      position: "Web Developer",
      date: "October 2019 - Present",
      description: `
         For the Software Engineering Student Association, 
         I was responsible for helping with implementing React components for easy access 
         to information and advice in relation to programs/courses for UOttawa students in computer/software programs.`
   },
   {
      company: "Mitel",
      position: "Software Developer Intern",
      date: "May 2019 - August 2019",
      description: `At Mitel, I was a backend developer for the CloudLink team. There, I was tasked with projects involving issues
         on Github that would require me develop create solutions using AWS, using/creating APIs and developing SDKs. All of which
         helps to aim streamline certain aspects in development.`
   }
]

const Experience = () => {


   return(
      <section className='experience'>
        
      </section>
   );
}

export { Experience };