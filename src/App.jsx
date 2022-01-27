import {
	Typography,
	AppBar,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CssBaseline,
	Grid,
	Toolbar,
	Container,
	Button
} from '@mui/material';
import {PhotoCameraRounded} from '@mui/icons-material';
import classes from './App.module.css';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const App = () => {
	return (
		<>
			<CssBaseline />
			<AppBar position='relative'>
				<Toolbar>
					<PhotoCameraRounded className={classes.icon} />
					<Typography variant='h6'>Photo Album</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<div className={classes.container}>
					<Container maxWidth='sm' style={{marginTop: '6rem'}}>
						<Typography
							variant='h2'
							align='center'
							color='textPrimary'
							gutterBottom>
							Photo Album
						</Typography>
						<Typography
							variant='h5'
							align='center'
							color='textSecondary'
							paragraph>
							Hello Everyone I am tryinig to learn the Material UI in the React
							and I amd trying to make the sentence as long as possible so that
							I can see how it looks on the screen.
						</Typography>
						<div className={classes.btn}>
							<Grid container spacing={2} justifyContent='center'>
								<Grid item>
									<Button variant='contained' color='primary'>
										Primary Action
									</Button>
								</Grid>
								<Grid item>
									<Button variant='outlined' color='primary'>
										Primary Action
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				<Container className={classes.cardGrid} maxWidth='md'>
					<Grid container spacing={4}>
						{cards.map(card => (
							<Grid item key={card} xs={12} sm={6} md={4}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image='https://source.unsplash.com/random'
										title='Image Title'
									/>
									<CardContent className={classes.cardContent}>
										<Typography variant='h5' gutterBottom>
											Heading
										</Typography>
										<Typography>
											This is a media card. You can use this section to descirbe
											the content.
										</Typography>
									</CardContent>
									<CardActions>
										<Button color='primary' size='small'>
											View
										</Button>
										<Button color='primary' size='small'>
											Edit
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
			<footer className={classes.footer}>
				<Typography variant='h6' align='center' gutterBottom>
					Footer
				</Typography>
				<Typography variant='subtitle1' align='center' color='textSecondary'>
					Something here to give the footer a purpose.
				</Typography>
			</footer>
		</>
	);
};

export default App;
