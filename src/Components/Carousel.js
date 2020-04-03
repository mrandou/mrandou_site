import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CloseIcon from '@material-ui/icons/Close';
import Grow from '@material-ui/core/Grow';
import { carouselData } from '../Data/Data';
import { carouselStyle } from '../Style/CarouselStyle'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableTextMobileStepper() {
	const classes = carouselStyle();
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const [autoActive, setAuto] = React.useState(true);
	const [infosActive, setInfos] = React.useState(false);
	const maxSteps = carouselData.length;
	const isSmall = useMediaQuery('(min-width:800px)');

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleStepChange = step => {
		setActiveStep(step);
	};

	const handleAutoChange = () => {
		setAuto(!autoActive)
	}

	const handleInfos = () => {
		if (autoActive && !infosActive)
			handleAutoChange();
		setInfos(!infosActive);
	}

	const largeScreenView = (step) => {
		return (
			<div className={classes.side}>
				<img 
					src={step.logo}
					alt={step.title}
					title={"Aller sur le site de " + step.title + ", lien : " + step.link}
					onClick={() => window.open(step.link)}
				/>
				<h2>{step.title}</h2>
				<p>{step.description}</p>
			</div>
		);
	}

	const smallScreenView = (step) => {
		return (
			<div className={classes.side}>
				<img 
					src={step.logo}
					alt={step.title}
					title={"Go to the " + step.title + " website: " + step.link}
					onClick={() => window.open(step.link)}
					style={{maxHeight: '95px'}}
				/>
				<h4>{step.title}</h4>
			</div>
		);
	}

	return (
		<div className={classes.root}>
			<Paper square elevation={0} className={classes.header}>
				<Typography>{carouselData[activeStep].label}</Typography>
			</Paper>
			<span onClick={handleInfos}>
				<Fab color="primary" className={!infosActive ? classes.icon : classes.closeIcon} aria-label="info">
					{ !infosActive ? <SearchIcon /> : <CloseIcon /> }
				</Fab>
			</span>
			{
				!autoActive
				? <PauseIcon className={classes.iconState} />
				: <PlayArrowIcon className={classes.iconState} />
			}
			<AutoPlaySwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
				autoplay={autoActive}
				interval={5000}
			>
				{carouselData.map((step, index) => (
					<div key={step.label}>
						{Math.abs(activeStep - index) <= 2 ? (
							<div>
									<div className={classes.infos}>
										<Grow
											in={infosActive}
											{...(infosActive ? { timeout: 1000 } : {})}
										>
											<div className={classes.svg}>
												<p>{step.bodyP1}</p>
												<p>{step.bodyP2}</p>
												<p>{step.bodyP3}</p>
											</div>
										</Grow>
									</div>
								{ isSmall ? largeScreenView(step) : smallScreenView(step) }
								<span onClick={handleAutoChange}>
									<img className={classes.pic} src={step.imgPath} alt={step.label} />
								</span>
							</div>

						) : null}
					</div>
				))}
			</AutoPlaySwipeableViews>
			<MobileStepper
				steps={maxSteps}
				position="static"
				variant="text"
				activeStep={activeStep}
				nextButton={
					<Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
						Suivant
						{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
					</Button>
				}
				backButton={
					<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
						{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
						Precedent
					</Button>
				}
			/>
		</div>
	);
}

export default SwipeableTextMobileStepper;
