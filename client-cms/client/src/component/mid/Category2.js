import { Card, Grid, Row, Text } from "@nextui-org/react";
import cat1 from "./images/cat1.jpg";
import cat2 from "./images/cat2.jpg";
import cat3 from "./images/cat3.jpg";
import cat4 from "./images/cat4.jpg";
import cat5 from "./images/cat5.jpg";
import cat6 from "./images/cat6.jpg";
import cat7 from "./images/cat7.jpg";
export default function Category2() {
  const list = [
    {
      title: "Tshirt",
      img: cat1,
      price: "$5.50",
    },
    {
      title: "Pants",
      img: cat2,
      price: "$3.00",
    },
    {
      title: "Shoes",
      img: cat3,
      price: "$10.00",
    },
    {
      title: "Hoodies",
      img: cat4,
      price: "$5.30",
    },
    {
      title: "Spots wear",
      img: cat5,
      price: "$5.30",
    },
    {
      title: "Traditional wear",
      img: cat6,
      price: "$5.30",
    },
    {
      title: "Accessories",
      img: cat7,
      price: "$5.50",
    },
  ];

  return (
    <div className="">
      <h1 className="text-center p-3 Auth-form-title">Category</h1>
      <Grid.Container gap={2} justify="flex-start">
        {list.map((item, index) => (
          <Grid xs={6} sm={3} key={index} className=" mt-5">
            <Card isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={item.img}
                  objectFit="cover"
                  width="100%"
                  height={180}
                  alt={item.title}
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{item.title}</Text>
                  <Text
                    css={{
                      color: "$accents7",
                      fontWeight: "$semibold",
                      fontSize: "$sm",
                    }}
                  ></Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
}
