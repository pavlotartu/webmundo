import React, { useState } from "react";
import { Article } from "./Key";
import { Modal, Form, Button, Table } from "react-bootstrap";
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";

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
        userEmail: "",
    });

    const [isEmailValid, setIsEmailValid] = useState(false);
    const [recaptchaValue, setRecaptchaValue] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "userEmail") {
            setIsEmailValid(validateEmail(value));
        }

        if (name === "phoneNumber") {
            if (!/^[0-9]{0,10}$/.test(value)) {
                alert('Por favor, ingrese un número de teléfono sin (0) sin(15)');
                return;
            }
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRecaptchaChange = (value: string | null) => {
        setRecaptchaValue(value || "");
    };

    const clearCart = () => {
        localStorage.removeItem("cartItems");
        localStorage.removeItem("cantidadesArticulosCarrito");
    };


    const handleEmailSubmit = () => {
        if (!validateEmail(formData.userEmail)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        const tableData = cartItems.map((item) => `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
        </tr>
    `).join('');

        const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

        const emailParams = {
            userEmail: formData.userEmail,
            firstName: formData.firstName,
            lastName: formData.lastName,
            address: formData.address,
            city: formData.city,
            province: formData.province,
            phoneNumber: formData.phoneNumber,
            tableData: tableData,
            total: total
        };

/* credenciales */

        emailjs.send(serviceID, templateID, emailParams)
            .then(() => {
                alert('¡El pedido enviado por correo exitosamente!');
                setTimeout(() => {
                    clearCart();
                    window.location.reload();
                }, 300);
            })
            .catch((error) => {
                alert('Hubo un error al enviar el pedido por correo: ' + error);
            });
    };

    function validateEmail(email: string) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    return (
        <Modal show={showModal} onHide={closeModal} dialogClassName="modal-lg">
            <Modal.Header closeButton>
                <Modal.Title>Formulario de Compra</Modal.Title>
            </Modal.Header>

            <Form className="mx-3">
                <Form.Group className="row mt-3">
                    <div className="col-md-6">
                        <Form.Label htmlFor="firstName" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}> <strong>Nombre</strong> </Form.Label>
                        <Form.Control
                            style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Nombre Obligatorio"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            autoComplete="given-name"
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <Form.Label htmlFor="lastName" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}> <strong>Apellido</strong></Form.Label>
                        <Form.Control style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Apellido Obligatorio"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            autoComplete="family-name"
                            required />
                    </div>
                </Form.Group>

                <Form.Group className="row mt-2">
                    <div className="col-md-4">
                        <Form.Label htmlFor="address" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}> <strong>Dirección</strong></Form.Label>
                        <Form.Control style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Dirección Obligatorio"
                            value={formData.address}
                            onChange={handleInputChange}
                            autoComplete="address-line1"
                            required />
                    </div>
                    <div className="col-md-4">
                        <Form.Label htmlFor="city"> <strong>Ciudad</strong></Form.Label>
                        <Form.Control style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Ciudad Obligatorio"
                            value={formData.city}
                            onChange={handleInputChange}
                            autoComplete="address-level2"
                            required />
                    </div>
                    <div className="col-md-4">
                        <Form.Label htmlFor="province" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}> <strong>Provincia</strong></Form.Label>
                        <Form.Control style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}
                            type="text"
                            id="province"
                            name="province"
                            value={formData.province}
                            placeholder="Provincia Obligatorio"
                            onChange={handleInputChange}
                            autoComplete="address-level1"
                            required />
                    </div>
                </Form.Group>

                <Form.Group className="row mt-2">
                    <div className="col-md-6">
                        <Form.Label htmlFor="phoneNumber" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}> <strong>Teléfono de Contacto</strong></Form.Label>
                        <Form.Control style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="Celular sin (0) sin (15)"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            autoComplete="tel"
                            required />
                    </div>

                    <div className="col-md-6">
                        <Form.Label htmlFor="userEmail" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}> <strong>Correo Electrónico</strong> </Form.Label>
                        <Form.Control style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}
                            type="email"
                            id="userEmail"
                            name="userEmail"
                            placeholder="Email Obligatorio ejemplo@gmail.com "
                            value={formData.userEmail}
                            onChange={handleInputChange}
                            autoComplete="email"
                            required
                        />
                    </div>
                </Form.Group>
            </Form>

            <Modal.Body>
                <div className="table-responsive">
                    <Table striped hover className=" my-4">
                        <thead>
                            <tr style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                                <th className="text-center">Código</th>
                                <th className="productosend">Producto</th>
                                <th className="text-center">Cantidad</th>
                                <th className="text-end">Precio</th>
                                <th className="text-end">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id} style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
                                    <td className="text-center">{item.id}</td>
                                    <td>{item.name}</td>
                                    <td className="text-center">{item.quantity}</td>
                                    <td className="text-end">${item.price.toFixed(2)}</td>
                                    <td className="text-end">${(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                                <td colSpan={3}></td>
                                <td colSpan={2}>
                                    <strong>
                                        Total: $
                                        {cartItems
                                            .reduce((total, item) => total + item.price * item.quantity, 0)
                                            .toFixed(2)}
                                    </strong>
                                </td>
                            </tr>
                        </tfoot>
                    </Table>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <div className="d-flex flex-column align-items-end">
                    <ReCAPTCHA
                        className="m-1"
                        sitekey="/* credenciales */"
                        onChange={handleRecaptchaChange}
                    />

                    <Button
                        className="m-1"
                        style={{
                            fontFamily: 'Open Sans, sans-serif',
                            fontWeight: 400,
                            fontStyle: 'italic',
                        }}
                        variant="success"
                        onClick={handleEmailSubmit}
                        disabled={
                            !formData.firstName ||
                            !formData.lastName ||
                            !formData.address ||
                            !formData.city ||
                            !formData.province ||
                            !formData.phoneNumber ||
                            !formData.userEmail ||
                            !isEmailValid ||
                            !recaptchaValue
                        }
                    >
                        Enviar Pedido
                    </Button>
                </div>
            </Modal.Footer>

        </Modal>
    );
};

export default Send;