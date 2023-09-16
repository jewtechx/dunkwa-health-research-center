import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        name: "Abraham Oduro",
        role: "Associate Director",
        qualifications: "BSc, MBChB, MSc, MA, PhD, FGCP",
        interests:"Intervention Studies, Health Systems, Diseases Control, Environmental Health, MNCHN."
    },
    {
        name: "Baffour Awuah",
        role: "Consultants and Senior Research Fellow",
        qualifications: "BSc, MBChB, FCRAD, FGCP, FWACS",
        interests:"Cancer research, Clinical Investigation,Communicable diseases, Health Systems."
    },
    {
        name: "Dr. Daniel Acorlor",
        role: "Municipal Director Of Health Services",
        qualifications: "MD, MSc",
        interests:"	Clinical Research, Maternal and Child Health, Health Systems"
    },
    {
        name: "Dr John Benjamin Annan",
        role: "Medical Superintendent & Clinical investigator",
        qualifications: "BSc, MBChB, MPH",
        interests:"Clinical Research, Clinical Trials, Surgery, Maternal and Child Health, Hospital Administration."
    },
    {
        name: "Joseph Kwadwo Larbi Opare",
        role: "Deputy Director",
        qualifications: "MD, MPH, MPhil, PhD",
        interests:"Neglected tropical diseases, Intervention studies, Health systems."
    },
    {
        name: "James Akazili",
        role: "Senior Research Fellow",
        qualifications: "BSc, MSc, PhD",
        interests:"Health care financing, equity and efficiency in health care system, Universal health care, economic evaluation."
    },
    {
        name: "Ellen Ayepa",
        role: "Research Fellow",
        qualifications: "BSc, MSc, PhD",
        interests:"Microbiology, Molecular Biology."
    },
]


export const ScienceTeam = createSlice({
    name: 'science-team',
    initialState,
    reducers:{}
})

export const ScienceTeamActions = ScienceTeam.actions
export default ScienceTeam.reducer