import React, { useState } from "react";
import { Article } from "./Key";
import { Modal, Form, Button, Table } from "react-bootstrap";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import emailjs from 'emailjs-com';

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

    const clearCart = () => {
        localStorage.removeItem("cartItems");
        localStorage.removeItem("cantidadesArticulosCarrito");
    };

    const handleSubmit = () => {

        if (
            !formData.firstName ||
            !formData.lastName ||
            !formData.address ||
            !formData.city ||
            !formData.province ||
            !formData.phoneNumber ||
            !formData.userEmail
        ) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        const doc = new jsPDF('p', 'mm', 'a4');

        doc.text('Formulario de Compra', 10, 10);

        doc.text(`Nombre: ${formData.firstName} ${formData.lastName}`, 10, 20);
        doc.text(
            `Dirección: ${formData.address}, ${formData.city}, ${formData.province}`,
            10,
            30
        );
        doc.text(`Teléfono de Contacto: ${formData.phoneNumber}`, 10, 40);

        const tableHeaders = ['Código', 'Producto', 'Cantidad', 'Precio', 'Subtotal'];
        const tableData = cartItems.map((item) => [
            item.id,
            item.name,
            item.quantity,
            `$${item.price}`,
            `$${item.price * item.quantity}`,
        ]);

        let yOffset = 70;
        const lineHeight = 10;

        autoTable(doc, {
            head: [tableHeaders],
            body: tableData,
            startY: yOffset,
            theme: 'plain',
            margin: { top: 10, right: 10, bottom: 10, left: 10 },
        });

        const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        doc.text(`Total: $${total}`, 10, yOffset + tableData.length * lineHeight + 10);

        doc.save('pedido.pdf');

        localStorage.removeItem("cartItems");
        localStorage.removeItem("cantidadesArticulosCarrito");

        window.location.reload();

        clearCart();

        closeModal();
    };

    const handleEmailSubmit = () => {
        if (!validateEmail(formData.userEmail)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        const tableHeaders = ['Código', 'Producto', 'Cantidad', 'Precio', 'Subtotal'];
        const tableData = cartItems.map((item) => [
            item.id,
            item.name,
            item.quantity,
            `$${item.price}`,
            `$${item.price * item.quantity}`,
        ]);

        const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

        const message = `
            Nombre: ${formData.firstName} ${formData.lastName}
            Dirección: ${formData.address}, ${formData.city}, ${formData.province}
            Teléfono de Contacto: ${formData.phoneNumber}
            Correo Electrónico: ${formData.userEmail}
        
            Pedido:

            ${tableHeaders.join('\t')}
            ${tableData.map(row => row.join('\t')).join('\n')}
            
            Total: $${total}
        `;

        const emailParams = {
            userEmail: formData.userEmail,
            message,
        };



        emailjs.send(serviceID, templateID, emailParams)
            .then(() => {
                alert('¡El pedido enviado por correo exitosamente!');
                setTimeout(() => {
                    clearCart();
                    window.location.reload();
                }, 1000);
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

            <Modal.Body>
                <Form>
                    <Form.Group className="row">
                        <div className="col-md-6">
                            <Form.Label htmlFor="firstName">Nombre</Form.Label>
                            <Form.Control
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
                            <Form.Label htmlFor="lastName">Apellido</Form.Label>
                            <Form.Control
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Apellido Obligatorio"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                autoComplete="family-name"
                                required
                            />
                        </div>
                    </Form.Group>

                    <Form.Group className="row">
                        <div className="col-md-4">
                            <Form.Label htmlFor="address">Dirección</Form.Label>
                            <Form.Control
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Dirección Obligatorio"
                                value={formData.address}
                                onChange={handleInputChange}
                                autoComplete="address-line1"
                                required
                            />
                        </div>
                        <div className="col-md-4">
                            <Form.Label htmlFor="city">Ciudad</Form.Label>
                            <Form.Control
                                type="text"
                                id="city"
                                name="city"
                                placeholder="Ciudad Obligatorio"
                                value={formData.city}
                                onChange={handleInputChange}
                                autoComplete="address-level2"
                                required
                            />
                        </div>
                        <div className="col-md-4">
                            <Form.Label htmlFor="province">Provincia</Form.Label>
                            <Form.Control
                                type="text"
                                id="province"
                                name="province"
                                value={formData.province}
                                placeholder="Provincia Obligatorio"
                                onChange={handleInputChange}
                                autoComplete="address-level1"
                                required
                            />
                        </div>
                    </Form.Group>

                    <Form.Group className="row">
                        <div className="col-md-6">
                            <Form.Label htmlFor="phoneNumber">Teléfono de Contacto</Form.Label>
                            <Form.Control
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="Celular sin (0) sin (15)"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                autoComplete="tel"
                                required


                            />
                        </div>

                        <div className="col-md-6">
                            <Form.Label htmlFor="userEmail">Correo Electrónico</Form.Label>
                            <Form.Control
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
                                <td className="text-end">${item.price + ",00"}</td>
                                <td className="text-end">${item.price * item.quantity + ",00"}</td>
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
                                    )},00
                                </strong>
                            </td>
                        </tr>
                    </tfoot>
                </Table>
            </Modal.Body>

            <Modal.Footer>
                <Button
                    variant="primary"
                    onClick={handleSubmit}
                    disabled={
                        !formData.firstName ||
                        !formData.lastName ||
                        !formData.address ||
                        !formData.city ||
                        !formData.province ||
                        !formData.phoneNumber ||
                        !formData.userEmail ||
                        !isEmailValid
                    }
                >
                    Descargar Pedido
                </Button>
                <Button
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
                        !isEmailValid
                    }
                >
                    Enviar Pedido por Email
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Send;
