import express from 'express';
import orderController from '../controllers/order.js';

const router = express.Router();

router
	.get('/', orderController.getAllOrders)
	.get('/active', orderController.getActiveOrders)
	.get('/page', orderController.getOrdersByPage)
	.get('/filtered', orderController.getFilteredOrders)
	.get(
		'/number/:orderNumber',
		orderController.getOrderByOrderNumber
	)
	.get('/:id', orderController.getOrderById)
	.post('/', orderController.createOrder)
	.put('/:id', orderController.updateOrder)
	.delete('/all', orderController.deleteAll)
	.delete('/:id', orderController.deleteOrder);

export default router;
