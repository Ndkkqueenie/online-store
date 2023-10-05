import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Collapse, styled } from '@material-ui/core';
import { AddShoppingCart, Favorite, Share, ExpandMore } from '@material-ui/icons';

//import useStyles from './styles';

const ExpandMoreIcon = styled((props) => {
	const { expand, ...other } = props;
		return <IconButton {...other} />;
	})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

const Product = ({ product, onAddToCart }) => {
	//const classes = useStyles();

	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia 
				component="img"
				height="194" 
				image={product.image?.url} 
				title={product.name} 
			/>
			<CardContent>
				<div >
					<Typography variant='subtitle1' gutterBottom>
						{product.name}
					</Typography>
					<Typography variant='subtitle2' >
						{product.price.formatted_with_symbol}
					</Typography>
				</div>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<Favorite />
				</IconButton>
				<IconButton aria-label="share">
					<Share />
				</IconButton>
				<ExpandMoreIcon
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMore />
				</ExpandMoreIcon>
				<IconButton aria-label='Add to Cart' onClick={() => onAddToCart(product.id, 1)}>
					<AddShoppingCart />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>Description:</Typography>
					<Typography 
						dangerouslySetInnerHTML={{__html: product.description}} >
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}

export default Product;