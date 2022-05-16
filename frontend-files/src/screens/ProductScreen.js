import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import { Rating } from "../components"
const ProductScreen = () => {
    const [product, setProduct] = useState({})
    const params = useParams()
    useEffect(() => {
        const fetchProduct = async() => {
            const { data } = await axios.get(`/api/products/${params.id}`)
            setProduct(data)
        }
        fetchProduct()
    }, [params.id])

  return (
    <div>
        <Link to='/' className='btn btn-light my-3'>
            Go Back
        </Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid></Image>
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroupItem>
                        <h3>{product.name}</h3>
                    </ListGroupItem>                                       
                    <ListGroupItem>
                        <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                    </ListGroupItem>
                    <ListGroupItem>
                        Description: {product.description}
                    </ListGroupItem>
                </ListGroup>                                                 
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    Price: 
                                </Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    Status: 
                                </Col>
                                <Col>
                                    {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button className='btn-block btn-dark' type='button' disabled={product.countInStock === 0}>Add To Cart</Button>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
                
            </Col>
        </Row>

    </div>
  )
}

export { ProductScreen }