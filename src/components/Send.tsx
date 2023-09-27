import React, { useState } from "react";
import { Article } from "./Key";
import { Modal, Form, Button, Table } from "react-bootstrap";

interface SendProps {
    cartItems: Article[];
    showModal: boolean;
    closeModal: () => void;
}

const Send: React.FC<SendProps> = ({ cartItems, showModal, closeModal }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        province: "",
        phoneNumber: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {

        closeModal();
    };

    return (
        <Modal show={showModal} onHide={closeModal} dialogClassName="modal-lg">
            <Modal.Header closeButton>
                <Modal.Title>Formulario de Compra</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label htmlFor="firstName">Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            autoComplete="given-name"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="lastName">Apellido</Form.Label>
                        <Form.Control
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            autoComplete="family-name"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="address">Dirección</Form.Label>
                        <Form.Control
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            autoComplete="address-line1"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="city">Ciudad</Form.Label>
                        <Form.Control
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            autoComplete="address-level2"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="province">Provincia</Form.Label>
                        <Form.Control
                            type="text"
                            id="province"
                            name="province"
                            value={formData.province}
                            onChange={handleInputChange}
                            autoComplete="address-level1"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="phoneNumber">Teléfono de Contacto</Form.Label>
                        <Form.Control
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            autoComplete="tel"
                        />
                    </Form.Group>
                </Form>


                <Table striped hover className="responsive-table">
                    <thead>
                        <tr>
                            <th className="text-center">Código</th>
                            <th>Producto</th>
                            <th className="text-center">Cantidad</th>
                            <th className="text-end">Precio</th>
                            <th className="text-end">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id}>
                                <td className="text-center">{item.id}</td>
                                <td>{item.name}</td>
                                <td className="text-center">{item.quantity}</td>
                                <td className="text-end">${item.price}</td>
                                <td className="text-end">${item.price * item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={4}></td>
                            <td>
                                <strong>
                                    Total: $
                                    {cartItems.reduce(
                                        (total, item) => total + item.price * item.quantity,
                                        0
                                    )}
                                </strong>
                            </td>
                        </tr>
                    </tfoot>
                </Table>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={handleSubmit}>
                    Confirmar Compra
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Send;
