import exp_wildcard from '../Assets/exp_wildcard.jpg'
import lo_wildcard from '../Assets/lo_wildcard.png'
import exp_scortex from '../Assets/exp_scortex.jpg'
import lo_scortex from '../Assets/lo_scortex.png'
import exp_42 from '../Assets/exp_42.jpg'
import lo_42 from '../Assets/lo_42.png'

export const carouselData = [
  {
		label: '42 - Etudiant',
    imgPath: exp_42,
    title: '42Born2Code',
    logo: lo_42,
    link: 'https://www.42.fr/',
    description:'42 l\'école demain, avec sa pédagogie basée sur le peer-to-peer. Je fais parti de l\'aventure depuis novembre 2017 !',
    bodyP1: "42 est une formation unique, pas besoin de diplôme pour y aller, elle forme les développeurs de demain.",
    bodyP2: "J'ai commencé 42 en fin 2017 après avoir reussi ma piscine de selection du mois de juillet. C'est pour moi une grande experience, j'ai beaucoup appris durant mes deux années d'étude.",
    bodyP3: "Le C est le langage principal que l'on apprend au sein de 42. Ce language m'a permis d'acquerir une bonne logique du code."
  },
	{
		label: 'Wildcard - Developpeur Front-end',
    imgPath: exp_wildcard,
    title: 'Wildcard',
    logo: lo_wildcard,
    link: 'https://www.w6d.io/',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed nibh sem. Aenean nec felis sed quam tristique feugiat ac sed enim. Nullam turpis metus',
    bodyP1: 'Lorem ipsum dollor sit amet',
  },
  {
		label: 'Scortex - Annotateur',
    imgPath: exp_scortex,
    title: 'Scortex',
    logo: lo_scortex,
    link: 'https://www.scortex.io/',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed nibh sem. Aenean nec felis sed quam tristique feugiat ac sed enim. Nullam turpis metus',
  }
]

export const readmeData = [
  {
    title: 'Test 01',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed nibh sem. Aenean nec felis sed quam tristique feugiat ac sed enim. Nullam turpis metus',
    imgPath: exp_42,
  },
  {
    title: 'Test 02',
    description:'Lorem ipsum dolor sit amet',
    imgPath: exp_scortex,
  },
  {
    title: 'Test 03',
    description:'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipiscing elit. Morbi sed nibh sem. Aenean nec felis sed quam tristique feugiat ac sed enim. Nullam turpis metus',
    imgPath: exp_wildcard,
  },
  {
    title: 'Test 04',
    description:'Patate',
    imgPath: lo_wildcard,
  },
]
