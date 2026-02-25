import { DarkMode } from "./JS/darkmode.js"
import { CreateJob, DeleteJob, EditJob, ListJobs, ViewJob } from "./JS/jobs.js"
import { Login } from "./JS/login.js"
import { observe } from "./JS/observer.js"
import { DeleteAccount, EditProfile, ViewProfile } from "./JS/profile.js"
import { Register } from "./JS/register.js"
import { modifierCandidatures } from "./JS/modifierCandidatures.js"
import { afficherCandidatures } from "./JS/afficherCandidatures.js"

observe()

// Toggle Dark Theme function
DarkMode()

// Profile actions
Login()
Register()

ViewProfile()
EditProfile()
DeleteAccount()

// Job actions
ListJobs()
CreateJob()
ViewJob()
EditJob()
DeleteJob()

modifierCandidatures()
afficherCandidatures()

// Company actions


// Status actions


// Type actions