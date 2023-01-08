import AddCircleIcon from "@mui/icons-material/AddCircle"
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle"
import { TableFooter } from "@mui/material"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import { ReactElement } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { decrementQuantity, incrementQuantity } from "../features/cartSlice"

function Cart(): ReactElement {
  const cart = useAppSelector((state) => state.cart.products)
  const sub = useAppSelector((state) => state.cart.subTotal)
  const dispatch = useAppDispatch()
  return (
    <div>
      {cart.length && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Product ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row?.id}
                  </TableCell>
                  <TableCell align="center">{row?.name}</TableCell>
                  <TableCell align="center">{row?.price}</TableCell>
                  <TableCell align="center">
                    <AddCircleIcon
                      onClick={() => dispatch(incrementQuantity(row?.name))}
                    />
                    {row?.quantity}
                    <RemoveCircleIcon
                      onClick={() => dispatch(decrementQuantity(row?.name))}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={2} />
                <TableCell colSpan={2}>Total: {sub} BDT</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      )}
    </div>
  )
}

export default Cart
