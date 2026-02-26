import { observe } from "./JS/observer.js"
import { DarkMode } from "./JS/darkmode.js"
import { CreateJob, DeleteJob, EditJob, ListJobs, ViewJob } from "./JS/jobs.js"
import { DeleteAccount, EditProfile, Login, Register, viewPassword, ViewProfile } from "./JS/profile.js"
import { modifierCandidatures } from "./JS/modifierCandidatures.js"
import { afficherCandidatures } from "./JS/afficherCandidatures.js"
import { nouvelleCandidatures } from "./JS/nouvelleCandidatures.js"

observe()

// Toggle Dark Theme function
DarkMode()

// Profile actions
// Login()
// Register()

// ViewProfile()
// EditProfile() /* --- */
// DeleteAccount()

// // Job actions
// ListJobs()
// CreateJob()
// ViewJob()
// EditJob()
// DeleteJob()

// modifierCandidatures()
// afficherCandidatures()

// Company actions


// Status actions


// Type actions
    const btn = document.getElementById("loginForm").addEventListener("submit",Login)
