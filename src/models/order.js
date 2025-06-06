import mongoose from 'mongoose';

const { Schema } = mongoose;

const orderSchema = new Schema({
	orderNumber: {
		type: Number,
		required: true,
	},
	product: {
		type: String,
		required: true,
	},
	client: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Client',
		required: true,
	},
	contact: {
		type: [
			{
				name: {
					type: String,
				},
				phone: {
					type: String,
				},
				email: {
					type: String,
				},
			},
		],
	},
	deliveryData: {
		type: String,
	},
	status: {
		type: String,
		enum: [
			'Abierta',
			'Aceptada',
			'Detenida',
			'Para facturar',
			'Para enviar',
			'Finalizada',
		],
	},
	scheme: {
		link: { type: String },
		files: {
			type: [
				{
					name: { type: String },
					size: { type: Number },
					type: { type: String },
				},
			],
		},
	},
	dateCreated: {
		type: Date,
		required: true,
	},
	dateEstimate: {
		type: Date,
	},
	dateFinal: {
		type: Date,
	},
	descriptionClient: {
		type: String,
	},
	descriptionWork: {
		type: String,
	},
	descriptionPrivate: {
		type: String,
	},
	tasks: [{ type: Object }],
	stationsList: [
		{
			station: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Operation',
			},
			completed: { type: Boolean, default: false },
			number: { type: Number },
		},
	],
	budgetEstimate: {
		type: Number,
	},
	budget: {
		type: Number,
		required: true,
	},
	comments: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Comment',
	},
	deviation: {
		type: String,
	},
	bill: {
		date: { type: String },
		number: { type: String },
	},
	fields: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'OrderFields',
	},
});

export default mongoose.model('Order', orderSchema);
