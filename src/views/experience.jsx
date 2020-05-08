import React from 'react';
import '../styles/experience.scss';
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

const experiences = [
   {
      company: "OpenText",
      position: "Software Engineer Intern",
      thumbnail: require("../assets/img/thumbnails/opentext_thumbnail.jpg"),
      date: "January 2020 - April 2020",
      logo: require("../assets/img/opentext.png"),
      description: `As an enterprise software engineer intern at OpenText in an agile environment, I was tasked with taking on multiple task
         in regards to maintaining or improving product quality. This involved implementing new UI components, bug fixes, or developing
         scripts for monitoring PCI compliance. Just to name a few.`
   },
   {
      company: "SESA",
      position: "Web Developer",
      thumbnail: require("../assets/img/thumbnails/sesa_thumbnail.png"),
      date: "October 2019 - Present",
      logo: require("../assets/img/sesa.png"),
      description: `
         For the Software Engineering Student Association, 
         I was responsible for helping with implementing React components for easy access 
         to information and advice in relation to programs/courses for UOttawa students in computer/software programs.`
   },
   {
      company: "Mitel",
      position: "Software Developer Intern",
      thumbnail: require("../assets/img/thumbnails/mitel_thumbnail.jpg"),
      date: "May 2019 - August 2019",
      logo: require("../assets/img/mitel.png"),
      description: `At Mitel, I was a backend developer for the CloudLink team. There, I was tasked with projects involving issues
         on Github that would require me develop create solutions using AWS, using/creating APIs and developing SDKs. All of which
         helps to aim streamline certain aspects in development.`
   }
]

class Experience extends React.Component{
   state = {
      open: false,
      cardIndex: 0
   };

   showContent(index){
      this.setState({ open: true, cardIndex: index});
   }

   closeContent(){
      this.setState({ open: false });
   }

   render(){
      return(
         <section style={{ flexDirection: "column" }}>
            <h1 id="experience_header">Click on a polaroid to learn more!</h1>
            <Grid container id="polaroids" spacing={2}>
               <Grid item xs={12}>
                  <Grid container spacing={3} direction="row" justify="center"> 
                     {
                        experiences.map((experience, index) => {
                           return(
                              <Grid item key={index}>
                                 <Card className="info_card" onClick={() => {this.showContent(index)}}>
                                    <CardContent>
                                       <CardMedia
                                          style={{ height: 225, filter: "brightness(95%)" }}
                                          image={ experience.thumbnail }
                                       />
                                       <br/>
                                       <Typography className="typography" variant="subtitle2" color="textSecondary">
                                          <p>{experience.date}</p>
                                       </Typography>
                                       <Typography className="typography" variant="h3">
                                          <p>{experience.company}</p>
                                       </Typography>
                                       <Typography className="typography" variant="subtitle2" color="textSecondary">
                                          <p>{experience.position}</p>
                                       </Typography>
                                    </CardContent>
                                 </Card>
                              </Grid>
                           );
                        })
                     }
                  </Grid>
               </Grid>
            </Grid>
            <Dialog
               open={this.state.open}
               onClose={() => {this.closeContent()}}
            >
               <div style={{ background: "whitesmoke" }}>
                  <DialogContent id="postcard">
                        <img id="logo" src={ experiences[this.state.cardIndex].logo } alt="logo"/>
                        <p>{ experiences[this.state.cardIndex].description }</p>
                  </DialogContent>
                  <DialogActions>
                     <Button variant="outlined" color="secondary" onClick={() => {this.closeContent()}} autoFocus>
                     Ok
                     </Button>
                  </DialogActions>
               </div>
            </Dialog>
         </section>
      );
   }
}

export { Experience };