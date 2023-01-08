import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { IProduct } from "../@types/cart"
import { useAppDispatch } from "../app/hooks"
import { increment } from "../features/cartSlice"

interface Props {
  product: IProduct
}

const Product = ({ product }: Props) => {
  const dispatch = useAppDispatch()
  return (
    // <div>
    //   <p>Name:{product.name}</p>
    //   <p>Price:{product.price}</p>
    //   <button
    //
    //   >
    //     Add
    //   </button>
    // </div>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={product?.image}
        title={product?.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            dispatch(increment(product))
          }}
          variant="contained"
          size="small"
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default Product
