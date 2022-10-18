import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';

export default function Purchase(props) {

let purchases = [
    {
        "purchase_id": "300200",
        "title": "Celular LG K40",
        "price": {
            "total": 105000,
            "currency": null
        },
        "quantity": 3,
        "date": "2022-07-25T10:23:18.000-03:00",
        "image": "https://http2.mlstatic.com/D_NQ_NP_969645-MLA46877067884_072021-V.webp",
        "seller": {
            "id": 4010,
            "nickname": "FAROCUDR19"
        },
        "transaction_id": 7010200,
        "send_id": 1000010200
    },
    {
        "purchase_id": "300199",
        "title": "Apple iPhone 13 Pro Max 2565gb-incluye Cargador -1 Año Gtia.",
        "price": {
            "total": 629999.99,
            "currency": null
        },
        "quantity": 1,
        "date": "2022-07-25T10:03:18.000-03:00",
        "image": "https://http2.mlstatic.com/D_NQ_NP_753104-MLA47778455981_102021-V.webp",
        "seller": {
            "id": 4009,
            "nickname": "ELECTROMIAMI123"
        },
        "transaction_id": 7010199,
        "send_id": 1000010199
    },
    {
        "purchase_id": "300198",
        "title": "Celular Xiaomi Mi A1 Rojo Dual Sim 64 Gb 4 Gb Ram + Liberado",
        "price": {
            "total": 45998,
            "currency": null
        },
        "quantity": 2,
        "date": "2022-07-20T08:10:27.000-03:00",
        "image": "https://http2.mlstatic.com/D_NQ_NP_774489-MLA49425273867_032022-V.webp",
        "seller": {
            "id": 4008,
            "nickname": "ABC_MAC"
        },
        "transaction_id": 7010198,
        "send_id": 1000010198
    },
    {
        "purchase_id": "300197",
        "title": "Samsung Galaxy J7 Prime 32gb Celular Refabricado Liberado",
        "price": {
            "total": 69999.99,
            "currency": null
        },
        "quantity": 1,
        "date": "2022-07-19T12:17:47.000-03:00",
        "image": "https://http2.mlstatic.com/D_NQ_NP_972544-MLA44403030842_122020-V.webp",
        "seller": {
            "id": 4007,
            "nickname": "AIR-VISION"
        },
        "transaction_id": 7010197,
        "send_id": 1000010197
    },
    {
        "purchase_id": "300196",
        "title": "Celular Samsung Galaxy J7 Pro 32gb 3gb Ram Refabricado Rosa",
        "price": {
            "total": 34999.89,
            "currency": null
        },
        "quantity": 1,
        "date": "2022-07-19T10:28:59.000-03:00",
        "image": "https://http2.mlstatic.com/D_NQ_NP_976643-MLA49667022507_042022-V.webp",
        "seller": {
            "id": 4007,
            "nickname": "AIR-VISION"
        },
        "transaction_id": 7010196,
        "send_id": 1000010196
    },
    {
        "purchase_id": "300195",
        "title": "Samsung Galaxy S8 Sm-g950f Refabricado Outlet 64gb 4gb Ram",
        "price": {
            "total": 44999.99,
            "currency": null
        },
        "quantity": 1,
        "date": "2022-07-01T01:52:10.000-03:00",
        "image": "https://http2.mlstatic.com/D_NQ_NP_634516-MLA31352746382_072019-V.webp",
        "seller": {
            "id": 4007,
            "nickname": "AIR-VISION"
        },
        "transaction_id": 7010195,
        "send_id": 1000010195
    }
]

  return (
    <Card>
    <Card.Header>Mis Compras</Card.Header>
    <Table bordered>
            <thead>
                <tr>
                    <th>Compra</th>
                    <th>Fecha</th>
                    <th>Item</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Ver</th>
                </tr>
            </thead>
            <tbody>
                {purchases.map(purchase =>
                    <tr>
                        <td>{purchase.purchase_id}</td>
                        <td>{purchase.date}</td>
                        <td>{purchase.title}</td>
                        <td>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(purchase.price.total)}</td>
                        <td>{purchase.quantity}</td>
                        <td>ver</td>
                    </tr>
                )}
            </tbody>
    </Table>
    </Card>
)};




