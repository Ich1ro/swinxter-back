const { mongoose, Schema } = require('mongoose');

const MediaSchema = new Schema({
	image: { type: String, required: true },
	description: { type: String },
	uploadedAt: { type: Date, default: Date.now },
	isPublic: { type: Boolean },
});

const VideoSchema = new Schema({
	video: { type: String, required: true },
	description: { type: String },
	uploadedAt: { type: Date, default: Date.now },
	isPublic: { type: Boolean },
});

const GeoSchema = new Schema({
	type: {
		type: String,
		enum: ['Point'],
	},
	coordinates: [Number]
});

const UserSchema = new mongoose.Schema(
	{
		profile_type: {
			type: String,
			default: 'single',
			enum: ['single', 'couple'],
		},
		firstName: { type: String },
		lastName: { type: String },
		email: { type: String, unique: true },
		username: { type: String, unique: true },
		password: { type: String },
		privatePassword: { type: String },
		payment: {
			membership: { type: Boolean, default: false },
			last_payment: { type: String },
			membership_plan: { type: String },
			membership_expiry: { type: String },
			membership_price: { type: String },
			membership_pause: { type: Boolean, default: false },
		},
		DOB: { type: String },
		notifications: [{ type: Schema.Types.ObjectId, ref: 'notifications' }],
		lastNotificationCount: { type: Number },
		friends: { type: Array },
		sent_requests: { type: Array },
		viewedMe: { type: Array },
		friend_requests: { type: Array },
		blocked_users: { type: Array },
		blockedby: { type: Array },
		superlike: {
			sent: [
				{
					userId: { type: String },
					cooldown: { type: String },
				},
			],
			recieved: { type: Array },
		},
		relocate: { type: Boolean, default: false },
		introduction: { type: String },
		image: { type: String, default: '' },
		interests: {
			male_male: [String],
			female_female: [String],
			male_female: [String],
			male: [String],
			female: [String],
			transgender: [String],
		},
		marital_status: { type: String },
		slogan: { type: String },
		stream_token: { type: String },
		speaks: { type: String },
		race: { type: String },
		distance: { type: String },
		sexual_orientation: { type: String },
		looking_for: { type: String },
		age: { type: String },
		role: { type: String, default: 'user', enum: ['user', 'model', 'admin'] },
		gender: { type: String },
		body_hair: [{ type: String }],
		height: { type: String },
		weight: { type: String },
		body_type: { type: String },
		ethnic_background: { type: String },
		smoking: { type: String },
		tattoos: { type: String },
		Drinking: { type: String },
		Relationship: { type: String },
		Drugs: { type: String },
		Language: { type: String },
		sessionExpiry: { type: Date, default: null },
		piercings: { type: String },
		language: { type: String },
		circumcised: { type: String },
		looks_important: { type: String },
		intelligence: { type: String },
		sexuality: { type: String },
		relationship_status: { type: String },
		experience: { type: String },
		country: { type: String },
		booking_by: { type: String },
		booking_price: { type: String },
		followers: [{ type: String }],
		paymentUser: { type: String },
		album: [{ type: String }],
		mymedia: [MediaSchema],
		images: [{ type: String }],
		videos: [VideoSchema],
		isLive: { type: Boolean, default: false },
		favouriteModels: [String],
		commission: { type: String },
		wallet: { type: Number, default: 0 },
		isVerify: { type: Boolean, default: false },
		isAccountVerify: { type: Boolean, default: false },
		verificationId: { type: Schema.Types.ObjectId, ref: "Vefification" },
		isVerificationPaid: { type: Boolean, default: false },
		modelVerify: { type: Boolean, default: false },
		otp: { type: String },
		personName: { type: String },
		location: {
			state: { type: String },
			city: { type: String },
			country: { type: String }
		},
		geometry: GeoSchema,

		couple: {
			person1: {
				gender: { type: String },
				DOB: { type: String },
				body_hair: [{ type: String }],
				height: { type: String },
				weight: { type: String },
				body_type: { type: String },
				ethnic_background: { type: String },
				smoking: { type: String },
				tattoos: { type: String },
				piercings: { type: String },
				language: { type: String },
				circumcised: { type: String },
				looks_important: { type: String },
				intelligence: { type: String },
				sexuality: { type: String },
				relationship_status: { type: String },
				experience: { type: String },
				person1_Name: { type: String },
				Drinking: { type: String },
				Relationship: { type: String },
				Drugs: { type: String },
				Language: { type: String },
				isVerify: { type: Boolean, default: false },
			},
			person2: {
				gender: { type: String },
				DOB: { type: String },
				body_hair: [{ type: String }],
				height: { type: String },
				weight: { type: String },
				body_type: { type: String },
				ethnic_background: { type: String },
				smoking: { type: String },
				tattoos: { type: String },
				piercings: { type: String },
				language: { type: String },
				circumcised: { type: String },
				looks_important: { type: String },
				intelligence: { type: String },
				sexuality: { type: String },
				relationship_status: { type: String },
				experience: { type: String },
				person2_Name: { type: String },
				Drinking: { type: String },
				Relationship: { type: String },
				Drugs: { type: String },
				Language: { type: String },
				isVerify: { type: Boolean, default: false },
			},
		},
		isLogged: { type: Boolean, default: false },
	},
	{
		timestamps: true,
	}
);
UserSchema.index({ geometry: '2dsphere' });

const User = mongoose.model('User', UserSchema);

module.exports = User;
