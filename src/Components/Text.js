import React from 'react';
import { textStyle } from "../Style/TextStyle"
import Typography from '@material-ui/core/Typography';

export default function Text() {
  const classes = textStyle();
  return (
    <div>
      {/* <Typography className={classes.description}>
        Bienvenue sur mon site, laissez moi tout d'abord me présenter.<br/>
        Je m'appelle Maxime Randou, j'ai 23 ans et je vis en région parisienne.<br/>
        Actuellement je suis étudiant en programmation informatique à 42. <br/>
        Je suis à la recherche de diverses missions en qualité de développeur front-end en freelance.
      </Typography> */}
    </div>
  )
}
