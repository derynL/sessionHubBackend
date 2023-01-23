import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    userId: { type: String, default: "" },
    yourProfile: {
        personalInfo: {
            name: {
                firstName: { type: String, default: "" },
                lastName: { type: String, default: "" }
            },
            personalEmail: { type: String, default: "" },
            displayEmail: { type: String, default: "" },
            website: { type: String, default: "" },
            socials: { type: String, default: "" },
            phoneNumber: { type: String, default: "" }
        },
        summary: {
            qualification: { type: String, default: "" },
            sessionExperience: { type: String, default: "" },         //This is also an array
            achievements: { type: String, default: "" }    //And so is this
        }
    },
    yourRecordings: {

        track1: {
            trackName: { type: String, default: "" }
            trackUrl: { type: String, default: "" }
        },
        track2: {
            trackName: { type: String, default: "" }
            trackUrl: { type: String, default: "" }
        },
        track3: {
            trackName: { type: String, default: "" }
            trackUrl: { type: String, default: "" }
        },

    },
    video: { type: String, default: "" }
})

export default mongoose.model(`Profile`, profileSchema);