import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "./features/cartSlice";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer,
} from "mdb-react-ui-kit";



export default function ProductCard() {
  const items = useSelector((state) => state.allCart.items);
   const dispatch = useDispatch();
  return (
    <div className="m-2">
      <MDBContainer>
        <MDBRow className="mb-3">

          {
            items.map((item) => {
              return (
                <>
                  <MDBCol key={item.id} size='md'>
                    <MDBCard className="bg-dark">
                      <MDBCardImage
                        src={item.img}
                        position="top"
                        alt="..."
                      />
                      <MDBCardBody>
                        <MDBCardTitle>{item.title}</MDBCardTitle>
                        <MDBCardText>
                        {item.price}
                        </MDBCardText>
                        <MDBBtn href="#" className="fw-bold"
                        onClick={()=>dispatch(addTocart(item))}
                        >Add To Cart</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </>
              )
            })
          }
        </MDBRow>
      </MDBContainer>
    </div>
  );
}


